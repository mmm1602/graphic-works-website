import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import AnimatedShowcase from '@/components/AnimatedShowcase';
import FadeInWhenVisible from '@/components/FadeInWhenVisible';
import MatrixBackground from '@/components/MatrixBackground';
import MetaTags from '@/components/MetaTags';
import dynamic from 'next/dynamic';

const LazyPortfolioSection = dynamic(() => import('@/components/PortfolioSection'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Web Design | GraphicWorks</title>
        <meta name="description" content="Professional web design services for small businesses, startups, and creators." />
        {/*<link rel="canonical" href="https://yourdomain.com" />*/}
        <MetaTags
          title="GraphicWorks | Custom Web Design & Creative Media"
          description="We design modern, high-performing websites and visual experiences that help businesses grow."
          url="https://graphicworks.digital/"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "GraphicWorks | Custom Web Design & Creative Media",
            description: "We design modern, high-performing websites and visual experiences that help businesses grow.",
            url: "https://graphicworks.digital/",
          })}
        </script>
      </Head>
      {/* Matrix Background */}
      <MatrixBackground />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AnimatedShowcase />
      <LazyPortfolioSection />
      <AboutSection />
      <Footer />
    </>
  );
}