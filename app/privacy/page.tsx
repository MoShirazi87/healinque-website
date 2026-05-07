import { Metadata } from "next";
import { PageHero as Hero } from "@/components/sections/hero";
import { siteConfig, getPhoneLink } from "@/lib/config/site";
import { pexelsUrl, pageImages } from "@/lib/data/images";

export const metadata: Metadata = {
  title: "Privacy Policy | Healinque Wellness & Longevity Center",
  description: "Healinque Wellness & Longevity Center privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <Hero
        variant="page"
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="Learn how we collect, use, and protect your personal information."
        image={pexelsUrl(pageImages.privacyHero.primary, 1920)}
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
                  1. Introduction
                </h2>
                <p>
                  Healinque Wellness &amp; Longevity Center (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is
                  committed to protecting your personal information. This Privacy Policy explains how we
                  collect, use, disclose, and safeguard your information when you visit our website,
                  use our services, or interact with us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  2. Information We Collect
                </h2>

                <h3 className="text-lg font-serif text-gold mt-6 mb-3">
                  Personal Information
                </h3>
                <p>We may collect personal information that you voluntarily provide, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Name, email address, phone number, and mailing address</li>
                  <li>Date of birth and gender</li>
                  <li>Medical history and health information</li>
                  <li>Payment and billing information</li>
                  <li>Photos for treatment documentation</li>
                  <li>Communications with our team</li>
                </ul>

                <h3 className="text-lg font-serif text-gold mt-6 mb-3">
                  Automatically Collected Information
                </h3>
                <p>
                  When you visit our website, we automatically collect certain information including
                  your IP address, browser type, device information, and browsing behavior through
                  cookies and similar technologies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Provide and improve our medical and aesthetic services</li>
                  <li>Process appointments and payments</li>
                  <li>Communicate with you about your care and our services</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Protect the safety and security of our patients and staff</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  4. HIPAA Compliance
                </h2>
                <p>
                  As a healthcare provider, we are subject to the Health Insurance Portability and
                  Accountability Act (HIPAA). Your protected health information (PHI) is handled in
                  accordance with HIPAA regulations. Please see our separate HIPAA Notice of Privacy
                  Practices for details on how we protect your health information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  5. Information Sharing
                </h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Healthcare providers involved in your care</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Payment processors for billing purposes</li>
                  <li>Legal authorities when required by law</li>
                </ul>
                <p className="mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  6. Data Security
                </h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  7. Your Rights
                </h2>
                <p>Depending on your location, you may have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  8. Cookies
                </h2>
                <p>
                  Our website uses cookies to enhance your experience. You can control cookie
                  preferences through your browser settings. Disabling cookies may affect website
                  functionality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any
                  material changes by posting the new policy on this page and updating the
                  &quot;Last Updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4">
                  10. California Consumer Privacy Rights (CCPA/CPRA)
                </h2>
                <p>
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA):
                </p>

                <h3 className="text-lg font-serif text-gold mt-6 mb-3">
                  Your California Rights
                </h3>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong>Right to Know:</strong> You have the right to know what personal information we collect, use, share, and sell about you.</li>
                  <li><strong>Right to Delete:</strong> You can request that we delete personal information we collect from you, subject to certain exceptions.</li>
                  <li><strong>Right to Correct:</strong> You have the right to ask us to correct inaccurate personal information.</li>
                  <li><strong>Right to Opt-Out:</strong> You can opt-out of the &quot;sale&quot; or &quot;sharing&quot; of your personal information for cross-context behavioral advertising.</li>
                  <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA/CPRA rights.</li>
                  <li><strong>Right to Limit Use:</strong> You can request that we limit our use of your sensitive personal information to necessary business purposes.</li>
                </ul>

                <h3 className="text-lg font-serif text-gold mt-6 mb-3">
                  How to Exercise Your Rights
                </h3>
                <p className="mb-3">
                  To exercise these rights, please submit a request to us using the contact information below. You may also designate an authorized agent to make a request on your behalf.
                </p>
                <p>
                  We will verify your identity and respond to your request within 45 days. You have the right to appeal our decision if we deny your request.
                </p>

                <h3 className="text-lg font-serif text-gold mt-6 mb-3">
                  Do Not Sell or Share My Personal Information
                </h3>
                <p>
                  We do not &quot;sell&quot; personal information as defined by CCPA/CPRA. If we engage in any information sharing practices in the future that qualify as a &quot;sale&quot; or &quot;sharing&quot; under these laws, we will provide a &quot;Do Not Sell or Share My Personal Information&quot; link on our homepage that allows you to opt-out.
                </p>

                <h3 className="text-lg font-serif text-gold mt-6 mb-3">
                  Data Broker Registration
                </h3>
                <p>
                  We are not a data broker as defined by the CPRA.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-white mb-4" id="ccpa-rights">
                  11. Contact Us for Privacy Requests
                </h2>
                <p>
                  If you have questions about this Privacy Policy, your personal information, or wish to exercise your privacy rights (especially under CCPA/CPRA), please contact us at:
                </p>
                <div className="mt-4 p-4 bg-surface-card rounded-lg border border-white/5">
                  <p className="text-white">
                    <strong>Privacy Officer</strong><br />
                    {siteConfig.name}<br />
                    {siteConfig.address.full}<br />
                    Email: <a href="mailto:privacy@healinque.com" className="text-gold hover:text-gold/80 transition-colors">privacy@healinque.com</a><br />
                    Phone: <a href={getPhoneLink()} className="text-gold hover:text-gold/80 transition-colors">{siteConfig.phone}</a>
                  </p>
                </div>
                <p className="mt-4 text-white/60 text-sm">
                  <strong>Note:</strong> You can also file a complaint with the California Privacy Protection Agency if you believe we have violated your privacy rights.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
