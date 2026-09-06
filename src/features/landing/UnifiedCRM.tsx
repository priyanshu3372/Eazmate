import React, { useState } from 'react';
import { UserCheck, Split, History, MessageSquare, Users, Mail, Phone, Plus, CheckCircle2, Clock, Activity } from 'lucide-react';
export const UnifiedCRM: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number>(1);

  const getStageBadge = (status: string) => {
    switch (status) {
      case 'Onboarding':
        return 'bg-amber-500 text-slate-950 font-black';
      case 'Negotiation':
        return 'bg-blue-600 text-white font-black';
      case 'Pipeline Closed':
        return 'bg-emerald-600 text-white font-black';
      default:
        return 'bg-slate-600 text-white font-black';
    }
  };

  const features = [
    {
      icon: <UserCheck className="w-5 h-5 text-white" />,
      iconBg: "bg-teal-600 shadow-teal-600/25",
      title: "Contact Management",
      desc: "Maintain rich, unified profiles for customers, employees, patients, and students. Eazmate bridges isolated database records automatically."
    },
    {
      icon: <Split className="w-5 h-5 text-white" />,
      iconBg: "bg-purple-600 shadow-purple-600/25",
      title: "Pipeline Orchestration",
      desc: "Track status across pipelines: hiring, sales, healthcare consultations, or course enrollments. Status modifications launch related workflows."
    },
    {
      icon: <History className="w-5 h-5 text-white" />,
      iconBg: "bg-blue-600 shadow-blue-600/25",
      title: "Unified Activity History",
      desc: "View chronologically grouped activity logs: WhatsApp alerts, emails, Stripe invoice completions, and platform logins in one place."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-white" />,
      iconBg: "bg-amber-600 shadow-amber-600/25",
      title: "Omnichannel Communications",
      desc: "Synchronize conversations from SMS, email, Slack, and WhatsApp. Centralize client relations without shifting tabs."
    }
  ];

  const cardsData = [
    {
      id: 1,
      name: "Dr. Ananya Sharma",
      domain: "Healthcare",
      role: "Lead Cardiologist",
      status: "Onboarding",
      email: "ananya.sharma@apexhealth.org",
      phone: "+91 99981 77651",
      history: [
        { event: "HubSpot card generated from application", time: "2 days ago" },
        { event: "HIPAA-compliant BAA document signed (DocuSign)", time: "1 day ago" },
        { event: "WhatsApp reminder: Orientation schedule sent", time: "3 hours ago" }
      ]
    },
    {
      id: 2,
      name: "Rohan Malhotra",
      domain: "Enterprise SaaS",
      role: "VP of Operations",
      status: "Negotiation",
      email: "rohan@malhotracorp.com",
      phone: "+91 88761 22912",
      history: [
        { event: "Stripe invoice generated: $4,500.00", time: "4 hours ago" },
        { event: "Slack webhook triggered: Slack channel configured", time: "2 hours ago" },
        { event: "System authorization email compiled & sent", time: "12 mins ago" }
      ]
    },
    {
      id: 3,
      name: "Vikram Pratap Singh",
      domain: "Real Estate",
      role: "Investor",
      status: "Pipeline Closed",
      email: "vpsingh@singhestates.in",
      phone: "+91 78964 12290",
      history: [
        { event: "Properties review schedule sent via WhatsApp", time: "Yesterday" },
        { event: "System contract registered on database layer", time: "18 hours ago" },
        { event: "Welcome kit automated email sent", time: "15 hours ago" }
      ]
    }
  ];

  return (
    <section id="solutions-section" className="relative py-24 bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5 text-brand-primary" /> Unified CRM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-theme-text leading-tight">
            Consolidate Your <span className="text-gradient">Operational</span> Data <br />
            Into a Single <span className="text-gradient">Contextual</span> Core
          </h2>
          <p className="text-theme-textMuted text-base font-semibold leading-relaxed">
            Eliminate separate databases for customers, vendors, and members. Eazmate holds all operations data in one secure relationship vault with instant indexing.
          </p>
        </div>


        {/* ═══ Row 1: Pipeline Board + Unified Profile ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: CRM Pipeline Visual Board */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-5 sm:p-6 shadow-xl relative h-full flex flex-col justify-between border border-theme-border">
              
              {/* Active Operations Pipeline Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3.5 pb-5 border-b border-theme-border mb-5">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20 shrink-0">
                    <Split className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-black text-theme-text uppercase tracking-wider">
                        Active Operations Pipeline
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        LIVE
                      </span>
                    </div>
                    <p className="text-[11.5px] font-medium text-theme-textMuted mt-0.5">
                      Multi-stage real-time synchronization across organizational pipelines
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="text-[10px] text-theme-textMuted font-mono md:hidden bg-theme-bgTertiary px-2 py-1 rounded-lg border border-theme-border">
                    Swipe ↔
                  </span>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-theme-bgTertiary border border-theme-border text-[11px] font-mono font-bold text-theme-text shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0 animate-pulse" />
                    <span>Click to Inspect</span>
                  </div>
                </div>
              </div>

              {/* Pipeline columns with integrated headers: swipeable on mobile, 3-col grid on md+ */}
              <div className="flex md:grid md:grid-cols-3 gap-3.5 flex-1 overflow-x-auto snap-x no-scrollbar pb-2">
                
                {/* Onboarding Column */}
                <div className="space-y-3 flex flex-col min-w-[270px] sm:min-w-[290px] md:min-w-0 flex-1 shrink-0 md:shrink snap-start">
                  {/* Column Header */}
                  <div className="flex items-center justify-between px-3.5 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 dark:bg-amber-500/15 backdrop-blur-sm shadow-sm transition-all">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 shadow-sm" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-800 dark:text-amber-300">
                        Onboarding
                      </span>
                    </div>
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md shrink-0 bg-amber-500 text-slate-950 shadow-sm">
                      {cardsData.filter(c => c.status === "Onboarding").length}
                    </span>
                  </div>

                  {cardsData.filter(c => c.status === "Onboarding").map(card => (
                    <div 
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                      className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                        selectedCard === card.id 
                          ? 'bg-theme-bgAlt border-purple-500/80 ring-2 ring-purple-500/20 shadow-md scale-[1.02]' 
                          : 'bg-theme-bgTertiary border-theme-border hover:border-purple-500/40 hover:bg-theme-bgAlt/60 hover:shadow-sm'
                      }`}
                    >
                      {selectedCard === card.id && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500" />
                      )}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                          {card.domain}
                        </span>
                      </div>
                      <h4 className="text-[13px] font-black text-theme-text mb-1 truncate leading-tight">{card.name}</h4>
                      <p className="text-[11.5px] font-semibold text-theme-textMuted mb-2.5 truncate">{card.role}</p>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded-full ${getStageBadge(card.status)} shadow-sm`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950 shrink-0" />
                        {card.status}
                      </span>
                    </div>
                  ))}
                  
                  <div className="mt-auto h-16 border-2 border-dashed border-theme-border/80 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-500/5 rounded-2xl flex items-center justify-center text-xs text-theme-textLight transition-all cursor-pointer font-bold select-none gap-2 group">
                    <span className="w-5 h-5 rounded-full bg-theme-bgTertiary border border-theme-border group-hover:bg-purple-600 group-hover:text-white flex items-center justify-center transition-colors shadow-sm">
                      <Plus className="w-3 h-3" />
                    </span>
                    <span>Add Record</span>
                  </div>
                </div>

                {/* Negotiation Column */}
                <div className="space-y-3 flex flex-col min-w-[270px] sm:min-w-[290px] md:min-w-0 flex-1 shrink-0 md:shrink snap-start">
                  {/* Column Header */}
                  <div className="flex items-center justify-between px-3.5 py-2 rounded-xl border border-blue-500/30 bg-blue-500/10 dark:bg-blue-500/15 backdrop-blur-sm shadow-sm transition-all">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 shadow-sm" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-blue-800 dark:text-blue-300">
                        Negotiation
                      </span>
                    </div>
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md shrink-0 bg-blue-600 text-white shadow-sm">
                      {cardsData.filter(c => c.status === "Negotiation").length}
                    </span>
                  </div>

                  {cardsData.filter(c => c.status === "Negotiation").map(card => (
                    <div 
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                      className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                        selectedCard === card.id 
                          ? 'bg-theme-bgAlt border-purple-500/80 ring-2 ring-purple-500/20 shadow-md scale-[1.02]' 
                          : 'bg-theme-bgTertiary border-theme-border hover:border-purple-500/40 hover:bg-theme-bgAlt/60 hover:shadow-sm'
                      }`}
                    >
                      {selectedCard === card.id && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600" />
                      )}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                          {card.domain}
                        </span>
                      </div>
                      <h4 className="text-[13px] font-black text-theme-text mb-1 truncate leading-tight">{card.name}</h4>
                      <p className="text-[11.5px] font-semibold text-theme-textMuted mb-2.5 truncate">{card.role}</p>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded-full ${getStageBadge(card.status)} shadow-sm`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        {card.status}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Completed Column */}
                <div className="space-y-3 flex flex-col min-w-[270px] sm:min-w-[290px] md:min-w-0 flex-1 shrink-0 md:shrink snap-start">
                  {/* Column Header */}
                  <div className="flex items-center justify-between px-3.5 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 dark:bg-emerald-500/15 backdrop-blur-sm shadow-sm transition-all">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 shadow-sm" />
                      <span className="text-[11px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                        Completed
                      </span>
                    </div>
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md shrink-0 bg-emerald-600 text-white shadow-sm">
                      {cardsData.filter(c => c.status === "Pipeline Closed").length}
                    </span>
                  </div>

                  {cardsData.filter(c => c.status === "Pipeline Closed").map(card => (
                    <div 
                      key={card.id}
                      onClick={() => setSelectedCard(card.id)}
                      className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden group ${
                        selectedCard === card.id 
                          ? 'bg-theme-bgAlt border-purple-500/80 ring-2 ring-purple-500/20 shadow-md scale-[1.02]' 
                          : 'bg-theme-bgTertiary border-theme-border hover:border-purple-500/40 hover:bg-theme-bgAlt/60 hover:shadow-sm'
                      }`}
                    >
                      {selectedCard === card.id && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600" />
                      )}
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                          {card.domain}
                        </span>
                      </div>
                      <h4 className="text-[13px] font-black text-theme-text mb-1 truncate leading-tight">{card.name}</h4>
                      <p className="text-[11.5px] font-semibold text-theme-textMuted mb-2.5 truncate">{card.role}</p>
                      <span className={`inline-flex items-center gap-1.5 text-[10px] px-2.5 py-0.5 rounded-full ${getStageBadge(card.status)} shadow-sm`}>
                        <CheckCircle2 className="w-3 h-3 text-white shrink-0" />
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
            <div className="glass-card rounded-3xl p-5 sm:p-6 shadow-xl h-full border border-theme-border flex flex-col justify-between">
              {(() => {
                const currentData = cardsData.find(c => c.id === selectedCard) || cardsData[0];
                return (
                  <div className="space-y-6 animate-fade-in flex-1 flex flex-col justify-between">
                    <div>
                      <div className="pb-4 border-b border-theme-border flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[10.5px] font-black text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                              Unified Profile
                            </span>
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-600/15 text-purple-700 dark:text-purple-300 border border-purple-500/30">
                              {currentData.domain}
                            </span>
                          </div>
                          <h3 className="text-xl font-black text-theme-text tracking-tight">{currentData.name}</h3>
                          <p className="text-xs font-semibold text-theme-textMuted">{currentData.role}</p>
                        </div>
                        <span className={`text-[11px] font-black px-3 py-1 rounded-full ${getStageBadge(currentData.status)} shadow-sm`}>
                          {currentData.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-5">
                        <div className="p-3 rounded-xl bg-theme-bgTertiary border border-theme-border">
                          <div className="flex items-center gap-1.5 mb-1 text-theme-textMuted">
                            <Mail className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                            <span className="text-[10.5px] uppercase font-bold tracking-wider">Work Email</span>
                          </div>
                          <span className="text-theme-text font-mono text-xs font-bold break-all">{currentData.email}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-theme-bgTertiary border border-theme-border">
                          <div className="flex items-center gap-1.5 mb-1 text-theme-textMuted">
                            <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className="text-[10.5px] uppercase font-bold tracking-wider">Mobile Number</span>
                          </div>
                          <span className="text-theme-text font-mono text-xs font-bold">{currentData.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-black text-theme-text uppercase tracking-wider flex items-center gap-2">
                          <Activity className="w-3.5 h-3.5 text-purple-600" />
                          Activity & Automation History
                        </span>
                        <span className="text-[10px] font-bold text-theme-textMuted font-mono">Real-time sync</span>
                      </div>
                      
                      <div className="space-y-3 relative pl-4 border-l-2 border-purple-500/30 ml-2">
                        {currentData.history.map((hist, idx) => (
                          <div key={idx} className="relative text-sm group">
                            <div className="absolute left-[-23px] top-[4px] w-3 h-3 rounded-full bg-purple-600 border-2 border-white dark:border-slate-900 shrink-0 shadow-sm" />
                            <div className="text-theme-text text-xs font-bold leading-snug">{hist.event}</div>
                            <div className="text-[10.5px] text-theme-textMuted font-medium mt-0.5 flex items-center gap-1">
                              <Clock className="w-3 h-3 text-theme-textLight" />
                              {hist.time}
                            </div>
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
            <div key={idx} className="premium-card p-6 space-y-3 hover:border-purple-500/40 transition-all duration-300 group">
              <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center relative shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                <span className="relative z-10">{item.icon}</span>
              </div>
              <h4 className="text-base font-black text-theme-text">{item.title}</h4>
              <p className="text-theme-textMuted text-sm font-semibold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


