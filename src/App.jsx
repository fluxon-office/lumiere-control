import { useEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from '../foto/Hero.png';
import logoImage from '../foto/logolumiere.jpeg';

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
    title: 'Atendimento humanizado',
    description: 'Jornada acolhedora, escuta atenta e orientacao clara desde o primeiro contato.',
    icon: HeartIcon,
  },
  {
    title: 'Rotina organizada',
    description: 'Fluxo de agendamento pensado para reduzir atrito e manter a experiencia consistente.',
    icon: GridIcon,
  },
  {
    title: 'Experiencia premium',
    description: 'Ambiente visual sofisticado, linguagem elegante e sensacao de exclusividade em cada etapa.',
    icon: DiamondIcon,
  },
  {
    title: 'Processo simples',
    description: 'A paciente entende rapido o proximo passo, escolhe o servico e solicita o horario com seguranca.',
    icon: CheckPathIcon,
  },
];

const faqItems = [
  ['Como funciona o primeiro atendimento na Lumiere Clinic?', 'A jornada comeca com avaliacao esteticamente orientada, entendimento da necessidade e indicacao de protocolo mais adequado para o objetivo da paciente.'],
  ['Preciso agendar avaliacao antes de realizar um procedimento?', 'Para a maior parte dos protocolos, a avaliacao e recomendada para definir indicacao, sequencia, intervalo e expectativa de resultado.'],
  ['A clinica atende tratamentos faciais e corporais no mesmo lugar?', 'Sim. A proposta da Lumiere e reunir protocolos faciais, corporais e de cuidado continuo da pele em uma experiencia organizada e premium.'],
  ['Quais servicos aparecem com mais procura no site?', 'Limpeza de pele, botox, bioestimulador, preenchimento labial, drenagem linfatica e tratamentos para gordura localizada costumam concentrar grande interesse.'],
  ['Posso solicitar mais de um procedimento no mesmo agendamento?', 'Sim. O pedido pode registrar mais de um interesse para que a equipe oriente a melhor composicao de atendimento.'],
  ['A confirmacao do horario acontece automaticamente?', 'Nao. O formulario registra a solicitacao e a equipe confirma disponibilidade, orientacoes e detalhes finais pelo contato informado.'],
  ['A Lumiere Clinic trabalha com proposta personalizada?', 'Sim. A experiencia foi pensada para evitar indicacoes genericas e favorecer leitura individual de objetivo, pele e rotina.'],
  ['O agendamento pelo site e seguro?', 'Sim. O front-end foi desenhado para conduzir a solicitacao com clareza, contraste alto e campos organizados.'],
  ['Qual o diferencial da abordagem premium da clinica?', 'A combinacao entre estetica refinada, organizacao do fluxo, cuidado no atendimento e apresentacao visual coerente com uma marca de alto padrao.'],
  ['O site funciona bem no celular?', 'Sim. Toda a estrutura foi pensada em abordagem mobile-first, com menu adaptado, botoes amplos e leitura respirada.'],
  ['A limpeza de pele pode ser feita regularmente?', 'Sim. A recorrencia depende do perfil cutaneo e do plano definido na avaliacao, sempre com foco em constancia e manutencao.'],
  ['Peeling ajuda a melhorar textura e brilho?', 'Sim. Quando bem indicado, o peeling pode contribuir para renovacao, uniformidade visual e refinamento da superficie da pele.'],
  ['Microagulhamento exige pausa na rotina?', 'A orientacao depende da intensidade do protocolo, mas a equipe informa o tempo de recuperacao esperado e os cuidados posteriores.'],
  ['Massagem relaxante tem foco apenas em bem-estar?', 'Ela e voltada ao conforto corporal e ao alivio de tensao, mas tambem contribui para a experiencia global de autocuidado.'],
  ['Drenagem linfatica ajuda na sensacao de leveza?', 'Sim. A drenagem costuma ser associada a alivio de retencao, desinchar e melhora de conforto corporal.'],
  ['Preenchimento labial na Lumiere busca resultado natural?', 'Sim. A proposta visual prioriza equilibrio, definicao e harmonia, evitando excessos e mantendo leitura sofisticada.'],
  ['Bioestimulador e um protocolo progressivo?', 'Sim. Em geral, o efeito e percebido de forma gradual, com foco em firmeza e qualidade global da pele.'],
  ['Botox deixa a expressao artificial?', 'Quando o planejamento e cuidadoso, a intencao e suavizar linhas e manter naturalidade, sem aspecto rigido.'],
  ['Secagem de vazinhos exige avaliacao previa?', 'Sim. A avaliacao ajuda a entender indicacao, area de interesse e cuidados necessarios antes do procedimento.'],
  ['Micro labial substitui cuidados com hidratacao?', 'Nao. Ela complementa o visual dos labios, mas a rotina de cuidado e manutencao continua importante.'],
  ['Tratamentos para gordura localizada podem ser combinados?', 'Sim. A estrategia pode envolver composicao de protocolos, sempre alinhada ao objetivo e a avaliacao tecnica.'],
  ['Enzimas para gordura localizada sao indicadas para qualquer caso?', 'Nao. A indicacao precisa ser analisada com criterio para definir area, objetivo e expectativa realista.'],
  ['Posso escolher periodo da manha, tarde ou noite no agendamento?', 'Sim. O formulario permite indicar preferencia de periodo para facilitar a organizacao da equipe.'],
  ['O WhatsApp e usado para confirmar a consulta?', 'Sim. Ele funciona como canal rapido para retorno, orientacoes e alinhamento do horario solicitado.'],
  ['Posso deixar observacoes no pedido de agendamento?', 'Sim. O campo de observacoes serve para registrar objetivos, preferencias ou duvidas antes da confirmacao.'],
  ['A Lumiere Clinic atende publico que busca naturalidade?', 'Sim. O posicionamento da marca valoriza sofisticacao, equilibrio e resultados visualmente coerentes.'],
  ['A clinica trabalha com experiencia mais reservada?', 'Sim. Toda a linguagem visual e a organizacao do fluxo reforcam exclusividade, conforto e discricao.'],
  ['Existe foco em continuidade do cuidado?', 'Sim. O site foi estruturado para favorecer relacao de longo prazo, e nao apenas visitas isoladas.'],
  ['O que torna a navegacao do site mais premium?', 'Hierarquia clara, contrastes bem controlados, animacoes discretas, espaco generoso e elementos visuais de alta percepcao de valor.'],
  ['A navbar continua acessivel durante a navegacao?', 'Sim. Ela permanece fixa e facilita acesso rapido a servicos, sobre, contato e agendamento.'],
  ['Os cards de servico foram pensados para conversao?', 'Sim. Cada card resume o protocolo com descricao curta, leitura limpa e hover elegante para manter interesse.'],
  ['A secao sobre a clinica ajuda na confianca?', 'Sim. Ela reforca experiencia, cuidado e posicionamento premium, reduzindo distancia entre interesse e decisao de contato.'],
  ['Por que existe uma secao de diferenciais?', 'Para transformar percepcao de valor em mensagem objetiva e mostrar porque a jornada da Lumiere e mais bem resolvida.'],
  ['O formulario foi feito para parecer um sistema real?', 'Sim. O bloco de agendamento foi desenhado como um painel premium de alto contraste para transmitir organizacao e confianca.'],
  ['A localizacao fica clara no site?', 'Sim. A secao exibe endereco, contexto da regiao e um mapa estilizado para facilitar reconhecimento.'],
  ['O FAQ ajuda antes do clique final?', 'Sim. Ele reduz duvidas frequentes e melhora a predisposicao da visitante a solicitar atendimento.'],
  ['O footer serve apenas como encerramento visual?', 'Nao. Ele reforca navegacao, contato e presenca institucional sem perder a elegancia da marca.'],
  ['As animacoes GSAP deixam o site pesado?', 'Nao. As animacoes foram pensadas em camadas leves, entradas suaves e transicoes discretas de alto impacto visual.'],
  ['O hero foi construido para gerar desejo de agendamento?', 'Sim. Ele combina headline forte, contraste alto, CTA dourado e um card flutuante de sistema para incentivar acao imediata.'],
  ['A paleta de cores influencia a confianca?', 'Sim. Azul profundo comunica seguranca, enquanto dourado elegante reforca valor e sofisticacao percebida.'],
  ['A tipografia segue um padrao premium?', 'Sim. A combinacao entre Playfair Display nos titulos e Inter nos textos cria leitura refinada e atual.'],
  ['Os botoes foram desenhados para toque em mobile?', 'Sim. Eles tem tamanho amplo, contraste forte e estados de hover e focus visualmente consistentes.'],
  ['A interface usa glassmorphism de forma controlada?', 'Sim. O efeito aparece em pontos estrategicos para sofisticar sem comprometer legibilidade e desempenho.'],
  ['Esse front-end ja esta pronto para evoluir depois?', 'Sim. A estrutura em React permite conectar backend, analytics ou automacoes futuras sem refazer a camada visual.'],
  ['Como solicito meu horario agora?', 'Basta escolher o servico, informar data, periodo, nome e WhatsApp, adicionar observacoes se quiser e clicar em solicitar agendamento.'],
].map(([question, answer]) => ({ question, answer }));

const periods = ['Manha', 'Tarde', 'Noite'];

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Servicos', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

function App() {
  const rootRef = useRef(null);
  const heroCardRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedService, setSelectedService] = useState(services[0].title);
  const [selectedPeriod, setSelectedPeriod] = useState(periods[1]);
  const [submitted, setSubmitted] = useState(false);

  const mapsLink = useMemo(
    () => 'https://www.google.com/maps/search/?api=1&query=Av.+Atlantica,+2113+Jardim+Tres+Marias,+Sao+Paulo',
    [],
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

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 2400);
  }

  return (
    <div ref={rootRef} className="min-h-screen bg-[var(--color-sand)] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[calc(100vh+8rem)] overflow-hidden">
          <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover object-[72%_60%] opacity-38" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,28,44,0.9)_0%,rgba(18,61,90,0.74)_24%,rgba(11,28,44,0.72)_52%,rgba(11,28,44,0.18)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,96,126,0.3)_0%,rgba(11,28,44,0.16)_42%,rgba(11,28,44,0)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_32%)]" />
        </div>
        <div className="absolute right-[-12rem] top-28 h-80 w-80 rounded-full bg-[rgba(212,175,55,0.14)] blur-3xl" />
        <div className="absolute left-[-10rem] top-[26rem] h-72 w-72 rounded-full bg-[rgba(19,47,76,0.12)] blur-3xl" />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 px-4 py-3 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[1.05rem] border border-[rgba(255,255,255,0.09)] bg-[linear-gradient(90deg,rgba(8,18,29,0.22)_0%,rgba(8,18,29,0.1)_52%,rgba(8,18,29,0.22)_100%)] px-4 py-3 shadow-[0_10px_28px_rgba(3,10,18,0.08)] backdrop-blur-md sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Logo Lumiere Clinic"
              className="h-11 w-11 rounded-[0.7rem] border border-[rgba(255,255,255,0.14)] object-cover"
            />
            <div>
              <p className="text-lg font-semibold text-white">Lumiere Clinic</p>
              <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.5)]">Estetica avancada</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[rgba(255,255,255,0.76)] transition duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/5 text-white transition hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] lg:hidden"
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

        <div
            className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-[1.25rem] border border-white/12 bg-[rgba(8,18,29,0.6)] shadow-[0_18px_40px_rgba(3,10,18,0.16)] backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-1 p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[rgba(255,255,255,0.8)] transition hover:bg-[rgba(255,255,255,0.06)] hover:text-[var(--color-gold)]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#agendamento" className="btn-primary mt-3 text-center" onClick={() => setMenuOpen(false)}>
              Agendar horario
            </a>
          </nav>
        </div>
      </header>

      <main className="overflow-hidden">
        <section id="home" className="relative -mt-24 px-0 pb-20 pt-0 sm:-mt-28 sm:pb-24 lg:-mt-32">
          <div className="mx-auto max-w-none">
            <div className="relative min-h-[46rem] overflow-hidden bg-[var(--color-ink)] sm:min-h-[50rem] lg:min-h-[calc(100vh+6rem)]">
              <div ref={heroCardRef} className="absolute inset-0">
                <img
                  src={heroImage}
                  alt="Lumiere Clinic hero"
                  className="h-full w-full object-cover object-[72%_0%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,96,126,0.72)_0%,rgba(18,61,90,0.78)_16%,rgba(11,28,44,0.88)_38%,rgba(11,28,44,0.58)_60%,rgba(11,28,44,0.14)_80%,rgba(11,28,44,0)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.14),transparent_24%)]" />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(11,28,44,0)_0%,rgba(11,28,44,0.55)_68%,rgba(11,28,44,0.82)_100%)]" />
              </div>
              <div className="relative z-10 flex min-h-[46rem] items-center pt-28 sm:min-h-[50rem] sm:pt-32 lg:min-h-[calc(100vh+6rem)] lg:pt-36">
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
                      <p className="mt-3 font-['Playfair_Display'] text-4xl text-[var(--color-gold)]">12 protocolos</p>
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
                      <p className="font-['Playfair_Display'] text-2xl text-white">{title}</p>
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
            <SectionTag>Servicos</SectionTag>
            <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.7fr)] lg:items-end">
              <div className="max-w-3xl">
                <h2 className="section-title text-[var(--color-ink)]">
                  Protocolos selecionados para uma experiencia estetica sofisticada e com leitura de alto padrao.
                </h2>
              </div>
              <div className="justify-self-start rounded-[1.4rem] border border-[rgba(11,28,44,0.08)] bg-white/70 p-5 shadow-[0_18px_38px_rgba(12,24,38,0.06)]">
                <p className="text-[11px] uppercase tracking-[0.26em] text-[var(--color-gold-deep)]">Direcao de arte</p>
                <p className="mt-3 max-w-md text-sm leading-7 text-[var(--color-muted)]">
                  O grid foi quebrado em ritmo editorial: algumas pecas respiram mais, outras funcionam como blocos compactos de decisao.
                </p>
              </div>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 xl:auto-rows-[10.5rem] xl:grid-cols-4">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center" data-reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,#0B1C2C_0%,#132F4C_64%,#0B1C2C_100%)] p-6 shadow-[0_28px_70px_rgba(9,22,36,0.22)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_38%)]" />
              <img
                src={logoImage}
                alt="Lumiere Clinic"
                className="relative h-[28rem] w-full rounded-[1.5rem] border border-white/10 object-cover shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
              />
              <div className="relative mt-5 rounded-[1.4rem] border border-white/10 bg-[rgba(255,255,255,0.08)] p-5 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.28em] text-[rgba(255,255,255,0.55)]">Sobre a clinica</p>
                <p className="mt-3 font-['Playfair_Display'] text-2xl text-white">
                  Cuidado estetico com postura premium, escuta humana e decisao visual madura.
                </p>
              </div>
            </div>

            <div>
              <SectionTag>Sobre a Lumiere Clinic</SectionTag>
              <h2 className="section-title mt-4 text-[var(--color-ink)]">
                Uma clinica que precisa transmitir confianca imediata, refinamento e sensacao real de exclusividade.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-muted)]">
                <p>
                  A Lumiere Clinic foi posicionada para mulheres que valorizam cuidado serio, esteticamente elegante e uma jornada que parece tao premium quanto o proprio atendimento.
                </p>
                <p>
                  O desenho visual prioriza espaco, calma e alta percepcao de valor. Nada aqui parece improvisado: tipografia nobre, contrastes bem controlados, glassmorphism leve e transicoes que sustentam a sensacao de produto caro.
                </p>
                <p>
                  Mais do que mostrar servicos, o site foi construido para converter com discricao. Ele orienta, acolhe e convida a agendar sem depender de ruido ou excesso de elementos.
                </p>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ['Experiencia', 'Fluxo organizado e atmosfera premium em cada secao.'],
                  ['Cuidado', 'Informacao clara e sensacao de atendimento personalizado.'],
                  ['Confianca', 'Design que comunica nivel, criterio e consistencia.'],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[1.35rem] border border-slate-200/70 bg-white p-5 shadow-[0_18px_38px_rgba(12,24,38,0.08)]">
                    <p className="font-['Playfair_Display'] text-2xl text-[var(--color-ink)]">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#0B1C2C_0%,#10253A_100%)] px-4 py-24 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-7xl" data-reveal>
            <SectionTag dark>Diferenciais</SectionTag>
            <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-end">
              <h2 className="section-title max-w-3xl text-white">
                O contraste escuro precisa carregar a sensacao de clinica premium e dar peso real ao posicionamento.
              </h2>
              <div className="rounded-[1.55rem] border border-white/10 bg-[rgba(255,255,255,0.05)] p-5 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[rgba(212,175,55,0.84)]">Bloco assinatura</p>
                <p className="mt-3 text-sm leading-7 text-[rgba(255,255,255,0.68)]">
                  Transparencia controlada, icones dourados e leitura clara para quebrar a monotonia do layout claro.
                </p>
              </div>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-[1.1fr_0.9fr_0.95fr_1.05fr]">
              {differentials.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[rgba(212,175,55,0.34)] hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.05))]"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-[rgba(212,175,55,0.28)] bg-[rgba(212,175,55,0.1)] p-3 text-[var(--color-gold)]">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-['Playfair_Display'] text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="agendamento" className="px-4 py-24 sm:px-6 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start" data-reveal>
            <div>
              <SectionTag>Agendamento</SectionTag>
              <h2 className="section-title mt-4 text-[var(--color-ink)]">
                O bloco de conversao precisa parecer um produto premium em uso, nao apenas um formulario montado.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)]">
                A hierarquia agora foi dividida em painel principal, trilha lateral de status e acoes guiadas para reforcar confianca.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  ['1', 'Escolha o procedimento que melhor representa seu objetivo atual.'],
                  ['2', 'Defina data e periodo desejado com poucos cliques.'],
                  ['3', 'Receba confirmacao personalizada da equipe pelo WhatsApp.'],
                ].map(([step, copy]) => (
                  <div key={step} className="flex items-start gap-4 rounded-[1.4rem] border border-slate-200/70 bg-white p-5 shadow-[0_18px_38px_rgba(12,24,38,0.08)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[rgba(212,175,55,0.12)] font-semibold text-[var(--color-gold-deep)]">{step}</div>
                    <p className="text-sm leading-7 text-[var(--color-muted)]">{copy}</p>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`relative overflow-hidden rounded-[2.1rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,#091826_0%,#102A41_58%,#0C2031_100%)] p-5 shadow-[0_36px_90px_rgba(5,16,27,0.28)] sm:p-6 ${submitted ? 'ring-2 ring-[rgba(212,175,55,0.45)]' : ''}`}
            >
              <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.2),_transparent_68%)]" />
              <div className="relative grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_15rem]">
                <div className="rounded-[1.7rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-[rgba(255,255,255,0.5)]">Solicitacao premium</p>
                      <h3 className="mt-3 font-['Playfair_Display'] text-4xl text-white sm:text-[2.6rem]">Solicitar agendamento</h3>
                    </div>
                    <span className="rounded-full border border-[rgba(212,175,55,0.28)] bg-[rgba(212,175,55,0.1)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Status ativo</span>
                  </div>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <Field label="Servico">
                      <select value={selectedService} onChange={(event) => setSelectedService(event.target.value)} className="field-base">
                        {services.map((service) => (
                          <option key={service.title} value={service.title}>{service.title}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="Data">
                      <input type="date" className="field-base" defaultValue="2026-04-24" />
                    </Field>
                    <Field label="Horario">
                      <div className="grid grid-cols-3 gap-2">
                        {periods.map((period) => {
                          const active = selectedPeriod === period;
                          return (
                            <button
                              key={period}
                              type="button"
                              onClick={() => setSelectedPeriod(period)}
                              className={`rounded-full border px-3 py-3 text-sm font-medium transition duration-300 ${
                                active
                                  ? 'border-[rgba(212,175,55,0.45)] bg-[rgba(212,175,55,0.15)] text-[var(--color-gold)]'
                                  : 'border-white/10 bg-white/5 text-[rgba(255,255,255,0.72)] hover:border-white/20 hover:bg-[rgba(255,255,255,0.08)]'
                              }`}
                            >
                              {period}
                            </button>
                          );
                        })}
                      </div>
                    </Field>
                    <Field label="Nome">
                      <input type="text" className="field-base" placeholder="Seu nome completo" />
                    </Field>
                    <Field label="WhatsApp">
                      <input type="tel" className="field-base" placeholder="(11) 99999-9999" />
                    </Field>
                    <Field label="Observacoes" className="md:col-span-2">
                      <textarea rows="5" className="field-base resize-none" placeholder="Conte brevemente qual tratamento deseja, objetivo ou preferencia de atendimento." />
                    </Field>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-md text-sm leading-7 text-[rgba(255,255,255,0.6)]">
                      Ao enviar a solicitacao, a equipe retorna para confirmar disponibilidade e orientar o atendimento.
                    </p>
                    <button type="submit" className={`btn-primary min-w-[15rem] justify-center ${submitted ? 'scale-[0.98]' : ''}`}>
                      {submitted ? 'Solicitacao enviada' : 'Solicitar agendamento'}
                    </button>
                  </div>
                </div>
                <div className="grid gap-4 xl:grid-rows-[auto_auto_1fr]">
                  <div className="rounded-[1.45rem] border border-white/8 bg-[rgba(255,255,255,0.05)] p-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(255,255,255,0.44)]">Servico escolhido</p>
                    <p className="mt-3 font-['Playfair_Display'] text-[1.9rem] leading-tight text-white">{selectedService}</p>
                  </div>
                  <div className="rounded-[1.45rem] border border-[rgba(212,175,55,0.18)] bg-[rgba(212,175,55,0.08)] p-4">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[rgba(212,175,55,0.84)]">Preferencia</p>
                    <p className="mt-3 text-sm leading-7 text-[rgba(255,248,230,0.88)]">Periodo selecionado: {selectedPeriod}. O sistema guia a escolha sem sobrecarregar a paciente.</p>
                  </div>
                  <div
                    className={`rounded-[1.45rem] border p-4 text-sm leading-7 transition duration-300 ${
                      submitted
                        ? 'border-[rgba(212,175,55,0.3)] bg-[rgba(212,175,55,0.12)] text-[rgba(255,247,226,0.92)]'
                        : 'border-white/8 bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.58)]'
                    }`}
                  >
                    {submitted
                      ? 'Pedido registrado com sucesso. A equipe da Lumiere Clinic vai confirmar seu horario via WhatsApp.'
                      : 'Feedback visual ativo: o painel lateral muda de estado para reforcar que a solicitacao foi recebida em um fluxo premium.'}
                  </div>
                </div>
              </div>
            </form>
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
                A Lumiere Clinic fica na Av. Atlantica, 2113, Jardim Tres Marias, Sao Paulo. A secao abaixo usa um mapa estilizado para manter coerencia visual sem quebrar o acabamento premium da interface.
              </p>
              <div className="mt-8 rounded-[1.7rem] border border-slate-200/70 bg-white p-6 shadow-[0_18px_42px_rgba(12,24,38,0.08)]">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">Endereco</p>
                <p className="mt-4 font-['Playfair_Display'] text-3xl text-[var(--color-ink)]">Av. Atlantica, 2113</p>
                <p className="mt-2 text-base text-[var(--color-muted)]">Jardim Tres Marias, Sao Paulo - SP</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={mapsLink} target="_blank" rel="noreferrer" className="btn-primary">Abrir no Google Maps</a>
                  <a href="#agendamento" className="btn-secondary text-[var(--color-ink)]">Solicitar atendimento</a>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#F9F6F1_0%,#EFE9E0_100%)] p-5 shadow-[0_28px_70px_rgba(12,24,38,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.22),_transparent_28%)]" />
              <div className="relative rounded-[1.6rem] border border-[rgba(11,28,44,0.08)] bg-[linear-gradient(180deg,#18344F_0%,#0B1C2C_100%)] p-6">
                <div className="flex items-center justify-between text-[rgba(255,255,255,0.72)]">
                  <span className="text-xs uppercase tracking-[0.28em]">Mapa estilizado</span>
                  <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.22em]">Sao Paulo</span>
                </div>
                <div className="relative mt-6 h-[23rem] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:46px_46px]" />
                  <div className="absolute left-12 top-10 h-32 w-32 rounded-full border border-[rgba(212,175,55,0.32)] bg-[rgba(212,175,55,0.08)] blur-sm" />
                  <div className="absolute bottom-14 right-10 h-28 w-28 rounded-full border border-white/12 bg-[rgba(255,255,255,0.06)] blur-sm" />
                  <div className="absolute left-[22%] top-[28%] h-40 w-[56%] rounded-[999px] border border-white/8" />
                  <div className="absolute left-[20%] top-[55%] h-[2px] w-[56%] bg-[rgba(212,175,55,0.45)]" />
                  <div className="absolute left-[46%] top-[46%] flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(212,175,55,0.5)] bg-[rgba(212,175,55,0.18)] shadow-[0_0_0_12px_rgba(212,175,55,0.08)]">
                    <LocationPinIcon className="h-6 w-6 text-[var(--color-gold)]" />
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-[rgba(8,18,29,0.86)] px-4 py-3 text-sm text-[rgba(255,255,255,0.75)] backdrop-blur">Lumiere Clinic</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-5xl" data-reveal>
            <SectionTag>FAQ</SectionTag>
            <h2 className="section-title mt-4 text-[var(--color-ink)]">
              Perguntas frequentes com leitura fluida, contraste consistente e 45 respostas para reduzir objecoes antes do contato.
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

function BookingPreviewRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-[1.15rem] border border-white/8 bg-[rgba(255,255,255,0.04)] px-4 py-3">
      <span className="text-sm text-[rgba(255,255,255,0.48)]">{label}</span>
      <span className="text-sm font-medium text-white">{value}</span>
    </div>
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
        <h3 className={`font-['Playfair_Display'] leading-tight text-[var(--color-ink)] ${featured ? 'text-[2rem]' : 'text-[1.55rem]'}`}>
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

function Field({ label, className = '', children }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.28em] text-[rgba(255,255,255,0.52)]">{label}</span>
      {children}
    </label>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <p className="font-['Playfair_Display'] text-2xl text-white">{title}</p>
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

function LocationPinIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 21s-5-5.2-5-9a5 5 0 1 1 10 0c0 3.8-5 9-5 9Z" />
      <circle cx="12" cy="12" r="1.7" />
    </IconBase>
  );
}

export default App;
