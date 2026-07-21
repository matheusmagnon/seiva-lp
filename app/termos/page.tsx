import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos e condições de uso da plataforma SEIVA.",
}

export default function TermosPage() {
  const lastUpdated = "21 de julho de 2026"

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b border-[#E6EAF0]">
        <div className="max-w-3xl mx-auto px-4 py-5 flex items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            SEIVA
          </Link>
          <span className="text-muted-foreground" aria-hidden="true">/</span>
          <span className="text-sm font-medium">Termos de Uso</span>
        </div>
      </header>

      <main id="main" className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p className="text-caption text-muted-foreground mb-2">
            Última atualização: {lastUpdated}
          </p>
          <h1 className="text-h2 font-extrabold mb-8">Termos de Uso</h1>

          <p className="text-lead text-muted-foreground mb-8">
            Estes Termos de Uso regem a utilização da plataforma SEIVA, um software
            como serviço (SaaS) de gestão de pessoas, atendimentos e agenda,
            desenvolvido e mantido por SEIVA Tecnologia Ltda.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar ou utilizar a plataforma SEIVA, você concorda em cumprir estes
            Termos de Uso. Se você não concordar com qualquer parte destes termos, não
            utilize a plataforma. O uso da plataforma por uma organização (prefeitura,
            clínica ou outra pessoa jurídica) vincula a organização a estes termos, e a
            pessoa que realiza o cadastro declara ter poderes para tanto.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">2. Descrição do Serviço</h2>
          <p>
            O SEIVA é uma plataforma SaaS que oferece funcionalidades de cadastro de
            pessoas, prontuário digital, registro de atendimentos, agenda de equipe,
            relatórios e encaminhamentos. O serviço é prestado sob o modelo multi-tenant,
            com banco de dados isolado por cliente. As funcionalidades específicas
            disponíveis dependem do plano contratado, conforme descrito na proposta
            comercial.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">3. Cadastro e Conta</h2>
          <p>
            Para utilizar a plataforma, é necessário criar uma conta fornecendo informações
            verdadeiras, precisas e completas. Você é responsável por manter a
            confidencialidade de suas credenciais de acesso e por todas as atividades
            realizadas em sua conta. O SEIVA reserva-se o direito de suspender ou encerrar
            contas que violem estes termos.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">4. Propriedade Intelectual</h2>
          <p>
            A plataforma SEIVA, incluindo seu código-fonte, design, interface, marca,
            logotipo e documentação, é propriedade exclusiva da SEIVA Tecnologia Ltda.,
            protegida por leis de direitos autorais e propriedade intelectual. Os dados
            inseridos pelo cliente na plataforma permanecem de propriedade do cliente.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">5. Uso Aceitável</h2>
          <p>
            O cliente compromete-se a não utilizar a plataforma para fins ilícitos,
            fraudulentos ou não autorizados. É vedado: (a) violar qualquer lei ou
            regulamento aplicável; (b) infringir direitos de terceiros; (c) transmitir
            vírus ou código malicioso; (d) tentar acessar áreas restritas da plataforma
            sem autorização; (e) realizar engenharia reversa do software.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">6. Disponibilidade e SLA</h2>
          <p>
            O SEIVA envidará esforços comercialmente razoáveis para manter a plataforma
            disponível 99,5% do tempo (SLA), exceto durante janelas de manutenção
            programada comunicadas com antecedência mínima de 48 horas. O nível de
            serviço específico é detalhado no contrato de prestação de serviços.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">7. Suporte Técnico</h2>
          <p>
            O suporte técnico é prestado por e-mail e chat durante o horário comercial
            (segunda a sexta, 8h às 18h, horário de Brasília), com níveis de criticidade
            e tempos de resposta definidos no contrato. Canais e SLAs específicos de
            suporte variam conforme o plano contratado.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">8. Privacidade e Proteção de Dados</h2>
          <p>
            O tratamento de dados pessoais realizado pela plataforma SEIVA está descrito
            em nossa{" "}
            <Link href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>
            , elaborada em conformidade com a Lei Geral de Proteção de Dados (Lei
            n. 13.709/2018 — LGPD). O cliente, na qualidade de controlador dos dados,
            é responsável por obter as bases legais necessárias para o tratamento.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">9. Pagamento e Renovação</h2>
          <p>
            Os valores, formas de pagamento e periodicidade são estabelecidos na proposta
            comercial. O atraso no pagamento por mais de 15 dias poderá acarretar a
            suspensão do acesso até a regularização. A renovação do contrato segue o
            ciclo acordado na proposta, com aviso prévio de 30 dias antes do término.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">10. Rescisão e Portabilidade</h2>
          <p>
            O contrato pode ser rescindido por qualquer das partes mediante aviso prévio
            de 30 dias. Em caso de rescisão, o cliente terá 30 dias para exportar seus
            dados. O SEIVA entregará a base de dados completa (dump do banco + dicionário
            de dados + anexos) em até 30 dias após o encerramento, sem custo adicional.
            Após a entrega, os dados serão permanentemente removidos de nossos servidores,
            respeitado o prazo legal de guarda de registros de acesso (6 meses, Marco
            Civil da Internet).
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">11. Limitação de Responsabilidade</h2>
          <p>
            Na extensão máxima permitida pela lei aplicável, o SEIVA não será responsável
            por danos indiretos, incidentais, especiais ou consequenciais decorrentes do
            uso ou da impossibilidade de uso da plataforma. A responsabilidade total do
            SEIVA por qualquer reclamação relacionada aos serviços está limitada ao valor
            pago pelo cliente nos últimos 12 meses.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">12. Alterações nos Termos</h2>
          <p>
            O SEIVA reserva-se o direito de modificar estes Termos de Uso a qualquer
            momento. As alterações serão comunicadas por e-mail com antecedência mínima
            de 15 dias. O uso continuado da plataforma após a entrada em vigor das
            alterações constitui aceitação tácita dos novos termos.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">13. Lei Aplicável e Foro</h2>
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica
            eleito o foro da comarca de Palmas, Tocantins, com exclusão de qualquer outro,
            por mais privilegiado que seja, para dirimir quaisquer questões decorrentes
            destes Termos.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">14. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos de Uso, entre em contato pelo e-mail{" "}
            <a href="mailto:contato@seiva.app" className="text-primary hover:underline">
              contato@seiva.app
            </a>{" "}
            ou pelo WhatsApp{" "}
            <a
              href="https://wa.me/5563984365295"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              (63) 98436-5295
            </a>.
          </p>
        </div>
      </main>

      <footer className="border-t border-[#E6EAF0] py-8 text-center text-sm text-muted-foreground">
        <p>SEIVA &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
