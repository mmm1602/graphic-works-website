import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Links */}
        <div className="hidden md:flex gap-8 text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
        </div>

        {/* Logo */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold tracking-wide"
        >
          <Link href="/" className="text-white">
            Graphic<span className="text-fuchsia-400">Works</span>
          </Link>
        </motion.div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="px-4 py-2 bg-fuchsia-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Get a Free Quote
        </Link>
      </div>
    </nav>
  );
}
