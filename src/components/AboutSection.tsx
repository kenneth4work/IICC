import { Award, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="tentang" className="relative bg-[#FAF8F5] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-[#C5A059]" />
          <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#9E7B3B] font-semibold">
            Warisan Keunggulan Konvensi
          </span>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Emotive Corporate Quote & Refined Narrative */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="font-editorial-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A18] leading-[1.2] mb-8">
              Harmonisasi <span className="italic font-normal text-[#9E7B3B]">arsitektur megah</span>, 
              kearifan budaya Sunda, dan standar keramahan dunia.
            </h2>

            {/* Blockquote with gold border accent */}
            <div className="relative pl-6 border-l-2 border-[#C5A059] mb-8">
              <p className="font-serif-luxury italic text-xl sm:text-2xl text-[#1A1A18]/90 leading-relaxed">
                &ldquo;Sejak awal perjalanannya, IICC didedikasikan sebagai episentrum dialog ilmiah global, 
                pertemuan tingkat tinggi kenegaraan, dan pesta pernikahan agung paling berkesan di Jawa Barat.&rdquo;
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-[#9E7B3B] font-semibold mt-3 font-sans">
                — Dewan Pengelola IPB International Convention Center
              </p>
            </div>

            {/* Editorial Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#1A1A18]/80 leading-[1.8] font-sans">
              <p>
                Terletak di persimpangan paling strategis Kota Bogor dan terhubung langsung dengan Botani Square Mall 
                serta Hotel Santika Premiere, IPB International Convention Center (IICC) menghadirkan kepraktisan 
                logistik tanpa tanding dengan akses tol Jagorawi yang berjarak hanya 2 menit dari gerbang keluar.
              </p>
              <p>
                Dengan luas fasilitas serbaguna lebih dari 3.200 meter persegi, aula Dian Grand Ballroom kami 
                dibangun dengan presisi teknik tanpa pilar (pillarless), memberikan bentang pandang 360 derajat 
                yang bebas halangan untuk hingga 2.200 hadirin.
              </p>
            </div>

            {/* Key Pillars Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#C5A059]/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18]">Akustik Bertaraf Konser</h4>
                  <p className="text-xs text-[#73726E] leading-relaxed">Peredam suara STC 55 untuk kejernihan orasi & pertunjukan musik.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18]">Gastronomi Berkelanjutan</h4>
                  <p className="text-xs text-[#73726E] leading-relaxed">Kemitraan langsung rantai pasok agribisnis organik IPB University.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Photography Frame & Floating Statistics Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame offset */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#C5A059]/40 rounded-sm pointer-events-none hidden sm:block" />

              {/* Main Image Container with elegant shadow */}
              <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-[#121212]/15 border border-[#1A1A18]/10 group">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=900&auto=format&fit=crop"
                  alt="IPB International Convention Center Bogor Architectural View"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-medium block mb-1">
                    Bogor Botanical Landmark
                  </span>
                  <p className="font-serif-luxury text-lg text-white font-normal">
                    Pemandangan Eksklusif Siluet Gunung Salak & Lanskap Kebun Raya
                  </p>
                </div>
              </div>

              {/* Floating Overlapping Statistics Badge */}
              <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-[#121212] text-[#FAF8F5] p-6 rounded-sm border border-[#C5A059]/40 shadow-2xl max-w-[260px] sm:max-w-[280px]">
                <div className="flex items-center gap-2 text-[#C5A059] mb-2">
                  <Award className="w-5 h-5 text-[#C5A059]" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#DFC184]">
                    Excellence Mark
                  </span>
                </div>
                <div className="font-serif-luxury text-3xl font-bold text-[#FAF8F5] leading-none mb-1">
                  15+ Tahun
                </div>
                <p className="text-xs text-[#FAF8F5]/70 font-sans leading-relaxed">
                  Dipercaya menyelenggarakan lebih dari 2.500 agenda prestisius nasional & internasional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
