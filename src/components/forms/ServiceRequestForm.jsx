import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Wrench, CheckCircle2, Send } from 'lucide-react';

export const ServiceRequestForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    capacity: '',
    location: '',
    installationDate: '',
    issueType: 'Panel Cleaning & Maintenance',
    description: '',
    preferredDate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60 font-sans">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 text-xs font-extrabold text-solar-blue uppercase tracking-wider">
            <Wrench className="w-4 h-4 text-solar-green" />
            <span>After-Sales Service Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue">
            Book Solar Maintenance & Service Request
          </h2>
          <p className="text-xs text-slate-500">
            For existing solar customers needing panel cleaning, inverter diagnostics, or system relocation.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-solar-green mx-auto" />
              <h3 className="text-lg font-bold text-solar-blue">Service Request Submitted</h3>
              <p className="text-xs text-slate-600">Our after-sales service engineer will visit your site on the requested date.</p>
              <button onClick={() => setSubmitted(false)} className="bg-solar-blue text-white text-xs font-bold px-5 py-2.5 rounded-xl">
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Customer Name *</label>
                  <input type="text" required value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input type="tel" required value={formData.mobileNumber} onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">System Capacity (kW)</label>
                  <input type="text" value={formData.capacity} onChange={(e) => setFormData({...formData, capacity: e.target.value})} placeholder="e.g. 5 kW" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Installation Location</label>
                  <input type="text" value={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} placeholder="Baramati / Pune" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Issue Type</label>
                  <select value={formData.issueType} onChange={(e) => setFormData({...formData, issueType: e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <option value="Panel Cleaning & Maintenance">Panel Cleaning & Maintenance</option>
                    <option value="Inverter Error Code">Inverter Error Code</option>
                    <option value="Net Metering Query">Net Metering Query</option>
                    <option value="Structure Inspection">Structure Inspection</option>
                    <option value="Battery Health Check">Battery Health Check</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Preferred Visit Date</label>
                  <input type="date" value={formData.preferredDate} onChange={(e) => setFormData({...formData, preferredDate: e.target.value})} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Description</label>
                <textarea rows={3} value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Describe the service needed..." className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
              </div>

              <button type="submit" className="w-full bg-solar-green text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow">
                Submit Service Request
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
