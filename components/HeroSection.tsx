export default function HeroSection() {
    return (
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">
            We Design & Code Future-Ready Websites 🚀
          </h1>
          <p className="text-xl mb-8 max-w-2xl drop-shadow-md">
            Custom web development services to grow your brand and your business.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-black bg-opacity-70 rounded-md text-lg hover:bg-opacity-90 transition"
          >
            Let's Work Together
          </a>
        </div>
  
        {/* Optional overlay for better contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-5"></div>
      </section>
    );
  }
  