import React from 'react';
import { SeoHead } from '../components/common/SeoHead';
import { Hero } from '../components/home/Hero';
import { TrustStrip } from '../components/home/TrustStrip';
import { LeadStrip } from '../components/home/LeadStrip';
import { AboutSummary } from '../components/home/AboutSummary';
import { WhyGreenLeaf } from '../components/home/WhyGreenLeaf';

import { ProjectShowcase } from '../components/projects/ProjectShowcase';
import { PmSuryaGharGuide } from '../components/subsidy/PmSuryaGharGuide';
import { ServicesGrid } from '../components/services/ServicesGrid';
import { SolarCalculator } from '../components/tools/SolarCalculator';
import { BlogList } from '../components/blog/BlogList';
import { CustomerReviews } from '../components/reviews/CustomerReviews';

import { BrandsWeDealIn } from '../components/home/BrandsWeDealIn';
import { FinalCTA } from '../components/home/FinalCTA';
import { ContactForm } from '../components/forms/ContactForm';

export const HomePage = ({ openQuoteModal, openServiceModal, navigateToTab }) => {
  return (
    <>
      <SeoHead 
        title="Green Leaf Energy Solution | Solar & Electrical Solutions | Baramati & Pune"
        description="Green Leaf Energy Solution is a premier solar and electrical contracting company based in Baramati, Maharashtra. The company you can rely upon for residential rooftop, commercial solar, PM Surya Ghar subsidies, and 18+ years of engineering excellence."
      />

      {/* 1. Strong Homepage Hero Banner */}
      <div id="home">
        <Hero openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      </div>

      {/* 2. Animated Trust Badges Strip (ISO, MSEDCL, PM Surya Ghar, DCR, Quality, Electrical) */}
      <TrustStrip />

      {/* 3. Lead Generation Strip */}
      <LeadStrip navigateToTab={navigateToTab} />

      {/* 4. Professional About Us Section (Exact Definition, Vision, Mission, Quality, Values) */}
      <div id="about">
        <AboutSummary navigateToTab={navigateToTab} />
      </div>

      {/* 5. 10 Reasons to Choose Green Leaf */}
      <WhyGreenLeaf />



      {/* 7. Services Grid */}
      <div id="services">
        <ServicesGrid openQuoteModal={openQuoteModal} openServiceModal={openServiceModal} />
      </div>

      {/* 8. Completed Projects & 6-Stage Photo Showcase */}
      <div id="projects">
        <ProjectShowcase openQuoteModal={openQuoteModal} />
      </div>

      {/* 9. Dedicated PM Surya Ghar Subsidy Section (6-Step Simple Process & Maximum Subsidy) */}
      <div id="subsidy">
        <PmSuryaGharGuide openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      </div>

      {/* 10. Interactive Solar Savings Calculator */}
      <div id="calculator">
        <SolarCalculator openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />
      </div>

      {/* 11. Knowledge Center / Blog (8 Google Ranking Educational Guides) */}
      <div id="blog">
        <BlogList openQuoteModal={openQuoteModal} />
      </div>

      {/* 12. Customer Reviews ("What Our Clients Say" with Google Profile) */}
      <div id="reviews">
        <CustomerReviews openQuoteModal={openQuoteModal} />
      </div>



      {/* 14. Tier-1 Brands We Deal In */}
      <BrandsWeDealIn />

      {/* 15. Final CTA Banner */}
      <FinalCTA openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} />

      {/* 16. Contact / Site Survey Inquiry Form */}
      <div id="contact">
        <ContactForm />
      </div>
    </>
  );
};
