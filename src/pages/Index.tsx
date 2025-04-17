
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import WhyUs from '@/components/WhyUs';
import FilterSearch from '@/components/FilterSearch';
import OffPlanProjects from '@/components/OffPlanProjects';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeatureSection />
      <WhyUs />
      <FilterSearch />
      <OffPlanProjects />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
