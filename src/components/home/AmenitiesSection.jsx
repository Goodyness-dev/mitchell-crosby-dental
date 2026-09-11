import React from 'react';
import { AMENITIES } from '../../data/amenitiesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AmenitiesSection({ onOpenWizard }) {
  return (
    <section id="amenities" className="py-20 sm:py-24 bg-white dark:bg-black transition-colors" aria-labelledby="amenities-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Technology & Comfort Feature */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-neutral-800 relative group">
              <img
                src="/images/waiting-room.jpg"
                alt={`Modern CEREC 3D digital dental operatory and relaxing patient bays at ${BUSINESS_INFO.name} in Casa Grande, AZ`}
                loading="lazy"
                decoding="async"
                width="640"
                height="400"
                className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-6 right-6 text-white">
                <span className="px-3 py-1 rounded-full bg-shop-red text-white text-xs font-bold uppercase tracking-wider mb-2 inline-block">
                  High-Tech Operatories
                </span>
                <h4 className="text-xl sm:text-2xl font-bold">In-Office CEREC® 3D Milling Lab</h4>
                <p className="text-white/85 text-xs sm:text-sm mt-1">Single-visit crowns designed, milled, and bonded in 90 minutes.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 dark:bg-[#0c0c0c] border border-gray-200 dark:border-neutral-800">
              <span className="font-mono text-xs font-bold text-shop-red block mb-1">// PATIENT COMFORT</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Relaxed, Anxiety-Free Dental Experience
              </h3>
              <p className="text-gray-600 dark:text-neutral-300 text-sm sm:text-base mt-2 leading-relaxed">
                We believe dental visits should be calm and stress-free. Enjoy comfortable treatment bays, gentle techniques, low-dose digital imaging, and transparent explanations every step of the way.
              </p>
            </div>
          </div>

          {/* Right: Numbered Dental Features Grid */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-shop-light border border-shop-border text-xs font-bold text-shop-red uppercase tracking-wider mb-3">
              <span className="font-mono font-bold text-shop-red">// CLINICAL EXCELLENCE</span>
            </div>

            <h2 id="amenities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-gray-900 dark:text-white tracking-tight mb-3">
              Why Casa Grande Chooses {BUSINESS_INFO.name.split(' ')[0]} & {BUSINESS_INFO.name.split(' ')[2]}
            </h2>
            <p className="text-gray-600 dark:text-neutral-400 text-base sm:text-lg mb-8">
              Generations of trusted family dentistry elevated with modern digital technology.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {AMENITIES.map((feature, idx) => {
                return (
                  <div 
                    key={idx} 
                    className="p-5 rounded-2xl border border-gray-200 dark:border-neutral-800 hover:border-shop-border hover:shadow-md transition-all bg-stone-50/60 dark:bg-[#0c0c0c]"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] font-bold text-shop-red">// 0{idx + 1}</span>
                      <span className="text-neutral-400 font-mono text-xs">→</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <button
                onClick={() => onOpenWizard()}
                className="px-8 py-4 rounded-xl bg-shop-red hover:bg-shop-redHover text-white font-bold text-base sm:text-lg transition-all shadow-md active:scale-95 cursor-pointer"
                aria-label={`Book an appointment at ${BUSINESS_INFO.name}`}
              >
                Schedule Your Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
