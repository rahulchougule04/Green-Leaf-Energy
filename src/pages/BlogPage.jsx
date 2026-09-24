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
      <div className="bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 text-center font-sans border-b border-slate-800">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Knowledge Center & Solar Information Platform
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Solar Knowledge Center & Guides
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 font-medium">
          Authoritative technical guides on PM Surya Ghar subsidies, net metering, panel technology, sizing, and industrial solar ROI.
        </p>
      </div>
      <BlogList openQuoteModal={openQuoteModal} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
