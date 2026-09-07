import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { CheckCircle2, Target, Eye, ArrowRight } from 'lucide-react';

const housePhoto = 'https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1200&auto=format&fit=crop';

/* ==========================================================================
   DESKTOP ABOUT VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopAboutView = ({ navigateToTab, t }) => {
  return (
    <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
      {/* Left Desktop Visual Container */}
      <div className="col-span-5 relative">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-sky-900">
          <img 
            src={housePhoto} 
            onError={(e) => { 
              e.currentTarget.onerror = null;
              e.currentTarget.src = '/solar-about.svg';
            }}
            alt="Rooftop Solar Installation"
            className="w-full h-[400px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="bg-solar-green text-white font-extrabold text-xs px-3 py-1 rounded-md inline-block uppercase tracking-wider shadow-sm">
              MSEDCL APPROVED EPC
            </div>
            <h4 className="text-xl font-bold">{siteConfig.companyName}</h4>
            <p className="text-xs text-slate-200">{siteConfig.tagline}</p>
          </div>
        </div>

        {/* Experience Badge */}
        <div className="absolute -bottom-6 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center space-x-3 z-10">
          <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-600 flex items-center justify-center font-extrabold text-xl flex-shrink-0">
            18+
          </div>
          <div className="leading-tight">
            <div className="text-xs font-extrabold text-solar-blue">Years Electrical</div>
            <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Engineering Expertise</div>
          </div>
        </div>
      </div>

      {/* Right Desktop Content */}
      <div className="col-span-7 space-y-6 text-left">
        <div className="space-y-2">
          <span className="text-xs font-extrabold text-solar-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full inline-block border border-green-100">
            {t('about.title')}
          </span>
          <h2 className="text-4xl font-extrabold text-solar-blue tracking-tight leading-tight">
            {t('about.subtitle')}
          </h2>
        </div>

        <p className="text-base text-slate-600 leading-relaxed font-normal">
          {t('about.description')}
        </p>

        <div className="grid grid-cols-2 gap-4 text-left">
          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-solar-green">
              <Target className="w-5 h-5" />
              <h4 className="font-bold text-xs uppercase tracking-wider text-solar-blue">
                {t('about.missionTitle')}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-normal">
              {t('about.missionText')}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm space-y-2">
            <div className="flex items-center space-x-2 text-solar-blue">
              <Eye className="w-5 h-5 text-solar-green" />
              <h4 className="font-bold text-xs uppercase tracking-wider text-solar-blue">
                {t('about.visionTitle')}
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-normal">
              {t('about.visionText')}
            </p>
          </div>
        </div>

        <div className="space-y-3 pt-1 text-left">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            {t('about.whyTitle')}:
          </h4>
          <div className="grid grid-cols-2 gap-2.5 text-xs sm:text-sm">
            {t('about.highlights').map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-slate-700">
                <CheckCircle2 className="w-4.5 h-4.5 text-solar-green flex-shrink-0 mt-0.5" />
                <span className="font-semibold leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={() => navigateToTab('about')}
            className="bg-solar-blue hover:bg-solar-blue-dark text-white text-xs font-bold px-7 py-4 rounded-xl shadow transition-all inline-flex items-center space-x-2 transform hover:-translate-y-0.5 active:scale-95"
          >
            <span>Read Full Corporate Profile</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   MOBILE ABOUT VIEW (screen width < 1024px)
   ========================================================================== */
const MobileAboutView = ({ navigateToTab, t }) => {
  return (
    <div className="lg:hidden space-y-6">
      {/* Mobile Image Container */}
      <div className="relative rounded-xl overflow-hidden shadow-lg border-2 border-white bg-sky-900">
        <img 
          src={housePhoto} 
          onError={(e) => { 
            e.currentTarget.onerror = null;
            e.currentTarget.src = '/solar-about.svg';
          }}
          alt="Rooftop Solar Installation"
          className="w-full h-64 sm:h-72 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
        
        <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
          <span className="bg-solar-green text-white font-extrabold text-[9px] px-2 py-0.5 rounded uppercase">
            MSEDCL APPROVED VENDOR
          </span>
          <h4 className="text-base font-bold">{siteConfig.companyName}</h4>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="space-y-4 text-left">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-solar-green uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full inline-block border border-green-100">
            {t('about.title')}
          </span>
          <h2 className="text-xl font-extrabold text-solar-blue tracking-tight">
            {t('about.subtitle')}
          </h2>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          {t('about.description')}
        </p>

        {/* Mission & Vision Stacked */}
        <div className="space-y-2 text-left">
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
            <div className="flex items-center space-x-2 text-solar-green">
              <Target className="w-4 h-4" />
              <h4 className="font-bold text-xs text-solar-blue">{t('about.missionTitle')}</h4>
            </div>
            <p className="text-xs text-slate-600">{t('about.missionText')}</p>
          </div>

          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs space-y-1">
            <div className="flex items-center space-x-2 text-solar-blue">
              <Eye className="w-4 h-4 text-solar-green" />
              <h4 className="font-bold text-xs text-solar-blue">{t('about.visionTitle')}</h4>
            </div>
            <p className="text-xs text-slate-600">{t('about.visionText')}</p>
          </div>
        </div>

        {/* Highlights List */}
        <div className="space-y-2 pt-1 text-left">
          <h4 className="text-xs font-bold text-slate-800 uppercase">{t('about.whyTitle')}:</h4>
          <div className="space-y-1.5 text-xs">
            {t('about.highlights').map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-solar-green flex-shrink-0 mt-0.5" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigateToTab('about')}
          className="w-full bg-solar-blue text-white text-xs font-bold py-3 rounded-xl shadow flex items-center justify-center space-x-1.5"
        >
          <span>Read Corporate Profile</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

/* ==========================================================================
   MAIN ABOUT SUMMARY COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const AboutSummary = ({ navigateToTab }) => {
  const { t } = useLanguage();

  return (
    <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200/60 font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <DesktopAboutView navigateToTab={navigateToTab} t={t} />
        <MobileAboutView navigateToTab={navigateToTab} t={t} />
      </div>
    </section>
  );
};
