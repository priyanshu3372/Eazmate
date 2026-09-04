import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, CheckCircle, Award, Building2, Star } from 'lucide-react';

const AnimatedCounter: React.FC<{ target: number; prefix?: string; suffix?: string; decimals?: number }> = ({
  target,
  prefix = '',
  suffix = '',
  decimals = 0
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(ease * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

export const Trust: React.FC = () => {
  const testimonials = [
    {
      quote: "Eazmate transformed our patient communication pipeline. The HIPAA compliance framework gave us complete confidence, and it offloaded thousands of operational hours for our staff.",
      author: "Dr. Alisha Goel",
      role: "Operations Director, Apex Medical Group",
      category: "Healthcare Vertical",
      initials: "AG",
      avatarBg: "bg-teal-600 text-white font-black",
      accentBorder: "border-t-4 border-t-teal-500 hover:border-teal-500 hover:shadow-teal-500/20",
      categoryTag: "bg-teal-600 text-white font-black",
      rating: 5
    },
    {
      quote: "We use Eazmate to route prospective dealer inquiries from our distribution network directly into WhatsApp support pipelines. Response rates improved by 300%.",
      author: "Mr. VP Singh",
      role: "Executive Director, SAIL",
      category: "Industrial Vertical",
      initials: "VS",
      avatarBg: "bg-purple-600 text-white font-black",
      accentBorder: "border-t-4 border-t-purple-500 hover:border-purple-500 hover:shadow-purple-500/20",
      categoryTag: "bg-purple-600 text-white font-black",
      rating: 5
    }
  ];

  const enterprisePartners = [
    { name: "APEX MEDICAL", badge: "Healthcare", color: "text-emerald-500", badgeBg: "bg-emerald-600 text-white font-black" },
    { name: "ZENITH SAAS", badge: "Cloud Ops", color: "text-blue-500", badgeBg: "bg-blue-600 text-white font-black" },
    { name: "STERLING LOGISTICS", badge: "Supply Chain", color: "text-amber-500", badgeBg: "bg-amber-500 text-slate-950 font-black" },
    { name: "SAIL INDUSTRIAL", badge: "Enterprise", color: "text-purple-500", badgeBg: "bg-purple-600 text-white font-black" },
    { name: "GURUGRAM CLINICS", badge: "Provider", color: "text-teal-500", badgeBg: "bg-teal-600 text-white font-black" },
    { name: "HEALTHPRIME", badge: "EHR Sync", color: "text-cyan-500", badgeBg: "bg-cyan-600 text-white font-black" },
    { name: "FINSCALE GLOBAL", badge: "FinTech", color: "text-rose-500", badgeBg: "bg-rose-600 text-white font-black" },
    { name: "NEXUS TELECOM", badge: "Infrastructure", color: "text-indigo-500", badgeBg: "bg-indigo-600 text-white font-black" }
  ];

  return (
    <section className="relative py-24 bg-theme-bg border-t border-theme-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Core Stats Bar with Solid Category Pills & Multi-Color Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-theme-border mb-20 text-center">
          <div className="space-y-2 group">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-purple-600 text-white shadow-sm">
              Enterprise Tier
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-purple-pink tracking-tight drop-shadow-sm">
              <AnimatedCounter target={120} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-theme-textMuted font-bold tracking-wider uppercase">
              Organizations Served
            </div>
          </div>

          <div className="space-y-2 group">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
              Mission Critical
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-emerald-teal tracking-tight drop-shadow-sm">
              <AnimatedCounter target={99.9} decimals={1} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-theme-textMuted font-bold tracking-wider uppercase">
              SLA Uptime
            </div>
          </div>

          <div className="space-y-2 group">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-blue-600 text-white shadow-sm">
              Scale & Volume
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-cyan-blue tracking-tight drop-shadow-sm">
              <AnimatedCounter target={14.8} decimals={1} suffix="M+" />
            </div>
            <div className="text-xs sm:text-sm text-theme-textMuted font-bold tracking-wider uppercase">
              Automated Actions
            </div>
          </div>

          <div className="space-y-2 group">
            <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-sm">
              Autonomous
            </span>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gradient-amber-rose tracking-tight drop-shadow-sm">
              <AnimatedCounter target={5800} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-theme-textMuted font-bold tracking-wider uppercase">
              Workflows Running
            </div>
          </div>
        </div>

        {/* Narrative & Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left: Security Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="gradient-badge font-extrabold uppercase tracking-wider inline-flex">
              <Award className="w-3.5 h-3.5 text-brand-primary" /> Operational Safeguards
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-theme-text tracking-tight leading-tight">
              If Healthcare Leaders Trust Us With Data, <br />
              <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">You Can Trust Us With Your Operations.</span>
            </h2>
            <p className="text-theme-textMuted text-sm sm:text-base font-medium leading-relaxed">
              We started in the healthcare sector, solving scheduling bottlenecks under strict HIPAA and data privacy guidelines. We carry that exact data security architecture—SOC 2 compliance, encrypted data storage, and strict RBAC controls—into every industry vertical we automate.
            </p>

            <div className="flex flex-wrap gap-3 items-center pt-2">
              <div className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-md hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" /> HIPAA Shielded
              </div>
              <div className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-md hover:scale-105 transition-transform">
                <CheckCircle className="w-4 h-4 text-white shrink-0" /> SOC 2 Type II
              </div>
              <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-xs font-black shadow-md hover:scale-105 transition-transform">
                <Building2 className="w-4 h-4 text-white shrink-0" /> ISO 27001 Audited
              </div>
            </div>
          </motion.div>

          {/* Right: Testimonials Card Stack */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className={`spotlight-card p-6 sm:p-7 flex flex-col justify-between shadow-md group border-t-2 ${test.accentBorder}`}
              >
                <div className="space-y-4 relative z-10">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider">
                    <span className={`px-2.5 py-0.5 rounded-full border text-[10px] font-black ${test.categoryTag}`}>{test.category}</span>
                    <div className="flex items-center gap-0.5 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-theme-textMuted text-sm font-semibold leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-theme-border/70 mt-6 relative z-10 flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl ${test.avatarBg} text-white flex items-center justify-center font-black text-xs shadow-sm shrink-0`}>
                    {test.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-theme-text">{test.author}</h4>
                    <p className="text-xs font-semibold text-theme-textMuted mt-0.5">{test.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Infinite Marquee Logo Ribbon with Colorful Brand Chips */}
        <div className="mt-24 pt-10 border-t border-theme-border text-center space-y-6">
          <span className="text-xs text-theme-textMuted font-bold uppercase tracking-widest block">
            INTEGRATED ACROSS LEADING ENTERPRISES
          </span>

          <div
            className="relative w-full overflow-hidden py-4"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
          >
            <div className="animate-marquee flex gap-8 items-center">
              {[...enterprisePartners, ...enterprisePartners].map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-theme-bgTertiary/70 border border-theme-border text-theme-textMuted hover:text-theme-text hover:border-theme-border/80 hover:bg-theme-bgAlt transition-all duration-300 shadow-sm shrink-0 select-none group cursor-pointer"
                >
                  <Building2 className={`w-4 h-4 ${partner.color} transition-transform group-hover:scale-110`} />
                  <span className="font-sans font-black text-xs sm:text-sm tracking-wider group-hover:text-theme-text transition-colors">
                    {partner.name}
                  </span>
                  <span className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-md border font-bold ${partner.badgeBg}`}>
                    {partner.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

