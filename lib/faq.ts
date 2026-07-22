export type FaqItem = {
  q: string
  a: string
}

export const FAQ: FaqItem[] = [
  {
    q: "O que é o SEIVA?",
    a: "O SEIVA é um SaaS de gestão da assistência social municipal (SUAS). Ele centraliza prontuário familiar, registro de atendimentos, agenda de equipe, RMA automatizado, encaminhamentos e benefícios eventuais em um sistema só — com banco de dados isolado por município, sigilo LGPD e funcionamento offline.",
  },
  {
    q: "Como funciona o banco de dados isolado por municipio?",
    a: "Cada municipio ou organizacao tem seu proprio banco de dados Postgres dedicado, acessivel por subdominio (ex: palmas.seiva.app). Isso garante que os dados de um ente nao se misturem com os de outro — requisito critico de sigilo e conformidade com a LGPD. O SEIVA gerencia a infraestrutura, voce nao precisa se preocupar com backups, migrations ou servidores.",
  },
  {
    q: "O SEIVA funciona offline?",
    a: "Sim. O SEIVA foi projetado offline-ready desde o primeiro endpoint: os dados sao cacheados localmente e as mutacoes sao enfileiradas enquanto nao houver conexao. Quando a internet voltar, os dados sao sincronizados automaticamente com o servidor — essencial para CRAS e CREAS em areas de conectividade instavel ou em visitas domiciliares.",
  },
  {
    q: "O SEIVA gera o RMA automaticamente?",
    a: "Sim. O módulo RMA consolida os atendimentos do mês, aplica as regras de contagem definidas pela Resolução CIT que regula o RMA e gera o relatório mensal com um clique. O sistema já registra todos os atendimentos com os campos necessários para a geração automatizada.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Nao. O SEIVA e 100% web — funciona em qualquer navegador moderno (Chrome, Firefox, Edge), em computador, tablet ou celular. Nao ha instalacao, servidor local ou infraestrutura para manter. Para uso offline, o navegador armazena os dados localmente de forma automatica.",
  },
  {
    q: "Quantos usuarios posso cadastrar?",
    a: "Usuários ilimitados. O SEIVA não cobra por cadeira ou por profissional — o preço é por município, independentemente do número de técnicos, coordenadores e gestores que usam o sistema. Cada usuário tem login e senha próprios, com perfil de acesso configurável (admin, coordenação, técnico, vigilância, leitura).",
  },
  {
    q: "O SEIVA se integra com o CadUnico?",
    a: "Sim. A importação da base do CadÚnico é suportada via arquivo CECAD, com pipeline de validação e upsert em lote. A consulta online em tempo real está prevista para a próxima fase do produto.",
  },
  {
    q: "Quanto custa o SEIVA para prefeituras?",
    a: "O valor e proporcional ao porte do municipio, baseado na populacao IBGE. Toda proposta e personalizada conforme o escopo contratado. Entre em contato para receber uma demonstracao e uma proposta para o seu municipio.",
  },
  {
    q: "Como funciona o suporte?",
    a: "Suporte por WhatsApp e e-mail em horario comercial, com resposta em ate 24 horas uteis. Durante a implantacao, fazemos o onboarding guiado da equipe e migracao dos dados existentes (planilhas, sistemas legados). Apos a implantacao, o suporte e continuo e incluso na mensalidade.",
  },
]

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
}
