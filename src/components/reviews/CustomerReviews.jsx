import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Star, ExternalLink, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';

export const CustomerReviews = ({ openQuoteModal }) => {
  const { t } = useLanguage();

  const reviewsList = [
    {
      id: 1,
      name: "Suresh Jagtap",
      location: "Baramati, Dist. Pune",
      rating: 5,
      project: "5 kWp Residential Solar (PM Surya Ghar)",
      review: "Green Leaf Energy Solution did an exceptional job on our rooftop in Baramati. The installation was completed in just 3 days using heavy galvanized structure and Tier-1 panels. They handled all MSEDCL net meter paperwork and our ₹78,000 subsidy was credited directly to our bank within 25 days. Monthly bill went from ₹4,500 to almost zero!",
      date: "Verified Google Review • 2 weeks ago",
      source: "Google Profile"
    },
    {
      id: 2,
      name: "Nitin Shinde",
      location: "MIDC Baramati",
      rating: 5,
      project: "50 kWp Industrial Solar Plant",
      review: "We contracted Green Leaf for our factory shed solar project. Their 18 years of electrical engineering background showed in their cable routing, lightning arrestors, and HT panel synchronization. Generation has been consistently above 220 units per day. Highly professional and dependable company.",
      date: "Verified Google Review • 1 month ago",
      source: "Google Profile"
    },
    {
      id: 3,
      name: "Dr. Anand Kulkarni",
      location: "Phaltan, Satara",
      rating: 5,
      project: "10 kWp Commercial Hospital Solar",
      review: "Very transparent pricing with zero hidden costs. Solis inverter with app monitoring works flawlessly. The local engineering team in Baramati responds immediately whenever regular maintenance or cleaning assistance is needed. The company you can truly rely upon!",
      date: "Verified Google Review • 2 months ago",
      source: "Google Profile"
    },
    {
      id: 4,
      name: "Pravin Patil",
      location: "Vidyanagari, Baramati",
      rating: 5,
      project: "3 kWp Rooftop Solar System",
      review: "Clean work and polite team. Net metering meter was installed by MSEDCL without any hassle because Green Leaf engineers managed all technical submissions directly. Delighted with the performance.",
      date: "Verified Google Review • 3 months ago",
      source: "Google Profile"
    }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200 font-sans" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 text-xs font-black text-amber-800 uppercase tracking-wider">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>Customer Trust & Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto font-medium">
            Real experiences from homeowners, businesses, and industrial clients in Baramati, Pune, and Maharashtra.
          </p>
        </div>

        {/* Google Reviews Badge Summary Card */}
        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-xs max-w-xl mx-auto mb-12 text-center space-y-3">
          <div className="flex items-center justify-center space-x-2">
            {/* Google "G" Icon Graphic */}
            <div className="w-7 h-7 rounded-full bg-white shadow-xs border border-slate-200 flex items-center justify-center font-bold text-sm">
              <span className="text-blue-600 font-black">G</span>
            </div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-700">
              Google Business Reviews
            </span>
          </div>

          <div className="flex justify-center items-center space-x-1.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <div className="text-3xl font-black text-slate-900">
            4.9 <span className="text-base text-slate-500 font-bold">/ 5.0</span>
          </div>
          
          <p className="text-xs text-slate-600 font-medium">
            Based on authentic customer reviews across Baramati, Pune, and Western Maharashtra.
          </p>

          <div className="pt-1">
            <a
              href="https://www.google.com/maps/search/Green+Leaf+Energy+Solution+Baramati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-colors"
            >
              <span>View Google Profile & Leave a Review</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviewsList.map((rev) => (
            <div 
              key={rev.id}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative"
            >
              <Quote className="w-7 h-7 text-emerald-600/20 absolute top-4 right-4" />
              
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex space-x-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-slate-700 leading-relaxed italic font-normal">
                  "{rev.review}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-sm text-slate-900">{rev.name}</h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 font-medium">
                  📍 {rev.location}
                </div>

                <div className="text-[11px] text-emerald-800 font-bold truncate" title={rev.project}>
                  ⚡ {rev.project}
                </div>

                <div className="text-[10px] text-slate-400 pt-1">
                  {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
