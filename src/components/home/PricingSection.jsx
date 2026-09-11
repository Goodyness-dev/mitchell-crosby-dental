import React from 'react';
import { Check, ShieldCheck, Sparkles, CreditCard, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function PricingSection({ onOpenWizard }) {
  const plans = [
    {
      badge: 'PREVENTATIVE CARE',
      popular: false,
      title: 'Exam & Hygiene Package',
      price: '$149',
      unit: 'or 100% PPO Covered',
      desc: 'Ideal for new patients and routine biannual checkups.',
      features: [
        'Comprehensive clinical doctor examination',
        'Gentle ultrasonic scaling & polishing',
        'Full digital low-dose bitewing X-rays',
        'Oral cancer & periodontal screening',
        'Same-day insurance claim processing'
      ],
      cta: 'Schedule Checkup',
      category: 'Preventative & Hygiene'
    },
    {
      badge: 'MOST POPULAR • 1 VISIT',
      popular: true,
      title: 'CEREC® Same-Day Crown',
      price: 'Single-Visit',
      unit: 'Typical PPO Copay $200–$600',
      desc: 'Permanent custom ceramic crown precision-milled in 90 minutes.',
      features: [
        'No gaggy impression paste (3D digital scan)',
        'In-house diamond milling & glazing lab',
        'Permanent bond completed same appointment',
        'No fragile temporary crowns or 2-week waits',
        'Color matched to blend with natural teeth'
      ],
      cta: 'Book Same-Day Crown',
      category: 'Restorative & Crowns'
    },
    {
      badge: 'LIFETIME SOLUTION',
      popular: false,
      title: 'Dental Implant Restoration',
      price: 'From $99/mo',
      unit: 'With CareCredit® 0% APR Financing',
      desc: 'Permanent tooth replacement that looks and bites like natural teeth.',
      features: [
        '3D digital bone mapping & planning',
        'Medical-grade titanium or zirconia post',
        'Custom porcelain aesthetic crown',
        'Preserves jawbone density & facial structure',
        'Lifetime restoration durability'
      ],
      cta: 'Implant Consultation',
      category: 'Dental Implants'
    }
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white dark:bg-black sana-grid-bg transition-colors" aria-labelledby="pricing-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SANA Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 border-b border-neutral-200/70 dark:border-neutral-800/70 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="sana-tag">// 04 TRANSPARENT ESTIMATES & INSURANCE</span>
            <h2 id="pricing-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
              Honest Estimates, <br />
              <span className="text-stroke text-stroke-black">No Hidden Surprises.</span>
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            We work with most major PPO insurances and offer flexible financing through CareCredit® so your family gets world-class care without financial stress.
          </p>
        </div>

        {/* 3-Column SANA Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                plan.popular 
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 ring-2 ring-neutral-900 dark:ring-white shadow-xl sm:-translate-y-2' 
                  : 'bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 text-neutral-900 dark:text-white shadow-xs'
              }`}
            >
              <div>
                {/* Badge Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider ${
                    plan.popular
                      ? 'bg-shop-red text-white'
                      : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                  }`}>
                    {plan.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-editorial text-2xl font-bold mb-2">
                  {plan.title}
                </h3>
                <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${
                  plan.popular ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-600 dark:text-neutral-400'
                }`}>
                  {plan.desc}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-neutral-200/20 dark:border-neutral-800">
                  <div className="font-editorial text-3xl sm:text-4xl font-extrabold tracking-tight">
                    {plan.price}
                  </div>
                  <span className={`text-xs font-semibold mt-1 block ${
                    plan.popular ? 'text-sky-300 dark:text-sky-700' : 'text-shop-red'
                  }`}>
                    {plan.unit}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start text-xs sm:text-sm font-medium">
                      <Check className={`w-4 h-4 mr-2.5 shrink-0 mt-0.5 ${
                        plan.popular ? 'text-shop-red' : 'text-shop-red'
                      }`} />
                      <span className={plan.popular ? 'text-neutral-200 dark:text-neutral-800' : 'text-neutral-700 dark:text-neutral-300'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenWizard(plan.category, plan.title)}
                className={`w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-xs active:scale-95 ${
                  plan.popular
                    ? 'bg-white text-neutral-900 hover:bg-neutral-100 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800'
                    : 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Insurance notice footer */}
        <div className="p-6 rounded-2xl bg-neutral-100 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <CreditCard className="w-5 h-5 text-shop-red shrink-0" />
            <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
              We bill all major PPO insurance plans directly: Delta Dental, Cigna, MetLife, Guardian, Aetna, Humana & United Concordia.
            </span>
          </div>
          <button
            onClick={() => onOpenWizard()}
            className="text-xs font-bold uppercase tracking-wider text-shop-red hover:underline shrink-0 cursor-pointer"
          >
            Check Your Dental Plan Coverage →
          </button>
        </div>

      </div>
    </section>
  );
}
