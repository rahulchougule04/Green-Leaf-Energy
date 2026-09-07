import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Sun, Phone, Globe, Menu, X, ShieldCheck } from 'lucide-react';

/* ==========================================================================
   DESKTOP NAVBAR VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopNavbarView = ({ activeTab, navItems, handleNavClick, openQuoteModal, language, toggleLanguage, t }) => {
  return (
    <div className="hidden lg:block sticky top-0 z-50 font-sans shadow-md bg-white">
      {/* Desktop Top Contact & Language Bar */}
      <div className="bg-solar-blue text-white text-xs py-2 px-4 sm:px-8 lg:px-12 border-b border-blue-900/60">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center bg-solar-green text-white px-3 py-1 rounded-full font-bold text-xs uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-solar-amber flex-shrink-0" />
              {siteConfig.credentials.msedclApproved}
            </span>
          </div>

          <div className="flex items-center space-x-8">
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`} 
              className="flex items-center space-x-2 hover:text-green-300 transition-colors text-xs font-extrabold"
            >
              <Phone className="w-4 h-4 text-solar-amber flex-shrink-0" />
              <span>{siteConfig.contact.phonePrimary}</span>
            </a>

            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-blue-900/90 hover:bg-solar-green px-3.5 py-1 rounded-full text-xs font-extrabold transition-all border border-blue-700/60 shadow-xs"
            >
              <Globe className="w-4 h-4 text-solar-amber flex-shrink-0" />
              <span>{language === 'en' ? 'मराठी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Menu Header */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-3.5 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3.5 cursor-pointer group flex-shrink-0"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-solar-green to-solar-green-dark flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-all">
            <Sun className="w-6 h-6 text-solar-amber animate-spin-slow" />
          </div>
          <div>
            <span className="text-xl xl:text-2xl font-extrabold text-solar-blue tracking-tight block leading-none">
              GREEN LEAF
            </span>
            <span className="text-[10px] font-extrabold text-solar-green uppercase tracking-widest block mt-0.5">
              ENERGY SOLUTION
            </span>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex items-center space-x-2 xl:space-x-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2.5 rounded-xl text-sm font-extrabold transition-all ${
                activeTab === item.id 
                  ? 'text-solar-green bg-green-50 shadow-xs border border-green-100' 
                  : 'text-slate-700 hover:text-solar-green hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* High Conversion CTA Button */}
        <button
          onClick={openQuoteModal}
          className="bg-solar-green hover:bg-solar-green-dark text-white px-6 py-3 rounded-xl text-xs font-extrabold shadow-md hover:shadow-solar transition-all uppercase tracking-wider active:scale-95 flex-shrink-0"
        >
          {t('nav.getQuote')}
        </button>
      </div>
    </div>
  );
};

/* ==========================================================================
   MOBILE NAVBAR VIEW (screen width < 1024px)
   ========================================================================== */
const MobileNavbarView = ({ activeTab, navItems, handleNavClick, openQuoteModal, language, toggleLanguage, t }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="lg:hidden sticky top-0 z-50 font-sans shadow-sm bg-white">
      {/* Mobile Top Info Strip */}
      <div className="bg-solar-blue text-white py-1 px-3 border-b border-blue-900/60">
        <div className="flex justify-between items-center text-[10px]">
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-3 h-3 text-solar-amber flex-shrink-0" />
            <span className="font-bold truncate max-w-[160px]">{siteConfig.credentials.msedclApproved}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold text-solar-amber flex items-center space-x-1">
              <Phone className="w-3 h-3 text-solar-amber" />
              <span>Call</span>
            </a>
            <button 
              onClick={toggleLanguage}
              className="bg-blue-900 px-2 py-0.5 rounded-full font-bold text-[9px] border border-blue-700"
            >
              {language === 'en' ? 'मराठी' : 'EN'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header Bar */}
      <div className="px-3 py-2 flex justify-between items-center border-b border-slate-100">
        {/* Brand Logo Compact */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2 cursor-pointer flex-shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-solar-green flex items-center justify-center text-white shadow-sm">
            <Sun className="w-5 h-5 text-solar-amber" />
          </div>
          <div>
            <span className="text-base font-extrabold text-solar-blue tracking-tight block leading-none">
              GREEN LEAF
            </span>
            <span className="text-[8px] font-extrabold text-solar-green uppercase tracking-wider block">
              ENERGY SOLUTION
            </span>
          </div>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center space-x-1.5 flex-shrink-0">
          <button
            onClick={openQuoteModal}
            className="bg-solar-green text-white px-2.5 py-1.5 rounded-lg text-[11px] font-extrabold shadow whitespace-nowrap"
          >
            {t('nav.getQuote')}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-solar-blue hover:bg-slate-100"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-2xl animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
            <button
              onClick={toggleLanguage}
              className="w-full py-2.5 bg-slate-100 rounded-xl text-xs font-bold text-slate-800 flex items-center justify-center space-x-1.5"
            >
              <Globe className="w-4 h-4 text-solar-green" />
              <span>{language === 'en' ? 'मराठी मध्ये पहा' : 'Switch to English'}</span>
            </button>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full py-2.5 bg-solar-blue text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-solar-amber" />
              <span>{siteConfig.contact.phonePrimary}</span>
            </a>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  handleNavClick(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                  activeTab === item.id ? 'bg-green-50 text-solar-green font-extrabold border-l-4 border-solar-green' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/* ==========================================================================
   MAIN NAVBAR COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const Navbar = ({ activeTab, setActiveTab, openQuoteModal }) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'calculator', label: t('nav.calculator') },
    { id: 'subsidy', label: t('nav.subsidy') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <DesktopNavbarView 
        activeTab={activeTab}
        navItems={navItems}
        handleNavClick={handleNavClick}
        openQuoteModal={openQuoteModal}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />
      <MobileNavbarView 
        activeTab={activeTab}
        navItems={navItems}
        handleNavClick={handleNavClick}
        openQuoteModal={openQuoteModal}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />
    </>
  );
};
