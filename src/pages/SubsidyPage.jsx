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
      <div className="bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 text-center font-sans border-b border-slate-800">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
          PM Surya Ghar: Muft Bijli Yojana
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          PM Surya Ghar – Rooftop Solar Subsidy
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 font-medium">
          Claim up to ₹78,000 direct bank transfer (DBT) central government subsidy with MSEDCL approved vendor Green Leaf Energy Solution.
        </p>
      </div>
      <PmSuryaGharGuide openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
