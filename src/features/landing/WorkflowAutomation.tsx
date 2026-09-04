import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToggleLeft, ToggleRight, Play, CheckCircle2, RefreshCw, Layers } from 'lucide-react';

export const WorkflowAutomation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [autoApprove, setAutoApprove] = useState<boolean>(true);

  const workflowSteps = [
    { id: 0, label: "Trigger", detail: "HubSpot: Contact Status updated to 'Signed'", type: "trigger", icon: "⚡" },
    { id: 1, label: "Condition Check", detail: "Is organization HIPAA-flagged?", type: "condition", icon: "🛡️" },
    { id: 2, label: "Action A (Secure)", detail: "Generate encrypted BAA & file with AWS KMS", type: "action", icon: "🔑" },
    { id: 3, label: "Action B (Notify)", detail: "WhatsApp: Dispatch onboarding link to director", type: "action", icon: "💬" },
    { id: 4, label: "Action C (Log)", detail: "Write verification log in SOC 2 Audit Ledger", type: "action", icon: "📑" }
  ];

  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      setCurrentStep(0);
      const runFlow = () => {
        timer = setTimeout(() => {
          setCurrentStep((prev) => {
            if (prev >= workflowSteps.length - 1) {
              setIsPlaying(false);
              return -1;
            }
            return prev + 1;
          });
        }, 1400);
      };
      runFlow();
    } else {
      setCurrentStep(-1);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, workflowSteps.length]);

  useEffect(() => {
    if (currentStep !== -1 && currentStep < workflowSteps.length - 1 && isPlaying) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1400);
      return () => clearTimeout(timer);
    } else if (currentStep === workflowSteps.length - 1) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
        setCurrentStep(-1);
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [currentStep, isPlaying, workflowSteps.length]);

  const triggerSimulation = () => {
    if (!isPlaying) {
      setIsPlaying(true);
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
            <Layers className="w-3.5 h-3.5 text-brand-primary" /> Automation Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-theme-text leading-tight">
            Turn <span className="text-gradient">Friction-Heavy</span> Operations <br />
            Into <span className="text-gradient">Autonomous</span> Systems
          </h2>
          <p className="text-theme-textMuted text-base font-semibold leading-relaxed">
            Drag-and-drop triggers, conditions, notifications, and cross-system webhooks. Automate approvals, scheduling, database reads, and alert schedules with zero code.
          </p>
        </motion.div>

        {/* Builder Panel & Description details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Capability description text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-theme-text">Advanced Multi-Step Workflows</h3>
              <p className="text-theme-textMuted text-sm sm:text-base font-medium leading-relaxed">
                Connect your business apps seamlessly. A webhook from your diagnostic tools can instantly create a billing item on Stripe, coordinate scheduling with Twilio, check data access policies, and notify administrators in Slack.
              </p>
            </div>

            {/* Toggle options on the left */}
            <div className="spotlight-card p-6 space-y-4 shadow-sm">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-theme-text font-black text-sm">Auto-Approval Protocol</span>
                <button
                  onClick={() => setAutoApprove(!autoApprove)}
                  className="text-brand-primary focus:outline-none transition-transform active:scale-95"
                >
                  {autoApprove ? (
                    <ToggleRight className="w-10 h-10 text-brand-primary" />
                  ) : (
                    <ToggleLeft className="w-10 h-10 text-theme-textLight" />
                  )}
                </button>
              </div>
              <p className="text-theme-textMuted text-xs sm:text-sm font-medium leading-relaxed">
                When enabled, workflows needing manager checks (like large refunds or PHI extractions) will run autonomously under strict compliance bounds.
              </p>
            </div>

            <button
              onClick={triggerSimulation}
              disabled={isPlaying}
              className={`w-full py-4 px-6 rounded-xl font-extrabold text-base transition-all flex items-center justify-center gap-2 shadow-lg ${
                isPlaying
                  ? 'bg-theme-bgTertiary text-theme-textLight cursor-not-allowed border border-theme-border'
                  : 'bg-purple-600 hover:bg-purple-500 text-white font-black hover:shadow-purple-600/30 transform hover:-translate-y-0.5 active:translate-y-0'
              }`}
            >
              <Play className="w-5 h-5 fill-current text-white" />
              {isPlaying ? "Executing Workflow Logic..." : "Simulate Automated Workflow"}
            </button>
          </motion.div>

          {/* Right: Interactive Node Graph Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="spotlight-card p-6 sm:p-7 relative shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-gradient opacity-40" />

              <div className="flex justify-between items-center pb-4 border-b border-theme-border mb-6 text-xs text-theme-textMuted font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                  Eazmate Flow Architect
                </span>
                <span className="text-xs text-theme-textMuted font-mono font-semibold">5 Blocks Integrated</span>
              </div>

              {/* Node Columns render */}
              <div className="space-y-3.5 relative">
                {workflowSteps.map((step, idx) => {
                  const isActive = currentStep === idx;
                  const isCompleted = currentStep > idx;

                  return (
                    <motion.div
                      key={step.id}
                      layout
                      className={`p-4 rounded-2xl border transition-all duration-300 relative flex items-center justify-between ${
                        isActive
                          ? 'bg-theme-bgAlt border-brand-primary ring-2 ring-brand-primary/20 shadow-lg translate-x-2'
                          : isCompleted
                          ? 'bg-emerald-950/15 dark:bg-emerald-950/30 border-emerald-500/40'
                          : 'bg-theme-bgAlt/60 border-theme-border/70 hover:border-theme-border'
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
                            isActive
                              ? 'bg-purple-600 text-white scale-105 shadow-md ring-2 ring-purple-500/30 font-black'
                              : isCompleted
                              ? 'bg-emerald-500 text-white shadow-sm'
                              : 'bg-theme-bg border border-theme-border text-theme-textMuted'
                          }`}
                        >
                          {isCompleted ? <CheckCircle2 className="w-5 h-5 text-white" /> : idx + 1}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-black ${isActive ? 'text-theme-text' : 'text-theme-textMuted'}`}>
                              {step.label}
                            </span>
                            <span className="text-[10px] font-bold text-theme-textMuted uppercase tracking-widest bg-theme-bg px-2 py-0.5 rounded border border-theme-border">
                              {step.type}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-medium text-theme-textMuted leading-normal mt-0.5 truncate">
                            {step.detail}
                          </p>
                        </div>
                      </div>

                      {/* Small activity indicators */}
                      <div className="shrink-0 ml-2">
                        {isActive && (
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-primary/15 border border-brand-primary/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
                            <span className="text-[11px] font-black text-brand-primary tracking-wider uppercase">Running</span>
                          </div>
                        )}

                        {isCompleted && (
                          <span className="text-[11px] font-black text-emerald-500 tracking-wider uppercase px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                            Executed
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Progress visual footer */}
              <AnimatePresence>
                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-3 bg-theme-bg border border-theme-border rounded-xl text-center text-xs text-theme-textMuted flex items-center justify-center gap-2 font-mono shadow-inner overflow-hidden"
                  >
                    <RefreshCw className="w-4 h-4 text-brand-primary animate-spin" />
                    <span className="font-semibold">AI compiler executing autonomous pipeline...</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

