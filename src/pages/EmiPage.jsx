import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { EmiCalculator } from '../components/tools/EmiCalculator';
import { FinalCTA } from '../components/home/FinalCTA';

export const EmiPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Solar Loan EMI Calculator | Bank Financing & Interest"
        description="Estimate monthly solar loan EMI payments, total interest, and zero down payment bank financing options for rooftop solar."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Solar Financing & EMI Calculator</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">Calculate your monthly loan EMI to install solar with zero upfront financial burden.</p>
      </div>
      <EmiCalculator openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
