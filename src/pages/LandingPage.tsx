import React from 'react';
import { Hero } from '../features/landing/Hero';
import { InteractiveSandbox } from '../features/landing/InteractiveSandbox';
import { Overview } from '../features/landing/Overview';
import { Trust } from '../features/landing/Trust';

export const LandingPage: React.FC = () => {
  return (
    <div className="relative">
      <Hero />
      <InteractiveSandbox />
      <Overview />
      <Trust />
    </div>
  );
};


