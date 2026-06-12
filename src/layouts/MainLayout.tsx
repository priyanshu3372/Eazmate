import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Shield, ArrowUpRight, Zap } from 'lucide-react';
import { CONTACT_INFO, OFFICE_ADDRESS } from '../config/constants';

export const MainLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col bg-[#101010] text-zinc-300">
      {/* Top Banner for Security & Trust */}
      <div className="relative overflow-hidden bg-[#161616] border-b border-zinc-900/60 py-2 px-4 text-center text-xs md:text-sm font-medium">
        <div className="absolute inset-0 bg-brand-gradient opacity-3 animate-pulse-glow" />
        <span className="relative z-10 inline-flex flex-wrap items-center gap-2 justify-center text-zinc-200 break-words">
          <Shield className="w-4 h-4 text-brand-primary" />
          HIPAA Compliant & SOC2 Ready Infrastructure. Built for enterprise scale.
        </span>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 glass-nav shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3.5 group">
                <img src="/logo.png" alt="Eazmate Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" />
                <img 
                  src="/brand-logo.png" 
                  alt="Eazmate Brand Logo" 
                  className="h-[18px] sm:h-[21px] lg:h-[23px] w-auto object-contain transition-transform group-hover:scale-[1.02] duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              <Link
                to="/platform"
                className={`font-bold text-sm py-2 px-1 transition-colors ${
                  isActive('/platform') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-brand-primary'
                }`}
              >
                Platform
              </Link>
              <Link
                to="/solutions"
                className={`font-bold text-sm py-2 px-1 transition-colors ${
                  isActive('/solutions') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-brand-primary'
                }`}
              >
                Solutions
              </Link>
              <Link
                to="/industries"
                className={`font-bold text-sm py-2 px-1 transition-colors ${
                  isActive('/industries') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-brand-primary'
                }`}
              >
                Industries
              </Link>
              <Link
                to="/integrations"
                className={`font-bold text-sm py-2 px-1 transition-colors ${
                  isActive('/integrations') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-brand-primary'
                }`}
              >
                Integrations
              </Link>
              <Link
                to="/security"
                className={`font-bold text-sm py-2 px-1 transition-colors ${
                  isActive('/security') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-brand-primary'
                }`}
              >
                Security
              </Link>
              <Link
                to="/contact"
                className={`font-bold text-sm py-2 px-1 transition-colors ${
                  isActive('/contact') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-brand-primary'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/contact"
                className="border-gradient-container text-xs font-extrabold py-2 px-4 focus:outline-none transition-all block text-center"
              >
                <span className="text-gradient">Book Demo</span>
              </Link>
              <Link
                to="/get-quotation"
                className="bg-brand-gradient hover:brightness-105 text-white font-extrabold text-sm py-2.5 px-5 rounded-xl transition-all shadow-md flex items-center gap-1"
              >
                Start Free Trial <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex items-center justify-center p-3 rounded-xl text-zinc-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#161616] border-t border-zinc-900 py-6 px-6 space-y-4 shadow-xl">
            <div className="space-y-2">
              <Link
                to="/platform"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base font-bold ${
                  isActive('/platform') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Platform
              </Link>
              <Link
                to="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base font-bold ${
                  isActive('/solutions') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Solutions
              </Link>
              <Link
                to="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base font-bold ${
                  isActive('/industries') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Industries
              </Link>
              <Link
                to="/integrations"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base font-bold ${
                  isActive('/integrations') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Integrations
              </Link>
              <Link
                to="/security"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base font-bold ${
                  isActive('/security') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Security
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-3 text-base font-bold ${
                  isActive('/contact') ? 'text-brand-primary font-extrabold' : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                Contact
              </Link>
            </div>
            
            {/* Actions for Mobile */}
            <div className="pt-6 border-t border-zinc-900 flex flex-col gap-3">
              <Link 
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center border-gradient-container font-extrabold py-3 transition-all block"
              >
                <span className="text-gradient">Book Demo</span>
              </Link>
              <Link
                to="/get-quotation"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-brand-gradient hover:brightness-105 text-white font-extrabold py-3 rounded-xl shadow-md transition-all block"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#101010] text-zinc-400 pt-24 pb-12 border-t border-zinc-900/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-brand-gradient opacity-20" />
        <div className="absolute bottom-[-5%] right-[5%] w-80 h-80 bg-brand-primary/2 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-zinc-900/40">
            {/* Logo and Tagline */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3.5">
                <img src="/logo.png" alt="Eazmate Logo" className="w-10 h-10 object-contain" />
                <img 
                  src="/brand-logo.png" 
                  alt="Eazmate Brand Logo" 
                  className="h-[18px] sm:h-[21px] lg:h-[23px] w-auto object-contain"
                />
              </div>
              <p className="text-zinc-400 text-sm font-semibold leading-relaxed max-w-md">
                The AI Brain Behind Every Organization. We build the intelligent infrastructure layer that sits above your existing tools, orchestrating operations, automating CRM pipelines, and running autonomous agents.
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-850 text-zinc-350">
                  <Shield className="w-3.5 h-3.5 text-brand-primary" /> HIPAA Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-850 text-zinc-350">
                  <Zap className="w-3.5 h-3.5 text-brand-teal" /> SOC2 Ready
                </span>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="font-sans text-sm font-black tracking-wider text-zinc-200 uppercase mb-5">Platform</h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link to="/platform" className="hover:text-brand-primary transition-colors">
                    AI Brain Layer
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-brand-primary transition-colors">
                    Unified CRM
                  </Link>
                </li>
                <li>
                  <Link to="/solutions" className="hover:text-brand-primary transition-colors">
                    Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link to="/platform" className="hover:text-brand-primary transition-colors">
                    Analytics & Intelligence
                  </Link>
                </li>
              </ul>
            </div>
 
            {/* Company Links */}
            <div>
              <h3 className="font-sans text-sm font-black tracking-wider text-zinc-200 uppercase mb-5">Resources & Legal</h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <Link to="/security" className="hover:text-brand-primary transition-colors">
                    Security Center
                  </Link>
                </li>
 
                <li>
                  <a href="#privacy" className="hover:text-brand-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-brand-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
 
            {/* Contact Details */}
            <div>
              <h3 className="font-sans text-sm font-black tracking-wider text-zinc-200 uppercase mb-5">Contact</h3>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a key={phone.value} href={phone.telLink} className="hover:text-white transition-colors">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-brand-teal" />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    {CONTACT_INFO.emails.map((email) => (
                      <a key={email.display} href={email.mailtoLink} className="hover:text-white transition-colors">
                        {email.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="text-sm text-zinc-500 leading-normal flex gap-2">
                  <span>📍</span>
                  <span>{OFFICE_ADDRESS.full}</span>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500 border-t border-zinc-900/40">
            <p>© {new Date().getFullYear()} Eazmate Technologies Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>ISO 27001 Audited</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
