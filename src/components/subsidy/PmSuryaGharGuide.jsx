import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, ShieldCheck, FileCheck, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';

/* ==========================================================================
   DESKTOP SUBSIDY VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopSubsidyView = ({ openQuoteModal, navigateToTab, t }) => {
  return (
    <div className="hidden lg:block space-y-12">
      {/* Slabs Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-solar-blue uppercase tracking-wider text-center">
          {t('subsidy.slabsTitle')}
        </h3>
        
        <div className="grid grid-cols-3 gap-6">
          {t('subsidy.slabs').map((slab, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-b from-white to-green-50/50 p-6 rounded-2xl border border-green-200/70 shadow-sm text-center space-y-3 relative overflow-hidden group hover:shadow-solar transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-solar-green/10 text-solar-green font-extrabold text-sm mx-auto flex items-center justify-center">
                #{idx + 1}
              </div>
              <h4 className="font-extrabold text-sm text-solar-blue">{slab.kw}</h4>
              <div className="text-3xl font-extrabold text-solar-green">{slab.amount}</div>
              <p className="text-xs text-slate-500 font-medium">{slab.desc}</p>
              <div className="text-[10px] text-emerald-800 font-bold bg-emerald-100/60 py-1 rounded-full">
                Direct Bank Credit (DBT)
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5-Step Process & Docs Split */}
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-7 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="text-base font-bold text-solar-blue flex items-center space-x-2 border-b border-slate-200 pb-3">
            <UserCheck className="w-5 h-5 text-solar-green" />
            <span>{t('subsidy.processTitle')}</span>
          </h3>

          <div className="space-y-3">
            {t('subsidy.steps').map((step, idx) => (
              <div key={idx} className="flex items-start space-x-3 text-xs text-slate-700">
                <span className="w-6 h-6 rounded-full bg-solar-blue text-white flex-shrink-0 flex items-center justify-center font-bold text-[11px]">
                  {idx + 1}
                </span>
                <span className="font-medium pt-1">{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-5 bg-solar-blue text-white p-6 rounded-2xl shadow-xl space-y-4">
          <h3 className="text-base font-bold text-white flex items-center space-x-2 border-b border-blue-800 pb-3">
            <FileCheck className="w-5 h-5 text-solar-amber" />
            <span>{t('subsidy.docsTitle')}</span>
          </h3>

          <div className="space-y-2.5">
            {t('subsidy.docs').map((doc, idx) => (
              <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="font-medium">{doc}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-[11px] text-slate-300">
            ⚡ Our team handles 100% of the portal upload & MSEDCL approval documentation for you.
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   MOBILE SUBSIDY VIEW (screen width < 1024px)
   ========================================================================== */
const MobileSubsidyView = ({ openQuoteModal, navigateToTab, t }) => {
  return (
    <div className="lg:hidden space-y-6">
      {/* Mobile Subsidy Slabs Stacked */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-solar-blue uppercase text-center">{t('subsidy.slabsTitle')}</h3>
        <div className="space-y-3">
          {t('subsidy.slabs').map((slab, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 rounded-xl border border-green-200 shadow-xs flex items-center justify-between"
            >
              <div className="space-y-0.5">
                <h4 className="font-extrabold text-xs text-solar-blue">{slab.kw}</h4>
                <p className="text-[10px] text-slate-500">{slab.desc}</p>
              </div>
              <div className="text-right">
                <div className="text-lg font-extrabold text-solar-green">{slab.amount}</div>
                <span className="text-[8px] text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded-full block">DBT Credit</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Process Accordion Stack */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
        <h3 className="text-xs font-bold text-solar-blue flex items-center space-x-1.5 border-b border-slate-200 pb-2">
          <UserCheck className="w-4 h-4 text-solar-green" />
          <span>{t('subsidy.processTitle')}</span>
        </h3>
        <div className="space-y-2">
          {t('subsidy.steps').map((step, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-[11px] text-slate-700">
              <span className="w-5 h-5 rounded-full bg-solar-blue text-white flex-shrink-0 flex items-center justify-center font-bold text-[10px]">
                {idx + 1}
              </span>
              <span className="font-medium pt-0.5">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Docs Card */}
      <div className="bg-solar-blue text-white p-4 rounded-xl shadow space-y-3">
        <h3 className="text-xs font-bold text-white flex items-center space-x-1.5 border-b border-blue-800 pb-2">
          <FileCheck className="w-4 h-4 text-solar-amber" />
          <span>{t('subsidy.docsTitle')}</span>
        </h3>
        <div className="space-y-1.5 text-[11px]">
          {t('subsidy.docs').map((doc, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <span>{doc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   MAIN PM SURYA GHAR GUIDE COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const PmSuryaGharGuide = ({ openQuoteModal, navigateToTab }) => {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-16 bg-white border-b border-slate-200/60 font-sans" id="subsidy">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-solar-amber/20 px-3.5 py-1.5 rounded-full border border-solar-amber/40 text-xs font-extrabold text-slate-900 uppercase tracking-wider">
            <Award className="w-4 h-4 text-solar-amber" />
            <span>Government Scheme Assistance</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            {t('subsidy.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            {t('subsidy.subtitle')}
          </p>
        </div>

        {/* Scheme Overview Banner */}
        <div className="bg-slate-50 p-4 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-8 sm:mb-10 space-y-2 sm:space-y-4">
          <h3 className="text-base sm:text-lg font-bold text-solar-blue flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-solar-green" />
            <span>{t('subsidy.whatIsTitle')}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {t('subsidy.whatIsDesc')}
          </p>
        </div>

        <DesktopSubsidyView openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} t={t} />
        <MobileSubsidyView openQuoteModal={openQuoteModal} navigateToTab={navigateToTab} t={t} />

        {/* Bottom CTA Banner */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-solar-green to-emerald-800 text-white p-6 sm:p-8 rounded-2xl shadow-xl text-center space-y-4">
          <h3 className="text-lg sm:text-2xl font-extrabold">Need Help With Solar Subsidy?</h3>
          <p className="text-xs sm:text-sm text-green-100 max-w-xl mx-auto font-medium">
            Contact our MSEDCL liaisoning experts today for step-by-step guidance on claiming your PM Surya Ghar subsidy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
            <button
              onClick={() => navigateToTab('contact')}
              className="bg-white text-solar-green hover:bg-slate-100 font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow transition-all flex items-center justify-center space-x-1.5"
            >
              <span>{t('subsidy.ctaBtn')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={openQuoteModal}
              className="bg-solar-blue hover:bg-solar-blue-dark text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow transition-all"
            >
              Get Free Site Feasibility Survey
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
