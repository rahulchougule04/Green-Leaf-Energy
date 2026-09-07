import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { AboutSummary } from '../components/home/AboutSummary';
import { WhyGreenLeaf } from '../components/home/WhyGreenLeaf';
import { FinalCTA } from '../components/home/FinalCTA';

export const AboutPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="About Us | 18 Years Electrical Solar EPC Expertise"
        description="Learn about Green Leaf Energy Solution, an MSEDCL Approved Solar EPC company with 18 years of electrical engineering excellence in Baramati and Pune."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">About Green Leaf Energy Solution</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">MSEDCL Approved Solar EPC Company with 18+ Years Electrical Engineering Excellence.</p>
      </div>
      <AboutSummary navigateToTab={navigateToTab} />
      <WhyGreenLeaf />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
