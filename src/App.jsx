import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { QuoteWizardModal } from './components/forms/QuoteWizardModal';
import { Modal } from './components/layout/Modal';
import { CheckCircle2 } from 'lucide-react';
import { HomePage } from './pages/HomePage';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openQuoteModal = () => setQuoteModalOpen(true);
  const closeQuoteModal = () => setQuoteModalOpen(false);

  const openServiceModal = (service) => setSelectedService(service);
  const closeServiceModal = () => setSelectedService(null);

  const scrollToSection = (id) => {
    setActiveTab(id);
    if (!id || id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    // We now have IDs on the individual service cards, so we can scroll directly to them
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-solar-bg selection:bg-solar-green selection:text-white">

        {/* Sticky Header Navbar */}
        <Navbar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          scrollToSection={scrollToSection}
          openQuoteModal={openQuoteModal}
        />
        
        {/* Main Content Area - Single Page Landing Experience */}
        <main className="flex-1">
          <HomePage 
            openQuoteModal={openQuoteModal} 
            openServiceModal={openServiceModal} 
            navigateToTab={scrollToSection} 
          />
        </main>

        {/* Global Corporate Footer */}
        <Footer
          setActiveTab={setActiveTab}
          scrollToSection={scrollToSection}
        />
        <MobileStickyBar openQuoteModal={openQuoteModal} />

        {/* Floating WhatsApp Widget */}
        <FloatingWhatsApp />

        {/* Instant Online Quote Modal */}
        <QuoteWizardModal isOpen={quoteModalOpen} onClose={closeQuoteModal} />

        {/* Service Detail Modal */}
        <Modal isOpen={!!selectedService} onClose={closeServiceModal} title={selectedService?.name || "Service Details"}>
          {selectedService && (
            <div className="space-y-4 font-sans text-xs text-slate-700">
              <p className="text-sm font-semibold text-solar-blue leading-relaxed">
                {selectedService.fullDesc || selectedService.desc}
              </p>

              {selectedService.benefits ? (
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-solar-blue">{selectedService.benefitsTitle || "Benefits:"}</h4>
                  <div className="space-y-1 text-slate-600">
                    {selectedService.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-solar-green mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-solar-blue">What's Included:</h4>
                  <div className="space-y-1 text-slate-600">
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-solar-green" />
                      <span>Free Site Feasibility &amp; Roof Angle Survey</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-solar-green" />
                      <span>Tier-1 ALMM Listed High Efficiency Panels</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-solar-green" />
                      <span>MSEDCL Bi-Directional Net Meter Liaisoning</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-solar-green" />
                      <span>25-Year Performance Warranty &amp; AMC Support</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedService.process && (
                <div className="space-y-2 bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                  <h4 className="font-bold text-solar-blue">{selectedService.processTitle || "Our Process:"}</h4>
                  {Array.isArray(selectedService.process) ? (
                    <div className="space-y-1 text-slate-600 font-medium">
                      {selectedService.process.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-solar-blue mt-0.5 flex-shrink-0 opacity-70" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-600 font-medium leading-relaxed">
                      {selectedService.process}
                    </p>
                  )}
                </div>
              )}

              {selectedService.footerNote && (
                <p className="text-xs text-slate-500 italic px-1 pt-1">
                  {selectedService.footerNote}
                </p>
              )}
              <button
                onClick={() => {
                  closeServiceModal();
                  openQuoteModal();
                }}
                className="w-full bg-solar-green text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider shadow"
              >
                Get Quotation for {selectedService.name}
              </button>
            </div>
          )}
        </Modal>

      </div>
    </LanguageProvider>
  );
}

export default App;
