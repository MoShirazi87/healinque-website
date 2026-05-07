import { Metadata } from "next";
import { PageHero as Hero } from "@/components/sections/hero";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Terms of Service | Healinque Wellness & Longevity Center",
  description: "Terms of service for Healinque Wellness & Longevity Center website and services.",
};

export default function TermsPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Terms of Service"
        subtitle="Our Terms"
        description="Important terms and conditions for using our services."
        image={pexelsUrl(pageImages.termsHero.primary, 1920)}
        overlay="dark"
      />

      <div className="min-h-screen pt-8 pb-16 bg-navy-deep">
        <div className="container-healinque">
          <div className="max-w-3xl mx-auto">
            <p className="text-white/60 mb-12">
              Last Updated: April 2026
            </p>

            <div className="space-y-8 text-white/80">
              <section>
                <h2 className="text-2xl font-serif text-white mt-0 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using the Healinque Wellness &amp; Longevity Center website and services, you agree
                  to be bound by these Terms of Service. If you do not agree to these terms, please
                  do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  2. Medical Disclaimer
                </h2>
                <p>
                  The information provided on this website is for general informational purposes only
                  and should not be considered medical advice. Always consult with a qualified healthcare
                  provider before making decisions about your health or treatment. Results from treatments
                  may vary and are not guaranteed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  3. Services
                </h2>
                <p>
                  Healinque Wellness &amp; Longevity Center provides aesthetic and wellness medical services. All
                  treatments are provided under the supervision of licensed medical professionals.
                  We reserve the right to refuse service to anyone and to modify or discontinue
                  services at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  4. Appointments and Cancellations
                </h2>
                <p>
                  Appointments are subject to our scheduling policies. We require 48 hours notice for
                  cancellations or rescheduling. Late cancellations or no-shows may result in a $50 fee.
                  Specific policies are provided at the time of booking.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  5. Payment Terms
                </h2>
                <p>
                  Payment is due at the time of service unless other arrangements have been made.
                  We accept major credit cards, cash, and approved financing options. Prices are
                  subject to change without notice. Refunds and credits are issued at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  6. Consultation Fees
                </h2>
                <p>
                  Initial consultation fees are $100. This fee is credited toward any treatment you choose
                  to proceed with. Consultation cancellations require 48 hours notice or a $50 cancellation
                  fee may apply.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  7. User Accounts
                </h2>
                <p>
                  If you create an account on our website or patient portal, you are responsible for
                  maintaining the confidentiality of your account credentials. You agree to provide
                  accurate information and to notify us of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  8. Intellectual Property
                </h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software,
                  is the property of Healinque Wellness &amp; Longevity Center and is protected by copyright and
                  trademark laws. You may not reproduce, distribute, or create derivative works
                  without our written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  9. Before and After Photos
                </h2>
                <p>
                  Before and after photos displayed on our website are of actual patients who have
                  given consent for their images to be used. Individual results may vary. These
                  images are for illustrative purposes only.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  10. Limitation of Liability
                </h2>
                <p>
                  To the fullest extent permitted by law, Healinque Wellness &amp; Longevity Center shall not be
                  liable for any indirect, incidental, special, consequential, or punitive damages
                  arising from your use of our website or services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  11. Governing Law
                </h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the
                  laws of the State of California, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  12. Healinque Elite Membership Terms
                </h2>
                <p>
                  The Healinque Elite Membership is a monthly recurring membership at $199 per month. Your membership will automatically renew each month unless you cancel. Cancellation must be requested in writing or by phone—no automatic renewal credits are provided. You may cancel anytime without penalty by contacting our team.
                </p>
                <p className="mt-4">
                  Membership benefits include monthly IV therapy, 10% off select treatments, and priority booking. These benefits are subject to change with 30 days notice. We reserve the right to suspend or terminate membership if payment fails or if you violate our policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  13. Dispute Resolution &amp; Arbitration
                </h2>
                <p>
                  <strong>You and Healinque Wellness &amp; Longevity Center agree that any dispute will be resolved through binding individual arbitration, not through court litigation.</strong>
                </p>
                <p className="mt-4">
                  Any claim, dispute, or controversy arising from these Terms of Service or our services shall be resolved by binding arbitration administered by JAMS (Judicial Arbitration and Mediation Services) under its Comprehensive Arbitration Rules. The arbitration will take place in San Diego County, California, unless you and we agree otherwise.
                </p>
                <p className="mt-4">
                  <strong>This means:</strong>
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>You waive your right to sue in court or have a jury trial</li>
                  <li>You waive your right to participate in a class action or representative action</li>
                  <li>Arbitration is binding and enforceable in court</li>
                  <li>You retain the right to opt-out of arbitration by providing written notice within 30 days of first accepting these terms</li>
                </ul>
                <p className="mt-4">
                  Each party shall bear its own costs and fees, though we may pay for the arbitrator&apos;s fee if required by law. You may choose to be represented by an attorney at your own expense.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  14. Changes to Terms
                </h2>
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will
                  be effective immediately upon posting to the website. Your continued use of our
                  services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  15. Contact Information
                </h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-surface-card rounded-lg border border-white/5">
                  <p className="text-white">
                    {siteConfig.name}<br />
                    {siteConfig.address.full}<br />
                    Email: <a href="mailto:legal@healinque.com" className="text-gold hover:text-gold/80 transition-colors">legal@healinque.com</a><br />
                    Phone: <a href={getPhoneLink()} className="text-gold hover:text-gold/80 transition-colors">{siteConfig.phone}</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
