import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Sun, Calendar, FileText, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const FinalCTA = ({ openQuoteModal, navigateToTab }) => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-br from-solar-blue via-solar-blue-dark to-slate-950 text-white relative overflow-hidden font-sans border-t-4 border-solar-green">
      
      {/* Sun glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-solar-green/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 text-center space-y-6 relative z-10">
        
        <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/20 text-xs font-bold text-solar-amber uppercase tracking-wider">
          <Sun className="w-4 h-4 animate-spin-slow" />
          <span>{siteConfig.companyName}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
          {t('finalCta.title')}
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
          {t('finalCta.text')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => navigateToTab('contact')}
            className="w-full sm:w-auto bg-solar-green hover:bg-solar-green-dark text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wider shadow-2xl hover:shadow-solar-glow transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5 text-white flex-shrink-0" />
            <span>{t('finalCta.btnSurvey')}</span>
            <ArrowRight className="w-4 h-4 flex-shrink-0" />
          </button>

          <button
            onClick={openQuoteModal}
            className="w-full sm:w-auto bg-white hover:bg-slate-100 text-solar-blue font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <FileText className="w-5 h-5 text-solar-green flex-shrink-0" />
            <span>{t('finalCta.btnQuote')}</span>
          </button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-7 py-4 rounded-xl text-sm uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5 fill-white flex-shrink-0" />
            <span>{t('finalCta.btnWhatsApp')}</span>
          </a>
        </div>

        <div className="pt-6 text-xs sm:text-sm text-slate-400 flex items-center justify-center space-x-4">
          <span>⚡ MSEDCL Approved</span>
          <span>•</span>
          <span>⚡ PM Surya Ghar Vendor</span>
          <span>•</span>
          <span>⚡ 18+ Years Exp.</span>
        </div>

      </div>
    </section>
  );
};
