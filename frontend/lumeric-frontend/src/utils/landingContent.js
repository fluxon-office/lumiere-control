import {
  DropIcon,
  FlowIcon,
  LipsIcon,
  MoleculeIcon,
  OrbIcon,
  OutlineIcon,
  PeelIcon,
  PulseIcon,
  ShapeIcon,
  SmoothIcon,
  SparkIcon,
  VeinIcon,
} from '../components/icons/LandingIcons';

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

export { aboutTestimonials, differentials, faqItems, navItems, services };
