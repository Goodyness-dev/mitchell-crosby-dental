import React from 'react';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenWizard }) {
  return (
    <section id="about" className="py-20 sm:py-24 bg-slate-50 dark:bg-black transition-colors" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: About Details */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-shop-light border border-shop-border text-xs font-bold text-shop-red uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hometown Dental Heritage Since 1953</span>
            </div>

            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-900 dark:text-white tracking-tight leading-tight">
              A Generational Tradition of Gentle Hometown Dental Care
            </h2>

            {/* Provider Quote */}
            <div className="border-l-4 border-shop-red pl-5 sm:pl-6 py-2">
              <Quote className="w-6 h-6 text-shop-red mb-2" aria-hidden="true" />
              <p className="text-slate-700 dark:text-neutral-300 text-sm sm:text-lg italic leading-relaxed">
                "{BUSINESS_INFO.owner.quote}"
              </p>
              <div className="mt-3 text-sm sm:text-base font-bold text-shop-red">
                — {BUSINESS_INFO.owner.name}
              </div>
            </div>

            <p className="text-slate-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
              At Mitchell & Crosby Family Dentistry, you're not just another appointment on a calendar. Our dentists and staff grew up right here in Casa Grande, coach youth sports, participate in local community events, and treat generations of local families.
            </p>

            {/* Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "CEREC® 1-Visit Same Day Crowns",
                "Omnichroma Invisible Shade Fillings",
                "Gentle Diode Laser Soft-Tissue Therapy",
                "Bilingual Care: Se Habla Español",
                "Low-Dose Digital 3D Diagnostics",
                "Most Major PPO Insurances Accepted"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-shop-red shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenWizard}
                className="px-6 py-3 rounded-xl bg-shop-red hover:bg-shop-redHover text-white font-bold text-sm shadow-md transition active:scale-95 cursor-pointer"
              >
                Schedule a Friendly Visit
              </button>
            </div>
          </div>

          {/* Right: Doctors & History Cards */}
          <div className="space-y-5">
            {/* Meet the Doctors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 shadow-md flex items-center space-x-3.5">
                <img
                  src="/images/dr-mitchell.jpg"
                  alt="Dr. Jeffrey Mitchell, DDS"
                  className="w-16 h-16 rounded-2xl object-cover shrink-0 border-2 border-shop-border"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Dr. Jeffrey Mitchell</h4>
                  <p className="text-xs text-shop-red font-bold">DDS • Univ. of Colorado</p>
                  <p className="text-[11px] text-slate-500 dark:text-neutral-400 mt-0.5">Casa Grande Native</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 shadow-md flex items-center space-x-3.5">
                <img
                  src="/images/dr-crosby.jpg"
                  alt="Dr. David Crosby, DMD"
                  className="w-16 h-16 rounded-2xl object-cover shrink-0 border-2 border-shop-border"
                />
                <div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white">Dr. David Crosby</h4>
                  <p className="text-xs text-shop-red font-bold">DMD • Midwestern Univ.</p>
                  <p className="text-[11px] text-slate-500 dark:text-neutral-400 mt-0.5">Se Habla Español</p>
                </div>
              </div>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 shadow-xl space-y-5">
              <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                Our Timeline & Community Story
              </h3>
              <div className="space-y-5">
                {BUSINESS_INFO.history.map((h, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="px-3 py-1 rounded-xl bg-shop-light border border-shop-border font-mono font-bold text-shop-red text-xs shrink-0">
                      {h.year}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white">{h.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-neutral-400 mt-0.5 leading-relaxed">{h.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
