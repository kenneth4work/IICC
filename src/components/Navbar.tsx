import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Download, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: (roomName?: string) => void;
  onOpenBrochure: () => void;
}

export default function Navbar({ onOpenInquiry, onOpenBrochure }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#tentang' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Klien & Rekomendasi', href: '#klien' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Lokasi & Kontak', href: '#kontak' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-header py-3.5 border-b border-[#C5A059]/20 shadow-2xl shadow-black/40'
            : 'bg-gradient-to-b from-[#121212]/90 via-[#121212]/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo / Crest */}
          <a
            href="#"
            className="group flex items-center gap-3.5 focus:outline-none"
            aria-label="IPB International Convention Center Home"
          >
            {/* Monogram Crest */}
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-sm border border-[#C5A059]/60 flex items-center justify-center bg-[#121212]/80 group-hover:border-[#C5A059] transition-all duration-300 shadow-sm relative overflow-hidden">
              <span className="font-serif-luxury text-[#C5A059] text-base md:text-lg font-semibold tracking-wider">
                IICC
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-serif-luxury text-sm md:text-base font-medium tracking-[0.18em] uppercase text-[#FAF8F5] leading-tight group-hover:text-[#DFC184] transition-colors">
                IPB International
              </span>
              <span className="text-[10px] md:text-[11px] font-sans tracking-[0.26em] uppercase text-[#C5A059] font-semibold">
                Convention Center • Bogor
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.08em] text-[#F5F5F3]/85 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-[#C5A059] transition-colors duration-200 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBrochure}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#FAF8F5]/80 hover:text-[#C5A059] transition-colors px-3 py-2"
              title="Unduh E-Brochure & Floorplan"
            >
              <Download className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden xl:inline">E-Brochure</span>
            </button>

            <button
              onClick={() => onOpenInquiry()}
              className="relative group px-5 py-2.5 bg-[#FAF8F5] text-[#121212] hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm shadow-md hover:shadow-lg active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Konsultasi Gratis
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FAF8F5] hover:text-[#C5A059] focus:outline-none transition-colors"
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#121212]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <p className="text-[11px] font-mono tracking-[0.25em] text-[#C5A059] uppercase border-b border-[#C5A059]/20 pb-2">
              Navigasi IICC Bogor
            </p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-luxury text-2xl text-[#FAF8F5] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 text-[#C5A059]/50" />
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[#C5A059] text-[#121212] font-semibold text-xs tracking-[0.16em] uppercase rounded-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Konsultasi & Reservasi
            </button>
            <a
              href="tel:+622518400658"
              className="w-full py-3 text-center text-xs tracking-wider uppercase text-[#FAF8F5]/80 hover:text-[#C5A059] border border-white/15 rounded-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              +62 251 8400 658 (Direct Line)
            </a>
          </div>
        </div>
      )}
    </>
  );
}
