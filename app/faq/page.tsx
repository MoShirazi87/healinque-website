import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { PageHero as Hero } from "@/components/sections/hero";
import { FAQSection } from "@/components/sections/faq";
import { Button } from "@/components/ui/button";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";
import { FAQSchema, BreadcrumbSchema } from "@/components/seo/schema";

const faqCategories = [
  {
    title: "General & First-Time Patients",
    label: "Getting Started",
    faqs: [
      {
        question: "What is Healinque?",
        answer:
          "Healinque is a physician-led aesthetic and longevity practice in Poway, CA, founded by Dr. Azadeh Shirazi, MD. I combine aesthetic medicine with a whole-person perspective — treating how you look and how you feel. Treatments are performed by me or by one of the nurse practitioners or physician assistants I've personally trained.",
      },
      {
        question: "What makes Healinque different from a medical spa?",
        answer:
          "Medical spas vary widely. At Healinque, every treatment plan starts with a clinical assessment — not a sales menu. I have 20+ years of clinical experience in internal medicine and 10+ years in aesthetic medicine. I don't delegate to unsupervised technicians. Every treatment is personally reviewed and overseen by me.",
      },
      {
        question: "Do I need a referral to book an appointment?",
        answer:
          "No referral needed. You can book directly through my website, call or text (858) 337-7999, or email AzadehMD@gmail.com. I welcome new patients and am happy to answer questions before your first visit.",
      },
      {
        question: "Do I need to be a certain age to have treatments?",
        answer:
          "Most aesthetic treatments are appropriate for adults 18+. For patients under 21, I discuss goals carefully and may recommend conservative, skincare-first approaches. Botox and fillers are FDA-approved for adults. There's no upper age limit—many of my patients are in their 60s and 70s.",
      },
      {
        question: "What should I expect during my first consultation?",
        answer:
          "Your first visit is a comprehensive 60–90 minute consultation. I review your medical history, examine your facial anatomy, discuss your goals, and assess your skin. I then create a personalized treatment plan—layered and conservative. There's no pressure to commit to anything on the first visit. The $100 consultation fee is credited toward any treatment you schedule.",
      },
      {
        question: "Can I come in just for a consultation without committing to treatment?",
        answer:
          "Absolutely. Many patients come in to learn about options and leave with a plan they can think about. There's no obligation. I'd rather you feel informed and comfortable than rushed into a decision.",
      },
      {
        question: "What's your cancellation policy?",
        answer:
          "I ask for 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may incur a fee. I understand life happens—just give me a call as soon as you know you need to change your appointment.",
      },
      {
        question: "Is Healinque accepting new patients?",
        answer:
          "Yes, I am currently accepting new patients. Book online, call, or text (858) 337-7999. I typically schedule new consultations within 1-2 weeks.",
      },
    ],
  },
  {
    title: "Appointments & Consultations",
    label: "Scheduling & Visits",
    faqs: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book through my website at healinque.com/book, call or text (858) 337-7999, or email AzadehMD@gmail.com. I'll confirm your appointment within one business day.",
      },
      {
        question: "What are your hours?",
        answer:
          "Monday, Wednesday, Friday: 10:00 AM – 12:00 PM and 1:00 PM – 6:00 PM. Saturday: 10:00 AM – 1:00 PM. Tuesday, Thursday, and Sunday: Closed. Men's Clinic: Fridays (by appointment).",
      },
      {
        question: "Where are you located?",
        answer:
          "15644 Pomerado Road, Suite 103, Poway, CA 92064. I serve patients from Poway, Rancho Bernardo, Scripps Ranch, Escondido, San Marcos, and Del Mar. Most patients are within a 15-25 minute drive.",
      },
      {
        question: "Is there parking available?",
        answer:
          "Yes, free parking is available directly in front of the suite. The building is easily accessible from Pomerado Road with no parking stress.",
      },
      {
        question: "How long does a typical appointment take?",
        answer:
          "Initial consultations: 60-90 minutes. Botox appointments: 15-30 minutes. Filler appointments: 30-60 minutes. Microneedling: 60-90 minutes. Chemical peels: 30-45 minutes. I never rush—I'd rather take my time and get it right.",
      },
      {
        question: "Can I book multiple treatments in one visit?",
        answer:
          "Often, yes. Botox + filler in the same session is common. Microneedling + PRP is designed as a combined treatment. Some combinations require spacing (e.g., peel + laser). I'll discuss what's safe to combine during your consultation.",
      },
      {
        question: "Do you offer virtual consultations?",
        answer:
          "I offer virtual consultations for initial discussions about treatment options, especially for patients driving from further away. However, a hands-on assessment is required before any treatment. Virtual consults help me determine if you're a good candidate and what to plan for your in-person visit.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer:
          "Bring a valid photo ID, your current medication list (including supplements), and any relevant medical records. If you have photos of how your skin or face looked a few years ago, those can be helpful for treatment planning. Come with a clean face if possible (no makeup for skin assessments).",
      },
    ],
  },
  {
    title: "Injectables (Botox, Dysport, Fillers)",
    label: "Injectable Treatments",
    faqs: [
      {
        question: "How many units of Botox do I typically need?",
        answer:
          "This varies widely based on your muscle mass and how expressive you are. I typically recommend 20-24 units for forehead, 20 units for 11s (lines between brows), and 24 units for crow's feet—but results vary. Men often need 20-30% more due to stronger facial muscles. During your consultation, I'll assess your anatomy and discuss your specific needs.",
      },
      {
        question: "Will I look frozen after Botox?",
        answer:
          "No. My approach is natural-looking results — I'm aiming to smooth dynamic lines while preserving your expressions. Botox is a tool; the artistry is in the dose and placement. I see patients who want barely-there softening, and others who want more dramatic results. I discuss your goals upfront so there's no surprise.",
      },
      {
        question: "What's the difference between Botox and Dysport?",
        answer:
          "Both are neurotoxins that relax facial muscles, but Dysport spreads slightly more and may diffuse to adjacent muscles. Results appear faster (3-5 days vs. 3-7 for Botox) but may not last quite as long (3-4 months vs. 3-4 months—very similar). Dysport costs less per unit ($4.50 vs. $12 for Botox at Healinque), so it can be budget-friendly. Some patients prefer one over the other, and I offer both.",
      },
      {
        question: "How long do fillers last?",
        answer:
          "Longevity varies by filler type and location. Hyaluronic acid fillers (like Juvederm) typically last 6-12 months in lips and 12-18 months in cheeks. Thicker fillers last longer. Results vary based on your metabolism and injection depth. I typically recommend a touch-up at 6-9 months to maintain results.",
      },
      {
        question: "Can fillers be dissolved if I don't like them?",
        answer:
          "Yes. Hyaluronic acid fillers can be dissolved with hyaluronidase (an enzyme), usually within 24 hours. This is a safety net if you want to proceed slowly or if something doesn't feel right. Not all fillers are reversible, but I use products that are.",
      },
      {
        question: "Can I get injectables if I'm pregnant or breastfeeding?",
        answer:
          "I recommend deferring elective injectables until after pregnancy and breastfeeding, as safety data is limited. However, if you have a specific medical concern (like TMJ pain from masseter tension), I can discuss options. Always tell me upfront if you're pregnant or nursing.",
      },
      {
        question: "What is masseter Botox and when might you recommend it?",
        answer:
          "Masseter Botox relaxes the chewing muscle (masseter) in the jaw, which can reduce jawline tension and pain from TMJ disorder. It's also used cosmetically to narrow a square jawline. Note: This is an off-label use of Botox (FDA approves it for other indications), so I discuss informed consent fully with every patient. Results take 2-3 weeks and improve over a month.",
      },
      {
        question: "What are signs I should call you immediately after injectables?",
        answer:
          "Severe pain (especially around the eye or forehead), vision changes, blanching or whitening of skin, or spreading swelling hours after treatment can indicate vascular occlusion (filler in a blood vessel). This is rare but serious. Call me immediately if this happens—I have protocols to address it.",
      },
      {
        question: "Is preventative Botox in your 20s a good idea?",
        answer:
          "This is a case-by-case discussion. If you have very expressive skin and dynamic lines forming early, preventative low-dose Botox might make sense. But for most people in their 20s, a solid skincare routine (sunscreen, retinoids, hydration) is more important. I'd rather see you start at 25-30 with a clear need than use preventatively without strong indicators.",
      },
      {
        question: "Why do you charge per unit for Botox instead of a flat rate?",
        answer:
          "Per-unit pricing is transparent—you pay for the exact amount used. Some clinics use a flat rate and may over-inject to maximize profit, or under-inject to cut costs. I charge $12/unit so you know exactly what you're getting. For most forehead/11s/crow's feet, expect 60-80 units total.",
      },
    ],
  },
  {
    title: "Skin Treatments (Microneedling, Peels, Laser)",
    label: "Resurfacing & Rejuvenation",
    faqs: [
      {
        question: "What's the difference between microneedling and laser?",
        answer:
          "Microneedling (like SkinPen) uses tiny needles to create controlled micro-injuries, triggering collagen production—great for texture, acne scars, and fine lines. Laser uses light energy to remove damaged skin layers or coagulate vessels. Lasers have more downtime but faster results. I often recommend microneedling for darker skin tones to minimize burn risk. Results vary by device and your skin.",
      },
      {
        question: "How many microneedling sessions do I need for acne scars?",
        answer:
          "Most patients see improvement after 3-6 sessions spaced 4-6 weeks apart. Deep boxcar scars may need 8-10. I assess the depth and type during your consultation—rolling scars respond better than tethered scars. Combining microneedling with PRP (your own platelet-rich plasma) can accelerate collagen remodeling.",
      },
      {
        question: "Can microneedling worsen melasma?",
        answer:
          "Yes, if not done carefully. Aggressive needling or inflammation can trigger melasma in predisposed skin, especially in patients of color. I use lower depths and shorter treatment windows for melasma-prone patients, and I recommend strict sun protection year-round. Pre-treatment with hydroquinone or retinoids may help. This is why personalized assessment is essential.",
      },
      {
        question: "When can I use retinoids after a peel or microneedling?",
        answer:
          "After a light peel or microneedling, wait 3-5 days before reintroducing retinoids—your skin will be sensitive. Start low (like a gentle retinol serum) rather than prescription strength. After more aggressive laser, I usually recommend waiting 1-2 weeks. I'll give you specific aftercare instructions.",
      },
      {
        question: "I live in San Diego. How should I manage my skin during peel recovery?",
        answer:
          "San Diego sun is intense, even in winter. After a peel, wear SPF 50+ daily, reapply every 2 hours, and consider a wide-brimmed hat. If you treat in fall/winter, you have more flexibility. Avoid direct sun for at least 1 week post-peel. Post-inflammatory hyperpigmentation is the biggest risk in this sunny climate.",
      },
      {
        question: "What's the typical downtime for each type of skin treatment?",
        answer:
          "Light peels: 2-3 days of mild redness and flaking. Microneedling: 24-48 hours of redness, can resume makeup day 2. Medium chemical peel: 5-7 days of significant peeling. IPL/laser: 3-10 days depending on intensity. Deeper laser resurfacing: 1-2 weeks of visible healing. I discuss downtime during your consultation so you can plan.",
      },
      {
        question: "Can I combine microneedling with PRP or PRF?",
        answer:
          "Absolutely. I typically recommend pairing microneedling with PRP ($500 for microneedling alone, $2000 for a package of 3 with PRP add-on). The growth factors in your own platelet-rich plasma enhance collagen remodeling. Some patients see results faster and more substantially with the combination. Results vary, but many find it worth the investment.",
      },
      {
        question: "How soon after a chemical peel can I exercise or fly?",
        answer:
          "Avoid intense sweating for 5-7 days post-peel (heat and sweat can irritate healing skin). Flying is okay, but cabin pressure and dry air can stress fresh skin—pack extra sunscreen and moisturizer. For microneedling, light activity resumes in 24 hours. I'll give you a detailed timeline based on the depth of your treatment.",
      },
    ],
  },
  {
    title: "Weight Loss & GLP-1 Medications",
    label: "Medical Weight Loss",
    faqs: [
      {
        question: "What's the difference between semaglutide and tirzepatide?",
        answer:
          "Both are GLP-1 receptor agonists that slow gastric emptying and increase satiety. Semaglutide (Wegovy) targets GLP-1 receptors. Tirzepatide (Zepbound) is a GLP-1/GIP receptor agonist—it has a dual mechanism and typically produces 15-22% weight loss vs. 10-15% for semaglutide in studies. Results vary significantly by individual. Tirzepatide may cause slightly more nausea initially.",
      },
      {
        question: "Does Healinque use compounded GLP-1, or FDA-approved products?",
        answer:
          "I use only FDA-approved, brand-name products—semaglutide (Wegovy) and tirzepatide (Zepbound)—obtained through authorized supply chains. I don't use compounded versions because long-term safety data and sterility assurance are stronger with FDA-approved formulations. I prioritize your safety over cost.",
      },
      {
        question: "What are the most common side effects of GLP-1 medications?",
        answer:
          "Nausea is most common, especially during the first 2-4 weeks and with dose increases. Many patients experience mild nausea that resolves with time. Other side effects: constipation, reduced appetite (intentional), occasional diarrhea, headache. Most side effects are temporary. I'll monitor you closely and adjust dosing if needed.",
      },
      {
        question: "Are there serious risks I should know about?",
        answer:
          "Rare but serious risks include pancreatitis (severe abdominal pain) and gallbladder issues. Medullary thyroid carcinoma history is a contraindication—I screen thoroughly. I review your full medical history and may order labs before starting. If you develop severe abdominal pain during treatment, call immediately.",
      },
      {
        question: "I have a history of thyroid issues. Can I still take GLP-1?",
        answer:
          "Depends on the type. If you have a personal or family history of medullary thyroid carcinoma, you cannot take GLP-1 medications. For other thyroid conditions (hypothyroidism, Hashimoto's), we can discuss it—I'll need recent thyroid labs and may coordinate with your endocrinologist. Most thyroid patients tolerate GLP-1 well.",
      },
      {
        question: "What happens to my weight when I stop GLP-1?",
        answer:
          "This is honest talk: Most patients regain about two-thirds of their lost weight within a year if they stop. That's why GLP-1 is best framed as a long-term tool, not a temporary fix. The goal is to use it while building sustainable habits (nutrition, exercise, behavioral changes). Maintenance plans or lower doses can help prevent full rebound.",
      },
      {
        question: `I've heard about "Ozempic face." Is that real?`,
        answer:
          "Yes, it's real—rapid weight loss can cause facial volume loss and sagging skin. The good news: I can address this with fillers, microneedling, or other treatments to restore fullness and tighten skin. If you're planning GLP-1 therapy, I can discuss preventative strategies (slower titration, strategic filler placement) during your consultation. It's manageable.",
      },
      {
        question: "Who is NOT a good candidate for GLP-1 medications?",
        answer:
          "Contraindications: Medullary thyroid carcinoma history, family history of medullary thyroid carcinoma, Multiple Endocrine Neoplasia type 2, or pancreatitis history. Caution: Severe kidney/liver disease, Type 1 diabetes (different from Type 2), gallbladder disease, pregnancy. I do a full assessment before prescribing.",
      },
    ],
  },
  {
    title: "Men's Health & Hormone Therapy",
    label: "Men's Aesthetics & Wellness",
    faqs: [
      {
        question: "Do men typically need more Botox units than women?",
        answer:
          "Yes. Men's facial muscles are generally 20-30% stronger due to higher testosterone. I typically recommend 24-30 units per area for men vs. 20-24 for women. Jaw and forehead muscles in particular need more to achieve the same smoothing. Every face is different, but muscle mass is a real factor.",
      },
      {
        question: "What is Men's Clinic Friday?",
        answer:
          "Every Friday, I focus my schedule on male patients seeking aesthetic and wellness services. It's a dedicated clinic day, so you may have more flexibility in appointments. Many men appreciate having a focused, private time to discuss treatments without feeling rushed. Call or text (858) 337-7999 to schedule your Friday appointment.",
      },
      {
        question: "Will anyone know I had aesthetic work done?",
        answer: `Discretion is paramount. Results should look natural — no one needs to know. After Botox, you might have a day or two of mild swelling, but it's minimal. Fillers? Results are immediate and can be subtle. My goal is that you look refreshed and rested, not like you "had work done." Full confidentiality, always.`,
      },
      {
        question: "What are signs of low testosterone?",
        answer:
          "Common signs: fatigue, reduced libido, difficulty building/maintaining muscle, mood changes, brain fog, erectile dysfunction. Some men attribute these to aging, but low testosterone is treatable. If you're experiencing these, let's run labs. Optimization can improve energy, mood, and sexual function.",
      },
      {
        question: "What is the P-Shot and what should I expect?",
        answer:
          "The P-Shot is PRP (platelet-rich plasma from your own blood) injected into the penis to improve blood flow and erectile function. I'm transparent: The American Urological Association classifies PRP for ED as experimental—there's promise, but long-term data is limited. Many patients report improvement in sensation and firmness, but results vary. If you have ED, you should also see a urologist. Cost: $1700 per treatment.",
      },
      {
        question: "What about hair restoration? How long does it take?",
        answer:
          "Hair treatments (like low-level laser, PRP, or topical solutions) work slowly. Expect 3-6 months for visible improvement, and best results at 6-12 months. Consistency matters—you can't skip treatments. If you're losing hair rapidly, I may refer you to a dermatologist. Early intervention yields better results. Cost: $850 per session or $4500 for a package of 6.",
      },
      {
        question: "Do I need bloodwork before testosterone optimization?",
        answer:
          "Absolutely. Before starting any hormone therapy, I order comprehensive labs—testosterone, free testosterone, estrogen, PSA (prostate), liver and kidney function, cholesterol. This baseline is essential for safety and monitoring. If your results show contraindications (like elevated PSA), I refer you to a specialist. Testing is part of the consultation process.",
      },
    ],
  },
  {
    title: "Pricing, Financing & Memberships",
    label: "Investment & Payment Options",
    faqs: [
      {
        question: "Do you accept insurance for aesthetic treatments?",
        answer:
          "Most elective aesthetic treatments (Botox, fillers, lasers) are not covered by insurance. However, certain services may qualify: hormonal testing, some weight loss medication consultations, or therapeutic injections for TMJ. I can provide documentation for you to submit to your insurer. Always check with your plan first.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "I accept cash, all major credit cards (Visa, Mastercard, American Express), HSA/FSA cards (for eligible services), and financing through CareCredit and Cherry. Payment is due at the time of service.",
      },
      {
        question: "Do you offer financing or payment plans?",
        answer:
          "Yes. I partner with CareCredit and Cherry to offer flexible financing with 0% APR options for qualified applicants (terms vary). You can apply online before your visit, or I can help you apply in the office. Makes treatments more accessible without upfront cost.",
      },
      {
        question: "Do you offer package or prepay discounts?",
        answer:
          "Yes! Prepaid packages give 10–20% off depending on treatment. For example, microneedling packages of 3 are discounted vs. single sessions. I also have the Healinque Elite Membership ($199/month) with monthly IV, 10% off Botox/Dysport, 10% off peels/microneedling, priority booking, and exclusive offers.",
      },
      {
        question: "Is the Healinque Elite Membership worth it?",
        answer:
          "It depends on your usage. If you're getting the monthly IV (worth $150-200), plus at least 1-2 paid treatments per quarter, the membership pays for itself. If you're a one-off patient, pay-as-you-go is cheaper. Calculate your expected annual spend—if it's $2400+, membership makes sense.",
      },
      {
        question: "Can I use my HSA or FSA for treatments?",
        answer:
          "Yes, for qualifying services. Certain treatments (like medical weight loss consultations, hormone testing, or therapeutic injections) may qualify. Most elective aesthetics don't. When you book, mention you'd like to use HSA/FSA, and my team will confirm eligibility.",
      },
      {
        question: "Can I prepay for multiple treatments and save?",
        answer:
          "Absolutely. Package deals are my way of rewarding commitment. For example, a package of 3 microneedling sessions with PRP runs $2000 total, compared to $1500 if booked separately. I offer prepay pricing on most treatments. Discuss package options during your consultation.",
      },
      {
        question: "How do I cancel my Healinque Elite Membership?",
        answer:
          "Monthly memberships can be cancelled with 30 days notice. No long-term commitment. Call or text (858) 337-7999 or email info@healinque.com, and my team will process your cancellation. If you cancel mid-month, no refund applies, but you'll retain benefits through the end of that month.",
      },
    ],
  },
  {
    title: "Safety, Side Effects & After-Care",
    label: "Your Health & Recovery",
    faqs: [
      {
        question: "How do you handle complications from treatment?",
        answer:
          "Safety is non-negotiable. If a complication occurs—like vascular occlusion, allergic reaction, or infection—I have protocols in place. I monitor you immediately, provide emergency care if needed, and cover the cost of corrective treatment. Serious cases are escalated to a hospital. You have my direct contact for urgent concerns.",
      },
      {
        question: "What should I avoid before getting injectables?",
        answer:
          "Avoid blood thinners for 1 week before: aspirin, ibuprofen, naproxen, fish oil, vitamin E, and alcohol. These increase bruising. Continue acetaminophen (Tylenol) if needed. If you're on prescription blood thinners (warfarin, apixaban), tell me during your consultation—I may still proceed, but with careful planning.",
      },
      {
        question: "What should I expect after injectables?",
        answer:
          "Mild swelling and redness at injection sites is normal and resolves in 24-48 hours. Minor bruising is possible. Botox results appear in 3-7 days (full effect at 2 weeks). Filler results are immediate. Avoid massaging the area for 24 hours. I provide detailed aftercare instructions at your appointment.",
      },
      {
        question: "When can I exercise or fly after treatment?",
        answer:
          "After injectables: Light activity (walking, yoga) is fine immediately. Intense sweating or strenuous exercise—wait 24 hours. Flying: No restrictions, but cabin pressure and dehydration can cause mild swelling. After laser or microneedling: Wait 24-48 hours for strenuous activity. Heat accelerates healing and can cause complications, so avoid saunas and hot yoga for 5-7 days.",
      },
      {
        question: "When can I wear makeup after treatment?",
        answer:
          "After injectables: Makeup is okay 24 hours later, but use a light hand on injection sites to avoid irritation. After microneedling: Wait 24 hours. After laser/peels: Wait until skin isn't visibly raw (usually 24-48 hours). Use clean brushes and avoid heavy foundations while skin is healing.",
      },
      {
        question: "What signs should make me call you immediately?",
        answer:
          "Call immediately if you experience: severe pain (especially around eyes or forehead), vision changes, blanching or whitening of skin, spreading swelling (hours after treatment), fever, signs of infection (increased redness, warmth, pus), or difficulty breathing. These could indicate serious complications. Don't wait—I'm available 24/7 for urgent issues.",
      },
      {
        question: "How do I get detailed aftercare instructions?",
        answer:
          "I provide written aftercare instructions at your appointment specific to your treatment. You'll also receive them via email. If you have questions days later, call me—I'm happy to clarify. Proper aftercare is key to optimal results, so don't hesitate to reach out.",
      },
    ],
  },
];

// Flatten all category FAQs for schema.org FAQPage structured data (GEO / AI discoverability)
const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

export default function FAQPage() {
  return (
    <main className="bg-[#0a1628]">
      <FAQSchema faqs={allFaqs} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: siteConfig.urls.baseUrl },
          { name: "FAQ", url: `${siteConfig.urls.baseUrl}/faq` },
        ]}
      />
      <Hero
        variant="page"
        title="Frequently Asked Questions"
        subtitle="Help Center"
        description="Find answers to common questions about my treatments, appointments, and policies."
        image={pexelsUrl(pageImages.faqHero.primary, 1920)}
        overlay="dark"
      />

      {/* Intro — CREAM */}
      <section className="relative py-16 bg-cream">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#C9A227]" />
              <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50">
                Answers &amp; Clarity
              </p>
              <div className="h-px w-12 bg-[#C9A227]" />
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6 leading-tight">
              Your <span className="text-[#C9A227] italic">Questions</span>, Answered
            </h2>
            <p className="text-navy-deep/70 text-lg leading-relaxed">
              Below you&apos;ll find answers to the questions I hear most often. Jump to a category
              or scroll through everything. If you don&apos;t see your question, reach out—I&apos;m
              happy to help.
            </p>
          </div>

          {/* Category Nav */}
          <nav className="flex flex-wrap justify-center gap-3 mt-12">
            {faqCategories.map((category) => (
              <a
                key={category.title}
                href={`#${category.title.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                className="px-5 py-2.5 text-xs uppercase tracking-wider font-sans font-medium text-navy-deep/70 bg-white border border-taupe/20 rounded-full hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* FAQ Categories — alternating dark/cream */}
      {faqCategories.map((category, idx) => {
        const isDark = idx % 2 === 0;
        return (
          <section
            key={category.title}
            id={category.title.toLowerCase().replace(/\s+&?\s*/g, "-")}
            className={`relative py-20 scroll-mt-28 ${isDark ? "bg-[#0a1628]" : "bg-cream"}`}
          >
            <div className="container-healinque">
              <div className="max-w-4xl mx-auto mb-12">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-px w-12 bg-[#C9A227]" />
                  <p
                    className={`font-sans text-xs uppercase tracking-[0.2em] ${
                      isDark ? "text-white/50" : "text-navy-deep/50"
                    }`}
                  >
                    {category.label}
                  </p>
                </div>
                <h2
                  className={`font-serif text-3xl lg:text-5xl leading-tight ${
                    isDark ? "text-white" : "text-navy-deep"
                  }`}
                >
                  {category.title}
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <FAQSection faqs={category.faqs} variant={isDark ? "dark" : "light"} />
              </div>
            </div>
          </section>
        );
      })}

      {/* Still Have Questions CTA — CREAM */}
      <section className="relative py-24 bg-cream border-t border-taupe/10">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-navy-deep/50 mb-4">
              Still Curious?
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy-deep mb-6">
              I&apos;m <span className="text-[#C9A227] italic">Here</span> to Help
            </h2>
            <p className="text-navy-deep/70 text-lg mb-10">
              Reach out directly and I&apos;ll get back to you within 24 hours — or call or text (858) 337-7999.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-[#C9A227] hover:bg-[#b8921f] text-[#0a1628] px-10 py-6 font-sans font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                  Get in Touch <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>

              <a href={getPhoneLink()}>
                <Button
                  variant="outline"
                  className="border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227]/10 px-10 py-6 font-sans font-semibold rounded-lg transition-all duration-300"
                >
                  <Phone className="mr-3 h-5 w-5" /> {siteConfig.phone}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
