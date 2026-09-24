import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { ProjectShowcase } from '../components/projects/ProjectShowcase';
import { FinalCTA } from '../components/home/FinalCTA';

export const ProjectsPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Our Solar Projects | Portfolio & Commissioned Plants"
        description="View completed residential, commercial, industrial, and ground-mounted solar installations by Green Leaf Energy Solution."
      />
      <div className="bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 text-center font-sans border-b border-slate-800">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Completed Projects Portfolio
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Completed Projects & Stage Breakdown
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 font-medium">
          Detailed technical specifications and 6-stage installation photo gallery of solar plants executed across Baramati and Pune.
        </p>
      </div>
      <ProjectShowcase openQuoteModal={openQuoteModal} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
