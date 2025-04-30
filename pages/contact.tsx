import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | GraphicWorks</title>
        <meta name="description" content="Our contact page is coming soon. Stay tuned!" />
      </Head>

      <Navbar />

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact Page Coming Soon</h1>
        <p className="text-gray-600 text-lg max-w-xl">
          We’re currently putting the final touches on our new contact system. In the meantime, feel free to email us directly at <a href="mailto:contact@youragency.com" className="text-blue-600 underline">contact@youragency.com</a>.
        </p>
      </section>

      <Footer />
    </>
  );
}
