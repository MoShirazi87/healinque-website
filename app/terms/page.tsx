import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for Healinque Wellness Clinic website and services.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container-healinque">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-display font-serif text-navy-deep mb-8">
            Terms of Service
          </h1>
          <p className="text-taupe mb-8">
            Last Updated: December 2025
          </p>

          <div className="prose prose-lg max-w-none text-taupe">
            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the Healinque Wellness Clinic website and services, you agree 
              to be bound by these Terms of Service. If you do not agree to these terms, please 
              do not use our services.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              2. Medical Disclaimer
            </h2>
            <p>
              The information provided on this website is for general informational purposes only 
              and should not be considered medical advice. Always consult with a qualified healthcare 
              provider before making decisions about your health or treatment. Results from treatments 
              may vary and are not guaranteed.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              3. Services
            </h2>
            <p>
              Healinque Wellness Clinic provides aesthetic and wellness medical services. All 
              treatments are provided under the supervision of licensed medical professionals. 
              We reserve the right to refuse service to anyone and to modify or discontinue 
              services at any time.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              4. Appointments and Cancellations
            </h2>
            <p>
              Appointments are subject to our scheduling policies. We require 48 hours notice for 
              cancellations or rescheduling. Late cancellations or no-shows may result in a fee. 
              Specific policies are provided at the time of booking.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              5. Payment Terms
            </h2>
            <p>
              Payment is due at the time of service unless other arrangements have been made. 
              We accept major credit cards, cash, and approved financing options. Prices are 
              subject to change without notice. Refunds and credits are issued at our discretion.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              6. User Accounts
            </h2>
            <p>
              If you create an account on our website or patient portal, you are responsible for 
              maintaining the confidentiality of your account credentials. You agree to provide 
              accurate information and to notify us of any unauthorized use of your account.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              7. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, 
              is the property of Healinque Wellness Clinic and is protected by copyright and 
              trademark laws. You may not reproduce, distribute, or create derivative works 
              without our written permission.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              8. Before and After Photos
            </h2>
            <p>
              Before and after photos displayed on our website are of actual patients who have 
              given consent for their images to be used. Individual results may vary. These 
              images are for illustrative purposes only.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              9. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Healinque Wellness Clinic shall not be 
              liable for any indirect, incidental, special, consequential, or punitive damages 
              arising from your use of our website or services.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              10. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the 
              laws of the State of California, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              11. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will 
              be effective immediately upon posting to the website. Your continued use of our 
              services after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              12. Contact Information
            </h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              {siteConfig.name}<br />
              {siteConfig.address.street}, {siteConfig.address.suite}<br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
              Email: legal@healinque.com<br />
              Phone: {siteConfig.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

