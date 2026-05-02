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
    description: 'Higienização profunda e renovação da textura para uma pele mais luminosa e uniforme.',
    icon: SparkIcon,
  },
  {
    title: 'Peeling',
    description: 'Protocolo para refinamento da superfície da pele com foco em brilho, clareza e renovação.',
    icon: PeelIcon,
  },
  {
    title: 'Microagulhamento',
    description: 'Estímulo controlado para favorecer regeneração, textura e qualidade cutânea.',
    icon: PulseIcon,
  },
  {
    title: 'Massagem relaxante',
    description: 'Experiência de bem-estar com ritmo acolhedor e sensação imediata de alívio corporal.',
    icon: FlowIcon,
  },
  {
    title: 'Drenagem linfática',
    description: 'Manobras especializadas para desinchar, aliviar retenção e favorecer leveza corporal.',
    icon: DropIcon,
  },
  {
    title: 'Preenchimento labial',
    description: 'Definição sutil de contorno, hidratação e harmonia labial com acabamento refinado.',
    icon: LipsIcon,
  },
  {
    title: 'Bioestimulador',
    description: 'Tratamento voltado ao estímulo de colágeno para firmeza progressiva e aspecto sofisticado.',
    icon: OrbIcon,
  },
  {
    title: 'Botox',
    description: 'Suavização de linhas de expressão com planejamento estético e naturalidade.',
    icon: SmoothIcon,
  },
  {
    title: 'Secagem de vasinhos',
    description: 'Cuidado direcionado para melhorar o aspecto visual dos vasinhos com atenção técnica.',
    icon: VeinIcon,
  },
  {
    title: 'Micro labial',
    description: 'Realce delicado de cor e definição para lábios com aparência mais uniforme.',
    icon: OutlineIcon,
  },
  {
    title: 'Tratamento para gordura localizada',
    description: 'Protocolos focados em contorno corporal com leitura estética e acompanhamento sério.',
    icon: ShapeIcon,
  },
  {
    title: 'Enzimas para gordura localizada',
    description: 'Abordagem complementar para áreas específicas com estratégia de tratamento mais precisa.',
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
    category: 'EXPERIÊNCIA',
    title: 'Cuidado humanizado que transforma a rotina e a percepção pessoal',
    date: 'acompanhamento individual',
  },
  {
    category: 'RESULTADOS',
    title: 'Mais bem-estar, presença e autoestima em cada etapa do tratamento',
    date: 'evolução visível e consistente',
  },
];

const aboutTestimonials = [
  {
    quote:
      'A Dra. Claudia é a médica mais sensata, honesta e competente, além de ser extremamente sincera. Excelente atendimento por ela e sua equipe, resultados incríveis! Recomendo demais, nota mil!',
    author: 'Giulia Dias',
  },
  {
    quote:
      'Equipe nota 10! Acolhimento e receptividade nota 10! Dra. Claudia é uma médica que me deixou muito à vontade, entendeu todas as minhas aflições, expectativas e queixas e explicou com detalhes todos os procedimentos possíveis. Adorei! Super recomendo a experiência!',
    author: 'Ana Moreno',
  },
  {
    quote:
      'Cheguei no consultório com a autoestima muito baixa, meu rosto estava tomado de espinhas, já tinha ido em diversos profissionais. A Dra. Claudia foi sucinta, me receitou e em 1 mês meu rosto estava PERFEITO. Sou muito grata pelo atendimento e pelo resultado.',
    author: 'Evelyn Silva',
  },
];

const faqItems = [
  ['Como funciona o primeiro atendimento na Lumiere Clinic?', 'A jornada começa com avaliação esteticamente orientada, entendimento da necessidade e indicação de protocolo mais adequado para o objetivo da paciente.'],
  ['Preciso agendar avaliação antes de realizar um procedimento?', 'Para a maior parte dos protocolos, a avaliação é recomendada para definir indicação, sequência, intervalo e expectativa de resultado.'],
  ['A confirmação do horário acontece automaticamente?', 'Não. O formulário registra a solicitação e a equipe confirma disponibilidade, orientações e detalhes finais pelo contato informado.'],
  ['O WhatsApp é usado para confirmar a consulta?', 'Sim. Ele funciona como canal rápido para retorno, orientações e alinhamento do horário solicitado.'],
  ['A Lumiere Clinic trabalha com proposta personalizada?', 'Sim. A experiência foi pensada para evitar indicações genéricas e favorecer leitura individual de objetivo, pele e rotina.'],
  ['Botox deixa a expressão artificial?', 'Quando o planejamento é cuidadoso, a intenção é suavizar linhas e manter naturalidade, sem aspecto rígido.'],
].map(([question, answer]) => ({ question, answer }));

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export { aboutTestimonials, differentials, faqItems, navItems, services };
