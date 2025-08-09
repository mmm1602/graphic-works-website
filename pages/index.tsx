import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CarouselSection from "@/components/CarouselSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col overflow-hidden">
      {/* Global background */}
      <div className="absolute inset-0 z-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:20px_24px]"><div className="fixed left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-fuchsia-400 opacity-30 blur-[100px]"></div></div>
  

      {/* Top navigation */}
      <Navbar />

      {/* Main content */}
      <main className="flex-grow">
        <HeroSection />
        <CarouselSection />
        <ServicesSection />
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
