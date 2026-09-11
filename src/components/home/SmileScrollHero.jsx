import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Phone, ChevronRight, ChevronDown } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function SmileScrollHero({ onOpenWizard }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaContainerRef = useRef(null);
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
        end: '+=350%', // Generous travel so it is smooth, deliberate, and not too fast
        pin: true,
        scrub: 1.5, // Smooth interpolation with inertia
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
            if (progress > 0.04) {
              scrollIndicatorRef.current.style.opacity = Math.max(0, 1 - (progress - 0.04) * 8).toString();
            } else {
              scrollIndicatorRef.current.style.opacity = '1';
            }
          }

          // Transition top headline subtly as video reaches final white screen
          if (headlineRef.current) {
            if (progress > 0.68) {
              headlineRef.current.style.opacity = Math.max(0, 1 - (progress - 0.68) * 5).toString();
            } else {
              headlineRef.current.style.opacity = '1';
            }
          }

          // Fade in and scale active booking CTA as smile / title appears
          if (ctaContainerRef.current) {
            if (progress > 0.42) {
              const ctaProgress = Math.min((progress - 0.42) / 0.25, 1);
              ctaContainerRef.current.style.opacity = ctaProgress.toString();
              ctaContainerRef.current.style.transform = `translateY(${(1 - ctaProgress) * 15}px)`;
              ctaContainerRef.current.style.pointerEvents = 'auto';
            } else {
              ctaContainerRef.current.style.opacity = '0';
              ctaContainerRef.current.style.transform = 'translateY(15px)';
              ctaContainerRef.current.style.pointerEvents = 'none';
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
      className="relative w-full h-screen overflow-hidden bg-black text-white select-none"
      aria-label="Mitchell and Crosby Smile Transformation"
    >
      {/* Full-Screen Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src="/A_cinematic_second_beauty_ad.mp4"
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Subtle dark vignette overlay to preserve text legibility over bright frames */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      </div>

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pointer-events-none">
        
        {/* Top Headline & Branding */}
        <div 
          ref={headlineRef}
          className="max-w-4xl mx-auto text-center space-y-3 transition-opacity duration-300 pt-4"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>// 01 ESTABLISHED 1953 • CASA GRANDE, AZ</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Compassionate Family Care, <br />
            <span className="text-stroke" style={{ WebkitTextStroke: '1.5px #ffffff' }}>Modern Radiant Smiles.</span>
          </h1>

          <p className="text-xs sm:text-sm text-neutral-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] max-w-xl mx-auto leading-relaxed font-medium">
            Casa Grande's trusted dental home for over 70 years. Scroll down to watch our signature single-visit smile transformation unfold.
          </p>
        </div>

        {/* Center / Lower Third Interactive Action Buttons (Reveals on Smile Reveal) */}
        <div 
          ref={ctaContainerRef}
          className="max-w-xl mx-auto text-center space-y-3.5 opacity-0 transform translate-y-4 transition-all duration-300 pointer-events-none"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pointer-events-auto">
            <button
              onClick={() => onOpenWizard()}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-2xl border border-white/25 active:scale-95 cursor-pointer flex items-center justify-center space-x-2.5"
              aria-label="Book Smile Appointment"
            >
              <Sparkles className="w-4 h-4 text-shop-red" />
              <span>Book Your Smile Appointment</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/95 hover:bg-white text-neutral-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-2xl transition flex items-center justify-center space-x-2 active:scale-95"
            >
              <Phone className="w-4 h-4 text-shop-red" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          <div className="inline-flex items-center justify-center space-x-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-xs text-neutral-200 font-medium">
            <div className="flex text-amber-400 text-xs">
              {'★★★★★'.split('').map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <span>5.0 Google Rating • Over 70 Years Trusted in Casa Grande</span>
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div 
          ref={scrollIndicatorRef}
          className="flex flex-col items-center space-y-1 text-[11px] uppercase tracking-[0.25em] font-bold text-neutral-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pb-2 transition-opacity duration-300"
        >
          <span>Scroll to reveal smile</span>
          <ChevronDown className="w-4 h-4 text-white animate-bounce" />
        </div>

      </div>
    </section>
  );
}
