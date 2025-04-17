
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-white font-bold text-2xl">
          <span className="text-nexora-gold">NEXORA</span> REAL ESTATE
        </div>
        <div className="hidden md:flex space-x-8 text-white">
          <a href="#properties" className="hover:text-nexora-gold transition-colors">Properties</a>
          <a href="#exclusive" className="hover:text-nexora-gold transition-colors">Exclusive Deals</a>
          <a href="#about" className="hover:text-nexora-gold transition-colors">About Us</a>
          <a href="#contact" className="hover:text-nexora-gold transition-colors">Contact</a>
        </div>
        <Button className="bg-nexora-gold hover:bg-amber-600 text-white">
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
