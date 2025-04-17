
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="text-nexora-gold">NEXORA</span> REAL ESTATE
            </h3>
            <p className="mb-4">
              Luxury properties and exclusive investments in Dubai's premium locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-nexora-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-nexora-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-nexora-gold transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-nexora-gold transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Properties</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Exclusive Deals</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Featured Areas</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Palm Jumeirah</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Downtown Dubai</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Dubai Marina</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Emirates Hills</a></li>
              <li><a href="#" className="hover:text-nexora-gold transition-colors">Jumeirah Beach Residence</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 text-nexora-gold" size={18} />
                <span>Downtown Dubai, Business Bay, Dubai, UAE</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-nexora-gold" size={18} />
                <span>+971 4 XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-nexora-gold" size={18} />
                <span>info@nexora-realestate.com</span>
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
