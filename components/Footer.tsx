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
    href: "https://instagram.com/graphicworks.digital",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.332 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.548.392 3.515 1.425 2.482 2.458 2.221 3.681 2.162 4.962.013 8.332 0 8.741 0 12s.013 3.668.072 4.948c.059 1.281.32 2.504 1.353 3.537 1.033 1.033 2.256 1.294 3.537 1.353 1.281.059 1.69.072 4.948.072s3.668-.013 4.948-.072c1.281-.059 2.504-.32 3.537-1.353 1.033-1.033 1.294-2.256 1.353-3.537.059-1.281.072-1.69.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.32-2.504-1.353-3.537-1.033-1.033-2.256-1.294-3.537-1.353C15.668.013 15.259 0 12 0z" />
        <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
  // Add more social links as needed
];

export default function Footer() {
  return (
    <footer className="bg-transparent py-25 relative z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Logo, Tagline, and Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="tracking-tight">GraphicWorks</h2>
            <p className="text-green-400 mt-2">
              &copy; {new Date().getFullYear()} GraphicWorks. All rights reserved.
            </p>
            <p className="mt-4 text-center md:text-left max-w-xs">
              Creative solutions for your brand. We design, develop, and deliver.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-1 md:gap-2 md:items-center">
            <span className="uppercase font-semibold mb-2 tracking-wide">Navigation</span>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline transition font-medium text-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Resources Links */}
          <nav className="flex flex-col items-center gap-1 md:gap-2 md:items-center">
            <span className="uppercase font-semibold mb-2 tracking-wide">Resources</span>
            {resourcesLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:underline transition font-medium text-base"
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
                  className="hover:underline transition text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 text-sm text-center md:text-right">
              <span className="font-semibold">Get in touch:</span> graphicworksdigital@gmail.com
            </div>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition"
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