
import React from 'react';
import { DollarSign, MapPin, TrendingUp } from 'lucide-react';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ image, title, description, icon }: FeatureCardProps) => {
  return (
    <div className="relative h-[500px] flex-1 group overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white transition-all duration-300 group-hover:pb-12">
        <div className="mb-4 bg-nexora-gold p-3 inline-block rounded-full text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-200">{description}</p>
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full">
        <FeatureCard 
          image="/lovable-uploads/5612bc6f-b947-4921-b2ae-753c82c2f05c.png"
          title="Exclusive Deals"
          description="Access to premium properties not available on the open market, handpicked for discerning investors and homebuyers."
          icon={<DollarSign size={24} />}
        />
        
        <FeatureCard 
          image="/lovable-uploads/14e44d23-74f4-45c5-8a9c-557f46b7ccdb.png"
          title="Off Market Properties"
          description="Discover hidden gems in Dubai's most prestigious neighborhoods before they hit the public market."
          icon={<MapPin size={24} />}
        />
        
        <FeatureCard 
          image="/lovable-uploads/32f7d897-4b94-42d4-81f4-0848b1cacf56.png"
          title="High ROI Investments"
          description="Strategic investment opportunities with proven track records of exceptional returns in Dubai's thriving real estate market."
          icon={<TrendingUp size={24} />}
        />
      </div>
    </section>
  );
};

export default FeatureSection;
