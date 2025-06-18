import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

const resourcesLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  // Add more social links as needed
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 py-12 relative z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo, Tagline, and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-white tracking-tight">GraphicWorks</h2>
            <p className="text-green-400 mt-2 text-sm">
              &copy; {new Date().getFullYear()} GraphicWorks. All rights reserved.
            </p>
            <p className="mt-4 text-gray-300 text-center md:text-left max-w-xs">
              Creative solutions for your brand. We design, develop, and deliver.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-2 md:gap-4 md:items-center">
            <span className="uppercase text-green-400 font-semibold mb-2 tracking-wide">Navigation</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-green-400 transition font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Resources Links */}
          <nav className="flex flex-col items-center gap-2 md:gap-4 md:items-center">
            <span className="uppercase text-green-400 font-semibold mb-2 tracking-wide">Resources</span>
            {resourcesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-green-400 transition font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Legal Links & Social */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-green-400 transition text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-gray-300 text-sm text-center md:text-right">
              <span className="font-semibold text-white">Get in touch:</span> graphicworksdigital@gmail.com
            </div>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}