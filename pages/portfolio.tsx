import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio | GraphicWorks</title>
        <meta
          name="description"
          content="Explore our portfolio of web design, branding, and digital projects for businesses of all sizes."
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <section className="relative text-white text-center overflow-hidden bg-transparent min-h-screen flex items-center justify-center">
        <div className="z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight animate-fade-in">
            Our <span className="text-green-200">Portfolio</span>
          </h1>
          <p className="text-lg md:text-2xl text-green-100 max-w-2xl mx-auto mb-10 drop-shadow animate-fade-in delay-200">
            A showcase of our favorite web, brand, and digital projects — crafted for real business results.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto py-32 px-4 sm:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-black shadow-xl rounded-2xl overflow-hidden border border-green-100 hover:shadow-2xl transition-shadow duration-300 group hover:animate-card-pop">
            <div className="relative">
              <img
                src="/images/boundless.png"
                alt="Boundless Motion"
                loading="lazy"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
            </div>
            <div className="p-7">
              <h2 className="text-2xl font-bold mb-2 text-green-800 group-hover:text-green-600 transition-colors duration-300">
                Boundless Motion
              </h2>
              <p className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">
                A dynamic website showcasing creative motion design projects.
              </p>
              <a
                href="https://boundless-motion.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Visit Website →
              </a>
            </div>
          </div>

          {/* Project Card 2 */}
          <div className="bg-black shadow-xl rounded-2xl overflow-hidden border border-green-100 hover:shadow-2xl transition-shadow duration-300 group hover:animate-card-pop">
            <div className="relative">
              <img
                src="/images/portfolio-site.png"
                alt="Miguel Hurtado Software"
                loading="lazy"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
            </div>
            <div className="p-7">
              <h2 className="text-2xl font-bold mb-2 text-green-800 group-hover:text-green-600 transition-colors duration-300">
                Miguel Hurtado Software
              </h2>
              <p className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">
                A professional portfolio site for showcasing software development expertise.
              </p>
              <a
                href="https://miguelhurtado.software/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Visit Website →
              </a>
            </div>
          </div>

          {/* Project Card 3 */}
          <div className="bg-black shadow-xl rounded-2xl overflow-hidden border border-green-100 hover:shadow-2xl transition-shadow duration-300 group hover:animate-card-pop">
            <div className="relative">
              <img
                src="/images/jdm.png"
                alt="JDM USA Website"
                loading="lazy"
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 to-transparent" />
            </div>
            <div className="p-7">
              <h2 className="text-2xl font-bold mb-2 text-green-800 group-hover:text-green-600 transition-colors duration-300">
                JDM USA Website
              </h2>
              <p className="text-gray-700 group-hover:text-green-800 transition-colors duration-300">
                A sleek and modern website for showcasing automotive services and products.
              </p>
              <a
                href="https://jdmusawebsite.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Visit Website →
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes card-pop {
            0% {
              transform: scale(1);
            }
            60% {
              transform: scale(1.04);
            }
            100% {
              transform: scale(1.02);
            }
          }
          .animate-card-pop {
            animation: card-pop 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}</style>
      </main>

      <Footer />
    </>
  );
}