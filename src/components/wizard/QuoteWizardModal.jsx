import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  MapPin, 
  Mail, 
  User, 
  Phone, 
  AlertCircle, 
  Loader2,
  CheckCircle2,
  Sparkles,
  Smile,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Calendar
} from 'lucide-react';
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
      title: 'CEREC® Same Day Crowns',
      desc: '1-visit permanent ceramic crown. No temporary cap, no 2-week wait.',
      icon: Sparkles,
      defaultService: 'CEREC Single-Visit Ceramic Crown'
    },
    {
      id: 'Dental Implants',
      title: 'Dental Implants & Restorations',
      desc: 'Permanent titanium tooth replacement and porcelain crown mounting.',
      icon: ShieldCheck,
      defaultService: 'Dental Implant Consultation'
    },
    {
      id: 'Cosmetic Dentistry',
      title: 'Cosmetic Veneers & Whitening',
      desc: 'Porcelain veneers, in-office LED whitening & Omnichroma fillings.',
      icon: Smile,
      defaultService: 'Porcelain Veneers / Smile Makeover'
    },
    {
      id: 'Family & Cleanings',
      title: 'Family & Preventative Care',
      desc: 'Gentle cleanings, exams, digital X-rays, and pediatric sealants.',
      icon: HeartHandshake,
      defaultService: 'Routine Dental Exam & Cleaning'
    },
    {
      id: 'Emergency Relief',
      title: 'Emergency Toothache & Extractions',
      desc: 'Same-day relief for severe pain, cracked teeth, or abscesses.',
      icon: AlertCircle,
      defaultService: 'Emergency Toothache / Infection Relief'
    },
    {
      id: 'Dentures & Partials',
      title: 'Dentures & Full Reconstruction',
      desc: 'Custom comfortable full, partial, and implant-stabilized dentures.',
      icon: Smile,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden my-auto transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-shop-light border border-shop-border text-[11px] font-bold text-shop-red uppercase tracking-wider mb-1">
              Step {currentStep} of {totalSteps}
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-black text-slate-900">
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
            className="p-2 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-200 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-100 h-1.5">
          <div 
            className="bg-shop-red h-1.5 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[65vh] overflow-y-auto">
          {submissionResult ? (
            /* Success State */
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black font-heading text-slate-900">
                Appointment Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>! Dr. Mitchell, Dr. Crosby, and our patient care team have received your request for <strong>{formData.detailedService}</strong>. We will contact you at <strong>{formData.phone}</strong> shortly to confirm your visit time.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 max-w-sm mx-auto space-y-1">
                <p>📍 721 N Olive Ave, Casa Grande, AZ 85122</p>
                <p>📞 Urgent questions? Call our office at <strong>(520) 836-7111</strong></p>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition"
              >
                Close & Return to Site
              </button>
            </div>
          ) : (
            <>
              {errorMsg && (
                <div className="mb-5 p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* STEP 1: Care Category */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dentalCategories.map((cat) => {
                    const Icon = cat.icon;
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
                        className={`p-4 rounded-2xl border text-left transition flex items-start space-x-3.5 ${
                          isSelected
                            ? 'border-shop-red bg-shop-light/50 ring-2 ring-shop-red/20'
                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`p-2.5 rounded-xl shrink-0 ${isSelected ? 'bg-shop-red text-white' : 'bg-slate-100 text-slate-700'}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{cat.title}</h4>
                          <p className="text-xs text-slate-500 mt-0.5 leading-snug">{cat.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 2: Detailed Service */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-500 font-medium">Selected: <strong className="text-slate-900">{formData.serviceCategory}</strong></p>
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
                    ].map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, detailedService: srv }))}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold flex items-center justify-between transition ${
                          formData.detailedService === srv
                            ? 'border-shop-red bg-shop-light/60 text-shop-red ring-1 ring-shop-red/20'
                            : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <span>{srv}</span>
                        {formData.detailedService === srv && <Check className="w-4 h-4 text-shop-red" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Urgency */}
              {currentStep === 3 && (
                <div className="space-y-3">
                  {urgencyLevels.map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, urgency: lvl.val }))}
                      className={`w-full p-4 rounded-2xl border text-left transition ${
                        formData.urgency === lvl.val
                          ? 'border-shop-red bg-shop-light/50 ring-2 ring-shop-red/20'
                          : 'border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <h4 className="font-bold text-slate-900 text-sm">{lvl.label}</h4>
                      <p className="text-xs text-slate-500 mt-1">{lvl.sub}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* STEP 4: Patient Status & Insurance */}
              {currentStep === 4 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Patient Status</label>
                    <div className="space-y-2">
                      {patientTypes.map((pt) => (
                        <button
                          key={pt.label}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, patientType: pt.label }))}
                          className={`w-full p-3.5 rounded-xl border text-left transition flex items-center justify-between ${
                            formData.patientType === pt.label
                              ? 'border-shop-red bg-shop-light text-shop-red'
                              : 'border-slate-200 hover:bg-slate-50 text-slate-800'
                          }`}
                        >
                          <div>
                            <span className="font-bold text-xs sm:text-sm block">{pt.label}</span>
                            <span className="text-[11px] text-slate-500">{pt.desc}</span>
                          </div>
                          {formData.patientType === pt.label && <Check className="w-4 h-4 text-shop-red shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Payment & Insurance Method</label>
                    <select
                      value={formData.insuranceStatus}
                      onChange={(e) => setFormData(prev => ({ ...prev, insuranceStatus: e.target.value }))}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
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
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Check any symptoms you're currently experiencing (optional):
                    </label>
                    <div className="space-y-1.5">
                      {commonSymptoms.map((sym) => (
                        <label 
                          key={sym}
                          className="flex items-center space-x-2.5 p-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 cursor-pointer text-xs sm:text-sm text-slate-700"
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
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Additional Notes or Preferred Days:
                    </label>
                    <textarea
                      rows={2}
                      value={formData.details}
                      onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                      placeholder="e.g. Prefer Tuesday morning, severe pain on lower molar..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs sm:text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
                    />
                  </div>
                </div>
              )}

              {/* STEP 6: Contact Information */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-shop-light/50 border border-shop-border text-xs text-slate-700 flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-shop-red shrink-0" />
                    <span>Your personal health and contact information is kept 100% confidential and HIPAA compliant.</span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          placeholder="(520) 000-0000"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="name@email.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer Controls */}
        {!submissionResult && (
          <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900 rounded-xl hover:bg-slate-200 transition flex items-center space-x-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={handleNext}
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-shop-red hover:bg-shop-redHover text-white text-xs sm:text-sm font-bold transition shadow-md shadow-shop-red/20 flex items-center space-x-1.5 active:scale-95 disabled:opacity-50 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : currentStep === totalSteps ? (
                <span>Request Appointment & Estimate</span>
              ) : (
                <>
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
