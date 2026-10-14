const sections = [
  {
    title: "1. Introduction",
    text: "FreshBox connects customers with farmers and vendors to make fresh food and grocery shopping easier. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our website and services.",
  },
  {
    title: "2. Information We Collect",
    text: "Depending on how you use FreshBox, we may collect your name, email address, phone number, delivery address, account details, order history, and messages you send us. We may also collect technical information such as browser type, device information, and website usage data.",
  },
  {
    title: "3. How We Use Your Information",
    text: "We use your information to provide and improve our services, manage orders and deliveries, communicate with you, respond to support requests, maintain security, prevent fraud, and comply with applicable laws.",
  },
  {
    title: "4. Sharing Your Information",
    text: "We may share relevant information with farmers, vendors, delivery partners, payment providers, and technology providers when necessary to operate FreshBox. We may also disclose information when required by law.",
  },
  {
    title: "5. Payments",
    text: "Third-party payment providers may process your payment details under their own privacy policies and security practices. How FreshBox handles payment information depends on the payment methods and systems used on the platform.",
  },
  {
    title: "6. Cookies and Technical Data",
    text: "Our website may use cookies or similar technologies to support essential functionality, remember preferences, understand website performance, and improve user experience. You can manage cookies through your browser settings where available.",
  },
  {
    title: "7. Data Security and Retention",
    text: "We take reasonable steps to protect personal information from unauthorized access, loss, misuse, or disclosure. We retain information only for as long as reasonably necessary, including for legal, accounting, security, and dispute-resolution purposes.",
  },
  {
    title: "8. Your Privacy Rights",
    text: "Subject to applicable law, you may be able to request access to your personal information, correct inaccurate information, request deletion, object to certain processing, withdraw consent where applicable, or submit a complaint to the relevant data protection authority.",
  },
  {
    title: "9. Third-Party Services",
    text: "FreshBox may link to third-party websites or use external services. We are not responsible for the privacy practices of independent third parties. Please review their privacy policies before providing personal information.",
  },
  {
    title: "10. Children",
    text: "FreshBox does not intend to collect children's personal information in violation of applicable law. If you believe a child has provided personal information improperly, please contact us.",
  },
  {
    title: "11. Changes to This Policy",
    text: "We may update this Privacy Policy when our services or legal requirements change. Updated versions will be published on this page.",
  },
  {
    title: "12. Contact Us",
    text: "For privacy questions or requests concerning your personal information, contact FreshBox at freshboxhq@gmail.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-gray-800">
      <h1 className="mb-3 text-4xl font-bold text-green-700">
        FreshBox Privacy Policy
      </h1>

      <p className="mb-8 text-sm text-gray-500">
        Last updated: October 14, 2026
      </p>

      <p className="mb-8 leading-7">
        This policy describes how FreshBox handles personal information when
        you visit our website or use our services. Please read it carefully.
      </p>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-3 text-xl font-semibold text-gray-900">
              {section.title}
            </h2>
            <p className="leading-7 text-gray-700">{section.text}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
