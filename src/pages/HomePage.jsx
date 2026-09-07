import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { LeadStrip } from '../components/home/LeadStrip';
import { AboutSummary } from '../components/home/AboutSummary';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { SolarCalculator } from '../components/tools/SolarCalculator';
import { WhyGreenLeaf } from '../components/home/WhyGreenLeaf';
import { PmSuryaGharGuide } from '../components/subsidy/PmSuryaGharGuide';
import { CustomerReviews } from '../components/reviews/CustomerReviews';
import { BrandsWeDealIn } from '../components/home/BrandsWeDealIn';
import { FinalCTA } from '../components/home/FinalCTA';
import { ContactForm } from '../components/forms/ContactForm';

export const HomePage = ({ openQuoteModal, openServiceModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="MSEDCL Approved Solar EPC Company | Baramati & Pune"
        description="Green Leaf Energy Solution is an MSEDCL Approved Solar EPC Vendor in Baramati & Pune. Get PM Surya Ghar Solar Subsidy assistance, Rooftop Solar Installation, Commercial Solar Plants & Free Site Survey."
      />

      {/* 1. Hero Banner */}
      <Hero openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />

      {/* 2. Trust / Credentials */}
      <TrustStrip />

      {/* 3. Lead Generation CTA Strip */}
      <LeadStrip navigateToTab={navigateToTab} />

      {/* 4. About Us Summary */}
      <AboutSummary navigateToTab={navigateToTab} />

      {/* 5. Services Grid */}
      <ServicesGrid openQuoteModal={openQuoteModal} openServiceModal={openServiceModal} />

      {/* 6. Interactive Solar Calculator */}
      <SolarCalculator openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />

      {/* 7. Why Green Leaf Energy Solution */}
      <WhyGreenLeaf />

      {/* 8. Government Subsidy Section (PM Surya Ghar) */}
      <PmSuryaGharGuide openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />

      {/* 9. Customer Reviews */}
      <CustomerReviews openQuoteModal={openQuoteModal} />

      {/* 12. Brands We Deal In */}
      <BrandsWeDealIn />

      {/* 14. Final CTA Banner */}
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />

      {/* 16. Contact / Inquiry Section */}
      <ContactForm />
    </>
  );
};
