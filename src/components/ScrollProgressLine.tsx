
import React, { useEffect, useState } from 'react';

const ScrollProgressLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the start element (Why Choose Nexora section)
      const startElement = document.getElementById('why-choose-section');
      // Get the end element (Browse Projects section)
      const endElement = document.getElementById('browse-projects-section');
      
      if (startElement && endElement) {
        const startPosition = startElement.offsetTop;
        const endPosition = endElement.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
        // Calculate progress percentage
        if (scrollPosition < startPosition) {
          setScrollProgress(0);
        } else if (scrollPosition > endPosition) {
          setScrollProgress(100);
        } else {
          const progress = ((scrollPosition - startPosition) / (endPosition - startPosition)) * 100;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-8 top-1/2 transform -translate-y-1/2 h-64 w-1 bg-gray-200 rounded z-50">
      <div 
        className="w-full bg-nexora-purple transition-all duration-200 rounded"
        style={{ 
          height: `${scrollProgress}%`,
          maxHeight: '100%'
        }}
      />
    </div>
  );
};

export default ScrollProgressLine;
