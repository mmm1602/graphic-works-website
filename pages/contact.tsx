import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | GraphicWorks</title>
        <meta
          name="description"
          content="Let’s work together. Reach out to us for web design, media, and 3D modeling projects."
        />
      </Head>

      <div className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">
        {/* Global background */}
        <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]">
          <div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-fuchsia-400 opacity-30 blur-[100px]"></div>
        </div>

        <Navbar />

        <main className="flex-grow">
          {/* Hero */}
          <section className="relative min-h-[50vh] flex items-center justify-center text-center">
            {/* Decorative soft glows */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-fuchsia-500/10 blur-3xl" />
              <div className="absolute top-10 right-[-10%] h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Get in <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto">
                Tell us about your project and we’ll follow up with next steps and a custom quote.
              </p>

              {/* Badges */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
                <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60">Replies in ~24 hours</span>
                <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60">No obligation consultation</span>
                <span className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/60">Projects worldwide</span>
              </div>
            </div>
          </section>

          {/* Contact Section – Info + Form */}
          <section className="relative px-6 pb-24">
            {/* Background accents */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute bottom-[-10%] left-[-10%] h-[380px] w-[380px] rounded-full bg-fuchsia-500/10 blur-3xl" />
              <div className="absolute bottom-0 right-[-15%] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-2 items-stretch">
              {/* Info panel */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur p-6 md:p-8 h-full shadow-xl">
                <h2 className="text-2xl font-semibold">Contact information</h2>
                <p className="mt-2 text-gray-300">Prefer email, phone, or a quick form—whatever works best for you.</p>

                <div className="mt-8 space-y-4">
                  <a href="mailto:graphicworksdigital@gmail.com" className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/20">@</span>
                    <div>
                      <div className="text-sm text-gray-400">Email</div>
                      <div className="font-medium">graphicworksdigital@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:+16892981104" className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 hover:bg-zinc-900/70 transition">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/20">📞</span>
                    <div>
                      <div className="text-sm text-gray-400">Phone</div>
                      <div className="font-medium">+1 (689) 298‑1104</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/20">📍</span>
                    <div>
                      <div className="text-sm text-gray-400">Location</div>
                      <div className="font-medium">Orlando, FL — working with clients globally</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3">Mon–Fri · 9am–6pm EST</div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3">Replies within a day</div>
                </div>

                <div className="mt-8">
                  <div className="text-sm text-gray-400 mb-2">Social</div>
                  <div className="flex items-center gap-3">
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2 hover:bg-zinc-900/70">Twitter</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2 hover:bg-zinc-900/70">LinkedIn</a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded-lg border border-zinc-800 bg-zinc-900/40 px-3 py-2 hover:bg-zinc-900/70">GitHub</a>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur p-6 md:p-8 shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="px-6 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="rounded-2xl border border-zinc-800 bg-gradient-to-r from-zinc-900/60 via-zinc-900/30 to-zinc-900/60 backdrop-blur p-6 md:p-8 text-center">
                <h3 className="text-2xl font-semibold">Prefer a quick call?</h3>
                <p className="mt-2 text-gray-300">Book a 15‑minute intro and we’ll discuss timelines, pricing, and fit.</p>
                <a href="mailto:graphicworksdigital@gmail.com" className="mt-5 inline-block rounded-full bg-gradient-to-r from-blue-500 to-blue-800 px-6 py-3 font-medium text-white hover:bg-blue-600 transition">Email Us</a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
