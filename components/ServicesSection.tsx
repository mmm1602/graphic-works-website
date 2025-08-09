import { motion } from 'framer-motion';

const services = [
  {
    title: "Custom Web Design",
    description: "Tailored designs built to reflect your brand and engage your audience.",
    icon: "🎨",
  },
  {
    title: "SEO Optimization",
    description: "Rank higher on Google with optimized structure, speed, and keywords.",
    icon: "🚀",
  },
  {
    title: "Brand Identity",
    description: "Logo, color palette, and brand guidelines to ensure a consistent look.",
    icon: "💡",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          Our <span className="text-fuchsia-400">Services</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-900 p-6 rounded-xl shadow-lg border border-white/10"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
