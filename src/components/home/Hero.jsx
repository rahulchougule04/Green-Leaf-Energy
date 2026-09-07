import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { ShieldCheck, ArrowRight, Sun, Award, Zap } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

/* ==========================================================================
   DESKTOP HERO VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopHeroView = ({ openQuoteModal, navigateToTab, t }) => {
  return (
    <section className="hidden lg:flex relative bg-solar-blue text-white overflow-hidden min-h-[640px] items-center">
      {/* High-res Background Image with Dark Green Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1920&auto=format&fit=crop')` 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-solar-blue/95 via-solar-blue/85 to-solar-green-dark/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-20 w-full">
        <div className="grid grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Left Content */}
          <div className="col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-xs font-semibold text-green-300">
              <ShieldCheck className="w-4 h-4 text-solar-amber flex-shrink-0" />
              <span>{t('hero.subHeading')}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-solar-amber animate-ping flex-shrink-0"></span>
            </div>

            <div className="text-xs font-extrabold tracking-widest uppercase text-solar-amber">
              {t('hero.companyName')}
            </div>

            <h1 className="text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {t('hero.tagline')}
            </h1>

            <p className="text-lg text-slate-200 font-medium max-w-2xl leading-relaxed">
              {t('hero.additionalMsg')}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2 text-xs sm:text-sm font-medium text-slate-300">
              <div className="flex items-center space-x-2">
                <Zap className="w-4.5 h-4.5 text-solar-amber flex-shrink-0" />
                <span>Zero Electricity Bills</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4.5 h-4.5 text-solar-amber flex-shrink-0" />
                <span>18+ Years Exp.</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sun className="w-4.5 h-4.5 text-solar-amber flex-shrink-0" />
                <span>PM Surya Ghar Partner</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => navigateToTab('contact')}
                className="bg-solar-green hover:bg-solar-green-dark text-white px-7 py-4 rounded-xl font-bold text-sm shadow-xl hover:shadow-solar-glow transition-all flex items-center space-x-2 group active:scale-95"
              >
                <span>{t('hero.btnSiteSurvey')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={openQuoteModal}
                className="bg-white hover:bg-slate-100 text-solar-blue px-7 py-4 rounded-xl font-bold text-sm shadow-lg transition-all flex items-center space-x-2 active:scale-95"
              >
                <span>{t('hero.btnGetQuote')}</span>
              </button>

              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-4 rounded-xl font-bold text-sm shadow-lg flex items-center space-x-2 transition-all active:scale-95"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white flex-shrink-0" />
                <span>{t('hero.btnWhatsApp')}</span>
              </a>
            </div>
          </div>

          {/* Right Floating Subsidy Widget */}
          <div className="col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl text-slate-100 space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Rooftop Solar Subsidy</h3>
                  <p className="text-xs text-slate-300">PM Surya Ghar: Muft Bijli Yojana</p>
                </div>
                <span className="bg-solar-amber text-solar-blue text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase">
                  Up to ₹78,000 Off
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="font-semibold text-slate-200">1 kW Solar System</span>
                  <span className="font-bold text-solar-amber">₹30,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="font-semibold text-slate-200">2 kW Solar System</span>
                  <span className="font-bold text-solar-amber">₹60,000 Subsidy</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-3.5 rounded-xl border border-white/10">
                  <span className="font-semibold text-slate-200">3 kW - 10 kW System</span>
                  <span className="font-bold text-solar-amber">₹78,000 Subsidy</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => navigateToTab('calculator')}
                  className="w-full bg-gradient-to-r from-solar-green to-emerald-600 hover:from-solar-green-dark hover:to-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                >
                  <span>⚡ Calculate Savings & Subsidy For Your Roof</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ==========================================================================
   MOBILE HERO VIEW (screen width < 1024px)
   ========================================================================== */
const MobileHeroView = ({ openQuoteModal, navigateToTab, t }) => {
  return (
    <section className="lg:hidden relative bg-solar-blue text-white overflow-hidden py-8 px-4">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop')` 
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-solar-blue via-solar-blue/95 to-solar-blue-dark pointer-events-none" />

      <div className="relative z-10 space-y-5 text-center">
        {/* MSEDCL Approved Badge */}
        <div className="inline-flex items-center space-x-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] font-semibold text-green-300">
          <ShieldCheck className="w-3.5 h-3.5 text-solar-amber flex-shrink-0" />
          <span className="truncate">{t('hero.subHeading')}</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
          {t('hero.tagline')}
        </h1>

        <p className="text-xs text-slate-200 font-medium leading-relaxed">
          {t('hero.additionalMsg')}
        </p>

        {/* Value Bullets Grid */}
        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 font-medium py-1">
          <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex items-center justify-center space-x-1">
            <Zap className="w-3 h-3 text-solar-amber flex-shrink-0" />
            <span>Zero Bills</span>
          </div>
          <div className="bg-white/5 p-2 rounded-lg border border-white/10 flex items-center justify-center space-x-1">
            <Award className="w-3 h-3 text-solar-amber flex-shrink-0" />
            <span>18+ Yrs Exp</span>
          </div>
        </div>

        {/* Stacked Full Width Touch Action Buttons */}
        <div className="space-y-2.5 pt-1">
          <button
            onClick={() => navigateToTab('contact')}
            className="w-full bg-solar-green text-white py-3.5 px-4 rounded-xl font-bold text-xs shadow-lg flex items-center justify-center space-x-2 active:scale-95"
          >
            <span>{t('hero.btnSiteSurvey')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={openQuoteModal}
              className="w-full bg-white text-solar-blue py-3 px-3 rounded-xl font-bold text-xs shadow flex items-center justify-center space-x-1 active:scale-95"
            >
              <span>{t('hero.btnGetQuote')}</span>
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] text-white py-3 px-3 rounded-xl font-bold text-xs shadow flex items-center justify-center space-x-1.5 active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white flex-shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Mobile Subsidy Highlight Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/15 text-left space-y-3 mt-4">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <div>
              <h4 className="text-xs font-bold text-white">PM Surya Ghar Subsidy</h4>
              <p className="text-[10px] text-slate-300">Govt Electricity Scheme</p>
            </div>
            <span className="bg-solar-amber text-solar-blue text-[10px] font-extrabold px-2.5 py-0.5 rounded-full">
              ₹78,000 Off
            </span>
          </div>
          
          <button
            onClick={() => navigateToTab('calculator')}
            className="w-full bg-gradient-to-r from-solar-green to-emerald-600 text-white font-bold py-2.5 px-3 rounded-lg text-[11px] flex items-center justify-center space-x-1.5"
          >
            <span>⚡ Solar Savings Calculator</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

/* ==========================================================================
   MAIN HERO COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const Hero = ({ openQuoteModal, navigateToTab }) => {
  const { t } = useLanguage();

  return (
    <>
      <DesktopHeroView openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} t={t} />
      <MobileHeroView openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} t={t} />
    </>
  );
};
