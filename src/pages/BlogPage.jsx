import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { BlogList } from '../components/blog/BlogList';
import { FinalCTA } from '../components/home/FinalCTA';

export const BlogPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Solar Knowledge Hub & Blog | Guides, Cleaning & ROI"
        description="Expert solar articles on panel cleaning, net metering, hybrid systems, solar calculator formulas, and PM Surya Ghar subsidies."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Solar Knowledge Hub</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">Educational articles & technical guides to help you make informed clean energy decisions.</p>
      </div>
      <BlogList openQuoteModal={openQuoteModal} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
