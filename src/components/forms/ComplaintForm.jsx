import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { AlertCircle, CheckCircle2, FileText } from 'lucide-react';

export const ComplaintForm = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    email: '',
    projectId: '',
    category: 'Generation Output Concern',
    description: '',
    preferredContact: 'Phone Call'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomTicket = `GLE-COMP-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketNumber(randomTicket);
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200/60 font-sans">
      <div className="max-w-3xl mx-auto px-4">
        
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 text-xs font-extrabold text-red-700 uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            <span>Customer Grievance & Complaint Ticketing</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue">
            {t('forms.complaintTitle')}
          </h2>
          <p className="text-xs text-slate-500">
            We prioritize customer satisfaction. Register any technical or service complaint for instant ticket escalation.
          </p>
        </div>

        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-4 animate-scaleUp">
              <CheckCircle2 className="w-12 h-12 text-solar-green mx-auto" />
              <h3 className="text-lg font-bold text-solar-blue">Complaint Registered Successfully</h3>
              <p className="text-xs text-slate-600">{t('forms.complaintSuccessMsg')}</p>
              <div className="inline-block bg-solar-blue text-white px-6 py-3 rounded-xl font-extrabold text-lg tracking-widest shadow">
                {ticketNumber}
              </div>
              <p className="text-[11px] text-slate-400">Please save this ticket reference number for tracking.</p>
              <button onClick={() => setSubmitted(false)} className="bg-solar-blue text-white text-xs font-bold px-5 py-2.5 rounded-xl block mx-auto mt-4">
                Register Another Ticket
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Customer Name *</label>
                  <input type="text" required value={formData.customerName} onChange={(e) => setFormData({...formData, customerName: e.target.value})} className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input type="tel" required value={formData.mobileNumber} onChange={(e) => setFormData({...formData, mobileNumber: e.target.value})} className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">{t('forms.customerId')}</label>
                  <input type="text" value={formData.projectId} onChange={(e) => setFormData({...formData, projectId: e.target.value})} placeholder="e.g. GLE-2024-884" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">{t('forms.category')}</label>
                  <select value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs">
                    <option value="Generation Output Concern">Generation Output Concern</option>
                    <option value="Inverter Red Light Error">Inverter Red Light Error</option>
                    <option value="Net Metering Billing Discrepancy">Net Metering Billing Discrepancy</option>
                    <option value="Physical Roof Leakage / Cable Issue">Physical Roof Leakage / Cable Issue</option>
                    <option value="Delay in Subsidy Credit">Delay in Subsidy Credit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Complaint Description *</label>
                <textarea rows={4} required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Provide details about the issue..." className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs" />
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow">
                Generate Complaint Ticket
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
