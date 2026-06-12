import React, { useState } from 'react';
import { UserCheck, Split, History, MessageSquare, Users } from 'lucide-react';

export const UnifiedCRM: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number>(1);

  const features = [
    {
      icon: <UserCheck className="w-5 h-5 text-brand-teal" />,
      title: "Contact Management",
      desc: "Maintain rich, unified profiles for customers, employees, patients, and students. Eazmate bridges isolated database records automatically."
    },
    {
      icon: <Split className="w-5 h-5 text-brand-primary" />,
      title: "Pipeline Orchestration",
      desc: "Track status across pipelines: hiring, sales, healthcare consultations, or course enrollments. Status modifications launch related workflows."
    },
    {
      icon: <History className="w-5 h-5 text-blue-400" />,
      title: "Unified Activity History",
      desc: "View chronologically grouped activity logs: WhatsApp alerts, emails, Stripe invoice completions, and platform logins in one place."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-brand-teal" />,
      title: "Omnichannel Communications",
      desc: "Synchronize conversations from SMS, email, Slack, and WhatsApp. Centralize client relations without shifting tabs."
    }
  ];

  const cardsData = [
    {
      id: 1,
      name: "Dr. Ananya Sharma (Healthcare)",
      role: "Lead Cardiologist",
      status: "Onboarding",
      email: "ananya.sharma@apexhealth.org",
      phone: "+91 99981 77651",
      history: [
        { event: "HubSpot card generated from application", time: "2 days ago" },
        { event: "HIPAA-compliant BAA document signed (DocuSign)", time: "1 day ago" },
        { event: "WhatsApp reminder: Orientation schedule sent", time: "3 hours ago" }
      ],
      stageColor: "bg-amber-950/40 text-amber-450 border-amber-805/30"
    },
    {
      id: 2,
      name: "Rohan Malhotra (Enterprise SaaS)",
      role: "VP of Operations",
      status: "Negotiation",
      email: "rohan@malhotracorp.com",
      phone: "+91 88761 22912",
      history: [
        { event: "Stripe invoice generated: $4,500.00", time: "4 hours ago" },
        { event: "Slack webhook triggered: Slack channel configured", time: "2 hours ago" },
        { event: "System authorization email compiled & sent", time: "12 mins ago" }
      ],
      stageColor: "bg-blue-950/40 text-blue-455 border-blue-805/30"
    },
    {
      id: 3,
      name: "Vikram Pratap Singh (Real Estate)",
      role: "Investor",
      status: "Pipeline Closed",
      email: "vpsingh@singhestates.in",
      phone: "+91 78964 12290",
      history: [
        { event: "Properties review schedule sent via WhatsApp", time: "Yesterday" },
        { event: "System contract registered on database layer", time: "18 hours ago" },
        { event: "Welcome kit automated email sent", time: "15 hours ago" }
      ],
      stageColor: "bg-emerald-950/40 text-emerald-455 border-emerald-805/30"
    }
  ];

  return (
    <section id="solutions-section" className="relative py-24 bg-[#0B0B14] border-t border-zinc-900">
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-brand-primary" /> Unified CRM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-100 leading-tight">
            Consolidate Your <span className="text-gradient">Operational</span> Data <br />
            Into a Single <span className="text-gradient">Contextual</span> Core
          </h2>
          <p className="text-zinc-400 text-base font-semibold leading-relaxed">
            Eliminate separate databases for customers, vendors, and members. Eazmate holds all operations data in one secure relationship vault with instant indexing.
          </p>
        </div>


        {/* ═══ Row 1: Pipeline Board + Unified Profile ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: CRM Pipeline Visual Board */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-5 border border-zinc-800 bg-[#131322]/40 shadow-xl relative h-full">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <span className="text-sm font-medium text-zinc-300 uppercase tracking-widest">Active Operations Pipeline</span>
                <span className="text-xs text-zinc-500 font-mono font-medium">Select Row</span>
              </div>
 
              {/* Pipeline Columns Header */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                {['onboarding', 'negotiation', 'completed'].map((col) => (
                  <div key={col} className="text-xs font-medium text-zinc-400 uppercase tracking-wider text-center border-b border-zinc-850 pb-2">
                    {col}
                  </div>
                ))}
              </div>

              {/* Pipeline cards list */}
              <div className="grid grid-cols-3 gap-4">
                
                {/* Onboarding Column */}
                <div className="space-y-3">
                  {cardsData.filter(c => c.status === "Onboarding").map(card => (
                    <div 
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                        selectedCard === card.id 
                          ? 'bg-[#18182E] border-brand-primary/50 ring-1 ring-brand-primary/10 scale-[1.02] shadow-sm' 
                          : 'bg-zinc-900/60 border-zinc-800 hover:bg-[#1A1A2E]/50'
                      }`}
                    >
                      <h4 className="text-sm font-black text-zinc-200 mb-1 truncate">{card.name}</h4>
                      <p className="text-sm font-medium text-zinc-405 mb-2">{card.role}</p>
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${card.stageColor}`}>
                        {card.status}
                      </span>
                    </div>
                  ))}
                  <div className="h-20 border border-dashed border-zinc-800 rounded-xl flex items-center justify-center text-xs text-zinc-500 hover:text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/20 transition-all cursor-pointer font-medium select-none">
                    + Add Record
                  </div>
                </div>
 
                {/* Negotiation Column */}
                <div className="space-y-3">
                  {cardsData.filter(c => c.status === "Negotiation").map(card => (
                    <div 
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                        selectedCard === card.id 
                          ? 'bg-[#18182E] border-brand-primary/50 ring-1 ring-brand-primary/10 scale-[1.02] shadow-sm' 
                          : 'bg-zinc-900/60 border-zinc-800 hover:bg-[#1A1A2E]/50'
                      }`}
                    >
                      <h4 className="text-sm font-black text-zinc-200 mb-1 truncate">{card.name}</h4>
                      <p className="text-sm font-medium text-zinc-405 mb-2">{card.role}</p>
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${card.stageColor}`}>
                        {card.status}
                      </span>
                    </div>
                  ))}
                </div>
 
                {/* Completed Column */}
                <div className="space-y-3">
                  {cardsData.filter(c => c.status === "Pipeline Closed").map(card => (
                    <div 
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                      className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                        selectedCard === card.id 
                          ? 'bg-[#18182E] border-[#25D366]/40 ring-1 ring-[#25D366]/10 scale-[1.02] shadow-sm' 
                          : 'bg-zinc-900/60 border-zinc-800 hover:bg-[#1A1A2E]/50'
                      }`}
                    >
                      <h4 className="text-sm font-black text-zinc-200 mb-1 truncate">{card.name}</h4>
                      <p className="text-sm font-medium text-zinc-405 mb-2">{card.role}</p>
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border ${card.stageColor}`}>
                        Active OS
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Right: Unified Profile Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 border border-zinc-800 bg-[#131322]/40 shadow-md h-full">
              {(() => {
                const currentData = cardsData.find(c => c.id === selectedCard) || cardsData[0];
                return (
                  <div className="space-y-5 animate-fade-in">
                    <div className="pb-4 border-b border-zinc-800 flex items-center justify-between">
                      <div className="space-y-1">
                        <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Unified Profile</span>
                        <h3 className="text-lg font-black text-zinc-100">{currentData.name}</h3>
                      </div>
                      <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${currentData.stageColor}`}>
                        {currentData.status}
                      </span>
                    </div>
 
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-xs text-zinc-500 uppercase font-medium block mb-0.5">Work Email</span>
                        <span className="text-zinc-300 font-mono break-all font-semibold">{currentData.email}</span>
                      </div>
                      <div>
                        <span className="text-xs text-zinc-500 uppercase font-medium block mb-0.5">Mobile Number</span>
                        <span className="text-zinc-300 font-mono font-semibold">{currentData.phone}</span>
                      </div>
                    </div>
 
                    <div className="space-y-3">
                      <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest block">Activity & Automation History</span>
                      <div className="space-y-3.5 relative pl-4 border-l border-zinc-800">
                        {currentData.history.map((hist, idx) => (
                          <div key={idx} className="relative text-sm">
                            <div className="absolute left-[-21px] top-[4px] w-2.5 h-2.5 rounded-full bg-brand-primary border-2 border-[#131322] shrink-0" />
                            <div className="text-zinc-300 leading-snug">{hist.event}</div>
                            <div className="text-sm text-zinc-500 mt-0.5">{hist.time}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>

        </div>

        {/* ═══ Row 2: Feature Cards ═══ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((item, idx) => (
            <div key={idx} className="premium-card p-6 space-y-3 border border-zinc-800 bg-[#131322]">
              <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative shadow-sm overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                <span className="relative z-10">{item.icon}</span>
              </div>
              <h4 className="text-base font-black text-zinc-100">{item.title}</h4>
              <p className="text-zinc-400 text-sm font-semibold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
