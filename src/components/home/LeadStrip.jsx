import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Calendar, ArrowRight, Sun } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const LeadStrip = ({ navigateToTab }) => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-r from-solar-green to-emerald-800 text-white py-8 sm:py-12 px-4 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 relative z-10">
        
        <div className="space-y-2 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-white/15 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-green-200">
            <Sun className="w-4 h-4 text-solar-amber" />
            <span>{t('leadStrip.heading')}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('leadStrip.heading')}
          </h2>
          <p className="text-xs sm:text-base text-green-100 max-w-2xl font-medium">
            {t('leadStrip.text')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto flex-shrink-0">
          <button
            onClick={() => navigateToTab('contact')}
            className="w-full sm:w-auto bg-white text-solar-green hover:bg-slate-100 font-extrabold px-7 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5 active:scale-95"
          >
            <Calendar className="w-4.5 h-4.5 text-solar-green" />
            <span>{t('leadStrip.btnSurvey')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-solar-blue hover:bg-solar-blue-dark text-white font-extrabold px-6 py-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 border border-white/20 transform hover:-translate-y-0.5 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white flex-shrink-0" />
            <span>{t('leadStrip.btnWhatsApp')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
