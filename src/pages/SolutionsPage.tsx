import React from 'react';
import { Layers, Users, Zap, CheckCircle2 } from 'lucide-react';
import { UnifiedCRM } from '../features/landing/UnifiedCRM';
import { WorkflowAutomation } from '../features/landing/WorkflowAutomation';

export const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-theme-bg text-theme-textMuted min-h-screen relative overflow-hidden">
      {/* Aurora Background Layer */}
      <div className="aurora-bg">
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>

      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center relative z-10">
        <div className="gradient-badge mb-6">
          <Layers className="w-4 h-4 text-brand-primary animate-pulse" />
          <span className="text-gradient font-extrabold">Eazmate Operational Solutions</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-theme-text">
          Unified CRM Operations <br />
          <span className="text-gradient">& Autonomous Workflows</span>
        </h1>
        <p className="text-theme-textMuted text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          Eazmate automates client onboarding, vendor communication, and data sync cycles. Bridge your CRM platforms and back-end database layers into one real-time operational dashboard.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { value: "Omnichannel", label: "Unified Messages", icon: <Users className="w-4 h-4 text-brand-teal" /> },
            { value: "No-Code", label: "Workflow Builder", icon: <Zap className="w-4 h-4 text-brand-primary" /> },
            { value: "SOC 2", label: "Compliance Logging", icon: <CheckCircle2 className="w-4 h-4 text-blue-400" /> },
            { value: "94%", label: "Manual Lag Cut", icon: <Layers className="w-4 h-4 text-brand-teal" /> }
          ].map((stat, idx) => (
            <div key={idx} className="premium-card p-6 text-center relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="text-2xl sm:text-3xl font-black mb-1 tracking-tight flex items-center justify-center gap-2">
                <span className="text-gradient">{stat.value}</span>
              </div>
              <div className="text-xs text-theme-textMuted font-medium tracking-wider uppercase flex items-center justify-center gap-1.5 mt-1">
                {stat.icon}
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Feature Sections */}
      <div className="relative z-10">
        <UnifiedCRM />
        <WorkflowAutomation />
      </div>
    </div>
  );
};
