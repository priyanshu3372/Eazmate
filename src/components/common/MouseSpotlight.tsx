import React, { useEffect } from 'react';

export const MouseSpotlight: React.FC = () => {
  useEffect(() => {
    // Only enable on pointer-fine devices (desktops/laptops with mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Set CSS variables on any hovering spotlight-card
      const target = (e.target as HTMLElement)?.closest('.spotlight-card') as HTMLElement;
      if (target) {
        const rect = target.getBoundingClientRect();
        target.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        target.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};
