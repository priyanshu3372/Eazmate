import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { Cpu, Layers, Network, Link as LinkIcon, ArrowRight, Sparkles } from 'lucide-react';

export const Overview: React.FC = () => {
  const pillars = [
    {
      icon: <Cpu className="w-5 h-5 text-white" />,
      iconBg: "bg-purple-600 shadow-md shadow-purple-600/30",
      title: "AI Operating System",
      badge: "Platform Core",
      badgeClass: "bg-purple-600 text-white font-black shadow-sm",
      topGlow: "bg-purple-600",
      desc: "Deploy autonomous, semantic-aware agents that process tickets, coordinate systems, query databases, and advise human teams.",
      link: "/platform",
      cta: "Explore Platform",
      hoverBorder: "hover:border-purple-500/70 hover:shadow-xl hover:shadow-purple-500/20",
      tags: ["GPT-4o Reasoning", "Vector Memory", "Sub-sec Latency"],
      dotColor: "bg-purple-500",
      tagClass: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/40 font-bold",
      ctaColor: "text-purple-500 group-hover:text-purple-400 font-black"
    },
    {
      icon: <Layers className="w-5 h-5 text-white" />,
      iconBg: "bg-emerald-600 shadow-md shadow-emerald-600/30",
      title: "CRM & Automation",
      badge: "Workflow Engine",
      badgeClass: "bg-emerald-600 text-white font-black shadow-sm",
      topGlow: "bg-emerald-600",
      desc: "Consolidate contacts, payment records, and communication histories. Automate multi-step pipelines with drag-and-drop webhooks.",
      link: "/solutions",
      cta: "See Solutions",
      hoverBorder: "hover:border-emerald-500/70 hover:shadow-xl hover:shadow-emerald-500/20",
      tags: ["Bi-directional Sync", "Visual Builder", "Smart Triggers"],
      dotColor: "bg-emerald-500",
      tagClass: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/40 font-bold",
      ctaColor: "text-emerald-500 group-hover:text-emerald-400 font-black"
    },
    {
      icon: <Network className="w-5 h-5 text-white" />,
      iconBg: "bg-blue-600 shadow-md shadow-blue-600/30",
      title: "Industry Verticals",
      badge: "Tailored Models",
      badgeClass: "bg-blue-600 text-white font-black shadow-sm",
      topGlow: "bg-blue-600",
      desc: "Engineered to meet specific sector workflows. HIPAA-compliant healthcare structures, real estate viewings, education portals, and more.",
      link: "/industries",
      cta: "View Verticals",
      hoverBorder: "hover:border-blue-500/70 hover:shadow-xl hover:shadow-blue-500/20",
      tags: ["HIPAA Shielded", "Sector Taxonomies", "Zero-Leak RBAC"],
      dotColor: "bg-blue-500",
      tagClass: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/40 font-bold",
      ctaColor: "text-blue-500 group-hover:text-blue-400 font-black"
    },
    {
      icon: <LinkIcon className="w-5 h-5 text-slate-950 stroke-[2.5]" />,
      iconBg: "bg-amber-500 shadow-md shadow-amber-500/30",
      title: "Ecosystem Integrations",
      badge: "1000+ API Stack",
      badgeClass: "bg-amber-500 text-slate-950 font-black shadow-sm",
      topGlow: "bg-amber-500",
      desc: "Coordinate HubSpot data, Stripe invoices, WhatsApp chats, and custom REST databases in real-time under a single control deck.",
      link: "/integrations",
      cta: "Check Integrations",
      hoverBorder: "hover:border-amber-500/70 hover:shadow-xl hover:shadow-amber-500/20",
      tags: ["WhatsApp Business", "HubSpot CRM", "Stripe & Epic EHR"],
      dotColor: "bg-amber-500",
      tagClass: "bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800/40 font-bold",
      ctaColor: "text-amber-500 group-hover:text-amber-400 font-black"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative py-24 bg-theme-bg border-t border-theme-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-4"
        >
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-primary" /> Key Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-theme-text leading-tight">
            An Intelligent Operating Layer <br />
            Built for <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Modern Enterprise Scaling</span>
          </h2>
          <p className="text-theme-textMuted text-base font-semibold leading-relaxed">
            Eazmate orchestrates your software stacks, automated agent pipelines, and database updates. Explore our core features to see how we cut operational friction.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`spotlight-card p-7 sm:p-8 flex flex-col justify-between group shadow-sm transition-all duration-300 relative overflow-hidden ${pillar.hoverBorder}`}
            >
              {/* Luminous Top Accent Line */}
              <div className={`absolute top-0 left-0 right-0 h-[2.5px] ${pillar.topGlow} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="space-y-6 relative z-10">
                {/* Badge & Icon */}
                <div className="flex justify-between items-center">
                  <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-1 duration-300 shadow-md`}>
                    {pillar.icon}
                  </div>
                  <span className={`text-[10px] font-black tracking-widest uppercase border px-2.5 py-1 rounded-md transition-colors ${pillar.badgeClass}`}>
                    {pillar.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2.5">
                  <h3 className="text-xl font-black text-theme-text transition-colors group-hover:text-theme-text">
                    {pillar.title}
                  </h3>
                  <p className="text-theme-textMuted text-sm font-medium leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Feature Tags / Pills - Uniform Structured Layout */}
                <div className="grid grid-cols-1 gap-1.5 pt-2">
                  {pillar.tags.map((tag, tIdx) => (
                    <div
                      key={tIdx}
                      className={`flex items-center gap-2 text-[11px] font-bold px-3 py-1.5 rounded-lg border shadow-2xs transition-transform hover:scale-[1.01] ${pillar.tagClass}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${pillar.dotColor} shrink-0`} />
                      <span className="truncate">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 border-t border-theme-border/70 mt-6 relative z-10">
                <Link
                  to={pillar.link}
                  className={`inline-flex items-center gap-1.5 text-sm font-black transition-colors ${pillar.ctaColor}`}
                >
                  {pillar.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Home page central CTA banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 premium-card p-8 sm:p-12 text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl border border-purple-500/20"
        >
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/10 border border-purple-500/25 text-purple-600 dark:text-purple-300 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-500" /> Rapid Integration
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-theme-text mb-2 tracking-tight">
              Ready to Streamline Your Operational Flow?
            </h3>
            <p className="text-theme-textMuted text-sm font-semibold max-w-xl mx-auto mb-8">
              Eazmate integrates with your current databases and CRM triggers in minutes. Get custom pricing or set up a validation sandbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/get-quotation"
                className="bg-purple-600 hover:bg-purple-500 text-white font-black text-sm px-8 py-3.5 rounded-xl transition-all shadow-md shadow-purple-600/30 inline-flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="rounded-xl bg-slate-900 hover:bg-purple-600 dark:bg-slate-800 dark:hover:bg-purple-600 text-white font-black text-sm px-7 py-3.5 transition-all shadow-sm hover:-translate-y-0.5 block text-center border border-slate-700/50"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

