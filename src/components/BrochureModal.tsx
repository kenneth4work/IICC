import { useState, type FormEvent } from 'react';
import { X, FileText, Download, CheckCircle2, Shield } from 'lucide-react';

interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BrochureModal({ isOpen, onClose }: BrochureModalProps) {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#121212]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-md w-full bg-[#181818] border border-[#C5A059]/40 rounded-sm p-8 text-[#FAF8F5] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#F5F5F3]/60 hover:text-white transition-colors"
          aria-label="Tutup jendela unduh"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-sm border border-[#C5A059]/60 flex items-center justify-center bg-[#121212] text-[#DFC184]">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#DFC184] uppercase">
              Dokumen Resmi
            </span>
            <h3 className="font-serif-luxury text-xl text-white font-medium">
              E-Brochure & Floorplan IICC
            </h3>
          </div>
        </div>

        {downloaded ? (
          <div className="py-6 text-center">
            <CheckCircle2 className="w-12 h-12 text-[#C5A059] mx-auto mb-3" />
            <h4 className="font-serif-luxury text-lg text-white font-semibold mb-2">
              Unduhan Siap!
            </h4>
            <p className="text-xs text-[#F5F5F3]/75 mb-6">
              Katalog spesifikasi teknis lengkap, denah lantai 3D, dan panduan katering resmi telah disiapkan untuk email: <strong className="text-white">{email}</strong>.
            </p>
            <div className="space-y-2">
              <a
                href="#download-direct"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Mengunduh berkas: IICC-Bogor-Official-Floorplan-Brochure-2025.pdf');
                  onClose();
                }}
                className="block w-full py-3 bg-[#C5A059] hover:bg-[#DFC184] text-[#121212] font-semibold text-xs uppercase tracking-wider rounded-xs transition-colors"
              >
                Unduh PDF Sekarang (18.4 MB)
              </a>
              <button
                onClick={onClose}
                className="block w-full py-2.5 text-xs text-[#F5F5F3]/60 hover:text-white uppercase tracking-wider"
              >
                Selesai
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4">
            <p className="text-xs text-[#F5F5F3]/70 leading-relaxed">
              Dapatkan dokumen komprehensif beresolusi tinggi berisi denah tata ruang Dian Grand Ballroom, denah modular meeting suites, kapasitas rig panggung, dan menu gala dinner.
            </p>

            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-[#DFC184] mb-1.5">
                Masukkan Alamat Email Anda
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@instansi-anda.com"
                className="w-full px-3.5 py-2.5 text-xs text-white bg-[#121212] border border-[#C5A059]/40 rounded-xs focus:border-[#C5A059] focus:outline-none focus:ring-1 focus:ring-[#C5A059]"
              />
            </div>

            <div className="p-3 bg-[#121212]/80 border border-[#C5A059]/20 rounded-xs flex items-center gap-2.5 text-[11px] text-[#F5F5F3]/70">
              <Shield className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Format PDF Interaktif • 28 Halaman • Edisi Diperbarui 2025</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#C5A059] hover:bg-[#DFC184] text-[#121212] font-semibold text-xs uppercase tracking-[0.16em] rounded-xs transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Akses Brosur & Denah Resmi</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
