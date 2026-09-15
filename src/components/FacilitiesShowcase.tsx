import { useState } from 'react';
import { FACILITIES } from '../data/mockData';
import { Facility } from '../types';
import { Users, Maximize2, ArrowUpRight, Check, SlidersHorizontal } from 'lucide-react';

interface FacilitiesShowcaseProps {
  onSelectFacility: (facility: Facility) => void;
  onInquireFacility: (roomName: string) => void;
}

type CapacityMode = 'all' | 'theatre' | 'banquet' | 'classroom';

export default function FacilitiesShowcase({
  onSelectFacility,
  onInquireFacility,
}: FacilitiesShowcaseProps) {
  const [capacityMode, setCapacityMode] = useState<CapacityMode>('all');
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Grand Ballroom', 'Exhibition Hall', 'Meeting Suites', 'VIP Suites'];

  const filteredFacilities = FACILITIES.filter((f) => {
    if (activeCategory === 'Semua') return true;
    return f.category.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <section id="fasilitas" className="relative bg-[#FAF8F5] py-24 lg:py-32 border-t border-[#C5A059]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-[1px] bg-[#C5A059]" />
              <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#9E7B3B] font-semibold">
                Fasilitas & Tata Ruang
              </span>
            </div>
            <h2 className="font-editorial-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A18] tracking-tight">
              Ruang Konvensi <span className="italic font-normal text-[#9E7B3B]">Megah & Serbaguna</span>
            </h2>
          </div>

          <p className="text-sm text-[#73726E] max-w-md font-sans leading-relaxed">
            Dikonfigurasi dengan modularitas tinggi, teknologi tata suara terdepan, serta kenyamanan akustik tanpa cela untuk segala skala kegiatan.
          </p>
        </div>

        {/* Interactive Controls Bar: Category Filters & Capacity Setup Selector */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#C5A059]/20">
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-sans tracking-wider uppercase transition-all duration-200 rounded-sm whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-[#121212] text-[#FAF8F5] shadow-md'
                    : 'bg-white border border-[#C5A059]/30 text-[#1A1A18]/80 hover:border-[#C5A059] hover:bg-[#C5A059]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Seating Layout Focus Switcher */}
          <div className="flex items-center gap-2 text-xs text-[#73726E]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="font-medium">Sorot Kapasitas:</span>
            <div className="inline-flex rounded-sm border border-[#C5A059]/30 bg-white p-0.5">
              {(['all', 'theatre', 'banquet', 'classroom'] as CapacityMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setCapacityMode(mode)}
                  className={`px-3 py-1 text-[11px] uppercase tracking-wider transition-colors rounded-xs ${
                    capacityMode === mode
                      ? 'bg-[#C5A059] text-[#121212] font-semibold'
                      : 'text-[#1A1A18]/70 hover:text-[#121212]'
                  }`}
                >
                  {mode === 'all' ? 'Lengkap' : mode}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Facilities Grid with crisp borders and hover elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-sm border border-[#C5A059]/30 hover:border-[#C5A059] shadow-sm hover:shadow-xl hover:shadow-[#121212]/10 transition-all duration-400 flex flex-col overflow-hidden"
            >
              {/* Image Preview with overlay tags */}
              <div className="relative h-64 overflow-hidden bg-[#181818]">
                <img
                  src={facility.imageUrl}
                  alt={facility.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent opacity-80" />

                {/* Badge if available */}
                {facility.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#121212]/85 backdrop-blur-md border border-[#C5A059]/60 text-[#DFC184] text-[10px] font-mono tracking-widest uppercase rounded-xs">
                    {facility.badge}
                  </span>
                )}

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] font-sans uppercase tracking-widest text-[#C5A059] font-medium block">
                      {facility.category}
                    </span>
                    <h3 className="font-serif-luxury text-xl text-white font-medium">
                      {facility.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs italic text-[#9E7B3B] mb-2 font-serif-luxury">
                    &ldquo;{facility.tagline}&rdquo;
                  </p>
                  <p className="text-xs text-[#73726E] line-clamp-3 mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Room Dimension & Spec Metrics */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#FAF8F5] border border-[#C5A059]/20 rounded-xs mb-6 text-xs">
                    <div>
                      <span className="text-[10px] text-[#73726E] uppercase block">Luas Area</span>
                      <span className="font-serif-luxury text-base font-semibold text-[#1A1A18]">
                        {facility.area}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[#73726E] uppercase block">Tinggi Plafon</span>
                      <span className="font-serif-luxury text-base font-semibold text-[#1A1A18]">
                        {facility.ceiling}
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Capacity Breakdown according to selected mode */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] uppercase tracking-wider text-[#9E7B3B] font-semibold block">
                      Kapasitas Kursi Berdasarkan Tata Letak
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div
                        className={`p-2 rounded-xs border transition-colors ${
                          capacityMode === 'theatre' || capacityMode === 'all'
                            ? 'border-[#C5A059]/60 bg-white font-semibold'
                            : 'border-black/5 bg-[#FAF8F5]/50 text-gray-400'
                        }`}
                      >
                        <span className="block text-[9px] text-[#73726E] uppercase">Teater</span>
                        <span className="font-serif-luxury text-sm text-[#1A1A18]">
                          {facility.theatreCapacity.toLocaleString('id-ID')}
                        </span>
                      </div>

                      <div
                        className={`p-2 rounded-xs border transition-colors ${
                          capacityMode === 'banquet' || capacityMode === 'all'
                            ? 'border-[#C5A059]/60 bg-white font-semibold'
                            : 'border-black/5 bg-[#FAF8F5]/50 text-gray-400'
                        }`}
                      >
                        <span className="block text-[9px] text-[#73726E] uppercase">Meja Bulat</span>
                        <span className="font-serif-luxury text-sm text-[#1A1A18]">
                          {facility.banquetCapacity.toLocaleString('id-ID')}
                        </span>
                      </div>

                      <div
                        className={`p-2 rounded-xs border transition-colors ${
                          capacityMode === 'classroom' || capacityMode === 'all'
                            ? 'border-[#C5A059]/60 bg-white font-semibold'
                            : 'border-black/5 bg-[#FAF8F5]/50 text-gray-400'
                        }`}
                      >
                        <span className="block text-[9px] text-[#73726E] uppercase">Kelas</span>
                        <span className="font-serif-luxury text-sm text-[#1A1A18]">
                          {facility.classroomCapacity.toLocaleString('id-ID')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6 text-xs text-[#1A1A18]/80">
                    {facility.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#C5A059]/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectFacility(facility)}
                    className="text-xs uppercase tracking-wider text-[#1A1A18] hover:text-[#9E7B3B] font-medium flex items-center gap-1.5 transition-colors"
                  >
                    <span>Detail Spesifikasi</span>
                    <Maximize2 className="w-3.5 h-3.5 text-[#C5A059]" />
                  </button>

                  <button
                    onClick={() => onInquireFacility(facility.name)}
                    className="px-3.5 py-1.5 bg-[#FAF8F5] border border-[#C5A059]/50 hover:bg-[#C5A059] hover:text-[#121212] text-xs font-semibold uppercase tracking-wider rounded-xs transition-all duration-200 flex items-center gap-1"
                  >
                    <span>Reservasi</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
