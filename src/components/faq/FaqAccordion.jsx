import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare, ArrowRight } from 'lucide-react';

export const FaqAccordion = ({ navigateToTab }) => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = t('faq.items');

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
