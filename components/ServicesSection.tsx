export default function ServicesSection() {
    return (
      <section className="max-w-6xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Custom Websites */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Custom Websites</h3>
            <p className="text-gray-600">
              Fully custom, responsive websites tailored to your brand’s identity.
            </p>
          </div>
  
          {/* E-Commerce */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
            <p className="text-gray-600">
              Beautiful and secure online stores optimized for seamless shopping experiences.
            </p>
          </div>
  
          {/* Landing Pages */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Landing Pages</h3>
            <p className="text-gray-600">
              High-converting landing pages for marketing campaigns and product launches.
            </p>
          </div>
  
          {/* 3D Modeling */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">3D Modeling for Real Estate & More</h3>
            <p className="text-gray-600">
              High-quality 3D models for real estate showcases, product visualization, and architectural presentations. Bring your spaces and concepts to life.
            </p>
          </div>
        
        </div>
      </section>
    );
  }
  