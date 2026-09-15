import { Calendar, PhoneCall, Sparkles } from 'lucide-react';

interface CtaBandProps {
  onOpenInquiry: () => void;
}

export default function CtaBand({ onOpenInquiry }: CtaBandProps) {
  return (
    <section className="relative bg-[#121212] text-[#FAF8F5] py-20 lg:py-28 overflow-hidden border-t border-b border-[#C5A059]/30">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dark-mesh opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Subtle Crest Icon */}
        <div className="w-12 h-12 rounded-sm border border-[#C5A059]/40 flex items-center justify-center mb-6 bg-[#181818]/60">
          <Sparkles className="w-5 h-5 text-[#DFC184]" />
        </div>

        <span className="text-xs font-sans uppercase tracking-[0.28em] text-[#DFC184] font-semibold mb-4">
          Wujudkan Momen Agung Anda di Kota Hujan
        </span>

        <h2 className="font-editorial-luxury text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#FAF8F5] leading-tight mb-6 max-w-3xl">
          Rencanakan Perhelatan Bersejarah Bersama <span className="italic font-normal text-[#C5A059]">Tim Pakar IICC</span>
        </h2>

        <p className="text-sm sm:text-base text-[#F5F5F3]/75 font-sans max-w-2xl leading-relaxed mb-10">
          Dari jamuan kenegaraan dengan protokol istana hingga resepsi pernikahan agung seribu undangan, 
          kami mendedikasikan presisi tanpa cela untuk kesuksesan agenda Anda.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto px-8 py-4 bg-[#C5A059] text-[#121212] font-semibold text-xs tracking-[0.18em] uppercase rounded-sm hover:bg-[#DFC184] hover:shadow-[0_0_24px_rgba(197,160,89,0.35)] transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <Calendar className="w-4 h-4" />
            Mulai Reservasi & Konsultasi
          </button>

          <a
            href="https://wa.me/628111111111?text=Halo%20VIP%20Concierge%20IICC%2C%20saya%20ingin%20berkonsultasi%20mengenai%20acara"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-[#C5A059]/50 text-[#FAF8F5] hover:text-[#C5A059] hover:border-[#C5A059] font-medium text-xs tracking-[0.18em] uppercase rounded-sm bg-[#121212]/50 transition-all duration-300 flex items-center justify-center gap-2.5"
          >
            <PhoneCall className="w-4 h-4 text-[#C5A059]" />
            Hubungi VIP Concierge Desk
          </a>
        </div>
      </div>
    </section>
  );
}
