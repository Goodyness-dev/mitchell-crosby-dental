import React from 'react';
import { ChevronRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black sana-grid-bg transition-colors" aria-label="Introduction & Practice Overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-24">
        
        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* SANA Editorial Category Tag */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-neutral-800 dark:text-neutral-200 text-xs uppercase tracking-[0.18em] font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>// 01 ESTABLISHED 1953 • CASA GRANDE, AZ</span>
            </div>

            {/* Signature SANA Editorial Headline with Outlined / Stroke Accent Text */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              Compassionate <br />
              <span className="text-stroke text-stroke-black">Family Care,</span> <br />
              <span className="text-shop-red">Modern Smiles.</span>
            </h1>

            {/* Subtext */}
            <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-xl font-normal leading-relaxed max-w-xl">
              From single-visit <strong className="font-semibold text-neutral-900 dark:text-white">CEREC® same-day crowns</strong> to 3D dental implants and gentle preventative hygiene. Generational hometown dentistry elevated with digital precision.
            </p>

            {/* CTAs - SANA Pill Style */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center space-x-2.5 shadow-md active:scale-95 cursor-pointer"
                aria-label="Request Dental Appointment Online"
              >
                <span>Book Consultation & Estimate</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="px-7 py-4 rounded-full bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-900 dark:text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-300 dark:border-neutral-800 transition flex items-center justify-center space-x-2 active:scale-95"
                aria-label={`Call Mitchell & Crosby Family Dentistry at ${BUSINESS_INFO.phone}`}
              >
                <Phone className="w-4 h-4 text-shop-red" />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Patient & Staff Social Proof Avatar Stack (SANA Hero Style) */}
            <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800/70 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-black object-cover"
                  src="/images/dr-mitchell.jpg"
                  alt="Dr. Jeffrey Mitchell DDS"
                />
                <img
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-black object-cover"
                  src="/images/dr-crosby.jpg"
                  alt="Dr. David Crosby DMD"
                />
                <div className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-black bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-xs">
                  70+
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-1 text-amber-500 text-xs">
                  {'★★★★★'.split('').map((s, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="font-bold text-neutral-900 dark:text-white ml-1.5 text-xs">5.0 Star Rating</span>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  Trusted by generations of Casa Grande & Pinal County families
                </p>
              </div>
            </div>

          </div>

          {/* Right Hero Column: SANA Architectural Featured Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-3 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-xl overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src="/images/storefront.jpg"
                  alt="Mitchell & Crosby Family Dentistry Casa Grande Historic Practice"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Floating pill badge */}
                <div className="absolute top-4 left-4 inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-md border border-white/20 text-neutral-900 dark:text-white text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-shop-red" />
                  <span>CEREC® 3D Milling Lab On-Site</span>
                </div>

                {/* Bottom Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-widest text-sky-300 font-bold mb-1">
                    Hometown Care Since 1953
                  </p>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold leading-tight">
                    721 N Olive Ave, Casa Grande, AZ
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1">
                    Gentle, anxiety-free dental visits with your hometown neighbors.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="grid grid-cols-2 gap-2 mt-3 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/80 px-1">
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-shop-red shrink-0" />
                  <span>Same-Day Crowns</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-shop-red shrink-0" />
                  <span>3D Digital Implants</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-shop-red shrink-0" />
                  <span>Se Habla Español</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-shop-red shrink-0" />
                  <span>PPO Insurance Accepted</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SANA Accreditation & Technology Partners Strip */}
        <div className="mt-16 pt-10 border-t border-neutral-200/70 dark:border-neutral-800/70">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-400 dark:text-neutral-500 mb-6">
            Clinical Technology Standards & Accreditations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono">ADA</span>
              <span>American Dental Association</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono">CEREC</span>
              <span>Dentsply Sirona 3D</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono">FINANCING</span>
              <span>CareCredit® Healthcare</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono">OMNICHROMA</span>
              <span>Tokuyama Shade Match</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 font-mono">GOOGLE</span>
              <span>5.0 Star Verified</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
