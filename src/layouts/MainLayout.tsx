import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Shield, ArrowUpRight, Zap, ArrowUp } from 'lucide-react';
import { CONTACT_INFO, OFFICE_ADDRESS } from '../config/constants';
import { ThemeToggle } from '../theme/ThemeToggle';

export const MainLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scrolling to hash anchor elements
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const timeoutId = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [location.pathname, location.hash]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Platform', path: '/platform' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Integrations', path: '/integrations' },
    { name: 'Security', path: '/security' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-theme-bg text-theme-textMuted overflow-x-hidden w-full relative">
      <ScrollRestoration />

      {/* Top Banner for Security & Trust */}
      <div className="relative overflow-hidden bg-theme-bgTertiary border-b border-theme-border py-2 px-3 sm:px-4 text-center text-[11px] sm:text-xs md:text-sm font-semibold">
        <div className="absolute inset-0 bg-brand-gradient opacity-10 animate-pulse-glow" />
        <span className="relative z-10 inline-flex flex-wrap items-center gap-1.5 sm:gap-2 justify-center text-theme-text font-bold break-words transition-colors duration-300">
          <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-500 shrink-0" />
          <span className="bg-emerald-600 text-white text-[9.5px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm shrink-0">HIPAA Shielded</span>
          <span className="bg-purple-600 text-white text-[9.5px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm shrink-0">SOC 2 Type II</span>
          <span className="text-theme-textMuted text-[11px] sm:text-xs font-semibold">Ready Infrastructure Built for Global Enterprise Scale.</span>
        </span>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav shadow-lg py-1.5'
            : 'bg-theme-bg/85 backdrop-blur-md border-b border-theme-border/50 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center group">
                <img
                  src="/brand-logo.png"
                  alt="Eazmate Logo"
                  className="h-[42px] sm:h-[52px] lg:h-[58px] w-auto object-contain transition-transform group-hover:scale-[1.03] duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative font-bold text-sm px-3.5 py-2 rounded-lg transition-colors ${
                      active
                        ? 'text-brand-primary font-black'
                        : 'text-theme-textMuted hover:text-theme-text hover:bg-theme-bgTertiary/40'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-brand-gradient rounded-full"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTA */}
            <div className="hidden lg:flex items-center gap-3.5">
              <ThemeToggle />
              <Link
                to="/contact"
                className="rounded-xl bg-slate-900 hover:bg-purple-600 dark:bg-slate-800 dark:hover:bg-purple-600 text-white font-black text-xs py-2.5 px-4 focus:outline-none transition-all block text-center shadow-sm hover:scale-105 border border-slate-700/50"
              >
                Let's Talk
              </Link>
              <Link
                to="/get-quotation"
                className="bg-purple-600 hover:bg-purple-500 text-white font-black text-sm py-2.5 px-5 rounded-xl transition-all shadow-md shadow-purple-600/30 flex items-center gap-1.5 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Start Free Trial <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="inline-flex items-center justify-center p-2.5 rounded-xl text-theme-textLight hover:text-theme-text focus:outline-none bg-theme-bgTertiary border border-theme-border transition-colors duration-300"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, animated slide down */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-theme-bgTertiary/95 backdrop-blur-xl border-t border-theme-border py-6 px-6 space-y-4 shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block py-3 px-3 rounded-xl text-base font-bold transition-colors ${
                      isActive(link.path)
                        ? 'text-brand-primary bg-brand-primary/10 font-extrabold'
                        : 'text-theme-textMuted hover:text-theme-text hover:bg-theme-bg'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Actions for Mobile */}
              <div className="pt-6 border-t border-theme-border flex flex-col gap-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center rounded-xl bg-slate-900 hover:bg-purple-600 dark:bg-slate-800 dark:hover:bg-purple-600 text-white font-black py-3 transition-all block shadow-sm border border-slate-700/50"
                >
                  Let's Talk
                </Link>
                <Link
                  to="/get-quotation"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center bg-purple-600 hover:bg-purple-500 text-white font-black py-3.5 rounded-xl transition-all shadow-md shadow-purple-600/30 flex items-center justify-center gap-1.5 active:translate-y-0"
                >
                  Start Free Trial <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-theme-bg text-theme-textMuted pt-16 sm:pt-24 pb-12 border-t border-theme-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-theme-border">
            {/* Logo and Tagline */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center">
                <img
                  src="/brand-logo.png"
                  alt="Eazmate Logo"
                  className="h-[40px] sm:h-[48px] lg:h-[54px] w-auto object-contain"
                />
              </div>
              <p className="text-theme-textMuted text-sm font-semibold leading-relaxed max-w-md">
                The AI Brain Behind Every Organization. We build the intelligent infrastructure layer that sits above your existing tools, orchestrating operations, automating CRM pipelines, and running autonomous agents.
              </p>
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-theme-bgTertiary border border-theme-border text-theme-textMuted">
                  <Shield className="w-3.5 h-3.5 text-brand-primary" /> HIPAA Compliant
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-theme-bgTertiary border border-theme-border text-theme-textMuted">
                  <Zap className="w-3.5 h-3.5 text-brand-teal" /> SOC2 Ready
                </span>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="font-sans text-sm font-black tracking-wider text-theme-text uppercase mb-5 transition-colors duration-300">Platform</h3>
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
              <h3 className="font-sans text-sm font-black tracking-wider text-theme-text uppercase mb-5 transition-colors duration-300">Resources & Legal</h3>
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
              <h3 className="font-sans text-sm font-black tracking-wider text-theme-text uppercase mb-5">Contact</h3>
              <ul className="space-y-4 text-sm text-theme-textMuted">
                <li className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-theme-bgTertiary border border-theme-border flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-brand-primary" />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    {CONTACT_INFO.phones.map((phone) => (
                      <a key={phone.value} href={phone.telLink} className="hover:text-theme-text hover:underline transition-colors">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-lg bg-theme-bgTertiary border border-theme-border flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-brand-teal" />
                  </div>
                  <div className="flex flex-col gap-1 mt-0.5">
                    {CONTACT_INFO.emails.map((email) => (
                      <a key={email.display} href={email.mailtoLink} className="hover:text-theme-text hover:underline transition-colors">
                        {email.display}
                      </a>
                    ))}
                  </div>
                </li>
                <li className="text-sm text-theme-textMuted font-medium leading-normal flex gap-2">
                  <span>📍</span>
                  <span>{OFFICE_ADDRESS.full}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-theme-textMuted font-medium border-t border-theme-border">
            <p>© {new Date().getFullYear()} Eazmate Technologies Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <span>GDPR Compliant</span>
              <span>•</span>
              <span>ISO 27001 Audited</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white shadow-xl shadow-purple-600/30 hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center justify-center cursor-pointer border border-white/20"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

