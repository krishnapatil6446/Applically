import React, { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';

// Define an interface for the logo
interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Sample logos (replace with your actual logos)
const sampleLogos: Logo[] = [
  { src: "https://cdn.magicui.design/companies/Netflix.svg", alt: 'Company 1', width: 100, height: 50 },
  { src: "https://cdn.magicui.design/companies/Google.svg", alt: 'Company 2', width: 100, height: 50 },
  { src: "https://cdn.magicui.design/companies/Microsoft.svg", alt: 'Company 3', width: 100, height: 50 },
  { src: "https://cdn.magicui.design/companies/Amazon.svg", alt: 'Company 4', width: 100, height: 50 },
  { src: "https://cdn.magicui.design/companies/YouTube.svg", alt: 'Company 5', width: 100, height: 50 },
  { src: "https://cdn.magicui.design/companies/Instagram.svg", alt: 'Company 6', width: 100, height: 50 },
  { src: "https://cdn.magicui.design/companies/Uber.svg", alt: 'Company 7', width: 100, height: 50 },
  { src: "https://cdn.magicui.design/companies/Spotify.svg", alt: 'Company 8', width: 100, height: 50 },
];

const InfiniteLogoMarquee: React.FC<{ logos?: Logo[], speed?: number }> = ({ 
  logos = sampleLogos,
  speed = 25 // Lower number = faster speed
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [loopCount, setLoopCount] = React.useState(2); // Start with 2 copies
  const [scrollPosition, setScrollPosition] = React.useState(0);

  // Use animation frame for smooth scrolling
  useAnimationFrame((time, delta) => {
    if (!containerRef.current || !scrollRef.current) return;

    // Calculate new scroll position
    const newPosition = scrollPosition + delta / speed;
    
    // Get container width and scroll width
    const containerWidth = containerRef.current.offsetWidth;
    const scrollWidth = scrollRef.current.scrollWidth / loopCount;
    
    // Check if we need to reset the scroll position
    if (newPosition >= scrollWidth) {
      // Reset to beginning but maintain smooth scrolling
      setScrollPosition(newPosition - scrollWidth);
    } else {
      setScrollPosition(newPosition);
    }
    
    // Apply the scroll position
    scrollRef.current.style.transform = `translateX(-${scrollPosition}px)`;
    
    // Add more copies if needed for continuous scrolling
    if (containerWidth > scrollWidth && loopCount < 10) {
      setLoopCount(prev => prev + 1);
    }
  });

  // Create multiple copies of logos for seamless scrolling
  const marqueeLogos = Array(loopCount).fill(logos).flat();

  return (
    <div className="relative w-full overflow-hidden" ref={containerRef}>
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex"
        >
          {/* Logos Container */}
          <div className="flex items-center justify-center space-x-12 py-6">
            {marqueeLogos.map((logo, index) => (
              <div 
                key={index} 
                className="relative flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fade Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </div>
  );
};

export default InfiniteLogoMarquee;