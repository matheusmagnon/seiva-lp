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
    dor: "Cada CRAS e CREAS mantem sua propria planilha — e ninguem consegue consolidar os dados do municipio.",
    categoria: "Duplicidade",
  },
  {
    dor: "A familia atendida no CRAS e encaminhada ao CREAS precisa recontar toda a historia — nao ha prontuario unificado.",
    categoria: "Falta de integracao",
  },
  {
    dor: "O RMA mensal e montado manualmente, copiando e colando dados de planilhas — horas de trabalho todo mes.",
    categoria: "Dificuldade em relatorios",
  },
  {
    dor: "Dados sensiveis de familias em situacao de vulnerabilidade ficam em planilhas soltas, sem controle de acesso nem trilha de auditoria.",
    categoria: "Fragilidade LGPD",
  },
  {
    dor: "Quando o Ministerio Publico ou o TCE pedem informacao, a equipe corre para juntar papeis e planilhas — dias de trabalho.",
    categoria: "Morosidade no controle",
  },
  {
    dor: "A vigilancia socioassistencial trabalha no escuro — sem dados consolidados para identificar territorios com maior incidencia de violacoes.",
    categoria: "Vigilancia sem dados",
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
    title: "Tecnico de CRAS / CREAS",
    description:
      "Registra atendimentos, atualiza o prontuario familiar e encaminha para a rede — tudo no mesmo sistema, sem Planilhao paralelo.",
  },
  {
    icon: UserCog,
    title: "Coordenacao do SUAS",
    description:
      "Acompanha indicadores da equipe, fecha o RMA com um clique e responde a orgaos de controle com dados consolidados e trilha de auditoria.",
  },
  {
    icon: Eye,
    title: "Vigilancia Socioassistencial",
    description:
      "Cruza dados de atendimento, perfil das familias e territorio para identificar violacoes e orientar a politica publica com evidencia.",
  },
  {
    icon: Building2,
    title: "Gestao SEDES / TI municipal",
    description:
      "Um sistema unico para toda a rede, com banco isolado, atualizacoes automaticas e zero infraestrutura para manter — 100% web.",
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
      "Cadastro de unidades (CRAS, CREAS, Centro POP, acolhimento)",
      "Equipes e vinculos de profissionais",
      "Parametrizacao de servicos tipificados por unidade",
      "Visao consolidada da rede municipal",
    ],
  },
  {
    id: "cadastro",
    icon: Users,
    title: "Cadastro e prontuario familiar",
    items: [
      "Prontuario unico por familia com historico versionado",
      "Composicao familiar com parentesco relativo ao responsavel",
      "Blocos de condicoes (habitacionais, educacionais, saude, trabalho)",
      "Busca por NIS, CPF, nome — resultados em milissegundos",
    ],
  },
  {
    id: "atendimento",
    icon: ClipboardList,
    title: "Atendimento e acompanhamento",
    items: [
      "Registro de atendimentos individuais e em grupo",
      "Acompanhamento PAIF, PAEFI e servicos de convivencia",
      "Plano de acompanhamento com metas por familia",
      "Encaminhamentos para a rede intersetorial",
    ],
  },
  {
    id: "beneficios",
    icon: Gift,
    title: "Beneficios eventuais",
    items: [
      "Concessao e registro de beneficios (cesta basica, auxilio-natalidade, etc.)",
      "Historico de concessoes por familia",
      "Atividades coletivas com lista de presenca",
      "Relatorio de beneficios concedidos por periodo",
    ],
  },
  {
    id: "vigilancia",
    icon: BarChart3,
    title: "Vigilancia socioassistencial",
    items: [
      "Painel de indicadores por territorio e unidade",
      "Cruzamento de dados de atendimento e perfil familiar",
      "Identificacao de areas com maior incidencia de violacoes",
      "Exportacao de dados para analise externa",
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
    label: "Visao geral do municipio",
  },
  {
    src: "",
    alt: "Prontuario Familiar",
    label: "Prontuario familiar unificado",
  },
  {
    src: "",
    alt: "Registro de Atendimento",
    label: "Registro agil de atendimento",
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
    title: "Usuarios ilimitados",
    description:
      "Nao cobramos por cadeira. Cadastre quantos tecnicos, coordenadores e gestores forem necessarios — cada um com seu perfil de acesso.",
  },
  {
    icon: Zap,
    title: "Offline-ready",
    description:
      "Funciona sem internet. Os dados sao cacheados localmente e sincronizados quando a conexao voltar — ideal para CRAS em areas rurais e visitas domiciliares.",
  },
  {
    icon: Database,
    title: "Multi-tenant isolado",
    description:
      "Cada municipio tem seu proprio banco de dados. Seus dados nao se misturam com os de outro ente — requisito de sigilo e conformidade LGPD.",
  },
  {
    icon: FileText,
    title: "RMA e evolucao automatizada",
    description:
      "Relatorio Mensal de Atendimento gerado com um clique. Evolucao do prontuario registrada automaticamente a cada atendimento.",
  },
  {
    icon: Globe,
    title: "APIs abertas",
    description:
      "Integre o SEIVA com o sistema de protocolo, portais da transparencia e outras ferramentas da prefeitura. API REST documentada com Swagger.",
  },
  {
    icon: ArrowRight,
    title: "Portabilidade total",
    description:
      "Seus dados sao seus. Exporte prontuarios, atendimentos e relatorios em CSV, JSON ou PDF. Nao prendemos seus dados — voce pode sair quando quiser.",
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
    title: "LGPD por padrao",
    description:
      "Dados sensiveis protegidos com criptografia em repouso e em transito. Controle de acesso granular com trilha de auditoria em toda mutacao.",
  },
  {
    icon: Database,
    title: "Banco isolado",
    description:
      "PostgreSQL dedicado por municipio. Backups diarios, replicacao e recuperacao em minutos. Zero compartilhamento de dados entre entes.",
  },
  {
    icon: Fingerprint,
    title: "Autenticacao robusta",
    description:
      "Login com JWT escopado por tenant. Bloqueio por tentativas, recuperacao de senha e troca de unidade sem novo login.",
  },
  {
    icon: History,
    title: "Auditoria completa",
    description:
      "Toda mutacao registra quem fez, quando e o que mudou. Soft-delete universal — nada se apaga, tudo fica rastreavel.",
  },
]

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
      text: "Demonstracao guiada e gratuita, sem compromisso",
    },
    {
      icon: Clock,
      text: "Resposta em ate 24 horas uteis",
    },
    {
      icon: Shield,
      text: "Seus dados nao serao compartilhados",
    },
    {
      icon: Zap,
      text: "Proposta personalizada conforme o porte do municipio",
    },
  ],
}
