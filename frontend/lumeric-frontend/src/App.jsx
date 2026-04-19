import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../foto/Hero.png';
import logoImage from '../foto/logolumiere.jpeg';
import bookingWomanImage from '../foto/mulherAgendar.png';
import womanLumiereImage from '../foto/mulherLumiere.jpg';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Limpeza de pele',
    description: 'Higienizacao profunda e renovacao da textura para uma pele mais luminosa e uniforme.',
    icon: SparkIcon,
  },
  {
    title: 'Peeling',
    description: 'Protocolo para refinamento da superficie da pele com foco em brilho, clareza e renovacao.',
    icon: PeelIcon,
  },
  {
    title: 'Microagulhamento',
    description: 'Estimulo controlado para favorecer regeneracao, textura e qualidade cutanea.',
    icon: PulseIcon,
  },
  {
    title: 'Massagem relaxante',
    description: 'Experiencia de bem-estar com ritmo acolhedor e sensacao imediata de alivio corporal.',
    icon: FlowIcon,
  },
  {
    title: 'Drenagem linfatica',
    description: 'Manobras especializadas para desinchar, aliviar retencao e favorecer leveza corporal.',
    icon: DropIcon,
  },
  {
    title: 'Preenchimento labial',
    description: 'Definicao sutil de contorno, hidratacao e harmonia labial com acabamento refinado.',
    icon: LipsIcon,
  },
  {
    title: 'Bioestimulador',
    description: 'Tratamento voltado ao estimulo de colageno para firmeza progressiva e aspecto sofisticado.',
    icon: OrbIcon,
  },
  {
    title: 'Botox',
    description: 'Suavizacao de linhas de expressao com planejamento estetico e naturalidade.',
    icon: SmoothIcon,
  },
  {
    title: 'Secagem de vazinhos',
    description: 'Cuidado direcionado para melhorar o aspecto visual dos vazinhos com atencao tecnica.',
    icon: VeinIcon,
  },
  {
    title: 'Micro labial',
    description: 'Realce delicado de cor e definicao para labios com aparencia mais uniforme.',
    icon: OutlineIcon,
  },
  {
    title: 'Tratamento para gordura localizada',
    description: 'Protocolos focados em contorno corporal com leitura estetica e acompanhamento serio.',
    icon: ShapeIcon,
  },
  {
    title: 'Enzimas para gordura localizada',
    description: 'Abordagem complementar para areas especificas com estrategia de tratamento mais precisa.',
    icon: MoleculeIcon,
  },
];

const differentials = [
  {
    category: 'ATENDIMENTO',
    title: 'Cuidado acolhedor que faz cada paciente se sentir segura',
    date: 'escuta atenta em cada etapa',
  },
  {
    category: 'PROCEDIMENTOS',
    title: 'Tecnologia de ponta para resultados personalizados e seguros',
    date: 'protocolos faciais e corporais',
  },
  {
    category: 'EXPERIENCIA',
    title: 'Cuidado humanizado que transforma a rotina e a percepcao pessoal',
    date: 'acompanhamento individual',
  },
  {
    category: 'RESULTADOS',
    title: 'Mais bem-estar, presenca e autoestima em cada etapa do tratamento',
    date: 'evolucao visivel e consistente',
  },
];

const aboutTestimonials = [
  {
    quote:
      'A Dra. Claudia e a medica mais sensata, honesta e competente, alem de ser extremamente sincera. Excelente atendimento por ela e sua equipe, resultados incriveis! Recomendo demais, nota mil!',
    author: 'Giulia Dias',
  },
  {
    quote:
      'Equipe nota 10! Acolhimento e receptividade nota 10! Dra Claudia e uma medica que me deixou muito a vontade, entendeu todas as minhas aflicoes, expectativas e queixas e explicou com detalhes todos os procedimentos possiveis. Adorei! Super recomendo a experiencia!',
    author: 'Ana Moreno',
  },
  {
    quote:
      'Cheguei no consultorio com a auto estima muito baixa, meu rosto estava tomado de espinhas, ja tinha ido em diversos profissionais. A Dra. Claudia foi sucinta, me receitou em 1 mes meu rosto estava PERFEITO. Sou muito grata pelo atendimento, pelo resultado.',
    author: 'Evelyn Silva',
  },
];

const faqItems = [
  ['Como funciona o primeiro atendimento na Lumiere Clinic?', 'A jornada comeca com avaliacao esteticamente orientada, entendimento da necessidade e indicacao de protocolo mais adequado para o objetivo da paciente.'],
  ['Preciso agendar avaliacao antes de realizar um procedimento?', 'Para a maior parte dos protocolos, a avaliacao e recomendada para definir indicacao, sequencia, intervalo e expectativa de resultado.'],
  ['A confirmacao do horario acontece automaticamente?', 'Nao. O formulario registra a solicitacao e a equipe confirma disponibilidade, orientacoes e detalhes finais pelo contato informado.'],
  ['O WhatsApp e usado para confirmar a consulta?', 'Sim. Ele funciona como canal rapido para retorno, orientacoes e alinhamento do horario solicitado.'],
  ['A Lumiere Clinic trabalha com proposta personalizada?', 'Sim. A experiencia foi pensada para evitar indicacoes genericas e favorecer leitura individual de objetivo, pele e rotina.'],
  ['Botox deixa a expressao artificial?', 'Quando o planejamento e cuidadoso, a intencao e suavizar linhas e manter naturalidade, sem aspecto rigido.'],
].map(([question, answer]) => ({ question, answer }));

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Servicos', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

function App() {
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-text]',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.12, duration: 0.85, ease: 'power3.out' },
      );

      gsap.fromTo(
        heroCardRef.current,
        { y: 36, opacity: 0, rotateX: 10 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'power3.out', delay: 0.15 },
      );

      gsap.to('[data-float-card]', {
        y: -12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 82%' },
          },
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!serviceCarouselTrackRef.current) {
      return undefined;
    }

    const cards = serviceCarouselTrackRef.current.querySelectorAll('[data-service-slide]');
    const animation = gsap.fromTo(
      cards,
      { y: 20, opacity: 0, scale: 0.985 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
      },
    );

    return () => animation.kill();
  }, [serviceCarouselStart]);

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--color-sand)] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[calc(var(--hero-navbar-offset)+2rem)] bg-[linear-gradient(90deg,rgba(14,52,79,0.92)_0%,rgba(21,77,111,0.78)_34%,rgba(60,44,33,0.4)_72%,rgba(98,72,51,0.62)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-[calc(100vh+8rem)] overflow-hidden">
          <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-[68%_18%] opacity-32" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,28,44,0.92)_0%,rgba(18,61,90,0.78)_22%,rgba(11,28,44,0.78)_54%,rgba(11,28,44,0.62)_76%,rgba(11,28,44,0.82)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,96,126,0.3)_0%,rgba(11,28,44,0.16)_42%,rgba(11,28,44,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_32%)]" />
        </div>
        <div className="absolute right-[-12rem] top-28 h-80 w-80 rounded-full bg-[rgba(212,175,55,0.14)] blur-3xl" />
        <div className="absolute left-[-10rem] top-[26rem] h-72 w-72 rounded-full bg-[rgba(19,47,76,0.12)] blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 z-40">
        <div className="w-full border-y border-[rgba(255,255,255,0.14)] bg-[linear-gradient(135deg,rgba(7,18,29,0.74)_0%,rgba(12,35,54,0.56)_42%,rgba(46,34,26,0.34)_100%)] px-4 py-[0.32rem] shadow-[0_28px_60px_rgba(4,14,23,0.16)] backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="min-h-[calc(var(--hero-navbar-offset)+0.64rem)]" />
        </div>
      </div>

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="w-full px-4 py-[0.32rem] sm:px-6 lg:px-10">
          <div className="flex min-h-[var(--hero-navbar-offset)] items-center gap-3 rounded-[1.15rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(90deg,rgba(9,21,33,0.78)_0%,rgba(12,34,52,0.56)_44%,rgba(31,24,18,0.36)_100%)] px-3 py-2.5 sm:px-4 lg:px-5">
              <a href="#home" className="flex min-w-0 items-center gap-3 pr-2 sm:pr-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(212,175,55,0.34),rgba(255,255,255,0.08))] blur-sm" />
                  <img
                    src={logoImage}
                    alt="Logo Lumiere Clinic"
                    className="relative h-12 w-12 border border-[rgba(255,255,255,0.18)] object-cover shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate font-['Inter'] text-[1.32rem] font-semibold leading-none text-white">Lumiere Clinic</p>
                  <p className="mt-1 truncate text-[10px] uppercase tracking-[0.32em] text-[rgba(255,255,255,0.56)]">
                    Estetica e autocuidado
                  </p>
                </div>
              </a>

              <div className="hidden flex-1 lg:flex lg:justify-center">
                <nav className="flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.02em] text-[rgba(255,255,255,0.74)] transition duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="ml-auto flex items-center gap-3">
                <a
                  href="#agendamento"
                  className="hidden rounded-full border border-[rgba(212,175,55,0.34)] bg-[linear-gradient(135deg,rgba(212,175,55,0.24),rgba(166,122,31,0.18))] px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.22em] text-[rgba(255,247,226,0.92)] transition duration-300 hover:border-[rgba(212,175,55,0.48)] hover:bg-[linear-gradient(135deg,rgba(212,175,55,0.32),rgba(166,122,31,0.24))] lg:inline-flex"
                >
                  Agendar
                </a>
                <button
                  type="button"
                  onClick={() => setMenuOpen((current) => !current)}
                  className="inline-flex h-12 w-12 items-center justify-center border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] text-white transition duration-300 hover:border-[rgba(212,175,55,0.42)] hover:bg-[rgba(255,255,255,0.1)] hover:text-[rgba(255,247,226,0.96)] lg:hidden"
                  aria-label="Abrir menu"
                  aria-expanded={menuOpen}
                >
                  <div className="space-y-1.5">
                    <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                    <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`block h-0.5 w-5 bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
                  </div>
                </button>
              </div>
          </div>
          </div>

        <div
          className={`overflow-hidden border-y border-[rgba(255,255,255,0.12)] bg-[linear-gradient(180deg,rgba(8,20,31,0.82)_0%,rgba(13,34,52,0.68)_54%,rgba(30,23,18,0.42)_100%)] shadow-[0_24px_46px_rgba(3,10,18,0.18)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border border-transparent px-4 py-3 text-sm font-medium text-[rgba(255,255,255,0.82)] transition duration-300 hover:border-[rgba(255,255,255,0.08)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#agendamento"
              className="mt-2 inline-flex justify-center border border-[rgba(212,175,55,0.34)] bg-[linear-gradient(135deg,rgba(212,175,55,0.24),rgba(166,122,31,0.18))] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[rgba(255,247,226,0.94)]"
              onClick={() => setMenuOpen(false)}
            >
              Agendar horario
            </a>
          </nav>
        </div>
      </header>

      <main className="overflow-hidden">
        <section id="home" className="relative px-0 pb-0 pt-[calc(var(--hero-navbar-offset)+0.32rem)]">
          <div className="mx-auto max-w-none">
            <div className="relative min-h-[calc(100vh-var(--hero-navbar-offset))] overflow-hidden bg-[var(--color-ink)]">
              <div ref={heroCardRef} className="absolute inset-0">
                <img
                  src={heroImage}
                  alt="Lumiere Clinic hero"
                  className="block h-full w-full object-cover object-[64%_16%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,96,126,0.68)_0%,rgba(18,61,90,0.74)_16%,rgba(11,28,44,0.86)_38%,rgba(11,28,44,0.52)_60%,rgba(11,28,44,0.12)_80%,rgba(11,28,44,0)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.14),transparent_24%)]" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(11,28,44,0)_0%,rgba(11,28,44,0.38)_34%,rgba(11,28,44,0.74)_72%,rgba(11,28,44,0.92)_100%)]" />
              </div>
              <div className="relative z-10 flex min-h-[calc(100vh-var(--hero-navbar-offset))] items-center pt-12 sm:pt-14 lg:pt-16">
                <div className="max-w-[37rem] px-4 sm:px-6 lg:ml-[clamp(2rem,6vw,5.5rem)] lg:px-0">
              <p
                data-hero-text
                className="mb-7 inline-flex items-center gap-3 border-b border-[rgba(255,255,255,0.22)] pb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.74)]"
              >
                <span className="h-px w-10 bg-[rgba(212,175,55,0.76)]" />
                Lumiere Clinic
              </p>
              <h1
                data-hero-text
                className="max-w-[10.5ch] font-['Inter'] text-[2.9rem] font-semibold leading-[0.92] tracking-[-0.05em] text-white sm:text-[4.2rem] lg:text-[5.4rem]"
              >
                Estetica facial,
                <br />
                corporal e
                <br />
                pele com
                <br />
                presenca premium.
              </h1>
              <p
                data-hero-text
                className="mt-7 max-w-lg text-[15px] leading-7 text-[rgba(255,255,255,0.74)] sm:text-[17px] sm:leading-8"
              >
                Uma experiencia pensada para transmitir confianca, refinamento e clareza desde o primeiro contato.
              </p>
              <div data-hero-text className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#agendamento" className="btn-primary text-center">Agendar horario</a>
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-full border border-[rgba(255,255,255,0.18)] bg-[rgba(255,255,255,0.05)] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:border-[rgba(255,255,255,0.32)] hover:bg-[rgba(255,255,255,0.09)]"
                >
                  Conhecer tratamentos
                </a>
              </div>
              <div
                data-hero-text
                className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.62)] sm:text-[13px]"
              >
                <span>Atendimento humanizado</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[rgba(212,175,55,0.8)]" />
                <span>Estetica avancada</span>
                <span className="h-1.5 w-1.5 rounded-full bg-[rgba(255,255,255,0.42)]" />
                <span>Jornada organizada</span>
              </div>
              {/*
                <div className="flex items-center gap-3">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.46)]">Curadoria</p>
                      <p className="mt-3 font-['Inter'] text-4xl font-semibold text-[var(--color-gold)]">12 protocolos</p>
                    </div>
                    <span className="h-px flex-1 bg-gradient-to-r from-[rgba(212,175,55,0.45)] to-transparent" />
                  </div>
                  <p className="mt-5 max-w-sm text-sm leading-7 text-[rgba(255,255,255,0.7)]">
                    Composicao visual de alta percepcao de valor para traduzir cuidado facial e corporal sem ruído.
                  </p>
                </div>
                <div className="grid gap-4">
                  {[
                    ['Fluxo premium', 'Solicitacao objetiva, elegante e organizada.'],
                    ['Atendimento claro', 'Jornada que reduz duvida antes do clique final.'],
                  ].map(([title, copy]) => (
                    <div key={title} className="rounded-[1.35rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-4 backdrop-blur-xl">
                      <p className="font-['Inter'] text-2xl font-semibold text-white">{title}</p>
                      <p className="mt-2 text-sm leading-6 text-[rgba(255,255,255,0.68)]">{copy}</p>
                    </div>
                  ))}
                </div>
              */}
            </div>
            </div>

            </div>
            </div>
        </section>
        <section id="servicos" className="px-4 py-24 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl" data-reveal>
            <div className="text-center">
              <p className="text-[1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.15rem]">
                Beleza, inovacao e sofisticacao
              </p>
              <h2 className="mx-auto mt-3 max-w-4xl text-[2.35rem] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[3.4rem]">
                Tecnologias para todas as solucoes
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.12rem]">
                Conheca nossa abordagem em estetica com tecnologia avancada, proporcionando cuidados personalizados para atender as suas necessidades.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-[auto_1fr_auto] items-center gap-8 lg:gap-14">
              <button
                type="button"
                onClick={() => setServiceCarouselStart((current) => (current - 1 + servicePages.length) % servicePages.length)}
                aria-label="Ver servicos anteriores"
                className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-[rgba(181,137,47,0.22)] bg-[linear-gradient(180deg,#D4AF37_0%,#C89A33_100%)] text-white shadow-[0_14px_30px_rgba(181,137,47,0.18)] transition duration-300 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(181,137,47,0.24)] active:scale-[0.96] lg:mr-6"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>

              <div
                ref={serviceCarouselTrackRef}
                className={`grid gap-x-8 gap-y-10 ${
                  highlightedServices.length >= 4 ? 'justify-center md:justify-stretch' : 'justify-center'
                }`}
                style={{
                  gridTemplateColumns:
                    highlightedServices.length >= 4
                      ? `repeat(${highlightedServices.length}, minmax(0, 1fr))`
                      : `repeat(${highlightedServices.length}, minmax(12.75rem, 14.6rem))`,
                }}
              >
                {highlightedServices.map((service) => (
                  <article key={`${serviceCarouselStart}-${service.title}`} data-service-slide className="grid content-start justify-items-center text-center">
                    <div className="aspect-[0.84] w-full border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F6F2EB_0%,#ECE5D9_100%)] shadow-[0_14px_30px_rgba(12,24,38,0.06)]">
                      <div className="flex h-full items-center justify-center px-6 text-center">
                        <span className="text-sm uppercase tracking-[0.22em] text-[rgba(11,28,44,0.36)]">
                          Imagem do servico
                        </span>
                      </div>
                    </div>
                    <h3 className="mt-6 flex min-h-[5rem] items-start justify-center text-center text-[1.58rem] font-medium leading-[1.14] tracking-[-0.03em] text-[var(--color-ink)]">
                      {service.title === 'Microagulhamento' ? (
                        <>
                          Micro
                          <br />
                          agulhamento
                        </>
                      ) : (
                        service.title
                      )}
                    </h3>
                    <p
                      className="mt-4 flex min-h-[8.75rem] items-start justify-center text-justify text-sm leading-7 text-[var(--color-muted)]"
                      style={{ textJustify: 'inter-word' }}
                    >
                      {service.description}
                    </p>
                  </article>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setServiceCarouselStart((current) => (current + 1) % servicePages.length)}
                aria-label="Ver proximos servicos"
                className="flex h-12 w-12 items-center justify-center self-center rounded-full border border-[rgba(181,137,47,0.22)] bg-[linear-gradient(180deg,#D4AF37_0%,#C89A33_100%)] text-white shadow-[0_14px_30px_rgba(181,137,47,0.18)] transition duration-300 hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[0_20px_38px_rgba(181,137,47,0.24)] active:scale-[0.96] lg:ml-6"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 flex justify-center gap-3">
              {Array.from({ length: servicePages.length }, (_, index) => (
                <span
                  key={index}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === serviceCarouselStart ? 'bg-[var(--color-gold)]' : 'bg-[rgba(212,175,55,0.24)]'
                  }`}
                />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center rounded-full bg-[var(--color-gold)] px-8 py-3 text-[1.12rem] font-medium text-white transition duration-300 hover:bg-[var(--color-gold-deep)]"
              >
                Agende sua consulta!
              </a>
            </div>
          </div>
        </section>

        <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-[84rem]" data-reveal>
            <div className="relative overflow-hidden bg-[#5D4A3B]">
              <img
                src={womanLumiereImage}
                alt="Mulher em destaque na secao sobre Lumiere"
                className="h-[17rem] w-full object-cover opacity-56 sm:h-[21rem] lg:h-[23rem]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(72,53,42,0.64)_0%,rgba(77,56,43,0.58)_35%,rgba(62,43,34,0.44)_100%)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                <h2 className="max-w-4xl font-serif text-[2.4rem] italic leading-none text-white sm:text-[3.1rem] lg:text-[3.6rem]">
                  Me acompanhe nas redes sociais.
                </h2>
                <p className="mt-5 max-w-3xl text-base leading-8 text-[rgba(255,255,255,0.84)] sm:text-[1.1rem]">
                  Acompanhe-nos nas redes sociais para ficar por dentro das novidades, dicas de cuidados com a pele e tendencias em beleza.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <a
                    href="#"
                    aria-label="Instagram Lumiere Clinic"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook Lumiere Clinic"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn Lumiere Clinic"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(255,255,255,0.94)] text-[var(--color-ink)] transition duration-300 hover:scale-[1.04]"
                  >
                    <LinkedInIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="px-2 pt-16 text-center sm:px-4 lg:px-8">
              <p className="text-[1.1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.3rem]">
                O que fazemos!
              </p>
              <h3 className="mx-auto mt-2 max-w-6xl text-[2.2rem] font-medium leading-[1.14] tracking-[-0.035em] text-[var(--color-ink)] sm:text-[3rem] lg:text-[3.65rem]">
                Proporcionamos cuidados esteticos personalizados com tecnologia de ponta
              </h3>
            </div>

            <div className="mt-10 border-t border-[rgba(212,175,55,0.16)] px-2 pt-7 sm:px-4 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
                {aboutTestimonials.map((item, index) => (
                  <article key={item.author} className="text-center">
                    <div className="mb-7 flex justify-center gap-3">
                      {Array.from({ length: 5 }, (_, dotIndex) => (
                        <span
                          key={`${index}-${dotIndex}`}
                          className="h-[3px] w-[3px] rounded-full bg-[rgba(212,175,55,0.68)]"
                        />
                      ))}
                    </div>
                    <p className="mx-auto max-w-[23rem] text-[1.02rem] leading-10 text-[rgba(44,44,44,0.78)]">
                      “{item.quote}”
                    </p>
                    <p className="mt-8 font-serif text-[1.8rem] italic text-[var(--color-ink)]">
                      {item.author}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-24 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl" data-reveal>
            <div className="text-center">
              <p className="text-[1rem] font-medium text-[var(--color-gold-deep)] sm:text-[1.15rem]">
                Nosso diferencial
              </p>
              <h2 className="mx-auto mt-3 max-w-5xl text-[2.35rem] font-medium leading-[1.08] tracking-[-0.04em] text-[var(--color-ink)] sm:text-[3.25rem]">
                Seu guia para beleza, bem-estar e autoestima
              </h2>
              <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-[var(--color-muted)] sm:text-[1.12rem]">
                Mudamos a vida das pessoas para melhor com atendimento de ponta, acolhimento real e uma experiencia 5 estrelas no Google que fortalece confianca, bem-estar e autoestima.
              </p>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {differentials.map((item) => (
                <article key={item.title}>
                  <div className="aspect-[0.96] w-full border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F6F2EB_0%,#ECE5D9_100%)] shadow-[0_14px_30px_rgba(12,24,38,0.06)]">
                    <div className="flex h-full items-center justify-center px-6 text-center">
                      <span className="text-sm uppercase tracking-[0.22em] text-[rgba(11,28,44,0.36)]">
                        Imagem do diferencial
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <p className="text-[0.96rem] uppercase tracking-[0.08em] text-[rgba(11,28,44,0.58)]">
                      {item.category}
                    </p>
                    <h3 className="mt-3 max-w-[14ch] text-[1.95rem] font-medium leading-[1.08] tracking-[-0.03em] text-[var(--color-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[1rem] text-[rgba(107,114,128,0.92)]">
                      {item.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-14 items-center rounded-full bg-[var(--color-gold)] px-8 py-3 text-[1.12rem] font-medium text-white transition duration-300 hover:bg-[var(--color-gold-deep)]"
              >
                Explore
              </a>
            </div>
          </div>
        </section>

        <section id="agendamento" className="pb-24 pt-0">
          <div className="w-full" data-reveal>
            <div className="relative overflow-hidden bg-[linear-gradient(180deg,#C8964D_0%,#CA9951_100%)] px-7 py-10 shadow-[0_24px_60px_rgba(163,111,33,0.18)] sm:px-10 sm:py-12 lg:min-h-[38rem] lg:px-16 lg:py-0">
              <div className="grid gap-8 lg:min-h-[38rem] lg:grid-cols-[minmax(0,1fr)_minmax(18rem,1fr)] lg:items-center">
                <div className="relative z-10 max-w-[40rem]">
                  <p className="text-[1.12rem] leading-relaxed text-[rgba(255,249,240,0.96)] sm:text-[1.38rem]">
                    O primeiro passo e se conhecer
                  </p>
                  <h2 className="mt-2 max-w-[12.5ch] text-[2.4rem] font-medium leading-[1.02] tracking-[-0.045em] text-white sm:text-[3.55rem] lg:text-[4.25rem]">
                    Quais sao suas preocupacoes com o rosto e o corpo?
                  </h2>
                  <p className="mt-4 max-w-[35rem] text-base leading-8 text-[rgba(255,245,234,0.94)] sm:text-[1.12rem] sm:leading-9">
                    Nao ha um unico procedimento ou tecnologia ideal para todos. Ao entender suas necessidades e objetivos, podemos personalizar um protocolo de tratamento que atenda as suas expectativas.
                  </p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex min-h-0 items-center rounded-full border border-[rgba(255,255,255,0.86)] px-7 py-3 text-[1.1rem] font-medium text-white transition duration-300 hover:bg-[rgba(255,255,255,0.1)]"
                  >
                    Agende sua consulta!
                  </a>
                </div>

                <div className="relative flex justify-center self-end lg:h-full lg:justify-end">
                  <div className="pointer-events-none absolute inset-x-[12%] bottom-[6%] h-[68%] rounded-full bg-[radial-gradient(circle,rgba(245,207,173,0.34)_0%,rgba(232,179,124,0.18)_42%,transparent_76%)] blur-2xl lg:inset-x-[8%] lg:bottom-[2%] lg:h-[72%]" />
                  <img
                    src={bookingWomanImage}
                    alt="Mulher em destaque na secao de agendamento"
                    className="relative z-10 h-[23rem] w-auto max-w-none object-contain [filter:drop-shadow(0_22px_28px_rgba(132,83,30,0.12))] sm:h-[29rem] lg:absolute lg:bottom-0 lg:right-[-0.5rem] lg:h-[39rem]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contato" className="px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center" data-reveal>
            <div>
              <SectionTag>Localizacao</SectionTag>
              <h2 className="section-title mt-4 text-[var(--color-ink)]">
                Presenca fisica clara, informacao objetiva e uma secao de contato que parece parte da experiencia.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                A Lumiere Clinic fica na Av. Atlantica, 2113, Jardim Tres Marias, Sao Paulo. A secao abaixo mostra o Google Maps dentro do mesmo acabamento visual da interface.
              </p>
              <div className="mt-8 rounded-[1.7rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_42px_rgba(12,24,38,0.08)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">Endereco</p>
                <p className="mt-4 font-['Inter'] text-3xl font-semibold text-[var(--color-ink)]">Av. Atlantica, 2113</p>
                <p className="mt-2 text-base text-[var(--color-muted)]">Jardim Tres Marias, Sao Paulo - SP</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={mapsLink} target="_blank" rel="noreferrer" className="btn-primary">Abrir no Google Maps</a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#1FA855]/20 bg-[#25D366] px-6 py-3 text-sm font-semibold tracking-[0.04em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#20BD5C] hover:shadow-[0_18px_40px_rgba(37,211,102,0.28)] focus:outline-none focus:ring-2 focus:ring-[#25D366]/40"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Solicitar atendimento
                  </a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F9F6F1_0%,#EFE9E0_100%)] p-5 shadow-[0_28px_70px_rgba(12,24,38,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.22),_transparent_28%)]" />
              <div className="relative rounded-[1.6rem] border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#18344F_0%,#0B1C2C_100%)] p-6">
                <div className="flex items-center justify-between text-[rgba(255,255,255,0.72)]">
                  <span className="text-xs uppercase tracking-[0.28em]">Google Maps</span>
                  <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">Sao Paulo</span>
                </div>
                <div className="relative mt-6 h-[23rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                  <iframe
                    title="Google Maps Lumiere Clinic"
                    src={mapsEmbedLink}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                  <div className="pointer-events-none absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-[rgba(8,18,29,0.86)] px-4 py-3 text-sm text-[rgba(255,255,255,0.75)] backdrop-blur">Lumiere Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl" data-reveal>
            <SectionTag>FAQ</SectionTag>
            <h2 className="section-title mt-4 text-[var(--color-ink)]">
              Perguntas frequentes sobre atendimento, procedimentos e agendamento.
            </h2>
            <div className="mt-10 space-y-3">
              {faqItems.map((item, index) => {
                const open = activeFaq === index;

                return (
                  <article
                    key={item.question}
                    className={`overflow-hidden rounded-[1.35rem] border transition duration-300 ${
                      open
                        ? 'border-[rgba(212,175,55,0.28)] bg-white shadow-[0_22px_44px_rgba(12,24,38,0.09)]'
                        : 'border-slate-200/80 bg-white/75'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(open ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      <span className="pr-4 text-sm font-semibold leading-7 text-[var(--color-ink)] sm:text-base">{item.question}</span>
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl transition ${
                          open
                            ? 'border-[rgba(212,175,55,0.35)] bg-[rgba(212,175,55,0.12)] text-[var(--color-gold-deep)]'
                            : 'border-slate-200 text-slate-500'
                        }`}
                      >
                        {open ? '-' : '+'}
                      </span>
                    </button>
                    <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-7 text-[var(--color-muted)] sm:px-6 sm:text-[15px]">{item.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[var(--color-ink)] px-4 py-16 text-white sm:px-6 lg:px-10">
        <div className="absolute inset-0">
          <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-[center_18%] opacity-20" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,33,50,0.86)_0%,rgba(9,23,34,0.94)_45%,rgba(8,19,30,0.98)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,96,126,0.28)_0%,rgba(11,28,44,0.08)_28%,rgba(11,28,44,0.1)_100%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.25fr)_repeat(3,minmax(0,0.58fr))]">
          <div>
            <div className="flex items-center gap-4">
              <img src={logoImage} alt="Logo Lumiere Clinic" className="h-12 w-12 border border-[rgba(255,255,255,0.12)] object-cover" />
              <div>
                <p className="font-['Inter'] text-[1.45rem] font-semibold tracking-[-0.03em] text-white">Lumiere Clinic</p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[rgba(255,255,255,0.42)]">Estetica premium</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-[rgba(255,255,255,0.6)]">
              Cuidado estetico com presenca visual refinada, atendimento organizado e uma jornada feita para converter com naturalidade.
            </p>
          </div>
          <FooterColumn
            title="Navegacao"
            items={[
              ['Home', '#home'],
              ['Servicos', '#servicos'],
              ['Sobre', '#sobre'],
              ['Contato', '#contato'],
            ]}
          />
          <FooterColumn
            title="Contato"
            items={[
              ['Av. Atlantica, 2113', '#contato'],
              ['Jardim Tres Marias', '#contato'],
              ['Sao Paulo - SP', '#contato'],
            ]}
          />
          <FooterColumn
            title="Redes sociais"
            items={[
              ['Instagram', '#'],
              ['WhatsApp', '#agendamento'],
              ['Google Maps', mapsLink],
            ]}
          />
        </div>
        <div className="relative mx-auto mt-12 max-w-7xl border-t border-[rgba(255,255,255,0.1)] pt-6 text-center">
          <p className="text-sm leading-7 text-[rgba(255,255,255,0.54)]">
            Copyright 2026. Todos os direitos reservados a Lumiere Clinic. Desenvolvido pela FluxOn.
          </p>
        </div>
      </footer>
    </div>
  );
}

function SectionTag({ children, dark = false }) {
  return (
    <p
      className={`inline-flex rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        dark
          ? 'border-[rgba(212,175,55,0.22)] bg-[rgba(212,175,55,0.08)] text-[rgba(255,248,230,0.75)]'
          : 'border-[rgba(212,175,55,0.24)] bg-[rgba(212,175,55,0.06)] text-[var(--color-gold-deep)]'
      }`}
    >
      {children}
    </p>
  );
}

function ServiceCard({ service, index }) {
  const Icon = service.icon;
  const variants = [
    'xl:col-span-2 xl:row-span-2 bg-[linear-gradient(180deg,#FFFFFF_0%,#FBF7F1_100%)]',
    'xl:col-span-1 xl:row-span-1 bg-white/90',
    'xl:col-span-1 xl:row-span-1 bg-[rgba(255,255,255,0.72)]',
    'xl:col-span-2 xl:row-span-1 bg-[linear-gradient(180deg,#FFFDF9_0%,#F7F1E7_100%)]',
    'xl:col-span-1 xl:row-span-1 bg-white/90',
    'xl:col-span-1 xl:row-span-2 bg-[linear-gradient(180deg,#FFFFFF_0%,#F6EFE4_100%)]',
  ];
  const variantClass = variants[index % variants.length];
  const featured = index % 6 === 0 || index % 6 === 5;

  return (
    <article className={`group relative overflow-hidden rounded-[1.5rem] border border-slate-200/80 p-6 shadow-[0_18px_40px_rgba(12,24,38,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(212,175,55,0.28)] hover:shadow-[0_26px_50px_rgba(12,24,38,0.12)] ${variantClass}`}>
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[rgba(212,175,55,0.08)] blur-2xl transition duration-300 group-hover:bg-[rgba(212,175,55,0.12)]" />
      <div className="inline-flex rounded-2xl border border-[rgba(212,175,55,0.2)] bg-[rgba(212,175,55,0.08)] p-3 text-[var(--color-gold-deep)] transition duration-300 group-hover:border-[rgba(212,175,55,0.34)] group-hover:bg-[rgba(212,175,55,0.12)]">
        <Icon className="h-6 w-6" />
      </div>
      <div className={`relative ${featured ? 'mt-8 max-w-[20rem]' : 'mt-5 max-w-[16rem]'}`}>
        <h3 className={`font-['Inter'] font-semibold leading-tight text-[var(--color-ink)] ${featured ? 'text-[2rem]' : 'text-[1.55rem]'}`}>
          {service.title}
        </h3>
        <p className={`mt-3 text-[var(--color-muted)] ${featured ? 'max-w-[17rem] text-[15px] leading-7' : 'text-sm leading-7'}`}>
          {service.description}
        </p>
      </div>
      <div className="relative mt-7 flex items-center justify-between gap-4">
        <span className="text-[10px] uppercase tracking-[0.24em] text-[rgba(11,28,44,0.42)]">
          {featured ? 'Protocolo assinatura' : 'Procedimento'}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-[rgba(212,175,55,0.35)] to-transparent" />
      </div>
      <div className="relative mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--color-gold-deep)]">
        <span>Explorar cuidado</span>
        <ArrowRightIcon className="h-4 w-4 transition duration-300 group-hover:translate-x-1" />
      </div>
    </article>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="font-['Inter'] text-2xl font-semibold text-white">{title}</p>
      <div className="mt-4 space-y-3 text-sm text-[rgba(255,255,255,0.62)]">
        {items.map(([label, href]) => (
          <a key={label} href={href} className="block transition duration-300 hover:text-[var(--color-gold)]">
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function IconBase({ children, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      {children}
    </svg>
  );
}

function SparkIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M4 12h4" />
      <path d="M16 12h4" />
      <path d="m6.5 6.5 2.8 2.8" />
      <path d="m14.7 14.7 2.8 2.8" />
      <path d="m17.5 6.5-2.8 2.8" />
      <path d="m9.3 14.7-2.8 2.8" />
      <circle cx="12" cy="12" r="2.5" />
    </IconBase>
  );
}

function PeelIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 4h10" />
      <path d="M9 4v6a3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V4" />
      <path d="M6 20c1.8-2.7 4.1-4 6-4s4.2 1.3 6 4" />
    </IconBase>
  );
}

function PulseIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </IconBase>
  );
}

function FlowIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 8c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
      <path d="M4 14c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2" />
    </IconBase>
  );
}

function DropIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3c3.5 4 5 6.4 5 9a5 5 0 1 1-10 0c0-2.6 1.5-5 5-9Z" />
    </IconBase>
  );
}

function LipsIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M4 12c2.2-2.2 4.4-3.3 8-3.3S17.8 9.8 20 12c-2.2 2.2-4.4 3.3-8 3.3S6.2 14.2 4 12Z" />
      <path d="M7 12c1.7 1.3 3.3 1.9 5 1.9s3.3-.6 5-1.9" />
    </IconBase>
  );
}

function OrbIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="7" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
      <path d="M8.5 15c1-.9 2.2-1.5 3.5-1.5s2.5.6 3.5 1.5" />
    </IconBase>
  );
}

function SmoothIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 7c2.5 0 2.5 3 5 3s2.5-3 5-3" />
      <path d="M6 13c2.5 0 2.5 3 5 3s2.5-3 5-3" />
    </IconBase>
  );
}

function VeinIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 4v16" />
      <path d="M12 9c-2.5 0-2.5 3-5 3" />
      <path d="M12 15c2.5 0 2.5-3 5-3" />
    </IconBase>
  );
}

function OutlineIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12c2.1-2.4 4.3-3.6 7-3.6s4.9 1.2 7 3.6c-2.1 2.4-4.3 3.6-7 3.6S7.1 14.4 5 12Z" />
      <path d="M8 12h8" />
    </IconBase>
  );
}

function ShapeIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 5h10v14H7z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </IconBase>
  );
}

function MoleculeIcon(props) {
  return (
    <IconBase {...props}>
      <circle cx="7" cy="12" r="2" />
      <circle cx="16.5" cy="7.5" r="2" />
      <circle cx="16.5" cy="16.5" r="2" />
      <path d="M8.8 11.2 14.7 8.3" />
      <path d="m8.9 12.8 5.8 2.8" />
    </IconBase>
  );
}

function HeartIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 20s-6.5-4.2-8.2-8.1A4.5 4.5 0 0 1 12 7.5a4.5 4.5 0 0 1 8.2 4.4C18.5 15.8 12 20 12 20Z" />
    </IconBase>
  );
}

function GridIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4" y="4" width="6" height="6" rx="1.5" />
      <rect x="14" y="4" width="6" height="6" rx="1.5" />
      <rect x="4" y="14" width="6" height="6" rx="1.5" />
      <rect x="14" y="14" width="6" height="6" rx="1.5" />
    </IconBase>
  );
}

function DiamondIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7 4h10l3 5-8 11L4 9l3-5Z" />
      <path d="M9 4 7 9h10l-2-5" />
    </IconBase>
  );
}

function CheckPathIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m5 12 4 4L19 6" />
    </IconBase>
  );
}

function ArrowRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function InstagramIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M16.6 7.6h.01" />
    </IconBase>
  );
}

function FacebookIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M13.4 20v-7h2.4l.4-3h-2.8V8.1c0-.9.3-1.6 1.6-1.6H16V4a14 14 0 0 0-1.8-.1c-2.4 0-4 1.4-4 4.1V10H8v3h2.2v7" />
    </IconBase>
  );
}

function LinkedInIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M7.3 9.4V18" />
      <path d="M7.3 6.7h.01" />
      <path d="M11.3 18v-4.8c0-1.8 1-3 2.6-3 1.5 0 2.3 1 2.3 2.9V18" />
      <path d="M11.3 11.1V9.4" />
    </IconBase>
  );
}

function ChevronLeftIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m14.5 6-5 6 5 6" />
    </IconBase>
  );
}

function ChevronRightIcon(props) {
  return (
    <IconBase {...props}>
      <path d="m9.5 6 5 6-5 6" />
    </IconBase>
  );
}

function WhatsAppIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M20 11.6A8 8 0 0 1 8.3 18.7L4 20l1.4-4.1A8 8 0 1 1 20 11.6Z" />
      <path d="M9.2 8.8c.2-.5.4-.5.7-.5h.6c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.3.6.8 1.2 1.3 1.7.7.6 1.4 1 2.2 1.3.2.1.4 0 .5-.1l.5-.6c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.4.5v.5c0 .4-.2.7-.5.9-.4.3-.9.4-1.5.3-1-.2-2-.6-2.9-1.2a10.3 10.3 0 0 1-3.5-3.5c-.6-.9-1-1.9-1.2-2.9-.1-.5 0-1 .2-1.4Z" />
    </IconBase>
  );
}

export default App;
