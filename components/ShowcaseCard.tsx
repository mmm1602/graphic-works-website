export default function ShowcaseCard() {
    return (
      <div className="relative w-full max-w-5xl mx-auto my-20 perspective-[1000px]">
        <div
          className="w-full h-[500px] bg-white rounded-2xl shadow-2xl transform rotate-[1deg] rotate-x-[6deg] rotate-y-[4deg] hover:rotate-[0deg] transition-transform duration-700 ease-out overflow-hidden flex flex-col md:flex-row"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Code Side */}
          <div className="w-full md:w-1/2 bg-[#1e1e1e] text-green-300 font-mono p-6 text-sm overflow-auto">
            <p>// Simple React Component</p>
            <pre>
              {`function Hero() {
    return (
      <section>
        <h1>Clean UI</h1>
        <p>With Tailwind & Next.js</p>
      </section>
    );
  }`}
            </pre>
          </div>
  
          {/* Website Side */}
          <div className="w-full md:w-1/2 bg-white p-6 flex flex-col justify-center text-left">
            <h1 className="text-3xl font-bold text-gray-800">Modern Business Site</h1>
            <p className="text-gray-500 mt-4">
              Built with Next.js, TailwindCSS, and responsive design in mind.
            </p>
            <div className="mt-6 bg-gray-100 rounded-md border p-4">
              <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  