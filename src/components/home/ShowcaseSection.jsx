import React from 'react';
import { Sparkles, Camera, ShieldCheck, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

const SHOWCASE_ITEMS = [
  {
    image: '/images/waiting-room.jpg',
    category: 'Patient Experience',
    title: 'Comfort Bays & Calm Atmosphere',
    description: 'Designed from the ground up to ease dental anxiety with warm hospitality and relaxing treatment operatories.',
  },
  {
    image: '/images/card-1.jpg',
    category: 'Restorative Tech',
    title: 'In-House CEREC® 3D Milling Lab',
    description: 'Custom all-ceramic crowns designed digitally and precision-milled while you relax in under 90 minutes.',
  },
  {
    image: '/images/storefront.jpg',
    category: 'Heritage Facility',
    title: '721 N Olive Ave Practice',
    description: 'A landmark dental destination in historic Casa Grande, continually modernized with cutting-edge clinical tools.',
  },
  {
    image: '/images/card-3.jpg',
    category: 'Clinical Sterilization',
    title: 'Advanced Operatory Suites',
    description: 'Hospital-grade sterilization standards, digital low-dose sensors, and ergonomic comfort chairs for gentle visits.',
  }
];

export default function ShowcaseSection({ onOpenWizard }) {
  return (
    <section className="py-20 sm:py-28 bg-neutral-50/50 dark:bg-black sana-grid-bg transition-colors" aria-labelledby="showcase-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SANA Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-neutral-200/70 dark:border-neutral-800/70 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="sana-tag">// 03 PRACTICE SPACES & TECHNOLOGY</span>
            <h2 id="showcase-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Inside Casa Grande's <br />
              <span className="text-stroke text-stroke-black">Premier Practice.</span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            Tour our modern clinical facility at 721 N Olive Ave, combining 70+ years of family heritage with the latest in digital dentistry.
          </p>
        </div>

        {/* Gallery Grid - SANA Card Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SHOWCASE_ITEMS.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => onOpenWizard()}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container with SANA rounded corners */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-black/90 text-neutral-900 dark:text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-neutral-900 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-200 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Meta Footer */}
              <div className="p-5 flex items-center justify-between text-xs font-semibold text-neutral-600 dark:text-neutral-400">
                <span className="flex items-center space-x-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-shop-red" />
                  <span>Mitchell & Crosby Dentistry</span>
                </span>
                <span className="group-hover:text-shop-red font-bold uppercase tracking-wider transition-colors">
                  Request Tour / Appointment →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
