import React, { useState } from 'react';
import { ShieldCheck, Heart, GraduationCap, Building2, Sparkles, Utensils, Briefcase, Network, ArrowRight, Wheat, Factory, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('healthcare');

  const industries = [
    {
      id: 'healthcare',
      icon: <Heart className="w-5 h-5 text-rose-400" />,
      label: "Healthcare",
      flagship: true,
      title: "Trusted by Healthcare Leaders",
      tagline: "HIPAA-compliant workflows engineered for clinical security and patient trust.",
      outcomes: ["94% Reduction in Appointment No-shows", "100% Patient Intake Verification", "BAA Contract Support Available"],
      cases: "Automate patient scheduling, medications reminders, and follow-ups natively over WhatsApp. Integrates directly with EHR/EMR platforms (Epic, Cerner)."
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      label: "Education",
      flagship: false,
      title: "AI-Powered Academic Administration",
      tagline: "Streamline student intake, course registrations, and parent communications.",
      outcomes: ["80% Lower Admission Query Latency", "Automated Grade & Schedule Dispatches", "GDPR/FERPA Secure Architecture"],
      cases: "Automate course fee reminders, coordinate lecture scheduling updates, and launch custom enrollment QA agents."
    },
    {
      id: 'real-estate',
      icon: <Building2 className="w-5 h-5 text-amber-400" />,
      label: "Real Estate",
      flagship: false,
      title: "Autonomous Lead & Listing Management",
      tagline: "Orchestrate buyer profiles, property viewings, and document pipelines.",
      outcomes: ["3x More Property Views Scheduled", "Instant Lead Response Automation", "Syncs Listing DBs to CRM Automatically"],
      cases: "Qualify property buyers over AI WhatsApp chat, auto-schedule physical viewings, and send customized listings packages based on budget search."
    },
    {
      id: 'wellness',
      icon: <Sparkles className="w-5 h-5 text-pink-400" />,
      label: "Salons & Wellness",
      flagship: false,
      title: "Interactive Client Retention Hub",
      tagline: "Automate appointment bookings, package announcements, and membership plans.",
      outcomes: ["25% Upsell on Premium Wellness Plans", "Zero Missed Booking Inquiries", "Auto-Reschedule on Cancellations"],
      cases: "Coordinate recurring bookings via conversational bots, run customized feedback campaigns, and dispatch special wellness package promos."
    },
    {
      id: 'restaurants',
      icon: <Utensils className="w-5 h-5 text-emerald-400" />,
      label: "Restaurants",
      flagship: false,
      title: "Operational Logistics & Orders",
      tagline: "Automate reservation queues, loyalty plans, and feedback campaigns.",
      outcomes: ["30% Higher Table Turn Rate", "Conversational Menu Ordering Bot", "Integrates Directly with Stripe & POS"],
      cases: "Deploy automated reservation checkers, take food pick-up orders natively in chat, and follow up with automated satisfaction review invites."
    },
    {
      id: 'services',
      icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
      label: "Professional Services",
      flagship: false,
      title: "Agency & Consultancy Operations",
      tagline: "Streamline client onboarding, project updates, and billing milestones.",
      outcomes: ["98% Invoices Settled on First Alert", "Zero Manual Onboarding Lag", "Automatic Slack Notification Triggers"],
      cases: "Deploy AI intake coordinators, dispatch automated invoice milestones, and route client queries to specialized project leads."
    },
    {
      id: 'agriculture',
      icon: <Wheat className="w-5 h-5 text-lime-500" />,
      label: "Agriculture",
      flagship: false,
      title: "Smart Farming & Supply Chain Automation",
      tagline: "Automate crop monitoring, supply chain logistics, and farmer communications at scale.",
      outcomes: ["40% Reduction in Post-Harvest Losses", "Real-Time Soil & Weather Alerts", "Automated Mandi Price Notifications"],
      cases: "Coordinate seed-to-sale traceability, automate irrigation scheduling alerts via WhatsApp, and dispatch weather-driven advisory updates to farmers and distributors."
    },
    {
      id: 'steel',
      icon: <Factory className="w-5 h-5 text-slate-500" />,
      label: "Steel Industries",
      flagship: false,
      title: "Industrial Operations & Production Control",
      tagline: "Streamline production workflows, quality assurance checks, and vendor coordination.",
      outcomes: ["35% Faster Order-to-Dispatch Cycles", "Automated Quality Compliance Reports", "Real-Time Inventory Sync Across Plants"],
      cases: "Automate purchase order workflows, trigger quality inspection alerts at every production stage, and sync inventory levels across multiple plant locations in real time."
    },
    {
      id: 'renewable',
      icon: <Sun className="w-5 h-5 text-yellow-500" />,
      label: "Renewable Resources",
      flagship: false,
      title: "Clean Energy Operations & Grid Management",
      tagline: "Optimize energy production, maintenance scheduling, and regulatory compliance workflows.",
      outcomes: ["99.5% Uptime with Predictive Maintenance", "Automated Regulatory Filing Alerts", "50% Faster Site Inspection Turnarounds"],
      cases: "Automate solar panel and wind turbine maintenance schedules, dispatch real-time energy output reports, and coordinate field inspection teams with AI-powered routing."
    }
  ];

  const current = industries.find(ind => ind.id === selectedIndustry) || industries[0];

  return (
    <section id="industries-section" className="relative py-24 bg-[#101010] border-t border-zinc-900">
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Network className="w-3.5 h-3.5 text-brand-primary" /> Industries Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-100 leading-tight">
            Integrated Solutions Built <br />
            For Every <span className="text-gradient">Vertical</span>
          </h2>
          <p className="text-zinc-400 text-base font-semibold leading-relaxed">
            Eazmate solves coordination challenges across all business templates. Healthcare serves as our proof of capability, but our AI Operating System runs workflows globally.
          </p>
        </div>

        {/* Industry selection grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Tab List */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {industries.map((ind) => (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(ind.id)}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all duration-300 relative overflow-hidden group ${
                  selectedIndustry === ind.id 
                    ? 'bg-[#161616]/50 border-zinc-800 shadow-md translate-x-2 border-l-4 border-l-brand-primary' 
                    : 'bg-zinc-900/60 border-zinc-850 hover:bg-zinc-800/40 text-zinc-400'
                }`}
              >
                <div className="flex items-center gap-3.5 relative z-10">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all relative overflow-hidden ${
                    selectedIndustry === ind.id 
                      ? 'bg-zinc-950 border-brand-primary' 
                      : 'bg-zinc-950 border-zinc-800'
                  }`}>
                    {selectedIndustry === ind.id && <div className="absolute inset-0 bg-brand-gradient opacity-10" />}
                    <span className={`relative z-10 ${selectedIndustry === ind.id ? 'text-brand-primary font-bold' : ''}`}>{ind.icon}</span>
                  </div>
                  <span className={`text-sm font-bold ${selectedIndustry === ind.id ? 'text-zinc-100' : 'text-zinc-450'}`}>
                    {ind.label}
                  </span>
                </div>
 
                {ind.flagship && (
                  <span className="text-xs font-medium px-2 py-1 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-800/30 relative z-10">
                    Flagship
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Right Detailed Display Board */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-zinc-800 bg-[#161616]/40 shadow-xl relative min-h-[420px] flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-gradient opacity-20" />
              
              <div className="space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800">
                  <div className="space-y-1">
                    {current.flagship && (
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-405 uppercase font-medium tracking-widest">
                        <ShieldCheck className="w-3.5 h-3.5" /> HIPAA and SOC 2 Shielded
                      </span>
                    )}
                    <h3 className="text-2xl font-black text-zinc-100 tracking-tight">{current.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-lg shadow-inner">
                    {current.icon}
                  </div>
                </div>
 
                <p className="text-zinc-200 text-base font-semibold leading-relaxed">
                  {current.tagline}
                </p>
 
                <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 space-y-4">
                  <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest">Core Use Cases & Mechanics</h4>
                  <p className="text-zinc-400 text-sm font-semibold leading-relaxed">{current.cases}</p>
                </div>
 
                <div className="space-y-3">
                  <h4 className="text-xs font-black text-zinc-500 uppercase tracking-widest">Target Business Outcomes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {current.outcomes.map((outcome, idx) => (
                      <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3 text-center">
                        <span className="text-sm font-semibold text-zinc-200 leading-snug block">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
 
              <div className="pt-8 border-t border-zinc-800 mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-sm text-zinc-400 font-semibold">Need specific custom configurations? We build custom layouts.</span>
                <Link
                  to="/get-quotation"
                  className="w-full sm:w-auto bg-brand-gradient hover:brightness-105 text-neutral-950 text-sm font-black px-5 py-3.5 rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-1.5 border border-[#cdb477]/30 group"
                >
                  Configure for {current.label}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
