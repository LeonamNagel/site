import { useState, useEffect } from 'react';

interface ScrollState {
  lastScrollY: number;
  isVisible: boolean;
}

export function useScroll(threshold = 50) {
  const [scrollState, setScrollState] = useState<ScrollState>({
    lastScrollY: 0,
    isVisible: true,
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrollState((prevState) => ({
        isVisible: 
          // Show navbar when scrolling up or at the top
          currentScrollY < prevState.lastScrollY || 
          currentScrollY < threshold,
        lastScrollY: currentScrollY,
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState.isVisible;
}