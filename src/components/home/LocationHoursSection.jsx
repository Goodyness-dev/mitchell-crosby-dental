import React from 'react';
import { BUSINESS_INFO, isOpenNow } from '../../data/businessData';

export default function LocationHoursSection({ onOpenWizard }) {
  const shopOpen = isOpenNow();
  const currentDayIndex = new Date().getDay();
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayName = dayNames[currentDayIndex];

  return (
    <section id="location" className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-black sana-grid-bg transition-colors" aria-labelledby="location-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SANA Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 border-b border-neutral-200/70 dark:border-neutral-800/70 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="sana-tag">// 07 VISIT OUR CLINIC & HOURS</span>
            <h2 id="location-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Historic Olive Ave, <br />
              <span className="text-stroke text-stroke-black">Casa Grande, AZ.</span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            Conveniently situated in central Casa Grande with dedicated on-site parking and handicap accessibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Hours & Contact Card */}
          <div className="lg:col-span-5 bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 rounded-3xl p-7 sm:p-9 space-y-6 shadow-xs flex flex-col justify-between transition-colors">
            <div>
              {/* Open/Closed Status Badge */}
              <div className="flex items-center justify-between p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60 mb-6">
                <div className="flex items-center space-x-3.5">
                  <span className={`w-3 h-3 rounded-full ${shopOpen ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'}`} aria-hidden="true" />
                  <div>
                    <span className={`font-bold text-sm sm:text-base block ${shopOpen ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-600 dark:text-neutral-400'}`}>
                      {shopOpen ? 'Practice Open Now' : 'Practice Currently Closed'}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">Today is {currentDayName}</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">// MON-THU</span>
              </div>

              {/* Hours Table */}
              <div>
                <h3 className="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-3">
                  Practice Schedule
                </h3>
                <div className="divide-y divide-neutral-100 dark:divide-neutral-800 text-xs sm:text-sm">
                  {BUSINESS_INFO.hours.map((h) => {
                    const isToday = h.day.toLowerCase() === currentDayName.toLowerCase();
                    const hoursString = h.hours || (h.open === 'Closed' ? 'Closed (On-Call)' : `${h.open} – ${h.close}`);
                    const isClosed = hoursString.toLowerCase().includes('closed');

                    return (
                      <div
                        key={h.day}
                        className={`py-2.5 px-3 flex justify-between items-center rounded-xl ${
                          isToday 
                            ? 'bg-neutral-100 dark:bg-neutral-800 font-bold text-neutral-950 dark:text-white' 
                            : 'text-neutral-600 dark:text-neutral-300'
                        }`}
                      >
                        <span className={isToday ? 'text-shop-red' : ''}>
                          {h.day}
                        </span>
                        <span className={`font-mono ${isClosed ? 'text-neutral-400' : ''}`}>
                          {hoursString}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Address & Quick Actions */}
            <div className="space-y-4 pt-4 border-t border-neutral-200/60 dark:border-neutral-800">
              <div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 block mb-1">
                  Location Address
                </span>
                <p className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">
                  721 N Olive Ave, Casa Grande, AZ 85122
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Near E 8th St & N Florence St • Pinal County
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex-1 py-3 px-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition"
                >
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  href="https://maps.google.com/?q=721+N+Olive+Ave+Casa+Grande+AZ+85122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-5 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition"
                >
                  <span>Get Directions ↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Map & Exterior Card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs relative min-h-[420px] bg-neutral-100 dark:bg-neutral-900 flex flex-col">
            <iframe
              title="Mitchell & Crosby Family Dentistry Casa Grande Google Map"
              src="https://maps.google.com/maps?q=721+N+Olive+Ave,+Casa+Grande,+AZ+85122&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[360px] lg:min-h-[420px] border-0 grayscale dark:invert dark:hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4 bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-xs">
              <span className="text-neutral-600 dark:text-neutral-400 font-medium">
                Serving Casa Grande, Coolidge, Eloy, Arizona City & Pinal County
              </span>
              <a
                href="https://maps.google.com/?q=721+N+Olive+Ave+Casa+Grande+AZ+85122"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-shop-red hover:underline inline-flex items-center space-x-1"
              >
                <span>Open in Maps ↗</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
