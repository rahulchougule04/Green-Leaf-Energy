import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { FloatingWhatsApp } from './components/layout/FloatingWhatsApp';
import { QuoteWizardModal } from './components/forms/QuoteWizardModal';
import { Modal } from './components/layout/Modal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { SubsidyPage } from './pages/SubsidyPage';
import { ReviewsPage } from './pages/ReviewsPage';
import { BlogPage } from './pages/BlogPage';
import { EmiPage } from './pages/EmiPage';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { DealerPage } from './pages/DealerPage';
import { FranchisePage } from './pages/FranchisePage';
import { ServiceRequestPage } from './pages/ServiceRequestPage';
import { ComplaintPage } from './pages/ComplaintPage';
import { AmcPage } from './pages/AmcPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const openQuoteModal = () => setQuoteModalOpen(true);
  const closeQuoteModal = () => setQuoteModalOpen(false);

  const openServiceModal = (service) => setSelectedService(service);
  const closeServiceModal = () => setSelectedService(null);

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage openQuoteModal={openQuoteModal} openServiceModal={openServiceModal} navigateToTab={setActiveTab} />;
      case 'about':
        return <AboutPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'services':
        return <ServicesPage openQuoteModal={openQuoteModal} openServiceModal={openServiceModal} navigateToTab={setActiveTab} />;
      case 'gallery':
        return <GalleryPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'calculator':
        return <CalculatorPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'subsidy':
        return <SubsidyPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'reviews':
        return <ReviewsPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'blog':
        return <BlogPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'emi':
        return <EmiPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'contact':
        return <ContactPage openQuoteModal={openQuoteModal} navigateToTab={setActiveTab} />;
      case 'careers':
        return <CareersPage />;
      case 'dealer':
        return <DealerPage />;
      case 'franchise':
        return <FranchisePage />;
      case 'serviceRequest':
        return <ServiceRequestPage />;
      case 'complaint':
        return <ComplaintPage />;
      case 'amc':
        return <AmcPage />;
      case 'downloads':
        return <DownloadsPage />;
      default:
        return <HomePage openQuoteModal={openQuoteModal} openServiceModal={openServiceModal} navigateToTab={setActiveTab} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-solar-bg selection:bg-solar-green selection:text-white">
        
        {/* Sticky Header Navbar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} openQuoteModal={openQuoteModal} />

        {/* Main Content Area */}
        <main className="flex-1">
          {renderActivePage()}
        </main>

        {/* Global Corporate Footer */}
        <Footer setActiveTab={setActiveTab} />

        {/* Sticky Mobile CTA Bar */}
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
                {selectedService.desc}
              </p>
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h4 className="font-bold text-solar-blue">What's Included:</h4>
                <div className="space-y-1 text-slate-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-solar-green" />
                    <span>Free Site Feasibility & Roof Angle Survey</span>
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
                    <span>25-Year Performance Warranty & AMC Support</span>
                  </div>
                </div>
              </div>
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
