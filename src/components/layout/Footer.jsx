import React from 'react';
import { Phone, MapPin, ChevronRight, Sparkles, Mail, Printer, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenWizard, onNavigate }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
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

    if (onNavigate) onNavigate('home');
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-neutral-950 text-neutral-400 text-xs sm:text-sm pb-16 sm:pb-0 border-t border-neutral-900 sana-grid-bg" role="contentinfo">
      {/* SANA Pre-footer CTA Bar */}
      <div className="border-b border-neutral-900 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-neutral-500">// READY TO GET STARTED?</span>
            <h3 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              Experience Modern <br />
              <span className="text-stroke" style={{ WebkitTextStroke: '1.5px #ffffff' }}>Hometown Care.</span>
            </h3>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl leading-relaxed">
              Same-day CEREC® crowns, dental implants, cosmetic veneers & gentle cleanings in Casa Grande since 1953.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard()}
              className="px-8 py-4 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 text-center cursor-pointer flex items-center justify-center space-x-2"
              aria-label="Request Appointment Online"
            >
              <span>Book Appointment & Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="px-7 py-4 rounded-full bg-transparent hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider transition border border-neutral-800 flex items-center justify-center space-x-2 active:scale-95 text-center"
              aria-label={`Call Mitchell & Crosby Family Dentistry at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4 text-shop-red" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Mitchell & Crosby" className="h-9 w-auto brightness-150 object-contain" />
            <span className="font-editorial font-bold text-white text-base sm:text-lg tracking-tight">
              MITCHELL & CROSBY
            </span>
          </div>
          <p className="text-xs text-neutral-400 leading-relaxed">
            Locally owned and continuously serving the residents of Casa Grande Valley and Pinal County since 1953 with honest, advanced dental care.
          </p>
          <div className="text-xs text-neutral-500 space-y-1 font-mono">
            <p>Se Habla Español • Bilingual Care</p>
            <p>5.0 Star Rated Local Dental Practice</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-4">
            Practice & Care
          </h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button
                onClick={(e) => handleLinkClick(e, 'about')}
                className="hover:text-white transition flex items-center space-x-1.5 cursor-pointer font-bold text-neutral-300"
              >
                <ChevronRight className="w-3 h-3 text-shop-red" />
                <span>About the Practice</span>
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleLinkClick(e, 'about')}
                className="hover:text-white transition flex items-center space-x-1.5 cursor-pointer text-neutral-400"
              >
                <ChevronRight className="w-3 h-3 text-shop-red" />
                <span>Patient Forms & Registration</span>
              </button>
            </li>
            {['CEREC Same-Day Crowns', 'Dental Implants', 'Cosmetic Veneers', 'Teeth Whitening', 'Family Cleanings'].map((s) => (
              <li key={s}>
                <button
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3 text-shop-red" />
                  <span>{s}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-4">
            Clinic Hours
          </h4>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span>Monday – Thursday:</span>
              <span className="text-white font-medium">8:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday:</span>
              <span className="text-white font-medium">Every Other Friday</span>
            </div>
            <div className="flex justify-between">
              <span>Sat – Sun:</span>
              <span className="text-neutral-500 font-medium">Closed (Emergency)</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-[0.15em] mb-4">
            Practice Location
          </h4>
          <div className="space-y-3 text-xs">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-shop-red shrink-0 mt-0.5" />
              <span>{BUSINESS_INFO.address.formatted}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-shop-red shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white text-neutral-300 font-bold">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2.5">
              <Printer className="w-4 h-4 text-neutral-500 shrink-0" />
              <span>Fax: (520) 836-4613</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Mail className="w-4 h-4 text-shop-red shrink-0" />
              <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white truncate">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-neutral-900 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
        <p>© {new Date().getFullYear()} Mitchell & Crosby Family Dentistry LLC. All rights reserved. Casa Grande, AZ.</p>
        <p>
          <a href="/#/admin" className="text-neutral-500 hover:text-white transition">Staff Admin Login</a>
        </p>
      </div>
    </footer>
  );
}
