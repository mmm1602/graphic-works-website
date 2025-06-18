'use client';
import { useEffect, useRef, useState } from 'react';

export default function MatrixBackground() {
  const canvasRef = useRef(null);
  const [isMorphing, setIsMorphing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx) return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    (canvas as HTMLCanvasElement).width = width;
    (canvas as HTMLCanvasElement).height = height;

    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()';
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.01)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        const text = characters[Math.floor(Math.random() * characters.length)];

        if (isMorphing) {
          // Morphing logic: Align characters to form footer content
          const footerText = 'GraphicWorks | Building Brands, Not Just Websites © 2025';
          const footerChar = footerText[x % footerText.length] || ' ';
          const fadeEffect = Math.sin((x + y) * 0.1) * 0.5 + 0.5; // Create a wave-like fade effect
          ctx.fillStyle = `rgba(0, 255, 0, ${fadeEffect})`; // Adjust opacity dynamically
          ctx.fillText(footerChar, x * fontSize, height - fontSize * 2);
        } else {
          // Normal Matrix effect
          ctx.fillText(text, x * fontSize, y * fontSize);

          if (y * fontSize > height && Math.random() > 0.975) {
            drops[x] = 0;
          }
          drops[x]++;
        }
      });
    };

    const interval = setInterval(drawMatrix, 50);

    const handleScroll = () => {
      const footerOffset = document.querySelector('footer')?.offsetTop || 0;
      const scrollPosition = window.scrollY + window.innerHeight;
      setIsMorphing(scrollPosition >= footerOffset - 100); // Start morphing slightly before reaching the footer
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMorphing]);

  return (
    <div className="w-full h-full bg-gradient-to-b from-black via-black/90 to-black opacity-100 z-10">
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
        />
    </div>
  );
}