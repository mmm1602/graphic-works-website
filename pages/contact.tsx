import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
        {submitted ? (
          <p className="text-green-600 text-center">Thanks! We'll be in touch soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Your Message"
              className="w-full border p-3 rounded"
              onChange={handleChange}
              required
            />
            <button type="submit" className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
              Send Message
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
