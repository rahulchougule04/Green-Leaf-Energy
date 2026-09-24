import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MessageSquare, 
  MapPin, 
  Compass, 
  FileText, 
  Landmark, 
  Hammer, 
  FileCheck2, 
  Zap, 
  CheckCircle, 
  Headphones, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export const SolarProjectJourney = ({ openQuoteModal, navigateToTab }) => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(1);

  const stepsData = [
    {
      num: "01",
      id: 1,
      title: "Enquiry",
      marathiTitle: "चौकशी (Enquiry)",
      icon: MessageSquare,
      summary: "Understanding your current power consumption and electricity bills.",
      details: "Initial consultation with our solar experts. We analyze your last 6 months of MSEDCL electricity bills, assess roof space, and determine the optimal system capacity suited for your power usage."
    },
    {
      num: "02",
      id: 2,
      title: "Site Survey",
      marathiTitle: "साइट सर्व्हे (Site Survey)",
      icon: MapPin,
      summary: "Detailed physical roof audit, shadow analysis & compass coordinates.",
      details: "Our licensed electrical engineer visits your property in Baramati or Pune to inspect roof strength, shadow-casting obstacles (trees, parapet walls), civil foundation, and cable run distance."
    },
    {
      num: "03",
      id: 3,
      title: "System Design",
      marathiTitle: "सिस्टीम डिझाईन (System Design)",
      icon: Compass,
      summary: "3D CAD layout, tilt angle calculation & Single Line Diagram (SLD).",
      details: "Custom engineering design using optimum solar tilt angle for Maharashtra latitude. Complete string layout, shading simulation, and electrical protection schematic according to CEA regulations."
    },
    {
      num: "04",
      id: 4,
      title: "Quotation",
      marathiTitle: "कोटेशन (Quotation)",
      icon: FileText,
      summary: "Itemized proposal with Tier-1 components, ROI & financial projection.",
      details: "Clear, 100% transparent EPC quotation specifying solar panel brands (Waaree/Tata/Goldi), on-grid inverter models, galvanized structure gauges, expected daily units, and payback period."
    },
    {
      num: "05",
      id: 5,
      title: "Loan/Subsidy Assistance",
      marathiTitle: "कर्ज व सबसिडी सहाय्य (Loan & Subsidy)",
      icon: Landmark,
      summary: "Portal registration on PM Surya Ghar & low-interest collateral-free loan.",
      details: "We upload consumer documents onto the national PM Surya Ghar portal to lock your maximum subsidy (up to ₹78,000) and assist with low-interest bank solar loans (SBI/Canara/Bank of Maharashtra)."
    },
    {
      num: "06",
      id: 6,
      title: "Installation",
      marathiTitle: "इन्स्टॉलेशन (Installation)",
      icon: Hammer,
      summary: "Hot-dip galvanized structure erection, panel fixing & safety earthing.",
      details: "Physical execution within 3-5 days by trained technicians. We use heavy-duty HDG steel structures, corrosion-proof SS fasteners, chemical gel earthing pits, and dedicated AC/DC surge protection (SPD)."
    },
    {
      num: "07",
      id: 7,
      title: "MSEDCL Process",
      marathiTitle: "MSEDCL प्रक्रिया (DISCOM Liaison)",
      icon: FileCheck2,
      summary: "Submission of Work Completion Report (WCR) & liaisoning with MSEDCL.",
      details: "Our liaisoning team prepares and submits the complete electrical test report, vendor invoice, DCR certificate, and vendor completion certificate to your local MSEDCL division office."
    },
    {
      num: "08",
      id: 8,
      title: "Net Metering",
      marathiTitle: "नेट मीटरिंग (Net Metering)",
      icon: Zap,
      summary: "MSEDCL bi-directional net meter installation & testing.",
      details: "MSEDCL engineers verify test reports and replace your regular electricity meter with an approved bi-directional net meter that records both energy imported and energy exported to the grid."
    },
    {
      num: "09",
      id: 9,
      title: "Commissioning",
      marathiTitle: "कमिशनिंग (Commissioning)",
      icon: CheckCircle,
      summary: "Final safety inspection, grid synchronization & mobile app setup.",
      details: "Official plant synchronization. We configure the smart Wi-Fi data logger on your smartphone so you can track live solar power generation in real-time 24/7."
    },
    {
      num: "10",
      id: 10,
      title: "After-Sales Support",
      marathiTitle: "विक्रीनंतर सपोर्ट (After-Sales)",
      icon: Headphones,
      summary: "25-year performance monitoring, proactive maintenance & warranty care.",
      details: "Dedicated local support from Baramati. Periodic panel cleaning guidance, scheduled electrical health checkups, and swift on-site warranty replacement if any component ever faults."
    }
  ];

  const currentStep = stepsData.find(s => s.id === activeStep) || stepsData[0];
  const StepIcon = currentStep.icon;

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200 font-sans" id="journey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100 text-xs font-extrabold text-emerald-700 uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Turnkey EPC Execution</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Solar Project Journey
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Green Leaf Energy Solution manages the entire process from your first consultation to commissioning and long-term after-sales support — 100% hassle-free.
          </p>
        </div>

        {/* 10-Step Interactive Horizontal Stepper (Desktop & Tablet) */}
        <div className="hidden lg:grid grid-cols-10 gap-2 mb-10 border-b border-slate-200 pb-6">
          {stepsData.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex flex-col items-center text-center p-2 rounded-xl transition-all duration-200 relative ${
                  isActive 
                    ? 'bg-emerald-50 border-2 border-emerald-600 shadow-sm' 
                    : 'hover:bg-slate-50 border border-transparent text-slate-500'
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black mb-1.5 transition-colors ${
                  isActive 
                    ? 'bg-emerald-600 text-white shadow' 
                    : 'bg-slate-100 text-slate-600'
                }`}>
                  {step.num}
                </div>
                <span className={`text-[11px] font-extrabold leading-tight ${
                  isActive ? 'text-emerald-900' : 'text-slate-600'
                }`}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Horizontal Carousel / Chips for 10 steps */}
        <div className="lg:hidden flex overflow-x-auto space-x-2 pb-3 mb-6 scrollbar-none">
          {stepsData.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 transition-all ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{step.num}.</span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-slate-50 rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-900/10">
                <StepIcon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-black text-emerald-600 uppercase tracking-widest">
                  Step {currentStep.num} of 10
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  {currentStep.title}
                </h3>
                <div className="text-xs font-bold text-slate-500">
                  {currentStep.marathiTitle}
                </div>
              </div>
              <div className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full">
                100% Handled by Green Leaf
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8">
              <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                {currentStep.summary}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {currentStep.details}
              </p>

              {/* Navigation Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <div className="flex space-x-2">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
                    className="px-4 py-2 rounded-lg text-xs font-bold bg-white border border-slate-200 hover:bg-slate-100 disabled:opacity-40 transition-colors"
                  >
                    ← Previous Step
                  </button>
                  <button
                    disabled={activeStep === 10}
                    onClick={() => setActiveStep(prev => Math.min(10, prev + 1))}
                    className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40 transition-colors"
                  >
                    Next Step →
                  </button>
                </div>

                <button
                  onClick={() => navigateToTab ? navigateToTab('contact') : openQuoteModal()}
                  className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-emerald-700 hover:text-emerald-800"
                >
                  <span>Start Your Solar Journey Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
