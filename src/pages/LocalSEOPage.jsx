import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

export const LocalSEOPage = ({ openQuoteModal }) => {
  const { city } = useParams();
  
  // Extract city from slug, e.g., 'solar-company-in-baramati' -> 'Baramati'
  let cityName = 'Maharashtra';
  if (city) {
    const parts = city.split('-');
    const lastPart = parts[parts.length - 1];
    cityName = lastPart.charAt(0).toUpperCase() + lastPart.slice(1);
  }

  return (
    <>
      <Helmet>
        <title>Green Leaf Energy Solution | Solar Company in {cityName}, Maharashtra</title>
        <meta name="description" content={`Green Leaf Energy Solution provides residential, commercial and industrial solar solutions, rooftop solar, ground-mounted solar and electrical contracting services across ${cityName} and Maharashtra.`} />
      </Helmet>
      
      <div className="pt-32 pb-20 px-4 text-center min-h-[60vh] bg-slate-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
          Reliable Solar & Electrical Solutions in {cityName}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Green Leaf Energy Solution provides residential, commercial and industrial solar solutions across {cityName} and Maharashtra.
        </p>
        <button 
          onClick={openQuoteModal}
          className="bg-[#057A44] hover:bg-[#03542E] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all"
        >
          Get Free Solar Quote in {cityName}
        </button>
      </div>
    </>
  );
};
