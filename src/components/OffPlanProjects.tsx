import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2 } from 'lucide-react';
import ProjectCard from './ProjectCard';

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
    <section
      id="browse-projects-section"
      className="py-32 px-4 relative overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/05d60c46-2dbc-4fb1-b047-6e7878da5b31.png')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      }}
    >
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
