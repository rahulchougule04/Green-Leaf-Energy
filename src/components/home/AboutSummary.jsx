import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Target, Eye, Award, ShieldCheck, CheckCircle2, ArrowRight, Zap, Users } from 'lucide-react';

export const AboutSummary = ({ navigateToTab }) => {
  const { t } = useLanguage();

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 font-sans" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            {t('about.title')} - {t('about.companyName')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('about.headline')}
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-semibold leading-relaxed">
            {t('about.mainStatement')}
          </p>
        </div>

        {/* Engineering Background & Experience Highlight */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-extrabold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-md">
                <Zap className="w-3.5 h-3.5" />
                <span>18+ Years Core Electrical Engineering Background</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Backed by Decades of Technical Expertise in Power & Energy
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t('about.experienceText')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Licensed Electrical Contractor (Govt. of Maharashtra)</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>MSEDCL Empanelled Solar EPC Vendor</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>PM Surya Ghar Authorized National Portal Partner</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>ISO 9001:2015 Quality Management Certified</span>
                </div>
              </div>
            </div>

            {/* Experience Metric Pill */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-xl p-6 text-center space-y-3">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400">18+</div>
              <div className="text-sm font-extrabold uppercase tracking-wider text-slate-200">
                Years of Engineering Experience
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Serving Baramati, Pune, Daund, Indapur, Phaltan, Shirur, and all surrounding industrial MIDCs.
              </p>
            </div>

          </div>
        </div>

        {/* 3 Key Pillars: Vision | Mission | Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          
          {/* 1. Vision */}
          <div className="relative bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 hover:border-emerald-500/80 transition-all duration-300 flex flex-col justify-between space-y-4 group overflow-hidden cursor-pointer">
            {/* Shimmer Light Reflection */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-emerald-100/30 to-transparent pointer-events-none" />
            
            <div className="space-y-3.5 relative z-10">
              <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-emerald-600 group-hover:text-white shadow-xs">
                <Eye className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                Vision
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {t('about.visionText')}
              </p>
            </div>

            <div className="relative z-10 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-black text-emerald-700 uppercase tracking-wider flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Maharashtra Focus</span>
              </span>
            </div>

            {/* Bottom Active Glow Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          {/* 2. Mission */}
          <div className="relative bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 hover:border-blue-500/80 transition-all duration-300 flex flex-col justify-between space-y-4 group overflow-hidden cursor-pointer">
            {/* Shimmer Light Reflection */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent pointer-events-none" />

            <div className="space-y-3.5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                <Target className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                {t('about.missionTitle') || 'Mission'}
              </h4>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                {t('about.missionText')}
              </p>
            </div>

            <div className="relative z-10 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-black text-blue-700 uppercase tracking-wider flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span>Quality & Customer Focus</span>
              </span>
            </div>

            {/* Bottom Active Glow Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

          {/* 3. Core Values */}
          <div className="relative bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:-translate-y-2.5 hover:border-purple-500/80 transition-all duration-300 flex flex-col justify-between space-y-4 group overflow-hidden cursor-pointer">
            {/* Shimmer Light Reflection */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-purple-100/30 to-transparent pointer-events-none" />

            <div className="space-y-3.5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-purple-600 group-hover:text-white shadow-xs">
                <ShieldCheck className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-black text-slate-900 group-hover:text-purple-700 transition-colors">
                {t('about.valuesTitle') || 'Our Values'}
              </h4>
              <div className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-semibold">
                {t('about.values')}
              </div>
            </div>

            <div className="relative z-10 pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-black text-purple-700 uppercase tracking-wider flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                <span>Customer First Approach</span>
              </span>
            </div>

            {/* Bottom Active Glow Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>

        </div>

        {/* Action Button */}
        {navigateToTab && (
          <div className="text-center pt-2">
            <button
              onClick={() => navigateToTab('contact')}
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-emerald-700 hover:text-emerald-800 bg-white border border-emerald-200 px-5 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
            >
              <span>Get in Touch with Our Solar Engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
