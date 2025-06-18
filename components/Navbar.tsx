'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const settingsRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(storedDarkMode);
    document.documentElement.classList.toggle('dark', storedDarkMode);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    }
    if (showSettings) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSettings]);

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur shadow-sm transition-colors duration-300 ${
        isDarkMode ? 'bg-green-900/70' : 'bg-green-300/70'
      } transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold tracking-tight text-black dark:text-white">
          <span className="bg-gradient-to-r from-green-700 to-green-500 dark:from-green-400 dark:to-green-200 bg-clip-text text-transparent">
            GraphicWorks
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition duration-200 font-medium relative group px-2 py-1"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-700 dark:bg-green-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          {/* Settings Dropdown */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setShowSettings((v) => !v)}
              className="flex items-center gap-1 px-3 py-1 rounded hover:bg-green-200 dark:hover:bg-green-800 transition"
              aria-haspopup="true"
              aria-expanded={showSettings}
            >
              <span className="text-gray-700 dark:text-gray-300 font-medium">Settings</span>
              <ChevronDown size={18} className="text-gray-700 dark:text-gray-300" />
            </button>
            {showSettings && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-green-900 rounded shadow-lg border border-green-100 dark:border-green-800 py-2 z-50">
                <div className="px-4 py-2 flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Dark Mode</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      className="sr-only"
                    />
                    <div className="w-10 h-5 bg-green-300 dark:bg-green-800 rounded-full transition-all duration-300">
                      <div
                        className={`absolute top-0 left-0 w-5 h-5 bg-white dark:bg-green-400 rounded-full shadow-md transform transition-transform duration-300 ${
                          isDarkMode ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 dark:text-gray-200"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-300 dark:bg-green-900 border-t border-green-200 dark:border-green-700 shadow">
          <nav className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white font-medium py-2 transition"
              >
                {item.label}
              </Link>
            ))}
            {/* Settings Dropdown in Mobile */}
            <div className="mt-2">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer py-2 px-2 rounded hover:bg-green-200 dark:hover:bg-green-800 text-gray-800 dark:text-gray-200 font-medium">
                  Settings
                  <ChevronDown size={18} className="ml-2 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="pl-4 pt-2 flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Dark Mode</span>
                  <label className="relative inline-flex items-center cursor-pointer ml-2">
                    <input
                      type="checkbox"
                      checked={isDarkMode}
                      onChange={toggleDarkMode}
                      className="sr-only"
                    />
                    <div className="w-10 h-5 bg-green-300 dark:bg-green-800 rounded-full transition-all duration-300">
                      <div
                        className={`absolute top-0 left-0 w-5 h-5 bg-white dark:bg-green-400 rounded-full shadow-md transform transition-transform duration-300 ${
                          isDarkMode ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      ></div>
                    </div>
                  </label>
                </div>
              </details>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}