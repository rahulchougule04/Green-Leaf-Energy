import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Home, Building2, Factory, Globe, Cpu, BatteryCharging, 
  Sun, Battery, Zap, Wrench, FileText, ArrowRight 
} from 'lucide-react';

/* ==========================================================================
   DESKTOP SERVICES VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopServicesView = ({ servicesList, serviceIconMap, openQuoteModal, openServiceModal, t }) => {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-6">
      {servicesList.map((service) => {
        const Icon = serviceIconMap[service.id] || Sun;
        return (
          <div 
            key={service.id}
            id={service.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-solar-lg hover:border-solar-green/40 transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1 space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-solar-green/10 text-solar-green group-hover:bg-solar-green group-hover:text-white transition-all flex items-center justify-center font-bold shadow-xs">
                <Icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-lg font-extrabold text-solar-blue group-hover:text-solar-green transition-colors">
                {service.name}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {service.desc}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => openServiceModal(service)}
                className="text-xs font-bold text-solar-blue hover:text-solar-green transition-colors flex items-center space-x-1 whitespace-nowrap"
              >
                <span>{t('services.learnMore')}</span>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
              </button>

              <button
                onClick={openQuoteModal}
                className="bg-solar-green hover:bg-solar-green-dark text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xs transition-all uppercase tracking-wider whitespace-nowrap"
              >
                {t('services.getQuote')}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ==========================================================================
   MOBILE SERVICES VIEW (screen width < 1024px)
   ========================================================================== */
const MobileServicesView = ({ servicesList, serviceIconMap, openQuoteModal, openServiceModal, t }) => {
  return (
    <div className="lg:hidden space-y-4">
      {servicesList.map((service) => {
        const Icon = serviceIconMap[service.id] || Sun;
        return (
          <div 
            key={service.id}
            id={service.id}
            className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm space-y-3"
          >
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-solar-green/10 text-solar-green flex items-center justify-center font-bold flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              
              <div className="space-y-1 flex-1">
                <h3 className="text-sm font-extrabold text-solar-blue">
                  {service.name}
                </h3>
                <p className="text-[11px] text-slate-600 leading-normal">
                  {service.desc}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
              <button
                onClick={() => openServiceModal(service)}
                className="text-xs font-bold text-solar-blue flex items-center space-x-1"
              >
                <span>{t('services.learnMore')}</span>
                <ArrowRight className="w-3 h-3" />
              </button>

              <button
                onClick={openQuoteModal}
                className="bg-solar-green text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow"
              >
                {t('services.getQuote')}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* ==========================================================================
   MAIN SERVICES COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const ServicesGrid = ({ openQuoteModal, openServiceModal }) => {
  const { t } = useLanguage();

  const serviceIconMap = {
    "residential-rooftop": Home,
    "commercial-solar": Building2,
    "industrial-solar": Factory,
    "ground-mounted": Globe,
    "hybrid-solar": Cpu,
    "electrical-contracting": Zap,
    "industrial-electrical": Factory,
    "lt-ht-electrical": BatteryCharging,
    "electrical-testing": Wrench
  };

  const servicesList = t('services.list');

  return (
    <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200/60 font-sans" id="services">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <span className="text-xs font-extrabold text-solar-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100">
            {t('services.title')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            {t('services.subtitle')}
          </h2>
        </div>

        <DesktopServicesView 
          servicesList={servicesList}
          serviceIconMap={serviceIconMap}
          openQuoteModal={openQuoteModal}
          openServiceModal={openServiceModal}
          t={t}
        />

        <MobileServicesView 
          servicesList={servicesList}
          serviceIconMap={serviceIconMap}
          openQuoteModal={openQuoteModal}
          openServiceModal={openServiceModal}
          t={t}
        />

        {/* Services Bottom CTA Banner */}
        <div className="mt-8 sm:mt-12 bg-solar-blue text-white p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-extrabold text-sm sm:text-base">Need a Customized Solar Solution?</h4>
            <p className="text-xs text-slate-300">Talk to our MSEDCL approved solar engineers for free technical consultancy.</p>
          </div>
          <button
            onClick={openQuoteModal}
            className="w-full sm:w-auto bg-solar-green hover:bg-solar-green-dark text-white font-extrabold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            Get Free Solar Quote
          </button>
        </div>

      </div>
    </section>
  );
};
