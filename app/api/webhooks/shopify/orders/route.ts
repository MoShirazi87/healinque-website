import { NextResponse } from "next/server";
import crypto from "crypto";
import { healthieRequest } from "@/lib/healthie/client";

/**
 * Shopify Order Webhook Handler
 * 
 * This webhook receives order notifications from Shopify and syncs them to Healthie.
 * 
 * Flow:
 * 1. Verify webhook signature
 * 2. Check if patient exists in Healthie by email
 * 3. If not, create patient in Healthie
 * 4. Add order note to patient record
 * 5. Handle vendor-based order splitting for dropship fulfillment
 * 
 * Setup in Shopify:
 * 1. Go to Settings > Notifications > Webhooks
 * 2. Create webhook for "Order creation" and "Order paid"
 * 3. Point to: https://yourdomain.com/api/webhooks/shopify/orders
 * 4. Set SHOPIFY_WEBHOOK_SECRET in environment variables
 */

const SHOPIFY_WEBHOOK_SECRET = process.env.SHOPIFY_WEBHOOK_SECRET || "";
const HEALTHIE_API_URL = process.env.HEALTHIE_API_URL || "";
const HEALTHIE_API_KEY = process.env.HEALTHIE_API_KEY || "";

interface ShopifyOrder {
  id: number;
  order_number: number;
  email: string;
  customer: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    phone?: string;
  };
  line_items: Array<{
    id: number;
    title: string;
    quantity: number;
    price: string;
    sku?: string;
    product_id: number;
    variant_id: number;
    vendor: string;
    fulfillment_status?: string;
    properties: Array<{
      name: string;
      value: string;
    }>;
  }>;
  total_price: string;
  subtotal_price: string;
  total_tax: string;
  currency: string;
  fulfillment_status?: string;
  financial_status: string;
  created_at: string;
  note?: string;
  tags: string;
  shipping_address?: {
    first_name: string;
    last_name: string;
    address1: string;
    address2?: string;
    city: string;
    province: string;
    zip: string;
    country: string;
    phone?: string;
  };
}

// Verify Shopify webhook signature
function verifyShopifyWebhook(body: string, signature: string): boolean {
  if (!SHOPIFY_WEBHOOK_SECRET) {
    console.warn("SHOPIFY_WEBHOOK_SECRET not set, skipping verification in development");
    return process.env.NODE_ENV === "development";
  }

  const hmac = crypto
    .createHmac("sha256", SHOPIFY_WEBHOOK_SECRET)
    .update(body, "utf8")
    .digest("base64");

  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(hmac)
    );
  } catch {
    return false;
  }
}

// GraphQL queries for Healthie
const FIND_PATIENT_QUERY = `
  query FindPatient($email: String!) {
    users(email: $email, is_patient: true) {
      id
      email
      first_name
      last_name
    }
  }
`;

const CREATE_PATIENT_MUTATION = `
  mutation CreatePatient($input: createClientInput!) {
    createClient(input: $input) {
      user {
        id
        email
        first_name
        last_name
      }
    }
  }
`;

const CREATE_NOTE_MUTATION = `
  mutation CreateNote($input: createNoteInput!) {
    createNote(input: $input) {
      note {
        id
      }
    }
  }
`;

interface HealthiePatient {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
}

/**
 * Find or create a patient in Healthie by email
 */
async function findOrCreateHealthiePatient(
  email: string,
  firstName: string,
  lastName: string,
  phone?: string
): Promise<HealthiePatient | null> {
  if (!HEALTHIE_API_URL || !HEALTHIE_API_KEY) {
    console.log("Healthie API not configured, skipping patient sync");
    return null;
  }

  try {
    // First, try to find existing patient
    const findResponse = await fetch(HEALTHIE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${HEALTHIE_API_KEY}`,
      },
      body: JSON.stringify({
        query: FIND_PATIENT_QUERY,
        variables: { email },
      }),
    });

    const findData = await findResponse.json();
    const existingPatient = findData.data?.users?.[0];

    if (existingPatient) {
      console.log(`Found existing Healthie patient: ${existingPatient.id}`);
      return existingPatient;
    }

    // Patient not found, create new one
    console.log(`Creating new Healthie patient for email: ${email}`);
    
    const createResponse = await fetch(HEALTHIE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${HEALTHIE_API_KEY}`,
      },
      body: JSON.stringify({
        query: CREATE_PATIENT_MUTATION,
        variables: {
          input: {
            email,
            first_name: firstName,
            last_name: lastName,
            phone_number: phone,
            // Generate a random password - patient will need to reset
            // Or you can set up passwordless login via Healthie
            skip_email: true, // Don't send welcome email, we'll handle onboarding
          },
        },
      }),
    });

    const createData = await createResponse.json();
    
    if (createData.errors) {
      console.error("Error creating Healthie patient:", createData.errors);
      return null;
    }

    const newPatient = createData.data?.createClient?.user;
    if (newPatient) {
      console.log(`Created new Healthie patient: ${newPatient.id}`);
      return newPatient;
    }

    return null;
  } catch (error) {
    console.error("Error in findOrCreateHealthiePatient:", error);
    return null;
  }
}

/**
 * Add order note to patient record in Healthie
 */
async function addOrderNoteToHealthie(
  patientId: string,
  order: ShopifyOrder
): Promise<void> {
  if (!HEALTHIE_API_URL || !HEALTHIE_API_KEY) {
    return;
  }

  // Build order summary
  const orderSummary = order.line_items
    .map((item) => `• ${item.quantity}x ${item.title} ($${item.price}) [${item.vendor}]`)
    .join("\n");

  // Categorize items by vendor for fulfillment
  const vendorGroups: Record<string, typeof order.line_items> = {};
  order.line_items.forEach((item) => {
    const vendor = item.vendor || "Healinque";
    if (!vendorGroups[vendor]) {
      vendorGroups[vendor] = [];
    }
    vendorGroups[vendor].push(item);
  });

  const vendorSummary = Object.entries(vendorGroups)
    .map(([vendor, items]) => `${vendor}: ${items.length} item(s)`)
    .join(", ");

  const noteContent = `
📦 **Shopify Order #${order.order_number}**
📅 Date: ${new Date(order.created_at).toLocaleDateString()}
💳 Status: ${order.financial_status}
📬 Fulfillment: ${order.fulfillment_status || "Unfulfilled"}

**Items:**
${orderSummary}

**Total:** $${order.total_price} ${order.currency}

**Fulfillment Split:** ${vendorSummary}

${order.note ? `**Customer Note:** ${order.note}` : ""}

---
*This note was automatically created from Shopify order webhook.*
*Credits/services should be manually updated if applicable.*
  `.trim();

  try {
    await fetch(HEALTHIE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${HEALTHIE_API_KEY}`,
      },
      body: JSON.stringify({
        query: CREATE_NOTE_MUTATION,
        variables: {
          input: {
            user_id: patientId,
            content: noteContent,
          },
        },
      }),
    });

    console.log(`Added order note to Healthie patient ${patientId}`);
  } catch (error) {
    console.error("Error adding order note to Healthie:", error);
  }
}

/**
 * Process Shopify order webhook
 */
async function processShopifyOrder(order: ShopifyOrder): Promise<void> {
  const email = order.email || order.customer?.email;
  
  if (!email) {
    console.warn(`Order ${order.id} has no email, skipping Healthie sync`);
    return;
  }

  const firstName = order.customer?.first_name || 
                   order.shipping_address?.first_name || 
                   "Unknown";
  const lastName = order.customer?.last_name || 
                  order.shipping_address?.last_name || 
                  "Customer";
  const phone = order.customer?.phone || order.shipping_address?.phone;

  // Find or create patient in Healthie
  const patient = await findOrCreateHealthiePatient(
    email,
    firstName,
    lastName,
    phone
  );

  if (patient) {
    // Add order note to patient record
    await addOrderNoteToHealthie(patient.id, order);
  }

  // Log vendor split for fulfillment tracking
  const dropshipItems = order.line_items.filter(
    (item) => item.vendor && item.vendor.toLowerCase() !== "healinque"
  );

  if (dropshipItems.length > 0) {
    console.log(`Order ${order.order_number} contains dropship items:`);
    dropshipItems.forEach((item) => {
      console.log(`  - ${item.title} -> ${item.vendor}`);
    });
    
    // In a full implementation, you would:
    // 1. Send to Blanka API for Blanka items
    // 2. Send to Fullscript API for supplement items
    // 3. Keep Healinque items for internal fulfillment
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.text();
    const signature = request.headers.get("X-Shopify-Hmac-SHA256") || "";

    // Verify webhook signature
    if (!verifyShopifyWebhook(body, signature)) {
      console.error("Invalid Shopify webhook signature");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 401 }
      );
    }

    const order: ShopifyOrder = JSON.parse(body);
    const topic = request.headers.get("X-Shopify-Topic");

    console.log(`Received Shopify webhook: ${topic} for order ${order.order_number || order.id}`);

    // Process order based on topic
    switch (topic) {
      case "orders/create":
      case "orders/paid":
        // Only process paid orders or new orders that are already paid
        if (order.financial_status === "paid" || topic === "orders/paid") {
          await processShopifyOrder(order);
        }
        break;
        
      case "orders/updated":
        // Could handle order updates (refunds, cancellations, etc.)
        console.log(`Order ${order.order_number} updated: ${order.financial_status}`);
        break;
        
      default:
        console.log(`Unhandled webhook topic: ${topic}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}

// Shopify sends GET request to verify webhook endpoint
export async function GET() {
  return NextResponse.json({ 
    status: "ok",
    message: "Shopify webhook endpoint ready",
    configured: {
      healthie: !!HEALTHIE_API_URL && !!HEALTHIE_API_KEY,
      webhookSecret: !!SHOPIFY_WEBHOOK_SECRET,
    },
  });
}
