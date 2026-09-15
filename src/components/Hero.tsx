import { ArrowDown, Calendar, Compass, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export default function Hero({ onOpenInquiry }: HeroProps) {
  const scrollToFacilities = () => {
    const facilitiesElement = document.getElementById('fasilitas');
    if (facilitiesElement) {
      facilitiesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#121212] text-[#FAF8F5] overflow-hidden pt-24 pb-16"
    >
      {/* Background Photography with Cinema Dark Gradient Overlays - Satu Kesatuan */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2000&auto=format&fit=crop"
          alt="IPB International Convention Center Dian Grand Ballroom"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-[1.08] saturate-[1.1] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Seamless Architectural Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/55 to-[#121212]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 via-transparent to-[#121212]/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(18,18,18,0.85)_100%)]" />
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-[#121212]/80 backdrop-blur-md mb-8 animate-fade-in shadow-lg">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[11px] md:text-xs font-sans uppercase tracking-[0.24em] text-[#DFC184] font-medium">
            The Premier Convention Destination of West Java
          </span>
        </div>

        {/* Editorial Headline with emotional italic serif */}
        <h1 className="font-editorial-luxury text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#FAF8F5] leading-[1.12] tracking-tight max-w-4xl mb-6">
          The Pinnacle of <span className="italic font-normal text-[#C5A059]">Grand Events</span> & Celebrations in Bogor
        </h1>

        {/* Descriptive Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5F5F3]/80 font-light max-w-2xl leading-relaxed mb-10 font-sans">
          Berdiri megah di jantung Kota Bogor terintegrasi langsung dengan Botani Square Mall. 
          Menghadirkan Dian Grand Ballroom seluas 1.800 m² tanpa pilar, 12 ruang sidang eksekutif, 
          dan kemewahan tata jamuan berstandar diplomasi internasional.
        </p>

        {/* Perfectly Symmetrical Dual CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-lg mb-14">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:flex-1 py-4 px-6 bg-[#C5A059] text-[#121212] font-semibold text-xs tracking-[0.16em] uppercase rounded-sm hover:bg-[#DFC184] hover:shadow-[0_0_24px_rgba(197,160,89,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 text-center shadow-lg whitespace-nowrap"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>Kunjungan Lokasi</span>
          </button>

          <button
            onClick={scrollToFacilities}
            className="w-full sm:flex-1 py-4 px-6 border border-[#C5A059]/60 text-[#FAF8F5] hover:text-[#C5A059] hover:border-[#C5A059] font-medium text-xs tracking-[0.16em] uppercase rounded-sm bg-[#121212]/40 backdrop-blur-sm transition-all duration-300 hover:bg-[#C5A059]/10 flex items-center justify-center gap-2.5 text-center whitespace-nowrap"
          >
            <Compass className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Eksplorasi Fasilitas</span>
          </button>
        </div>

        {/* Location & Quick Context Badge */}
        <div className="inline-flex items-center gap-3 text-xs tracking-wider text-[#FAF8F5]/60 border-t border-[#C5A059]/20 pt-6">
          <MapPin className="w-4 h-4 text-[#C5A059]" />
          <span>Kompleks Botani Square, Jalan Pajajaran • Akses Langsung Pintu Tol Jagorawi</span>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a
        href="#marquee"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] tracking-[0.25em] text-[#C5A059]/80 uppercase hover:text-[#C5A059] transition-colors focus:outline-none"
        aria-label="Scroll ke bagian selanjutnya"
      >
        <span>Jelajahi</span>
        <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
      </a>
    </section>
  );
}
