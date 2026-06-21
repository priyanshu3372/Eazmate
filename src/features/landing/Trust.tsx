import React from 'react';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export const Trust: React.FC = () => {
  const stats = [
    { value: "120+", label: "Organizations Served" },
    { value: "99.9%", label: "SLA Uptime" },
    { value: "Millions", label: "Automated Actions" },
    { value: "Thousands", label: "Workflows Running" }
  ];

  const testimonials = [
    {
      quote: "Eazmate transformed our patient communication pipeline. The HIPAA compliance framework gave us complete confidence, and it offloaded thousands of operational hours for our staff.",
      author: "Dr. Alisha Goel",
      role: "Operations Director, Apex Medical Group",
      category: "Healthcare Vertical"
    },
    {
      quote: "We use Eazmate to route prospective dealer inquiries from our distribution network directly into WhatsApp support pipelines. Response rates improved by 300%.",
      author: "Mr. VP Singh",
      role: "Executive Director, SAIL",
      category: "Industrial Vertical"
    }
  ];

  return (
    <section className="relative py-24 bg-theme-bg border-t border-theme-border">
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none opacity-20" />
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-theme-border mb-20 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient tracking-tight">{stat.value}</div>
              <div className="text-sm text-theme-textMuted font-medium tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Narrative & Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Security Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <span className="gradient-badge font-extrabold uppercase tracking-wider inline-flex">
              Operational Safeguards
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-theme-text tracking-tight leading-tight">
              If Healthcare Leaders Trust Us With Data, <br />
              <span className="text-gradient">You Can Trust Us With Your Operations.</span>
            </h2>
            <p className="text-theme-textMuted text-sm sm:text-base font-semibold leading-relaxed">
              We started in the healthcare sector, solving scheduling bottlenecks under strict HIPAA and data privacy guidelines. We carry that exact data security architecture—SOC 2 compliance, encrypted data storage, and strict RBAC controls—into every industry vertical we automate.
            </p>

            <div className="flex gap-4 items-center pt-2">
              <div className="flex items-center gap-1.5 bg-theme-bgTertiary border border-theme-border px-3.5 py-1.5 rounded-full text-xs text-brand-teal font-medium shadow-sm">
                <ShieldCheck className="w-4 h-4 text-brand-teal shrink-0" /> HIPAA Shielded
              </div>
              <div className="flex items-center gap-1.5 bg-theme-bgTertiary border border-theme-border px-3.5 py-1.5 rounded-full text-xs text-brand-primary font-medium shadow-sm">
                <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" /> SOC 2 Type II
              </div>
            </div>
          </div>

          {/* Right: Testimonials Card Stack */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="premium-card p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm text-theme-textLight font-medium uppercase tracking-wider">
                    <span>{test.category}</span>
                    <span className="text-amber-500">★★★★★</span>
                  </div>
                  <p className="text-theme-textMuted text-sm font-semibold leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-theme-border mt-6">
                  <h4 className="text-sm font-black text-theme-text">{test.author}</h4>
                  <p className="text-sm font-medium text-theme-textLight mt-0.5">{test.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Logo ribbon */}
        <div className="mt-20 pt-10 border-t border-theme-border text-center space-y-4">
          <span className="text-xs text-theme-textLight font-semibold uppercase tracking-widest block">INTEGRATED ACROSS LEADING ENTERPRISES</span>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 select-none font-sans font-bold text-sm tracking-widest text-theme-textMuted bg-theme-bgTertiary/60 py-6 px-8 rounded-2xl border border-theme-border">
            <span>APEX MEDICAL</span>
            <span>ZENITH SAAS</span>
            <span>STERLING LOGISTICS</span>
            <span>SAIL</span>
            <span>GURUGRAM CLINICS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
