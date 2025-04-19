
import React, { useEffect, useState } from 'react';

const ScrollProgressLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const whyUsSection = document.getElementById('why-choose-section');
      
      if (whyUsSection) {
        const rect = whyUsSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Check if section is in view
        if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
          setIsVisible(true);
          
          // Calculate progress based on section visibility
          const visibleHeight = windowHeight - sectionTop;
          const progress = (visibleHeight / sectionHeight) * 100;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute right-[15%] top-0 h-full pointer-events-none">
      <svg
        className="h-[600px] w-[200px]"
        viewBox="0 0 200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Title underline path */}
        <path
          d="M0,20 H180"
          stroke="#D3E4FD"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-30"
        />
        
        {/* Main vertical path */}
        <path
          d="M180,20 C180,20 180,100 180,150 C180,200 20,250 20,300 L20,600"
          stroke="#D3E4FD"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-30"
        />

        {/* Animated underline */}
        <path
          d="M0,20 H180"
          stroke="url(#blueGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="180"
          strokeDashoffset={180 - (Math.min(scrollProgress * 2, 180))}
          className="transition-all duration-300"
        />

        {/* Animated main path */}
        <path
          d="M180,20 C180,20 180,100 180,150 C180,200 20,250 20,300 L20,600"
          stroke="url(#blueGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="800"
          strokeDashoffset={800 - (scrollProgress * 8)}
          className="transition-all duration-300"
        />

        {/* Gradient definitions */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#33C3F0" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#33C3F0" />
          <stop offset="100%" stopColor="#33C3F0" stopOpacity="0.2" />
        </linearGradient>

        {/* Animated circle */}
        <circle
          cx={scrollProgress < 20 ? scrollProgress * 9 : 
              scrollProgress < 40 ? 180 :
              20}
          cy={scrollProgress < 20 ? 20 :
              scrollProgress < 40 ? ((scrollProgress - 20) * 7.5) + 20 :
              300 + ((scrollProgress - 40) * 6)}
          r="6"
          fill="#33C3F0"
          className="transition-all duration-300"
        >
          <animate
            attributeName="r"
            values="4;6;4"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default ScrollProgressLine;
