import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Web Design | YourAgencyName</title>
        <meta name="description" content="We build beautiful, high-converting websites for businesses." />
      </Head>

      <Navbar />
      <HeroSection />

      {/* Services Section */}
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Custom Websites</h3>
            <p className="text-gray-600">
              Fully custom, responsive designs that look amazing on any device.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
            <p className="text-gray-600">
              Powerful online stores optimized for conversions and smooth checkout experiences.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Landing Pages</h3>
            <p className="text-gray-600">
              High-converting pages for marketing campaigns, product launches, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Recent Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-Commerce Redesign</h3>
                <p className="text-gray-600">
                  Boosted sales by 40% with a fresh UX and mobile-first redesign.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/project2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Startup Launch Page</h3>
                <p className="text-gray-600">
                  Designed a sharp landing page for a successful startup debut.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="/images/project3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-600">
                  Built a personal brand site that got a client 3 freelance gigs in 1 month.
                </p>
              </div>
            </div>
          </div>
          <a
            href="/portfolio"
            className="inline-block mt-10 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            View Full Portfolio
          </a>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Our Team</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We are passionate designers, developers, and strategists committed to delivering high-impact digital experiences.
          With a client-first mindset, we build websites that don't just look good — they drive real results.
        </p>
        <a
          href="/about"
          className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Learn More About Us
        </a>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-black text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
        <p className="text-lg text-gray-300 mb-8">
          Contact us today for a free consultation and let's build something amazing together.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition"
        >
          Get in Touch
        </a>
      </section>

      <Footer />
    </>
  );
}
