import React, { useState } from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const CareerForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const openPositions = [
    { title: "Solar Electrical Design Engineer", location: "Baramati Head Office", exp: "2-5 Years", type: "Full Time" },
    { title: "Solar EPC Project Site Supervisor", location: "Pune & Dist. Service Areas", exp: "1-3 Years", type: "Full Time" },
    { title: "Solar Sales & Subsidy Executive", location: "Baramati / Pune", exp: "1-4 Years", type: "Full Time" }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200/60 font-sans">
      <div className="max-w-4xl mx-auto px-4">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 text-xs font-extrabold text-solar-blue uppercase tracking-wider">
            <Briefcase className="w-4 h-4 text-solar-green" />
            <span>Careers at Green Leaf Energy Solution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue">
            Join Our Solar Engineering Team
          </h2>
        </div>

        {/* Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {openPositions.map((pos, idx) => (
            <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[10px] bg-solar-green text-white font-extrabold px-2 py-0.5 rounded">{pos.type}</span>
              <h4 className="font-bold text-sm text-solar-blue">{pos.title}</h4>
              <div className="text-xs text-slate-500 font-semibold space-y-0.5">
                <div>📍 {pos.location}</div>
                <div>💼 Exp: {pos.exp}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-solar-blue mb-4">Apply for Open Position</h3>
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <CheckCircle2 className="w-12 h-12 text-solar-green mx-auto" />
              <h4 className="font-bold text-solar-blue text-base">Application Submitted</h4>
              <p className="text-xs text-slate-600">Our HR department will review your application.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" required placeholder="Full Name *" className="p-3 bg-white rounded-xl border border-slate-200 text-xs" />
                <input type="tel" required placeholder="Phone Number *" className="p-3 bg-white rounded-xl border border-slate-200 text-xs" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" required placeholder="Email Address *" className="p-3 bg-white rounded-xl border border-slate-200 text-xs" />
                <select className="p-3 bg-white rounded-xl border border-slate-200 text-xs">
                  <option value="Solar Electrical Design Engineer">Solar Electrical Design Engineer</option>
                  <option value="Solar EPC Project Site Supervisor">Solar EPC Project Site Supervisor</option>
                  <option value="Solar Sales & Subsidy Executive">Solar Sales & Subsidy Executive</option>
                </select>
              </div>
              <input type="text" placeholder="Years of Experience" className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs" />
              <button type="submit" className="w-full bg-solar-blue text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-wider">
                Submit Job Application
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
