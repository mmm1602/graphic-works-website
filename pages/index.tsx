import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Professional Web Design | YourAgencyName</title>
        <meta name="description" content="We build stunning, responsive websites for businesses." />
      </Head>

      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <Footer />
    </>
  );
}

