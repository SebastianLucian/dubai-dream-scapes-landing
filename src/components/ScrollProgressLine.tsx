
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
    <div className="absolute right-0 top-0 h-full w-full pointer-events-none z-50">
      <div className="sticky top-0 h-screen w-full">
        <svg
          className="absolute top-[120px] right-8 w-[300px] h-[600px]"
          viewBox="0 0 300 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Title underline path */}
          <path
            d="M0,20 H280"
            stroke="#D3E4FD"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Main curved path */}
          <path
            d="M0,20 H280 Q290,20 290,30 V200 Q290,220 270,220 H30 Q10,220 10,240 V600"
            stroke="#D3E4FD"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset={1000 - (scrollProgress * 10)}
            className="transition-all duration-200"
          />
          {/* Animated gradient glow effect */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#33C3F0" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#33C3F0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#33C3F0" stopOpacity="0.2" />
          </linearGradient>
          <path
            d="M0,20 H280 Q290,20 290,30 V200 Q290,220 270,220 H30 Q10,220 10,240 V600"
            stroke="url(#gradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset={1000 - (scrollProgress * 10)}
            className="transition-all duration-200"
            style={{ filter: 'blur(4px)' }}
          />
          {/* Animated circle */}
          <circle
            cx={scrollProgress < 30 ? scrollProgress * 9.33 : 280}
            cy={scrollProgress < 30 ? 20 : 
               scrollProgress < 50 ? 20 + ((scrollProgress - 30) * 6.67) : 
               scrollProgress < 70 ? 220 : 
               220 + ((scrollProgress - 70) * 12.67)}
            r="6"
            fill="#33C3F0"
            className="transition-all duration-200"
          >
            <animate
              attributeName="r"
              values="6;8;6"
              dur="1.5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default ScrollProgressLine;
