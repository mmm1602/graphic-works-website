import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';

const PRICING_TIERS = [
  {
    title: 'Basic',
    description: 'Perfect for personal portfolios or small businesses.',
    features: [
      '✅ 1–3 page responsive site',
      '✅ Mobile-first design',
      '✅ Contact form',
      '✅ 1-week delivery',
    ],
    price: '$500',
    buttonText: 'Get Started',
    buttonLink: '/contact',
  },
  {
    title: 'Pro',
    description: 'For growing brands that want to look and perform better.',
    features: [
      '✅ Everything in Basic',
      '✅ Branding & custom colors',
      '✅ SEO setup + Analytics',
      '✅ 2-week delivery',
    ],
    price: '$1200',
    buttonText: 'Request This Plan',
    buttonLink: '/contact',
    isHighlighted: true,
  },
  {
    title: 'Premium',
    description: 'Complete creative + deployment support for your brand.',
    features: [
      '✅ Everything in Pro',
      '✅ 3D modeling, photography, media',
      '✅ Hosting, email & domain setup',
      '✅ Custom quote & timeline',
    ],
    price: 'Custom Quote',
    buttonText: 'Let’s Talk',
    buttonLink: '/contact',
  },
];

const CORE_SERVICES = [
  {
    title: 'Custom Web Design',
    description: 'Responsive, modern websites built for performance, clarity, and conversion.',
  },
  {
    title: 'E-Commerce Sites',
    description: 'Online stores that are fast, secure, and optimized for shopping experiences.',
  },
  {
    title: 'Landing Pages',
    description: 'High-converting pages for products, campaigns, or services.',
  },
  {
    title: 'SEO & Optimization',
    description: 'On-page SEO, speed tuning, and accessibility improvements.',
  },
  {
    title: '3D Modeling',
    description: 'Realistic 3D models for real estate, architecture, and product showcases.',
  },
  {
    title: 'Photography & Media',
    description: 'Professional imagery and video assets for your brand or property.',
  },
];

function PricingTierCard({
  tier,
}: {
  tier: typeof PRICING_TIERS[number];
}) {
  return (
    <div
      className={`border rounded-xl p-8 shadow transition ${
        tier.isHighlighted
          ? 'border-2 border-black bg-stone-100/30 shadow-lg'
          : 'hover:shadow-lg'
      }`}
    >
      <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
      <p className="mb-6">{tier.description}</p>
      <ul className="text-left mb-6 space-y-2">
        {tier.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <p className="text-2xl font-bold mb-4">{tier.price}</p>
      <a
        href={tier.buttonLink}
        className={`inline-block px-6 py-3 rounded font-medium transition ${
          tier.isHighlighted
            ? 'bg-black text-white hover:bg-gray-800'
            : 'bg-gray-900 text-white hover:bg-gray-800'
        }`}
      >
        {tier.buttonText}
      </a>
    </div>
  );
}

function ServiceCard({ service }: { service: typeof CORE_SERVICES[number] }) {
  return (
    <div className="shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="font-semibold mb-2">{service.title}</h3>
      <p className="">{service.description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services | GraphicWorks</title>
        <meta
          name="description"
          content="Explore our full suite of design, development, and media services tailored to your business needs."
        />
      </Head>

      <Navbar />
      {/* Global Background */}
      <div className="absolute inset-0 w-full -z-10 h-full bg-gradient-to-br from-black via-green-700/70 to-green-400/50 overflow-hidden">
        {/* Enhanced decorative wallpaper background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Large blurred gradient blobs */}
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-green-300 opacity-30 blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-green-500 opacity-20 blur-2xl animate-spin-slow"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-green-800 opacity-40 blur-3xl animate-pulse"></div>
          {/* Subtle geometric SVG patterns */}
          <svg className="absolute top-0 left-0 opacity-10" width="100%" height="400" viewBox="0 0 800 400" fill="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#059669" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="800" height="400" fill="url(#grid)" />
          </svg>
          {/* Animated floating circles */}
          <svg className="absolute top-20 right-40 animate-float-slow opacity-20" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="60" fill="#10b981" />
          </svg>
          <svg className="absolute bottom-32 left-24 animate-float-slower opacity-15" width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="40" fill="#34d399" />
          </svg>
        </div>
      </div>
      {/* Pricing Tiers Section */}
      <section className="bg-transparent max-w-6xl mx-auto py-30 px-6 text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12">Web Design Packages</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_TIERS.map((tier, index) => (
              <PricingTierCard key={index} tier={tier} />
            ))}
          </div>
        </FadeInWhenVisible>
      </section>

      {/* Header Section */}
      <section className="bg-transparent  py-20 px-6 text-center">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p className="text-lg max-w-3xl mx-auto">
            From custom websites to full-service digital packages including 3D modeling and photography, we provide high-quality design solutions tailored to your business goals.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <FadeInWhenVisible>
          <h2 className="font-bold mb-12 text-center">Core Services</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
            {CORE_SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </FadeInWhenVisible>
      </section>

      <Footer />
    </>
  );
}