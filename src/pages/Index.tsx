
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import WhyUs from '@/components/WhyUs';
import FilterSearch from '@/components/FilterSearch';
import OffPlanProjects from '@/components/OffPlanProjects';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import ScrollProgressLine from '@/components/ScrollProgressLine';

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <ScrollProgressLine />
      <Navbar />
      <Hero />
      <FeatureSection />
      <div className="relative">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/lovable-uploads/05092ee5-aa20-49c0-8476-39f124897ffc.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10">
          <WhyUs />
          <FilterSearch />
          <OffPlanProjects />
          <CallToAction />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
