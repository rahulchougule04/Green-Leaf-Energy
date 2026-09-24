import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';

export const FaqAccordion = ({ navigateToTab }) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const defaultFaqItems = [
    {
      q: "What is PM Surya Ghar Muft Bijli Yojana and how much subsidy can I get?",
      a: "PM Surya Ghar is a central government scheme providing up to ₹78,000 direct bank transfer (DBT) subsidy for rooftop solar installations. You get ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW to 10 kW systems. Green Leaf Energy Solution is an MSEDCL-approved vendor to help you claim this subsidy."
    },
    {
      q: "How long does the complete solar installation process take?",
      a: "A typical residential rooftop solar installation takes 7 to 15 working days from site survey to grid commissioning. This includes site feasibility survey, structural design, panel & inverter procurement, mounting structure fabrication, electrical wiring, MSEDCL net meter application, and final commissioning."
    },
    {
      q: "What is the payback period for a rooftop solar system?",
      a: "For a residential system in Baramati/Pune, the typical payback period is 4 to 6 years depending on your electricity consumption, tariff rate, and system capacity. With PM Surya Ghar subsidy, payback reduces further. After payback, you enjoy 20+ years of virtually free electricity."
    },
    {
      q: "Is my roof suitable for solar installation?",
      a: "Most RCC (concrete) terraces, GI sheet sheds, and tiled rooftops are suitable for solar panels. The ideal roof has south or west facing orientation with minimal shading. Green Leaf Energy Solution provides a FREE site feasibility survey to assess your rooftop's solar potential."
    },
    {
      q: "What maintenance does a solar system require?",
      a: "Solar panels require minimal maintenance. We recommend panel cleaning every 1-2 months to maintain peak efficiency. Our Annual Maintenance Contract (AMC) covers scheduled panel cleaning, inverter health check, wiring inspection, and performance monitoring — ensuring your system runs at maximum output year-round."
    },
    {
      q: "Can I get solar with zero upfront cost or bank loan EMI?",
      a: "Yes! Several nationalized banks like SBI, Bank of Maharashtra, and Canara Bank offer solar loans at 8-10% interest with tenures up to 7 years. Green Leaf Energy Solution assists you with the complete bank loan documentation and liaisoning to make solar installation affordable."
    },
    {
      q: "What brands of solar panels and inverters do you use?",
      a: "We use only Tier-1 ALMM (Approved List of Models and Manufacturers) listed solar panels from brands like Waaree, Adani, Vikram, and Nexus. For inverters, we use Growatt, Solis, Fronius, and Havells — all with manufacturer warranty and online monitoring apps."
    },
    {
      q: "Does Green Leaf handle MSEDCL net meter application and approval?",
      a: "Yes, we handle the complete MSEDCL net meter application, inspection scheduling, and commissioning liaisoning on your behalf. As an MSEDCL-approved solar EPC vendor, we ensure your bi-directional net meter is installed and activated without any hassle to you."
    }
  ];

  const rawFaqItems = t('faq.items');
  const faqItems = Array.isArray(rawFaqItems) ? rawFaqItems : defaultFaqItems;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section className="py-16 bg-white border-b border-slate-200/60 font-sans" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100 text-xs font-extrabold text-solar-green uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>{t('faq.title')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            {t('faq.subtitle')}
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left font-bold text-sm text-solar-blue flex justify-between items-center space-x-4 hover:text-solar-green transition-colors focus:outline-none"
                >
                  <span className="leading-snug">
                    {idx + 1}. {item.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-solar-green" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-700 leading-relaxed font-normal border-t border-slate-200/50 bg-white/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Bottom Support Link */}
        <div className="mt-10 p-6 bg-blue-50/70 rounded-2xl border border-blue-100 text-center space-y-3">
          <h4 className="font-extrabold text-sm text-solar-blue">Have more questions regarding your roof feasibility?</h4>
          <button
            onClick={() => navigateToTab('contact')}
            className="bg-solar-blue hover:bg-solar-blue-dark text-white font-extrabold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow transition-all inline-flex items-center space-x-2"
          >
            <span>Ask Our Solar Expert Directly</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
