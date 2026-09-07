import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Phone, FileText } from 'lucide-react';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const MobileStickyBar = ({ openQuoteModal }) => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-solar-blue/95 backdrop-blur-md border-t border-slate-700/50 p-2 md:hidden shadow-2xl">
      <div className="grid grid-cols-3 gap-1.5 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="bg-solar-blue hover:bg-blue-900 border border-blue-600/50 text-white py-2.5 px-2 rounded-lg text-xs font-bold flex flex-col items-center justify-center space-y-0.5 shadow transition-all active:scale-95"
        >
          <Phone className="w-4 h-4 text-solar-amber animate-pulse" />
          <span>{t('nav.callNow')}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-2 rounded-lg text-xs font-bold flex flex-col items-center justify-center space-y-0.5 shadow transition-all active:scale-95"
        >
          <WhatsAppIcon className="w-4 h-4 fill-white" />
          <span>{t('nav.whatsAppNow')}</span>
        </a>

        {/* Get Quote Button */}
        <button
          onClick={openQuoteModal}
          className="bg-solar-green hover:bg-solar-green-dark text-white py-2.5 px-2 rounded-lg text-xs font-bold flex flex-col items-center justify-center space-y-0.5 shadow-lg transition-all active:scale-95"
        >
          <FileText className="w-4 h-4 text-white" />
          <span>{t('nav.getQuote')}</span>
        </button>
      </div>
    </div>
  );
};
