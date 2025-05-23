import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import AnimatedShowcase from '@/components/AnimatedShowcase';

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Web Design | GraphicWorks</title>
        <meta name="description" content="Professional web design services for small businesses, startups, and creators." />
        <link rel="canonical" href="https://yourdomain.com" />
      </Head>

      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AnimatedShowcase />
      <PortfolioSection />
      <AboutSection />
      <Footer />
    </>
  );
}

