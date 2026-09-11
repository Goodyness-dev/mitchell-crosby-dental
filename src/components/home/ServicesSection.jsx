import React from 'react';
import { SERVICES } from '../../data/servicesData';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ServicesSection({ onOpenWizard, onViewAllServices }) {
  // Key featured treatments mapped to SANA 01, 02, 03, 04 format
  const bentoServices = [
    {
      num: '01',
      title: 'CEREC® Same-Day Crowns',
      category: 'Restorative Care',
      tag: 'Single-Visit • 90 Mins',
      desc: 'Milled in-house using 3D CAD/CAM digital imaging. Walk in with a damaged tooth, walk out with a permanent custom ceramic crown in just one appointment. No gooey impressions or temporaries.',
      features: ['In-house 3D milling lab', 'Permanent bond in 90 mins', 'No temporary crown hassles'],
      popular: true,
    },
    {
      num: '02',
      title: 'Dental Implants & Restorations',
      category: 'Surgical & Restorative',
      tag: 'Permanent Tooth Replacement',
      desc: 'The gold standard for missing teeth. Precision 3D-guided surgical placement and custom aesthetic crowns that look, feel, and function exactly like your natural teeth for life.',
      features: ['3D digital bone mapping', 'Natural chewing strength', 'Bone loss prevention'],
      popular: false,
    },
    {
      num: '03',
      title: 'Family & Preventative Hygiene',
      category: 'General Dentistry',
      tag: 'Gentle Routine Care',
      desc: 'Thorough ultrasonic cleanings, low-dose digital X-rays, cavity detection, and periodontal maintenance tailored with empathy for patients of all ages, from toddlers to grandparents.',
      features: ['Gentle ultrasonic cleaning', 'Low-radiation 3D imaging', 'Pediatric & senior care'],
      popular: false,
    },
    {
      num: '04',
      title: 'Cosmetic Veneers & Whitening',
      category: 'Cosmetic Dentistry',
      tag: 'Smile Transformations',
      desc: 'Ultra-thin custom porcelain veneers, Omnichroma single-shade invisible composite fillings, and professional in-office whitening to bring out your most radiant, confident smile.',
      features: ['Omnichroma invisible fillings', 'Hand-crafted porcelain veneers', 'Custom take-home & in-office whitening'],
      popular: true,
    }
  ];

  return (
    <section id="services" className="scroll-mt-20 py-20 sm:py-28 bg-white dark:bg-black sana-grid-bg transition-colors" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SANA Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 border-b border-neutral-200/70 dark:border-neutral-800/70 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="sana-tag">// 02 OUR SERVICES & TREATMENTS</span>
            <h2 id="services-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Precision Dental Care, <br />
              <span className="text-stroke text-stroke-black">Tailored To You.</span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            High-tech restorative, preventative, and cosmetic dental treatments performed right here in Casa Grande with a gentle, hometown touch.
          </p>
        </div>

        {/* SANA Numbered Bento Grid (01, 02, 03, 04) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {bentoServices.map((service) => (
            <article
              key={service.num}
              onClick={() => onOpenWizard(service.category, service.title)}
              className="group relative rounded-3xl p-8 sm:p-11 bg-white dark:bg-[#0e0e0e] border-2 border-neutral-200/90 dark:border-neutral-800/90 hover:border-shop-red dark:hover:border-shop-red cursor-pointer flex flex-col justify-between card-thick-hover"
            >
              <div>
                {/* Number & Tag Bar */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl sm:text-5xl font-extrabold text-neutral-300 dark:text-neutral-700 group-hover:text-shop-red transition-colors">
                    {service.num}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider font-bold bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 shadow-2xs">
                      {service.tag}
                    </span>
                    {service.popular && (
                      <span className="px-3 py-1.5 rounded-full text-[11px] uppercase tracking-widest font-extrabold bg-shop-red text-white shadow-sm shadow-shop-red/30">
                        Popular
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white mb-3 group-hover:text-shop-red transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {service.desc}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 mb-8 border-t border-neutral-200/60 dark:border-neutral-800/60 pt-5">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center text-xs sm:text-sm font-medium text-neutral-700 dark:text-neutral-300">
                      <span className="w-2 h-2 rounded-full bg-shop-red mr-3 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Button */}
              <div className="flex items-center justify-between pt-5 border-t border-neutral-200/60 dark:border-neutral-800/60">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {service.category}
                </span>
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white group-hover:text-shop-red transition-colors">
                  <span>Schedule Consultation</span>
                  <span className="group-hover:translate-x-1.5 transition-transform">→</span>
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* SANA Clinical Metrics & Performance Progress Bars */}
        <div className="rounded-3xl p-8 sm:p-12 bg-white dark:bg-[#0c0c0c] border-2 border-neutral-200/90 dark:border-neutral-800 mb-14 card-thick">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-2">
              <span className="sana-tag">// CLINICAL STANDARDS</span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
                Engineered for Patient Comfort & Accuracy
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                By investing in cutting-edge CEREC® 3D CAD/CAM milling, digital impression wands, and low-dose sensors, we eliminate wait times, temporary crowns, and multiple visits.
              </p>
            </div>

            {/* SANA Style Metric Bars */}
            <div className="lg:col-span-7 space-y-4">
              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-neutral-900 dark:text-white mb-1.5">
                  <span>CEREC® 3D Restoration Precision</span>
                  <span className="font-mono text-shop-red">99.8%</span>
                </div>
                <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                  <div className="h-full rounded-full bg-neutral-900 dark:bg-white" style={{ width: '99.8%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-neutral-900 dark:text-white mb-1.5">
                  <span>Single-Visit Crown Completion (90 Minutes)</span>
                  <span className="font-mono text-shop-red">100%</span>
                </div>
                <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                  <div className="h-full rounded-full bg-shop-red" style={{ width: '100%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs sm:text-sm font-bold text-neutral-900 dark:text-white mb-1.5">
                  <span>Patient Satisfaction & Pain-Free Ratings</span>
                  <span className="font-mono text-shop-red">99.4%</span>
                </div>
                <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                  <div className="h-full rounded-full bg-neutral-900 dark:bg-white" style={{ width: '99.4%' }} />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* View All 16 Treatments CTA */}
        <div className="text-center">
          <button
            onClick={onViewAllServices}
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label={`Explore all ${SERVICES.length} dental procedures at Mitchell & Crosby`}
          >
            <span>Explore All {SERVICES.length} Clinical Dental Services →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
