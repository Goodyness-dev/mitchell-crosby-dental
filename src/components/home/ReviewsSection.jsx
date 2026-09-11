import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  // Primary highlighted editorial quote
  const spotlightReview = BUSINESS_INFO.reviews[0] || {
    author: 'Maria R.',
    location: 'Casa Grande Resident',
    comment: 'Dr. Mitchell and Dr. Crosby are incredible. I needed a crown and had it completely done in one 90-minute visit with their CEREC milling lab. No temporary crown, no second visit, and completely painless!',
    date: 'Verified Patient'
  };

  const otherReviews = BUSINESS_INFO.reviews.slice(1, 4);

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white dark:bg-black sana-grid-bg transition-colors" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SANA Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 border-b border-neutral-200/70 dark:border-neutral-800/70 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="sana-tag">// 06 PATIENT EXPERIENCES & TRUST</span>
            <h2 id="reviews-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Real Smiles, <br />
              <span className="text-stroke text-stroke-black">Real Stories.</span>
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex text-amber-500 text-lg">
              {'★★★★★'.split('').map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <div className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white">
              5.0 Star Rated on Google (140+ Reviews)
            </div>
          </div>
        </div>

        {/* Signature SANA Editorial Hero Quote Block */}
        <div className="relative rounded-3xl p-9 sm:p-16 bg-neutral-100 dark:bg-neutral-900 border-2 border-neutral-200/90 dark:border-neutral-800 card-thick mb-12">
          {/* Giant decorative quotation mark */}
          <div className="font-serif text-6xl sm:text-8xl text-neutral-300 dark:text-neutral-700 leading-none select-none mb-2" aria-hidden="true">
            “
          </div>

          <p className="font-editorial text-xl sm:text-3xl lg:text-4xl font-semibold text-neutral-900 dark:text-white leading-relaxed tracking-tight mb-8">
            {spotlightReview.comment || spotlightReview.text}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-neutral-200/60 dark:border-neutral-800/80">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-sm font-editorial">
                {spotlightReview.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-editorial font-bold text-sm sm:text-base text-neutral-950 dark:text-white">
                  {spotlightReview.author}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {spotlightReview.location || 'Casa Grande, AZ'} • Verified Google Review
                </p>
              </div>
            </div>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Verified Dental Patient</span>
            </div>
          </div>
        </div>

        {/* 3 Secondary Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {otherReviews.map((rev, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-8 sm:p-9 bg-neutral-50 dark:bg-neutral-900/50 border-2 border-neutral-200/90 dark:border-neutral-800 card-thick-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-500 text-sm">
                    {'★★★★★'.split('').map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400">
                    Google Review
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-6">
                  "{rev.comment || rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-neutral-950 dark:text-white block">{rev.author}</span>
                  <span className="text-neutral-400 text-[11px]">{rev.location || 'Casa Grande, AZ'}</span>
                </div>
                <span className="text-neutral-400 text-[11px]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={() => onOpenWizard()}
            className="px-8 py-4 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Experience The Difference — Schedule Your Visit
          </button>
        </div>

      </div>
    </section>
  );
}
