import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | YourAgencyName</title>
        <meta
          name="description"
          content="Let’s work together. Reach out to us for web design, media, and 3D modeling projects."
        />
      </Head>

      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Let’s Build Something Great</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Fill out the form and we’ll get back to you with a quote, timeline, or answers to your questions.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Start a Conversation</h2>
          <ContactForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
