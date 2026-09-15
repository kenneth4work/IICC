import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import KeyStatistics from './components/KeyStatistics';
import AboutSection from './components/AboutSection';
import FacilitiesShowcase from './components/FacilitiesShowcase';
import ServicesSection from './components/ServicesSection';
import ClientTestimonials from './components/ClientTestimonials';
import VisualGallery from './components/VisualGallery';
import CtaBand from './components/CtaBand';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FacilityModal from './components/FacilityModal';
import BrochureModal from './components/BrochureModal';
import { Facility } from './types';

export default function App() {
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [inquiryPreselectedRoom, setInquiryPreselectedRoom] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (roomName?: string) => {
    if (roomName) {
      setInquiryPreselectedRoom(roomName);
    }
    const contactElement = document.getElementById('kontak');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A1A18] selection:bg-[#C5A059]/20 selection:text-[#9E7B3B]">
      {/* 1. Navigation Bar */}
      <Navbar
        onOpenInquiry={() => handleOpenInquiry()}
        onOpenBrochure={() => setIsBrochureOpen(true)}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onOpenInquiry={() => handleOpenInquiry()}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 3. Marquee / Partner Banner */}
        <MarqueeBanner />

        {/* 4. Key Statistics Grid */}
        <KeyStatistics />

        {/* 5. About Section (Editorial Split Layout) */}
        <AboutSection />

        {/* 6. Facilities Showcase (Card Grid) */}
        <FacilitiesShowcase
          onSelectFacility={(fac) => setSelectedFacility(fac)}
          onInquireFacility={(roomName) => handleOpenInquiry(roomName)}
        />

        {/* 7. Services & Capabilities */}
        <ServicesSection onOpenInquiry={() => handleOpenInquiry()} />

        {/* 8. Client & Testimonial Strip */}
        <ClientTestimonials />

        {/* 9. Visual Gallery */}
        <VisualGallery />

        {/* 10. Call to Action (CTA) Band */}
        <CtaBand onOpenInquiry={() => handleOpenInquiry()} />

        {/* 11. Contact & Inquiry Form */}
        <ContactSection initialRoom={inquiryPreselectedRoom} />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Interactive Detail Modals */}
      <FacilityModal
        facility={selectedFacility}
        onClose={() => setSelectedFacility(null)}
        onInquire={(roomName) => {
          setSelectedFacility(null);
          handleOpenInquiry(roomName);
        }}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />
    </div>
  );
}
