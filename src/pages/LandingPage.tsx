import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../features/landing/Hero';
import { BrainLayer } from '../features/landing/BrainLayer';
import { UnifiedCRM } from '../features/landing/UnifiedCRM';
import { WorkflowAutomation } from '../features/landing/WorkflowAutomation';
import { AnalyticsIntelligence } from '../features/landing/AnalyticsIntelligence';
import { Industries } from '../features/landing/Industries';
import { Integrations } from '../features/landing/Integrations';
import { Trust } from '../features/landing/Trust';
import { Contact } from '../features/landing/Contact';

export const LandingPage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // If not redirecting to a section, default scroll to top
    const state = location.state as { scrollTo?: string } | null;
    if (!state?.scrollTo) {
      window.scrollTo(0, 0);
    } else {
      const timer = setTimeout(() => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150); // Small delay to let page mount and lay out correctly
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="relative">
      <Hero />
      <BrainLayer />
      <UnifiedCRM />
      <WorkflowAutomation />
      <AnalyticsIntelligence />
      <Industries />
      <Integrations />
      <Trust />
      <Contact />
    </div>
  );
};
