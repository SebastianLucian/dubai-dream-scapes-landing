import React from 'react';
import { Award, Users, Gem } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollProgressLine from './ScrollProgressLine';
import ScrollProgressLineMirror from './ScrollProgressLineMirror';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ReasonCard = ({ icon, title, description, delay }: ReasonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-[#0F4E81]/20 to-nexora-purple/10 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        <div className="text-nexora-purple mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#0F4E81]/20 to-nexora-purple/20">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyUs = () => {
  return (
    <section id="why-choose-section" className="py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#0F4E81]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-nexora-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute w-full h-full border-[20px] border-[#0F4E81]/5 rounded-full transform rotate-45"></div>
        <div className="absolute w-full h-full border-[10px] border-nexora-purple/5 rounded-full transform -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose <span className="text-nexora-purple">Nexora</span></h2>
            <div className="w-20 h-1 bg-[#0F4E81] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience unparalleled service and expertise in Dubai's luxury real estate market
            </p>
          </motion.div>
          
          <ScrollProgressLine />
          <ScrollProgressLineMirror />

          <div className="grid md:grid-cols-3 gap-10">
            <ReasonCard 
              icon={<Award size={44} strokeWidth={1.5} className="text-[#0F4E81]" />}
              title="Market Expertise"
              description="Our team has over 15 years of experience in Dubai's real estate market, offering unmatched insights and expertise."
              delay={0.1}
            />
            
            <ReasonCard 
              icon={<Users size={44} strokeWidth={1.5} className="text-[#0F4E81]" />}
              title="Exclusive Network"
              description="Access to an extensive network of high-net-worth investors, developers, and property owners across the UAE."
              delay={0.3}
            />
            
            <ReasonCard 
              icon={<Gem size={44} strokeWidth={1.5} className="text-[#0F4E81]" />}
              title="Premium Service"
              description="White-glove service tailored to your specific needs, ensuring a seamless experience from initial consultation to closing."
              delay={0.5}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
