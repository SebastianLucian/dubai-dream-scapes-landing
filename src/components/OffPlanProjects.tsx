
import React from 'react';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  image: string;
  price: string;
  location: string;
}

const ProjectCard = ({ name, image, price, location }: ProjectCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group overflow-hidden rounded-xl"
    >
      <div className="relative h-[500px] w-[350px] overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-white/80 mb-1">{location}</p>
              <p className="text-xl font-semibold">{price}</p>
            </div>
            <Button variant="outline" size="sm" className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 text-white rounded-full">
              <span>Details</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OffPlanProjects = () => {
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
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Browse <span className="text-nexora-purple">Off-Plan</span> Projects</h2>
          <div className="w-20 h-1 bg-nexora-gold mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore Dubai's most prestigious upcoming developments with exclusive pre-launch prices
          </p>
        </motion.div>

        <div className="relative px-6">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 2xl:basis-1/5">
                  <ProjectCard
                    name={project.name}
                    image={project.image}
                    price={project.price}
                    location={project.location}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white/80 hover:bg-white border-nexora-gold/30 text-nexora-purple" />
            <CarouselNext className="right-0 bg-white/80 hover:bg-white border-nexora-gold/30 text-nexora-purple" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Button variant="default" className="bg-nexora-purple hover:bg-nexora-purple/90 px-8 py-6 rounded-xl text-white font-semibold">
              View All Off-Plan Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OffPlanProjects;
