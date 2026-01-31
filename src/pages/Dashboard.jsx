import React, { useEffect } from 'react';

import HeroSection from '../components/HeroSection';
import FeaturedWork from '../components/FeaturedWork';
import TechSpecs from '../components/TechSpecs';
import { skills } from '../data/techSpecs';
import { useLocation } from 'react-router-dom';


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
    <div className="min-h-screen font-sans">


      <main className="max-w-5xl mx-auto md:px-6">
        {/* Hero */}
        <HeroSection />

        {/* Featured Work */}
        <FeaturedWork />



        {/* Skills Section */}
        <TechSpecs skills={skills.skills || []} />


      </main>
    </div>
  );
}
