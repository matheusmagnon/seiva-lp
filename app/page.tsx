import { LandingHeader } from "@/components/landing-header"
import { LandingFooter } from "@/components/landing-footer"
import { Hero } from "@/components/sections/hero"
import { Problemas } from "@/components/sections/problemas"
import { ParaQuem } from "@/components/sections/para-quem"
import { Funcionalidades } from "@/components/sections/funcionalidades"

import { Diferenciais } from "@/components/sections/diferenciais"
import { Stack } from "@/components/sections/stack"
import { FaqSection } from "@/components/sections/faq-section"
import { Contato } from "@/components/sections/contato"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CookieConsent } from "@/components/cookie-consent"
import {
  doresContent,
  personasContent,
  funcionalidadesContent,
  diferenciaisContent,
  stackContent,
  faqContent,
  contatoContent,
} from "@/content/landing/home"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <LandingHeader />

      <main id="main" className="flex-grow">
        <Hero />

        <Problemas
          eyebrow="Dores reais"
          title="Sua secretaria de assistência social também passa por isso?"
          intro="Seis problemas que toda equipe do SUAS enfrenta no dia a dia — e que o SEIVA resolve de ponta a ponta."
          dores={doresContent}
        />

        <ParaQuem
          eyebrow="Para quem"
          title="Um sistema, múltiplos perfis"
          intro="O SEIVA atende desde o técnico que registra o atendimento no CRAS até o gestor que consolida os indicadores do município — cada perfil com as ferramentas certas para o seu dia a dia."
          personas={personasContent}
        />

        <Funcionalidades
          eyebrow="Funcionalidades"
          title="O que o SEIVA entrega"
          intro="Módulos que cobrem o ciclo completo da assistência social — da rede de unidades ao RMA automatizado."
          features={funcionalidadesContent}
        />

        <Diferenciais
          eyebrow="Diferenciais"
          title="O que faz o SEIVA diferente"
          intro="Cada um destes pontos resolve uma dor real de quem opera o SUAS no dia a dia."
          diferenciais={diferenciaisContent}
        />

        <Stack
          eyebrow="Confiabilidade"
          title="Construído para durar"
          intro="Cada decisão de arquitetura tem lastro em requisitos reais de órgãos públicos: multi-tenant, sigilo LGPD, auditoria completa e alta disponibilidade."
          itens={stackContent}
        />

        <FaqSection
          title="Dúvidas frequentes"
          intro="Respostas objetivas sobre o SEIVA, o modelo SaaS, a segurança dos dados e o processo de implantação."
          items={faqContent}
        />

        <Contato
          id="contato"
          eyebrow={contatoContent.eyebrow}
          title={contatoContent.title}
          intro={contatoContent.intro}
          bullets={contatoContent.bullets}
        />
      </main>

      <LandingFooter />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  )
}
