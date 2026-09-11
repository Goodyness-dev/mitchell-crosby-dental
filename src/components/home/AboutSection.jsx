import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function AboutSection({ onOpenWizard, onNavigateToAbout }) {
  const doctors = [
    {
      name: 'Dr. Jeffrey Mitchell',
      title: 'DDS • Lead Dentist & CEREC Specialist',
      education: 'Univ. of Colorado / Arthur A. Dugoni School of Dentistry',
      badge: 'Casa Grande Native',
      image: '/images/dr-mitchell.jpg',
      bio: 'Carrying on his family’s multi-generational commitment to Casa Grande dental health. Specializes in single-visit CEREC® CAD/CAM crowns, implant restorations, and cosmetic smile designs.'
    },
    {
      name: 'Dr. David Crosby',
      title: 'DMD • Restorative & Cosmetic Dentist',
      education: 'Midwestern University College of Dental Medicine',
      badge: 'Se Habla Español',
      image: '/images/dr-crosby.jpg',
      bio: 'Known for his remarkably gentle bedside manner and clear patient communication. Passionate about painless dentistry, composite artistry, and preventive family care.'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0a0a0a] text-white transition-colors relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background SANA vertical lines in subtle dark mode */}
      <div className="absolute inset-0 sana-grid-bg opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SANA Dark Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-18 border-b border-neutral-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase font-bold text-neutral-400">// 05 MEET OUR DOCTORS & HERITAGE</span>
            <h2 id="about-heading" className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Dedicated To <br />
              <span className="text-stroke text-stroke-light" style={{ WebkitTextStroke: '1.5px #ffffff' }}>Your Family's Care.</span>
            </h2>
          </div>
          <p className="text-neutral-400 text-sm sm:text-base max-w-md leading-relaxed">
            Since 1953, the Mitchell & Crosby family has provided honest, gentle dental care to three generations of Casa Grande residents.
          </p>
        </div>

        {/* Doctor Profiles Grid - SANA Editorial Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {doctors.map((doc, idx) => (
            <div 
              key={idx}
              className="rounded-3xl p-7 sm:p-9 bg-neutral-950 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start shadow-xl"
            >
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border border-neutral-700">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-1.5 left-1.5 right-1.5 px-2 py-0.5 rounded text-[9px] font-extrabold uppercase tracking-wider text-center bg-black/80 backdrop-blur-xs text-white">
                  {doc.badge}
                </span>
              </div>

              <div className="space-y-3 flex-1">
                <div>
                  <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white">
                    {doc.name}
                  </h3>
                  <p className="text-xs text-shop-red font-bold uppercase tracking-wider mt-0.5">
                    {doc.title}
                  </p>
                  <p className="text-[11px] text-neutral-400 mt-1">
                    {doc.education}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {doc.bio}
                </p>

                <div className="pt-2">
                  <button
                    onClick={onOpenWizard}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-shop-red transition-colors cursor-pointer"
                  >
                    <span>Consult With {doc.name.split(' ')[1]} →</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Heritage & Founder Tribute */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl p-8 sm:p-10 bg-neutral-950 border border-neutral-800">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-bold text-sky-400 uppercase tracking-wider font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Founded In 1953</span>
            </div>
            
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
              70+ Years of Casa Grande Pride
            </h3>

            <blockquote className="border-l-2 border-shop-red pl-4 py-1 text-sm italic text-neutral-300">
              "{BUSINESS_INFO.owner.quote}"
              <footer className="text-xs font-bold text-shop-red mt-2 not-italic">
                — {BUSINESS_INFO.owner.name}
              </footer>
            </blockquote>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Our roots run deep in Pinal County. When Dr. Franklin Mitchell opened our doors over seven decades ago, he pledged to treat every patient with the dignity and honesty of a neighbor. Today, that legacy continues with the latest digital dental breakthroughs.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-neutral-800 pt-6 lg:pt-0 lg:pl-8">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-neutral-400 mb-4">
              Historical Timeline
            </h4>
            <div className="space-y-4 mb-6">
              {BUSINESS_INFO.history.map((h, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <span className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 font-mono text-xs font-bold text-shop-red shrink-0">
                    {h.year}
                  </span>
                  <div>
                    <h5 className="font-bold text-xs sm:text-sm text-white">{h.title}</h5>
                    <p className="text-[11px] sm:text-xs text-neutral-400 mt-0.5 leading-relaxed">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {onNavigateToAbout && (
              <div className="pt-2">
                <button
                  onClick={onNavigateToAbout}
                  className="px-6 py-3 rounded-full bg-white text-neutral-950 hover:bg-neutral-200 text-xs font-bold uppercase tracking-wider transition flex items-center space-x-2 cursor-pointer"
                >
                  <span>Learn More About Our Practice & History →</span>
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
