import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          About <span className="text-fuchsia-400">Us</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          At <span className="text-fuchsia-400">GraphicWorks</span>, we combine creativity, 
          strategy, and cutting-edge technology to craft websites that deliver real results.  
          Our mission is to help brands stand out online, captivate their audience, and grow their business.
        </motion.p>
      </div>
    </section>
  );
}
