import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { LightboxGallery } from '../components/projects/LightboxGallery';
import { FinalCTA } from '../components/home/FinalCTA';

export const GalleryPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Photo & Video Gallery | Solar Installation Visuals"
        description="High resolution photo and video lightbox gallery of solar rooftop installations, drone shots, and electrical commissioning."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Photo & Video Gallery</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">Visual proof of engineering precision and solar component quality.</p>
      </div>
      <LightboxGallery />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
