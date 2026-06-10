import React, { useState } from 'react';
import { Shield, Lock, FileSpreadsheet, Key, Users, RefreshCw, FileText, CheckCircle, ArrowRight, Server, Eye, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SecurityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'compliance' | 'infrastructure' | 'governance'>('compliance');

  const complianceFeatures = [
    {
      icon: <Shield className="w-6 h-6 text-brand-primary" />,
      title: "HIPAA Compliant",
      desc: "Healthcare operations require the highest standards of trust. Eazmate fully complies with HIPAA requirements, safeguarding Protected Health Information (PHI) under strict guidelines."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-brand-teal" />,
      title: "SOC 2 Type II Ready",
      desc: "Designed to meet SOC 2 security principles. Our platform guarantees high availability, strict access controls, and regular independent third-party audits."
    },
    {
      icon: <FileText className="w-6 h-6 text-blue-400" />,
      title: "Business Associate Agreements (BAA)",
      desc: "We sign BAAs with eligible healthcare organizations and enterprise partners, contractually cementing our responsibility to protect confidential records."
    },
    {
      icon: <Lock className="w-6 h-6 text-brand-primary" />,
      title: "GDPR & CCPA Aligned",
      desc: "Ensure comprehensive data privacy controls for global organizations. We support rights to erasure, portability, and access."
    }
  ];

  const infrastructureFeatures = [
    {
      icon: <Lock className="w-6 h-6 text-brand-primary" />,
      title: "End-to-End Data Encryption",
      desc: "Data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. Encryption keys are securely managed through dedicated hardware security modules (HSM)."
    },
    {
      icon: <Server className="w-6 h-6 text-brand-teal" />,
      title: "Secure Multi-Region Hosting",
      desc: "Hosted on enterprise-grade cloud providers (AWS and Google Cloud Platform). We support physical data residency requirements with designated server locations in the US, EU, and APAC."
    },
    {
      icon: <Key className="w-6 h-6 text-blue-400" />,
      title: "SSO & MFA Integrations",
      desc: "Integrate natively with Okta, Microsoft Entra ID, Google Workspace, and SAML-based identity providers. Force Multi-Factor Authentication (MFA) across your entire workspace."
    },
    {
      icon: <Users className="w-6 h-6 text-brand-teal" />,
      title: "Role-Based Access Control (RBAC)",
      desc: "Define granular user privileges for administrators, managers, agents, and auditors. Ensure workers only access the resources they require to fulfill their tasks."
    }
  ];

  const governanceFeatures = [
    {
      icon: <Eye className="w-6 h-6 text-blue-400" />,
      title: "Comprehensive Audit Logging",
      desc: "Every API request, agent prompt execution, workflow change, and administrative action is logged in an immutable audit ledger, easily exported to your SIEM system."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-brand-teal" />,
      title: "Disaster Recovery & Redundancy",
      desc: "Continuous backup procedures and cross-region replication ensure an RTO (Recovery Time Objective) under 15 minutes and RPO (Recovery Point Objective) under 5 minutes."
    },
    {
      icon: <Zap className="w-6 h-6 text-brand-primary" />,
      title: "Continuous Threat Monitoring",
      desc: "24/7 Security Operations Center (SOC) monitoring, automated threat detection, intrusion detection systems, and quarterly external penetration tests."
    },
    {
      icon: <FileSpreadsheet className="w-6 h-6 text-brand-teal" />,
      title: "Incident Response Playbooks",
      desc: "Structured, automated containment protocols designed to neutralize threats immediately in the event of an anomaly, with instant notification channels."
    }
  ];

  return (
    <div className="bg-white text-zinc-600 min-h-screen relative overflow-hidden">
      {/* Aurora Background Layer */}
      <div className="aurora-bg">
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 text-center relative z-10">
        <div className="gradient-badge mb-6">
          <Shield className="w-4 h-4 text-brand-primary animate-pulse" />
          <span className="text-gradient font-extrabold">Enterprise Trust Center</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-tight max-w-4xl mx-auto text-[#1A1A2E]">
          Security and Compliance <br />
          <span className="text-gradient">Engineered for Enterprise Trust</span>
        </h1>
        <p className="text-zinc-500 text-lg font-semibold max-w-3xl mx-auto leading-relaxed">
          Eazmate sits above your workflows, orchestrating operations securely. If the world's leading organizations trust us with sensitive patient information, you can trust us with your enterprise data.
        </p>
        
        {/* Core security stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16">
          {[
            { value: "AES-256", label: "Data Encryption" },
            { value: "99.99%", label: "Platform SLA" },
            { value: "HIPAA", label: "Fully Compliant" },
            { value: "SOC 2", label: "Type II Verified" }
          ].map((stat, idx) => (
            <div key={idx} className="premium-card p-6 text-center relative overflow-hidden group shadow-sm">
              <div className="absolute inset-0 bg-brand-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="text-2xl sm:text-3xl font-black mb-1 tracking-tight">
                <span className="text-gradient">{stat.value}</span>
              </div>
              <div className="text-xs text-zinc-500 font-medium tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="flex justify-center max-w-md mx-auto mb-16 p-1 bg-zinc-50 border border-zinc-200/80 rounded-2xl relative z-10">
          {[
            { id: 'compliance', label: 'Compliance' },
            { id: 'infrastructure', label: 'Infrastructure' },
            { id: 'governance', label: 'Governance' }
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 text-center py-2.5 rounded-xl text-sm font-black transition-all duration-300 relative ${
                  isActive 
                    ? 'text-[#1A1A2E] shadow-sm bg-white border border-transparent' 
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
                style={isActive ? {
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(#fff, #fff), var(--brand-gradient)',
                  backgroundClip: 'padding-box, border-box',
                  backgroundOrigin: 'border-box'
                } : {}}
              >
                {isActive ? <span className="text-gradient">{tab.label}</span> : tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab contents */}
        <div className="max-w-6xl mx-auto min-h-[400px]">
          {activeTab === 'compliance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {complianceFeatures.map((item, idx) => (
                <div key={idx} className="premium-card p-8 flex gap-6 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1A1A2E] mb-2">{item.title}</h3>
                    <p className="text-zinc-500 text-sm font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'infrastructure' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {infrastructureFeatures.map((item, idx) => (
                <div key={idx} className="premium-card p-8 flex gap-6 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1A1A2E] mb-2">{item.title}</h3>
                    <p className="text-zinc-500 text-sm font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'governance' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
              {governanceFeatures.map((item, idx) => (
                <div key={idx} className="premium-card p-8 flex gap-6 transition-all duration-300">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200/80 flex items-center justify-center shrink-0 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#1A1A2E] mb-2">{item.title}</h3>
                    <p className="text-zinc-500 text-sm font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* CTA section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="premium-card p-8 sm:p-16 text-center max-w-4xl mx-auto relative overflow-hidden shadow-lg">
          <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-brand-primary/5 rounded-full blur-[60px]" />
          
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-[#1A1A2E]">Request Our Security <span className="text-gradient">Documentation</span></h2>
          <p className="text-zinc-500 text-base font-semibold max-w-2xl mx-auto mb-8 leading-relaxed">
            Need a detailed copy of our SOC 2 Type II report, penetration testing summaries, HIPAA BAA contract, or architectural security guidelines? Connect with our compliance team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/get-quotation"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Contact Compliance <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="mailto:security@eazmate.com"
              className="w-full sm:w-auto bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 font-extrabold px-8 py-4 rounded-xl transition-all shadow-sm"
            >
              Email Security Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
