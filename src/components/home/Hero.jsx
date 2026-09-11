import React from 'react';
import SmileScrollHero from './SmileScrollHero';
import { Sparkles, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Hero({ onOpenWizard }) {
  return (
    <div>
      {/* Pinned Interactive GSAP Scroll Lips & Teeth Reveal with Cinematic Video */}
      <SmileScrollHero onOpenWizard={onOpenWizard} />

      {/* SANA Accreditation & Clinical Standards Strip */}
      <section className="bg-white dark:bg-black py-10 border-b border-neutral-200/70 dark:border-neutral-800/70 sana-grid-bg transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-400 dark:text-neutral-500 mb-6">
            Clinical Technology Standards & Accreditations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-75 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 font-mono">ADA</span>
              <span>American Dental Association</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 font-mono">CEREC</span>
              <span>Dentsply Sirona 3D</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 font-mono">CARECREDIT</span>
              <span>Healthcare Financing</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 font-mono">OMNICHROMA</span>
              <span>Invisible Composite Fillings</span>
            </div>
            <div className="flex items-center space-x-2 font-bold text-sm tracking-wider text-neutral-700 dark:text-neutral-300">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 font-mono">GOOGLE</span>
              <span>5.0 Star Verified Rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
