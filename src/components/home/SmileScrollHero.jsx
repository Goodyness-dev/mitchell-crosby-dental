import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Phone, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function SmileScrollHero({ onOpenWizard }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const videoFrameRef = useRef(null);
  const headlineRef = useRef(null);
  const ctaRef = useRef(null);
  const progressBarRef = useRef(null);
  const scrubBadgeRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure video is paused at start so scroll controls it
    video.pause();
    video.currentTime = 0;

    let scrubTrigger;

    const setupScrollAnimation = () => {
      const duration = video.duration || 10;

      // GSAP ScrollTrigger to scrub video currentTime based on scroll position
      scrubTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=160%',
        pin: true,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          setVideoProgress(progress);

          // Scrub video playback with scroll
          if (video && video.duration && !video.seeking) {
            const targetTime = Math.min(progress * video.duration, video.duration - 0.05);
            if (Math.abs(video.currentTime - targetTime) > 0.04) {
              video.currentTime = targetTime;
            }
          }

          // Update progress bar
          if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progress * 100}%`;
          }

          // Animate CTA appearance when smile is revealed (around 35%-70% scroll)
          if (ctaRef.current) {
            if (progress > 0.35) {
              const ctaProgress = Math.min((progress - 0.35) / 0.25, 1);
              ctaRef.current.style.opacity = ctaProgress;
              ctaRef.current.style.transform = `translateY(${(1 - ctaProgress) * 20}px) scale(${0.95 + ctaProgress * 0.05})`;
            } else {
              ctaRef.current.style.opacity = 0;
              ctaRef.current.style.transform = 'translateY(20px) scale(0.95)';
            }
          }

          // Fade out slightly at the very end of pin to transition smoothly
          if (progress > 0.85) {
            const exitProgress = (progress - 0.85) / 0.15;
            if (videoFrameRef.current) {
              videoFrameRef.current.style.opacity = 1 - exitProgress * 0.4;
              videoFrameRef.current.style.transform = `scale(${1 - exitProgress * 0.05})`;
            }
          } else {
            if (videoFrameRef.current) {
              videoFrameRef.current.style.opacity = 1;
              videoFrameRef.current.style.transform = 'scale(1)';
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

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const restartVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    video.play();
    setIsPlaying(true);
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen min-h-[750px] bg-[#070707] text-white flex flex-col justify-between overflow-hidden sana-grid-bg transition-colors select-none"
      aria-label="Cinematic Smile Transformation Showcase"
    >
      {/* Top Header & Headline */}
      <div 
        ref={headlineRef}
        className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 text-center space-y-2.5"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-bold tracking-[0.2em] uppercase text-sky-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>// 01 CINEMATIC SMILE REVEAL • CASA GRANDE, AZ</span>
        </div>

        <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
          Compassionate Family Care, <br />
          <span className="text-stroke" style={{ WebkitTextStroke: '1.5px #ffffff' }}>Modern Radiant Smiles.</span>
        </h1>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
          Scroll down to watch the smile transformation unfold — single-visit CEREC® crowns & precision dental artistry.
        </p>
      </div>

      {/* Main Selling Point: Crystal-Clear Cinematic Video Showcase (NO SVGs) */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 my-auto flex flex-col items-center">
        
        <div 
          ref={videoFrameRef}
          className="relative w-full aspect-[16/9] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-neutral-700/80 shadow-[0_25px_70px_rgba(0,0,0,0.85)] bg-black group transition-transform duration-200"
        >
          {/* Crystal Clear High-Definition Video */}
          <video
            ref={videoRef}
            src="/A_cinematic_second_beauty_ad.mp4"
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center opacity-100 filter contrast-[1.05] brightness-[1.02]"
            onEnded={() => setIsPlaying(false)}
          />

          {/* Floating Subtle Status Pill */}
          <div className="absolute top-4 left-4 z-20">
            <div 
              ref={scrubBadgeRef}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold tracking-wider uppercase"
            >
              <span className={`w-2 h-2 rounded-full ${videoProgress > 0.4 ? 'bg-emerald-400' : 'bg-sky-400 animate-ping'}`} />
              <span>
                {videoProgress > 0.4 ? '✨ Radiant Smile Revealed' : 'Scroll to Scrub Smile'}
              </span>
            </div>
          </div>

          {/* Play/Pause Control overlay button */}
          <div className="absolute top-4 right-4 z-20 flex items-center space-x-2">
            <button
              onClick={togglePlayPause}
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs transition active:scale-95 cursor-pointer flex items-center space-x-1.5"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
              <span className="text-[10px] font-bold uppercase tracking-wider pr-1">
                {isPlaying ? 'Pause' : 'Play'}
              </span>
            </button>
            <button
              onClick={restartVideo}
              className="p-2.5 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs transition active:scale-95 cursor-pointer"
              aria-label="Restart video"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Interactive Scrub Progress Bar at the bottom of the video */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
            <div 
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-sky-400 via-white to-sky-300 transition-all duration-75"
              style={{ width: `${videoProgress * 100}%` }}
            />
          </div>
        </div>

      </div>

      {/* Floating Reveal CTA & Trust Proof (Reveals as smile is unveiled) */}
      <div 
        ref={ctaRef}
        className="relative z-20 max-w-xl mx-auto px-4 pb-10 sm:pb-12 text-center space-y-3.5 opacity-0 transition-all duration-300"
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

        <div className="flex items-center justify-center space-x-3 text-xs text-neutral-400 font-medium">
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
