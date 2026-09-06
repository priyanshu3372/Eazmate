import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, type Variants } from 'framer-motion';
import { ArrowRight, Play, Cpu, Zap, BarChart3, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([
    "System Initialized.",
    "Awaiting operational trigger..."
  ]);

  const cardRef = useRef<HTMLDivElement>(null);
  
  // Interactive 3D Perspective Tilt with Framer Motion springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const steps = [
    { 
      title: "Applications", 
      desc: "Data feeds from Slack, WhatsApp, HubSpot, and Epic EHR systems", 
      icon: "🔌",
      color: "from-blue-500 to-cyan-400",
      badgeClass: "bg-cyan-500 text-slate-950 font-black shadow-sm",
      activeBorder: "border-cyan-500/60",
      glowColor: "rgba(6, 182, 212, 0.25)",
      iconGradient: "bg-cyan-500 text-slate-950 shadow-cyan-500/30",
      inactiveIcon: "bg-cyan-950/60 border border-cyan-800/40 text-cyan-400"
    },
    { 
      title: "AI Brain Layer", 
      desc: "Contextual processing, routing, and intent recognition", 
      icon: "🧠",
      color: "from-purple-600 to-pink-500",
      badgeClass: "bg-purple-600 text-white font-black shadow-sm",
      activeBorder: "border-purple-500/60",
      glowColor: "rgba(168, 85, 247, 0.25)",
      iconGradient: "bg-purple-600 text-white shadow-purple-500/30",
      inactiveIcon: "bg-purple-950/60 border border-purple-800/40 text-purple-400"
    },
    { 
      title: "Automation Engine", 
      desc: "Executing multi-step API webhooks & scheduling", 
      icon: "⚡",
      color: "from-amber-500 to-orange-500",
      badgeClass: "bg-amber-500 text-slate-950 font-black shadow-sm",
      activeBorder: "border-amber-500/60",
      glowColor: "rgba(245, 158, 11, 0.25)",
      iconGradient: "bg-amber-500 text-slate-950 shadow-amber-500/30",
      inactiveIcon: "bg-amber-950/60 border border-amber-800/40 text-amber-400"
    },
    { 
      title: "Insights & Decisions", 
      desc: "Compiling ROI tracking and predictive analytics", 
      icon: "📊",
      color: "from-emerald-500 to-teal-400",
      badgeClass: "bg-emerald-500 text-slate-950 font-black shadow-sm",
      activeBorder: "border-emerald-500/60",
      glowColor: "rgba(16, 185, 129, 0.25)",
      iconGradient: "bg-emerald-500 text-slate-950 shadow-emerald-500/30",
      inactiveIcon: "bg-emerald-950/60 border border-emerald-800/40 text-emerald-400"
    },
    { 
      title: "Business Growth", 
      desc: "Accelerating conversion and organizational output", 
      icon: "📈",
      color: "from-indigo-500 to-violet-600",
      badgeClass: "bg-indigo-600 text-white font-black shadow-sm",
      activeBorder: "border-indigo-500/60",
      glowColor: "rgba(99, 102, 241, 0.25)",
      iconGradient: "bg-indigo-600 text-white shadow-indigo-500/30",
      inactiveIcon: "bg-indigo-950/60 border border-indigo-800/40 text-indigo-400"
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, steps.length]);

  useEffect(() => {
    const newLogs: Record<number, string[]> = {
      0: [
        "📥 Received incoming contact from HubSpot CRM.",
        "📥 WhatsApp hook triggered: incoming patient booking query."
      ],
      1: [
        "🧠 Eazmate AI routing intent detected: 'Specialist Consultation'.",
        "🧠 Context queried from Pinecone vector database in 12ms."
      ],
      2: [
        "⚡ Automated workflow triggered: Scheduling Calendly invite.",
        "⚡ Dispatched Slack alert to Clinical Care Channel #notifications."
      ],
      3: [
        "📊 Telemetry compiled: response latency reduced by 94%.",
        "📊 Operational throughput accelerated to 99.98%."
      ],
      4: [
        "🚀 Conversion logged: Lead qualified and slotted into calendar.",
        "🚀 Enterprise Index: +14.8% organizational bandwidth saved."
      ]
    };

    setLogs([
      ...newLogs[activeStep],
      `[Pipeline Node Active] ${steps[activeStep].title}...`
    ].slice(-5));
  }, [activeStep]);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative pt-12 pb-24 overflow-hidden bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Text content side */}
          <motion.div
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Top pill badge */}
            <motion.div variants={itemVariants} className="inline-flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider bg-purple-500/10 border border-purple-500/25 text-purple-600 dark:text-purple-300 shadow-sm backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-purple-500 to-pink-500"></span>
                </span>
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                The AI Brain Behind Your Business
              </span>
            </motion.div>

            {/* Main Headline with vibrant multi-color gradient */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-theme-text leading-[1.08]"
            >
              The <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">Intelligence</span> Layer <br className="hidden sm:inline" />
              Powering Modern <span className="bg-gradient-to-r from-cyan-500 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">Organizations</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-theme-textMuted text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Connect your tools, automate operations, manage relationships, orchestrate workflows, and unlock organizational intelligence from a single AI-powered platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <Link
                to="/get-quotation"
                className="relative group overflow-hidden bg-purple-600 hover:bg-purple-500 text-white font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <button
                onClick={() => {
                  const el = document.getElementById('contact-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-xl bg-slate-900 hover:bg-purple-600 dark:bg-slate-800 dark:hover:bg-purple-600 text-white font-black text-sm sm:text-base px-6 sm:px-8 py-3.5 sm:py-4 transition-all focus:outline-none hover:-translate-y-0.5 active:translate-y-0 shadow-md border border-slate-700/60 text-center"
              >
                Let's Talk
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('platform-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center justify-center gap-2 text-theme-textMuted hover:text-theme-text font-extrabold text-sm sm:text-base px-4 py-3 sm:py-4 transition-colors group"
              >
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-theme-border flex items-center justify-center text-xs group-hover:border-brand-primary group-hover:scale-105 transition-all">
                  <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-theme-textMuted group-hover:text-brand-primary ml-0.5 transition-colors" />
                </div>
                See It In Action
              </button>
            </motion.div>

            {/* Colorful Integration Ecosystem Strip with Solid Brand Badges */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center lg:justify-start text-xs font-bold"
            >
              <span className="text-[11px] font-black uppercase tracking-wider text-theme-textMuted mr-1">Ecosystem:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366] text-slate-950 font-black shadow-sm hover:scale-105 transition-transform select-none">
                <span className="w-2 h-2 rounded-full bg-slate-950" /> WhatsApp
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A59] text-white font-black shadow-sm hover:scale-105 transition-transform select-none">
                <span className="w-2 h-2 rounded-full bg-white" /> HubSpot
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#4A154B] text-white font-black border border-purple-400/40 shadow-sm hover:scale-105 transition-transform select-none">
                <span className="w-2 h-2 rounded-full bg-[#ECB22E]" /> Slack
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#635BFF] text-white font-black shadow-sm hover:scale-105 transition-transform select-none">
                <span className="w-2 h-2 rounded-full bg-white" /> Stripe
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0284C7] text-white font-black shadow-sm hover:scale-105 transition-transform select-none">
                <span className="w-2 h-2 rounded-full bg-white" /> Epic EHR
              </span>
            </motion.div>

            {/* Quick value features with colorful accents */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-theme-border flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm font-bold"
            >
              <span className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <CheckCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-emerald-500 shrink-0" /> No Credit Card Required
              </span>
              <span className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
                <CheckCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-cyan-500 shrink-0" /> HIPAA & SOC2 Compliant
              </span>
              <span className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <CheckCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-purple-500 shrink-0" /> 1000+ Native Integrations
              </span>
            </motion.div>
          </motion.div>

          {/* Interactive 3D visual side */}
          <div className="lg:col-span-5 relative w-full max-w-full sm:max-w-lg mx-auto lg:max-w-none perspective-1000">
            {/* Main 3D Card */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="spotlight-card rounded-3xl p-5 sm:p-6 relative shadow-2xl overflow-hidden backdrop-blur-xl border border-theme-border bg-theme-bgAlt/90"
            >
              {/* Window Header bar */}
              <div className="flex items-center justify-between pb-3.5 border-b border-theme-border mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-amber-500 shadow-sm" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-sm" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                  <span className="text-xs text-theme-text font-mono font-bold tracking-wider uppercase">
                    Eazmate Orchestrator v2.4
                  </span>
                </div>
                <button
                  onClick={() => setIsPaused(!isPaused)}
                  className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-md bg-theme-bgTertiary border border-theme-border text-theme-textMuted hover:text-theme-text transition-colors"
                >
                  {isPaused ? 'Resume' : 'Pause'}
                </button>
              </div>

              {/* Steps container */}
              <div className="space-y-2.5 relative">
                {steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`relative z-10 flex items-start gap-3.5 py-3 px-3.5 sm:px-4 rounded-xl cursor-pointer transition-all duration-300 border ${
                        isActive
                          ? `bg-theme-bgAlt shadow-lg scale-[1.01] -translate-y-0.5 ${step.activeBorder}`
                          : 'bg-theme-bgTertiary/40 border-theme-border/60 hover:border-theme-border hover:bg-theme-bgAlt/50 hover:-translate-y-0.5 shadow-sm'
                      }`}
                      style={
                        isActive
                          ? {
                              boxShadow: `0 12px 28px -10px ${step.glowColor}, 0 2px 10px -2px rgba(0, 0, 0, 0.05)`,
                            }
                          : {}
                      }
                    >
                      {/* Active Indicator Pulse Bar with matched color */}
                      {isActive && (
                        <motion.div
                          layoutId="activePill"
                          className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${step.color} rounded-l-xl`}
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}

                      {/* Colorful Step Icon */}
                      <div
                        className={`w-9.5 h-9.5 rounded-xl flex items-center justify-center text-lg shrink-0 transition-all ${
                          isActive
                            ? `${step.iconGradient} scale-105 shadow-md font-black ring-2 ring-white/20`
                            : `${step.inactiveIcon} hover:scale-105`
                        }`}
                      >
                        {idx === 0 && <span className="text-sm">🔌</span>}
                        {idx === 1 && <Cpu className="w-4 h-4" />}
                        {idx === 2 && <Zap className="w-4 h-4" />}
                        {idx === 3 && <BarChart3 className="w-4 h-4" />}
                        {idx === 4 && <TrendingUp className="w-4 h-4" />}
                      </div>

                      {/* Content */}
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm font-black ${isActive ? 'text-theme-text' : 'text-theme-textMuted'}`}>
                            {step.title}
                          </h3>
                          {isActive && (
                            <span className={`text-[10px] font-black uppercase tracking-widest py-0.5 px-2 rounded-md border ${step.badgeClass} animate-pulse`}>
                              Active
                            </span>
                          )}
                        </div>
                        <p className="text-theme-textMuted text-xs sm:text-sm font-medium leading-relaxed line-clamp-2">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Interactive Console Log Window with color highlights */}
              <div className="mt-4 p-3.5 rounded-xl bg-theme-bgTertiary/90 border border-theme-border font-mono text-xs leading-relaxed min-h-[96px] select-none shadow-inner relative overflow-hidden">
                <div className="text-theme-textMuted font-semibold pb-1.5 border-b border-theme-border mb-2 flex justify-between items-center text-[11px]">
                  <span className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse shadow-sm shadow-teal-400" />
                    LIVE RUNTIME TELEMETRY
                  </span>
                  <span className="text-emerald-500 font-bold font-mono">NODE {activeStep + 1}/5 ONLINE</span>
                </div>

                <div className="space-y-1">
                  <AnimatePresence mode="popLayout">
                    {logs.map((log, idx) => {
                      const isLast = idx === logs.length - 1;
                      let logColor = "text-theme-text";
                      if (log.startsWith("📥")) logColor = "text-cyan-600 dark:text-cyan-400 font-medium";
                      else if (log.startsWith("🧠")) logColor = "text-purple-600 dark:text-purple-400 font-medium";
                      else if (log.startsWith("⚡")) logColor = "text-amber-600 dark:text-amber-400 font-medium";
                      else if (log.startsWith("📊")) logColor = "text-emerald-600 dark:text-emerald-400 font-medium";
                      else if (log.startsWith("🚀")) logColor = "text-indigo-600 dark:text-indigo-400 font-medium";
                      else if (log.startsWith("[Pipeline")) logColor = "text-brand-primary dark:text-fuchsia-400 font-bold";

                      return (
                        <motion.div
                          key={`${activeStep}-${idx}`}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className={`break-words ${logColor} ${isLast ? 'font-bold' : 'opacity-85'}`}
                        >
                          {log}
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
                <div className="inline-block w-2 h-3.5 bg-brand-primary ml-1 align-middle animate-blink" />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};


