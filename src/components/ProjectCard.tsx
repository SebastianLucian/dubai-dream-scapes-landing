
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface ProjectCardProps {
  name: string;
  image: string;
  price: string;
  location: string;
  index: number;
}

const ProjectCard = ({ name, image, price, location, index }: ProjectCardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group overflow-hidden rounded-2xl"
  >
    <div className="relative h-[480px] w-[350px] overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
        <span className="text-white/90 text-sm font-medium">{price}</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex justify-between items-end">
          <div className="flex items-center text-white/80 mb-1">
            <MapPin className="h-4 w-4 mr-1 text-[#0F4E81]" />
            <p className="text-sm">{location}</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white rounded-full overflow-hidden group-hover:pr-6 transition-all duration-300"
          >
            <span className="relative z-10">View</span>
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
