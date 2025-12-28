import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Healinque Wellness Clinic privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container-healinque">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-display font-serif text-navy-deep mb-8">
            Privacy Policy
          </h1>
          <p className="text-taupe mb-8">
            Last Updated: December 2025
          </p>

          <div className="prose prose-lg max-w-none text-taupe">
            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              Healinque Wellness Clinic (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is 
              committed to protecting your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you visit our website, 
              use our services, or interact with us.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              2. Information We Collect
            </h2>
            <h3 className="text-lg font-medium text-navy-deep mt-6 mb-3">
              Personal Information
            </h3>
            <p>We may collect personal information that you voluntarily provide, including:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Name, email address, phone number, and mailing address</li>
              <li>Date of birth and gender</li>
              <li>Medical history and health information</li>
              <li>Payment and billing information</li>
              <li>Photos for treatment documentation</li>
              <li>Communications with our team</li>
            </ul>

            <h3 className="text-lg font-medium text-navy-deep mt-6 mb-3">
              Automatically Collected Information
            </h3>
            <p>
              When you visit our website, we automatically collect certain information including 
              your IP address, browser type, device information, and browsing behavior through 
              cookies and similar technologies.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              3. How We Use Your Information
            </h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Provide and improve our medical and aesthetic services</li>
              <li>Process appointments and payments</li>
              <li>Communicate with you about your care and our services</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Protect the safety and security of our patients and staff</li>
            </ul>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              4. HIPAA Compliance
            </h2>
            <p>
              As a healthcare provider, we are subject to the Health Insurance Portability and 
              Accountability Act (HIPAA). Your protected health information (PHI) is handled in 
              accordance with HIPAA regulations. Please see our separate HIPAA Notice of Privacy 
              Practices for details on how we protect your health information.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              5. Information Sharing
            </h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Healthcare providers involved in your care</li>
              <li>Service providers who assist in our operations</li>
              <li>Payment processors for billing purposes</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="mt-4">
              We do not sell your personal information to third parties.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              7. Your Rights
            </h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of your data</li>
            </ul>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              8. Cookies
            </h2>
            <p>
              Our website uses cookies to enhance your experience. You can control cookie 
              preferences through your browser settings. Disabling cookies may affect website 
              functionality.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new policy on this page and updating the 
              &quot;Last Updated&quot; date.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy or your personal information, 
              please contact us at:
            </p>
            <p className="mt-4">
              {siteConfig.name}<br />
              {siteConfig.address.street}, {siteConfig.address.suite}<br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
              Email: privacy@healinque.com<br />
              Phone: {siteConfig.phone}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

