import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, MapPin, Cloud } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  image: string;
  price: string;
  location: string;
  index: number;
}

const ProjectCard = ({ name, image, price, location, index }: ProjectCardProps) => {
  return (
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        
        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md px-3 py-1 rounded-full">
          <span className="text-white/90 text-sm font-medium">{price}</span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <div className="flex justify-between items-end">
            <div className="flex items-center text-white/80 mb-1">
              <MapPin className="h-4 w-4 mr-1 text-nexora-gold" />
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
};

const OffPlanProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      name: "Bugatti Tower",
      image: "/lovable-uploads/ad9889e0-2fa2-4964-abe8-d9e4ffcc81df.png",
      price: "From AED 1.5M",
      location: "Downtown Dubai"
    },
    {
      name: "Damac Lagoons",
      image: "/lovable-uploads/684a84ca-c467-415a-af2e-184d3b1f447a.png",
      price: "From AED 2.3M",
      location: "Dubai Harbour"
    },
    {
      name: "Wynn Casino",
      image: "/lovable-uploads/a25854c0-871b-440b-9ba4-6941d2c1a6ef.png",
      price: "From AED 4.8M",
      location: "Palm Jumeirah"
    },
    {
      name: "Atlantis Royal",
      image: "/lovable-uploads/95e34632-f040-421a-87c6-93b8081798a7.png",
      price: "From AED 8.5M",
      location: "Palm Jumeirah"
    },
    {
      name: "Burj Azizi",
      image: "/lovable-uploads/3d19a8a5-bf58-49f7-b342-ed6e5b417349.png",
      price: "From AED 3.2M",
      location: "Dubai Marina"
    },
    {
      name: "Sobha",
      image: "/lovable-uploads/122a27c7-d865-47a3-b929-10df14a289db.png",
      price: "From AED 5.7M",
      location: "Jumeirah Beach Residence"
    }
  ];

  return (
    <section id="browse-projects-section" className="py-32 px-4 relative overflow-hidden bg-gray-100">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/lovable-uploads/875ea466-fb5d-4149-a660-afc185f777bd.png')"
        }}
      />
      
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-80 h-80 rounded-full bg-nexora-purple/5 filter blur-3xl"></div>
      <div className="absolute -right-40 bottom-40 w-96 h-96 rounded-full bg-nexora-gold/5 filter blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block text-nexora-gold font-semibold mb-4 px-4 py-1.5 rounded-full bg-nexora-gold/10 text-sm">EXCLUSIVE OPPORTUNITIES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">Browse <span className="text-nexora-purple">Off-Plan</span> Projects</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-nexora-purple to-nexora-gold mx-auto mb-8"
          ></motion.div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore Dubai's most prestigious upcoming developments with exclusive pre-launch prices
          </p>
        </motion.div>

        <div className="relative px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(api: any) => {
              setActiveProject(api.selectedScrollSnap());
            }}
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                  <ProjectCard
                    name={project.name}
                    image={project.image}
                    price={project.price}
                    location={project.location}
                    index={index}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 lg:-left-16 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white shadow-lg border-none text-nexora-purple h-12 w-12 rounded-full transition-all duration-300 hover:scale-110" />
            <CarouselNext className="absolute -right-4 lg:-right-16 top-1/2 transform -translate-y-1/2 bg-white hover:bg-white shadow-lg border-none text-nexora-purple h-12 w-12 rounded-full transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>

        <div className="flex justify-center mt-12 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeProject === index 
                  ? "w-8 bg-nexora-purple" 
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Button 
              variant="default" 
              className="bg-gradient-to-r from-nexora-purple to-nexora-purple/90 hover:from-nexora-purple/90 hover:to-nexora-purple shadow-lg hover:shadow-xl px-8 py-6 rounded-xl text-white font-semibold transition-all duration-300 hover:-translate-y-1"
            >
              <Building2 className="mr-2 h-5 w-5" />
              View All Off-Plan Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OffPlanProjects;
