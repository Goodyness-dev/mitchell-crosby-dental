import React, { useState } from 'react';
import { quotesApi } from '../../services/api';

export default function NewOrderModal({ isOpen, onClose, onCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    make: 'Dental Consultation',
    modelAndYear: '',
    serviceCategory: 'Restorative & Implants',
    detailedService: 'CEREC® Same Day Crowns',
    details: '',
    timeline: 'As soon as possible'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setError('Please fill in patient name and email.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const payload = {
        ...formData,
        id: `APPT-MANUAL-${Date.now().toString().slice(-4)}`
      };
      const res = await quotesApi.submitPublicQuote(payload);
      if (onCreated) onCreated(res.quote || payload);
      onClose();
    } catch (err) {
      setError(err.data?.error || err.message || 'Failed to create record');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-lg bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-8 card-thick shadow-2xl space-y-5 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center text-shop-red font-mono font-bold text-xs">
              MC
            </div>
            <h2 className="text-lg sm:text-xl font-black font-heading text-slate-900">Record Walk-In Appointment</h2>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-slate-700 rounded-lg cursor-pointer text-sm font-bold">
            ✕
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
            [!] {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">Patient Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="First & Last Name"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">Phone</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(520) 000-0000"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white font-mono"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">Patient Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="patient@email.com"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white font-mono"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">Category</label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
              >
                <option value="Restorative & Implants">Restorative & Implants</option>
                <option value="Cosmetic & Whitening">Cosmetic & Whitening</option>
                <option value="Family & Cleanings">Family & Cleanings</option>
                <option value="Emergency & Surgery">Emergency & Surgery</option>
                <option value="General Dental Care">General Dental Consultation</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">Service / Procedure</label>
              <input
                type="text"
                value={formData.detailedService}
                onChange={(e) => setFormData({ ...formData, detailedService: e.target.value })}
                placeholder="e.g. CEREC Crown, Cleaning"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1 font-mono uppercase tracking-wider">Notes / Clinical Observations</label>
            <textarea
              rows={2}
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="Walk-in intake notes, symptoms or requested timeline..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm text-slate-900 outline-none focus:border-shop-red focus:bg-white"
            />
          </div>

          <div className="flex justify-end space-x-3 pt-3 border-t border-slate-200">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-500 hover:text-slate-800 text-xs font-bold cursor-pointer font-mono"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-2.5 rounded-xl bg-shop-red hover:bg-shop-redHover text-white text-xs font-bold transition flex items-center space-x-1.5 shadow-md shadow-shop-red/20 active:scale-95 cursor-pointer font-mono"
            >
              {isSubmitting ? <span>↻ Saving...</span> : <span>Save Appointment →</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
