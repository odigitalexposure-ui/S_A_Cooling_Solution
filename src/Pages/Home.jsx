import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingCTA from '../components/FloatingCTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col antialiased selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* Home / Hero Section with 3-second auto-slider & AC repair images */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section (Cooling Issue, Gas Refilling, Water Leakage, Electrical Fault) */}
        <Services />

        {/* Gallery Section (Images & Videos subsections with More / Less buttons) */}
        <Gallery />

        {/* Contact Section with Address Card and Google Map iframe */}
        <Contact />
      </main>

      {/* Footer Section with 3 columns and credit banner */}
      <Footer />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingCTA />
    </div>
  );
};

export default Home;
