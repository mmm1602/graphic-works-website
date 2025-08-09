import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-fuchsia-400 opacity-30 blur-[120px] -z-10"></div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold text-white mb-6"
      >
        Creating Websites <br />
        <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
          That Drive Results
        </span>
      </motion.h1>

      {/* Feature List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 text-gray-300 mb-10"
      >
        {["Unlimited requests", "1-week delivery", "Pause or cancel anytime"].map((item, i) => (
          <span key={i} className="flex items-center gap-2">
            <svg className="w-5 h-5 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {item}
          </span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.a
        href="/contact"
        whileHover={{ scale: 1.05 }}
        className="px-6 py-3 bg-gradient-to-r from-fuchsia-500 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition"
      >
        Start Your Project
      </motion.a>
    </section>
  );
}
