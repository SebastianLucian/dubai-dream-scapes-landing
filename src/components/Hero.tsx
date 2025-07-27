
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/461e6a91-1a6b-4ed5-8e06-6f02385f7a07.png"
          className="w-full h-full object-cover"
          alt="Dubai Skyline Sunset with Burj Khalifa"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Premium Real Estate in <span className="text-nexora-gold">Dubai</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Discover exclusive properties in the world's most luxurious city
        </p>
      </div>
    </div>
  );
};

export default Hero;
