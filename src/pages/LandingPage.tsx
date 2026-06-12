import React, { useEffect } from 'react';
import { Hero } from '../features/landing/Hero';
import { Overview } from '../features/landing/Overview';
import { Trust } from '../features/landing/Trust';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Hero />
      <Overview />
      <Trust />
    </div>
  );
};
