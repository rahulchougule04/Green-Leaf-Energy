import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { 
  MapPin, 
  Calendar, 
  Zap, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Maximize2,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { Modal } from '../layout/Modal';
import { projectImages } from '../../config/projectImages';

export const ProjectShowcase = ({ openQuoteModal }) => {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState('All');
  const [activeStageIndex, setActiveStageIndex] = useState({}); // project.id -> stage key
  const [lightboxProject, setLightboxProject] = useState(null);

  // Structured Real Completed Projects Data (Linked directly to local photorealistic assets)
  const completedProjects = [
    {
      id: 1,
      projectTitle: language === 'mr' ? "५ kWp घरगुती सोलर" : "5 kWp Residential Solar",
      location: language === 'mr' ? "बारामती, जि. पुणे" : "Baramati, Dist. Pune",
      system: language === 'mr' ? "ऑन-ग्रीड नेट मीटर्ड" : "On-Grid Net Metered",
      module: language === 'mr' ? "Waaree 540 Wp मोनो PERC हाफ-कट (DCR)" : "Waaree 540 Wp Mono PERC Half-Cut (DCR Compliant)",
      inverter: language === 'mr' ? "Solis 5 kW सिंगल फेज" : "Solis 5 kW Single Phase Grid-Tied Inverter",
      installationDate: language === 'mr' ? "मार्च २०२४" : "March 2024",
      category: "Residential",
      subsidyReceived: language === 'mr' ? "₹७८,००० (PM सूर्य घर)" : "₹78,000 (PM Surya Ghar DBT)",
      monthlyGen: language === 'mr' ? "~६५० युनिट्स / महिना" : "~650 kWh Units / Month",
      description: language === 'mr' ? "छतावरील जागा वाचवण्यासाठी उंच गॅल्वनाइज्ड स्ट्रक्चरसह संपूर्ण घरगुती सोलर इन्स्टॉलेशन." : "Complete turnkey residential rooftop solar installation on RCC terrace with elevated hot-dip galvanized mounting structure to retain usable roof space below.",
      stages: {
        before: {
          label: "Before Installation",
          url: projectImages.before,
          note: "Clean flat RCC roof surveyed for shadow-free orientation facing south at 18° tilt."
        },
        structure: {
          label: "Structure",
          url: projectImages.structure,
          note: "Hot-dip galvanized (HDG 80 microns) heavy-duty mounting structure anchored with chemical fastener grouting."
        },
        panels: {
          label: "Panels",
          url: projectImages.panels,
          note: "Waaree Tier-1 540 Wp Mono-PERC Half-cut DCR solar modules mounted with stainless steel mid & end clamps."
        },
        inverter: {
          label: "Inverter",
          url: projectImages.inverter,
          note: "Solis 5 kW high-efficiency solar string inverter with integrated Wi-Fi cloud data monitoring."
        },
        acdcDb: {
          label: "AC/DC DB",
          url: projectImages.acdcDb,
          note: "IP65 weather-proof AC and DC distribution boxes equipped with Type-II SPD surge arrestors and MCBs."
        },
        final: {
          label: "Final Installation",
          url: projectImages.final,
          note: "Fully commissioned 5 kWp system generating clean electricity with MSEDCL bi-directional net meter."
        }
      }
    },
    {
      id: 2,
      projectTitle: language === 'mr' ? "३ kWp PM सूर्य घर" : "3 kWp PM Surya Ghar Rooftop",
      location: language === 'mr' ? "विद्यानगरी, बारामती" : "Vidyanagari, Baramati",
      system: language === 'mr' ? "ऑन-ग्रीड सिस्टीम" : "On-Grid System",
      module: language === 'mr' ? "Tata Power 545 Wp (DCR)" : "Tata Power Solar 545 Wp Mono-PERC (DCR)",
      inverter: language === 'mr' ? "Growatt 3 kW ऑन-ग्रीड इन्व्हर्टर" : "Growatt 3 kW On-Grid Inverter",
      installationDate: language === 'mr' ? "जानेवारी २०२४" : "January 2024",
      category: "Residential",
      subsidyReceived: language === 'mr' ? "₹७८,००० बँक जमा" : "₹78,000 Direct Bank Credit",
      monthlyGen: language === 'mr' ? "~३८० युनिट्स / महिना" : "~380 kWh Units / Month",
      description: language === 'mr' ? "सबसिडीवर आधारित सोलर सिस्टीम, ज्यामुळे ग्राहकाचे वीज बिल ₹३,४०० वरून शून्यावर आले." : "Subsidized home solar system reducing client's monthly MSEDCL electricity bill from ₹3,400 to almost zero.",
      stages: {
        before: {
          label: "Before Installation",
          url: projectImages.res3kwBefore,
          note: "Architectural rooftop shadow-free layout survey & DISCOM feasibility clearance prior to structure erection."
        },
        structure: {
          label: "Structure",
          url: projectImages.res3kwStructure,
          note: "Compact 6-panel galvanized frame with pedestal footing and grounding."
        },
        panels: {
          label: "Panels",
          url: projectImages.res3kw,
          note: "Tata Power high-efficiency DCR panels aligned perfectly to true South."
        },
        inverter: {
          label: "Inverter",
          url: projectImages.res3kwInverter,
          note: "Growatt 3 kW inverter with wall mount bracket and digital generation monitoring."
        },
        acdcDb: {
          label: "AC/DC DB",
          url: projectImages.commercialAcdcDb,
          note: "Compact ACDB/DCDB protection panel with dedicated chemical earthing and MCBs."
        },
        final: {
          label: "Final Installation",
          url: projectImages.res3kw,
          note: "Completed 3 kWp residential installation with net meter clearance and subsidy deposit."
        }
      }
    },
    {
      id: 3,
      projectTitle: language === 'mr' ? "५० kWp इंडस्ट्रियल सोलर" : "50 kWp Industrial Solar Plant",
      location: language === 'mr' ? "MIDC बारामती, पुणे" : "MIDC Baramati, Pune",
      system: language === 'mr' ? "ऑन-ग्रीड कमर्शियल" : "On-Grid Commercial / Industrial",
      module: language === 'mr' ? "Goldi Solar 550 Wp बायफेशियल" : "Goldi Solar 550 Wp Bifacial DCR Modules",
      inverter: language === 'mr' ? "Sungrow 50 kW 3-Phase" : "Sungrow 50 kW 3-Phase Commercial Inverter",
      installationDate: language === 'mr' ? "फेब्रुवारी २०२४" : "February 2024",
      category: "Industrial",
      subsidyReceived: language === 'mr' ? "४०% घसारा लाभ (Tax Benefit)" : "40% Accelerated Depreciation Benefit",
      monthlyGen: language === 'mr' ? "~६,५०० युनिट्स / महिना" : "~6,500 kWh Units / Month",
      description: language === 'mr' ? "इंडस्ट्रियल शेडवरील सोलर प्लँट ज्यामुळे कंपनीचे मासिक ₹६५,०००+ वीज बिल कमी झाले." : "Industrial shed rooftop solar plant saving over ₹65,000 monthly on HT commercial tariff electricity bills.",
      stages: {
        before: {
          label: "Before Installation",
          url: projectImages.industrialBefore,
          note: "Empty factory trapezoidal metal roof inspected for structural load integrity."
        },
        structure: {
          label: "Structure",
          url: projectImages.industrialStructure,
          note: "Aluminum short-rail mounting system with EPDM waterproof rubber gaskets bolted to sheet ribs."
        },
        panels: {
          label: "Panels",
          url: projectImages.industrial50kw,
          note: "Goldi 550 Wp Bifacial panels utilizing albedo reflection across factory metal roof."
        },
        inverter: {
          label: "Inverter",
          url: projectImages.industrialInverter,
          note: "Sungrow 50 kW 3-phase string inverter with multi-MPPT tracking."
        },
        acdcDb: {
          label: "AC/DC DB",
          url: projectImages.industrialLtPanel,
          note: "Heavy industrial LT distribution panel with MCCB, digital multi-function meter & SPD."
        },
        final: {
          label: "Final Installation",
          url: projectImages.industrial,
          note: "Turnkey 50 kWp plant energized with HT net metering synchronization at MIDC Baramati."
        }
      }
    },
    {
      id: 4,
      projectTitle: language === 'mr' ? "१० kWp कमर्शियल सोलर" : "10 kWp Commercial Solar Project",
      location: language === 'mr' ? "फलटण, जि. सातारा" : "Phaltan, Dist. Satara",
      system: language === 'mr' ? "ऑन-ग्रीड कमर्शियल" : "On-Grid Commercial",
      module: language === 'mr' ? "Waaree 545 Wp मोनो PERC" : "Waaree 545 Wp Mono PERC",
      inverter: language === 'mr' ? "Solis 10 kW 3-Phase इन्व्हर्टर" : "Solis 10 kW 3-Phase Inverter",
      installationDate: language === 'mr' ? "एप्रिल २०२४" : "April 2024",
      category: "Commercial",
      subsidyReceived: language === 'mr' ? "नेट मीटरिंग आणि कर सवलत" : "Tax Depreciation & Net Meter Savings",
      monthlyGen: language === 'mr' ? "~१,३०० युनिट्स / महिना" : "~1,300 kWh Units / Month",
      description: language === 'mr' ? "मल्टी-स्पेशालिटी हॉस्पिटलवरील सोलर इन्स्टॉलेशन, ज्यामुळे दिवसाचा वीज खर्च लक्षणीय कमी झाला." : "Rooftop solar installation for a multi-speciality hospital, powering diagnostic labs and reducing daytime power costs.",
      stages: {
        before: {
          label: "Before Installation",
          url: projectImages.commercialBefore,
          note: "Hospital flat concrete terrace surveyed with chalk layout lines marked before solar structure installation."
        },
        structure: {
          label: "Structure",
          url: projectImages.commercialStructure,
          note: "Raised galvanized pergola steel structure providing shaded usable space below."
        },
        panels: {
          label: "Panels",
          url: projectImages.commercial,
          note: "High efficiency Waaree modules with anti-reflective nanotech glass coating on hospital rooftop."
        },
        inverter: {
          label: "Inverter",
          url: projectImages.commercialInverter,
          note: "Solis 10 kW 3-phase commercial string inverter with real-time LCD generation display."
        },
        acdcDb: {
          label: "AC/DC DB",
          url: projectImages.commercialAcdcDb,
          note: "Commercial grade ACDB panel box showing internal Type-II SPD, 4-pole MCBs and copper busbars."
        },
        final: {
          label: "Final Installation",
          url: projectImages.commercialPlant,
          note: "Completed hospital solar installation saving approx ₹18,000 every month on electricity bills."
        }
      }
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial"];

  const filteredProjects = filter === "All"
    ? completedProjects
    : completedProjects.filter(p => p.category === filter);

  const stageKeys = ["before", "structure", "panels", "inverter", "acdcDb", "final"];

  const getActiveStage = (projectId) => {
    return activeStageIndex[projectId] || "final";
  };

  const handleStageSelect = (projectId, stageKey) => {
    setActiveStageIndex(prev => ({
      ...prev,
      [projectId]: stageKey
    }));
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-slate-200 font-sans" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-extrabold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-100">
            {t('projects.tag') || 'Real Installation Gallery'}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t('projects.title') || 'Completed Projects & Installation Stages'}
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            {t('projects.subtitle') || 'Inspect our completed solar projects with exact technical specifications and step-by-step installation photos from structure erection to final net metering.'}
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const currentStageKey = getActiveStage(project.id);
            const currentStage = project.stages[currentStageKey];

            return (
              <div 
                key={project.id}
                className="bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:border-emerald-500/50 transition-all duration-300"
              >
                <div>
                  {/* Card Main Image Stage Viewer */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900 group">
                    <img
                      src={currentStage.url}
                      alt={`${project.projectTitle} - ${currentStage.label}`}
                      onError={(e) => { 
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = projectImages.final; 
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Stage Pill Overlay */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-[11px] font-black px-3 py-1 rounded-md uppercase tracking-wider flex items-center space-x-1.5 border border-slate-700">
                      <ImageIcon className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Stage: {currentStage.label}</span>
                    </div>

                    {/* Capacity Badge */}
                    <div className="absolute top-3 right-3 bg-emerald-600 text-white text-xs font-black px-3 py-1 rounded-md shadow-md">
                      ⚡ {project.projectTitle}
                    </div>

                    {/* Stage Note Bar */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent p-3.5 text-white flex justify-between items-end">
                      <p className="text-xs text-slate-200 line-clamp-2 pr-4 font-medium">
                        {currentStage.note}
                      </p>
                      <button
                        onClick={() => setLightboxProject({ project, stageKey: currentStageKey })}
                        className="bg-white/20 hover:bg-white/30 p-1.5 rounded-lg backdrop-blur-sm text-white transition-colors flex-shrink-0"
                        title="View Fullscreen"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* 6 Photo Stage Selector Tabs */}
                  <div className="bg-white border-b border-slate-200 px-3 py-2.5">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1.5">
                      Select Installation Stage Photo:
                    </div>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5">
                      {stageKeys.map((sKey) => {
                        const stageInfo = project.stages[sKey];
                        const isSelected = currentStageKey === sKey;
                        return (
                          <button
                            key={sKey}
                            onClick={() => handleStageSelect(project.id, sKey)}
                            className={`px-1.5 py-1.5 rounded-lg text-[10px] font-extrabold transition-all truncate text-center ${
                              isSelected
                                ? 'bg-emerald-600 text-white shadow-xs'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                            title={stageInfo.label}
                          >
                            {stageInfo.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technical Specifications Grid (Requirement 3 Specs) */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                        {project.category} Solar Installation
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mt-0.5">
                        {project.projectTitle}
                      </h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Specs Table / Card */}
                    <div className="bg-white rounded-xl p-3.5 border border-slate-200/80 space-y-2 text-xs">
                      <div className="flex justify-between items-center py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-semibold flex items-center space-x-1.5">
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Location:</span>
                        </span>
                        <span className="font-extrabold text-slate-900">{project.location}</span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-semibold flex items-center space-x-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-500" />
                          <span>System:</span>
                        </span>
                        <span className="font-extrabold text-slate-900">{project.system}</span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-semibold flex items-center space-x-1.5">
                          <Layers className="w-3.5 h-3.5 text-blue-500" />
                          <span>Module:</span>
                        </span>
                        <span className="font-extrabold text-slate-900 text-right max-w-[200px] truncate" title={project.module}>
                          {project.module}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-1 border-b border-slate-100">
                        <span className="text-slate-500 font-semibold flex items-center space-x-1.5">
                          <Cpu className="w-3.5 h-3.5 text-purple-500" />
                          <span>Inverter:</span>
                        </span>
                        <span className="font-extrabold text-slate-900 text-right max-w-[200px] truncate" title={project.inverter}>
                          {project.inverter}
                        </span>
                      </div>

                      <div className="flex justify-between items-center py-1">
                        <span className="text-slate-500 font-semibold flex items-center space-x-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-500" />
                          <span>Installation Date:</span>
                        </span>
                        <span className="font-extrabold text-slate-900">{project.installationDate}</span>
                      </div>
                    </div>

                    {/* Generation & Subsidy Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
                      <span className="bg-emerald-50 text-emerald-800 font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                        ✓ {project.subsidyReceived}
                      </span>
                      <span className="text-slate-500 font-semibold">
                        Monthly Yield: <strong className="text-slate-900">{project.monthlyGen}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={openQuoteModal}
                    className="w-full bg-slate-900 hover:bg-emerald-600 text-white text-xs font-extrabold py-3 rounded-xl transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Want a Similar Solar System?</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Fullscreen Stage Inspection */}
        <Modal
          isOpen={!!lightboxProject}
          onClose={() => setLightboxProject(null)}
          title={lightboxProject ? `${lightboxProject.project.projectTitle} - ${lightboxProject.project.stages[lightboxProject.stageKey].label}` : "Project Details"}
        >
          {lightboxProject && (
            <div className="space-y-4 font-sans">
              <div className="rounded-xl overflow-hidden bg-slate-950 max-h-[60vh] flex items-center justify-center">
                <img
                  src={lightboxProject.project.stages[lightboxProject.stageKey].url}
                  alt={lightboxProject.project.stages[lightboxProject.stageKey].label}
                  className="max-h-[60vh] w-auto object-contain"
                />
              </div>
              <div className="p-2 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-extrabold text-emerald-600 uppercase">
                    Stage: {lightboxProject.project.stages[lightboxProject.stageKey].label}
                  </span>
                  <span className="text-slate-500">
                    {lightboxProject.project.location} • {lightboxProject.project.installationDate}
                  </span>
                </div>
                <p className="text-sm text-slate-700 font-medium">
                  {lightboxProject.project.stages[lightboxProject.stageKey].note}
                </p>
                <div className="pt-2 text-xs text-slate-500 grid grid-cols-2 gap-2 border-t border-slate-200">
                  <div><strong>Module:</strong> {lightboxProject.project.module}</div>
                  <div><strong>Inverter:</strong> {lightboxProject.project.inverter}</div>
                </div>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
