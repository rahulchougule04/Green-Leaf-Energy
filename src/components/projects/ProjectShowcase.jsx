import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { MapPin, Calendar, Zap, Filter, ArrowRight, ShieldCheck } from 'lucide-react';

export const ProjectShowcase = ({ openQuoteModal }) => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('All');

  // Editable Placeholder Projects Data (as required by Rule #45)
  const projectsData = [
    {
      id: 1,
      title: "5 kW Rooftop Solar System",
      category: "Residential",
      location: "Baramati, Dist. Pune",
      capacity: "5 kW",
      date: "2024",
      desc: "High-yield Mono-PERC solar panel installation on RCC flat roof with net metering.",
      image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "50 kW Industrial Solar Plant",
      category: "Industrial",
      location: "MIDC Baramati, Pune",
      capacity: "50 kW",
      date: "2024",
      desc: "Heavy-duty commercial tin shed solar installation reducing factory electricity bills by 85%.",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "10 kW Commercial Solar Project",
      category: "Commercial",
      location: "Phaltan, Satara",
      capacity: "10 kW",
      date: "2024",
      desc: "Rooftop solar system for commercial hospital complex with bi-directional net meter.",
      image: "https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "3 kW PM Surya Ghar Rooftop",
      category: "Residential",
      location: "Daund, Pune",
      capacity: "3 kW",
      date: "2024",
      desc: "Subsidized rooftop installation under PM Surya Ghar Muft Bijli Yojana with ₹78,000 subsidy.",
      image: "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "100 kW Ground Mounted Solar Farm",
      category: "Ground Mounted",
      location: "Indapur, Pune",
      capacity: "100 kW",
      date: "2023",
      desc: "Utility scale ground mounted solar farm with hot-dip galvanized mounting structures.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "15 kW Hybrid Solar Power Backup",
      category: "Commercial",
      location: "Shirur, Pune",
      capacity: "15 kW",
      date: "2024",
      desc: "Hybrid inverter & lithium battery system providing 24/7 continuous clean energy.",
      image: "https://images.unsplash.com/photo-1558441719-443b34438ad9?q=80&w=800&auto=format&fit=crop"
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial", "Ground Mounted"];

  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/60 font-sans" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-xs font-extrabold text-solar-green uppercase tracking-widest bg-green-50 px-3.5 py-1.5 rounded-full border border-green-100">
            {t('nav.projects')} Showcase
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            Our Completed Solar EPC Installations
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Explore high-yielding solar rooftop & ground mounted installations engineered across Maharashtra.
          </p>
        </div>

        {/* Filters Strip */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                filter === cat
                  ? 'bg-solar-green text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-solar-lg transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    onError={(e) => { e.currentTarget.src = '/solar-about.svg'; }}
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-solar-blue text-white text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                    {project.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-solar-green text-white text-xs font-extrabold px-2.5 py-1 rounded-md shadow">
                    ⚡ {project.capacity}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-base font-extrabold text-solar-blue group-hover:text-solar-green transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center space-x-4 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-solar-green" />
                      <span>{project.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-solar-amber" />
                      <span>{project.date}</span>
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-5 pt-0">
                <button
                  onClick={openQuoteModal}
                  className="w-full bg-slate-100 hover:bg-solar-green hover:text-white text-solar-blue text-xs font-extrabold py-2.5 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Want a Similar Solar System?</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
