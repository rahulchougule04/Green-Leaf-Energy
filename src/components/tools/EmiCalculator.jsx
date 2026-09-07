import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Landmark, Calculator, ShieldAlert, ArrowRight } from 'lucide-react';

export const EmiCalculator = ({ openQuoteModal, navigateToTab }) => {
  const { t } = useLanguage();

  const [systemCost, setSystemCost] = useState(165000);
  const [downPayment, setDownPayment] = useState(35000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(5);

  const loanAmount = Math.max(0, systemCost - downPayment);
  
  // EMI Formula: P * r * (1+r)^n / ((1+r)^n - 1)
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  let emi = 0;
  if (loanAmount > 0 && monthlyRate > 0 && totalMonths > 0) {
    emi = Math.round(
      (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1)
    );
  }

  const totalPayable = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayable - loanAmount);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60 font-sans" id="emi">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 text-xs font-extrabold text-solar-blue uppercase tracking-wider">
            <Landmark className="w-4 h-4 text-solar-amber" />
            <span>Solar Financing EMI Calculator</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            Easy Bank Loan & Monthly EMI Estimator
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Explore affordable solar loans with zero down payment options from leading nationalized banks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-5">
            
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>System Cost (₹)</span>
                <span className="text-solar-blue">₹{systemCost.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="10000"
                value={systemCost}
                onChange={(e) => setSystemCost(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-blue"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Down Payment (₹)</span>
                <span className="text-solar-green">₹{downPayment.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="0"
                max={systemCost}
                step="5000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-green"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-slate-800"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Tenure (Years)
                </label>
                <select
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-bold text-slate-800"
                >
                  <option value={1}>1 Year (12 Months)</option>
                  <option value={2}>2 Years (24 Months)</option>
                  <option value={3}>3 Years (36 Months)</option>
                  <option value={5}>5 Years (60 Months)</option>
                  <option value={7}>7 Years (84 Months)</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 flex justify-between">
              <span>Required Loan Amount:</span>
              <span className="text-solar-blue font-extrabold">₹{loanAmount.toLocaleString('en-IN')}</span>
            </div>

          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-solar-blue text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-6">
            
            <h3 className="text-lg font-bold border-b border-blue-800/80 pb-3 flex justify-between items-center">
              <span>Monthly EMI Summary</span>
              <Landmark className="w-5 h-5 text-solar-amber" />
            </h3>

            <div className="text-center py-4 bg-blue-950/60 rounded-xl border border-blue-800/60 space-y-1">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-widest block">Estimated Monthly EMI</span>
              <span className="text-3xl sm:text-4xl font-extrabold text-solar-amber">₹{emi.toLocaleString('en-IN')}</span>
              <span className="text-[10px] text-slate-400 block">for {totalMonths} Months</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-blue-950/40 p-3 rounded-lg border border-blue-800/50 space-y-0.5">
                <span className="text-slate-400 block">Total Interest Payable</span>
                <span className="font-extrabold text-emerald-400 text-sm">₹{totalInterest.toLocaleString('en-IN')}</span>
              </div>
              <div className="bg-blue-950/40 p-3 rounded-lg border border-blue-800/50 space-y-0.5">
                <span className="text-slate-400 block">Total Amount Payable</span>
                <span className="font-extrabold text-white text-sm">₹{totalPayable.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="p-3 bg-blue-900/40 rounded-xl border border-blue-700/50 text-[10px] text-slate-300 flex items-start space-x-2">
              <ShieldAlert className="w-4 h-4 text-solar-amber flex-shrink-0 mt-0.5" />
              <span>Financing Disclaimer: Actual loan approval, interest rate, tenure and EMI depend on bank/lender terms & customer credit profile.</span>
            </div>

            <button
              onClick={openQuoteModal}
              className="w-full bg-solar-green hover:bg-solar-green-dark text-white font-extrabold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <span>Apply for Solar Loan Assistance</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
