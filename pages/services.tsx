import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | YourAgencyName</title>
        <meta name="description" content="Explore our full suite of design, development, and media services." />
      </Head>

      <Navbar />

      {/* Header Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          From custom websites to full-service digital packages including 3D modeling and photography, we provide high-quality design solutions tailored to your business goals.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">Custom Web Design</h3>
            <p className="text-gray-600">
              Responsive, modern websites built for performance, clarity, and conversion.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">E-Commerce Sites</h3>
            <p className="text-gray-600">
              Online stores that are fast, secure, and optimized for shopping experiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Landing Pages</h3>
            <p className="text-gray-600">
              High-converting pages for products, campaigns, or services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">SEO & Optimization</h3>
            <p className="text-gray-600">
              On-page SEO, speed tuning, and accessibility improvements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3D Modeling</h3>
            <p className="text-gray-600">
              Realistic 3D models for real estate, architecture, and product showcases.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Photography & Media</h3>
            <p className="text-gray-600">
              Professional imagery and video assets for your brand or property.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="bg-white max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Web Design Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="border rounded-xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Basic</h3>
            <p className="text-gray-600 mb-6">Perfect for personal portfolios or small businesses.</p>
            <ul className="text-left text-gray-700 mb-6 space-y-2">
              <li>✅ 1–3 page responsive site</li>
              <li>✅ Mobile-first design</li>
              <li>✅ Contact form</li>
              <li>✅ 1-week delivery</li>
            </ul>
            <p className="text-2xl font-bold mb-4">$500</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Get Started
            </a>
          </div>

          {/* Pro */}
          <div className="border-2 border-black rounded-xl p-8 shadow-lg bg-gray-100">
            <h3 className="text-2xl font-semibold mb-4">Pro</h3>
            <p className="text-gray-600 mb-6">For growing brands that want to look and perform better.</p>
            <ul className="text-left text-gray-700 mb-6 space-y-2">
              <li>✅ Everything in Basic</li>
              <li>✅ Branding & custom colors</li>
              <li>✅ SEO setup + Analytics</li>
              <li>✅ 2-week delivery</li>
            </ul>
            <p className="text-2xl font-bold mb-4">$1200</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Request This Plan
            </a>
          </div>

          {/* Premium */}
          <div className="border rounded-xl p-8 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold mb-4">Premium</h3>
            <p className="text-gray-600 mb-6">Complete creative + deployment support for your brand.</p>
            <ul className="text-left text-gray-700 mb-6 space-y-2">
              <li>✅ Everything in Pro</li>
              <li>✅ 3D modeling, photography, media</li>
              <li>✅ Hosting, email & domain setup</li>
              <li>✅ Custom quote & timeline</li>
            </ul>
            <p className="text-2xl font-bold mb-4">Custom Quote</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
