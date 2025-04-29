import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          We’re a passionate team of designers and developers dedicated to crafting unique, functional, and stunning websites. Our mission is to help businesses establish a strong online presence that reflects their vision and values.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Client-first design philosophy</li>
            <li>Clean and scalable code</li>
            <li>Transparency and communication</li>
            <li>Speed, SEO, and performance</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}
