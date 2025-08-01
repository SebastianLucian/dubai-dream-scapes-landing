
import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nexora-dark text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-[#0F4E81]">NEXORA</span> REAL ESTATE
            </h3>
            <p className="mb-4">
              Luxury properties and exclusive investments in Dubai's premium locations.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-300" />
              <Instagram size={20} className="text-gray-300" />
              <Twitter size={20} className="text-gray-300" />
              <Linkedin size={20} className="text-gray-300" />
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Featured Areas</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Palm Jumeirah</li>
              <li className="text-gray-300">Downtown Dubai</li>
              <li className="text-gray-300">Dubai Marina</li>
              <li className="text-gray-300">Emirates Hills</li>
              <li className="text-gray-300">Jumeirah Beach Residence</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-[#0F4E81]" size={18} />
                <span>Downtown Dubai, Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-[#0F4E81]" size={18} />
                <span>+971 58 625 8500</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-[#0F4E81]" size={18} />
                <span>admin@nexorarealestate.ae</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Nexora Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
