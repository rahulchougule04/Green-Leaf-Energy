import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Download, FileText, ShieldCheck } from 'lucide-react';

export const DownloadsSection = () => {
  const { t } = useLanguage();

  const downloadItems = [
    { title: "Company Profile PDF", desc: "Detailed 18-year electrical EPC background & MSEDCL vendor details.", file: "#" },
    { title: "Solar Rooftop Brochure", desc: "PM Surya Ghar subsidy slabs, panel specs & ROI calculations.", file: "#" },
    { title: "Service & AMC Brochure", desc: "Annual maintenance packages, cleaning schedules & warranties.", file: "#" }
  ];

  const handleDownload = (title) => {
    alert(`Downloading ${title} placeholder. Connect this link to your PDF asset in siteConfig.js.`);
  };

  return (
    <section className="py-16 bg-white border-b border-slate-200/60 font-sans" id="downloads">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100 text-xs font-extrabold text-solar-green uppercase tracking-wider">
            <Download className="w-4 h-4" />
            <span>Brochures & Documents</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-solar-blue">
            Download Official Solar Resources
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {downloadItems.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4 hover:border-solar-green transition-all">
              <div className="w-12 h-12 rounded-xl bg-solar-green/10 text-solar-green flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-solar-blue">{item.title}</h4>
                <p className="text-xs text-slate-500 font-medium mt-1">{item.desc}</p>
              </div>
              <button
                onClick={() => handleDownload(item.title)}
                className="w-full bg-solar-blue hover:bg-solar-blue-dark text-white font-extrabold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow transition-all"
              >
                <Download className="w-4 h-4 text-solar-amber" />
                <span>Download PDF</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
