import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { DownloadsSection } from '../components/common/DownloadsSection';

export const DownloadsPage = () => {
  return (
    <>
      <SeoHead title="Downloads | Company Profile & Solar Brochures" description="Download official Green Leaf Energy Solution company profile, PM Surya Ghar brochure, and AMC guides." />
      <DownloadsSection />
    </>
  );
};
