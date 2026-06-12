import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { ShieldCheck, MessageSquare, ArrowLeft, CheckCircle2, ChevronRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../config/constants';

// Zod validation schema matching general enterprise requirements
const quotationSchema = z.object({
  organizationName: z.string().min(2, { message: 'Organization name must be at least 2 characters' }),
  contactPerson: z.string().min(2, { message: 'Contact person name must be at least 2 characters' }),
  whatsappNumber: z.string().regex(/^[5-9]\d{9}$/, { 
    message: 'Please enter a valid 10-digit mobile number' 
  }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  city: z.string().min(2, { message: 'Please enter your city' }),
  organizationSize: z.string().min(1, { message: 'Please select your organization scale' }),
  industry: z.string().min(1, { message: 'Please select your industry vertical' }),
  capabilitiesNeeded: z.array(z.string()).min(1, { message: 'Select at least one capability to proceed' }),
  message: z.string().optional()
});

type QuotationFormData = z.infer<typeof quotationSchema>;

export const QuotationPage: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formDataCache, setFormDataCache] = useState<QuotationFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<QuotationFormData>({
    resolver: zodResolver(quotationSchema),
    defaultValues: {
      organizationName: '',
      contactPerson: '',
      whatsappNumber: '',
      email: '',
      city: '',
      organizationSize: '',
      industry: '',
      capabilitiesNeeded: [],
      message: ''
    }
  });

  const buildWhatsAppUrl = (data: QuotationFormData) => {
    const text = `Hello Eazmate! I want to request a customized AI OS deployment proposal.\n\n` +
      `*Organization Name:* ${data.organizationName}\n` +
      `*Industry:* ${data.industry}\n` +
      `*Contact:* ${data.contactPerson}\n` +
      `*WhatsApp:* +91 ${data.whatsappNumber}\n` +
      `*Email:* ${data.email}\n` +
      `*City:* ${data.city}\n` +
      `*Size:* ${data.organizationSize}\n` +
      `*Capabilities:* ${data.capabilitiesNeeded.join(', ')}` +
      (data.message ? `\n*Notes:* ${data.message}` : '') +
      `\n\nPlease share the customized proposal and next steps.`;
    return CONTACT_INFO.whatsapp.getLink(text);
  };

  const onSubmit = (data: QuotationFormData) => {
    setFormDataCache(data);
    setSubmitSuccess(true);
    reset();
    window.open(buildWhatsAppUrl(data), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#101010] text-zinc-300 min-h-screen pt-8 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Aurora Background Layer */}
      <div className="aurora-bg">
        <div className="aurora-glow-1" />
        <div className="aurora-glow-2" />
        <div className="aurora-glow-3" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 font-bold text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Homepage
          </Link>
        </div>

        {/* Success Screen Card */}
        {submitSuccess ? (
          <div className="premium-card p-8 sm:p-12 text-center space-y-8 animate-fade-in shadow-lg border border-zinc-900 bg-[#161616]">
            <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-800/40 flex items-center justify-center mx-auto text-emerald-400 shadow-md">
              <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-100">
                Proposal Request Initiated!
              </h1>
              <p className="text-zinc-400 text-base font-semibold max-w-lg mx-auto leading-relaxed">
                Thank you, <b>{formDataCache?.contactPerson}</b>. We are analyzing the deployment requirements for <b>{formDataCache?.organizationName}</b>.
              </p>
            </div>

            {/* Quick Action WhatsApp Integration */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 max-w-xl mx-auto space-y-4">
              <h3 className="font-sans font-black text-sm text-brand-primary uppercase tracking-wider">
                Speak to an AI Strategist Instantly
              </h3>
              <p className="text-sm font-semibold text-zinc-400 leading-normal">
                Click below to send your system requirements directly to our integration team on WhatsApp for immediate onboarding.
              </p>
              <a
                href={formDataCache ? buildWhatsAppUrl(formDataCache) : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand-gradient hover:brightness-105 text-white font-extrabold text-base px-6 py-3.5 rounded-xl shadow-md w-full transition-all"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                Connect Instantly on WhatsApp
              </a>
            </div>

            <div className="text-sm font-semibold text-zinc-400">
              <p>A customized proposal deck will be emailed to <b>{formDataCache?.email}</b> within 4 hours.</p>
              <button 
                onClick={() => setSubmitSuccess(false)}
                className="mt-6 text-brand-primary hover:brightness-110 font-bold hover:underline"
              >
                Submit another request
              </button>
            </div>
          </div>
        ) : (
          /* Form Card */
          <div className="premium-card overflow-hidden shadow-2xl border border-zinc-800">
            
            {/* Form Header */}
            <div className="p-8 sm:px-10 border-b border-zinc-855 relative bg-[#161616]/40">
              <div className="absolute right-6 top-6 hidden sm:flex">
                <div className="gradient-badge">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-primary" />
                  <span className="text-gradient font-extrabold uppercase tracking-wider">SOC2 & HIPAA Secure</span>
                </div>
              </div>
              <h1 className="text-3xl font-black text-zinc-100 mb-2 leading-tight">
                Request Deployment Proposal
              </h1>
              <p className="text-zinc-400 text-sm font-semibold max-w-2xl leading-relaxed">
                Provide detail about your organization's infrastructure scale. Our solutions architect will prepare a tailored AI integration layout.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-8 sm:p-10 space-y-6 bg-[#161616] border-t border-zinc-855">
              
              {/* Grid 1: Organization Name & Contact Person */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="organizationName" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Organization Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="organizationName"
                    aria-invalid={errors.organizationName ? "true" : "false"}
                    className={`w-full font-sans text-sm px-4 py-3 rounded-xl border ${
                      errors.organizationName ? 'border-rose-500 focus:ring-rose-500/10' : 'border-zinc-800 focus:border-brand-primary'
                    } focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all`}
                    placeholder="e.g. Zenith Enterprises"
                    {...register('organizationName')}
                  />
                  {errors.organizationName && (
                    <p className="text-xs font-medium text-rose-500" role="alert">{errors.organizationName.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contactPerson" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Contact Person Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    aria-invalid={errors.contactPerson ? "true" : "false"}
                    className={`w-full font-sans text-sm px-4 py-3 rounded-xl border ${
                      errors.contactPerson ? 'border-rose-500 focus:ring-rose-500/10' : 'border-zinc-800 focus:border-brand-primary'
                    } focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all`}
                    placeholder="e.g. Rohan Sharma"
                    {...register('contactPerson')}
                  />
                  {errors.contactPerson && (
                    <p className="text-xs font-medium text-rose-500" role="alert">{errors.contactPerson.message}</p>
                  )}
                </div>
              </div>

              {/* Grid 2: WhatsApp Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="whatsappNumber" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    WhatsApp Number (Contact Mobile) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-zinc-500 font-medium text-sm select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      id="whatsappNumber"
                      aria-invalid={errors.whatsappNumber ? "true" : "false"}
                      className={`w-full font-sans text-sm pl-14 pr-4 py-3 rounded-xl border ${
                        errors.whatsappNumber ? 'border-rose-500 focus:ring-rose-500/10' : 'border-zinc-800 focus:border-brand-primary'
                      } focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all`}
                      placeholder="e.g. 9876543210"
                      {...register('whatsappNumber')}
                    />
                  </div>
                  {errors.whatsappNumber ? (
                    <p className="text-xs font-medium text-rose-500" role="alert">{errors.whatsappNumber.message}</p>
                  ) : (
                    <p className="text-xs text-zinc-500 font-medium">For sending custom deployment plans & architectural diagrams</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Work Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    aria-invalid={errors.email ? "true" : "false"}
                    className={`w-full font-sans text-sm px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-rose-500 focus:ring-rose-500/10' : 'border-zinc-800 focus:border-brand-primary'
                    } focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all`}
                    placeholder="you@company.com"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-xs font-medium text-rose-500" role="alert">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Grid 3: City & Industry */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="space-y-1.5">
                  <label htmlFor="city" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    City <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    aria-invalid={errors.city ? "true" : "false"}
                    className={`w-full font-sans text-sm px-4 py-3 rounded-xl border ${
                      errors.city ? 'border-rose-500 focus:ring-rose-500/10' : 'border-zinc-800 focus:border-brand-primary'
                    } focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all`}
                    placeholder="e.g. Mumbai"
                    {...register('city')}
                  />
                  {errors.city && (
                    <p className="text-xs font-medium text-rose-500" role="alert">{errors.city.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="industry" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Industry Vertical <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="industry"
                    aria-invalid={errors.industry ? "true" : "false"}
                    className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-zinc-800 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all"
                    {...register('industry')}
                  >
                    <option value="">-- Choose Vertical --</option>
                    <option value="Healthcare">Healthcare (Flagship / HIPAA)</option>
                    <option value="Education">Education</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Salons & Wellness">Salons & Wellness</option>
                    <option value="Restaurants">Restaurants</option>
                    <option value="Agencies">Agencies</option>
                    <option value="Enterprise & SaaS">Enterprise & SaaS</option>
                    <option value="Nonprofits">Nonprofits</option>
                    <option value="Hospitality">Hospitality & Travel</option>
                    <option value="Other">Other Category</option>
                  </select>
                  {errors.industry && (
                    <p className="text-xs font-medium text-rose-500" role="alert">{errors.industry.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="organizationSize" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Organization Scale <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="organizationSize"
                    aria-invalid={errors.organizationSize ? "true" : "false"}
                    className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-zinc-800 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all"
                    {...register('organizationSize')}
                  >
                    <option value="">-- Choose Size --</option>
                    <option value="1-10 Members">1 - 10 Members</option>
                    <option value="11-50 Members">11 - 50 Members</option>
                    <option value="51-200 Members">51 - 200 Members</option>
                    <option value="200+ Members">200+ Enterprise Members</option>
                  </select>
                  {errors.organizationSize && (
                    <p className="text-xs font-medium text-rose-500" role="alert">{errors.organizationSize.message}</p>
                  )}
                </div>
              </div>

              {/* Checkbox Group: Desired Capabilities */}
              <div className="space-y-3">
                <span className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Capabilities Needed <span className="text-rose-500">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'ai-agents', label: 'AI Autonomous Agents & Routing' },
                    { id: 'unified-crm', label: 'Unified CRM & Pipeline System' },
                    { id: 'workflow-auto', label: 'Workflow Automation Builder' },
                    { id: 'analytics', label: 'Executive Analytics & Insights' }
                  ].map((service) => (
                    <label 
                      key={service.id} 
                      className="flex items-start gap-3 p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl cursor-pointer hover:border-brand-primary/50 transition-all hover:bg-zinc-800/50"
                    >
                      <input
                        type="checkbox"
                        value={service.label}
                        className="mt-1 h-4 w-4 rounded border-zinc-800 text-brand-primary focus:ring-brand-primary bg-zinc-950"
                        {...register('capabilitiesNeeded')}
                      />
                      <span className="text-xs font-semibold text-zinc-300 select-none">
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.capabilitiesNeeded && (
                  <p className="text-xs font-medium text-rose-500" role="alert">{errors.capabilitiesNeeded.message}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-xs font-medium text-zinc-400 uppercase tracking-wider">
                  Special Integration Notes (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full font-sans text-sm px-4 py-3 rounded-xl border border-zinc-800 focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary bg-zinc-900 text-zinc-100 transition-all"
                  placeholder="Detail any software you currently use (e.g. Slack, HubSpot, Epic, Shopify)..."
                  {...register('message')}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-brand-gradient hover:brightness-105 text-white font-extrabold text-base py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Submit & Connect on WhatsApp
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Security/Trust Note */}
              <div className="text-center text-xs text-zinc-400 pt-2 flex items-center justify-center gap-1.5 font-medium">
                <Briefcase className="w-4 h-4 text-brand-primary" />
                <span>Enterprise SLA guarantees and fully encrypted data handling apply.</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
