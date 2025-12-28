# Healinque Wellness Clinic Website

Premium medical aesthetics and longevity medicine website for Healinque Wellness Clinic in Poway, California.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Animations**: Framer Motion
- **Integrations**: Healthie (EHR/Booking), Shopify (E-commerce)
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Healthie account (for booking/patient portal)
- Shopify store (for e-commerce)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/healinque/website.git
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Fill in your environment variables in `.env.local`

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
healinque-website/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Authentication pages (login, signup)
│   ├── about/             # About pages
│   ├── account/           # Patient portal
│   ├── api/               # API routes
│   ├── book/              # Appointment booking
│   ├── concerns/          # Concern-based pages
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── gallery/           # Before/After gallery
│   ├── locations/         # SEO location pages
│   ├── memberships/       # Membership tiers
│   ├── reviews/           # Patient reviews
│   ├── shop/              # E-commerce (Shopify)
│   └── treatments/        # Treatment pages
├── components/
│   ├── navigation/        # Header, Footer
│   ├── sections/          # Reusable page sections
│   ├── seo/               # Schema markup components
│   └── ui/                # Base UI components (shadcn)
├── lib/
│   ├── data/              # Static data (treatments, concerns, locations)
│   ├── healthie/          # Healthie API client & auth
│   └── shopify/           # Shopify Storefront API client
└── public/                # Static assets
```

## Key Features

### 88-Page Structure
- Homepage with full feature showcase
- 3 About pages (About, Dr. Azi, Healinque Method)
- 33+ Treatment pages via dynamic routes
- 6 Treatment category pages
- 18+ Concern-based pages
- 5 Location/SEO pages
- E-commerce shop with cart
- Patient portal with account management
- Membership management
- Resource pages (FAQ, Gallery, Reviews, Blog)
- Legal pages (Privacy, Terms, HIPAA)

### Integrations

#### Healthie (EHR/Practice Management)
- Patient authentication & portal
- Appointment booking
- Treatment history
- Order sync from Shopify

#### Shopify (E-commerce)
- Product catalog display
- Shopping cart
- Secure checkout
- Order webhooks → Healthie sync

### SEO Optimization
- Dynamic sitemap generation
- robots.txt configuration
- Schema.org structured data
- Meta tags for all pages
- Location-based landing pages

## Development

### Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding Treatments

Edit `lib/data/treatments.ts` to add new treatments. Each treatment includes:
- Basic info (name, description, category)
- Benefits and candidate criteria
- Procedure details (duration, recovery, results)
- Pricing
- FAQs
- Related treatments

### Adding Concerns

Edit `lib/data/concerns.ts` to add new concern pages with:
- Symptoms and causes
- Recommended treatments
- FAQs
- Related concerns

## Deployment

### Vercel (Recommended)

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Environment Variables for Production

Ensure all variables from `.env.example` are set in your deployment platform.

## Image Assets

The website expects images in these locations:
- `/public/logo.png` - Main logo
- `/public/logo-white.png` - White logo for dark backgrounds
- `/public/images/` - Hero images, treatment photos, etc.

## Customization

### Branding
Edit `tailwind.config.ts` to change:
- Colors (navy, gold, cream, taupe)
- Fonts (Cormorant Garamond, Montserrat)
- Spacing and sizing

### Content
Most content is in:
- `lib/data/treatments.ts` - Treatment information
- `lib/data/concerns.ts` - Concern pages
- `lib/data/locations.ts` - Location pages
- Individual page files for static content

## Support

For questions about this website implementation, contact the development team.

For Healthie integration support: [Healthie Documentation](https://docs.gethealthie.com)
For Shopify integration support: [Shopify Storefront API](https://shopify.dev/docs/api/storefront)

