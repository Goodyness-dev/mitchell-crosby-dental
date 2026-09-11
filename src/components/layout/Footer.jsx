import React from 'react';
import { Phone, MapPin, ChevronRight, Sparkles, Mail, Printer } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenWizard, onNavigate }) {
  const handleLinkClick = (e, target) => {
    e.preventDefault();
    if (target === 'services') {
      if (onNavigate) onNavigate('services');
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
    <footer className="bg-slate-950 text-slate-400 text-sm sm:text-base pb-16 sm:pb-0 border-t border-slate-900" role="contentinfo">
      {/* Pre-footer CTA Bar */}
      <div className="bg-shop-red py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-4xl font-black font-heading text-white tracking-tight">
              Ready for a healthier, more confident smile?
            </h3>
            <p className="text-sky-100 mt-2 text-sm sm:text-lg">
              Single-visit CEREC® same-day crowns, dental implants, and gentle family care in Casa Grande.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full md:w-auto shrink-0">
            <button
              onClick={() => onOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-shop-red font-bold text-base hover:bg-sky-50 transition shadow-md active:scale-95 text-center cursor-pointer"
              aria-label="Request Appointment Online"
            >
              Book Consultation
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-sky-900 hover:bg-sky-950 text-white font-bold text-base transition border border-sky-700 flex items-center justify-center space-x-2.5 active:scale-95 text-center"
              aria-label={`Call Mitchell & Crosby Family Dentistry at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-5 h-5 text-sky-300" aria-hidden="true" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-shop-red text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-heading font-black text-white text-base sm:text-lg">
              MITCHELL & CROSBY
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Locally owned and continuously serving the residents of Casa Grande Valley and Pinal County since 1953 with honest, advanced dental care.
          </p>
          <div className="text-xs text-slate-500 space-y-1">
            <p>Se Habla Español • Bilingual Care</p>
            <p>5.0 Star Rated Local Dental Practice</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
            Specialized Care
          </h4>
          <ul className="space-y-2.5 text-xs sm:text-sm">
            {['Same Day Crowns', 'Dental Implants', 'Cosmetic Veneers', 'Teeth Whitening', 'Family Cleanings', 'Emergency Relief'].map((s) => (
              <li key={s}>
                <button
                  onClick={(e) => handleLinkClick(e, 'services')}
                  className="hover:text-white transition flex items-center space-x-1 cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-shop-red" />
                  <span>{s}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
            Clinic Hours
          </h4>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <div className="flex justify-between">
              <span>Mon – Thu:</span>
              <span className="text-white font-semibold">8:00 AM – 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span>Friday:</span>
              <span className="text-white font-semibold">Every Other Friday</span>
            </div>
            <div className="flex justify-between">
              <span>Sat – Sun:</span>
              <span className="text-amber-400 font-semibold">Closed (On-Call)</span>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider mb-4">
            Practice Location
          </h4>
          <div className="space-y-3 text-xs sm:text-sm">
            <div className="flex items-start space-x-2.5">
              <MapPin className="w-4 h-4 text-shop-red shrink-0 mt-1" />
              <span>{BUSINESS_INFO.address.formatted}</span>
            </div>
            <div className="flex items-center space-x-2.5">
              <Phone className="w-4 h-4 text-shop-red shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white text-slate-300 font-semibold">
                {BUSINESS_INFO.phone}
              </a>
            </div>
            <div className="flex items-center space-x-2.5">
              <Printer className="w-4 h-4 text-slate-500 shrink-0" />
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
      <div className="border-t border-slate-900 py-6 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Mitchell & Crosby Family Dentistry LLC. All rights reserved. • Serving Casa Grande, Coolidge, Arizona City & Pinal County, AZ.</p>
        <p className="mt-1">
          <a href="/#/admin" className="text-slate-600 hover:text-slate-400 underline">Staff Portal Login</a>
        </p>
      </div>
    </footer>
  );
}
