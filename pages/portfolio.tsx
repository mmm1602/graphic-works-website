import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Our Work</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Example project card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/project1.jpg" alt="Project 1" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">E-Commerce Redesign</h2>
              <p className="text-gray-600">
                Revamped a full online store for higher conversions and better UX.
              </p>
            </div>
          </div>

          {/* Duplicate for other projects */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/project2.jpg" alt="Project 2" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Startup Landing Page</h2>
              <p className="text-gray-600">
                A sharp, fast-loading landing page for a tech startup's launch campaign.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/images/project3.jpg" alt="Project 3" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">Portfolio Site</h2>
              <p className="text-gray-600">
                Personal site for a creative to showcase their projects and skills.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
