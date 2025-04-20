
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";

const OffPlanProjectsCTA = () => (
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
);

export default OffPlanProjectsCTA;
