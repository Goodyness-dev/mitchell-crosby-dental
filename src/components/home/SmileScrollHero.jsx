import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Phone, ChevronRight, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function SmileScrollHero({ onOpenWizard }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoFrameRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;

    let scrubTrigger;

    const setupScrollAnimation = () => {
      const duration = video.duration || 10.006;
      video.currentTime = 0;

      // GSAP ScrollTrigger to smoothly scrub video currentTime across a generous scroll distance
      scrubTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=340%', // Generous travel so the reveal is smooth, deliberate, and NOT too fast
        pin: true,
        scrub: 1.5, // Buttery smooth interpolation with inertia
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          // Scrub video playback seamlessly
          if (video && video.duration && !video.seeking) {
            const targetTime = Math.min(progress * video.duration, video.duration - 0.05);
            if (Math.abs(video.currentTime - targetTime) > 0.03) {
              video.currentTime = targetTime;
            }
          }

          // Fade out scroll indicator as user begins scrolling
          if (scrollIndicatorRef.current) {
            if (progress > 0.05) {
              scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - (progress - 0.05) * 8).toString();
            } else {
              scrollIndicatorRef.current.style.opacity = '1';
            }
          }
        },
      });
    };

    if (video.readyState >= 1) {
      setupScrollAnimation();
    } else {
      video.addEventListener('loadedmetadata', setupScrollAnimation);
    }

    return () => {
      if (scrubTrigger) scrubTrigger.kill();
      video.removeEventListener('loadedmetadata', setupScrollAnimation);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-neutral-50 dark:bg-[#080808] text-neutral-900 dark:text-white flex flex-col justify-between py-6 sm:py-8 overflow-hidden sana-grid-bg transition-colors select-none"
      aria-label="Mitchell and Crosby Smile Transformation"
    >
      {/* Editorial Headline Header */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-neutral-200/80 dark:bg-white/10 backdrop-blur-md border border-neutral-300/80 dark:border-white/15 text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-800 dark:text-sky-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>// 01 ESTABLISHED 1953 • CASA GRANDE, AZ</span>
        </div>

        <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-neutral-950 dark:text-white">
          Compassionate Family Care, <br />
          <span className="text-stroke">Modern Radiant Smiles.</span>
        </h1>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Casa Grande's trusted dental home for over 70 years. Scroll down to watch our signature single-visit smile transformation unfold.
        </p>
      </div>

      {/* Embedded High-Definition Video Centerpiece (Clean, No Player Buttons, Part of Website) */}
      <div className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6 my-auto flex flex-col items-center">
        <div 
          ref={videoFrameRef}
          className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-neutral-200/90 dark:border-neutral-800 shadow-[0_20px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-white dark:bg-neutral-950"
        >
          {/* Crystal Clear High-Definition Video */}
          <video
            ref={videoRef}
            src="/A_cinematic_second_beauty_ad.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-100 filter contrast-[1.04] brightness-[1.01]"
          />
        </div>

        {/* Scroll Instruction Indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="flex items-center space-x-2 text-[11px] uppercase tracking-[0.22em] font-bold text-neutral-400 dark:text-neutral-500 mt-3 transition-opacity duration-300"
        >
          <span>Scroll to reveal smile</span>
          <ChevronDown className="w-3.5 h-3.5 text-shop-red animate-bounce" />
        </div>
      </div>

      {/* Website Action Buttons & Social Proof */}
      <div className="relative z-20 max-w-xl mx-auto px-4 pt-2 pb-4 text-center space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onOpenWizard()}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-lg active:scale-95 cursor-pointer flex items-center justify-center space-x-2.5"
            aria-label="Book Smile Appointment"
          >
            <Sparkles className="w-4 h-4 text-shop-red" />
            <span>Book Your Smile Appointment</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white dark:bg-neutral-900/90 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-300 dark:border-neutral-700 transition flex items-center justify-center space-x-2 active:scale-95"
          >
            <Phone className="w-4 h-4 text-shop-red" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-3 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
          <div className="flex text-amber-500 text-xs">
            {'★★★★★'.split('').map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <span>5.0 Google Rating • Over 70 Years Trusted in Casa Grande</span>
        </div>
      </div>
    </section>
  );
}
