
import React from 'react';
import { Award, Users, Gem } from 'lucide-react';

interface ReasonCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ReasonCard = ({ icon, title, description }: ReasonCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="text-nexora-purple mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const WhyUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Work With <span className="text-nexora-purple">Nexora</span></h2>
          <div className="w-20 h-1 bg-nexora-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience unparalleled service and expertise in Dubai's luxury real estate market
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ReasonCard 
            icon={<Award size={48} />}
            title="Market Expertise"
            description="Our team has over 15 years of experience in Dubai's real estate market, offering unmatched insights and expertise."
          />
          
          <ReasonCard 
            icon={<Users size={48} />}
            title="Exclusive Network"
            description="Access to an extensive network of high-net-worth investors, developers, and property owners across the UAE."
          />
          
          <ReasonCard 
            icon={<Gem size={48} />}
            title="Premium Service"
            description="White-glove service tailored to your specific needs, ensuring a seamless experience from initial consultation to closing."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
