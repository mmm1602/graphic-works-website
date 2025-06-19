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