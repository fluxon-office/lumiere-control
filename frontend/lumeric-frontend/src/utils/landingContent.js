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

const facialTreatmentImage =
  'https://images.unsplash.com/photo-1731355771317-b2ab72c79124?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000';
const facialBrushImage =
  'https://images.unsplash.com/photo-1761718209793-cb6d348831e0?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000';
const lipImage =
  'https://images.unsplash.com/photo-1770251910545-e10b18267043?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000';
const massageImage =
  'https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000';
const serumImage =
  'https://images.unsplash.com/photo-1768161680637-630f069f243a?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000';
const tonerImage =
  'https://images.unsplash.com/photo-1770717984664-1c266191d8e4?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000';

const services = [
  {
    title: 'Limpeza de pele',
    description: 'HigienizaÃ§Ã£o profunda e renovaÃ§Ã£o da textura para uma pele mais luminosa e uniforme.',
    icon: SparkIcon,
    image: facialTreatmentImage,
    imageAlt: 'Tratamento facial de limpeza de pele em ambiente de clínica estética',
  },
  {
    title: 'Peeling',
    description: 'Protocolo para refinamento da superfÃ­cie da pele com foco em brilho, clareza e renovaÃ§Ã£o.',
    icon: PeelIcon,
    image: tonerImage,
    imageAlt: 'Produto e protocolo facial para peeling estético',
  },
  {
    title: 'Microagulhamento',
    description: 'EstÃ­mulo controlado para favorecer regeneraÃ§Ã£o, textura e qualidade cutÃ¢nea.',
    icon: PulseIcon,
    image: facialBrushImage,
    imageAlt: 'Procedimento facial com foco em microagulhamento e renovação da pele',
  },
  {
    title: 'Massagem relaxante',
    description: 'ExperiÃªncia de bem-estar com ritmo acolhedor e sensaÃ§Ã£o imediata de alÃ­vio corporal.',
    icon: FlowIcon,
    image: massageImage,
    imageAlt: 'Massagem relaxante em atendimento estético e corporal',
  },
  {
    title: 'Drenagem linfÃ¡tica',
    description: 'Manobras especializadas para desinchar, aliviar retenÃ§Ã£o e favorecer leveza corporal.',
    icon: DropIcon,
    image: massageImage,
    imageAlt: 'Sessão de drenagem linfática com toque corporal suave',
  },
  {
    title: 'Preenchimento labial',
    description: 'DefiniÃ§Ã£o sutil de contorno, hidrataÃ§Ã£o e harmonia labial com acabamento refinado.',
    icon: LipsIcon,
    image: lipImage,
    imageAlt: 'Tratamento estético labial com foco em preenchimento e definição',
  },
  {
    title: 'Bioestimulador',
    description: 'Tratamento voltado ao estÃ­mulo de colÃ¡geno para firmeza progressiva e aspecto sofisticado.',
    icon: OrbIcon,
    image: serumImage,
    imageAlt: 'Aplicação de bioestimulador para estímulo de colágeno',
  },
  {
    title: 'Botox',
    description: 'SuavizaÃ§Ã£o de linhas de expressÃ£o com planejamento estÃ©tico e naturalidade.',
    icon: SmoothIcon,
    image: facialTreatmentImage,
    imageAlt: 'Procedimento estético com foco em suavização de linhas de expressão',
  },
  {
    title: 'Secagem de vasinhos',
    description: 'Cuidado direcionado para melhorar o aspecto visual dos vasinhos com atenÃ§Ã£o tÃ©cnica.',
    icon: VeinIcon,
    image: tonerImage,
    imageAlt: 'Tratamento estético para secagem de vasinhos e cuidado vascular',
  },
  {
    title: 'Micro labial',
    description: 'Realce delicado de cor e definiÃ§Ã£o para lÃ¡bios com aparÃªncia mais uniforme.',
    icon: OutlineIcon,
    image: lipImage,
    imageAlt: 'Procedimento de micro labial com acabamento delicado nos lábios',
  },
  {
    title: 'Tratamento para gordura localizada',
    description: 'Protocolos focados em contorno corporal com leitura estÃ©tica e acompanhamento sÃ©rio.',
    icon: ShapeIcon,
    image: massageImage,
    imageAlt: 'Tratamento corporal para gordura localizada e contorno estético',
  },
  {
    title: 'Enzimas para gordura localizada',
    description: 'Abordagem complementar para Ã¡reas especÃ­ficas com estratÃ©gia de tratamento mais precisa.',
    icon: MoleculeIcon,
    image: serumImage,
    imageAlt: 'Aplicação de enzimas para gordura localizada em tratamento corporal',
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
    category: 'EXPERIÃŠNCIA',
    title: 'Cuidado humanizado que transforma a rotina e a percepÃ§Ã£o pessoal',
    date: 'acompanhamento individual',
  },
  {
    category: 'RESULTADOS',
    title: 'Mais bem-estar, presenÃ§a e autoestima em cada etapa do tratamento',
    date: 'evoluÃ§Ã£o visÃ­vel e consistente',
  },
];

const aboutTestimonials = [
  {
    quote:
      'A Dra. Claudia Ã© a mÃ©dica mais sensata, honesta e competente, alÃ©m de ser extremamente sincera. Excelente atendimento por ela e sua equipe, resultados incrÃ­veis! Recomendo demais, nota mil!',
    author: 'Giulia Dias',
  },
  {
    quote:
      'Equipe nota 10! Acolhimento e receptividade nota 10! Dra. Claudia Ã© uma mÃ©dica que me deixou muito Ã  vontade, entendeu todas as minhas afliÃ§Ãµes, expectativas e queixas e explicou com detalhes todos os procedimentos possÃ­veis. Adorei! Super recomendo a experiÃªncia!',
    author: 'Ana Moreno',
  },
  {
    quote:
      'Cheguei no consultÃ³rio com a autoestima muito baixa, meu rosto estava tomado de espinhas, jÃ¡ tinha ido em diversos profissionais. A Dra. Claudia foi sucinta, me receitou e em 1 mÃªs meu rosto estava PERFEITO. Sou muito grata pelo atendimento e pelo resultado.',
    author: 'Evelyn Silva',
  },
];

const faqItems = [
  ['Como funciona o primeiro atendimento na Lumiere Clinic?', 'A jornada comeÃ§a com avaliaÃ§Ã£o esteticamente orientada, entendimento da necessidade e indicaÃ§Ã£o de protocolo mais adequado para o objetivo da paciente.'],
  ['Preciso agendar avaliaÃ§Ã£o antes de realizar um procedimento?', 'Para a maior parte dos protocolos, a avaliaÃ§Ã£o Ã© recomendada para definir indicaÃ§Ã£o, sequÃªncia, intervalo e expectativa de resultado.'],
  ['A confirmaÃ§Ã£o do horÃ¡rio acontece automaticamente?', 'NÃ£o. O formulÃ¡rio registra a solicitaÃ§Ã£o e a equipe confirma disponibilidade, orientaÃ§Ãµes e detalhes finais pelo contato informado.'],
  ['O WhatsApp Ã© usado para confirmar a consulta?', 'Sim. Ele funciona como canal rÃ¡pido para retorno, orientaÃ§Ãµes e alinhamento do horÃ¡rio solicitado.'],
  ['A Lumiere Clinic trabalha com proposta personalizada?', 'Sim. A experiÃªncia foi pensada para evitar indicaÃ§Ãµes genÃ©ricas e favorecer leitura individual de objetivo, pele e rotina.'],
  ['Botox deixa a expressÃ£o artificial?', 'Quando o planejamento Ã© cuidadoso, a intenÃ§Ã£o Ã© suavizar linhas e manter naturalidade, sem aspecto rÃ­gido.'],
].map(([question, answer]) => ({ question, answer }));

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'ServiÃ§os', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export { aboutTestimonials, differentials, faqItems, navItems, services };
