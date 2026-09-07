import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Star, ExternalLink, Quote } from 'lucide-react';

export const CustomerReviews = ({ openQuoteModal }) => {
  const { t } = useLanguage();

  const reviewsList = [
    {
      id: 1,
      name: "Residential Customer Placeholder",
      location: "Baramati, Pune",
      rating: 5,
      project: "3 kW Rooftop Solar System",
      review: "Clean installation work completed within 4 days. The team helped us get the full PM Surya Ghar subsidy directly credited to our bank account. Electricity bill dropped by 85%!",
      date: "Recent Customer Feedback"
    },
    {
      id: 2,
      name: "Commercial Client Placeholder",
      location: "Phaltan, Satara",
      rating: 5,
      project: "20 kW Commercial Plant",
      review: "Very professional electrical engineers. Net metering approval from MSEDCL was processed smoothly without any hassle. Highly recommended for commercial solar EPC.",
      date: "Verified Customer"
    },
    {
      id: 3,
      name: "Industrial Owner Placeholder",
      location: "MIDC Baramati",
      rating: 5,
      project: "50 kW Industrial Solar",
      review: "Excellent structural quality and high generation performance. After-sales maintenance team responds immediately whenever servicing is required.",
      date: "Verified Customer"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/60 font-sans" id="reviews">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 text-xs font-extrabold text-amber-800 uppercase tracking-wider">
            <Star className="w-4 h-4 text-solar-amber fill-solar-amber" />
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            What Our Solar Clients Say
          </h2>
        </div>

        {/* Google Ratings Summary Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-md mx-auto mb-8 sm:mb-10 text-center space-y-3">
          <div className="flex justify-center items-center space-x-1 text-solar-amber">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-solar-amber" />
            ))}
          </div>
          <div className="text-2xl font-extrabold text-solar-blue">4.9 / 5.0 Rating</div>
          <p className="text-xs text-slate-500 font-medium">Based on genuine customer feedback in Pune & Baramati</p>
          <a
            href="https://google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-slate-100 hover:bg-slate-200 text-solar-blue text-xs font-bold px-4 py-2 rounded-xl transition-colors"
          >
            <span>View More Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviewsList.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-solar transition-all flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-8 h-8 text-solar-green/20 absolute top-4 right-4" />
              
              <div className="space-y-3">
                <div className="flex space-x-1 text-solar-amber">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-solar-amber" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic font-normal">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-0.5">
                <h4 className="font-extrabold text-xs sm:text-sm text-solar-blue">{rev.name}</h4>
                <div className="flex justify-between items-center text-[10px] sm:text-xs text-slate-400 font-medium">
                  <span>📍 {rev.location}</span>
                  <span className="text-solar-green font-bold">{rev.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
