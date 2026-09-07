import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldAlert } from 'lucide-react';

export const BrandsWeDealIn = () => {
  const { t } = useLanguage();

  const brandList = [
    { name: "WAAREE", category: "Tier-1 Solar Panels" },
    { name: "ADANI SOLAR", category: "Mono-PERC Modules" },
    { name: "VIKRAM SOLAR", category: "Bifacial Solar Panels" },
    { name: "V-GUARD", category: "Solar Inverters & Batteries" },
    { name: "VSOLE", category: "Grid-Tie Inverters" },
    { name: "POLYCAB", category: "Solar DC Armored Cables" },
    { name: "HAVELLS", category: "Switchgear & Protection" },
    { name: "LUMINOUS", category: "Solar Energy Storage" },
    { name: "GROWATT", category: "Smart String Inverters" }
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200/60 font-sans">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="text-center space-y-2 mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-solar-blue uppercase tracking-wider">
            {t('brands.title')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            {t('brands.subtitle')}
          </p>
        </div>

        {/* Clean Grayscale Brand Cards Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {brandList.map((brand, idx) => (
            <div 
              key={idx}
              className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-green-300 transition-all flex flex-col items-center justify-center text-center space-y-1.5 group"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-solar-green group-hover:text-white text-solar-blue font-extrabold text-xs flex items-center justify-center transition-colors flex-shrink-0">
                {brand.name.substring(0, 2)}
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-solar-green transition-colors leading-tight">
                {brand.name}
              </span>
              <span className="text-[9px] text-slate-400 font-medium line-clamp-1">
                {brand.category}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <span className="inline-flex items-center space-x-1.5 text-[10px] sm:text-xs font-semibold text-slate-400 bg-white px-4 py-1.5 rounded-full border border-slate-200">
            <ShieldAlert className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>Note: Logos & trademarks belong to their respective manufacturers. We supply & integrate certified products.</span>
          </span>
        </div>

      </div>
    </section>
  );
};
