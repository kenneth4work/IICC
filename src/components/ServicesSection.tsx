import { SERVICES } from '../data/mockData';
import { UtensilsCrossed, Sparkles, Radio, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export default function ServicesSection({ onOpenInquiry }: ServicesSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-6 h-6 text-[#DFC184]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#DFC184]" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#DFC184]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#DFC184]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#DFC184]" />;
    }
  };

  return (
    <section id="layanan" className="relative bg-[#121212] text-[#FAF8F5] py-24 lg:py-32 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-dark-mesh opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#DFC184] font-semibold">
              Layanan Terpadu Bintang Lima
            </span>
          </div>
          <h2 className="font-editorial-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#FAF8F5] tracking-tight mb-4">
            Kapabilitas Perhelatan <span className="italic font-normal text-[#C5A059]">Bertaraf Global</span>
          </h2>
          <p className="text-sm sm:text-base text-[#F5F5F3]/70 font-sans leading-relaxed">
            Menghadirkan orkestrasi lengkap mulai dari seni tata boga adiluhung, teknologi panggung terkini, 
            hingga tata kelola protokoler kepresidenan dengan ketelitian sempurna.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="glass-card-dark p-7 rounded-sm border border-[#C5A059]/25 hover:border-[#C5A059]/60 hover:bg-[#1A1A18]/90 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle gold glow top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent group-hover:via-[#C5A059] transition-all duration-500" />

              <div>
                {/* Index numbering and icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-sm border border-[#C5A059]/30 bg-[#181818] flex items-center justify-center group-hover:border-[#C5A059] group-hover:scale-105 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-xs text-[#C5A059]/60 tracking-widest">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-xl text-[#FAF8F5] font-semibold mb-2 group-hover:text-[#DFC184] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs italic text-[#C5A059] mb-4 font-serif-luxury">
                  {service.subtitle}
                </p>
                <p className="text-xs text-[#F5F5F3]/70 leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                {/* Service Key Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 mb-6">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#F5F5F3]/80">
                      <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inquire CTA Link */}
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center gap-2 text-xs font-sans tracking-wider uppercase text-[#DFC184] hover:text-white transition-colors group-hover:translate-x-1 duration-200"
              >
                <span>Konsultasikan Kebutuhan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
