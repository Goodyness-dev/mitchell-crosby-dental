import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, Phone, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function SmileScrollHero({ onOpenWizard }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const mouthWrapperRef = useRef(null);
  const upperLipRef = useRef(null);
  const lowerLipRef = useRef(null);
  const teethRef = useRef(null);
  const sparkleRef = useRef(null);
  const ctaRevealRef = useRef(null);
  const headlineRef = useRef(null);
  const scrollHintRef = useRef(null);

  useEffect(() => {
    // Ensure video plays smoothly
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may need user interaction on some mobile browsers
      });
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=180%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Phase 1: Scroll starts (0 -> 45%) - Lips part, revealing teeth
      tl.to(upperLipRef.current, {
        yPercent: -100,
        ease: 'power1.inOut',
        duration: 1,
      }, 0)
      .to(lowerLipRef.current, {
        yPercent: 100,
        ease: 'power1.inOut',
        duration: 1,
      }, 0)
      .to(teethRef.current, {
        scale: 1.05,
        ease: 'power1.out',
        duration: 1,
      }, 0)
      .to(scrollHintRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.25,
      }, 0);

      // Phase 2: Full Reveal (45% -> 65%) - Teeth shine / sparkle flare and CTA reveal
      tl.fromTo(sparkleRef.current,
        { opacity: 0, scale: 0, rotation: -45 },
        { opacity: 1, scale: 1.35, rotation: 45, duration: 0.35, ease: 'back.out(2)' },
        0.45
      )
      .to(sparkleRef.current, {
        opacity: 0,
        scale: 0.7,
        rotation: 90,
        duration: 0.25,
      }, 0.7)
      .fromTo(ctaRevealRef.current,
        { opacity: 0, y: 30, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'power2.out' },
        0.48
      );

      // Phase 3: Scroll further (75% -> 100%) - Fade out teeth & hero elements for next section
      tl.to([mouthWrapperRef.current, ctaRevealRef.current, headlineRef.current], {
        opacity: 0,
        scale: 0.95,
        y: -35,
        duration: 0.45,
        ease: 'power2.in',
      }, 0.78);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-neutral-950 text-white flex flex-col justify-between"
      aria-label="Interactive Smile Reveal Experience"
    >
      {/* Background Cinematic Video with Dark Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/A_cinematic_second_beauty_ad.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25 dark:opacity-20 scale-105 filter blur-[0.3px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/60 to-neutral-950" />
        <div className="absolute inset-0 sana-grid-bg opacity-30" />
      </div>

      {/* Top Headline Content */}
      <div 
        ref={headlineRef} 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 text-center space-y-3"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>// ESTABLISHED 1953 • CASA GRANDE, AZ</span>
        </div>

        <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          Compassionate Family Care, <br />
          <span className="text-stroke" style={{ WebkitTextStroke: '1.5px #ffffff' }}>Modern Radiant Smiles.</span>
        </h1>

        <p className="text-xs sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Single-visit CEREC® crowns, 3D dental implants & gentle cleanings in historic Casa Grande.
        </p>
      </div>

      {/* Interactive Centerpiece: Closed Mouth -> Parting Lips -> Teeth Reveal */}
      <div 
        ref={mouthWrapperRef}
        className="relative z-10 w-full max-w-xl mx-auto px-4 flex flex-col items-center justify-center my-auto"
      >
        <div className="relative w-full aspect-[16/10] max-h-[340px] flex items-center justify-center">
          
          {/* SVG Illustration Container */}
          <svg
            viewBox="0 0 700 440"
            className="w-full h-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] select-none"
            style={{ overflow: 'visible' }}
          >
            <defs>
              {/* Natural Upper Lip Gradient */}
              <linearGradient id="upperLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d94668" />
                <stop offset="40%" stopColor="#be123c" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>

              {/* Natural Lower Lip Gradient */}
              <linearGradient id="lowerLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#881337" />
                <stop offset="35%" stopColor="#be123c" />
                <stop offset="70%" stopColor="#e11d48" />
                <stop offset="100%" stopColor="#fb7185" />
              </linearGradient>

              {/* Teeth Pearlescent Enamel Gradient */}
              <linearGradient id="teethGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="75%" stopColor="#f8fafc" />
                <stop offset="100%" stopColor="#e2e8f0" />
              </linearGradient>

              {/* Sparkle Star Gradient */}
              <radialGradient id="sparkleGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="40%" stopColor="#e0f2fe" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </radialGradient>

              {/* Glow Filter */}
              <filter id="teethGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* LAYER 1: Deep Oral Cavity & Gums Background */}
            <rect x="180" y="160" width="340" height="120" rx="30" fill="#0d0407" />
            <path
              d="M 190 200 C 260 170, 440 170, 510 200 L 510 230 C 440 215, 260 215, 190 230 Z"
              fill="#9f1239"
              opacity="0.8"
            />

            {/* LAYER 2: Pristine Teeth Set (Revealed as lips part) */}
            <g ref={teethRef} id="teeth-group" className="origin-center">
              {/* Upper Teeth Arch */}
              {/* Central Incisor Left */}
              <path
                d="M 315 190 C 315 185, 348 185, 348 190 L 348 248 C 348 252, 318 252, 315 248 Z"
                fill="url(#teethGrad)"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {/* Central Incisor Right */}
              <path
                d="M 352 190 C 352 185, 385 185, 385 190 L 385 248 C 382 252, 352 252, 352 248 Z"
                fill="url(#teethGrad)"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {/* Lateral Incisor Left */}
              <path
                d="M 282 192 C 282 187, 312 187, 312 192 L 312 245 C 310 249, 284 249, 282 245 Z"
                fill="url(#teethGrad)"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {/* Lateral Incisor Right */}
              <path
                d="M 388 192 C 388 187, 418 187, 418 192 L 418 245 C 416 249, 390 249, 388 245 Z"
                fill="url(#teethGrad)"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {/* Canine Left */}
              <path
                d="M 252 196 C 252 191, 280 191, 280 196 L 280 242 C 275 248, 255 246, 252 240 Z"
                fill="url(#teethGrad)"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {/* Canine Right */}
              <path
                d="M 420 196 C 420 191, 448 191, 448 196 L 448 240 C 445 246, 425 248, 420 242 Z"
                fill="url(#teethGrad)"
                stroke="#cbd5e1"
                strokeWidth="1"
              />
              {/* Premolars Left */}
              <path
                d="M 224 202 C 224 198, 250 198, 250 202 L 250 236 L 224 233 Z"
                fill="#e2e8f0"
                stroke="#94a3b8"
                strokeWidth="1"
              />
              {/* Premolars Right */}
              <path
                d="M 450 202 C 450 198, 476 198, 476 202 L 476 233 L 450 236 Z"
                fill="#e2e8f0"
                stroke="#94a3b8"
                strokeWidth="1"
              />

              {/* Lower Teeth Subtle Arch */}
              <path
                d="M 270 252 C 310 255, 390 255, 430 252 L 430 270 C 390 273, 310 273, 270 270 Z"
                fill="#f1f5f9"
                stroke="#cbd5e1"
                strokeWidth="0.8"
                opacity="0.9"
              />

              {/* Sparkle / Shine Flare on Center Teeth */}
              <g 
                ref={sparkleRef} 
                id="sparkle-flare" 
                className="opacity-0 origin-center"
                style={{ transformBox: 'fill-box' }}
              >
                <polygon
                  points="368,212 372,228 388,232 372,236 368,252 364,236 348,232 364,228"
                  fill="url(#sparkleGrad)"
                  filter="url(#teethGlow)"
                />
                <circle cx="368" cy="232" r="5" fill="#ffffff" filter="url(#teethGlow)" />
                <circle cx="368" cy="232" r="2" fill="#ffffff" />
              </g>
            </g>

            {/* LAYER 3: Upper Lip (Animates translateY -100%) */}
            <g ref={upperLipRef} id="upper-lip-group">
              <path
                d="M 160 220 
                   C 230 185, 290 155, 335 168 
                   C 345 171, 350 178, 350 178 
                   C 350 178, 355 171, 365 168 
                   C 410 155, 470 185, 540 220 
                   C 460 225, 390 226, 350 226 
                   C 310 226, 240 225, 160 220 Z"
                fill="url(#upperLipGrad)"
              />
              {/* Upper lip specular shine highlight */}
              <path
                d="M 280 180 C 310 168, 330 172, 335 176"
                stroke="#fda4af"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M 365 176 C 370 172, 390 168, 420 180"
                stroke="#fda4af"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.6"
              />
            </g>

            {/* LAYER 4: Lower Lip (Animates translateY 100%) */}
            <g ref={lowerLipRef} id="lower-lip-group">
              <path
                d="M 160 220 
                   C 240 225, 310 226, 350 226 
                   C 390 226, 460 225, 540 220 
                   C 480 275, 420 310, 350 310 
                   C 280 310, 220 275, 160 220 Z"
                fill="url(#lowerLipGrad)"
              />
              {/* Lower lip central glossy highlight */}
              <ellipse
                cx="350"
                cy="265"
                rx="70"
                ry="18"
                fill="#fda4af"
                opacity="0.35"
                filter="url(#teethGlow)"
              />
            </g>
          </svg>

        </div>

        {/* Scroll Instruction Hint (Fades out immediately on scroll) */}
        <div 
          ref={scrollHintRef}
          className="flex items-center space-x-2 text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mt-2 animate-bounce cursor-pointer"
          onClick={() => {
            window.scrollBy({ top: 350, behavior: 'smooth' });
          }}
        >
          <span>Scroll to Reveal Smile</span>
          <ChevronDown className="w-4 h-4 text-sky-400" />
        </div>
      </div>

      {/* Hero CTA & Trust Proof (Fades in when teeth are revealed) */}
      <div 
        ref={ctaRevealRef}
        className="relative z-20 max-w-xl mx-auto px-4 pb-12 sm:pb-16 text-center space-y-4 opacity-0 pointer-events-auto"
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={() => onOpenWizard()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 font-extrabold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-xl shadow-sky-500/20 active:scale-95 cursor-pointer flex items-center justify-center space-x-2.5"
          >
            <Sparkles className="w-4 h-4 text-shop-red" />
            <span>Book Your Smile Appointment</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-white font-bold text-xs sm:text-sm uppercase tracking-wider border border-neutral-700 transition flex items-center justify-center space-x-2 active:scale-95"
          >
            <Phone className="w-4 h-4 text-shop-red" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <div className="flex items-center justify-center space-x-3 text-xs text-neutral-400 font-medium pt-1">
          <div className="flex text-amber-400 text-sm">
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
