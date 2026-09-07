import React, { useState } from 'react';
import { UserPlus, CheckCircle2 } from 'lucide-react';

export const DealerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60 font-sans">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100 text-xs font-extrabold text-solar-green uppercase tracking-wider">
            <UserPlus className="w-4 h-4" />
            <span>Channel Partner Registration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue">
            Become an Authorized Solar Dealer / Channel Partner
          </h2>
          <p className="text-xs text-slate-500">
            Partner with Green Leaf Energy Solution to expand solar installations in your district with technical support.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          {submitted ? (
            <div className="text-center py-10 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-solar-green mx-auto" />
              <h3 className="text-lg font-bold text-solar-blue">Dealer Registration Received</h3>
              <p className="text-xs text-slate-600">Our partnership team will get in touch with you.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="Business Name *" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                <input type="text" required placeholder="Contact Person *" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" required placeholder="Phone Number *" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                <input type="email" required placeholder="Email Address *" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="City / District" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
                <input type="text" placeholder="Years of Business Experience" className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
              </div>
              <textarea rows={3} placeholder="Tell us about your business background..." className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs" />
              <button type="submit" className="w-full bg-solar-green text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow">
                Become a Dealer
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
