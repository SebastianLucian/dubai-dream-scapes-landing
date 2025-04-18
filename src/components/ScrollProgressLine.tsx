
import React, { useEffect, useState } from 'react';

const ScrollProgressLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const startElement = document.getElementById('why-choose-section');
      const endElement = document.getElementById('browse-projects-section');
      
      if (startElement && endElement) {
        const startPosition = startElement.offsetTop;
        const endPosition = endElement.offsetTop;
        const scrollPosition = window.scrollY + window.innerHeight / 2;
        
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
    <div className="absolute right-0 top-0 h-full w-1.5 z-50">
      <div className="sticky top-0 h-screen w-full">
        <div className="h-full w-full bg-gray-200/50 rounded">
          <div 
            className="w-full bg-nexora-purple transition-all duration-200 rounded"
            style={{ 
              height: `${scrollProgress}%`,
              maxHeight: '100%'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressLine;
