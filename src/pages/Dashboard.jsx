import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedWork from '../components/FeaturedWork';
import Footer from '../components/Footer';
import TechSpecs from '../components/TechSpecs';
import { skills } from '../data/techSpecs';
import { useLocation } from 'react-router-dom';
import ContactMe from '../components/ContactMe';

export default function Dashboard() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <Header />

      <main className="max-w-5xl mx-auto md:px-6 pb-16">
        {/* Hero */}
        <HeroSection />

        {/* Featured Work */}
        <FeaturedWork />

        {/* Skills Section */}
        <TechSpecs skills={skills.skills || []} />

        {/* Contact */}
        <ContactMe />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
