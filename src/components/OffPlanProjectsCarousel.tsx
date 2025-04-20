
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
  {
    name: "Bugatti Tower",
    image: "/lovable-uploads/ad9889e0-2fa2-4964-abe8-d9e4ffcc81df.png",
    price: "From AED 1.5M",
    location: "Downtown Dubai",
  },
  {
    name: "Damac Lagoons",
    image: "/lovable-uploads/684a84ca-c467-415a-af2e-184d3b1f447a.png",
    price: "From AED 2.3M",
    location: "Dubai Harbour",
  },
  {
    name: "Wynn Casino",
    image: "/lovable-uploads/a25854c0-871b-440b-9ba4-6941d2c1a6ef.png",
    price: "From AED 4.8M",
    location: "Palm Jumeirah",
  },
  {
    name: "Atlantis Royal",
    image: "/lovable-uploads/95e34632-f040-421a-87c6-93b8081798a7.png",
    price: "From AED 8.5M",
    location: "Palm Jumeirah",
  },
  {
    name: "Burj Azizi",
    image: "/lovable-uploads/3d19a8a5-bf58-49f7-b342-ed6e5b417349.png",
    price: "From AED 3.2M",
    location: "Dubai Marina",
  },
  {
    name: "Sobha",
    image: "/lovable-uploads/122a27c7-d865-47a3-b929-10df14a289db.png",
    price: "From AED 5.7M",
    location: "Jumeirah Beach Residence",
  },
];

const OffPlanProjectsCarousel = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <>
      <div className="relative px-8">
        <Carousel
          opts={{ align: "start", loop: true }}
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
              activeProject === index ? "w-8 bg-nexora-purple" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default OffPlanProjectsCarousel;
