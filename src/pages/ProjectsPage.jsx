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
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Commissioned Solar Projects</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">Filter our rooftop & ground mounted installations by category.</p>
      </div>
      <ProjectShowcase openQuoteModal={openQuoteModal} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
