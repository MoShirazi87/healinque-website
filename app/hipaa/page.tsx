import { Metadata } from "next";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description: "Notice of Privacy Practices for protected health information at Healinque Wellness Clinic.",
};

export default function HIPAAPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-white">
      <div className="container-healinque">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-display font-serif text-navy-deep mb-8">
            Notice of Privacy Practices
          </h1>
          <p className="text-lg text-navy-deep mb-2">
            Your Information. Your Rights. Our Responsibilities.
          </p>
          <p className="text-taupe mb-8">
            Effective Date: December 2025
          </p>

          <div className="bg-cream rounded-xl p-6 mb-8">
            <p className="text-navy-deep font-medium">
              This notice describes how medical information about you may be used and disclosed 
              and how you can get access to this information. Please review it carefully.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-taupe">
            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              Your Rights
            </h2>
            <p>When it comes to your health information, you have certain rights:</p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Get a copy of your health and claims records.</strong> You can ask to see or get a copy of your health and claims records and other health information we have about you. We will provide a copy or summary within 30 days of your request.</li>
              <li><strong>Ask us to correct health and claims records.</strong> You can ask us to correct your health and claims records if you think they are incorrect or incomplete. We may say &quot;no,&quot; but we&apos;ll tell you why in writing within 60 days.</li>
              <li><strong>Request confidential communications.</strong> You can ask us to contact you in a specific way or to send mail to a different address. We will accommodate reasonable requests.</li>
              <li><strong>Ask us to limit what we use or share.</strong> You can ask us not to use or share certain health information for treatment, payment, or operations. We are not required to agree to your request.</li>
              <li><strong>Get a list of those with whom we&apos;ve shared information.</strong> You can ask for a list (accounting) of the times we&apos;ve shared your health information for six years prior to the date you ask.</li>
              <li><strong>Get a copy of this privacy notice.</strong> You can ask for a paper copy of this notice at any time.</li>
              <li><strong>Choose someone to act for you.</strong> If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.</li>
              <li><strong>File a complaint if you feel your rights are violated.</strong> You can file a complaint with us or the U.S. Department of Health and Human Services Office for Civil Rights.</li>
            </ul>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              Your Choices
            </h2>
            <p>For certain health information, you can tell us your choices about what we share:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Family and friends</li>
              <li>Marketing purposes</li>
              <li>Fundraising efforts</li>
            </ul>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              Our Uses and Disclosures
            </h2>
            <p>We may use and share your information as we:</p>
            <ul className="list-disc pl-6 mt-2">
              <li><strong>Treat you.</strong> We can use your health information and share it with professionals who are treating you.</li>
              <li><strong>Run our organization.</strong> We can use and share your health information to run our practice, improve your care, and contact you when necessary.</li>
              <li><strong>Bill for your services.</strong> We can use and share your health information to bill and get payment from health plans or other entities.</li>
            </ul>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              How else can we use or share your health information?
            </h2>
            <p>We are allowed or required to share your information in other ways:</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Public health and safety issues</li>
              <li>Research</li>
              <li>Comply with the law</li>
              <li>Respond to organ and tissue donation requests</li>
              <li>Work with a medical examiner or funeral director</li>
              <li>Address workers&apos; compensation, law enforcement, and other government requests</li>
              <li>Respond to lawsuits and legal actions</li>
            </ul>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              Our Responsibilities
            </h2>
            <ul className="list-disc pl-6 mt-2">
              <li>We are required by law to maintain the privacy and security of your protected health information.</li>
              <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
              <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
              <li>We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time by letting us know in writing.</li>
            </ul>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              Changes to the Terms of This Notice
            </h2>
            <p>
              We can change the terms of this notice, and the changes will apply to all information 
              we have about you. The new notice will be available upon request, in our office, and 
              on our website.
            </p>

            <h2 className="text-xl font-serif text-navy-deep mt-8 mb-4">
              Contact Information
            </h2>
            <p>
              Privacy Officer<br />
              {siteConfig.name}<br />
              {siteConfig.address.street}, {siteConfig.address.suite}<br />
              {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
              Phone: {siteConfig.phone}<br />
              Email: privacy@healinque.com
            </p>

            <p className="mt-8">
              You may also file a complaint with the U.S. Department of Health and Human Services 
              Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., 
              Washington, D.C. 20201, calling 1-877-696-6775, or visiting 
              www.hhs.gov/ocr/privacy/hipaa/complaints/.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

