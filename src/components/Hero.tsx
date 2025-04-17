
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/32f7d897-4b94-42d4-81f4-0848b1cacf56.png"
          className="w-full h-full object-cover"
          alt="Dubai Skyline"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Premium Real Estate in <span className="text-nexora-gold">Dubai</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Discover exclusive properties in the world's most luxurious city
        </p>
        <Button className="bg-nexora-gold hover:bg-amber-600 text-white text-lg px-8 py-6">
          Explore Properties
        </Button>
      </div>
    </div>
  );
};

export default Hero;
