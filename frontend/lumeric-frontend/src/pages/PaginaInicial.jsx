import { useMemo, useRef, useState } from 'react';
import { logoImage } from '../assets/imagensLumiere';
import FundoFlutuante from '../components/layout/FundoFlutuante';
import RodapeSite from '../components/layout/RodapeSite';
import CabecalhoSite from '../components/layout/CabecalhoSite';
import SecaoSobre from '../components/sections/SecaoSobre';
import SecaoAgendamento from '../components/sections/SecaoAgendamento';
import SecaoContato from '../components/sections/SecaoContato';
import SecaoDiferenciais from '../components/sections/SecaoDiferenciais';
import SecaoPerguntasFrequentes from '../components/sections/SecaoPerguntasFrequentes';
import SecaoHero from '../components/sections/SecaoHero';
import SecaoServicos from '../components/sections/SecaoServicos';
import useAnimacoesPaginaInicial from '../hooks/useAnimacoesPaginaInicial';
import { depoimentosSobre, diferenciais, itensNavegacao, perguntasFrequentes, servicos } from '../utils/conteudoPagina';

function PaginaInicial() {
  const paginaRef = useRef(null);
  const heroRef = useRef(null);
  const carrosselServicosRef = useRef(null);
  const [menuAberto, setMenuAberto] = useState(false);
  const [perguntaAberta, setPerguntaAberta] = useState(0);
  const [inicioCarrosselServicos, setInicioCarrosselServicos] = useState(0);
  const enderecoClinica = 'Av. Atlântica, 2113, Jardim Três Marias, São Paulo - SP';

  const linkMaps = useMemo(
    () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(enderecoClinica)}`,
    [enderecoClinica],
  );

  const linkMapsEmbed = useMemo(
    () => `https://www.google.com/maps?q=${encodeURIComponent(enderecoClinica)}&z=16&output=embed`,
    [enderecoClinica],
  );

  const linkWhatsapp = useMemo(
    () => 'https://wa.me/?text=Ol%C3%A1%2C%20quero%20solicitar%20atendimento%20na%20Lumiere%20Clinic.',
    [],
  );

  const paginasServicos = useMemo(
    () => [
      ['Limpeza de pele', 'Peeling', 'Microagulhamento', 'Botox', 'Bioestimulador'],
      ['Massagem relaxante', 'Secagem de vasinhos', 'Tratamento para gordura localizada', 'Enzimas para gordura localizada'],
      ['Drenagem linfática'],
      ['Preenchimento labial', 'Micro labial'],
    ].map((titulos) => titulos.map((titulo) => servicos.find((servico) => servico.title === titulo)).filter(Boolean)),
    [],
  );

  const servicosEmDestaque = useMemo(
    () => paginasServicos[inicioCarrosselServicos] ?? paginasServicos[0],
    [inicioCarrosselServicos, paginasServicos],
  );

  useAnimacoesPaginaInicial({
    heroRef,
    paginaRef,
    inicioCarrosselServicos,
    carrosselServicosRef,
  });

  return (
    <div ref={paginaRef} className="min-h-screen bg-[var(--color-sand)] text-slate-900">
      <FundoFlutuante />
      <CabecalhoSite
        logoImage={logoImage}
        menuOpen={menuAberto}
        navItems={itensNavegacao}
        onMenuClose={() => setMenuAberto(false)}
        onMenuToggle={() => setMenuAberto((atual) => !atual)}
      />

      <main className="overflow-hidden">
        <SecaoHero heroCardRef={heroRef} />
        <SecaoServicos
          highlightedServices={servicosEmDestaque}
          serviceCarouselStart={inicioCarrosselServicos}
          serviceCarouselTrackRef={carrosselServicosRef}
          servicePages={paginasServicos}
          whatsappLink={linkWhatsapp}
          onNext={() => setInicioCarrosselServicos((atual) => (atual + 1) % paginasServicos.length)}
          onPrevious={() => setInicioCarrosselServicos((atual) => (atual - 1 + paginasServicos.length) % paginasServicos.length)}
        />
        <SecaoSobre aboutTestimonials={depoimentosSobre} />
        <SecaoDiferenciais differentials={diferenciais} whatsappLink={linkWhatsapp} />
        <SecaoAgendamento whatsappLink={linkWhatsapp} />
        <SecaoContato
          locationAddress={enderecoClinica}
          mapsEmbedLink={linkMapsEmbed}
          mapsLink={linkMaps}
          whatsappLink={linkWhatsapp}
        />
        <SecaoPerguntasFrequentes
          activeFaq={perguntaAberta}
          faqItems={perguntasFrequentes}
          onToggleFaq={(index, open) => setPerguntaAberta(open ? -1 : index)}
        />
      </main>

      <RodapeSite logoImage={logoImage} mapsLink={linkMaps} />
    </div>
  );
}

export default PaginaInicial;
