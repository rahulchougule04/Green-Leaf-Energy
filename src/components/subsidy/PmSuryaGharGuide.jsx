import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  FileCheck2, 
  FileText, 
  Zap, 
  Landmark, 
  AlertCircle,
  Search,
  Wrench,
  Gauge,
  Sparkles,
  ChevronRight,
  Check,
  Play,
  Pause
} from 'lucide-react';

export const PmSuryaGharGuide = ({ openQuoteModal, navigateToTab }) => {
  const { t } = useLanguage();
  const [hoveredStep, setHoveredStep] = useState(null);
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev >= 6 ? 1 : prev + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const sixSteps = [
    {
      num: 1,
      title: "1. Apply",
      marathiTitle: "१. नोंदणी (Apply)",
      icon: FileText,
      tag: "Online Registration",
      desc: "Registration on the National PM Surya Ghar Portal using your MSEDCL 12-digit consumer number and mobile verification."
    },
    {
      num: 2,
      title: "2. Site Survey",
      marathiTitle: "२. साइट सर्व्हे (Site Survey)",
      icon: Search,
      tag: "Feasibility Check",
      desc: "Green Leaf engineers conduct rooftop feasibility and upload the technical survey report to secure DISCOM approval."
    },
    {
      num: 3,
      title: "3. Installation",
      marathiTitle: "३. इन्स्टॉलेशन (Installation)",
      icon: Wrench,
      tag: "EPC Erection",
      desc: "Erection of high-efficiency DCR compliant solar panels, galvanized structure, inverter, earthing & safety switchgear."
    },
    {
      num: 4,
      title: "4. Inspection",
      marathiTitle: "४. तपासणी (Inspection)",
      icon: ShieldCheck,
      tag: "MSEDCL Verification",
      desc: "MSEDCL division officers conduct physical site inspection and verify plant technical compliance against MNRE norms."
    },
    {
      num: 5,
      title: "5. Net Meter",
      marathiTitle: "५. नेट मीटर (Net Meter)",
      icon: Gauge,
      tag: "Grid Synchronization",
      desc: "Installation of bi-directional net meter, synchronization with MSEDCL grid, and generation of Commissioning Certificate."
    },
    {
      num: 6,
      title: "6. Subsidy",
      marathiTitle: "६. सबसिडी जमा (Subsidy)",
      icon: Landmark,
      tag: "Direct DBT Credit",
      desc: "Government releases the maximum subsidy amount directly into your linked bank account via DBT within 30 days."
    }
  ];

  const subsidySlabs = [
    {
      kw: "1 kW Solar System",
      subsidy: "₹30,000",
      type: "Central Govt Subsidy",
      suitableFor: "Small Households (Up to 120-150 units/mo)",
      badge: "Fixed Subsidy"
    },
    {
      kw: "2 kW Solar System",
      subsidy: "₹60,000",
      type: "Central Govt Subsidy",
      suitableFor: "Medium Households (150-250 units/mo)",
      badge: "Fixed Subsidy"
    },
    {
      kw: "3 kW to 10 kW System",
      subsidy: "₹78,000",
      type: "Maximum Government Subsidy",
      suitableFor: "Large Homes, Villas & Bungalows (300+ units/mo)",
      badge: "Maximum Subsidy Cap"
    }
  ];

  const requiredDocs = [
    "Latest MSEDCL Electricity Bill (showing consumer number & meter number)",
    "Aadhaar Card of the electricity bill holder",
    "PAN Card of the electricity bill holder",
    "Bank Passbook or Cancelled Cheque (with IFSC code for DBT subsidy credit)",
    "Proof of Property / Roof Ownership (Electricity bill address match)",
    "Passport Size Photograph"
  ];

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 font-sans" id="subsidy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
            <Landmark className="w-4 h-4 text-emerald-700" />
            <span>{t('subsidy.tag') || 'PM Surya Ghar: Muft Bijli Yojana'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('subsidy.title') || 'Rooftop Solar Subsidy & 6-Step Process'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            {t('subsidy.subtitle') || 'Get up to ₹78,000 Maximum Subsidy directly deposited in your bank account under current government rules.'}
          </p>
        </div>

        {/* Current Government Rules Subsidy Breakdown Cards */}
        <div className="space-y-4 mb-14">
          <div className="text-center">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
              {t('subsidy.slabsTitle') || 'Official Central Government Subsidy Slabs (Updated Rules)'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subsidySlabs.map((slab, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-emerald-500 hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      Capacity
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      idx === 2 
                        ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                        : 'bg-emerald-50 text-emerald-800'
                    }`}>
                      {slab.badge}
                    </span>
                  </div>

                  <h4 className="text-lg font-black text-slate-900">
                    {slab.kw}
                  </h4>

                  <div className="py-2 border-y border-slate-100">
                    <div className="text-3xl sm:text-4xl font-black text-emerald-600">
                      {slab.subsidy}
                    </div>
                    <div className="text-xs font-bold text-slate-500 mt-0.5">
                      {slab.type}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    {slab.suitableFor}
                  </p>
                </div>

                <div className="pt-4 mt-2">
                  <div className="text-[11px] font-bold text-emerald-800 bg-emerald-50 py-1.5 px-3 rounded-lg text-center">
                    Direct Bank Transfer (DBT) in 30 Days
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Rules Notice */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3 text-xs text-amber-900">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Current Government Rules & Maximum Subsidy Notice:</strong> Under PM Surya Ghar guidelines, the maximum subsidy is capped at ₹78,000 for systems 3 kW and above. Solar installations must use ALMM-listed DCR (Domestic Content Requirement) modules installed by an MSEDCL approved vendor like Green Leaf Energy Solution.
            </div>
          </div>
        </div>

        {/* The 6-Step Simple Process with Interactive Live Animation */}
        <div 
          className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12 relative overflow-hidden"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Header & Interactive Timeline Bar */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest flex items-center justify-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Seamless Turnkey Procedure</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-slate-900 mt-1">
              Simple 6-Step Subsidy Process
            </h3>

            {/* Interactive Step Navigator Pills */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <div className="inline-flex items-center space-x-1 bg-slate-100 p-1.5 rounded-full border border-slate-200/80 shadow-inner max-w-full overflow-x-auto">
                {sixSteps.map((step) => {
                  const isActive = activeStep === step.num;
                  const isDone = activeStep > step.num;
                  return (
                    <button
                      key={step.num}
                      type="button"
                      onClick={() => setActiveStep(step.num)}
                      className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-black transition-all duration-300 ${
                        isActive 
                          ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-105' 
                          : isDone 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'text-slate-500 hover:text-slate-900 hover:bg-slate-200/60'
                      }`}
                    >
                      <span>{step.num}</span>
                      <span className="hidden sm:inline text-[11px] font-semibold">
                        {step.title.split('. ')[1]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Play / Pause Animation Indicator */}
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full transition-colors border border-slate-200"
                title={isAutoPlaying ? "Pause Animation (Hover any card)" : "Resume Auto Animation"}
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-[11px] text-emerald-700 font-bold">Auto-Playing</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping ml-0.5" />
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-slate-600" />
                    <span className="text-[11px]">Paused</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Cards Grid with Animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sixSteps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep === step.num;
              const isPast = activeStep > step.num;

              return (
                <div 
                  key={step.num}
                  onClick={() => setActiveStep(step.num)}
                  className={`p-6 rounded-2xl border transition-all duration-300 relative cursor-pointer flex flex-col justify-between overflow-hidden group ${
                    isActive
                      ? 'bg-gradient-to-b from-emerald-50/80 via-white to-white border-emerald-500 shadow-xl shadow-emerald-500/10 -translate-y-1.5 ring-4 ring-emerald-500/15'
                      : isPast
                      ? 'bg-white border-emerald-200/80 hover:border-emerald-400 hover:shadow-md hover:-translate-y-1'
                      : 'bg-slate-50 border-slate-200/80 hover:border-emerald-400 hover:bg-white hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  {/* Top animated progress bar for active card */}
                  {isActive && isAutoPlaying && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-100 overflow-hidden">
                      <div className="h-full bg-emerald-600 animate-step-progress" key={`progress-${activeStep}`} />
                    </div>
                  )}

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      {/* Step Number with Ripple Pulse */}
                      <div className="relative">
                        {isActive && (
                          <span className="absolute -inset-1 rounded-full bg-emerald-400 animate-ring-ripple" />
                        )}
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-sm relative transition-all duration-300 ${
                          isActive
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/40 scale-105'
                            : isPast
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-200 text-slate-700'
                        }`}>
                          {isPast ? <Check className="w-4 h-4 text-emerald-700" /> : step.num}
                        </div>
                      </div>

                      {/* Status badge & Icon */}
                      <div className="flex items-center space-x-2">
                        <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full transition-colors ${
                          isActive
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : isPast
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'text-slate-400 bg-slate-100'
                        }`}>
                          {isActive ? 'In Progress' : isPast ? 'Completed' : `Step ${step.num}`}
                        </span>

                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-emerald-100 text-emerald-700 scale-110 shadow-sm'
                            : 'bg-slate-100 text-slate-500 group-hover:text-emerald-600 group-hover:bg-emerald-50'
                        }`}>
                          <Icon className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'animate-bounce' : 'group-hover:scale-110'}`} style={isActive ? { animationDuration: '2s' } : {}} />
                        </div>
                      </div>
                    </div>

                    {/* Step Title & Details */}
                    <div>
                      <h4 className={`text-base font-extrabold transition-colors ${
                        isActive ? 'text-emerald-950 font-black' : 'text-slate-900'
                      }`}>
                        {step.title}
                      </h4>
                      <div className="text-xs font-bold text-slate-500 mt-0.5">
                        {step.marathiTitle}
                      </div>
                      <span className="inline-block mt-1.5 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {step.tag}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom indicator hint */}
                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-400 group-hover:text-emerald-600 transition-colors">
                      {isActive ? 'Active stage' : 'Click to preview'}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isActive ? 'text-emerald-600 translate-x-1' : 'text-slate-300 group-hover:translate-x-0.5'
                    }`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Required Documents Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-2xl p-6 sm:p-10">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">
              Zero Hassle Documentation
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              Documents Required for PM Surya Ghar Subsidy
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our team assists you with 100% portal upload, consumer KYC verification, and MSEDCL net metering approval.
            </p>

            <div className="space-y-2.5 pt-2">
              {requiredDocs.map((doc, i) => (
                <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-800/80 rounded-xl p-6 border border-slate-700 space-y-4 text-center">
            <h4 className="text-base font-extrabold text-white">
              Claim Your ₹78,000 Maximum Subsidy
            </h4>
            <p className="text-xs text-slate-300">
              Book a free site consultation in Baramati or Pune. We inspect your roof and start your subsidy application within 24 hours.
            </p>
            <button
              onClick={openQuoteModal}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl text-xs sm:text-sm transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <span>Apply for PM Surya Ghar Subsidy</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="text-[11px] text-slate-400">
              Authorized MSEDCL Rooftop Solar EPC Partner
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
