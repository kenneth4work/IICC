import { ArrowUp, Award, CheckCircle, Mail, MapPin, Phone, Shield } from 'lucide-react';
import logoImage from '../assets/images/regenerated_image_1789439231923.png';

interface FooterProps {
  onOpenInquiry: () => void;
}

export default function Footer({ onOpenInquiry }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#121212] text-[#FAF8F5] pt-20 pb-12 border-t border-[#C5A059]/30 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 bg-dark-mesh opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Identity (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center mb-6">
              <img
                src={logoImage}
                alt="IPB International Convention Center Bogor"
                className="h-11 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-[#F5F5F3]/70 font-sans leading-relaxed max-w-md mb-6">
              Pusat konvensi dan ekshibisi terintegrasi termegah di Kota Bogor. Menghadirkan fasilitas pillarless Dian Grand Ballroom, 12 ruang sidang eksekutif, serta keramahan tata jamuan berstandar internasional di bawah naungan PT BLST – IPB University.
            </p>

            {/* Certifications and Accreditations */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#181818] border border-[#C5A059]/30 text-[10px] font-mono text-[#DFC184]">
                <Award className="w-3 h-3 text-[#C5A059]" />
                <span>CHSE Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#181818] border border-[#C5A059]/30 text-[10px] font-mono text-[#DFC184]">
                <Shield className="w-3 h-3 text-[#C5A059]" />
                <span>Halal MUI Certified Kitchen</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#181818] border border-[#C5A059]/30 text-[10px] font-mono text-[#DFC184]">
                <CheckCircle className="w-3 h-3 text-[#C5A059]" />
                <span>ISO 9001:2015</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-luxury text-sm font-semibold tracking-wider uppercase text-[#DFC184] mb-5">
              Navigasi Ruang
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F5F3]/75 font-sans">
              <li>
                <a href="#fasilitas" className="hover:text-[#C5A059] transition-colors">
                  Dian Grand Ballroom
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#C5A059] transition-colors">
                  Botani Exhibition Hall
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#C5A059] transition-colors">
                  Pajajaran Conclaves
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#C5A059] transition-colors">
                  Presidential Suite Lounge
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#C5A059] transition-colors">
                  Salak Panoramic Foyer
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-[#C5A059] transition-colors">
                  The Heritage Banquet
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate Services (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif-luxury text-sm font-semibold tracking-wider uppercase text-[#DFC184] mb-5">
              Layanan Utama
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F5F5F3]/75 font-sans">
              <li>
                <a href="#layanan" className="hover:text-[#C5A059] transition-colors">
                  Royal Gastronomy Dining
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#C5A059] transition-colors">
                  Stage Rigging & Meyer Sound
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#C5A059] transition-colors">
                  Gigabit Hybrid Streaming
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#C5A059] transition-colors">
                  Pengawalan Protokol VVIP
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenInquiry}
                  className="text-[#C5A059] hover:underline transition-colors text-left font-medium"
                >
                  Konsultasi Gratis
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif-luxury text-sm font-semibold tracking-wider uppercase text-[#DFC184] mb-5">
              Hubungi Kami
            </h4>
            <div className="space-y-3 text-xs text-[#F5F5F3]/75 font-sans">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span>
                  Kompleks Mall Botani Square Lantai 2 & 3, Jl. Raya Pajajaran, Kota Bogor 16127
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+622518400658" className="hover:text-[#C5A059]">
                  +62 251 8400 658
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:sales@iicc-bogor.com" className="hover:text-[#C5A059]">
                  sales@iicc-bogor.com
                </a>
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[11px] text-[#F5F5F3]/60 block mb-2 font-sans">
                Afiliasi Strategis:
              </span>
              <span className="text-xs font-serif-luxury font-medium text-[#FAF8F5]">
                IPB University Holding Company (PT BLST) & Botani Square
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5F5F3]/50 font-sans">
          <p>
            &copy; {new Date().getFullYear()} IPB International Convention Center (IICC). Hak Cipta Dilindungi Undang-Undang.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#C5A059] cursor-pointer transition-colors">
              Kebijakan Privasi
            </span>
            <span className="hover:text-[#C5A059] cursor-pointer transition-colors">
              Syarat & Ketentuan Sewa
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#DFC184] hover:text-white transition-colors"
              aria-label="Kembali ke atas"
            >
              <span>Kembali Ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
