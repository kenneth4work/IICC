import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ChevronRight } from 'lucide-react';
import logoImage from '../assets/images/regenerated_image_1789439231923.png';

interface NavbarProps {
  onOpenInquiry: (roomName?: string) => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
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
          {/* Left Column: Brand Logo (Symmetrical flank) */}
          <div className="flex-1 lg:flex-initial lg:w-60 flex items-center justify-start">
            <a
              href="#"
              className="group flex items-center focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
              aria-label="IPB International Convention Center Home"
            >
              <img
                src={logoImage}
                alt="IPB International Convention Center Bogor"
                className={`w-auto object-contain object-left filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-300 ${
                  isScrolled ? 'h-9 sm:h-10 md:h-11' : 'h-11 sm:h-12 md:h-14'
                }`}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Center Column: Desktop Navigation Links (Symmetrically centered) */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 gap-7 xl:gap-8 text-[12.5px] font-medium tracking-[0.12em] text-[#FAF8F5]/85 uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 hover:text-[#C5A059] transition-colors duration-200 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Column: Symmetrical Action Button */}
          <div className="flex items-center justify-end lg:w-60 gap-4">
            <button
              onClick={() => onOpenInquiry()}
              className="relative group px-5 py-2.5 bg-[#FAF8F5] text-[#121212] hover:bg-[#C5A059] hover:text-[#121212] transition-all duration-300 text-xs uppercase tracking-[0.15em] font-semibold rounded-sm shadow-md hover:shadow-lg active:scale-95 whitespace-nowrap hidden sm:inline-flex"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Konsultasi Gratis
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#FAF8F5] hover:text-[#C5A059] focus:outline-none transition-colors"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
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
