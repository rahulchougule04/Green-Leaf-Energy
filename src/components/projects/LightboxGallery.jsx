import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../layout/Modal';
import { Camera, Play, Image as ImageIcon, X } from 'lucide-react';
import { projectImages } from '../../config/projectImages';

export const LightboxGallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "5 kWp Commissioned Turnkey Residential Rooftop",
      category: "Residential",
      type: "image",
      url: projectImages.final,
      caption: "Elevated galvanized mounting structure on RCC residential terrace."
    },
    {
      id: 2,
      title: "3 kWp PM Surya Ghar Residential Solar System",
      category: "Residential",
      type: "image",
      url: projectImages.res3kw,
      caption: "High-yield DCR solar module alignment on home terrace in Baramati."
    },
    {
      id: 3,
      title: "10 kWp Commercial Hospital Rooftop Solar Plant",
      category: "Commercial",
      type: "image",
      url: projectImages.commercial,
      caption: "10 kWp hospital rooftop solar installation with high-efficiency tier-1 panels and smart inverters."
    },
    {
      id: 4,
      title: "50 kWp Industrial Factory Shed Solar Plant",
      category: "Industrial",
      type: "image",
      url: projectImages.industrial50kw,
      caption: "Wide-span bifacial solar panel array on MIDC industrial manufacturing shed."
    },
    {
      id: 5,
      title: "Commercial Pergola Structure Erection",
      category: "Installation",
      type: "image",
      url: projectImages.commercialStructure,
      caption: "Raised hot-dip galvanized pergola steel structure providing shaded recreation space."
    },
    {
      id: 6,
      title: "Industrial 50 kW 3-Phase Inverter & LT Panel",
      category: "Installation",
      type: "image",
      url: projectImages.industrialInverterPanel,
      caption: "50 kW commercial solar string inverter and AC/DC distribution panel with digital energy meter."
    },
    {
      id: 7,
      title: "Solar Inverter Installation & Conduit Cabling",
      category: "Installation",
      type: "image",
      url: projectImages.inverter,
      caption: "Professional grid-tied string inverter with safety isolators and earthing."
    },
    {
      id: 8,
      title: "AC/DC Distribution Box with SPD Protection",
      category: "Installation",
      type: "image",
      url: projectImages.acdcDb,
      caption: "Weather-proof ACDB and DCDB with surge arrestors and MCBs."
    }
  ];

  const categories = ["All", "Residential", "Commercial", "Industrial", "Drone Photos", "Installation", "Videos"];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(i => i.category === activeCategory);

  return (
    <section className="py-16 bg-white border-b border-slate-200/60 font-sans" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 text-xs font-extrabold text-solar-blue uppercase tracking-wider">
            <Camera className="w-4 h-4 text-solar-green" />
            <span>Installation & Site Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-solar-blue tracking-tight">
            High Resolution Photo & Video Gallery
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-solar-blue text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="relative h-64 rounded-2xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-solar-lg transition-all duration-300 border border-slate-200"
            >
              <img 
                src={item.type === 'video' ? item.thumbnail : item.url} 
                onError={(e) => { 
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = projectImages.final; 
                }}
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-solar-blue/90 via-solar-blue/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              {/* Type Badge */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-solar-blue text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                {item.category}
              </div>

              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-solar-green text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <h4 className="font-bold text-sm text-white group-hover:text-solar-amber transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <Modal
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
          title={selectedMedia?.title || "Gallery View"}
        >
          {selectedMedia && (
            <div className="space-y-4">
              {selectedMedia.type === 'video' ? (
                <div className="aspect-video w-full rounded-xl overflow-hidden bg-black">
                  <iframe 
                    src={selectedMedia.url} 
                    title={selectedMedia.title}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="rounded-xl overflow-hidden max-h-[70vh] flex items-center justify-center bg-black">
                  <img 
                    src={selectedMedia.url} 
                    alt={selectedMedia.title} 
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>
              )}
              <div className="space-y-1">
                <span className="text-xs font-bold text-solar-green uppercase tracking-wider">
                  Category: {selectedMedia.category}
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-medium">
                  {selectedMedia.caption}
                </p>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
