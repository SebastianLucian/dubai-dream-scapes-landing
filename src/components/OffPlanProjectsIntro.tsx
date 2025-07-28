
import React from "react";
import { motion } from "framer-motion";

const OffPlanProjectsIntro = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <span className="inline-block text-[#0F4E81] font-semibold mb-4 px-4 py-1.5 rounded-full bg-[#0F4E81]/10 text-sm">
      EXCLUSIVE OPPORTUNITIES
    </span>
    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
      Browse <span className="text-nexora-purple">Off-Plan</span> Projects
    </h2>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "5rem" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className="h-1 bg-gradient-to-r from-nexora-purple to-[#0F4E81] mx-auto mb-8"
    ></motion.div>
    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
      Explore Dubai&apos;s most prestigious upcoming developments with exclusive pre-launch prices
    </p>
  </motion.div>
);

export default OffPlanProjectsIntro;
