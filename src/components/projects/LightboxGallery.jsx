import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../layout/Modal';
import { Camera, Play, Image as ImageIcon, X } from 'lucide-react';

export const LightboxGallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Rooftop Mono-PERC Solar Panel Alignment",
      category: "Residential",
      type: "image",
      url: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
      caption: "High quality aluminum rail structure mounting on residential rooftop."
    },
    {
      id: 2,
      title: "Industrial Commercial Factory Roof Solar",
      category: "Commercial",
      type: "image",
      url: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1200&auto=format&fit=crop",
      caption: "50 kW grid-tied industrial solar power plant."
    },
    {
      id: 3,
      title: "Drone Aerial Shot of Solar Farm",
      category: "Drone Photos",
      type: "image",
      url: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1200&auto=format&fit=crop",
      caption: "Aerial perspective of clean green energy installation."
    },
    {
      id: 4,
      title: "MSEDCL Net Metering Inspection",
      category: "Installation",
      type: "image",
      url: "https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=1200&auto=format&fit=crop",
      caption: "Professional engineering team inspecting bi-directional net meter."
    },
    {
      id: 5,
      title: "Hybrid Lithium Battery Backup Setup",
      category: "Installation",
      type: "image",
      url: "https://images.unsplash.com/photo-1558441719-443b34438ad9?q=80&w=1200&auto=format&fit=crop",
      caption: "Smart hybrid solar inverter with LiFePO4 battery bank."
    },
    {
      id: 6,
      title: "Solar Installation Project Overview",
      category: "Videos",
      type: "video",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder video embed
      thumbnail: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=800&auto=format&fit=crop",
      caption: "Video walkthrough of 10 kW rooftop solar commissioning."
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
                onError={(e) => { e.currentTarget.src = '/solar-about.svg'; }}
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
