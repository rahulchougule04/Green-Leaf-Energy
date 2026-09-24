import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { CustomerReviews } from '../components/reviews/CustomerReviews';
import { FinalCTA } from '../components/home/FinalCTA';

export const ReviewsPage = ({ openQuoteModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Customer Reviews & Ratings | Solar Client Testimonials"
        description="Read genuine customer reviews and feedback from residential and commercial solar installations across Pune and Baramati."
      />
      <div className="bg-slate-950 text-white py-14 px-4 sm:px-6 lg:px-8 text-center font-sans border-b border-slate-800">
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Google Business Reviews • 4.9★ Rating
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          What Our Clients Say
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mt-2 font-medium">
          Read verified client reviews from residential homeowners, commercial hospitals, and industrial plants across Baramati and Pune.
        </p>
      </div>
      <CustomerReviews openQuoteModal={openQuoteModal} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
