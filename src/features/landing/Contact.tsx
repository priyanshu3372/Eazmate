import React from 'react';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle } from 'lucide-react';
import { CONTACT_INFO, OFFICE_ADDRESS } from '../../config/constants';

export const Contact: React.FC = () => {
  return (
    <section id="contact-section" className="py-24 bg-[#0D0D19] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="gradient-badge font-extrabold uppercase tracking-wider block mb-2 w-max mx-auto">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-100 tracking-tight leading-tight">
            Speak to an AI <span className="text-gradient">Operations</span> Specialist
          </h2>
          <p className="text-zinc-450 text-base font-semibold leading-relaxed max-w-2xl mx-auto">
            Have questions about how Eazmate connects with your current CRM, database cluster, or communication hooks? Call us, email us, or send a quick message.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contact & Visuals */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-zinc-100 tracking-tight">Direct Channels</h3>
              <p className="text-zinc-450 text-sm font-semibold leading-relaxed">
                Our solutions engineering team coordinates deployment drafts within 24 hours of enquiry.
              </p>
            </div>

            {/* Visual Action Grid */}
            <div className="space-y-4">
              {/* WhatsApp Card */}
              <a
                href={CONTACT_INFO.whatsapp.getLink("Hello Eazmate, I'd like to request a demo of the AI Operating System.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-[#131322] hover:bg-[#1A1A2E] border border-zinc-800 p-5 rounded-2xl transition-all shadow-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center text-emerald-450 shrink-0 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6 fill-current text-emerald-450" />
                </div>
                <div>
                  <span className="block text-xs font-medium text-emerald-450 uppercase tracking-wider">Fast Response</span>
                  <span className="block font-sans font-black text-base text-zinc-100">Chat on WhatsApp</span>
                  <span className="block text-xs font-medium text-zinc-400 mt-0.5">{CONTACT_INFO.whatsapp.number}</span>
                </div>
              </a>

              {/* Phone Card */}
              <div className="flex items-center gap-4 bg-[#131322] border border-zinc-800 p-5 rounded-2xl transition-all shadow-sm hover:border-brand-primary/30 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-primary shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                  <Phone className="w-6 h-6 text-brand-primary relative z-10" />
                </div>
                <div className="flex-grow">
                  <span className="block text-xs font-medium text-zinc-500 uppercase tracking-wider">Solutions Line</span>
                  <span className="block font-sans font-black text-base text-zinc-150">Call Our Team</span>
                  <div className="flex flex-col gap-1 text-xs font-semibold text-zinc-400 mt-1.5">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a key={phone.value} href={phone.telLink} className="hover:text-brand-primary hover:underline transition-colors">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-center gap-4 bg-[#131322] border border-zinc-800 p-5 rounded-2xl transition-all shadow-sm hover:border-brand-primary/30 hover:shadow-md">
                <div className="w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-light shrink-0 relative overflow-hidden group-hover:scale-105 transition-transform">
                  <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                  <Mail className="w-6 h-6 text-brand-light relative z-10" />
                </div>
                <div className="flex-grow">
                  <span className="block text-xs font-medium text-zinc-500 uppercase tracking-wider">Enquiries</span>
                  <span className="block font-sans font-black text-base text-zinc-150">Email Relations</span>
                  <div className="flex flex-col gap-1 text-xs font-semibold text-zinc-400 mt-1.5">
                    {CONTACT_INFO.emails.map((email) => (
                      <a key={email.display} href={email.mailtoLink} className="hover:text-brand-primary hover:underline transition-colors">
                        {email.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Office details */}
            <div className="flex items-start gap-2.5 text-zinc-400 text-sm font-semibold pt-4">
              <MapPin className="w-4 h-4 text-zinc-550 shrink-0 mt-0.5" />
              <span>
                <b>Headquarters:</b>{' '}
                <a
                  href={OFFICE_ADDRESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100 hover:underline transition-colors"
                >
                  {OFFICE_ADDRESS.full}
                </a>
                {'. '}Hours: {OFFICE_ADDRESS.visitorHours}.
              </span>
            </div>
          </div>

          {/* Right Column: Implementation Support */}
          <div className="lg:col-span-7 premium-card p-8 sm:p-12 flex flex-col justify-center space-y-6 border border-zinc-800 bg-[#131322]">
            <h3 className="text-2xl font-black text-zinc-100 tracking-tight">
              Onboarding & Enterprise Integration
            </h3>
            <p className="text-zinc-405 text-sm font-semibold leading-relaxed">
              We make transition simple. Unlike standard SaaS platforms that leave you to configure pipelines alone, our solutions team coordinates layout design for you.
            </p>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-primary mt-1 shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                  <CheckCircle className="w-3.5 h-3.5 text-brand-primary relative z-10" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-200 text-sm">Custom Architecture Mapping</h4>
                  <p className="text-sm font-semibold text-zinc-450 mt-0.5">We analyze your internal CRM tables, database columns, security guidelines, and route structures.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-primary mt-1 shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                  <CheckCircle className="w-3.5 h-3.5 text-brand-primary relative z-10" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-200 text-sm">Team Workspace Configuration</h4>
                  <p className="text-sm font-semibold text-zinc-450 mt-0.5">We integrate SSO, SAML registries, audit logging endpoints, and Slack notification channels.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-brand-primary mt-1 shrink-0 relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-gradient opacity-10" />
                  <CheckCircle className="w-3.5 h-3.5 text-brand-primary relative z-10" />
                </div>
                <div>
                  <h4 className="font-black text-zinc-200 text-sm">HIPAA & SOC 2 Verifications</h4>
                  <p className="text-sm font-semibold text-zinc-450 mt-0.5">We sign Business Associate Agreements (BAA) and conduct strict pipeline validation checks.</p>
                </div>
              </li>
            </ul>

            <div className="pt-6 border-t border-zinc-800 text-center space-y-2">
              <p className="text-sm font-semibold text-zinc-400">
                Want to estimate potential savings for your company?
              </p>
              <p className="text-brand-primary font-extrabold text-sm">
                We perform free operational audits to estimate action-load savings.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
