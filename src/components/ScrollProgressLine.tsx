
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
        
        // Only show when 30% into the section
        if (sectionTop <= windowHeight * 0.7 && sectionTop + sectionHeight >= 0) {
          setIsVisible(true);
          
          // Calculate progress based on section visibility, starting later
          const visibleHeight = windowHeight - sectionTop;
          const progress = ((visibleHeight / sectionHeight) * 100) - 30;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute left-[15%] top-0 h-full pointer-events-none">
      <svg
        className="h-[600px] w-[200px]"
        viewBox="0 0 200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Title underline path */}
        <path
          d="M20,20 H200"
          stroke="#D3E4FD"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-30"
        />
        
        {/* Main vertical path */}
        <path
          d="M20,20 C20,20 20,100 20,150 C20,200 180,200 180,250 L180,600"
          stroke="#D3E4FD"
          strokeWidth="3"
          strokeLinecap="round"
          className="opacity-30"
        />

        {/* Animated underline */}
        <path
          d="M20,20 H200"
          stroke="url(#brightGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="180"
          strokeDashoffset={180 - (Math.min(scrollProgress * 2, 180))}
          className="transition-all duration-300"
        />

        {/* Animated main path */}
        <path
          d="M20,20 C20,20 20,100 20,150 C20,200 180,200 180,250 L180,600"
          stroke="url(#brightGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="800"
          strokeDashoffset={800 - (scrollProgress * 8)}
          className="transition-all duration-300"
        />

        {/* Enhanced bright gradient definition */}
        <linearGradient id="brightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#33C3F0" stopOpacity="0.6" />
          <stop offset="50%" stopColor="#33C3F0" />
          <stop offset="100%" stopColor="#33C3F0" stopOpacity="0.6" />
        </linearGradient>
      </svg>
    </div>
  );
};

export default ScrollProgressLine;
