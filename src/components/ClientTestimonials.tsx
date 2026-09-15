import { useState } from 'react';
import { CLIENT_TESTIMONIALS, PARTNER_LOGOS } from '../data/mockData';
import { ChevronLeft, ChevronRight, Quote, Shield } from 'lucide-react';

export default function ClientTestimonials() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevTestimonial = () => {
    setCurrentIdx((prev) => (prev === 0 ? CLIENT_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIdx((prev) => (prev === CLIENT_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = CLIENT_TESTIMONIALS[currentIdx];

  return (
    <section id="klien" className="relative bg-[#FAF8F5] py-24 lg:py-32 border-b border-[#C5A059]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Partner Logos Strip */}
        <div className="mb-20">
          <p className="text-center text-xs font-sans uppercase tracking-[0.25em] text-[#9E7B3B] font-semibold mb-8">
            Dipercaya Oleh Kementerian, Korporasi Multinasional, & Komunitas Akademis Dunia
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center">
            {PARTNER_LOGOS.map((partner, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-[#C5A059]/20 rounded-sm text-center shadow-xs hover:border-[#C5A059] transition-all flex flex-col items-center justify-center min-h-[72px]"
              >
                <span className="font-mono text-xs font-bold tracking-widest text-[#1A1A18]/80">
                  {partner.code}
                </span>
                <span className="text-[10px] text-[#73726E] tracking-tight truncate max-w-full">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto bg-white border border-[#C5A059]/40 rounded-sm p-8 sm:p-12 lg:p-16 shadow-xl shadow-[#121212]/5 relative">
          {/* Subtle Quote Watermark */}
          <Quote className="absolute top-6 right-6 w-16 h-16 text-[#C5A059]/10 pointer-events-none" />

          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#9E7B3B] font-semibold mb-6">
              <Shield className="w-4 h-4 text-[#C5A059]" />
              <span>{activeTestimonial.eventType} • {activeTestimonial.year}</span>
            </div>

            {/* Quote text */}
            <p className="font-serif-luxury italic text-xl sm:text-2xl lg:text-3xl text-[#1A1A18] leading-relaxed mb-8">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>

            {/* Author info & controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-[#C5A059]/20 gap-4">
              <div>
                <h4 className="font-serif-luxury text-lg font-bold text-[#1A1A18]">
                  {activeTestimonial.clientName}
                </h4>
                <p className="text-xs text-[#73726E]">
                  {activeTestimonial.role} — <span className="font-medium text-[#1A1A18]">{activeTestimonial.organization}</span>
                </p>
              </div>

              {/* Slider Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Testimonial sebelumnya"
                  className="w-10 h-10 rounded-sm border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#C5A059]/10 flex items-center justify-center text-[#1A1A18] transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="text-xs font-mono px-2 text-[#73726E]">
                  0{currentIdx + 1} / 0{CLIENT_TESTIMONIALS.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  aria-label="Testimonial selanjutnya"
                  className="w-10 h-10 rounded-sm border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#C5A059]/10 flex items-center justify-center text-[#1A1A18] transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
