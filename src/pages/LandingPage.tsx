import React, { useEffect } from 'react';
import { Hero } from '../features/landing/Hero';
import { InteractiveSandbox } from '../features/landing/InteractiveSandbox';
import { Overview } from '../features/landing/Overview';
import { Trust } from '../features/landing/Trust';

export const LandingPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      <Hero />
      <InteractiveSandbox />
      <Overview />
      <Trust />
    </div>
  );
};
