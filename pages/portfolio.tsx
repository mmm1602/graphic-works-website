'use client';
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

      <div className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">
        {/* Global background */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
          <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-fuchsia-400 opacity-30 blur-[100px]"></div>
        </div>

        <Navbar />

        <main className="flex-grow">
          {/* Projects Grid */}
          <section className="max-w-7xl mx-auto py-24 px-4 sm:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              {/* Project Card 1 */}
              <div className="bg-zinc-900/60 backdrop-blur rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-shadow duration-300 group shadow-xl hover:shadow-2xl">
                <div className="relative">
                  <img
                    src="/images/boundless.png"
                    alt="Boundless Motion"
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-7">
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    Boundless Motion
                  </h2>
                  <p className="text-gray-300 mb-3">
                    A dynamic website showcasing creative motion design projects.
                  </p>
                  <a
                    href="https://boundless-motion.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="bg-zinc-900/60 backdrop-blur rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-shadow duration-300 group shadow-xl hover:shadow-2xl">
                <div className="relative">
                  <img
                    src="/images/portfolio-site.png"
                    alt="Miguel Hurtado Software"
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-7">
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    Miguel Hurtado Software
                  </h2>
                  <p className="text-gray-300 mb-3">
                    A professional portfolio site for showcasing software development expertise.
                  </p>
                  <a
                    href="https://miguelhurtado.software/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="bg-zinc-900/60 backdrop-blur rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-shadow duration-300 group shadow-xl hover:shadow-2xl">
                <div className="relative">
                  <img
                    src="/images/jdm.png"
                    alt="JDM USA Website"
                    loading="lazy"
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-7">
                  <h2 className="text-2xl font-bold mb-2 text-white">
                    JDM USA Website
                  </h2>
                  <p className="text-gray-300 mb-3">
                    A sleek and modern website for showcasing automotive services and products.
                  </p>
                  <a
                    href="https://jdmusawebsite.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline"
                  >
                    Visit Website →
                  </a>
                </div>
              </div>
            </div>
            {/* keep card pop animation */}
            <style jsx>{`
              @keyframes card-pop {
                0% { transform: scale(1); }
                60% { transform: scale(1.04); }
                100% { transform: scale(1.02); }
              }
              .animate-card-pop { animation: card-pop 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
            `}</style>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}