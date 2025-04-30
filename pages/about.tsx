import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | YourAgencyName</title>
        <meta
          name="description"
          content="Learn about our mission, values, and the creative team behind your next web project."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">More Than Just a Web Design Studio</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We're a creative team dedicated to building websites, brands, and digital experiences that drive results.
        </p>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We started this agency with a simple idea: to create websites that not only look great but actually help businesses grow. Our team brings together designers, developers, and strategists who care deeply about delivering value — not just visuals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Over the years, we've built everything from lean landing pages for startups to immersive brand platforms for growing businesses. We're proud of the results our work delivers — and the relationships we build along the way.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-2">Design That Works</h3>
            <p className="text-gray-600">
              Every layout, font, and color choice has a purpose: to make your brand stand out and perform better.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Built for the Future</h3>
            <p className="text-gray-600">
              We use modern frameworks like Next.js and TailwindCSS to ensure speed, SEO, and scalability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Partnership Over Projects</h3>
            <p className="text-gray-600">
              We collaborate closely with you — not just to deliver a website, but to understand your goals and make them real.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">Ready to Work Together?</h2>
        <p className="text-gray-600 mb-8">We'd love to hear about your project and explore how we can help.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}
