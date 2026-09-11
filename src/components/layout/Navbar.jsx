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

    if (target === 'services') {
      if (onNavigate) onNavigate('services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
    { name: 'Services', target: 'services' },
    { name: 'About Doctors', target: '#about' },
    { name: 'Technology', target: '#amenities' },
    { name: 'Hours & Map', target: '#location' },
    { name: 'Reviews', target: '#reviews' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-neutral-900' 
          : 'bg-white dark:bg-black border-b border-gray-100 dark:border-neutral-900'
      }`}
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <button 
          onClick={(e) => handleNavClick(e, '#')} 
          className="flex items-center space-x-3 group text-left cursor-pointer"
          aria-label="Mitchell & Crosby Family Dentistry Home"
        >
          <img 
            src="/logo.png" 
            alt="Mitchell & Crosby Family Dentistry Logo" 
            className="h-9 sm:h-11 w-auto object-contain shrink-0 dark:brightness-125" 
          />
          <div className="flex flex-col">
            <span className="font-heading text-base sm:text-xl font-black tracking-tight text-gray-900 dark:text-white leading-tight">
              Mitchell & <span className="text-shop-red">Crosby</span>
            </span>
            <span className="text-[11px] sm:text-xs tracking-wider uppercase text-gray-500 dark:text-neutral-400 font-bold">
              Family & Cosmetic Dentistry
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = link.target === 'services' && currentPage === 'services';
            return (
              <button
                key={link.name}
                onClick={(e) => handleNavClick(e, link.target)}
                className={`text-sm sm:text-base font-semibold transition-colors cursor-pointer ${
                  isActive 
                    ? 'text-shop-red font-bold' 
                    : 'text-gray-700 dark:text-neutral-300 hover:text-shop-red dark:hover:text-white'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTAs & Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Dark Mode Toggle Pill */}
          <button
            type="button"
            onClick={onToggleDarkMode}
            className="flex items-center space-x-2 px-3 py-2 rounded-full border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-[#111111] text-gray-800 dark:text-neutral-200 hover:border-shop-red transition cursor-pointer shadow-xs active:scale-95"
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
            className="flex items-center space-x-2 text-gray-700 dark:text-neutral-200 hover:text-shop-red text-sm font-bold transition"
            aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
          >
            <Phone className="w-4 h-4 text-shop-red" />
            <span className="hidden xl:inline">{BUSINESS_INFO.phone}</span>
          </a>

          {/* Appointment Request Button */}
          <button
            onClick={() => onOpenWizard()}
            className="px-5 py-2.5 rounded-xl bg-shop-red hover:bg-shop-redHover text-white font-bold text-sm transition shadow-md shadow-sky-900/25 active:scale-95 cursor-pointer"
          >
            Request Appointment
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
