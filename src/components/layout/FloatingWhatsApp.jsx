import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { WhatsAppIcon } from '../common/WhatsAppIcon';

export const FloatingWhatsApp = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-5 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group"
      aria-label="Chat on WhatsApp"
      title="Chat with Solar Expert on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7 fill-white flex-shrink-0" />
      <span className="hidden group-hover:inline-block text-xs font-extrabold pr-1 transition-all whitespace-nowrap">
        WhatsApp Now
      </span>
      <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border-2 border-white"></span>
      </span>
    </a>
  );
};
