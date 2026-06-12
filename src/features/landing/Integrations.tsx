import React, { useState } from 'react';
import { Network, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Integrations: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const integrationList = [
    { name: "Slack", category: "Collab", icon: "💬" },
    { name: "Stripe", category: "Payments", icon: "💳" },
    { name: "HubSpot", category: "CRM", icon: "🎯" },
    { name: "Salesforce", category: "CRM", icon: "☁️" },
    { name: "Epic Systems", category: "Healthcare", icon: "🏥" },
    { name: "Cerner", category: "Healthcare", icon: "🩺" },
    { name: "Google Workspace", category: "Office", icon: "📁" },
    { name: "Microsoft 365", category: "Office", icon: "💻" },
    { name: "Twilio", category: "Comms", icon: "📞" },
    { name: "WhatsApp Business", category: "Comms", icon: "📱" },
    { name: "Calendly", category: "Booking", icon: "📅" },
    { name: "Shopify", category: "Commerce", icon: "🛒" },
    { name: "QuickBooks", category: "Finance", icon: "📉" },
    { name: "Zapier", category: "Flow", icon: "🔌" },
    { name: "Make.com", category: "Flow", icon: "⚡" },
    { name: "Custom REST APIs", category: "Developer", icon: "🔧" }
  ];

  const nodePositions = [
    { name: "Slack", x: 50, y: 15 },
    { name: "Stripe", x: 80, y: 30 },
    { name: "HubSpot", x: 85, y: 65 },
    { name: "Epic Systems", x: 65, y: 85 },
    { name: "Google Workspace", x: 35, y: 85 },
    { name: "Calendly", x: 15, y: 65 },
    { name: "WhatsApp Business", x: 20, y: 30 },
    { name: "Custom REST APIs", x: 50, y: 50 } // Center node
  ];

  return (
    <section id="integrations-section" className="relative py-24 bg-[#0B0B14] border-t border-zinc-900">
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-brand-teal/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Description & Listing */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="gradient-badge font-extrabold uppercase tracking-wider">
                <Network className="w-3.5 h-3.5 text-brand-primary" /> 1000+ Integrations Supported
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-100 leading-tight">
                Connect Your <span className="text-gradient">Whole Stack</span> <br />
                Within <span className="text-gradient">Minutes</span>
              </h2>
              <p className="text-zinc-400 text-base font-semibold leading-relaxed">
                Eazmate acts as the intelligent orchestration layer above your current platforms. Sync data databases, trigger Slack signals from Stripe transactions, read HIPAA-shielded clinical databases, and push updates in real-time.
              </p>
            </div>
 
            {/* Grid of integration buttons with light glowing hover */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {integrationList.slice(0, 12).map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredNode(item.name)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`p-3 bg-zinc-900/60 border border-zinc-850 rounded-xl text-center transition-all cursor-pointer relative overflow-hidden group ${
                    hoveredNode === item.name ? 'border-brand-primary bg-[#18182E]/50 shadow-md translate-y-[-2px]' : 'hover:bg-[#131322] hover:border-zinc-800'
                  }`}
                >
                  <div className="text-lg mb-1">{item.icon}</div>
                  <div className="text-xs font-black text-zinc-200 truncate">{item.name}</div>
                  <div className="text-xs text-zinc-450 font-medium mt-0.5">{item.category}</div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-400">Includes native webhooks and webhook routing templates.</span>
              <Link
                to="/get-quotation"
                className="text-brand-primary hover:underline text-sm font-extrabold flex items-center gap-1 group"
              >
                Request Custom API Layout <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: High Fidelity Connected Graph SVG Node Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="w-full max-w-[420px] aspect-square rounded-full border border-zinc-800/40 p-6 relative flex items-center justify-center bg-zinc-950/20">
              
              {/* Outer boundary circle paths */}
              <div className="absolute inset-4 border border-zinc-800/30 rounded-full" />
              <div className="absolute inset-16 border border-zinc-800/20 rounded-full" />

              {/* Connecting lines SVG canvas */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="streamLineGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#8A00FF" />
                    <stop offset="50%" stopColor="#3F7DFF" />
                    <stop offset="100%" stopColor="#24D8C6" />
                  </linearGradient>
                </defs>
                {nodePositions.slice(0, -1).map((node, idx) => {
                  const isHighlighted = hoveredNode === node.name;
                  return (
                    <g key={idx}>
                      {/* Connection Line to center */}
                      <line 
                        x1="50" 
                        y1="50" 
                        x2={node.x} 
                        y2={node.y} 
                        stroke={isHighlighted ? "url(#streamLineGrad)" : "#27272A"} 
                        strokeWidth={isHighlighted ? "1.2" : "0.35"} 
                        strokeDasharray={isHighlighted ? "none" : "2"}
                        className="transition-all duration-350"
                      />
                      
                      {/* Glowing particle pulse moving along highlighted connection */}
                      {isHighlighted && (
                        <circle cx="50" cy="50" r="1.2" fill="#24D8C6">
                          <animateMotion 
                            path={`M 50 50 L ${node.x} ${node.y}`} 
                            dur="1.2s" 
                            repeatCount="indefinite" 
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>

              {/* Central Active Node */}
              <div className="absolute w-20 h-20 rounded-2xl bg-[#131322] border border-zinc-850 flex items-center justify-center shadow-md group z-20 overflow-hidden">
                <div className="absolute inset-0 bg-brand-gradient opacity-10 rounded-2xl animate-pulse-glow" />
                <img src="/logo.png" alt="Eazmate Logo" className="w-12 h-12 object-contain animate-float" />
                <span className="absolute bottom-[-16px] text-[10px] tracking-widest text-zinc-400 uppercase font-bold text-center block w-full whitespace-nowrap">
                  Eazmate Core
                </span>
              </div>
 
              {/* Surrounding outer integration node bubbles */}
              {nodePositions.slice(0, -1).map((node, idx) => {
                const logoMap: Record<string, string> = {
                  "Slack": "💬",
                  "Stripe": "💳",
                  "HubSpot": "🎯",
                  "Epic Systems": "🏥",
                  "Google Workspace": "📁",
                  "Calendly": "📅",
                  "WhatsApp Business": "📱"
                };
 
                const isHighlighted = hoveredNode === node.name;
 
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredNode(node.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                    className={`absolute w-11 h-11 rounded-xl bg-zinc-900 border flex items-center justify-center text-sm cursor-pointer shadow-md transition-all duration-300 z-10 ${
                      isHighlighted 
                        ? 'border-brand-primary scale-115 text-lg shadow-premium' 
                        : 'border-zinc-800 text-zinc-400'
                    }`}
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    {logoMap[node.name]}
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
