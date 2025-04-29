export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen p-6 md:p-12 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div>

      <div className="relative z-20 flex flex-col items-center text-white">
        <h1 className="text-3xl md:text-6xl font-bold mb-6">We Build Websites That Grow 🚀</h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-xl">
          Custom, responsive, and high-converting websites for brands and businesses.
        </p>
        <a href="/contact" className="px-6 py-3 bg-black bg-opacity-70 text-white rounded-md hover:bg-opacity-90 transition w-full md:w-auto">
          Get a Free Quote
        </a>
      </div>
    </section>
  );
}
