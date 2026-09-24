import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { ShieldCheck, ArrowRight, Zap, Award, CheckCircle2 } from 'lucide-react';

export const Hero = ({ openQuoteModal, navigateToTab }) => {
  const { t, language } = useLanguage();

  return (
    <section className="relative bg-white text-slate-900 overflow-hidden font-sans border-b border-slate-200">
      {/* High-res Solar Rooftop Engineering Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-100 scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('/hero-bg.jpg')` 
        }}
      />
      
      {/* Subtle Engineering Grid & Gradient Overlay */}
      <div className="absolute inset-0 bg-white/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="flex flex-col items-center">
          
          {/* Main Hero Content */}
          <div className="space-y-6 flex flex-col items-center text-center w-full">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full text-xs font-semibold text-emerald-700 backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{language === 'mr' ? 'MSEDCL व PM सूर्य घर अधिकृत व्हेंडर' : 'MSEDCL Approved Solar EPC & PM Surya Ghar Partner'}</span>
            </div>

            {/* Company Name (Distinct & Bold) */}
            <div className="space-y-1">
              <span className="block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600">
                {language === 'mr' ? 'स्वागत आहे' : 'Welcome to'}
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                {t('hero.companyName')}
              </h1>
            </div>

            {/* Tagline: The Company You Can Rely Upon */}
            <div className="py-1">
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-wide italic">
                “{t('hero.tagline')}”
              </p>
              <h2 className="text-base sm:text-xl font-bold text-emerald-700 mt-1">
                {t('hero.subHeading')}
              </h2>
            </div>

            {/* Sub-description */}
            <p className="text-sm sm:text-base text-slate-950 font-bold drop-shadow-sm max-w-2xl leading-relaxed">
              {t('hero.additionalMsg')}
            </p>



            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-3 w-full sm:w-auto">
              <button
                onClick={openQuoteModal}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-200 transition-all flex items-center justify-center space-x-2 group active:scale-95 w-full sm:w-auto"
              >
                <span>{t('hero.btnGetQuote')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => navigateToTab('contact')}
                className="bg-white hover:bg-slate-50 text-slate-900 px-6 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center space-x-1.5 active:scale-95 border border-slate-200 w-full sm:w-auto"
              >
                <span>{t('hero.btnSiteSurvey')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

