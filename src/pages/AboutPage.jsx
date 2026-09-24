import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { AboutSummary } from '../components/home/AboutSummary';
import { SolarProjectJourney } from '../components/home/SolarProjectJourney';
import { WhyGreenLeaf } from '../components/home/WhyGreenLeaf';
import { FinalCTA } from '../components/home/FinalCTA';

export const AboutPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="About Us | Solar & Electrical Solutions | Green Leaf Energy Solution Baramati"
        description="Green Leaf Energy Solution is a solar and electrical contracting company based in Baramati, Maharashtra, providing reliable renewable energy and electrical solutions for residential, commercial and industrial customers."
      />
      
      {/* Subpage Header Banner */}
      <div className="bg-[#03243C] text-white py-14 px-4 sm:px-6 lg:px-8 border-b border-[#0A3B5C]/60 text-center font-sans">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
          MSEDCL Approved EPC Contractor • Baramati, Maharashtra
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          About Green Leaf Energy Solution
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto mt-3 font-medium leading-relaxed">
          The Company You Can Rely Upon for Solar & Electrical Solutions for Homes, Businesses & Industries.
        </p>
      </div>

      <AboutSummary navigateToTab={navigateToTab} />
      <SolarProjectJourney openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      <WhyGreenLeaf />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};


