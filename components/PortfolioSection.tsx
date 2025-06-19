import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PortfolioSection() {
  const projects = [
    {
      title: 'Boundless Motion',
      description: 'A dynamic website showcasing creative motion design projects.',
      image: '/images/boundless.png',
      link: 'https://boundless-motion.vercel.app/',
    },
    {
      title: 'Miguel Hurtado Software',
      description: 'A professional portfolio site for showcasing software development expertise.',
      image: '/images/portfolio-site.png',
      link: 'https://miguelhurtado.software/',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically scroll through projects
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [projects.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="bg-gradient-to-b from-green-950 via-black/80 to-black py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Recent Projects</h2>
        <div className="relative flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
          <div className="shadow-md rounded-lg overflow-hidden md:w-1/2">
            <Image
              src={projects[currentIndex].image}
              alt={projects[currentIndex].title}
              width={800}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="p-6 bg-black/80 md:w-1/2 text-left rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4 text-white">{projects[currentIndex].title}</h3>
            <p className="text-gray-400 mb-6">{projects[currentIndex].description}</p>
            <a
              href={projects[currentIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline mt-4 inline-block"
            >
              Visit Website →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}