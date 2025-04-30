import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md relative">
      <Link href="/" className="text-4xl font-bold">
        YourAgency
      </Link>


      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6">
        <Link href="/services">Services</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center shadow-md md:hidden">
          <Link href="/services" className="py-2" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/portfolio" className="py-2" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link href="/about" className="py-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
