import React from 'react';
import { MessageSquare, ShieldCheck, Zap, Heart } from 'lucide-react';
import { Contact } from '../features/landing/Contact';

export const ContactPage: React.FC = () => {
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
          <MessageSquare className="w-4 h-4 text-brand-primary animate-pulse" />
          <span className="text-gradient font-extrabold">Eazmate Support & Sales Hub</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-theme-text">
          Speak With Our AI <br />
          <span className="text-gradient">Operations Engineering Team</span>
        </h1>
        <p className="text-theme-textMuted text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          Need details on how Eazmate coordinates with your database architecture, signs HIPAA BAAs, or manages automated notification channels? Connect with us instantly.
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
          {[
            { value: "24 Hours", label: "Max Response Time", icon: <Zap className="w-4 h-4 text-purple-600 dark:text-purple-400" />, color: "text-purple-600 dark:text-purple-400" },
            { value: "Free", label: "Operational Audit", icon: <Heart className="w-4 h-4 text-blue-600 dark:text-blue-400" />, color: "text-blue-600 dark:text-blue-400" },
            { value: "HIPAA / SOC2", label: "Compliance Direct", icon: <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />, color: "text-emerald-600 dark:text-emerald-400" },
            { value: "Flexible", label: "SLA Frameworks", icon: <MessageSquare className="w-4 h-4 text-teal-600 dark:text-teal-400" />, color: "text-teal-600 dark:text-teal-400" }
          ].map((stat, idx) => (
            <div key={idx} className="premium-card p-6 text-center relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
              <div className="text-2xl sm:text-3xl font-black mb-1.5 tracking-tight flex items-center justify-center gap-2">
                <span className={stat.color}>{stat.value}</span>
              </div>
              <div className="text-xs text-theme-textMuted font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 mt-1">
                {stat.icon}
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Feature Sections */}
      <div className="relative z-10">
        <Contact />
      </div>
    </div>
  );
};
