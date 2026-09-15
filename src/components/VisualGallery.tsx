import { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Maximize2, X } from 'lucide-react';

export default function VisualGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { key: 'all', label: 'Semua Koleksi' },
    { key: 'ballroom', label: 'Dian Ballroom' },
    { key: 'conclaves', label: 'Sidang & KTT' },
    { key: 'weddings', label: 'Pernikahan Agung' },
    { key: 'architecture', label: 'Arsitektur & Foyer' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="galeri" className="relative bg-[#FAF8F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#9E7B3B] font-semibold">
                Dokumentasi Visual Eksklusif
              </span>
            </div>
            <h2 className="font-editorial-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A18] tracking-tight">
              Galeri <span className="italic font-normal text-[#9E7B3B]">Arsitektur & Perhelatan</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveCategory(tab.key)}
                className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-all duration-200 rounded-sm whitespace-nowrap ${
                  activeCategory === tab.key
                    ? 'bg-[#121212] text-[#FAF8F5]'
                    : 'bg-white border border-[#C5A059]/30 text-[#1A1A18]/80 hover:border-[#C5A059]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* CSS Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer border border-[#C5A059]/20 hover:border-[#C5A059] bg-[#181818] transition-all duration-300 ${
                idx === 0 || idx === 7 ? 'sm:col-span-2 sm:row-span-2 h-[340px] sm:h-[480px]' : 'h-[230px]'
              }`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Information overlay */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex justify-end">
                  <div className="w-8 h-8 rounded-sm bg-[#121212]/80 backdrop-blur-md border border-[#C5A059]/40 flex items-center justify-center text-[#DFC184] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#DFC184] uppercase block mb-1">
                    {item.dimensions}
                  </span>
                  <h4 className="font-serif-luxury text-lg text-white font-medium leading-tight mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#F5F5F3]/70 font-sans line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#181818] border border-[#C5A059]/40 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-sm bg-[#121212]/80 border border-[#C5A059]/40 text-white hover:text-[#C5A059] flex items-center justify-center transition-colors"
              aria-label="Tutup Pratinjau"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[70vh] overflow-hidden bg-black">
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                className="w-full h-full max-h-[70vh] object-contain mx-auto"
              />
            </div>

            <div className="p-6 bg-[#121212] border-t border-[#C5A059]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block mb-1">
                  {selectedImage.dimensions}
                </span>
                <h3 className="font-serif-luxury text-2xl text-white font-medium">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-[#FAF8F5]/70 mt-1 max-w-xl">
                  {selectedImage.description}
                </p>
              </div>

              <span className="px-3 py-1 text-[10px] uppercase font-mono tracking-wider text-[#DFC184] border border-[#C5A059]/40 rounded-xs">
                Katalog IICC
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
