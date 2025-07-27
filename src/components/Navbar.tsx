
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/c761eab5-cccf-4944-83c9-923b4c5e2e03.png" 
            alt="Nexora Real Estate Logo" 
            className="h-10 w-auto"
          />
        </div>
        <Button className="bg-nexora-gold hover:bg-amber-600 text-white">
          Book a Call
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
