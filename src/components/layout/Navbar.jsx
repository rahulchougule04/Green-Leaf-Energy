import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Sun, Phone, Globe, Menu, X, ShieldCheck } from 'lucide-react';

/* ==========================================================================
   DESKTOP NAVBAR VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopNavbarView = ({ activeTab, navItems, handleNavClick, openQuoteModal, language, toggleLanguage, t }) => {
  return (
    <header className="hidden lg:block sticky top-0 z-50 font-sans shadow-md bg-white">
      {/* Desktop Top Contact & Language Bar */}
      <div className="bg-[#03243C] text-white text-xs py-2 px-4 sm:px-8 lg:px-12 border-b border-[#0A3B5C]/60">
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          {/* Left: Approved Vendor Pill Badge */}
          <div className="flex items-center">
            <span className="inline-flex items-center bg-[#057A44] text-white px-3.5 py-1 rounded-full font-bold text-xs uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-amber-400 flex-shrink-0" />
              {siteConfig.credentials.msedclApproved}
            </span>
          </div>

          {/* Right: Phone & Blue Language Toggle Button */}
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${siteConfig.contact.phoneRaw}`} 
              className="flex items-center space-x-2 text-white hover:text-green-300 transition-colors text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{siteConfig.contact.phonePrimary}</span>
            </a>

            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-2 bg-[#1D4ED8] hover:bg-blue-700 text-white px-3.5 py-1 rounded-full text-xs font-bold transition-all shadow-xs"
              title="Change Language"
            >
              <Globe className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <span>{language === 'en' ? 'मराठी' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Main Menu Header */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-3 cursor-pointer group flex-shrink-0"
        >
          <img 
            src="/brand-logo.png" 
            alt="Green Leaf Logo" 
            className="w-12 h-12 xl:w-14 xl:h-14 rounded-full shadow-md group-hover:scale-105 transition-all object-cover"
          />
          <div>
            <span className="text-xl xl:text-2xl font-black text-[#03243C] tracking-tight block leading-none">
              GREEN LEAF
            </span>
            <span className="text-[10px] xl:text-[11px] font-extrabold text-[#057A44] uppercase tracking-widest block mt-0.5">
              ENERGY SOLUTION
            </span>
          </div>
        </div>

        {/* Navigation Items (Centered 2-line links with active pill) */}
        <nav className="flex items-center space-x-1 xl:space-x-3">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 xl:px-4 py-2 rounded-xl text-xs xl:text-[13px] font-bold text-center leading-tight transition-all duration-200 flex flex-col items-center justify-center whitespace-pre-line ${
                  isActive 
                    ? 'bg-[#E8F8EE] text-[#057A44] shadow-xs' 
                    : 'text-slate-800 hover:text-[#057A44] hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* High Conversion CTA Button */}
        <button
          onClick={openQuoteModal}
          className="bg-[#057A44] hover:bg-[#03542E] text-white px-5 xl:px-6 py-2.5 xl:py-3 rounded-xl text-xs xl:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex-shrink-0"
        >
          {t('nav.getQuote') || 'GET QUOTE'}
        </button>
      </div>
    </header>
  );
};

/* ==========================================================================
   MOBILE NAVBAR VIEW (screen width < 1024px)
   ========================================================================== */
const MobileNavbarView = ({ activeTab, navItems, handleNavClick, openQuoteModal, language, toggleLanguage, t }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="lg:hidden sticky top-0 z-50 font-sans shadow-sm bg-white">
      {/* Mobile Top Info Strip */}
      <div className="bg-[#03243C] text-white py-1.5 px-3 border-b border-[#0A3B5C]/60">
        <div className="flex justify-between items-center text-[10px]">
          <div className="flex items-center space-x-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span className="font-bold truncate max-w-[170px] uppercase tracking-wide">{siteConfig.credentials.msedclApproved}</span>
          </div>
          
          <div className="flex items-center space-x-2.5">
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="font-bold text-amber-400 flex items-center space-x-1">
              <Phone className="w-3 h-3 text-amber-400" />
              <span>Call</span>
            </a>
            <button 
              onClick={toggleLanguage}
              className="bg-[#1D4ED8] hover:bg-blue-700 text-white px-2.5 py-0.5 rounded-full font-bold text-[10px] flex items-center space-x-1 shadow-xs"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{language === 'en' ? 'मराठी' : 'EN'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header Bar */}
      <div className="px-3 py-2.5 flex justify-between items-center border-b border-slate-100">
        {/* Brand Logo Compact */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex items-center space-x-2.5 cursor-pointer flex-shrink-0"
        >
          <img 
            src="/brand-logo.png" 
            alt="Green Leaf Logo" 
            className="w-10 h-10 rounded-full shadow-sm object-cover"
          />
          <div>
            <span className="text-base font-black text-[#03243C] tracking-tight block leading-none">
              GREEN LEAF
            </span>
            <span className="text-[8px] font-extrabold text-[#057A44] uppercase tracking-wider block mt-0.5">
              ENERGY SOLUTION
            </span>
          </div>
        </div>

        {/* Mobile Action Controls */}
        <div className="flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={openQuoteModal}
            className="bg-[#057A44] text-white px-3 py-1.5 rounded-lg text-xs font-black shadow uppercase tracking-wider whitespace-nowrap"
          >
            {t('nav.getQuote') || 'GET QUOTE'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg text-[#03243C] hover:bg-slate-100"
            aria-label="Toggle Menu"
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
              className="w-full py-2.5 bg-blue-50 text-blue-900 border border-blue-200 rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5"
            >
              <Globe className="w-4 h-4 text-amber-500" />
              <span>{language === 'en' ? 'मराठी मध्ये पहा' : 'Switch to English'}</span>
            </button>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full py-2.5 bg-[#03243C] text-white rounded-xl text-xs font-bold flex items-center justify-center space-x-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.contact.phonePrimary}</span>
            </a>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavClick(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold transition-all ${
                    isActive 
                      ? 'bg-[#E8F8EE] text-[#057A44] font-black border-l-4 border-[#057A44]' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {item.singleLabel}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

/* ==========================================================================
   MAIN NAVBAR COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const Navbar = ({ activeTab, setActiveTab, scrollToSection, openQuoteModal }) => {
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { 
      id: 'home', 
      label: language === 'en' ? 'Home' : 'मुख्य पृष्ठ',
      singleLabel: t('nav.home')
    },
    { 
      id: 'about', 
      label: language === 'en' ? 'About\nUs' : 'आमच्या\nबद्दल',
      singleLabel: t('nav.about')
    },
    { 
      id: 'projects', 
      label: language === 'en' ? 'Completed\nProjects' : 'पूर्ण झालेले\nप्रकल्प',
      singleLabel: t('nav.projects')
    },
    { 
      id: 'subsidy', 
      label: language === 'en' ? 'PM Surya\nGhar' : 'पीएम सूर्य\nघर',
      singleLabel: t('nav.subsidy')
    },
    { 
      id: 'blog', 
      label: language === 'en' ? 'Knowledge\nCenter' : 'माहिती\nकेंद्र',
      singleLabel: t('nav.knowledge')
    },
    { 
      id: 'calculator', 
      label: language === 'en' ? 'Solar\nCalculator' : 'सोलर\nकॅल्क्युलेटर',
      singleLabel: t('nav.calculator')
    },
    { 
      id: 'reviews', 
      label: language === 'en' ? 'Client\nReviews' : 'ग्राहकांचे\nअभिप्राय',
      singleLabel: t('nav.reviews')
    },
    { 
      id: 'contact', 
      label: language === 'en' ? 'Contact\nUs' : 'संपर्क\nसाधा',
      singleLabel: t('nav.contact')
    },
  ];

  // Active section scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 140;
      const sectionIds = ['contact', 'reviews', 'blog', 'calculator', 'subsidy', 'projects', 'services', 'about'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(id);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveTab('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveTab]);

  const handleNavClick = (id) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      setActiveTab(id);
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
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

