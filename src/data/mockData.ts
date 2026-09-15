import { Facility, ServiceItem, Testimonial, GalleryItem } from '../types';

export const KEY_STATISTICS = [
  {
    id: 'area',
    value: '3,200',
    unit: 'M²',
    label: 'Total Luas Area',
    subtext: 'Ruang konvensi serbaguna terintegrasi tanpa pilar'
  },
  {
    id: 'capacity',
    value: '2,200',
    unit: 'PAX',
    label: 'Kapasitas Ballroom',
    subtext: 'Dian Grand Ballroom dengan tata letak teater'
  },
  {
    id: 'suites',
    value: '12',
    unit: 'SUITES',
    label: 'Ruang Rapat Eksekutif',
    subtext: 'Dilengkapi teknologi konferensi hibrida 4K & peredam akustik'
  },
  {
    id: 'parking',
    value: '1,500+',
    unit: 'SLOTS',
    label: 'Area Parkir Terpadu',
    subtext: 'Akses langsung Botani Square & Hotel Santika Premiere'
  }
];

export const MARQUEE_ITEMS = [
  'KEMENPAREKRAF CHSE CERTIFIED',
  'STRATEGICALLY INTEGRATED AT BOTANI SQUARE MALL BOGOR',
  'PILLARLESS 2,200 PAX DIAN GRAND BALLROOM',
  'HIGH-SECURITY PRESIDENTIAL PROTOCOL SUITE',
  'OFFICIAL VENUE FOR ASEAN & G20 MINISTERIAL CONCLAVES',
  'FIBER-OPTIC GIGABIT HYBRID BROADCAST STUDIO',
  'DIRECT ACCESS VIA JAGORAWI TOLLWAY & LRT COMMUTER',
  'HALAL-CERTIFIED ROYAL BANQUET GASTRONOMY'
];

export const FACILITIES: Facility[] = [
  {
    id: 'dian-grand-ballroom',
    name: 'Dian Grand Ballroom',
    category: 'Grand Ballroom',
    tagline: 'Kemegahan Tanpa Batas Tanpa Pilar',
    description: 'Mahakarya arsitektur seluas 1.800 m² dengan langit-langit setinggi 9 meter yang dirancang megah tanpa pilar penghalang. Dilengkapi sistem tata suara Meyer Sound, pencahayaan panggung DMX 512 cerdas, dan dinding modular fleksibel yang dapat dibagi menjadi dua ruangan independen.',
    area: '1,800 m²',
    ceiling: '9.0 Meter',
    theatreCapacity: 2200,
    banquetCapacity: 1200,
    classroomCapacity: 950,
    cocktailCapacity: 2500,
    features: [
      'Pillarless Architectural Vista',
      'Dual 4K Laser Projection & Massive LED Videowall',
      'Independent Pre-Function Foyer seluas 600 m²',
      'Acoustic STC 55 Soundproofing Partition Walls',
      'Direct Freight Elevator & Heavy Rigging Trusses'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
    badge: 'Flagship Venue'
  },
  {
    id: 'botani-exhibition-hall',
    name: 'Botani Exhibition & Trade Pavilion',
    category: 'Exhibition Hall',
    tagline: 'Panggung Komprehensif Ekspo & Pameran Skala Global',
    description: 'Ruang pameran dinamis seluas 1.000 m² dengan kapasitas beban lantai berbobot tinggi serta akses muat bongkar (loading bay) langsung untuk logistik pameran dagang, pameran otomotif, bursa teknologi pertanian, dan stan multipaviliun.',
    area: '1,000 m²',
    ceiling: '6.5 Meter',
    theatreCapacity: 1000,
    banquetCapacity: 600,
    classroomCapacity: 500,
    cocktailCapacity: 1400,
    features: [
      'Heavy Floor Loading 1.5 Ton/m²',
      'Direct Ground-Floor Loading Dock Access',
      'High-Density Three-Phase Electric Power Grids',
      'Modular Booth Layout Capability (Up to 80 Standard Booths)',
      'Integrated Registration & VIP Fast-Track Gate'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    badge: 'High Loading'
  },
  {
    id: 'pajajaran-executive-suites',
    name: 'Pajajaran Executive Conclave Suites',
    category: 'Meeting Suites',
    tagline: 'Privasi Tingkat Tinggi untuk Negosiasi Strategis & RUPS',
    description: 'Rangkaian 6 ruang pertemuan eksekutif bergaya kontemporer dengan meja kayu jati eksklusif, kursi ergonomis Herman Miller, dan sistem konferensi audio Bosch DCN dengan mikrofon delegasi terenkripsi.',
    area: '180 m² - 320 m²',
    ceiling: '4.5 Meter',
    theatreCapacity: 250,
    banquetCapacity: 140,
    classroomCapacity: 120,
    cocktailCapacity: 200,
    features: [
      'Encrypted Bosch Delegate Audio Conference System',
      'Ultra-HD PTZ Video Cameras for Hybrid Meetings',
      'Private High-Speed Fiber Leased Line (1 Gbps)',
      'Acoustic Double-Glazed Privacy Panels',
      'Adjacent Private Executive Dining Saloon'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200&auto=format&fit=crop',
    badge: 'Hybrid 4K Ready'
  },
  {
    id: 'presidential-protocol-lounge',
    name: 'Presidential & VVIP Protocol Lounge',
    category: 'VIP Suites',
    tagline: 'Peristirahatan Eksklusif Pejabat Negara & Tamu Kehormatan',
    description: 'Dirancang khusus dengan standar protokol kenegaraan tingkat tinggi. Dilengkapi akses lift privat khusus, ruang peristirahatan terpisah (Green Room), kamar mandi marmer pribadi, serta ruang briefing tertutup dengan pengamanan terjamin.',
    area: '240 m²',
    ceiling: '4.2 Meter',
    theatreCapacity: 60,
    banquetCapacity: 40,
    classroomCapacity: 30,
    cocktailCapacity: 80,
    features: [
      'Discrete VIP Vehicular Drop-Off & Dedicated Private Lift',
      'Paspampres & Security Briefing Anteroom',
      'Royal Leather Seating & Bespoke Mahogany Furnishings',
      'Dedicated Presidential Restroom & Dressing Suite',
      'Private Butler & Sommelier Service Station'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    badge: 'State Protocol'
  },
  {
    id: 'salak-panoramic-foyer',
    name: 'Salak Panoramic Foyer & Terrace',
    category: 'Pre-Function Foyer',
    tagline: 'Pesona Lanskap Hijau Kota Hujan & Gunung Salak',
    description: 'Area pra-acara bertabur cahaya alami dengan jendela kaca ganda setinggi 8 meter yang membingkai siluet Gunung Salak. Sangat ideal untuk resepsi koktail senja, pameran seni, coffee break kehormatan, dan seremoni karpet merah.',
    area: '650 m²',
    ceiling: '8.0 Meter',
    theatreCapacity: 400,
    banquetCapacity: 250,
    classroomCapacity: 180,
    cocktailCapacity: 800,
    features: [
      'Floor-to-Ceiling Panoramic Glass Glazing',
      'Direct Outdoor Sunset Cocktail Deck',
      'Ambient LED Architectural Cove Lighting',
      'Spacious Registration Counter & Media Wall',
      'Direct Escalator Access from Main Lobby'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'the-heritage-banquet-hall',
    name: 'The Heritage Royal Dining Pavilion',
    category: 'Banquet Hall',
    tagline: 'Kemewahan Kuliner Nusantara Berstandar Gastronomi Dunia',
    description: 'Ruang perjamuan makan malam kenegaraan dengan tata meja megah perak dan kristal Bohemia, didukung dapur induk perhotelan bersertifikasi Halal MUI dan HACCP internasional.',
    area: '480 m²',
    ceiling: '5.0 Meter',
    theatreCapacity: 380,
    banquetCapacity: 280,
    classroomCapacity: 220,
    cocktailCapacity: 450,
    features: [
      'Silver-Service & Fine Dining Plated Capacity',
      'Integrated Live Show Kitchen & Carving Stations',
      'Acoustic Chamber for Traditional & Classical Ensembles',
      'Customized Wine & Artisanal Beverage Cellar Pairing',
      'Direct Service Route from Master Commissary Kitchen'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'royal-catering',
    title: 'Royal Gastronomy & Catering',
    subtitle: 'Simfoni Cita Rasa Warisan Nusantara & Kontinental',
    description: 'Disiapkan oleh tim Master Chef IICC dengan bahan pangan organik premium mitra binaan IPB University. Menghadirkan jamuan prasmanan agung, rijsttafel kerajaan, hingga gala dinner 7-course berstandar diplomasi internasional.',
    iconName: 'UtensilsCrossed',
    highlights: ['Sertifikasi Halal Resmi MUI & Standar HACCP', 'Kurasi Bahan Organik Berkelanjutan Agribisnis IPB', 'Sommelier & Barista Bar Khusus'],
    imageGradient: 'from-[#C5A059]/20 to-transparent'
  },
  {
    id: 'audio-visual',
    title: 'World-Class Production & Rigging',
    subtitle: 'Arsitektur Akustik & Teknologi Panggung Termutakhir',
    description: 'Didukung sistem pencahayaan pintar automated moving heads, panggung hidrolik fleksibel, truss baja bersertifikasi internasional, dan tim teknisi audio visual bersertifikasi siap mengawal konser simfoni hingga peluncuran produk spektakuler.',
    iconName: 'Sparkles',
    highlights: ['Sistem Tata Suara Line-Array Meyer Sound', 'Rigging Truss Kapasitas 12 Ton Terdistribusi', 'Operator & Teknisi Tersertifikasi Penuh'],
    imageGradient: 'from-[#9E7B3B]/20 to-transparent'
  },
  {
    id: 'hybrid-broadcast',
    title: 'Hybrid Conclave & Fiber Pipeline',
    subtitle: 'Konferensi Multi-Negara Tanpa Jeda Latensi',
    description: 'Infrastruktur serat optik privat berkecepatan 1 Gbps dengan redundansi ganda, studio siaran broadcast 4K multi-kamera, sistem alih bahasa simultan (simultaneous interpretation) 6 bahasa, serta enkripsi data tingkat perbankan.',
    iconName: 'Radio',
    highlights: ['Konektivitas Dual Leased Line Gigabit Redundant', 'Ruang Booth Penerjemah Bahasa Simultan (6 Bahasa)', 'Server Enkripsi Cloud & CDN Global'],
    imageGradient: 'from-[#C5A059]/20 to-transparent'
  },
  {
    id: 'vip-protocol',
    title: 'VVIP State Protocol & Concierge',
    subtitle: 'Ketelitian Tertinggi Menjamu Delegasi Kenegaraan',
    description: 'Layanan terpadu pendampingan protokoler kepresidenan dan kementerian. Meliputi jalur konvoi khusus, pengawalan ketat, akomodasi suite hotel bintang lima yang terhubung langsung, serta pelayanan butler pribadi 24 jam.',
    iconName: 'ShieldCheck',
    highlights: ['Jalur Akses Steril & Pengamanan Berlapis', 'Koneksi Langsung ke Hotel Santika Premiere & Mall', 'Petugas Protokol Berpengalaman Acara Bilateral'],
    imageGradient: 'from-[#9E7B3B]/20 to-transparent'
  }
];

export const CLIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Prof. Dr. Ir. Arif Satria, S.P., M.Si.',
    role: 'Rektor & Cendekiawan Global',
    organization: 'IPB University & Forum Rektor Indonesia',
    quote: 'IICC senantiasa menjadi etalase kehormatan bagi perhelatan ilmiah dunia dan simposium internasional IPB. Fasilitas akustik Dian Ballroom dan keanggunan pelayanannya memberikan standar kenyamanan tak tertandingi di Jawa Barat.',
    eventType: 'Sidang Terbuka & World Innovation Conclave',
    year: '2024'
  },
  {
    id: 't2',
    clientName: 'Dr. Hendra Wicaksono, M.M.',
    role: 'Direktur Hubungan Korporasi',
    organization: 'PT Bank Mandiri (Persero) Tbk',
    quote: 'Pelaksanaan Rapat Pimpinan Nasional dan Gala Dinner kami dengan 1.600 delegasi berjalan mulus tanpa cela. Koordinasi teknis AV, kelezatan kuliner, dan kemudahan akses tol Jagorawi menjadikan IICC pilihan mutlak korporasi kami.',
    eventType: 'National Leadership Conference & Gala Dinner',
    year: '2024'
  },
  {
    id: 't3',
    clientName: 'Siti Nurhaliza Danuatmodjo',
    role: 'Pengantin & Kurator Desain',
    organization: 'Royal Sundanese & Contemporary Wedding',
    quote: 'Pernikahan impian kami terwujud dengan keagungan luar biasa. Dian Grand Ballroom yang tanpa tiang memungkinkan dekorasi panggung setinggi 8 meter dan jalan pelaminan yang begitu megah. Semua tamu terpesona oleh elegansi IICC.',
    eventType: 'The Royal Wedding Celebration (1,800 Undangan)',
    year: '2024'
  }
];

export const PARTNER_LOGOS = [
  { name: 'Kementerian BUMN RI', code: 'KBUMN' },
  { name: 'IPB University', code: 'IPB' },
  { name: 'Bank Mandiri', code: 'MANDIRI' },
  { name: 'Telkom Indonesia', code: 'TELKOM' },
  { name: 'Astra International', code: 'ASTRA' },
  { name: 'Kemenparekraf RI', code: 'KEMENPAREKRAF' },
  { name: 'FAO United Nations', code: 'UN FAO' },
  { name: 'Santika Premiere Hotel', code: 'SANTIKA' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Grand Ballroom Presidential Gala',
    category: 'ballroom',
    description: 'Tata panggung spektakuler dengan pencahayaan emas hangat untuk jamuan 1.500 tamu',
    dimensions: '1.800 m² Dian Ballroom',
    imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g2',
    title: 'International Ministerial Plenary',
    category: 'conclaves',
    description: 'Sidang pleno multilateral dengan pengaturan meja tapal kuda dan penerjemah simultan',
    dimensions: 'Executive Conclave Stage',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g3',
    title: 'The Royal Heritage Wedding Vista',
    category: 'weddings',
    description: 'Pelaminan bertabur ribuan bunga segar dengan pilarless view yang dramatis',
    dimensions: 'Grand Gala Setup',
    imageUrl: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g4',
    title: 'Salak Panoramic Pre-Function Sunlit Foyer',
    category: 'architecture',
    description: 'Arsitektur berdinding kaca setinggi 8 meter dengan pemandangan alami pegunungan',
    dimensions: 'Pre-Function Gallery',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g5',
    title: 'Bespoke Haute Cuisine Plated Course',
    category: 'ballroom',
    description: 'Presentasi gastronomi 5-course bertema rempah Nusantara oleh Master Chef',
    dimensions: 'The Heritage Dining Pavilion',
    imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g6',
    title: 'High-Level Boardroom Conclave',
    category: 'conclaves',
    description: 'Diskusi panel tertutup dengan sistem konferensi multimedia terenkripsi',
    dimensions: 'Pajajaran Suite 1',
    imageUrl: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g7',
    title: 'Modern Agritech World Exhibition',
    category: 'architecture',
    description: 'Pameran inovasi berskala internasional di lantai Botani Exhibition Pavilion',
    dimensions: 'Botani Pavilion Floor',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'g8',
    title: 'Botanical Sunset Champagne Reception',
    category: 'weddings',
    description: 'Pesta koktail senja di teras terbuka menghadap rimbunnya kota Bogor',
    dimensions: 'Outdoor Sky Deck',
    imageUrl: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1200&auto=format&fit=crop'
  }
];
