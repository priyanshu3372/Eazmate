import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Layers, Network, Link as LinkIcon, ArrowRight, Sparkles } from 'lucide-react';

export const Overview: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu className="w-6 h-6 text-brand-primary" />,
      title: "AI Operating System",
      badge: "Platform Core",
      desc: "Deploy autonomous, semantic-aware agents that process tickets, coordinate systems, query databases, and advise human teams.",
      link: "/platform",
      cta: "Explore Platform",
      color: "group-hover:border-brand-primary/40",
      accent: "bg-brand-primary/10"
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-teal" />,
      title: "CRM & Automation",
      badge: "Workflow Engine",
      desc: "Consolidate contacts, payment records, and communication histories. Automate multi-step pipelines with drag-and-drop webhooks.",
      link: "/solutions",
      cta: "See Solutions",
      color: "group-hover:border-brand-teal/40",
      accent: "bg-brand-teal/10"
    },
    {
      icon: <Network className="w-6 h-6 text-blue-400" />,
      title: "Industry Verticals",
      badge: "Tailored Models",
      desc: "Engineered to meet specific sector workflows. HIPAA-compliant healthcare structures, real estate viewings, education portals, and more.",
      link: "/industries",
      cta: "View Verticals",
      color: "group-hover:border-blue-400/40",
      accent: "bg-blue-400/10"
    },
    {
      icon: <LinkIcon className="w-6 h-6 text-emerald-400" />,
      title: "Ecosystem Integrations",
      badge: "1000+ API Stack",
      desc: "Coordinate HubSpot data, Stripe invoices, WhatsApp chats, and custom REST databases in real-time under a single control deck.",
      link: "/integrations",
      cta: "Check Integrations",
      color: "group-hover:border-emerald-400/40",
      accent: "bg-emerald-400/10"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0B14] border-t border-zinc-800/80 overflow-hidden">
      <div className="absolute inset-0 bg-[#131322]/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/3 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" /> Key Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-100 leading-tight">
            An Intelligent Operating Layer <br />
            Built for <span className="text-gradient">Modern Enterprise Scaling</span>
          </h2>
          <p className="text-zinc-400 text-base font-semibold leading-relaxed">
            Eazmate orchestrates your software stacks, automated agent pipelines, and database updates. Explore our core features to see how we cut operational friction.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className={`premium-card p-8 flex flex-col justify-between group transition-all duration-350 hover:translate-y-[-4px] hover:shadow-lg border border-zinc-800 bg-[#131322] ${pillar.color}`}
            >
              <div className="space-y-6">
                {/* Badge & Icon */}
                <div className="flex justify-between items-center">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.accent} flex items-center justify-center transition-transform group-hover:scale-110 duration-350`}>
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-black tracking-widest text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md">
                    {pillar.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-black text-zinc-100 transition-colors group-hover:text-brand-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-semibold leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-8 border-t border-zinc-800 mt-8">
                <Link
                  to={pillar.link}
                  className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#128C7E] group-hover:text-brand-primary transition-colors"
                >
                  {pillar.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Home page central CTA banner */}
        <div className="mt-20 premium-card p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden bg-gradient-to-r from-[#131322] to-[#1a1a30] border border-zinc-800">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[40px] pointer-events-none" />
          <h3 className="text-xl sm:text-2xl font-black text-zinc-100 mb-2">
            Ready to Streamline Your Operational Flow?
          </h3>
          <p className="text-zinc-400 text-sm font-semibold max-w-xl mx-auto mb-6">
            Eazmate integrates with your current databases and CRM triggers in minutes. Get custom pricing or set up a validation sandbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/get-quotation"
              className="bg-brand-gradient hover:brightness-110 text-white text-sm font-extrabold px-6 py-3 rounded-xl transition-all shadow-md inline-flex items-center gap-1"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-200 font-extrabold text-sm px-6 py-3 rounded-xl transition-all shadow-sm"
            >
              Book Developer Demo
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
