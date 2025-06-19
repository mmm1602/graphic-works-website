import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | GraphicWorks</title>
        <meta
          name="description"
          content="Let’s work together. Reach out to us for web design, media, and 3D modeling projects."
        />
      </Head>

      <Navbar/>
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
      
      {/* Contact Section – Side by Side */}
      <section className="py-20 px-6">
        <div className="bg-transparent max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
          {/* Left Text Content */}
            <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Start a Conversation</h2>
            <p className="text-gray-100 mb-6">
              Whether you're ready to get started or just exploring your options, we're happy to talk.
              Tell us about your project and we'll reply with a custom quote or helpful advice.
            </p>
            <ul className="text-gray-100 space-y-2 text-sm">
              <li>📍 Based in Orlando, FL (Serving clients globally)</li>
              <li>✉️ graphicworksdigital@gmail.com</li>
              <li>
              📞{' '}
              <a href="tel:+16892981104" className="hover:underline">
                +1 (689) 298‑1104
              </a>
              </li>
            </ul>
            </div>

          {/* Right Contact Form */}
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
