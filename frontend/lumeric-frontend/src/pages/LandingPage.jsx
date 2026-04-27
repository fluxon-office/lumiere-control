import { useMemo, useRef, useState } from 'react';
import { logoImage } from '../assets/lumiereImages';
import FloatingBackground from '../components/layout/FloatingBackground';
import SiteFooter from '../components/layout/SiteFooter';
import SiteHeader from '../components/layout/SiteHeader';
import AboutSection from '../components/sections/AboutSection';
import BookingSection from '../components/sections/BookingSection';
import ContactSection from '../components/sections/ContactSection';
import DifferentialsSection from '../components/sections/DifferentialsSection';
import FaqSection from '../components/sections/FaqSection';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import useLandingAnimations from '../hooks/useLandingAnimations';
import { aboutTestimonials, differentials, faqItems, navItems, services } from '../utils/landingContent';

function LandingPage() {
  const rootRef = useRef(null);
  const heroCardRef = useRef(null);
  const serviceCarouselTrackRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [serviceCarouselStart, setServiceCarouselStart] = useState(0);
  const locationAddress = 'Av. Atlantica, 2113, Jardim Tres Marias, Sao Paulo - SP';

  const mapsLink = useMemo(
    () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationAddress)}`,
    [locationAddress],
  );

  const mapsEmbedLink = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(locationAddress)}&z=16&output=embed`,
    [locationAddress],
  );

  const whatsappLink = useMemo(
    () => 'https://wa.me/?text=Ola%2C%20quero%20solicitar%20atendimento%20na%20Lumiere%20Clinic.',
    [],
  );

  const servicePages = useMemo(
    () => [
      ['Limpeza de pele', 'Peeling', 'Microagulhamento', 'Botox', 'Bioestimulador'],
      ['Massagem relaxante', 'Secagem de vazinhos', 'Tratamento para gordura localizada', 'Enzimas para gordura localizada'],
      ['Drenagem linfatica'],
      ['Preenchimento labial', 'Micro labial'],
    ].map((titles) => titles.map((title) => services.find((service) => service.title === title)).filter(Boolean)),
    [],
  );

  const highlightedServices = useMemo(
    () => servicePages[serviceCarouselStart] ?? servicePages[0],
    [serviceCarouselStart, servicePages],
  );

  useLandingAnimations({
    heroCardRef,
    rootRef,
    serviceCarouselStart,
    serviceCarouselTrackRef,
  });

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--color-sand)] text-slate-900">
      <FloatingBackground />
      <SiteHeader
        logoImage={logoImage}
        menuOpen={menuOpen}
        navItems={navItems}
        onMenuClose={() => setMenuOpen(false)}
        onMenuToggle={() => setMenuOpen((current) => !current)}
      />

      <main className="overflow-hidden">
        <HeroSection heroCardRef={heroCardRef} />
        <ServicesSection
          highlightedServices={highlightedServices}
          serviceCarouselStart={serviceCarouselStart}
          serviceCarouselTrackRef={serviceCarouselTrackRef}
          servicePages={servicePages}
          whatsappLink={whatsappLink}
          onNext={() => setServiceCarouselStart((current) => (current + 1) % servicePages.length)}
          onPrevious={() => setServiceCarouselStart((current) => (current - 1 + servicePages.length) % servicePages.length)}
        />
        <AboutSection aboutTestimonials={aboutTestimonials} />
        <DifferentialsSection differentials={differentials} whatsappLink={whatsappLink} />
        <BookingSection whatsappLink={whatsappLink} />
        <ContactSection
          locationAddress={locationAddress}
          mapsEmbedLink={mapsEmbedLink}
          mapsLink={mapsLink}
          whatsappLink={whatsappLink}
        />
        <FaqSection
          activeFaq={activeFaq}
          faqItems={faqItems}
          onToggleFaq={(index, open) => setActiveFaq(open ? -1 : index)}
        />
      </main>

      <SiteFooter logoImage={logoImage} mapsLink={mapsLink} />
    </div>
  );
}

export default LandingPage;
