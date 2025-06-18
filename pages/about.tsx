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

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white py-44 md:py-64 px-6 text-center overflow-hidden bg-gradient-to-br from-black via-green-700/70 to-green-400/50">
        {/* Enhanced decorative wallpaper background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Large blurred gradient blobs */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-green-300 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-2xl animate-spin-slow"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-green-800 opacity-40 blur-3xl animate-pulse"></div>
          {/* Subtle geometric SVG patterns */}
          <svg className="absolute top-0 left-0 opacity-10" width="800" height="400" viewBox="0 0 800 400" fill="none">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#059669" strokeWidth="1"/>
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
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight animate-fade-in">
        More Than Just a <span className="text-green-200">Web Design Studio</span>
          </h1>
          <p className="text-lg md:text-2xl text-green-100 max-w-2xl mx-auto mb-10 drop-shadow animate-fade-in delay-200">
        We’re a creative team passionate about crafting websites, brands, and digital experiences that drive real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in delay-400">
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-green-800 font-semibold rounded-full shadow-lg hover:bg-green-100 transition"
        >
          Start Your Project
        </a>
        <a
          href="#story"
          className="inline-block px-8 py-4 bg-green-800 bg-opacity-60 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition border border-white border-opacity-20"
        >
          Our Story
        </a>
          </div>
        </div>
        <style jsx global>{`
          @keyframes fade-in {
        0% { opacity: 0; transform: translateY(30px);}
        100% { opacity: 1; transform: translateY(0);}
          }
          .animate-fade-in {
        animation: fade-in 1s ease forwards;
        opacity: 0;
          }
          .animate-fade-in.delay-200 {
        animation-delay: 0.2s;
          }
          .animate-fade-in.delay-400 {
        animation-delay: 0.4s;
          }
          @keyframes spin-slow {
        0% { transform: rotate(0deg);}
        100% { transform: rotate(360deg);}
          }
          .animate-spin-slow {
        animation: spin-slow 12s linear infinite;
          }
          @keyframes float-slow {
        0%, 100% { transform: translateY(0);}
        50% { transform: translateY(-30px);}
          }
          .animate-float-slow {
        animation: float-slow 8s ease-in-out infinite;
          }
          @keyframes float-slower {
        0%, 100% { transform: translateY(0);}
        50% { transform: translateY(20px);}
          }
          .animate-float-slower {
        animation: float-slower 12s ease-in-out infinite;
          }
        `}</style>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">Our Story</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            We started this agency with a simple idea: to create websites that not only look great but actually help businesses grow. Our team brings together designers, developers, and strategists who care deeply about delivering value — not just visuals.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Over the years, we've built everything from lean landing pages for startups to immersive brand platforms for growing businesses. We're proud of the results our work delivers — and the relationships we build along the way.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="mb-4 bg-green-100 dark:bg-green-900 p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 17l6-6 6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Design That Works</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Every layout, font, and color choice has a purpose: to make your brand stand out and perform better.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 bg-green-100 dark:bg-green-900 p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 8v4l3 3" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Built for the Future</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We use modern frameworks like Next.js and TailwindCSS to ensure speed, SEO, and scalability.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4 bg-green-100 dark:bg-green-900 p-4 rounded-full shadow-lg">
              <svg className="w-8 h-8 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 20h5v-2a4 4 0 00-4-4h-1" />
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 014-4h1" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Partnership Over Projects</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We collaborate closely with you — not just to deliver a website, but to understand your goals and make them real.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Ready to Work Together?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          We'd love to hear about your project and explore how we can help.
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-green-700 text-white rounded-md hover:bg-green-600 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}