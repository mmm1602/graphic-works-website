import FadeInWhenVisible from '@/components/FadeInWhenVisible';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-black/50 to-black opacity-100 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
            Websites That Drive Results 🚀
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p className="text-lg md:text-2xl text-gray-300 mb-6 max-w-xl mx-auto">
            Empowering brands, startups, and creators with custom web design solutions.
          </p>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.4}>
          <a
            href="/contact"
            className="inline-block px-10 py-3 border border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition duration-300 shadow-md"
          >
            Get Your Free Quote
          </a>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}