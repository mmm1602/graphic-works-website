'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(id);
  }, [projects.length]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold mb-12 text-white">Our Portfolio</h2>
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[current].title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <Image
              src={projects[current].image}
              alt={projects[current].title}
              width={800}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={projects[current].description}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-black/70 p-6 rounded-lg"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">{projects[current].title}</h3>
          <p className="text-gray-300 mb-6">{projects[current].description}</p>
          <a
            href={projects[current].link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-fuchsia-400 hover:underline"
          >
            Visit Website →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
