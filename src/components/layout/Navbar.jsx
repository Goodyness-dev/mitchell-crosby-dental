import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronRight, Sun, Moon, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenWizard, currentPage = 'home', onNavigate, darkMode, onToggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (target === '#' || target === 'home') {
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'about') {
      if (onNavigate) onNavigate('about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (target === 'about#patient-forms') {
      if (onNavigate) onNavigate('about');
      setTimeout(() => {
        const el = document.getElementById('patient-forms');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
      return;
    }

    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'About Practice', target: 'about' },
    { name: 'Services', target: 'services' },
    { name: 'Patient Forms', target: 'about#patient-forms' },
    { name: 'Hours & Map', target: '#location' },
    { name: 'Reviews', target: '#reviews' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-xs border-b border-neutral-200/80 dark:border-neutral-800/80' 
          : 'bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-900'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <button 
          onClick={(e) => handleNavClick(e, '#')} 
          className="flex items-center space-x-3.5 group text-left cursor-pointer"
          aria-label="Mitchell & Crosby Family Dentistry Home"
        >
          <img 
            src="/logo.png" 
            alt="Mitchell & Crosby Family Dentistry Logo" 
            className="h-10 sm:h-12 w-auto object-contain shrink-0 dark:brightness-125" 
          />
          <div className="flex flex-col">
            <span className="font-editorial text-lg sm:text-xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-none">
              MITCHELL & <span className="text-shop-red">CROSBY</span>
            </span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400 font-semibold mt-1">
              Family & Cosmetic Dentistry
            </span>
          </div>
        </button>

        {/* Desktop Nav Links - SANA Pill Style */}
        <nav className="hidden lg:flex items-center px-4 py-1.5 rounded-full bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200/60 dark:border-neutral-800/80 backdrop-blur-xs space-x-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = 
              (link.target === 'services' && currentPage === 'services') ||
              (link.target === 'about' && currentPage === 'about');
            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.target)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold shadow-xs' 
                    : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-white/60 dark:hover:bg-neutral-800/60'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTAs & Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-3.5">
          {/* Dark Mode Toggle Pill */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center text-neutral-700 dark:text-neutral-300 hover:border-shop-red transition cursor-pointer active:scale-95"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-shop-red" />
            )}
          </button>

          {/* Direct Phone Call */}
          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="hidden xl:flex items-center space-x-2 text-neutral-700 dark:text-neutral-200 hover:text-shop-red text-xs uppercase tracking-wider font-bold transition px-3 py-2"
            aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
          >
            <Phone className="w-3.5 h-3.5 text-shop-red" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>

          {/* Appointment Request Pill Button (SANA signature rounded-full) */}
          <button
            onClick={() => onOpenWizard()}
            className="px-6 py-2.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold text-xs uppercase tracking-wider transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="p-2 rounded-xl border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900 text-gray-700 dark:text-neutral-300"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-shop-red" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-gray-200 dark:border-neutral-800 text-gray-700 dark:text-neutral-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-black px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={(e) => handleNavClick(e, link.target)}
              className="block w-full text-left py-2 text-base font-bold text-gray-800 dark:text-neutral-200 hover:text-shop-red"
            >
              {link.name}
            </button>
          ))}
          <div className="pt-3 border-t border-gray-100 dark:border-neutral-800 space-y-3">
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl border border-gray-200 dark:border-neutral-800 text-gray-900 dark:text-white font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-shop-red" />
              <span>Call: {BUSINESS_INFO.phone}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWizard();
              }}
              className="w-full py-3 rounded-xl bg-shop-red text-white font-bold text-sm shadow-md"
            >
              Request Appointment & Estimate
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
