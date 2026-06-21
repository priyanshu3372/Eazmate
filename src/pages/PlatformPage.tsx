import React from 'react';
import { Cpu, Zap, Activity, Clock } from 'lucide-react';
import { BrainLayer } from '../features/landing/BrainLayer';
import { AnalyticsIntelligence } from '../features/landing/AnalyticsIntelligence';

export const PlatformPage: React.FC = () => {
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
          <Cpu className="w-4 h-4 text-brand-primary animate-pulse" />
          <span className="text-gradient font-extrabold">Eazmate AI Operating System</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-theme-text">
          The Intelligent Core <br />
          <span className="text-gradient">Orchestrating Your Enterprise</span>
        </h1>
        <p className="text-theme-textMuted text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          Eazmate sits directly above your operational stacks. Connect communication APIs, internal tools, database layers, and CRM records to trigger autonomous actions and capture real-time operational insights.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { value: "1.4s", label: "Avg Latency", icon: <Clock className="w-4 h-4 text-brand-teal" /> },
            { value: "Millions", label: "Actions Processed", icon: <Zap className="w-4 h-4 text-brand-primary" /> },
            { value: "Real-Time", label: "ROI Telemetry", icon: <Activity className="w-4 h-4 text-blue-400" /> },
            { value: "Active", label: "Decision Support", icon: <Cpu className="w-4 h-4 text-brand-teal" /> }
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
        <BrainLayer />
        <AnalyticsIntelligence />
      </div>
    </div>
  );
};
