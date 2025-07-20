
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import WhyUs from '@/components/WhyUs';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
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
          <div className="relative">
            <WhyUs />
            <CallToAction />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
