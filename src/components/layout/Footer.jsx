import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Sun, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

/* ==========================================================================
   DESKTOP FOOTER VIEW (screen width >= 768px)
   ========================================================================== */
const DesktopFooterView = ({ handleNav, t }) => {
  return (
    <div className="hidden md:block max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-12 gap-8">
        
        {/* Column 1: Brand Bio */}
        <div className="col-span-4 space-y-4">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleNav('home')}>
            <div className="w-10 h-10 rounded-xl bg-solar-green flex items-center justify-center text-white shadow-md">
              <Sun className="w-6 h-6 text-solar-amber" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight block leading-none">
                {siteConfig.companyName}
              </span>
              <span className="text-[10px] font-bold text-solar-green uppercase tracking-widest block mt-0.5">
                {siteConfig.positioning}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed">
            {siteConfig.tagline}. Premier MSEDCL approved solar EPC company with 18 years of electrical engineering experience serving Pune, Baramati, and Maharashtra.
          </p>

          <div className="p-3 bg-blue-950/80 rounded-xl border border-blue-900/60 text-xs text-green-300 flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-solar-amber flex-shrink-0" />
            <span>{siteConfig.credentials.msedclApproved}</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="col-span-2 space-y-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-blue-900/80 pb-2">
            {t('footer.quickLinks')}
          </h4>
          <ul className="space-y-2 text-xs">
            {['home', 'about', 'services', 'calculator', 'subsidy', 'contact'].map((id) => (
              <li key={id}>
                <button 
                  onClick={() => handleNav(id)}
                  className="hover:text-solar-green transition-colors capitalize"
                >
                  • {t(`nav.${id}`)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Solar Services */}
        <div className="col-span-3 space-y-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-blue-900/80 pb-2">
            {t('footer.services')}
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => handleNav('services')} className="hover:text-solar-green transition-colors">• Residential Rooftop Solar</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-solar-green transition-colors">• Commercial Solar Power Plant</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-solar-green transition-colors">• Industrial Solar Solutions</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-solar-green transition-colors">• Hybrid Solar Backup</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-solar-green transition-colors">• Off Grid Solar Systems</button></li>
            <li><button onClick={() => handleNav('services')} className="hover:text-solar-green transition-colors">• Solar Consultancy & Audits</button></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="col-span-3 space-y-3">
          <h4 className="text-sm font-extrabold text-white uppercase tracking-wider border-b border-blue-900/80 pb-2">
            {t('footer.contactInfo')}
          </h4>
          <div className="space-y-2.5 text-xs text-slate-300">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-solar-green flex-shrink-0 mt-0.5" />
              <span>{siteConfig.contact.address.fullAddress}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-solar-amber flex-shrink-0" />
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:text-white font-semibold">
                {siteConfig.contact.phonePrimary}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <WhatsAppIcon className="w-4 h-4 fill-[#25D366] flex-shrink-0" />
              <a href={`https://wa.me/${siteConfig.contact.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white font-medium">
                WhatsApp: +{siteConfig.contact.whatsappNumber}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-solar-green flex-shrink-0" />
              <span>{siteConfig.contact.email}</span>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="w-4 h-4 text-solar-amber flex-shrink-0 mt-0.5" />
              <span>{siteConfig.contact.workingHours}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

/* ==========================================================================
   MOBILE FOOTER VIEW (screen width < 768px)
   ========================================================================== */
const MobileFooterView = ({ handleNav, t }) => {
  return (
    <div className="md:hidden px-4 py-8 space-y-6">
      {/* Mobile Brand Info */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => handleNav('home')}>
          <div className="w-8 h-8 rounded-lg bg-solar-green flex items-center justify-center text-white shadow">
            <Sun className="w-5 h-5 text-solar-amber" />
          </div>
          <div>
            <span className="text-base font-extrabold text-white tracking-tight block leading-none">
              {siteConfig.companyName}
            </span>
            <span className="text-[8px] font-bold text-solar-green uppercase tracking-wider block mt-0.5">
              {siteConfig.positioning}
            </span>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 leading-relaxed">
          Premier MSEDCL approved solar EPC vendor in Baramati & Pune with 18+ years of electrical engineering excellence.
        </p>
      </div>

      {/* Mobile Contact Quick Card */}
      <div className="bg-blue-950/80 p-3.5 rounded-xl border border-blue-900/60 space-y-2 text-xs">
        <div className="flex items-center space-x-2 text-solar-amber font-bold text-[11px]">
          <ShieldCheck className="w-4 h-4" />
          <span>{siteConfig.credentials.msedclApproved}</span>
        </div>
        <div className="flex items-center space-x-2 text-white">
          <Phone className="w-3.5 h-3.5 text-solar-amber" />
          <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold">{siteConfig.contact.phonePrimary}</a>
        </div>
        <div className="flex items-center space-x-2 text-slate-300 text-[11px]">
          <MapPin className="w-3.5 h-3.5 text-solar-green flex-shrink-0" />
          <span className="truncate">{siteConfig.contact.address.fullAddress}</span>
        </div>
      </div>

      {/* Mobile Quick Navigation Grid */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        {['home', 'about', 'services', 'calculator', 'subsidy', 'contact'].map((id) => (
          <button
            key={id}
            onClick={() => handleNav(id)}
            className="text-left bg-blue-950/40 p-2.5 rounded-lg border border-blue-900/40 text-slate-300 font-bold capitalize hover:text-solar-green"
          >
            • {t(`nav.${id}`)}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ==========================================================================
   MAIN FOOTER COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const Footer = ({ setActiveTab }) => {
  const { t } = useLanguage();

  const handleNav = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-solar-blue-dark text-slate-300 font-sans border-t border-blue-900/60 pb-20 md:pb-0">
      
      <DesktopFooterView handleNav={handleNav} t={t} />
      <MobileFooterView handleNav={handleNav} t={t} />

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-slate-950 py-4 border-t border-blue-950 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            {t('footer.rights')}
          </div>
          <div className="flex items-center space-x-3 text-[10px] sm:text-[11px]">
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Privacy Policy: All customer data collected for site survey is strictly confidential."); }} className="hover:text-white">{t('footer.privacy')}</a>
            <span>•</span>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Terms & Conditions: Solar installation subject to DISCOM feeder approval."); }} className="hover:text-white">{t('footer.terms')}</a>
            <span>•</span>
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Disclaimer: Estimates depend on roof shading and sunlight hours."); }} className="hover:text-white">{t('footer.disclaimer')}</a>
          </div>
        </div>
      </div>

    </footer>
  );
};
