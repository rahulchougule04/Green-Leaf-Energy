import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { SolarCalculator } from '../components/tools/SolarCalculator';
import { FinalCTA } from '../components/home/FinalCTA';

export const CalculatorPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Interactive Solar Calculator | Bill & Savings Estimator"
        description="Calculate recommended rooftop solar system capacity (kW), monthly generation (kWh), annual savings (₹), and payback period."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Solar Savings Calculator</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">Enter your monthly electricity bill to calculate instant capacity & financial return projections.</p>
      </div>
      <SolarCalculator openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
