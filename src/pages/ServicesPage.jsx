import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { FinalCTA } from '../components/home/FinalCTA';

export const ServicesPage = ({ openQuoteModal, openServiceModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Solar Services | Residential, Commercial & Industrial EPC"
        description="Comprehensive solar services including Rooftop Solar, Commercial Solar Plants, Industrial EPC, Hybrid Systems, Lithium Batteries & AMC in Maharashtra."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Our Solar & EPC Services</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">11 Specialized Solar & Electrical Solutions Designed for Maximum ROI.</p>
      </div>
      <ServicesGrid openQuoteModal={openQuoteModal} openServiceModal={openServiceModal} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
