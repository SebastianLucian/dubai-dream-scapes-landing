
import React from "react";
import OffPlanProjectsIntro from "./OffPlanProjectsIntro";
import OffPlanProjectsCarousel from "./OffPlanProjectsCarousel";
import OffPlanProjectsCTA from "./OffPlanProjectsCTA";

// Use user-uploaded sky/clouds image as a high-contrast, highly visible background
const CLOUDS_BG = "/lovable-uploads/14e44d23-74f4-45c5-8a9c-557f46b7ccdb.png";

const OffPlanProjects = () => (
  <section
    id="browse-projects-section"
    className="py-32 px-4 relative overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(rgba(232,240,255,0.92) 20%,rgba(240,245,255,0.86) 84%), url('${CLOUDS_BG}')`,
      backgroundPosition: "center top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      // Make clouds very visible and the whole image vibrant but still readable
      // Overlay makes text readable, but clouds photo much more visible than previously
    }}
  >
    <div className="container mx-auto relative z-10">
      <OffPlanProjectsIntro />
      <OffPlanProjectsCarousel />
      <OffPlanProjectsCTA />
    </div>
  </section>
);

export default OffPlanProjects;
