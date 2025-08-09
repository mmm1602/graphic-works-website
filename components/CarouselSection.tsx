import { useRef, useEffect } from 'react';

export default function PortfolioCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollStep = () => {
      if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollTo({ left: 0 });
      } else {
        carousel.scrollLeft += 1;
      }
      scrollAmount = requestAnimationFrame(scrollStep);
    };

    scrollAmount = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(scrollAmount);
  }, []);

  return (
    <section className="py-16 bg-black">
      <h2 className="text-center text-3xl font-bold text-white mb-10">
        Recent <span className="text-fuchsia-400">Projects</span>
      </h2>
      <div ref={carouselRef} className="flex gap-6 overflow-x-auto px-6 scrollbar-hide">
        {[...Array(9)].map((_, i) => (
          <img
            key={i}
            src="/images/portfolio-site.png"
            alt={`Project ${i + 1}`}
            className="w-56 h-36 object-cover rounded-lg shadow-lg hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
}
