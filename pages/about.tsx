import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | GraphicWorks</title>
        <meta
          name="description"
          content="Learn about our mission, values, and the creative team behind your next web project."
        />
      </Head>

      <div className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">
        {/* Global background */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
          <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-fuchsia-400 opacity-30 blur-[100px]"></div>
        </div>

        <Navbar />

        {/* Hero Section */}
        <section className="relative text-center overflow-hidden min-h-[60vh] flex items-center justify-center px-6">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              More Than Just a <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">Web Design Studio</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
              We’re a creative team passionate about crafting websites, brands, and digital experiences that drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
              >
                Start Your Project
              </a>
              <a
                href="#story"
                className="inline-block px-8 py-3 border border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition duration-300 shadow-md"
              >
                Our Story
              </a>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section id="story" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We started this agency with a simple idea: to create websites that not only look great but actually help businesses grow. Our team brings together designers, developers, and strategists who care deeply about delivering value — not just visuals.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Over the years, we've built everything from lean landing pages for startups to immersive brand platforms for growing businesses. We're proud of the results our work delivers — and the relationships we build along the way.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="mb-4 bg-zinc-900/60 p-4 rounded-full shadow-lg border border-zinc-800">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 17l6-6 6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design That Works</h3>
              <p className="text-gray-300">
                Every layout, font, and color choice has a purpose: to make your brand stand out and perform better.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 bg-zinc-900/60 p-4 rounded-full shadow-lg border border-zinc-800">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Built for the Future</h3>
              <p className="text-gray-300">
                We use modern frameworks like Next.js and TailwindCSS to ensure speed, SEO, and scalability.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 bg-zinc-900/60 p-4 rounded-full shadow-lg border border-zinc-800">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M3 21v-2a4 4 0 014-4h1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Partnership Over Projects</h3>
              <p className="text-gray-300">
                We collaborate closely with you — not just to deliver a website, but to understand your goals and make them real.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Work Together?</h2>
          <p className="text-gray-300 mb-8">
            We'd love to hear about your project and explore how we can help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Contact Us
          </a>
        </section>

        <Footer />
      </div>
    </>
  );
}