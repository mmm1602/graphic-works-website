export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-black/50 to-black">
      <div className="relative max-w-4xl mx-auto py-24 px-8 text-center bg-gradient-to-br from-green-950 via-green-900 to-green-800 opacity-100 rounded-3xl shadow-2xl overflow-hidden border border-green-800">
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full opacity-10"
            viewBox="0 0 800 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="650" cy="100" r="120" fill="#052e16" />
            <circle cx="150" cy="300" r="80" fill="#166534" />
          </svg>
        </div>
        <h2 className="relative text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100 drop-shadow-xl">
          About Us
        </h2>
        <p className="relative text-green-100 text-xl leading-relaxed mb-6">
          We’re a passionate team of designers and developers dedicated to crafting unique, high-performing websites.
          <br />
          <span className="font-semibold text-green-300">
            Our mission
          </span>{" "}
          is to deliver digital experiences that truly connect with your audience.
        </p>
        <div className="relative flex justify-center mt-8 space-x-4">
          <span className="inline-block px-5 py-2 bg-green-900 text-green-200 rounded-full font-medium shadow-lg hover:bg-green-800 transition">
            Creativity
          </span>
          <span className="inline-block px-5 py-2 bg-green-800 text-green-100 rounded-full font-medium shadow-lg hover:bg-green-700 transition">
            Innovation
          </span>
          <span className="inline-block px-5 py-2 bg-green-700 text-green-50 rounded-full font-medium shadow-lg hover:bg-green-600 transition">
            Excellence
          </span>
        </div>
      </div>
    </section>
  );
}