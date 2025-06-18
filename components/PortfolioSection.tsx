export default function PortfolioSection() {
    return (
      <section className="bg-gradient-to-b from-green-950 via-black/80 to-black py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Recent Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project cards */}
        <div className=" shadow-md rounded-lg overflow-hidden">
          <img src="/images/e-commerce.jpg" alt="Project 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Site</h3>
            <p className="text-gray-600">Boosted sales by 40% with redesign.</p>
          </div>
        </div>
        {/* Add more projects here */}
        <div className=" shadow-md rounded-lg overflow-hidden">
            <img src="/images/real-estate.jpg" alt="3D Model Project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">3D Real Estate Visualization</h3>
              <p className="text-gray-600">
            Interactive 3D models to showcase properties with stunning realism.
              </p>
            </div>
          </div>
          {/* New project card */}
          <div className=" shadow-md rounded-lg overflow-hidden">
            <img src="/images/branding.jpg" alt="Branding Project" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Brand Identity Design</h3>
              <p className="text-gray-600">
            Developed cohesive branding for startups and established businesses.
              </p>
            </div>
            </div>
        </div>
        {/* Add more projects here */}
        </div>
      </section>
    );
  }
  