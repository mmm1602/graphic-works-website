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
      {/* Global Background */}
      <div className="absolute inset-0 w-full -z-10 h-full bg-gradient-to-br from-black via-green-700/70 to-green-400/50 overflow-hidden">
        {/* Enhanced decorative wallpaper background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Large blurred gradient blobs */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-green-300 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-2xl animate-spin-slow"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-green-800 opacity-40 blur-3xl animate-pulse"></div>
          {/* Subtle geometric SVG patterns */}
          <svg className="absolute top-0 left-0 opacity-10" width="100%" height="400" viewBox="0 0 800 400" fill="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#059669" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#grid)" />
          </svg>
          {/* Animated floating circles */}
          <svg className="absolute top-20 right-40 animate-float-slow opacity-20" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="60" fill="#10b981" />
          </svg>
          <svg className="absolute bottom-32 left-24 animate-float-slower opacity-15" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#34d399" />
          </svg>
        </div>
      </div>
      <section className="py-30 px-6 max-w-4xl mx-auto">
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
              If you have questions about these terms, please email us at <a href="mailto:graphicworksdigital@gmail.com" className="text-blue-600 underline">graphicworksdigital@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
