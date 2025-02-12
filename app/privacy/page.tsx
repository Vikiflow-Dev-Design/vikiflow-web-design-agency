import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Web Design Agency",
  description:
    "Our privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
      <div className="prose prose-lg max-w-3xl mx-auto">
        <section className="mb-8">
          <h2>Introduction</h2>
          <p>
            At Web Design Agency, we take your privacy seriously. This privacy
            policy describes how we collect, use, and protect your personal
            information when you use our website and services.
          </p>
        </section>

        <section className="mb-8">
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Business information</li>
            <li>Project requirements and preferences</li>
            <li>Communication history</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Communicate with you about your projects</li>
            <li>Send updates and marketing communications</li>
            <li>Analyze and improve our website performance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="mb-8">
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>Contact Us</h2>
          <p>
            If you have any questions about our privacy policy or how we handle
            your personal information, please contact us at
            privacy@webdesignagency.com.
          </p>
        </section>
      </div>
    </main>
  );
}
