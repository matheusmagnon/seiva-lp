import {
  Users,
  Building2,
  ClipboardList,
  Shield,
  Database,
  Fingerprint,
  History,
  CheckCircle2,
  Clock,
  AlertCircle,
  Globe,
  Zap,
  ArrowRight,
  FileText,
  UserCheck,
  BarChart3,
  Gift,
  UserCog,
  Eye,
  HeartHandshake,
  CalendarCheck2,
  Lock,
  Link2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

// ═══════════════════════════════════════════════════════════════
// Hero
// ═══════════════════════════════════════════════════════════════

export const heroContent = {
  prefeituras: {
    badge: "Gestão do SUAS — 100% web",
    title:
      "Prontuário, atendimento e vigilância socioassistencial em um sistema só",
    subtitle:
      "Do cadastro da família ao fechamento do RMA — sem planilha, sem papel, sem retrabalho. O SEIVA organiza o SUAS do município de ponta a ponta, com banco de dados isolado, offline-ready e sigilo LGPD.",
  },
}

// ═══════════════════════════════════════════════════════════════
// Problemas (Dores)
// ═══════════════════════════════════════════════════════════════

export const doresContent = [
  {
    dor: "Cada CRAS e CREAS mantém sua própria planilha — e ninguém consegue consolidar os dados do município.",
    categoria: "Duplicidade",
  },
  {
    dor: "A família atendida no CRAS e encaminhada ao CREAS precisa recontar toda a história — não há prontuário unificado.",
    categoria: "Falta de integração",
  },
  {
    dor: "O RMA mensal é montado manualmente, copiando e colando dados de planilhas — horas de trabalho todo mês.",
    categoria: "Dificuldade em relatórios",
  },
  {
    dor: "Dados sensíveis de famílias em situação de vulnerabilidade ficam em planilhas soltas, sem controle de acesso nem trilha de auditoria.",
    categoria: "Fragilidade LGPD",
  },
  {
    dor: "Quando o Ministério Público ou o TCE pedem informação, a equipe corre para juntar papéis e planilhas — dias de trabalho.",
    categoria: "Morosidade no controle",
  },
  {
    dor: "A vigilância socioassistencial trabalha no escuro — sem dados consolidados para identificar territórios com maior incidência de violações.",
    categoria: "Vigilância sem dados",
  },
]

// ═══════════════════════════════════════════════════════════════
// Para quem (Personas)
// ═══════════════════════════════════════════════════════════════

export const personasContent: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: UserCheck,
    title: "Técnico de CRAS / CREAS",
    description:
      "Registra atendimentos, atualiza o prontuário familiar e encaminha para a rede — tudo no mesmo sistema, sem Planilhão paralelo.",
  },
  {
    icon: UserCog,
    title: "Coordenação do SUAS",
    description:
      "Acompanha indicadores da equipe, fecha o RMA com um clique e responde a órgãos de controle com dados consolidados e trilha de auditoria.",
  },
  {
    icon: Eye,
    title: "Vigilância Socioassistencial",
    description:
      "Cruza dados de atendimento, perfil das famílias e território para identificar violações e orientar a política pública com evidência.",
  },
  {
    icon: Building2,
    title: "Gestão SEDES / TI municipal",
    description:
      "Um sistema único para toda a rede, com banco isolado, atualizações automáticas e zero infraestrutura para manter — 100% web.",
  },
]

// ═══════════════════════════════════════════════════════════════
// Funcionalidades
// ═══════════════════════════════════════════════════════════════

export const funcionalidadesContent: {
  id: string
  icon: LucideIcon
  title: string
  items: string[]
}[] = [
  {
    id: "rede",
    icon: Building2,
    title: "Rede socioassistencial",
    items: [
      "Mapa completo de CRAS, CREAS, Centro POP e unidades de acolhimento",
      "Controle de acesso por unidade e por servidor",
      "Visão consolidada da rede em toda a prefeitura",
    ],
  },
  {
    id: "cadastro",
    icon: Users,
    title: "Cadastro e prontuário familiar",
    items: [
      "Prontuário único por família, sem duplicidade entre unidades",
      "Composição familiar com vulnerabilidades e condições de vida",
      "Identificação automática de renda e de programas federais",
    ],
  },
  {
    id: "atendimento",
    icon: ClipboardList,
    title: "Atendimento e acompanhamento",
    items: [
      "Registro ágil de atendimentos individuais e em grupo",
      "Encaminhamentos à rede com contrarreferência automática",
      "Planos de acompanhamento com metas e prazos por família",
    ],
  },
  {
    id: "protecao-especial",
    icon: HeartHandshake,
    title: "Proteção Social Especial (CREAS)",
    items: [
      "Histórico de medidas socioeducativas por adolescente",
      "Plano Individual de Atendimento com metas e prazos",
      "Visão integrada com a proteção social básica",
    ],
  },
  {
    id: "beneficios",
    icon: Gift,
    title: "Benefícios eventuais e SCFV",
    items: [
      "Concessão de benefícios com fluxo auditado de ponta a ponta",
      "Controle de estoque e histórico por família",
      "Acompanhamento de frequência das atividades do SCFV",
    ],
  },
  {
    id: "vigilancia",
    icon: BarChart3,
    title: "Vigilância socioassistencial e relatórios",
    items: [
      "Dashboards por território, unidade e período",
      "Diagnóstico socioterritorial de vulnerabilidades",
      "Relatórios gerenciais prontos para órgãos de controle",
    ],
  },
  {
    id: "comunicacao",
    icon: CalendarCheck2,
    title: "Comunicação e agenda",
    items: [
      "Agendamentos com lembrete automático por WhatsApp e e-mail",
      "Autenticação de documentos por QR Code",
      "Assinatura eletrônica de declarações e termos",
    ],
  },
  {
    id: "seguranca-acesso",
    icon: Lock,
    title: "Segurança, acesso e conformidade",
    items: [
      "Login via gov.br com perfis de acesso por módulo",
      "Sigilo técnico: informação sensível só para quem precisa",
      "Alinhado à NOB/SUAS e à Tipificação Nacional dos Serviços",
    ],
  },
  {
    id: "integracoes",
    icon: Link2,
    title: "Integrações externas",
    items: [
      "Importação direta da base do CadÚnico",
      "Atualização automática de benefícios federais",
      "Integração com sistemas da prefeitura e OSCs parceiras",
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// Screenshots (placeholders)
// ═══════════════════════════════════════════════════════════════

export const screenshotsContent: { src: string; alt: string; label: string }[] = [
  {
    src: "",
    alt: "Dashboard SEIVA",
    label: "Visão geral do município",
  },
  {
    src: "",
    alt: "Prontuário Familiar",
    label: "Prontuário familiar unificado",
  },
  {
    src: "",
    alt: "Registro de Atendimento",
    label: "Registro ágil de atendimento",
  },
  {
    src: "",
    alt: "Agenda da Equipe",
    label: "Agenda integrada da equipe",
  },
]

// ═══════════════════════════════════════════════════════════════
// Diferenciais
// ═══════════════════════════════════════════════════════════════

export const diferenciaisContent: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Users,
    title: "Usuários ilimitados",
    description:
      "Não cobramos por cadeira. Cadastre quantos técnicos, coordenadores e gestores forem necessários — cada um com seu perfil de acesso.",
  },
  {
    icon: Zap,
    title: "Offline-ready",
    description:
      "Funciona sem internet. Os dados são cacheados localmente e sincronizados quando a conexão voltar — ideal para CRAS em áreas rurais e visitas domiciliares.",
  },
  {
    icon: Database,
    title: "Multi-tenant isolado",
    description:
      "Cada município tem seu próprio banco de dados. Seus dados não se misturam com os de outro ente — requisito de sigilo e conformidade LGPD.",
  },
  {
    icon: FileText,
    title: "RMA e evolução automatizada",
    description:
      "Relatório Mensal de Atendimento gerado com um clique. Evolução do prontuário registrada automaticamente a cada atendimento.",
  },
  {
    icon: Globe,
    title: "APIs abertas",
    description:
      "Integre o SEIVA com o sistema de protocolo, portais da transparência e outras ferramentas da prefeitura. API REST documentada com Swagger.",
  },
  {
    icon: ArrowRight,
    title: "Portabilidade total",
    description:
      "Seus dados são seus. Exporte prontuários, atendimentos e relatórios em CSV, JSON ou PDF. Não prendemos seus dados — você pode sair quando quiser.",
  },
]

// ═══════════════════════════════════════════════════════════════
// Stack / Credibilidade
// ═══════════════════════════════════════════════════════════════

export const stackContent: {
  icon: LucideIcon
  title: string
  description: string
}[] = [
  {
    icon: Shield,
    title: "LGPD por padrão",
    description:
      "Dados sensíveis protegidos com criptografia em repouso e em trânsito. Controle de acesso granular com trilha de auditoria em toda mutação.",
  },
  {
    icon: Database,
    title: "Banco isolado",
    description:
      "PostgreSQL dedicado por município. Backups diários, replicação e recuperação em minutos. Zero compartilhamento de dados entre entes.",
  },
  {
    icon: Fingerprint,
    title: "Autenticação robusta",
    description:
      "Login com JWT escopado por tenant. Bloqueio por tentativas, recuperação de senha e troca de unidade sem novo login.",
  },
  {
    icon: History,
    title: "Auditoria completa",
    description:
      "Toda mutação registra quem fez, quando e o que mudou. Soft-delete universal — nada se apaga, tudo fica rastreável.",
  },
]

// ═══════════════════════════════════════════════════════════════
// Sobre (significado da marca)
// ═══════════════════════════════════════════════════════════════

export interface SobrePalavra {
  texto: string
  destaque: boolean
}

export const sobreContent: {
  eyebrow: string
  title: string
  palavras: SobrePalavra[]
  paragrafos: string[]
} = {
  eyebrow: "Sobre o SEIVA",
  title: "Um nome que carrega a proposta",
  palavras: [
    { texto: "Sistema", destaque: true },
    { texto: "Eletrônico", destaque: true },
    { texto: "de", destaque: false },
    { texto: "Informação", destaque: true },
    { texto: "para", destaque: false },
    { texto: "Vigilância", destaque: true },
    { texto: "Assistencial", destaque: true },
  ],
  paragrafos: [
    "O SEIVA nasce da rotina do CRAS e do CREAS: cada atendimento registrado, cada prontuário atualizado e cada RMA fechado no sistema gera dado — e dado organizado vira informação de vigilância socioassistencial.",
    "É essa informação que liga a operação do dia a dia à decisão da gestão: identificar territórios com maior incidência de vulnerabilidade, priorizar unidades e orientar a política pública com evidência, não com planilha solta.",
  ],
}

// ═══════════════════════════════════════════════════════════════
// FAQ
// ═══════════════════════════════════════════════════════════════

export { FAQ as faqContent } from "@/lib/faq"

// ═══════════════════════════════════════════════════════════════
// Contato
// ═══════════════════════════════════════════════════════════════

export interface ContatoBullet {
  icon: LucideIcon
  text: string
}

export const contatoContent = {
  eyebrow: "Fale com a gente",
  title: "Solicite uma demonstração",
  intro:
    "Conte o que a sua prefeitura precisa — apresentamos o SEIVA com demonstração guiada, dados de exemplo reais e sem compromisso.",
  bullets: [
    {
      icon: CheckCircle2,
      text: "Demonstração guiada e gratuita, sem compromisso",
    },
    {
      icon: Clock,
      text: "Resposta em até 24 horas úteis",
    },
    {
      icon: Shield,
      text: "Seus dados não serão compartilhados",
    },
    {
      icon: Zap,
      text: "Proposta personalizada conforme o porte do município",
    },
  ],
}
