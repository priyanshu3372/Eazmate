import React, { useState, useEffect } from 'react';
import { ToggleLeft, ToggleRight, Play, CheckCircle2, RefreshCw, Layers } from 'lucide-react';

export const WorkflowAutomation: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [autoApprove, setAutoApprove] = useState<boolean>(true);

  const workflowSteps = [
    { id: 0, label: "Trigger", detail: "HubSpot: Contact Status updated to 'Signed'", type: "trigger" },
    { id: 1, label: "Condition Check", detail: "Is organization HIPAA-flagged?", type: "condition" },
    { id: 2, label: "Action A (Secure)", detail: "Generate encrypted BAA & file with AWS KMS", type: "action" },
    { id: 3, label: "Action B (Notify)", detail: "WhatsApp: Dispatch onboarding link to director", type: "action" },
    { id: 4, label: "Action C (Log)", detail: "Write verification log in SOC 2 Audit Ledger", type: "action" }
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
        }, 1500);
      };
      runFlow();
    } else {
      setCurrentStep(-1);
    }
    return () => clearTimeout(timer);
  }, [isPlaying]);

  useEffect(() => {
    if (currentStep !== -1 && currentStep < workflowSteps.length - 1 && isPlaying) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(timer);
    } else if (currentStep === workflowSteps.length - 1) {
      const timer = setTimeout(() => {
        setIsPlaying(false);
        setCurrentStep(-1);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const triggerSimulation = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative py-24 bg-white border-t border-zinc-100">
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-brand-primary" /> Automation Engine
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#1A1A2E] leading-tight">
            Turn <span className="text-gradient">Friction-Heavy</span> Operations <br />
            Into <span className="text-gradient">Autonomous</span> Systems
          </h2>
          <p className="text-zinc-500 text-base font-semibold leading-relaxed">
            Drag-and-drop triggers, conditions, notifications, and cross-system webhooks. Automate approvals, scheduling, database reads, and alert schedules with zero code.
          </p>
        </div>

        {/* Builder Panel & Description details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Capability description text */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-[#1A1A2E]">Advanced Multi-Step Workflows</h3>
              <p className="text-zinc-500 text-sm font-semibold leading-relaxed">
                Connect your business apps seamlessly. A webhook from your diagnostic tools can instantly create a billing item on Stripe, coordinate scheduling with Twilio, check data access policies, and notify administrators in Slack.
              </p>
            </div>
 
            {/* Toggle options on the left */}
            <div className="premium-card p-5 space-y-4">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="text-[#1A1A2E]">Auto-Approval Protocol</span>
                <button 
                  onClick={() => setAutoApprove(!autoApprove)}
                  className="text-brand-primary focus:outline-none"
                >
                  {autoApprove ? <ToggleRight className="w-9 h-9" /> : <ToggleLeft className="w-9 h-9 text-zinc-400" />}
                </button>
              </div>
              <p className="text-zinc-500 text-sm font-semibold leading-relaxed">
                When enabled, workflows needing manager checks (like large refunds or PHI extractions) will run autonomously under strict compliance bounds.
              </p>
            </div>
            
            <button
              onClick={triggerSimulation}
              disabled={isPlaying}
              className={`w-full py-4 px-6 rounded-xl font-extrabold text-base transition-all flex items-center justify-center gap-2 shadow-md ${
                isPlaying 
                  ? 'bg-zinc-100 text-zinc-400 cursor-not-allowed border border-zinc-200' 
                  : 'bg-[#25D366] hover:bg-[#128C7E] text-white'
              }`}
            >
              <Play className="w-5 h-5 fill-current text-white" />
              {isPlaying ? "Executing Workflow Logic..." : "Simulate Automated Workflow"}
            </button>
          </div>

          {/* Right: Interactive Node Graph Visual */}
          <div className="lg:col-span-7">
            <div className="premium-card p-6 relative">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-brand-gradient opacity-20" />
              
              <div className="flex justify-between items-center pb-4 border-b border-zinc-200 mb-6 text-xs text-[#1A1A2E] font-medium uppercase tracking-wider">
                <span>Eazmate Flow Architect</span>
                <span className="text-xs text-zinc-400 font-mono font-medium">5 Blocks Integrated</span>
              </div>
 
              {/* Node Columns render */}
              <div className="space-y-4">
                {workflowSteps.map((step, idx) => {
                  const isActive = currentStep === idx;
                  const isCompleted = currentStep > idx;

                  return (
                    <div
                      key={step.id}
                      className={`p-4 rounded-2xl border transition-all duration-300 relative flex items-center justify-between ${
                        isActive 
                          ? 'bg-[#F7FDF9] border-brand-primary ring-1 ring-brand-primary/10 translate-x-2' 
                          : isCompleted 
                            ? 'bg-[#F7FDF9]/60 border-[#25D366]/30' 
                            : 'bg-white border-zinc-200'
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 ${
                          isActive 
                            ? 'bg-brand-gradient text-white animate-pulse' 
                            : isCompleted 
                              ? 'bg-[#DCF8C6] text-[#128C7E] border border-[#25D366]/20' 
                              : 'bg-white border border-zinc-200 text-zinc-400'
                        }`}>
                          {isCompleted ? <CheckCircle2 className="w-4.5 h-4.5" /> : idx + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`text-sm font-black ${isActive ? 'text-[#1A1A2E]' : 'text-zinc-600'}`}>
                              {step.label}
                            </span>
                            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest bg-zinc-50 px-1.5 py-0.5 rounded border border-zinc-200">
                              {step.type}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-zinc-500 leading-normal mt-0.5">{step.detail}</p>
                        </div>
                      </div>

                      {/* Small activity indicators */}
                      {isActive && (
                        <div className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-ping" />
                          <span className="text-xs font-medium text-brand-primary tracking-widest uppercase">Running</span>
                        </div>
                      )}
                      
                      {isCompleted && (
                        <span className="text-xs font-medium text-[#128C7E] tracking-widest uppercase">Success</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Progress visual footer */}
              {isPlaying && (
                <div className="mt-6 p-3 bg-[#F7FDF9] border border-zinc-200 rounded-xl text-center text-xs text-zinc-600 flex items-center justify-center gap-2 animate-fade-in font-mono">
                  <RefreshCw className="w-4.5 h-4.5 text-[#25D366] animate-spin" />
                  <span>AI compiler validating block integrity...</span>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
