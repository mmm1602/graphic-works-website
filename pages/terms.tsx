import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | GraphicWorks</title>
        <meta
          name="description"
          content="Read our terms of service regarding project agreements, payments, usage, and more."
        />
      </Head>

      <Navbar />

      <section className="py-20 px-6 bg-white text-gray-800 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>

        <div className="space-y-8 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
            <p>
              By using our services, you agree to the terms outlined on this page. These terms apply to all design, development, media, and consulting services provided by YourAgencyName.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. Project Scope</h2>
            <p>
              All projects will be outlined in a written proposal. Any additional features or changes requested after the project has started may incur additional costs and time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Payment Terms</h2>
            <p>
              Projects typically require a 50% upfront deposit, with the remainder due upon final delivery. Late payments may result in project delays or service suspension.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Revisions</h2>
            <p>
              Unless stated otherwise, each design project includes up to 2 rounds of revisions. Additional revisions will be billed at our hourly rate.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Ownership & Licensing</h2>
            <p>
              Upon full payment, you own all rights to the final deliverables. We reserve the right to showcase work in our portfolio unless agreed otherwise in writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Cancellations & Refunds</h2>
            <p>
              You may cancel a project at any time. Deposits are non-refundable once work has begun. Any work completed up to the cancellation will be invoiced.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Liability</h2>
            <p>
              We are not liable for any loss of business or damages arising from the use of our services or deliverables. It is your responsibility to review and approve all materials before launch.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Contact</h2>
            <p>
              If you have questions about these terms, please email us at <a href="mailto:contact@youragency.com" className="text-blue-600 underline">contact@youragency.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
