import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Zap, Clock, FileCheck, Award, HeartHandshake, Wrench, Layers, CheckCircle2, ThumbsUp } from 'lucide-react';

export const WhyGreenLeaf = () => {
  const { t } = useLanguage();

  const iconMap = [
    Layers,         // Best Quality Panels
    Wrench,         // Premium Mounting Structure
    Zap,            // Fast Installation
    FileCheck,      // Net Metering Support
    Award,          // Govt Subsidy Assistance
    ShieldCheck,    // Product Warranty
    HeartHandshake, // Service Support
    Clock,          // Professional Engineering
    ThumbsUp,       // Transparent Process
    CheckCircle2    // End-to-End EPC Solution
  ];

  const points = t('why.points');

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100 font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <span className="text-xs font-extrabold text-solar-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100">
            {t('why.title')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            {t('why.subtitle')}
          </h2>
        </div>

        {/* 10 Advantage Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {points.map((pt, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 hover:border-solar-green/40 shadow-sm hover:shadow-solar transition-all duration-300 transform hover:-translate-y-1 space-y-3 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-solar-green/10 text-solar-green group-hover:bg-solar-green group-hover:text-white transition-colors flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-extrabold text-solar-blue group-hover:text-solar-green transition-colors leading-snug">
                    ✓ {pt.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
