import React from 'react';
import { ChevronRight, Phone, Sparkles, HeartHandshake, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  return (
    <section className="relative overflow-hidden" aria-label="Introduction & Appointment Request">
      {/* Full-width Hero with Calming Background */}
      <div className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[680px] flex items-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 overflow-hidden bg-slate-950 bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/60" />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
          <div className="max-w-3xl space-y-5 sm:space-y-6">
            {/* Small live badge */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/15 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Casa Grande's Trusted Family Dentists Since 1953</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-heading text-white tracking-tight leading-[1.1]">
              Compassionate Care, <br />
              <span className="text-sky-300">Modern Smiles.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-slate-200 max-w-2xl leading-relaxed font-medium">
              Single-visit CEREC® same-day crowns, dental implants, cosmetic veneers & gentle family dentistry. Relaxed visits with your trusted hometown neighbors.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-2xl bg-shop-red hover:bg-shop-redHover text-white font-black text-base sm:text-lg transition-all flex items-center justify-center space-x-2.5 shadow-xl shadow-sky-900/40 active:scale-95 cursor-pointer"
                aria-label="Request Dental Appointment Online"
              >
                <span>Book Appointment & Estimate</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold text-base sm:text-lg border border-white/20 transition flex items-center justify-center space-x-2.5 active:scale-95"
                aria-label={`Call Mitchell & Crosby Family Dentistry at ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-5 h-5 text-sky-300" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust proof */}
            <div className="flex items-center space-x-3 text-sm sm:text-base text-slate-300 pt-3 font-medium">
              <div className="flex text-amber-400 text-lg" aria-label="5 out of 5 stars rating">
                {'★★★★★'.split('').map((_, i) => (
                  <span key={i} className="leading-none">★</span>
                ))}
              </div>
              <span>5.0 Star Rated • Over 70 Years Serving Pinal County • Se Habla Español</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
