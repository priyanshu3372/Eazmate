import React, { useState } from 'react';
import { TrendingUp, DollarSign, Clock, Zap, BarChart3 } from 'lucide-react';

export const AnalyticsIntelligence: React.FC = () => {
  const [timeframe, setTimeframe] = useState<'30' | '90' | '365'>('30');

  // Multi-state mock stats matching selected timeframe
  const statistics = {
    '30': {
      roi: "+18.4%",
      latency: "1.8s",
      actions: "48,290",
      hoursSaved: "140h",
      chartPoints: [
        { x: 0, y: 80 },
        { x: 20, y: 72 },
        { x: 40, y: 60 },
        { x: 60, y: 48 },
        { x: 80, y: 35 },
        { x: 100, y: 18 }
      ],
      insights: "AI Agents successfully offloaded 74% of support tickets. Direct savings of $4,800 compiled."
    },
    '90': {
      roi: "+24.8%",
      latency: "1.4s",
      actions: "142,890",
      hoursSaved: "420h",
      chartPoints: [
        { x: 0, y: 80 },
        { x: 20, y: 65 },
        { x: 40, y: 50 },
        { x: 60, y: 35 },
        { x: 80, y: 22 },
        { x: 100, y: 10 }
      ],
      insights: "Workflow bottlenecks in Customer Intake resolved. System routing efficiency peaked at 99.2%."
    },
    '365': {
      roi: "+32.2%",
      latency: "1.1s",
      actions: "612,400",
      hoursSaved: "1,840h",
      chartPoints: [
        { x: 0, y: 80 },
        { x: 20, y: 55 },
        { x: 40, y: 40 },
        { x: 60, y: 28 },
        { x: 80, y: 15 },
        { x: 100, y: 5 }
      ],
      insights: "Annual cost savings: $62,000. Customer retention metrics increased by 14.8% via AI automation."
    }
  };

  const currentData = statistics[timeframe];

  // Convert chartPoints to SVG Path string
  const getSvgPath = (points: { x: number, y: number }[]) => {
    return points.reduce((acc, p, idx) => {
      const command = idx === 0 ? 'M' : 'L';
      return `${acc} ${command} ${p.x} ${p.y}`;
    }, '');
  };

  // Convert chartPoints to SVG Area string (closed loop for gradient fill)
  const getSvgAreaPath = (points: { x: number, y: number }[]) => {
    const linePath = getSvgPath(points);
    return `${linePath} L 100 100 L 0 100 Z`;
  };

  return (
    <section className="relative py-24 bg-theme-bg border-t border-theme-border transition-colors duration-300">
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-brand-primary" /> Analytics & Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-theme-text leading-tight transition-colors duration-300">
            Verify <span className="text-gradient">Optimization</span> Performance <br />
            With Real-Time <span className="text-gradient">ROI Tracking</span>
          </h2>
          <p className="text-theme-textMuted text-base font-semibold leading-relaxed transition-colors duration-300">
            Instantly track metrics, trace trends, measure resource savings, and analyze AI performance parameters from a unified executive control deck.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Interactive Executive Control Visual */}
          <div className="lg:col-span-8">
            <div className="premium-card p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-gradient opacity-20" />
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pb-4 border-b border-theme-border mb-6 transition-colors duration-300">
                <div>
                  <h3 className="text-sm font-black text-theme-text mb-0.5 transition-colors duration-300">Executive Insights Dashboard</h3>
                  <span className="text-xs text-theme-textLight font-mono font-medium transition-colors duration-300">Workspace ID: EZ_88910</span>
                </div>
 
                {/* Timeframe Select Tab Grid */}
                <div className="flex gap-1.5 p-1 bg-theme-bg/60 rounded-xl border border-theme-border shrink-0 self-start sm:self-auto transition-colors duration-300">
                  {[
                    { id: '30', label: '30 Days' },
                    { id: '90', label: '90 Days' },
                    { id: '365', label: '12 Months' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setTimeframe(tab.id as any)}
                      className={`text-center px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        timeframe === tab.id 
                          ? 'bg-theme-bgTertiary text-theme-text shadow-sm border border-theme-border' 
                          : 'text-theme-textLight hover:text-theme-text'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Row: Metric Cards inside Visual */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {[
                  { value: currentData.roi, label: "ROI Metric", icon: <TrendingUp className="w-4 h-4 text-brand-teal" />, change: "+4.2% dev" },
                  { value: currentData.latency, label: "Response Rate", icon: <Clock className="w-4 h-4 text-brand-primary" />, change: "-0.4s avg" },
                  { value: currentData.actions, label: "Executed Actions", icon: <Zap className="w-4 h-4 text-blue-400" />, change: "99.9% success" },
                  { value: currentData.hoursSaved, label: "Hours Salvaged", icon: <DollarSign className="w-4 h-4 text-brand-teal" />, change: "intake focus" }
                ].map((m, idx) => (
                  <div key={idx} className="bg-theme-bg/60 border border-theme-border rounded-xl p-4 flex flex-col justify-between shadow-sm relative overflow-hidden group transition-colors duration-300">
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex items-center justify-between text-theme-textMuted mb-2 transition-colors duration-300">
                       <span className="text-xs uppercase font-medium tracking-wider">{m.label}</span>
                       <span className="shrink-0">{m.icon}</span>
                    </div>
                    <div className="space-y-1">
                       <div className="text-2xl font-black text-gradient">{m.value}</div>
                       <div className="text-xs text-brand-teal font-medium">{m.change}</div>
                    </div>
                  </div>
                ))}
              </div>
 
              {/* Chart Visual Row */}
              <div className="bg-theme-bg border border-theme-border rounded-2xl p-5 mb-6 relative transition-colors duration-300">
                <div className="flex justify-between items-center text-xs text-theme-textMuted font-medium uppercase tracking-wider mb-4 transition-colors duration-300">
                  <span>Latency Reduction Trend</span>
                  <span className="text-brand-teal font-mono font-medium">lower values are better</span>
                </div>
 
                {/* SVG Line Graph */}
                <div className="h-44 relative w-full">
                  <svg 
                    viewBox="0 0 100 100" 
                    preserveAspectRatio="none" 
                    className="w-full h-full stroke-[1.5]"
                  >
                    <defs>
                      <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="50%" stopColor="#ccaf69" />
                        <stop offset="100%" stopColor="#ad8e45" />
                      </linearGradient>
                      <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ccaf69" stopOpacity="0.15" />
                        <stop offset="100%" stopColor="#ad8e45" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Grid lines */}
                    <line x1="0" y1="25" x2="100" y2="25" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3" />
                    <line x1="0" y1="50" x2="100" y2="50" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3" />
                    <line x1="0" y1="75" x2="100" y2="75" stroke="var(--border-color)" strokeWidth="0.5" strokeDasharray="3" />
                    
                    {/* Area fill */}
                    <path 
                      d={getSvgAreaPath(currentData.chartPoints)} 
                      fill="url(#chartAreaGrad)" 
                      className="transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Data line */}
                    <path 
                      d={getSvgPath(currentData.chartPoints)} 
                      fill="none" 
                      stroke="url(#chartLineGrad)" 
                      className="transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Data nodes */}
                    {currentData.chartPoints.map((p, i) => (
                      <circle 
                        key={i} 
                        cx={p.x} 
                        cy={p.y} 
                        r="1.8" 
                        fill="#ccaf69" 
                        stroke="var(--bg-primary)" 
                        strokeWidth="0.5"
                        className="transition-all duration-700 ease-in-out"
                      />
                    ))}
                  </svg>
                  
                  {/* Axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-theme-textLight px-2 font-mono font-medium pt-1 select-none transition-colors duration-300">
                    <span>Week 1</span>
                    <span>Week 2</span>
                    <span>Week 3</span>
                    <span>Week 4</span>
                  </div>
                </div>
              </div>
 
              {/* Natural language AI Insight Block in Visual */}
              <div className="p-3.5 bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/30 rounded-xl flex gap-2.5 items-start transition-colors duration-300">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-450 uppercase tracking-widest mt-0.5 shrink-0 select-none transition-colors duration-300">
                  AI Alert
                </span>
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 leading-normal transition-colors duration-300">{currentData.insights}</p>
              </div>

            </div>
          </div>

          {/* Right Side: Simple bullet lists and capabilities descriptions */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h3 className="text-xl font-black text-theme-text font-sans transition-colors duration-300">Actionable Executive Reporting</h3>
              <p className="text-theme-textMuted text-sm font-semibold leading-relaxed transition-colors duration-300">
                Generate localized reports on agent response metrics, API run success ratings, custom funnel logic tracking, and workflow efficiency gains. Export data to CSV or connect directly with tools like BI/Tableau via REST APIs.
              </p>
            </div>
 
            <div className="space-y-4">
              {[
                { title: "Predictive Analytics", desc: "Recognize workflow bottlenecks and spikes before operational failures happen." },
                { title: "Cost & ROI Auditing", desc: "Automatically match execution costs against saved manpower hours in one dashboard." },
                { title: "Custom Trend Modeling", desc: "Correlate specific automation triggers with organization-wide output metrics." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-teal mt-2 shrink-0" />
                  <div>
                    <h4 className="text-sm font-black text-theme-text mb-0.5 transition-colors duration-300">{item.title}</h4>
                    <p className="text-theme-textMuted text-sm font-semibold leading-relaxed transition-colors duration-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
