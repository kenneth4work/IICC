import { Facility } from '../types';
import { X, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface FacilityModalProps {
  facility: Facility | null;
  onClose: () => void;
  onInquire: (roomName: string) => void;
}

export default function FacilityModal({ facility, onClose, onInquire }: FacilityModalProps) {
  if (!facility) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fade-in overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-white border border-[#C5A059]/40 rounded-sm overflow-hidden shadow-2xl my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-sm bg-[#121212]/80 border border-[#C5A059]/40 text-white hover:text-[#C5A059] flex items-center justify-center transition-colors"
          aria-label="Tutup jendela spesifikasi"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image in Modal */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={facility.imageUrl}
            alt={facility.name}
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-[11px] font-mono tracking-widest text-[#DFC184] uppercase block mb-1">
              {facility.category} {facility.badge ? `• ${facility.badge}` : ''}
            </span>
            <h2 className="font-editorial-luxury text-3xl sm:text-4xl text-white font-medium">
              {facility.name}
            </h2>
            <p className="font-serif-luxury italic text-[#C5A059] text-base mt-1">
              &ldquo;{facility.tagline}&rdquo;
            </p>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[55vh] overflow-y-auto">
          {/* Description */}
          <p className="text-sm text-[#1A1A18]/80 leading-relaxed font-sans">
            {facility.description}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs">
            <div>
              <span className="text-[10px] uppercase text-[#73726E] block font-medium">Luas Ruangan</span>
              <span className="font-serif-luxury text-xl font-bold text-[#1A1A18]">
                {facility.area}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#73726E] block font-medium">Tinggi Langit-Langit</span>
              <span className="font-serif-luxury text-xl font-bold text-[#1A1A18]">
                {facility.ceiling}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#73726E] block font-medium">Maks. Kapasitas Teater</span>
              <span className="font-serif-luxury text-xl font-bold text-[#9E7B3B]">
                {facility.theatreCapacity.toLocaleString('id-ID')} Pax
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase text-[#73726E] block font-medium">Maks. Banquet Meja</span>
              <span className="font-serif-luxury text-xl font-bold text-[#9E7B3B]">
                {facility.banquetCapacity.toLocaleString('id-ID')} Pax
              </span>
            </div>
          </div>

          {/* Detailed Seating Chart */}
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18] mb-3">
              Rincian Kapasitas Berdasarkan Konfigurasi Kursi
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 border border-[#C5A059]/20 rounded-xs bg-white">
                <span className="block text-[10px] text-[#73726E] uppercase mb-1">Teater (Theatre)</span>
                <span className="font-serif-luxury text-lg font-bold text-[#1A1A18]">
                  {facility.theatreCapacity} Kursi
                </span>
              </div>
              <div className="p-3 border border-[#C5A059]/20 rounded-xs bg-white">
                <span className="block text-[10px] text-[#73726E] uppercase mb-1">Perjamuan (Banquet)</span>
                <span className="font-serif-luxury text-lg font-bold text-[#1A1A18]">
                  {facility.banquetCapacity} Kursi
                </span>
              </div>
              <div className="p-3 border border-[#C5A059]/20 rounded-xs bg-white">
                <span className="block text-[10px] text-[#73726E] uppercase mb-1">Kelas (Classroom)</span>
                <span className="font-serif-luxury text-lg font-bold text-[#1A1A18]">
                  {facility.classroomCapacity} Kursi
                </span>
              </div>
              <div className="p-3 border border-[#C5A059]/20 rounded-xs bg-white">
                <span className="block text-[10px] text-[#73726E] uppercase mb-1">Standing Cocktail</span>
                <span className="font-serif-luxury text-lg font-bold text-[#1A1A18]">
                  {facility.cocktailCapacity} Tamu
                </span>
              </div>
            </div>
          </div>

          {/* Technical Amenities and Features */}
          <div>
            <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              Fasilitas Teknis & Standar Keunggulan
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {facility.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#1A1A18]/80">
                  <Check className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#FAF8F5] border-t border-[#C5A059]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 border border-[#C5A059]/40 text-xs font-sans uppercase tracking-wider text-[#1A1A18] hover:bg-white rounded-xs"
          >
            Tutup
          </button>

          <button
            onClick={() => {
              onClose();
              onInquire(facility.name);
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#C5A059] hover:bg-[#DFC184] text-[#121212] font-semibold text-xs uppercase tracking-[0.16em] rounded-xs transition-colors flex items-center justify-center gap-2"
          >
            <span>Reservasi Ruangan Ini</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
