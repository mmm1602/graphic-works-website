export default function ServicesSection() {
    return (
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Custom Websites</h3>
            <p className="text-gray-600">
              Fully custom responsive websites that look amazing everywhere.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">E-Commerce</h3>
            <p className="text-gray-600">
              Beautiful, secure online stores optimized for sales.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Landing Pages</h3>
            <p className="text-gray-600">
              High-converting landing pages for campaigns and launches.
            </p>
          </div>
        </div>
      </section>
    );
  }
  