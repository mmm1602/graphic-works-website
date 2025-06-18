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
