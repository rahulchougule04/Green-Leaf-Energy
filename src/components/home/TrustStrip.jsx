import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Award, Users, CheckCircle2, FileCheck, Wrench } from 'lucide-react';

/* ==========================================================================
   DESKTOP TRUST STRIP VIEW (screen width >= 640px)
   ========================================================================== */
const DesktopTrustStripView = ({ trustItems }) => {
  return (
    <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
      {trustItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div 
            key={index} 
            className="bg-slate-50 hover:bg-green-50/60 p-5 rounded-2xl border border-slate-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group text-center flex flex-col items-center justify-start space-y-2.5 h-full"
          >
            <div className="w-12 h-12 rounded-full bg-white group-hover:bg-solar-green text-solar-green group-hover:text-white flex items-center justify-center shadow-sm transition-colors border border-slate-100 flex-shrink-0">
              <IconComponent className="w-6 h-6" />
            </div>
            <h4 className="text-xs sm:text-sm font-extrabold text-solar-blue group-hover:text-solar-green transition-colors leading-snug">
              ✓ {item.title}
            </h4>
            <p className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

/* ==========================================================================
   MOBILE TRUST STRIP VIEW (screen width < 640px)
   ========================================================================== */
const MobileTrustStripView = ({ trustItems }) => {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:hidden">
      {trustItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div 
            key={index} 
            className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center flex flex-col items-center justify-start space-y-1.5 shadow-xs h-full"
          >
            <div className="w-8 h-8 rounded-full bg-white text-solar-green flex items-center justify-center shadow-xs border border-slate-100 flex-shrink-0">
              <IconComponent className="w-4 h-4" />
            </div>
            <h4 className="text-[11px] font-extrabold text-solar-blue leading-tight">
              ✓ {item.title}
            </h4>
            <p className="text-[9px] text-slate-500 font-medium leading-tight">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
};

/* ==========================================================================
   MAIN TRUST STRIP COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const TrustStrip = () => {
  const { t } = useLanguage();

  const trustItems = [
    {
      icon: ShieldCheck,
      title: t('trust.msedcl'),
      desc: "Authorized DISCOM Liaison & Net Metering"
    },
    {
      icon: Award,
      title: t('trust.pmSuryaGhar'),
      desc: "Direct Govt Subsidy Processing"
    },
    {
      icon: FileCheck,
      title: t('trust.iso'),
      desc: "Certified Quality Management System"
    },
    {
      icon: Users,
      title: t('trust.engineers'),
      desc: "18+ Years Electrical Experience"
    },
    {
      icon: CheckCircle2,
      title: t('trust.subsidy'),
      desc: "100% Documentation Support"
    },
    {
      icon: Wrench,
      title: t('trust.installation'),
      desc: "Turnkey EPC Engineering Erection"
    }
  ];

  return (
    <section className="bg-white py-6 sm:py-10 border-b border-slate-100 shadow-sm relative z-20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <DesktopTrustStripView trustItems={trustItems} />
        <MobileTrustStripView trustItems={trustItems} />
      </div>
    </section>
  );
};
