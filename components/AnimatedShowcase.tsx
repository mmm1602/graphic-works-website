'use client';
import { useState, useEffect } from 'react';

const codeLines = [
  `<section className="hero">`,
  `  <h1 className="text-4xl">Welcome</h1>`,
  `  <p className="text-gray-600">To our clean, fast site.</p>`,
  `</section>`,
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

      setPreviewStage(line); // Update preview as code grows

      if (line >= codeLines.length) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto my-20 perspective-[1000px]">
      <div className="rounded-2xl overflow-hidden transform rotate-[2deg] rotate-x-[4deg] rotate-y-[2deg] bg-white shadow-2xl transition-transform duration-700 flex flex-col md:flex-row">
        {/* Code Typing Side */}
        <div className="w-full md:w-1/2 bg-[#1e1e1e] text-green-400 font-mono text-sm p-6 overflow-auto">
          {visibleCode.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>

        {/* Live Preview Side */}
        <div className="w-full md:w-1/2 bg-gray-50 p-6 flex flex-col justify-center">
          {previewStage >= 1 && (
            <h1 className="text-3xl font-bold mb-4 transition-opacity duration-500">
              Welcome
            </h1>
          )}
          {previewStage >= 2 && (
            <p className="text-gray-600 transition-opacity duration-500">
              To our clean, fast site.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
