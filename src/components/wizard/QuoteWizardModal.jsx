import React, { useState, useEffect } from 'react';
import { submitQuoteRequest } from '../../services/quoteService';

export default function QuoteWizardModal({ isOpen, onClose, initialCategory = null, initialService = null }) {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  const [formData, setFormData] = useState({
    serviceCategory: 'Same Day Crowns',
    detailedService: 'CEREC Single-Visit Ceramic Crown',
    urgency: 'Next available appointment',
    patientType: 'New Patient (First visit)',
    insuranceStatus: 'Has Dental PPO Insurance',
    details: '',
    location: 'Casa Grande, AZ',
    email: '',
    name: '',
    phone: '',
  });

  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (initialCategory) {
        setFormData(prev => ({
          ...prev,
          serviceCategory: initialCategory,
          detailedService: initialService || 'Comprehensive Dental Consultation'
        }));
      }
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setCurrentStep(1);
        setSubmissionResult(null);
        setErrorMsg('');
      }, 300);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, initialCategory, initialService]);

  if (!isOpen) return null;

  const dentalCategories = [
    {
      id: 'Same Day Crowns',
      tag: '// 01',
      title: 'CEREC® Same Day Crowns',
      desc: '1-visit permanent ceramic crown. No temporary cap, no 2-week wait.',
      defaultService: 'CEREC Single-Visit Ceramic Crown'
    },
    {
      id: 'Dental Implants',
      tag: '// 02',
      title: 'Dental Implants & Restorations',
      desc: 'Permanent titanium tooth replacement and porcelain crown mounting.',
      defaultService: 'Dental Implant Consultation'
    },
    {
      id: 'Cosmetic Dentistry',
      tag: '// 03',
      title: 'Cosmetic Veneers & Whitening',
      desc: 'Porcelain veneers, in-office LED whitening & Omnichroma fillings.',
      defaultService: 'Porcelain Veneers / Smile Makeover'
    },
    {
      id: 'Family & Cleanings',
      tag: '// 04',
      title: 'Family & Preventative Care',
      desc: 'Gentle cleanings, exams, digital X-rays, and pediatric sealants.',
      defaultService: 'Routine Dental Exam & Cleaning'
    },
    {
      id: 'Emergency Relief',
      tag: '// 05',
      title: 'Emergency Toothache & Extractions',
      desc: 'Same-day relief for severe pain, cracked teeth, or abscesses.',
      defaultService: 'Emergency Toothache / Infection Relief'
    },
    {
      id: 'Dentures & Partials',
      tag: '// 06',
      title: 'Dentures & Full Reconstruction',
      desc: 'Custom comfortable full, partial, and implant-stabilized dentures.',
      defaultService: 'Custom Full or Partial Dentures'
    }
  ];

  const commonSymptoms = [
    'Severe toothache or throbbing sensitivity',
    'Cracked, broken, or chipped tooth',
    'Lost crown or missing filling',
    'Missing tooth / interested in dental implants',
    'Stained teeth / interested in cosmetic veneers or whitening',
    'Overdue for 6-month cleaning and comprehensive checkup',
    'Loose or uncomfortable existing dentures'
  ];

  const urgencyLevels = [
    {
      id: 'emergency',
      label: '🚨 Severe Pain / Same-Day Emergency',
      sub: 'Need urgent dental relief as soon as possible today',
      val: 'Emergency — Need Immediate Relief'
    },
    {
      id: 'urgent',
      label: '⚠️ Priority Visit (Next 24–48 Hours)',
      sub: 'Need an appointment within 1 to 2 business days',
      val: 'Priority — Next 24 to 48 Hours'
    },
    {
      id: 'routine',
      label: '📅 Routine / Flexible Scheduling',
      sub: 'Upcoming preventative visit or planned consultation',
      val: 'Flexible / Next Available Appointment'
    }
  ];

  const patientTypes = [
    { label: 'New Patient (First Visit)', desc: 'We welcome you to our Casa Grande dental family!' },
    { label: 'Returning Patient', desc: 'Welcome back! We look forward to seeing you again.' },
    { label: 'Child / Pediatric Family Member', desc: 'Gentle, kid-friendly introductory dental care.' }
  ];

  const handleNext = () => {
    setErrorMsg('');
    if (currentStep === 6) {
      handleSubmit();
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setErrorMsg('');
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please provide your full name, phone number, and email.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        serviceCategory: formData.serviceCategory,
        detailedService: formData.detailedService,
        timeline: formData.urgency,
        modelAndYear: `${formData.patientType} • ${formData.insuranceStatus}`,
        location: formData.location || 'Casa Grande, AZ',
        details: `${formData.details || 'No additional notes.'}\nSymptoms/Notes: ${formData.urgency}`
      };

      const res = await submitQuoteRequest(payload);
      setSubmissionResult(res);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit appointment request. Please call us directly at (520) 836-7111.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 rounded-3xl shadow-2xl overflow-hidden my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-neutral-50 border-b border-neutral-200 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-shop-light border border-shop-border text-[10px] font-mono font-bold text-shop-red uppercase tracking-wider mb-1">
              Step {currentStep} of {totalSteps}
            </div>
            <h3 className="text-base sm:text-lg font-heading font-black text-neutral-900 leading-tight">
              {currentStep === 1 && "What dental care can we help you with?"}
              {currentStep === 2 && "Select your specific treatment interest"}
              {currentStep === 3 && "How quickly do you need to be seen?"}
              {currentStep === 4 && "Tell us about yourself & insurance"}
              {currentStep === 5 && "Any symptoms or specific requests?"}
              {currentStep === 6 && "Where should we send your appointment confirmation?"}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200/70 transition font-mono text-sm cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-neutral-100 h-1">
          <div 
            className="bg-shop-red h-1 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[65vh] overflow-y-auto">
          {submissionResult ? (
            /* Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-xs text-xl font-bold font-mono">
                ✓
              </div>
              <h4 className="text-2xl font-black font-heading text-neutral-900">
                Appointment Request Received
              </h4>
              <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Dr. Mitchell, Dr. Crosby, and our patient care team have received your request for <strong>{formData.detailedService}</strong>. We will contact you at <strong>{formData.phone}</strong> shortly to confirm your visit time.
              </p>
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 max-w-sm mx-auto space-y-1 text-left font-mono">
                <p><span className="text-neutral-400 font-sans">Location:</span> 721 N Olive Ave, Casa Grande, AZ 85122</p>
                <p><span className="text-neutral-400 font-sans">Office Phone:</span> (520) 836-7111</p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-neutral-800 transition cursor-pointer"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <>
              {errorMsg && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                  <span className="font-bold shrink-0">!</span>
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* STEP 1: Care Category */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dentalCategories.map((cat) => {
                    const isSelected = formData.serviceCategory === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            serviceCategory: cat.id,
                            detailedService: cat.defaultService
                          }));
                          setCurrentStep(2);
                        }}
                        className={`p-4 rounded-2xl border text-left transition flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? 'border-shop-red bg-shop-light/50 ring-2 ring-shop-red/20'
                            : 'border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-[11px] font-bold text-shop-red">{cat.tag}</span>
                          <span className="text-xs text-neutral-400 font-mono">→</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-neutral-900 text-sm">{cat.title}</h4>
                          <p className="text-xs text-neutral-500 mt-0.5 leading-snug">{cat.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 2: Detailed Service */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs text-neutral-500">
                    <span className="font-mono text-shop-red">// CATEGORY:</span>
                    <strong className="text-neutral-900">{formData.serviceCategory}</strong>
                  </div>
                  <div className="space-y-2">
                    {[
                      'CEREC Single-Visit Ceramic Crown',
                      'Dental Implant Consultation & Placement',
                      'Implant-Supported Crown / Restoration',
                      'Custom Porcelain Veneers',
                      'Professional In-Office Teeth Whitening',
                      'Omnichroma Invisible Composite Fillings',
                      'Comprehensive Dental Checkup & Cleaning',
                      'Gentle Root Canal Therapy',
                      'Emergency Toothache / Infection Relief',
                      'Gentle Tooth Extraction',
                      'Custom Full or Partial Dentures',
                      'Pediatric / Kid Dental Checkup'
                    ].map((srv) => {
                      const isSelected = formData.detailedService === srv;
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, detailedService: srv }))}
                          className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold flex items-center justify-between transition cursor-pointer ${
                            isSelected
                              ? 'border-shop-red bg-shop-light/60 text-shop-red ring-1 ring-shop-red/20'
                              : 'border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                          }`}
                        >
                          <span>{srv}</span>
                          {isSelected && <span className="font-mono text-xs font-bold text-shop-red">✓ Selected</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3: Urgency */}
              {currentStep === 3 && (
                <div className="space-y-3">
                  {urgencyLevels.map((lvl) => {
                    const isSelected = formData.urgency === lvl.val;
                    return (
                      <button
                        key={lvl.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, urgency: lvl.val }))}
                        className={`w-full p-4 rounded-2xl border text-left transition cursor-pointer ${
                          isSelected
                            ? 'border-shop-red bg-shop-light/50 ring-2 ring-shop-red/20'
                            : 'border-neutral-200 hover:bg-neutral-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                            isSelected ? 'bg-shop-red text-white border-shop-red' : 'bg-neutral-100 text-neutral-600 border-neutral-200'
                          }`}>
                            {lvl.id.toUpperCase()}
                          </span>
                          {isSelected && <span className="text-xs font-mono font-bold text-shop-red">✓</span>}
                        </div>
                        <h4 className="font-bold text-neutral-900 text-sm mt-1">{lvl.label}</h4>
                        <p className="text-xs text-neutral-500 mt-0.5">{lvl.sub}</p>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 4: Patient Status & Insurance */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-2">// PATIENT STATUS</label>
                    <div className="space-y-2">
                      {patientTypes.map((pt) => {
                        const isSelected = formData.patientType === pt.label;
                        return (
                          <button
                            key={pt.label}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, patientType: pt.label }))}
                            className={`w-full p-3.5 rounded-xl border text-left transition flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'border-shop-red bg-shop-light text-shop-red'
                                : 'border-neutral-200 hover:bg-neutral-50 text-neutral-800'
                            }`}
                          >
                            <div>
                              <span className="font-bold text-xs sm:text-sm block">{pt.label}</span>
                              <span className="text-[11px] text-neutral-500">{pt.desc}</span>
                            </div>
                            {isSelected && <span className="font-mono text-xs font-bold text-shop-red shrink-0">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-2">// PAYMENT & INSURANCE</label>
                    <select
                      value={formData.insuranceStatus}
                      onChange={(e) => setFormData(prev => ({ ...prev, insuranceStatus: e.target.value }))}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 outline-none focus:border-shop-red focus:bg-white"
                    >
                      <option value="Has Dental PPO Insurance">Has Dental PPO Insurance (Delta, Cigna, MetLife, Aetna, etc.)</option>
                      <option value="Self-Pay / Cash Patient">Self-Pay / Cash Patient (Transparent pricing)</option>
                      <option value="Interested in CareCredit / Financing">Interested in CareCredit / Monthly Financing</option>
                    </select>
                  </div>
                </div>
              )}

              {/* STEP 5: Symptoms & Notes */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      // SYMPTOMS & CONCERNS (OPTIONAL):
                    </label>
                    <div className="space-y-1.5">
                      {commonSymptoms.map((sym) => (
                        <label 
                          key={sym}
                          className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 cursor-pointer text-xs sm:text-sm text-neutral-700"
                        >
                          <input
                            type="checkbox"
                            checked={formData.details.includes(sym)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setFormData(prev => ({ ...prev, details: prev.details ? `${prev.details}, ${sym}` : sym }));
                              } else {
                                setFormData(prev => ({ ...prev, details: prev.details.replace(sym, '').replace(', ,', ',').trim() }));
                              }
                            }}
                            className="rounded text-shop-red focus:ring-shop-red w-4 h-4"
                          />
                          <span>{sym}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1">
                      // ADDITIONAL NOTES / PREFERRED TIMINGS:
                    </label>
                    <textarea
                      rows={2}
                      value={formData.details}
                      onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                      placeholder="e.g. Prefer Tuesday morning, severe sensitivity on lower molar..."
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-xs sm:text-sm text-neutral-900 outline-none focus:border-shop-red focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 6: Contact Information */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div className="p-3.5 rounded-2xl bg-shop-light/50 border border-shop-border text-xs text-neutral-700 flex items-center space-x-2.5">
                    <span className="font-mono font-bold text-shop-red text-xs">// HIPAA</span>
                    <span>Your contact details and consultation request are kept strictly confidential.</span>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="John Doe"
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 outline-none focus:border-shop-red focus:bg-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(520) 000-0000"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 outline-none focus:border-shop-red focus:bg-white"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-neutral-700 uppercase tracking-wider mb-1">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="name@email.com"
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-neutral-900 outline-none focus:border-shop-red focus:bg-white"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Controls */}
        {!submissionResult && (
          <div className="p-4 sm:p-5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 text-xs font-bold text-neutral-600 hover:text-neutral-900 rounded-xl hover:bg-neutral-200/70 transition flex items-center space-x-1 cursor-pointer"
              >
                <span>← Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-full bg-shop-red hover:bg-shop-redHover text-white text-xs sm:text-sm font-bold transition shadow-sm active:scale-95 disabled:opacity-50 cursor-pointer flex items-center space-x-1.5"
            >
              {isSubmitting ? (
                <span>Submitting request...</span>
              ) : currentStep === totalSteps ? (
                <span>Request Appointment & Estimate →</span>
              ) : (
                <span>Next →</span>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
