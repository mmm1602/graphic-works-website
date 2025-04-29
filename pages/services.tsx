import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Custom Website Design</h2>
            <p className="text-gray-600">
              Beautiful, responsive websites built from scratch to reflect your brand’s identity and goals.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Landing Pages</h2>
            <p className="text-gray-600">
              High-converting landing pages optimized for lead generation and sales campaigns.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">E-Commerce Sites</h2>
            <p className="text-gray-600">
              Modern online stores with smooth UX, inventory integration, and secure checkout.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">Site Maintenance & SEO</h2>
            <p className="text-gray-600">
              Ongoing updates, performance monitoring, and SEO optimization to keep you growing.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
