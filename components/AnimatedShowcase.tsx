'use client';
import { useState, useEffect } from 'react';

const codeLines = [
    `export default function Hero() {`,
    `  return (`,
    `    <section className="bg-white py-20 px-6 text-center">`,
    `      <h1 className="text-5xl font-bold mb-4">`,
    `        We Build Websites That Grow 🚀`,
    `      </h1>`,
    `      <p className="text-lg text-gray-600 mb-6">`,
    `        Custom web design for brands and businesses.`,
    `      </p>`,
    `      <a`,
    `        href="/contact"`,
    `        className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"`,
    `      >`,
    `        Get a Free Quote`,
    `      </a>`,
    `    </section>`,
    `  );`,
    `}`,
  ];
  

export default function AnimatedShowcase() {
  const [visibleCode, setVisibleCode] = useState<string[]>([]);
  const [previewStage, setPreviewStage] = useState(0);

  useEffect(() => {
    let line = 0;
    let char = 0;
    const newLines: string[] = [];

    const interval = setInterval(() => {
      if (line >= codeLines.length) return;

      const currentLine = codeLines[line];
      newLines[line] = (newLines[line] || '') + currentLine[char];
      setVisibleCode([...newLines]);

      char++;

      if (char >= currentLine.length) {
        char = 0;
        line++;
      }

      setPreviewStage(line); // Sync preview
      if (line >= codeLines.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-20 perspective-[1000px]">
      <div
        className="w-full h-[400px] rounded-2xl overflow-hidden transform rotate-[2deg] rotate-x-[4deg] rotate-y-[2deg] bg-white shadow-2xl transition-transform duration-700 flex flex-col"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 🧠 VS Code-style tab bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-[#444]">
          {/* Mac-style window controls */}
          <div className="flex space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>
          <span className="text-sm text-gray-300 font-mono">index.tsx</span>
          <div className="w-12"></div>
        </div>

        {/* Code + Preview split */}
        <div className="flex flex-col md:flex-row flex-grow h-full">
          {/* Code Editor Side */}
          <div className="w-full md:w-1/2 bg-[#1e1e1e] text-green-400 font-mono text-sm p-6 overflow-auto">
            {visibleCode.length > 0 ? (
              visibleCode.map((line, i) => <div key={i}>{line}</div>)
            ) : (
              <p className="opacity-50">// typing...</p>
            )}
          </div>

          {/* Live Preview Side */}
<div className="w-full md:w-1/2 bg-gray-50 p-6 flex flex-col justify-center">
  <h1
    className={`text-3xl font-bold mb-4 transition-opacity duration-500 ${
      previewStage >= 4 ? 'opacity-100' : 'opacity-0'
    }`}
  >
    We Build Websites That Grow 🚀
  </h1>
  <p
    className={`text-gray-600 transition-opacity duration-500 ${
      previewStage >= 6 ? 'opacity-100' : 'opacity-0'
    }`}
  >
    Custom web design for brands and businesses.
  </p>
  <a
    href="/contact"
    className={`inline-block mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition ${
      previewStage >= 10 ? 'opacity-100' : 'opacity-0'
    }`}
  >
    Get a Free Quote
  </a>
</div>

        </div>
      </div>
    </div>
  );
}
