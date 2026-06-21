import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Cpu, Zap, BarChart3, TrendingUp, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [logs, setLogs] = useState<string[]>([
    "System Initialized.",
    "Awaiting operational trigger..."
  ]);

  const steps = [
    { title: "Applications", desc: "Data feeds from Slack, WhatsApp, HubSpot, and Epic systems", icon: "🔌" },
    { title: "AI Brain Layer", desc: "Contextual processing, routing, and intent recognition", icon: "🧠" },
    { title: "Automation Engine", desc: "Executing multi-step API webhooks & scheduling", icon: "⚡" },
    { title: "Insights & Decisions", desc: "Compiling ROI tracking and predictive analytics", icon: "📊" },
    { title: "Business Growth", desc: "Accelerating conversion and organizational output", icon: "📈" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newLogs: Record<number, string[]> = {
      0: [
        "📥 Received incoming contact from HubSpot CRM.",
        "📥 WhatsApp hook triggered: incoming user query."
      ],
      1: [
        "🧠 Eazmate AI routing intent detected: 'Demo Request'.",
        "🧠 Context queried from vector database."
      ],
      2: [
        "⚡ Automated workflow triggered: Scheduling Calendly invite.",
        "⚡ Triggered Slack alert to Sales Channel #notifications."
      ],
      3: [
        "📊 ROI compiled: response time reduced by 94%.",
        "📊 AI model calibrated with new memory parameters."
      ],
      4: [
        "🚀 Conversion logged: Lead marked as qualified.",
        "🚀 Growth Index: +12.4% operational efficiency."
      ]
    };
    
    setLogs([
      ...newLogs[activeStep],
      `[Info] Orchestrating node: ${steps[activeStep].title}...`
    ].slice(-5));
  }, [activeStep]);

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-theme-bg">
      {/* Aurora mesh gradient environment */}
      <div className="aurora-bg">
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text content side */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left animate-fade-in">
            <span className="gradient-badge font-extrabold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
              The AI Brain Behind Your Business
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-theme-text leading-[1.1] sm:leading-none">
              The <span className="text-gradient">Intelligence</span> Layer <br />
              Powering Modern <span className="text-gradient">Organizations</span>
            </h1>
            
            <p className="text-theme-textMuted text-xl font-semibold leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Connect your tools, automate operations, manage relationships, orchestrate workflows, and unlock organizational intelligence from a single AI-powered platform.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link
                to="/get-quotation"
                className="bg-brand-gradient hover:brightness-105 text-white font-extrabold text-base px-8 py-4.5 rounded-xl shadow-md flex items-center justify-center gap-2 group transition-all"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-gradient-container font-extrabold text-base px-8 py-4.5 transition-all focus:outline-none"
              >
                <span className="text-gradient">Schedule Demo</span>
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('platform-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 text-theme-textMuted hover:text-theme-text font-extrabold text-base px-4 py-4.5 transition-colors"
              >
                <div className="w-8 h-8 rounded-full border border-theme-border flex items-center justify-center text-xs">
                  <Play className="w-3.5 h-3.5 fill-current text-theme-textMuted ml-0.5" />
                </div>
                See It In Action
              </button>
            </div>

            {/* Quick value features */}
            <div className="pt-8 border-t border-theme-border flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-theme-textMuted font-semibold">
              <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-brand-primary" /> No Credit Card Required</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-brand-primary" /> HIPAA & SOC2 Compliant</span>
              <span className="flex items-center gap-2"><CheckCircle className="w-4.5 h-4.5 text-brand-primary" /> 1000+ Native Integrations</span>
            </div>
          </div>

          {/* Interactive visual side */}
          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            <div className="glass-card rounded-3xl p-5 relative shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-gradient opacity-30" />
              
              <div className="flex items-center justify-between pb-3 border-b border-theme-border mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neutral-600" />
                  <div className="w-2 h-2 rounded-full bg-neutral-700" />
                  <div className="w-2 h-2 rounded-full bg-neutral-800" />
                </div>
                <div className="text-xs text-theme-textLight font-mono tracking-widest uppercase">Eazmate Orchestrator v2.4</div>
              </div>

              {/* Steps rendering as independent cards */}
              <div className="space-y-3">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`relative z-10 flex items-start gap-3.5 py-3 px-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                        isActive 
                          ? 'bg-theme-bgAlt/95 shadow-lg scale-[1.01] -translate-y-0.5' 
                          : 'bg-theme-bgTertiary/45 border-theme-border/60 hover:border-theme-border hover:bg-theme-bgAlt/40 hover:-translate-y-0.5 shadow-sm'
                      }`}
                      style={isActive ? {
                        border: '1px solid transparent',
                        backgroundImage: 'linear-gradient(var(--bg-secondary), var(--bg-secondary)), var(--brand-gradient)',
                        backgroundClip: 'padding-box, border-box',
                        backgroundOrigin: 'border-box',
                        boxShadow: '0 15px 30px -12px rgba(138, 0, 255, 0.12), 0 3px 15px -4px rgba(138, 0, 255, 0.06)'
                      } : {}}
                    >
                      <div className={`w-9.5 h-9.5 rounded-lg flex items-center justify-center text-lg shrink-0 transition-all ${
                        isActive 
                          ? 'bg-brand-gradient text-white scale-105 shadow-md font-extrabold' 
                          : 'bg-theme-bgTertiary border border-theme-border text-theme-textLight'
                      }`}>
                        {idx === 0 && <span className="text-xs font-semibold">🔌</span>}
                        {idx === 1 && <Cpu className="w-4 h-4 text-theme-textLight" />}
                        {idx === 2 && <Zap className="w-4 h-4 text-theme-textLight" />}
                        {idx === 3 && <BarChart3 className="w-4 h-4 text-theme-textLight" />}
                        {idx === 4 && <TrendingUp className="w-4 h-4 text-theme-textLight" />}
                      </div>
                      
                      <div className="space-y-0.5 min-w-0">
                        <div className="flex items-center gap-2">
                          <h3 className={`text-sm font-black ${isActive ? 'text-theme-text' : 'text-theme-textLight'}`}>
                            {step.title}
                          </h3>
                          {isActive && (
                            <span className="gradient-badge text-[11px] font-extrabold uppercase tracking-widest text-brand-primary animate-pulse py-0.5 px-1.5">
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-theme-textLight text-sm leading-normal">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Console log window */}
              <div className="mt-4 p-3.5 rounded-xl bg-theme-bgTertiary border border-theme-border font-mono text-xs leading-relaxed text-brand-primary dark:text-[#c4b083] min-h-[90px] select-none shadow-inner">
                <div className="text-theme-textLight pb-1 border-b border-theme-border mb-1.5 flex justify-between items-center">
                  <span>SYSTEM CONSOLE LOG</span>
                  <span className="text-brand-teal animate-pulse text-xs">● READY</span>
                </div>
                <div className="space-y-0.5">
                  {logs.map((log, idx) => (
                    <div key={idx} className={`break-words ${idx === logs.length - 1 ? 'text-theme-text' : 'opacity-70'}`}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
