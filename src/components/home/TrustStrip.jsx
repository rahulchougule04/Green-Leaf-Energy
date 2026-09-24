import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Award, ShieldCheck, Sun, CheckCircle2, Wrench, Zap, Sparkles } from 'lucide-react';

export const TrustStrip = () => {
  const { t } = useLanguage();
  const [activeBadge, setActiveBadge] = useState(null);

  const trustBadges = [
    {
      icon: Award,
      title: t('trust.badge1.title') || "ISO 9001:2015 Certified",
      desc: t('trust.badge1.desc') || "Certified Quality Management System",
      code: "ISO 9001:2015",
      color: "from-emerald-500/10 to-emerald-500/5",
      iconColor: "text-emerald-600 bg-emerald-50",
      accent: "#057A44"
    },
    {
      icon: ShieldCheck,
      title: t('trust.badge2.title') || "MSEDCL Approved Vendor",
      desc: t('trust.badge2.desc') || "Authorized DISCOM Net Metering Partner",
      code: "MSEDCL EMPANELLED",
      color: "from-blue-500/10 to-blue-500/5",
      iconColor: "text-blue-600 bg-blue-50",
      accent: "#1D4ED8"
    },
    {
      icon: Sun,
      title: t('trust.badge3.title') || "PM Surya Ghar – Authorized Vendor",
      desc: t('trust.badge3.desc') || "Direct Govt Subsidy Portal Partner",
      code: "PM SURYA GHAR",
      color: "from-amber-500/10 to-amber-500/5",
      iconColor: "text-amber-500 bg-amber-50",
      accent: "#F59E0B"
    },
    {
      icon: CheckCircle2,
      title: t('trust.badge4.title') || "MNRE/DCR Compliant Products",
      desc: t('trust.badge4.desc') || "High-Efficiency Tier-1 DCR Modules",
      code: "DCR / ALMM",
      color: "from-teal-500/10 to-teal-500/5",
      iconColor: "text-teal-600 bg-teal-50",
      accent: "#0D9488"
    },
    {
      icon: Wrench,
      title: t('trust.badge5.title') || "Quality Installation",
      desc: t('trust.badge5.desc') || "Engineered Turnkey Erection Standards",
      code: "TURNKEY EPC",
      color: "from-green-500/10 to-green-500/5",
      iconColor: "text-green-600 bg-green-50",
      accent: "#16A34A"
    },
    {
      icon: Zap,
      title: t('trust.badge6.title') || "Professional Electrical Services",
      desc: t('trust.badge6.desc') || "18+ Years Licensed Contracting Team",
      code: "18+ YRS EXP",
      color: "from-indigo-500/10 to-indigo-500/5",
      iconColor: "text-indigo-600 bg-indigo-50",
      accent: "#4F46E5"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-slate-50/50 to-white py-10 sm:py-14 border-b border-slate-200/80 shadow-xs relative z-20 font-sans overflow-hidden">
      
      {/* Ambient background blur glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-10 animate-soft-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10 animate-soft-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-200/70 px-4 py-1.5 rounded-full shadow-xs animate-float">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-xs font-black text-emerald-700 uppercase tracking-widest">
              Government Approved & Certified
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-3">
            {t('trust.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1.5 font-medium">
            {t('trust.subtitle')}
          </p>
        </div>

        {/* 6 Interactive Animated Trust Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            const isHovered = activeBadge === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveBadge(idx)}
                onMouseLeave={() => setActiveBadge(null)}
                className={`relative bg-white p-4 sm:p-4.5 rounded-2xl border transition-all duration-300 transform text-left flex flex-col justify-between group overflow-hidden cursor-pointer ${
                  isHovered 
                    ? '-translate-y-2 shadow-xl border-emerald-500 ring-2 ring-emerald-500/20' 
                    : 'border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1'
                }`}
                style={{
                  transitionDelay: `${idx * 40}ms`
                }}
              >
                {/* Shimmer Light Reflection on Hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                <div>
                  {/* Card Top Strip */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-11 h-11 rounded-xl ${badge.iconColor} flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3 shadow-xs`}>
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-500 bg-slate-100 group-hover:bg-emerald-50 group-hover:text-emerald-700 px-2 py-0.5 rounded-md transition-colors border border-slate-200/60">
                      {badge.code}
                    </span>
                  </div>

                  {/* Title & Checkmark */}
                  <div className="flex items-start space-x-1.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <CheckCircle2 className="w-3 h-3" />
                    </div>
                    <h3 className="text-xs sm:text-[13px] font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                      {badge.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-3 pt-2.5 border-t border-slate-100 group-hover:text-slate-700 transition-colors">
                  {badge.desc}
                </p>

                {/* Bottom Active Glow Indicator */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

