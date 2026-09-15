import { useState, type FormEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Car, Train } from 'lucide-react';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialRoom?: string;
}

export default function ContactSection({ initialRoom }: ContactSectionProps) {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    eventType: 'Konferensi / Simposium Internasional',
    eventDate: '',
    guestCount: 300,
    preferredRoom: initialRoom || 'Dian Grand Ballroom',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury reservation dispatch
    setTimeout(() => {
      const generatedRef = 'IICC-' + Math.floor(100000 + Math.random() * 900000);
      setRefNumber(generatedRef);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const eventTypes = [
    'Konferensi / Simposium Internasional',
    'Sidang Pleno & RUPS Korporasi',
    'Pernikahan Agung (Grand Royal Wedding)',
    'Pameran Dagang & Ekspo Industri (Exhibition)',
    'Wisuda / Sidang Terbuka Universitas',
    'Konser Musik / Gala Perjamuan Makan Malam',
    'Rapat Kerja Tertutup Eksekutif'
  ];

  const roomOptions = [
    'Dian Grand Ballroom (1.800 m² - s.d. 2.200 Pax)',
    'Botani Exhibition & Trade Pavilion (1.000 m²)',
    'Pajajaran Executive Conclave Suites',
    'Presidential & VVIP Protocol Lounge',
    'Salak Panoramic Foyer & Terrace',
    'The Heritage Royal Dining Pavilion',
    'Belum Memilih / Memerlukan Rekomendasi Konsultan'
  ];

  return (
    <section id="kontak" className="relative bg-[#FAF8F5] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-[1px] bg-[#C5A059]" />
            <span className="text-[11px] font-sans uppercase tracking-[0.28em] text-[#9E7B3B] font-semibold">
              Konektivitas & Reservasi Resmi
            </span>
          </div>
          <h2 className="font-editorial-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-[#1A1A18] tracking-tight mb-4">
            Hubungi Konsultan <span className="italic font-normal text-[#9E7B3B]">Acara IICC</span>
          </h2>
          <p className="text-sm sm:text-base text-[#73726E] font-sans leading-relaxed">
            Diskusikan kebutuhan tata ruang, katering perjamuan, maupun simulasi anggaran acara Anda. 
            Tim perencana perhelatan kami siap memberikan proposal terperinci dalam waktu 24 jam kerja.
          </p>
        </div>

        {/* Split Layout: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact Details & Accessibility */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#C5A059]/30 rounded-sm shadow-xs">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#9E7B3B]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18] mb-1">
                    Lokasi Presisi & Alamat
                  </h4>
                  <p className="text-xs text-[#73726E] leading-relaxed">
                    Kompleks Botani Square Mall, Lantai 2 & 3<br />
                    Jl. Raya Pajajaran, RT.04/RW.05, Tegallega, Kecamatan Bogor Tengah, Kota Bogor, Jawa Barat 16127
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#C5A059]/30 rounded-sm shadow-xs">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#9E7B3B]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18] mb-1">
                    Layanan Telepon & Hotline VIP
                  </h4>
                  <p className="text-xs text-[#1A1A18] font-medium">
                    Office: <a href="tel:+622518400658" className="hover:text-[#9E7B3B]">+62 251 8400 658</a>
                  </p>
                  <p className="text-xs text-[#73726E]">
                    WhatsApp VIP Sales: <a href="https://wa.me/628111111111" target="_blank" rel="noopener noreferrer" className="hover:text-[#9E7B3B]">+62 811 1122 3344</a>
                  </p>
                </div>
              </div>

              {/* Email & Correspondence */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#C5A059]/30 rounded-sm shadow-xs">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#9E7B3B]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18] mb-1">
                    Korespondensi Elektronik
                  </h4>
                  <p className="text-xs text-[#1A1A18] font-medium">
                    <a href="mailto:sales@iicc-bogor.com" className="hover:text-[#9E7B3B]">sales@iicc-bogor.com</a>
                  </p>
                  <p className="text-xs text-[#73726E]">
                    Protokoler: <a href="mailto:protocol@iicc-bogor.com" className="hover:text-[#9E7B3B]">protocol@iicc-bogor.com</a>
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 p-5 bg-white border border-[#C5A059]/30 rounded-sm shadow-xs">
                <div className="w-10 h-10 rounded-sm bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center shrink-0 text-[#9E7B3B]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-base font-semibold text-[#1A1A18] mb-1">
                    Jam Layanan Kantor Konsultasi
                  </h4>
                  <p className="text-xs text-[#73726E]">
                    Senin – Jumat: 08.00 – 18.00 WIB<br />
                    Sabtu & Minggu: Khusus Inspeksi Acara Terjadwal
                  </p>
                </div>
              </div>

              {/* Access Advantage Highlight */}
              <div className="p-5 bg-[#121212] text-[#FAF8F5] rounded-sm border border-[#C5A059]/40">
                <h5 className="font-serif-luxury text-sm font-semibold text-[#DFC184] mb-2 flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#C5A059]" />
                  Kemudahan Aksesibilitas Terpadu
                </h5>
                <p className="text-xs text-[#F5F5F3]/75 leading-relaxed mb-3">
                  Terletak tepat di ujung gerbang Tol Jagorawi (Exit Bogor). Berjarak 45 menit dari Jakarta dan 60 menit dari Bandara Internasional Soekarno-Hatta melalui Tol Lingkar Luar.
                </p>
                <div className="flex items-center gap-2 text-[11px] text-[#DFC184]">
                  <Train className="w-3.5 h-3.5" />
                  <span>Koneksi Shuttle & Halte Bus TransPakuan Botani Square</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Reservation & Inquiry Form with Gold Focus States */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#C5A059]/40 rounded-sm p-8 sm:p-10 shadow-xl shadow-[#121212]/5">
              {submitted ? (
                <div className="py-12 text-center animate-fade-in flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border-2 border-[#C5A059] flex items-center justify-center text-[#9E7B3B] mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#C5A059]" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#9E7B3B] uppercase mb-2">
                    Permohonan Diterima Resmi
                  </span>
                  <h3 className="font-editorial-luxury text-2xl sm:text-3xl text-[#1A1A18] font-medium mb-3">
                    Terima Kasih, {formData.fullName}
                  </h3>
                  <p className="text-sm text-[#73726E] max-w-md leading-relaxed mb-6 font-sans">
                    Permintaan konsultasi untuk acara <strong className="text-[#1A1A18]">{formData.eventType}</strong> telah tercatat di sistem reservasi IICC. Konsultan perhelatan kami akan menghubungi Anda dalam waktu 24 jam.
                  </p>

                  <div className="px-6 py-3 bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs mb-8 text-xs">
                    <span className="text-[#73726E] block mb-1">Nomor Registrasi Referensi Acara:</span>
                    <span className="font-mono text-base font-bold text-[#1A1A18] tracking-widest">
                      {refNumber}
                    </span>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-[#C5A059] text-xs uppercase tracking-wider text-[#1A1A18] hover:bg-[#C5A059] hover:text-[#121212] transition-colors rounded-xs font-medium"
                  >
                    Kirim Permohonan Lain
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#C5A059]/20 pb-4 mb-6">
                    <h3 className="font-serif-luxury text-2xl text-[#1A1A18] font-semibold">
                      Formulir Konsultasi & Penawaran Acara
                    </h3>
                    <p className="text-xs text-[#73726E] mt-1">
                      Lengkapi data di bawah ini untuk menerima rekomendasi denah tata ruang dan simulasi penawaran resmi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Contoh: Raden Arya Wicaksana"
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>

                    {/* Organization / Company */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Instansi / Perusahaan / Keluarga
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Kementerian / PT / Keluarga Besar"
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Alamat Email Resmi *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nama@instansi.co.id"
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Nomor Kontak / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0812-xxxx-xxxx"
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Type */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Jenis Perhelatan *
                      </label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      >
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Perkiraan Tanggal Acara *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Estimated Guest Count */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Perkiraan Jumlah Tamu (Orang)
                      </label>
                      <input
                        type="number"
                        min="20"
                        max="3000"
                        step="10"
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: Number(e.target.value) })}
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      />
                    </div>

                    {/* Preferred Room */}
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                        Pilihan Ruangan Utama
                      </label>
                      <select
                        value={formData.preferredRoom}
                        onChange={(e) => setFormData({ ...formData, preferredRoom: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                      >
                        {roomOptions.map((room) => (
                          <option key={room} value={room}>
                            {room}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Special Requirements */}
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-[#1A1A18]/80 mb-1.5">
                      Kebutuhan Khusus / Catatan Tambahan (Katering, Audio Visual, Protokoler)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Jelaskan kebutuhan khusus seperti format katering jamuan makan, penerjemah bahasa simultan, panggung khusus, atau pengawalan VIP..."
                      className="w-full px-3.5 py-2.5 text-xs text-[#1A1A18] bg-[#FAF8F5] border border-[#C5A059]/30 rounded-xs focus:border-[#C5A059] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C5A059] transition-all"
                    />
                  </div>

                  {/* Submit Button with gold accent */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#121212] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#121212] text-xs font-semibold uppercase tracking-[0.2em] rounded-xs transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Memproses Reservasi...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Permohonan Konsultasi Resmi</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#73726E] font-sans">
                    Informasi dan dokumen Anda dijaga kerahasiaannya di bawah standar privasi korporasi IICC Bogor.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
