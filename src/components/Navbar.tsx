
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="absolute top-4 left-4">
        <h1 className="text-2xl font-bold text-white">Nexora Real Estate</h1>
      </div>
      <div className="container mx-auto px-4 py-4 flex items-start justify-end">
        <Button className="bg-[#0F4E81] hover:bg-[#0F4E81]/90 text-white">
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
