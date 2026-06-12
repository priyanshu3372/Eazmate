import React, { useState } from 'react';
import { Cpu, Database, Route, GitFork, Milestone, Compass, Check } from 'lucide-react';

export const BrainLayer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'routing' | 'memory' | 'orchestrate'>('routing');

  const capabilities = [
    {
      icon: <Cpu className="w-5 h-5 text-brand-teal" />,
      title: "Autonomous AI Agents",
      desc: "Deploy goal-driven agents that resolve user requests, execute systems logic, and update databases independently."
    },
    {
      icon: <Compass className="w-5 h-5 text-brand-primary" />,
      title: "Intelligent Routing",
      desc: "Instantly parse query semantics to route inquiries and support tickets to the precise team or automated service flow."
    },
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: "Workflow Memory",
      desc: "Equip workflows with memory cache parameters. Agents remember past user context, configuration state, and history."
    },
    {
      icon: <GitFork className="w-5 h-5 text-brand-teal" />,
      title: "Task Orchestration",
      desc: "Chain APIs across Slack, Stripe, HubSpot, and WhatsApp into multi-threaded scripts with conditional branches."
    },
    {
      icon: <Milestone className="w-5 h-5 text-brand-primary" />,
      title: "Decision Support",
      desc: "Generate smart recommendations, parse complex regulatory databases, and advise human agents on subsequent actions."
    },
    {
      icon: <Route className="w-5 h-5 text-blue-400" />,
      title: "Cross-System Intelligence",
      desc: "Sync data layers instantly between legacy systems (like EHRs in healthcare) and modern productivity tools."
    }
  ];

  const simulatedTriggers = {
    routing: {
      incoming: "WhatsApp from customer: 'I need to cancel my appointment and check my refund status'",
      process: [
        "1. Semantic parsing: Intent identified as [APPOINTMENT_CANCEL] & [REFUND_CHECK]",
        "2. Querying Stripe for transaction record TXN_88189...",
        "3. Verification: Transaction found ($240.00, paid via visa)",
        "4. Policy Check: Cancelled >24h in advance. Approved."
      ],
      outcome: "Action: Auto-cancelled appointment. Initiated $240 refund on Stripe. Sent confirmation PDF to user."
    },
    memory: {
      incoming: "Slack command: '/eazmate status ApexHealth integration'",
      process: [
        "1. Retrieval: Querying active memory logs for workspace 'ApexHealth'",
        "2. Verification: Active HIPAA pipelines running: 3.",
        "3. Check: Pending BAAs: None. SOC2 credential check: Passed.",
        "4. Memory lookup: Aniket checked integration status 3 hours ago."
      ],
      outcome: "Action: Logged status check. Slack output sent to channel: 'ApexHealth integration fully functional. 12k actions processed.'"
    },
    orchestrate: {
      incoming: "Email to info@: 'New franchise application received from Sector 28 wellness club'",
      process: [
        "1. Parsing: Scraped email body for metadata: Location=Gurugram, Size=Large",
        "2. Pipeline check: Creating card in HubSpot CRM under 'Qualified Leads'",
        "3. Routing: Assigning lead representative Prakhar based on geography",
        "4. Scheduling: Sending automated Calendly link to lead for screening"
      ],
      outcome: "Action: Created HubSpot lead card. Sent Calendly invite. Sent welcome email with proposal slide deck."
    }
  };

  return (
    <section id="platform-section" className="relative py-24 bg-[#0D0D19] border-t border-zinc-900">
      <div className="absolute top-10 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-brand-primary" /> AI Brain Layer
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-100 leading-tight">
            The Central <span className="text-gradient">Intelligence</span> Center <br />
            Of Your <span className="text-gradient">Organization</span>
          </h2>
          <p className="text-zinc-400 text-base font-semibold leading-relaxed">
            Eazmate functions as the orchestration layer sitting above your organization. It processes inputs, queries context, makes intelligent routing decisions, and coordinates workflows.
          </p>
        </div>

        {/* Section Grid: Capabilities & Visual Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Capabilities Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="premium-card p-6 space-y-3 border border-zinc-800 bg-[#131322]">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative shadow-sm overflow-hidden group-hover:scale-110 transition-transform shrink-0">
                  <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                  <span className="relative z-10 shrink-0">{cap.icon}</span>
                </div>
                <h3 className="text-lg font-black text-zinc-100">{cap.title}</h3>
                <p className="text-zinc-400 text-sm font-semibold leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Simulation Dashboard */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 border border-zinc-800 bg-[#131322]/50 relative overflow-hidden shadow-md">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-gradient opacity-30" />
              
              <div className="text-sm font-medium text-zinc-400 tracking-wider uppercase mb-5 flex justify-between items-center">
                <span>Intelligent Processing Demo</span>
                <span className="flex items-center gap-1.5 text-[#128C7E] text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping" /> Real-time Simulation
                </span>
              </div>
 
              {/* Tabs inside Visual */}
              <div className="flex gap-2 p-1 bg-zinc-950/60 rounded-xl mb-6 border border-zinc-850">
                {[
                  { id: 'routing', label: 'Smart Route' },
                  { id: 'memory', label: 'Memory recall' },
                  { id: 'orchestrate', label: 'Orchestration' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex-1 text-center py-2 rounded-lg text-sm font-bold transition-all ${
                      activeTab === tab.id 
                        ? 'bg-[#18182E] text-zinc-100 shadow-sm border border-zinc-800' 
                        : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Content Panel */}
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Incoming Input Event</span>
                  <div className="p-3 bg-[#0B0B14] border border-zinc-800 rounded-xl font-mono text-xs md:text-sm text-zinc-300 leading-normal">
                    {simulatedTriggers[activeTab].incoming}
                  </div>
                </div>
 
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">AI Brain Reasoning Log</span>
                  <div className="p-3.5 bg-[#1A1A2E] border border-zinc-800 rounded-xl space-y-1 font-mono text-xs md:text-sm text-brand-teal leading-relaxed min-h-[120px]">
                    {simulatedTriggers[activeTab].process.map((p, i) => (
                      <div key={i} className="break-words">{p}</div>
                    ))}
                  </div>
                </div>
 
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">Orchestrated Outcome</span>
                  <div className="p-3.5 bg-[#0B0B14] border border-zinc-800 rounded-xl font-mono text-xs md:text-sm text-zinc-300 flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-950/80 text-emerald-400 flex items-center justify-center border border-emerald-800/40 shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{simulatedTriggers[activeTab].outcome}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
