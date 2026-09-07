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
      <div className="bg-solar-blue text-white py-12 px-4 text-center">
        <h1 className="text-3xl font-extrabold">Customer Reviews & Feedback</h1>
        <p className="text-xs text-slate-200 max-w-xl mx-auto mt-2">See why 500+ property owners trust Green Leaf Energy Solution.</p>
      </div>
      <CustomerReviews openQuoteModal={openQuoteModal} />
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
    </>
  );
};
