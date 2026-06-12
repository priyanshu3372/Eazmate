import React from 'react';
import { Network, ShieldCheck, Heart, Award } from 'lucide-react';
import { Industries } from '../features/landing/Industries';

export const IndustriesPage: React.FC = () => {
  return (
    <div className="bg-white text-zinc-600 min-h-screen relative overflow-hidden">
      {/* Aurora Background Layer */}
      <div className="aurora-bg">
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>

      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center relative z-10">
        <div className="gradient-badge mb-6">
          <Network className="w-4 h-4 text-brand-primary animate-pulse" />
          <span className="text-gradient font-extrabold">Eazmate Industries Showcase</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-[#1A1A2E]">
          Operational Infrastructure <br />
          <span className="text-gradient">For Every Business Template</span>
        </h1>
        <p className="text-zinc-500 text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          While clinical healthcare operations serve as our flagship validation standard, the Eazmate AI engine is natively optimized for a diverse set of industrial and commercial verticals.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { value: "HIPAA", label: "Healthcare Grade", icon: <ShieldCheck className="w-4 h-4 text-brand-teal" /> },
            { value: "9+", label: "Industries Supported", icon: <Network className="w-4 h-4 text-brand-primary" /> },
            { value: "100%", label: "Custom Mapping", icon: <Award className="w-4 h-4 text-blue-400" /> },
            { value: "Flagship", label: "Patient Care System", icon: <Heart className="w-4 h-4 text-brand-teal" /> }
          ].map((stat, idx) => (
            <div key={idx} className="premium-card p-6 text-center relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="text-2xl sm:text-3xl font-black mb-1 tracking-tight flex items-center justify-center gap-2">
                <span className="text-gradient">{stat.value}</span>
              </div>
              <div className="text-xs text-zinc-500 font-medium tracking-wider uppercase flex items-center justify-center gap-1.5 mt-1">
                {stat.icon}
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Feature Sections */}
      <div className="relative z-10">
        <Industries />
      </div>
    </div>
  );
};
