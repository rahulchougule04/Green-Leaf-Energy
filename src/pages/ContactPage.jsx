import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { ContactForm } from '../components/forms/ContactForm';
import { FinalCTA } from '../components/home/FinalCTA';

export const ContactPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Contact Us | Free Site Feasibility Survey Request"
        description="Get in touch with Green Leaf Energy Solution for MSEDCL approved rooftop solar installation, site survey, phone consultation, and WhatsApp quotes."
      />
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Contact Green Leaf Energy Solution</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">Speak directly with our solar EPC engineering experts in Baramati & Pune.</p>
      </div>
      <ContactForm />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
