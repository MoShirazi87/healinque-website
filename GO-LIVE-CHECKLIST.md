# Healinque Website — Go-Live Checklist

**Date:** April 15, 2026

---

## Pre-Launch Steps (Do These First)

### Step 1: Delete the conflicting robots.txt

The dynamic `app/robots.ts` is the correct source. The static file overrides it and must be removed:

```bash
rm public/robots.txt
```

### Step 2: Run the build locally

Make sure everything compiles before deploying:

```bash
npm install
npx tsc --noEmit        # TypeScript type checking
npx next lint            # ESLint
npm run build            # Full production build
```

Fix any errors before proceeding. The build was clean as of Session 13 but should be re-verified after all audit changes.

### Step 3: Set up environment variables

Create `.env.local` from the template:

```bash
cp .env.example .env.local
```

Then fill in these **required** values:

| Variable | Where to Get It | Required For |
|----------|----------------|--------------|
| `RESEND_API_KEY` | https://resend.com/api-keys (free account) | Forms sending email |
| `CONTACT_FORM_RECIPIENT` | Already set: `AzadehMD@gmail.com` | Form delivery |
| `EMAIL_FROM` | `noreply@healinque.com` (verify domain in Resend) | Sender address |
| `NEXT_PUBLIC_PABAU_COMPANY_SLUG` | Pabau admin: your booking URL slug | Online booking widget |
| `PABAU_API_KEY` | Pabau: Settings > Integrations > API | Patient sync from forms |
| `NEXT_PUBLIC_GOOGLE_MAPS_KEY` | Google Cloud Console > Credentials | Contact page map |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 > Admin > Data Streams | Analytics (optional) |

**Optional** (add later if needed):
- `SENDGRID_API_KEY` — Alternative to Resend
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_FB_PIXEL_ID` — Facebook ads tracking
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN` — If adding e-commerce later

### Step 4: Verify domain email (prevents spam folder)

If using Resend:

1. Go to https://resend.com/domains
2. Add `healinque.com`
3. Resend will give you 3 DNS records (SPF, DKIM, DMARC)
4. Add these to your domain's DNS settings at your registrar
5. Click "Verify" in Resend once DNS has propagated (can take up to 48 hours)

---

## Deploy to Vercel

### Option A: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init  # if not already a repo
   git add .
   git commit -m "Healinque website - go live"
   git remote add origin https://github.com/YOUR_USERNAME/healinque-website.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to https://vercel.com and sign in (or create account)
   - Click "Add New Project"
   - Import your GitHub repository
   - Framework: Next.js (auto-detected)
   - Root Directory: leave as `/`
   - Click "Deploy"

3. **Add environment variables in Vercel:**
   - Go to Project Settings > Environment Variables
   - Add each variable from Step 3 above
   - Make sure to select "Production" environment
   - Redeploy after adding variables: Deployments > click "..." > Redeploy

### Option B: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

Then add environment variables in the Vercel dashboard (Settings > Environment Variables).

---

## Connect Your Domain

1. **In Vercel:** Go to Project Settings > Domains > Add `healinque.com`
2. **At your registrar** (GoDaddy, Namecheap, etc.): Update DNS records:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`
3. Wait for DNS propagation (usually 5-30 minutes, can take up to 48 hours)
4. Vercel automatically provisions SSL (HTTPS) once DNS is verified

---

## Post-Launch Checklist

After the site is live, complete these items:

- [ ] **Test all forms:** Submit a test contact form, consultation request, and newsletter signup. Check AzadehMD@gmail.com for the emails
- [ ] **Test booking:** If Pabau credentials are configured, try booking a test appointment
- [ ] **Google Search Console:** Go to https://search.google.com/search-console, add property for healinque.com, verify via DNS TXT record
- [ ] **Submit sitemap:** In Search Console, go to Sitemaps > add `https://healinque.com/sitemap.xml`
- [ ] **Google Business Profile:** Update your GBP listing to point to https://healinque.com
- [ ] **Social media:** Update Instagram, Facebook, etc. with the new website URL
- [ ] **Test on mobile:** Open the site on a phone and tap through every page, especially forms and the booking widget
- [ ] **Check Core Web Vitals:** Run https://pagespeed.web.dev on the homepage
- [ ] **Replace placeholder content:**
  - Swap illustrative testimonials for real patient reviews (with consent)
  - Add before/after gallery photos (with consent)
  - Write or approve blog posts
- [ ] **Set up Google Analytics:** Add GA4 measurement ID to Vercel env vars if not done

---

## Architecture Quick Reference

| Area | Technology |
|------|-----------|
| Framework | Next.js 14.2 (App Router) |
| Hosting | Vercel |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion + custom InteractionEngine |
| Forms | Next.js API routes → Resend/SendGrid email |
| Booking | Pabau embeddable widget + REST API |
| Images | Pexels stock (replace with real clinic photos over time) |
| SEO | JSON-LD structured data, dynamic sitemap, AI-crawler friendly |

---

## Support

If you run into issues during deployment, the most common fixes are:

1. **Build fails:** Run `npm run build` locally first and fix any TypeScript/ESLint errors
2. **Forms not sending:** Check that `RESEND_API_KEY` is set in Vercel environment variables and domain is verified
3. **Booking widget not showing:** Check that `NEXT_PUBLIC_PABAU_COMPANY_SLUG` is set in Vercel environment variables
4. **Images not loading:** Pexels CDN images load externally; verify `images.remotePatterns` in `next.config.js` includes pexels.com
5. **Map not showing:** Check `NEXT_PUBLIC_GOOGLE_MAPS_KEY` is set and the Maps Embed API is enabled in Google Cloud Console
