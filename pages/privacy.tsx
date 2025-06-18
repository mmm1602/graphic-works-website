import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | GraphicWorks</title>
        <meta name="description" content="Learn how we collect, use, and protect your personal information." />
      </Head>

      <Navbar />

      <section className="py-30 px-6  max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              GraphicWorks is committed to protecting your privacy. This policy outlines how we collect, use, and store your data when you interact with our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
            <p>
              We may collect personal information you provide when submitting forms on our site (such as name, email, project details), or automatically through analytics tools (such as IP address, browser info, etc.).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside ">
              <li>To respond to your contact requests or inquiries</li>
              <li>To deliver our services or proposals</li>
              <li>To improve website performance and user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Sharing</h2>
            <p>
              We do not sell or rent your personal data. We may use trusted third-party tools (like Google Fonts, Vercel, or form handlers) that may collect anonymous usage data. Any data processors we use are GDPR-compliant.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Cookies</h2>
            <p>
              Our site may use cookies to analyze traffic and enhance usability. You can choose to disable cookies via your browser settings at any time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete any personal data we store. You may request this by contacting us at <a href="mailto:graphicworksdigital@gmail.com" className="text-blue-600 underline">graphicworksdigital@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Data Retention</h2>
            <p>
              We retain your data only as long as necessary to fulfill the purpose for which it was collected, or to comply with legal obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy at any time. The latest version will always be available on this page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">9. Contact Us</h2>
            <p>
              If you have any questions or concerns, email us at <a href="mailto:graphicworksdigital@gmail.com" className="text-blue-600 underline">graphicworksdigital@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
