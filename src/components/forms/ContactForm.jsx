import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { siteConfig } from '../../config/siteConfig';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

/* ==========================================================================
   DESKTOP CONTACT VIEW (screen width >= 1024px)
   ========================================================================== */
const DesktopContactView = ({ formData, setFormData, submitted, setSubmitted, handleSubmit, t }) => {
  return (
    <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-start">
      {/* Left Contact Info & Map Column */}
      <div className="col-span-5 bg-solar-blue text-white p-8 rounded-2xl shadow-xl space-y-6">
        <div className="border-b border-blue-800 pb-4 space-y-1">
          <h3 className="text-xl font-bold text-white">{siteConfig.companyName}</h3>
          <p className="text-xs text-solar-amber font-semibold">{siteConfig.positioning}</p>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-solar-green flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-300 block uppercase text-[10px]">Headquarters & Service Hub</span>
              <span className="text-white font-medium leading-relaxed">{siteConfig.contact.address.fullAddress}</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-5 h-5 text-solar-amber flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-300 block uppercase text-[10px]">Phone & Hotline</span>
              <div className="space-y-0.5">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-white font-bold hover:text-green-300 block">
                  {siteConfig.contact.phonePrimary}
                </a>
                <a href={`tel:${siteConfig.contact.phoneSecondary}`} className="text-slate-300 hover:text-white block">
                  {siteConfig.contact.phoneSecondary}
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-300 block uppercase text-[10px]">Email Address</span>
              <a href={`mailto:${siteConfig.contact.email}`} className="text-white font-semibold hover:text-green-300">
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="w-5 h-5 text-solar-amber flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-slate-300 block uppercase text-[10px]">Working Hours</span>
              <span className="text-slate-200">{siteConfig.contact.workingHours}</span>
            </div>
          </div>
        </div>

        {/* Quick Action CTAs */}
        <div className="pt-2 grid grid-cols-2 gap-3">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="bg-white text-solar-blue font-extrabold py-3 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow hover:bg-slate-100 transition-colors"
          >
            <Phone className="w-4 h-4 text-solar-green" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3 px-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>WhatsApp Now</span>
          </a>
        </div>

        {/* Google Map Embed */}
        <div className="rounded-xl overflow-hidden h-48 border border-blue-800 shadow">
          <iframe
            title="Google Map Location"
            src={siteConfig.contact.googleMapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Desktop Form Panel */}
      <div className="col-span-7 bg-slate-50 p-8 rounded-2xl border border-slate-200/80 shadow-sm">
        {submitted ? (
          <div className="text-center py-12 space-y-4 animate-scaleUp">
            <div className="w-16 h-16 rounded-full bg-green-100 text-solar-green mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-bold text-solar-blue">Inquiry Submitted Successfully!</h3>
            <p className="text-xs text-slate-600 max-w-md mx-auto font-medium">
              {t('forms.successMsg')}
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-solar-blue text-white font-bold px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-bold text-solar-blue border-b border-slate-200 pb-3">
              Book a Free Site Survey & Get Price Quote
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">{t('forms.fullName')} *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">{t('forms.mobileNumber')} *</label>
                <input
                  type="tel"
                  required
                  value={formData.mobileNumber}
                  onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                  placeholder="10-digit mobile number"
                  className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">{t('forms.email')}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@gmail.com"
                  className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">{t('forms.city')} *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="City / District (e.g. Baramati, Pune)"
                  className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">{t('forms.customerType')}</label>
                <select
                  value={formData.customerType}
                  onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                  className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
                >
                  {t('forms.types').map((type, idx) => (
                    <option key={idx} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">{t('forms.monthlyBill')}</label>
                <input
                  type="number"
                  value={formData.monthlyBill}
                  onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                  placeholder="e.g. ₹3,500"
                  className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">{t('forms.message')}</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your rooftop area, power backup needs, or subsidy questions..."
                className="w-full p-3 bg-white rounded-xl border border-slate-200 text-xs font-semibold text-slate-800 focus:ring-2 focus:ring-solar-green focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-solar-green hover:bg-solar-green-dark text-white font-extrabold py-3.5 px-6 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>{t('forms.submitInquiry')}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

/* ==========================================================================
   MOBILE CONTACT VIEW (screen width < 1024px)
   ========================================================================== */
const MobileContactView = ({ formData, setFormData, submitted, setSubmitted, handleSubmit, t }) => {
  return (
    <div className="lg:hidden space-y-6">
      {/* Mobile Form Card */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-sm">
        {submitted ? (
          <div className="text-center py-8 space-y-3">
            <div className="w-12 h-12 rounded-full bg-green-100 text-solar-green mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-base font-bold text-solar-blue">Inquiry Submitted!</h3>
            <p className="text-xs text-slate-600 font-medium">{t('forms.successMsg')}</p>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-solar-blue text-white font-bold px-4 py-2 rounded-lg text-xs"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <h3 className="text-sm font-bold text-solar-blue border-b border-slate-200 pb-2">
              Book a Free Site Survey
            </h3>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">{t('forms.fullName')} *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Full Name"
                className="w-full p-2.5 bg-white rounded-lg border border-slate-200 text-xs font-semibold"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">{t('forms.mobileNumber')} *</label>
              <input
                type="tel"
                required
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                placeholder="10-digit Phone"
                className="w-full p-2.5 bg-white rounded-lg border border-slate-200 text-xs font-semibold"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 block">{t('forms.city')} *</label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  placeholder="Baramati/Pune"
                  className="w-full p-2.5 bg-white rounded-lg border border-slate-200 text-xs font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 block">{t('forms.monthlyBill')}</label>
                <input
                  type="number"
                  value={formData.monthlyBill}
                  onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                  placeholder="Bill ₹"
                  className="w-full p-2.5 bg-white rounded-lg border border-slate-200 text-xs font-semibold"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] font-bold text-slate-700 block">{t('forms.customerType')}</label>
              <select
                value={formData.customerType}
                onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                className="w-full p-2.5 bg-white rounded-lg border border-slate-200 text-xs font-semibold"
              >
                {t('forms.types').map((type, idx) => (
                  <option key={idx} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-solar-green text-white font-extrabold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow flex items-center justify-center space-x-1.5 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>{t('forms.submitInquiry')}</span>
            </button>
          </form>
        )}
      </div>

      {/* Mobile Contact Quick Card */}
      <div className="bg-solar-blue text-white p-4 rounded-xl shadow space-y-3">
        <div className="border-b border-blue-800 pb-2">
          <h4 className="text-sm font-bold text-white">{siteConfig.companyName}</h4>
          <p className="text-[10px] text-solar-amber">{siteConfig.positioning}</p>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex items-start space-x-2">
            <MapPin className="w-4 h-4 text-solar-green flex-shrink-0 mt-0.5" />
            <span className="text-slate-200 text-[11px]">{siteConfig.contact.address.fullAddress}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4 text-solar-amber flex-shrink-0" />
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-white font-bold text-xs">{siteConfig.contact.phonePrimary}</a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="bg-white text-solar-blue font-bold py-2 rounded-lg text-xs flex items-center justify-center space-x-1"
          >
            <Phone className="w-3.5 h-3.5 text-solar-green" />
            <span>Call Now</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.whatsappDefaultMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-600 text-white font-bold py-2 rounded-lg text-xs flex items-center justify-center space-x-1"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

/* ==========================================================================
   MAIN CONTACT FORM COMPONENT (Renders Desktop & Mobile Views)
   ========================================================================== */
export const ContactForm = () => {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: '',
    customerType: 'Residential Rooftop',
    monthlyBill: '',
    interestedService: 'Residential Rooftop Solar',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    const messageLines = [
      `*New Solar Inquiry - Green Leaf Energy Solution*`,
      `👤 *Name:* ${formData.fullName}`,
      `📞 *Mobile:* ${formData.mobileNumber}`,
      `📍 *City:* ${formData.city}`,
      `🏷️ *Category:* ${formData.customerType}`,
      `⚡ *Monthly Bill:* ₹${formData.monthlyBill}`,
      `🛠️ *Service:* ${formData.interestedService}`,
      formData.message ? `💬 *Message:* ${formData.message}` : ''
    ].filter(Boolean).join('\n');

    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(messageLines)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200/60 font-sans" id="contact">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <span className="text-xs font-extrabold text-solar-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100">
            {t('forms.contactTitle')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            {t('forms.contactSubtitle')}
          </h2>
        </div>

        <DesktopContactView 
          formData={formData}
          setFormData={setFormData}
          submitted={submitted}
          setSubmitted={setSubmitted}
          handleSubmit={handleSubmit}
          t={t}
        />

        <MobileContactView 
          formData={formData}
          setFormData={setFormData}
          submitted={submitted}
          setSubmitted={setSubmitted}
          handleSubmit={handleSubmit}
          t={t}
        />

      </div>
    </section>
  );
};
