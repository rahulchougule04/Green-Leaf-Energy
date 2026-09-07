import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../layout/Modal';
import { Send, CheckCircle2, FileText, Sparkles } from 'lucide-react';

export const QuoteWizardModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    monthlyBill: '',
    propertyType: 'Residential Flat / Villa',
    solarRequirement: '3 kW',
    roofArea: '',
    preferredContact: 'WhatsApp'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Auto dispatch quote request to WhatsApp number 9322513396
    const messageLines = [
      `*New Solar Quotation Request - Green Leaf Energy Solution*`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Mobile:* ${formData.mobile}`,
      `📍 *Location:* ${formData.location || 'Not Specified'}`,
      `⚡ *Monthly Bill:* ₹${formData.monthlyBill || 'Not Specified'}`,
      `🏡 *Property:* ${formData.propertyType}`,
      `☀️ *Requirement:* ${formData.solarRequirement}`,
      `📐 *Roof Area:* ${formData.roofArea ? formData.roofArea + ' sq ft' : 'Not Specified'}`
    ].join('\n');

    const whatsappUrl = `https://wa.me/919322513396?text=${encodeURIComponent(messageLines)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title={t('forms.quoteTitle')}>
      {submitted ? (
        <div className="text-center py-8 space-y-4 animate-scaleUp font-sans">
          <div className="w-16 h-16 rounded-full bg-green-100 text-solar-green mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-xl font-bold text-solar-blue">Quotation Request Received!</h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto font-medium">
            Our solar design team is preparing your custom proposal. We will contact you via WhatsApp shortly.
          </p>
          <button
            onClick={handleClose}
            className="bg-solar-blue text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 font-sans">
          <div className="p-3 bg-green-50 rounded-xl border border-green-100 text-xs text-solar-green font-bold flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-solar-amber" />
            <span>Get an itemized proposal with panel specs, inverter model & subsidy breakdown.</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="10-digit phone"
                className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">City / District *</label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Baramati, Pune"
                className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Monthly Electricity Bill (₹)</label>
              <input
                type="number"
                value={formData.monthlyBill}
                onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                placeholder="e.g. 4000"
                className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Property Type</label>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold"
              >
                <option value="Residential Flat / Villa">Residential Flat / Villa</option>
                <option value="Commercial Office / Hospital">Commercial Office / Hospital</option>
                <option value="Industrial Factory Shed">Industrial Factory Shed</option>
                <option value="Agricultural Farm House">Agricultural Farm House</option>
              </select>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">Solar Requirement</label>
              <select
                value={formData.solarRequirement}
                onChange={(e) => setFormData({ ...formData, solarRequirement: e.target.value })}
                className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold"
              >
                <option value="3 kW">3 kW (PM Surya Ghar Max Subsidy)</option>
                <option value="5 kW">5 kW System</option>
                <option value="10 kW">10 kW System</option>
                <option value="Above 10 kW">Above 10 kW (Commercial)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 block mb-1">Approx. Available Roof Area (sq ft)</label>
            <input
              type="number"
              value={formData.roofArea}
              onChange={(e) => setFormData({ ...formData, roofArea: e.target.value })}
              placeholder="e.g. 300 sq ft"
              className="w-full p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs font-semibold"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-solar-green hover:bg-solar-green-dark text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <FileText className="w-4 h-4" />
            <span>{t('forms.getQuoteBtn')}</span>
          </button>
        </form>
      )}
    </Modal>
  );
};
