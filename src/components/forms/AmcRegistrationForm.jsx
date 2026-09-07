import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AmcRegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60 font-sans">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100 text-xs font-extrabold text-solar-green uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Annual Maintenance Contract</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue">
            Solar AMC Subscription & Maintenance Registration
          </h2>
          <p className="text-xs text-slate-500">
            Ensure year-round maximum energy generation with our scheduled cleaning & electrical safety audits.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-solar-green mx-auto" />
              <h3 className="text-lg font-bold text-solar-blue">AMC Registration Received</h3>
              <p className="text-xs text-slate-600">Our AMC team will send you the formal package quotation shortly.</p>
              <button onClick={() => setSubmitted(false)} className="bg-solar-blue text-white text-xs font-bold px-5 py-2.5 rounded-xl">Register Another</button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Customer Name *</label>
                  <input type="text" required className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input type="tel" required className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">System Capacity (kW)</label>
                  <input type="text" placeholder="e.g. 5 kW" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Panel & Inverter Brand</label>
                  <input type="text" placeholder="e.g. Waaree + Growatt" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Preferred AMC Plan</label>
                  <select className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <option value="Standard AMC (Bi-Monthly Cleaning)">Standard AMC (Bi-Monthly Cleaning)</option>
                    <option value="Premium AMC (Monthly Cleaning + Diagnostics)">Premium AMC (Monthly Cleaning + Diagnostics)</option>
                    <option value="Comprehensive AMC (With Spare Replacement)">Comprehensive AMC (With Spare Replacement)</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Location / District</label>
                  <input type="text" placeholder="Baramati / Pune" className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                </div>
              </div>

              <button type="submit" className="w-full bg-solar-green text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow">
                Register for AMC Plan
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
