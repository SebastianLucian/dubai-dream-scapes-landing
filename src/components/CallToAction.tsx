
import React from 'react';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0 bg-nexora-dark opacity-90">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/32f7d897-4b94-42d4-81f4-0848b1cacf56.png')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discover Your Dream Property in Dubai?
          </h2>
          
          <p className="text-gray-300 mb-10 text-xl">
            Schedule a personalized consultation with our luxury real estate experts today
          </p>
          
          <Button className="bg-nexora-gold hover:bg-amber-600 text-white text-lg px-10 py-6">
            <PhoneCall className="mr-2" size={20} />
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
