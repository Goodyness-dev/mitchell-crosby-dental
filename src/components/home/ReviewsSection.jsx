import React from 'react';
import { Star } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function ReviewsSection({ onOpenWizard }) {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-stone-50 dark:bg-black transition-colors" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 id="reviews-heading" className="text-3xl sm:text-5xl font-black font-heading text-gray-900 dark:text-white tracking-tight">
            What Our Patients Say
          </h2>
          <div className="flex items-center justify-center space-x-2.5 mt-3 sm:mt-4">
            <div className="flex text-amber-500" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-500" aria-hidden="true" />
              ))}
            </div>
            <span className="text-gray-700 dark:text-neutral-200 text-base sm:text-lg font-bold">
              5.0 Star Rating on Google Reviews
            </span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BUSINESS_INFO.reviews.map((rev, idx) => {
            const ratingCount = rev.rating || rev.stars || 5;
            const commentText = rev.comment || rev.text;
            const locationText = rev.location || rev.city || 'Casa Grande, AZ';
            const sourceText = rev.source || 'Google Review';

            return (
              <article
                key={idx}
                className="bg-white dark:bg-[#0c0c0c] border border-gray-200 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Stars + Source */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex text-amber-500" aria-label={`${ratingCount} out of 5 stars`}>
                      {[...Array(ratingCount)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-500" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-neutral-300 bg-gray-100 dark:bg-[#161616] border border-gray-200 dark:border-neutral-800 px-2.5 py-1 rounded-lg">
                      {sourceText}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-700 dark:text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 italic font-normal">
                    "{commentText}"
                  </p>
                </div>

                {/* Author */}
                <div className="pt-4 border-t border-gray-100 dark:border-neutral-800 flex justify-between items-center">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{rev.author}</h3>
                    <span className="text-gray-500 dark:text-neutral-400 text-xs">{locationText}</span>
                  </div>
                  <span className="text-gray-400 dark:text-neutral-500 text-xs">{rev.date}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => onOpenWizard()}
            className="px-8 py-4 rounded-xl bg-shop-red hover:bg-shop-redHover text-white font-bold text-base sm:text-lg transition-all shadow-md active:scale-95 cursor-pointer"
            aria-label="Schedule your dental visit today"
          >
            Schedule Your Dental Visit Today
          </button>
        </div>
      </div>
    </section>
  );
}
