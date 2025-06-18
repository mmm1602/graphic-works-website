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
          ? 'border-2 border-black bg-stone-100/70 shadow-lg'
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
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
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
      <section className="bg-gray-100 py-20 px-6 text-center">
        <FadeInWhenVisible>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">What We Offer</h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            From custom websites to full-service digital packages including 3D modeling and photography, we provide high-quality design solutions tailored to your business goals.
          </p>
        </FadeInWhenVisible>
      </section>

      {/* Services Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12">Core Services</h2>
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