import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Sun, Calculator as CalcIcon, ShieldAlert, ArrowRight, CheckCircle2, TrendingUp, DollarSign, Zap } from 'lucide-react';

/* ==========================================================================
   DESKTOP CALCULATOR VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopCalculatorView = ({
  monthlyBill, setMonthlyBill,
  roofType, setRoofType,
  location, setLocation,
  roofArea, setRoofArea,
  recommendedKw, estMonthlyGen, estAnnualSavings, estSubsidy,
  netInvestmentCost, paybackYears, lifetimeSavings, requiredRoofArea,
  openQuoteModal, navigateToTab, t
}) => {
  return (
    <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
      {/* Left Desktop Inputs Column */}
      <div className="col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
        <h3 className="text-base font-bold text-solar-blue border-b border-slate-200 pb-3 flex items-center justify-between">
          <span>Enter Your Property Details</span>
          <Sun className="w-5 h-5 text-solar-amber" />
        </h3>

        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs font-bold">
            <label className="text-slate-700">{t('calculator.billLabel')}</label>
            <span className="text-solar-green text-sm font-extrabold bg-green-100/70 px-2.5 py-1 rounded-md">
              ₹{monthlyBill.toLocaleString('en-IN')} / month
            </span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={monthlyBill}
            onChange={(e) => setMonthlyBill(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-green"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-semibold">
            <span>₹1,000</span>
            <span>₹25,000</span>
            <span>₹50,000+</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">{t('calculator.roofTypeLabel')}</label>
          <select
            value={roofType}
            onChange={(e) => setRoofType(e.target.value)}
            className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
          >
            {(Array.isArray(t('calculator.roofTypes')) ? t('calculator.roofTypes') : ["Concrete RCC Flat Roof", "Metal Tin Shed", "Tiled Roof", "Ground Area"]).map((rt, idx) => (
              <option key={idx} value={rt}>{rt}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">{t('calculator.locationLabel')}</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="e.g. Baramati, Pune, Satara"
            className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-700 block">Approx. Available Roof Area (sq ft)</label>
          <input
            type="number"
            value={roofArea}
            onChange={(e) => setRoofArea(Number(e.target.value))}
            className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
          />
        </div>

        <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-[11px] text-solar-blue font-medium flex items-start space-x-2">
          <Zap className="w-4 h-4 text-solar-amber flex-shrink-0 mt-0.5" />
          <span>Calculated based on standard MSEDCL electricity slab rates in Maharashtra.</span>
        </div>
      </div>

      {/* Right Desktop Results Panel */}
      <div className="col-span-7 bg-solar-blue text-white p-8 rounded-2xl shadow-xl space-y-6 relative overflow-hidden">
        <div className="flex justify-between items-center border-b border-blue-800/80 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-solar-amber">
              ESTIMATED PROJECTION
            </span>
            <h3 className="text-xl font-bold text-white">
              {t('calculator.resultsTitle')}
            </h3>
          </div>
          <div className="bg-solar-green text-white text-xs font-extrabold px-3.5 py-1.5 rounded-lg">
            Recommended: {recommendedKw} kW
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3.5">
          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-1">
            <span className="text-[10px] font-bold text-slate-300 uppercase block">{t('calculator.recCapacity')}</span>
            <span className="text-2xl font-extrabold text-solar-amber block">{recommendedKw} kW</span>
            <span className="text-[10px] text-slate-400 block">Rooftop Solar</span>
          </div>

          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-1">
            <span className="text-[10px] font-bold text-slate-300 uppercase block">{t('calculator.estGen')}</span>
            <span className="text-2xl font-extrabold text-emerald-400 block">~{estMonthlyGen} kWh</span>
            <span className="text-[10px] text-slate-400 block">Units per Month</span>
          </div>

          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-1">
            <span className="text-[10px] font-bold text-slate-300 uppercase block">{t('calculator.estSavings')}</span>
            <span className="text-2xl font-extrabold text-green-300 block">₹{estAnnualSavings.toLocaleString('en-IN')}</span>
            <span className="text-[10px] text-slate-400 block">Every Year</span>
          </div>

          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-1">
            <span className="text-[10px] font-bold text-slate-300 uppercase block">PM Surya Ghar Subsidy</span>
            <span className="text-2xl font-extrabold text-solar-amber block">₹{estSubsidy.toLocaleString('en-IN')}</span>
            <span className="text-[10px] text-slate-400 block">Govt Bank Credit</span>
          </div>

          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-1">
            <span className="text-[10px] font-bold text-slate-300 uppercase block">Net Investment</span>
            <span className="text-2xl font-extrabold text-emerald-300 block">₹{netInvestmentCost.toLocaleString('en-IN')}</span>
            <span className="text-[10px] text-slate-400 block">Out of Pocket</span>
          </div>

          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-1">
            <span className="text-[10px] font-bold text-slate-300 uppercase block">{t('calculator.estPayback')}</span>
            <span className="text-2xl font-extrabold text-solar-amber block">~{paybackYears} Years</span>
            <span className="text-[10px] text-slate-400 block">ROI Period</span>
          </div>

          <div className="bg-blue-950/60 p-4 rounded-xl border border-blue-800/60 space-y-1 col-span-3">
            <span className="text-[10px] font-bold text-slate-300 uppercase block">25-Year Lifetime Net Profit</span>
            <span className="text-2xl font-extrabold text-green-400 block">₹{lifetimeSavings.toLocaleString('en-IN')}</span>
            <span className="text-[10px] text-slate-400 block">Total Net Savings over 25 Years Lifetime Operation</span>
          </div>
        </div>

        <div className="pt-2 bg-gradient-to-r from-solar-green to-emerald-700 p-5 rounded-xl text-center flex items-center justify-between">
          <div className="text-left space-y-1">
            <h4 className="font-extrabold text-sm text-white">{t('calculator.promptTitle')}</h4>
            <p className="text-xs text-green-100">Get an official site survey by electrical engineers.</p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => navigateToTab('contact')}
              className="bg-white hover:bg-slate-100 text-solar-green font-extrabold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow flex items-center space-x-1.5"
            >
              <span>{t('calculator.getSurveyBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={openQuoteModal}
              className="bg-solar-blue hover:bg-solar-blue-dark text-white font-extrabold px-5 py-2.5 rounded-lg text-xs uppercase tracking-wider shadow"
            >
              <span>{t('calculator.getQuoteBtn')}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   MOBILE CALCULATOR VIEW (screen width < 1024px)
   ========================================================================== */
const MobileCalculatorView = ({
  monthlyBill, setMonthlyBill,
  roofType, setRoofType,
  recommendedKw, estMonthlyGen, estAnnualSavings, estSubsidy,
  netInvestmentCost, paybackYears, lifetimeSavings,
  openQuoteModal, navigateToTab, t
}) => {
  return (
    <div className="lg:hidden space-y-6">
      {/* Mobile Input Card */}
      <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b border-slate-200 pb-2">
          <h3 className="text-sm font-extrabold text-solar-blue">Select Monthly Electricity Bill</h3>
          <span className="text-solar-green text-xs font-extrabold bg-green-100 px-2.5 py-1 rounded-md">
            ₹{monthlyBill.toLocaleString('en-IN')} / mo
          </span>
        </div>

        <input
          type="range"
          min="1000"
          max="50000"
          step="500"
          value={monthlyBill}
          onChange={(e) => setMonthlyBill(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-solar-green"
        />

        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <label className="text-[10px] font-bold text-slate-500 block">Roof Type</label>
            <select
              value={roofType}
              onChange={(e) => setRoofType(e.target.value)}
              className="w-full p-2 bg-white rounded-lg border border-slate-200 text-xs font-semibold text-slate-800"
            >
              {(Array.isArray(t('calculator.roofTypes')) ? t('calculator.roofTypes') : ["Concrete RCC Flat Roof", "Metal Tin Shed", "Tiled Roof", "Ground Area"]).map((rt, idx) => (
                <option key={idx} value={rt}>{rt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-500 block">Recommended</label>
            <div className="p-2 bg-solar-green text-white rounded-lg text-xs font-extrabold text-center">
              {recommendedKw} kW System
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Results Output Card */}
      <div className="bg-solar-blue text-white p-4 rounded-2xl shadow-lg space-y-4">
        <div className="border-b border-blue-800 pb-2">
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-solar-amber">SOLAR SAVINGS PROJECTION</span>
          <h4 className="text-base font-bold text-white">Financial Calculation</h4>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/60">
            <span className="text-[9px] font-bold text-slate-300 block">PM Surya Ghar Subsidy</span>
            <span className="text-base font-extrabold text-solar-amber block">₹{estSubsidy.toLocaleString('en-IN')}</span>
            <span className="text-[8px] text-slate-400">Govt Credit</span>
          </div>

          <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/60">
            <span className="text-[9px] font-bold text-slate-300 block">Net Cost</span>
            <span className="text-base font-extrabold text-emerald-300 block">₹{netInvestmentCost.toLocaleString('en-IN')}</span>
            <span className="text-[8px] text-slate-400">After Subsidy</span>
          </div>

          <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/60">
            <span className="text-[9px] font-bold text-slate-300 block">Annual Savings</span>
            <span className="text-base font-extrabold text-green-300 block">₹{estAnnualSavings.toLocaleString('en-IN')}</span>
            <span className="text-[8px] text-slate-400">Every Year</span>
          </div>

          <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/60">
            <span className="text-[9px] font-bold text-slate-300 block">ROI Payback</span>
            <span className="text-base font-extrabold text-solar-amber block">~{paybackYears} Years</span>
            <span className="text-[8px] text-slate-400">Payback Period</span>
          </div>

          <div className="bg-blue-950/70 p-3 rounded-xl border border-blue-800/60 col-span-2">
            <span className="text-[9px] font-bold text-slate-300 block">25-Year Net Profit</span>
            <span className="text-lg font-extrabold text-green-400 block">₹{lifetimeSavings.toLocaleString('en-IN')}</span>
            <span className="text-[8px] text-slate-400">Estimated Total Net Profit</span>
          </div>
        </div>

        <div className="pt-1 space-y-2">
          <button
            onClick={() => navigateToTab('contact')}
            className="w-full bg-solar-green text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow flex items-center justify-center space-x-1.5"
          >
            <span>{t('calculator.getSurveyBtn')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={openQuoteModal}
            className="w-full bg-white text-solar-blue font-extrabold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider"
          >
            <span>{t('calculator.getQuoteBtn')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   MAIN SOLAR CALCULATOR COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const SolarCalculator = ({ openQuoteModal, navigateToTab }) => {
  const { t } = useLanguage();

  const [monthlyBill, setMonthlyBill] = useState(4000);
  const [roofType, setRoofType] = useState('RCC Flat Roof');
  const [location, setLocation] = useState('Baramati / Pune');
  const [roofArea, setRoofArea] = useState(350);

  const effectiveTariff = 9.5;
  const monthlyUnits = Math.round(monthlyBill / effectiveTariff);
  const capacityRaw = monthlyUnits / 120;
  const recommendedKw = Math.max(1, Math.min(100, Math.ceil(capacityRaw)));
  const estMonthlyGen = Math.round(recommendedKw * 120);
  const estMonthlySavings = Math.round(Math.min(monthlyBill, estMonthlyGen * effectiveTariff * 0.9));
  const estAnnualSavings = Math.round(estMonthlySavings * 12);
  const costPerKw = 55000;
  const estSystemCost = recommendedKw * costPerKw;

  let estSubsidy = 0;
  if (recommendedKw === 1) estSubsidy = 30000;
  else if (recommendedKw === 2) estSubsidy = 60000;
  else if (recommendedKw >= 3) estSubsidy = 78000;

  const netInvestmentCost = Math.max(0, estSystemCost - estSubsidy);
  const paybackYears = estAnnualSavings > 0 ? (netInvestmentCost / estAnnualSavings).toFixed(1) : "3.0";
  const lifetimeSavings = Math.max(0, (estAnnualSavings * 25) - netInvestmentCost);
  const requiredRoofArea = recommendedKw * 90;

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60 font-sans" id="calculator">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100 text-xs font-extrabold text-solar-green uppercase tracking-wider">
            <CalcIcon className="w-4 h-4" />
            <span>{t('calculator.title')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            {t('calculator.subtitle')}
          </h2>
        </div>

        <DesktopCalculatorView 
          monthlyBill={monthlyBill} setMonthlyBill={setMonthlyBill}
          roofType={roofType} setRoofType={setRoofType}
          location={location} setLocation={setLocation}
          roofArea={roofArea} setRoofArea={setRoofArea}
          recommendedKw={recommendedKw} estMonthlyGen={estMonthlyGen} estAnnualSavings={estAnnualSavings}
          estSubsidy={estSubsidy} netInvestmentCost={netInvestmentCost} paybackYears={paybackYears}
          lifetimeSavings={lifetimeSavings} requiredRoofArea={requiredRoofArea}
          openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} t={t}
        />

        <MobileCalculatorView 
          monthlyBill={monthlyBill} setMonthlyBill={setMonthlyBill}
          roofType={roofType} setRoofType={setRoofType}
          recommendedKw={recommendedKw} estMonthlyGen={estMonthlyGen} estAnnualSavings={estAnnualSavings}
          estSubsidy={estSubsidy} netInvestmentCost={netInvestmentCost} paybackYears={paybackYears}
          lifetimeSavings={lifetimeSavings}
          openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} t={t}
        />

      </div>
    </section>
  );
};
