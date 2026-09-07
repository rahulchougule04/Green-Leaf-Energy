import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { PmSuryaGharGuide } from '../components/subsidy/PmSuryaGharGuide';
import { FinalCTA } from '../components/home/FinalCTA';

export const SubsidyPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="PM Surya Ghar Subsidy Guide | Up to ₹78,000 Govt Subsidy"
        description="Comprehensive guide on PM Surya Ghar Muft Bijli Yojana rooftop solar subsidy in Maharashtra. Eligibility, process, documents & MSEDCL vendor credit."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">PM Surya Ghar Subsidy Assistance</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">Claim up to ₹78,000 direct bank transfer (DBT) central government subsidy.</p>
      </div>
      <PmSuryaGharGuide openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
