import { ShoppingCart, Globe, Presentation, Box } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="bg-black py-20 px-6">
      <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white text-center">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Custom Websites */}
        <div className="group bg-white dark:bg-stone-800 shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
          <Globe className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Custom Websites
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Fully custom, responsive websites tailored to your brand’s identity.
          </p>
          <a
            href="/services/custom-websites"
            className="text-green-600 dark:text-green-400 font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* E-Commerce */}
        <div className="group bg-white dark:bg-stone-800 shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
          <ShoppingCart className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            E-Commerce Solutions
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Beautiful and secure online stores optimized for seamless shopping experiences.
          </p>
          <a
            href="/services/e-commerce"
            className="text-green-600 dark:text-green-400 font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* Landing Pages */}
        <div className="group bg-white dark:bg-stone-800 shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
          <Presentation className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Landing Pages
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            High-converting landing pages for marketing campaigns and product launches.
          </p>
          <a
            href="/services/landing-pages"
            className="text-green-600 dark:text-green-400 font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>

        {/* 3D Modeling */}
        <div className="group bg-white dark:bg-stone-800 shadow-md rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center text-center">
          <Box className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            3D Modeling for Real Estate & More
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            High-quality 3D models for real estate showcases, product visualization, and architectural presentations.
          </p>
          <a
            href="/services/3d-modeling"
            className="text-green-600 dark:text-green-400 font-medium hover:underline"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}