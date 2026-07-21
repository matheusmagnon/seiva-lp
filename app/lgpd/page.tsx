import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "LGPD",
  description: "Como a SEIVA está em conformidade com a Lei Geral de Proteção de Dados (LGPD).",
}

export default function LgpdPage() {
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
          <span className="text-sm font-medium">LGPD</span>
        </div>
      </header>

      <main id="main" className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p className="text-caption text-muted-foreground mb-2">
            Última atualização: {lastUpdated}
          </p>
          <h1 className="text-h2 font-extrabold mb-8">LGPD — Lei Geral de Proteção de Dados</h1>

          <p className="text-lead text-muted-foreground mb-8">
            O SEIVA foi projetado com privacidade desde a concepção (privacy by design).
            Esta página explica como a plataforma e o site cumprem os requisitos da Lei
            Geral de Proteção de Dados (Lei n. 13.709/2018).
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">1. Privacy by Design no SEIVA</h2>
          <p>
            A arquitetura do SEIVA incorpora proteção de dados como requisito de sistema,
            não como camada adicional:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li><strong>Multi-tenant com banco isolado:</strong> cada cliente (município, clínica) tem seu próprio banco de dados PostgreSQL. Dados de clientes diferentes nunca se misturam — a segregação é física, não lógica.</li>
            <li><strong>Auditoria completa e imutável:</strong> toda mutação de dados (criação, alteração, exclusão lógica) é registrada em trilha de auditoria com identificação do autor, timestamp e ação. O log de auditoria é append-only.</li>
            <li><strong>Sigilo por registro:</strong> cada ficha/prontuário tem visibilidade configurável: pública (toda a unidade), equipe (só o time do profissional) ou privada (só o autor). A filtragem é resolvida na query, não na tela.</li>
            <li><strong>Soft-delete universal:</strong> nenhum dado é removido fisicamente em operação normal. Registros "excluídos" são marcados com <code>deleted = true</code>, permitindo recuperação e auditoria forense.</li>
            <li><strong>RBAC (controle de acesso por perfil):</strong> cada usuário tem um perfil (ADMIN, COORDENAÇÃO, TÉCNICO, VIGILÂNCIA, CMAS_LEITURA) que determina exatamente quais módulos e ações pode executar.</li>
          </ul>

          <h2 className="text-h3 font-semibold mt-10 mb-4">2. Bases Legais de Tratamento</h2>
          <p>
            O SEIVA, como operador de dados, processa dados pessoais sob a orientação do
            controlador (o cliente — prefeitura ou clínica), que deve possuir a base legal
            adequada. As bases típicas no contexto do SUAS e de clínicas são:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li><strong>Execução de política pública (art. 7, III):</strong> no caso de prefeituras, o tratamento de dados do Cadastro Único e do SUAS decorre de obrigação legal do poder público (Lei Orgânica da Assistência Social, Decreto n. 7.053/2009, Portaria MDS n. 113/2017).</li>
            <li><strong>Execução de contrato (art. 7, V):</strong> dados de profissionais e usuários da plataforma, para viabilizar o uso do serviço contratado.</li>
            <li><strong>Consentimento (art. 7, I):</strong> formulários de contato do site e cookies de análise.</li>
            <li><strong>Legítimo interesse (art. 7, IX e art. 10):</strong> análises de tráfego anonimizadas, monitoramento de segurança, prevenção a fraudes.</li>
          </ul>

          <h2 className="text-h3 font-semibold mt-10 mb-4">3. Cookies e Consentimento</h2>
          <p>
            O site seiva.app utiliza:
          </p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E6EAF0]">
                  <th className="text-left py-2 pr-4 font-semibold">Categoria</th>
                  <th className="text-left py-2 pr-4 font-semibold">Finalidade</th>
                  <th className="text-left py-2 pr-4 font-semibold">Base Legal</th>
                  <th className="text-left py-2 font-semibold">Exemplo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line-hair">
                  <td className="py-2 pr-4">Essenciais</td>
                  <td className="py-2 pr-4 text-muted-foreground">Funcionamento do site (Next.js)</td>
                  <td className="py-2 pr-4">Legítimo interesse</td>
                  <td className="py-2">Sessão, CSRF</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Análise</td>
                  <td className="py-2 pr-4 text-muted-foreground">Métricas de tráfego (GA4, Clarity)</td>
                  <td className="py-2 pr-4">Consentimento</td>
                  <td className="py-2">_ga, _clck</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4">
            O banner de cookies, exibido na primeira visita, informa sobre o uso e oferece
            link para esta página. O consentimento para cookies de análise pode ser
            gerenciado via{" "}
            <Link href="/privacidade" className="text-primary hover:underline">
              Política de Privacidade
            </Link>.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">4. Direitos do Titular</h2>
          <p>
            Nos termos da LGPD, você pode exercer os seguintes direitos a qualquer momento,
            gratuitamente:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li><strong>Confirmação e acesso</strong> (art. 18, I e II): saber se tratamos seus dados e obter uma cópia.</li>
            <li><strong>Correção</strong> (art. 18, III): solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
            <li><strong>Anonimização, bloqueio ou eliminação</strong> (art. 18, IV): de dados desnecessários, excessivos ou tratados em desconformidade.</li>
            <li><strong>Portabilidade</strong> (art. 18, V): receber seus dados em formato estruturado para transferência a outro fornecedor.</li>
            <li><strong>Eliminação</strong> (art. 18, VI): de dados tratados com consentimento, ressalvadas hipóteses legais de guarda.</li>
            <li><strong>Informação sobre compartilhamento</strong> (art. 18, VII): saber com quais entidades públicas ou privadas compartilhamos seus dados.</li>
            <li><strong>Revogação de consentimento</strong> (art. 18, IX): a qualquer momento, sem afetar a licitude do tratamento anterior.</li>
            <li><strong>Oposição</strong> (art. 18, par. 2): opor-se a tratamento baseado em legítimo interesse, mediante justificativa.</li>
          </ul>

          <h2 className="text-h3 font-semibold mt-10 mb-4">5. Segurança e Incidentes</h2>
          <p>
            Mantemos as seguintes medidas de segurança:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li>Criptografia em trânsito (TLS 1.3) e em repouso (AES-256)</li>
            <li>Backup diário automatizado com retenção de 30 dias</li>
            <li>Autenticação de dois fatores (2FA) disponível para todos os usuários</li>
            <li>Monitoramento de acessos e detecção de anomalias</li>
            <li>Política de senhas fortes (mínimo 8 caracteres, bloqueio após 5 tentativas)</li>
          </ul>
          <p className="mt-3">
            Em caso de incidente de segurança com dados pessoais, notificaremos a ANPD e
            os titulares afetados nos prazos e termos do art. 48 da LGPD.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">6. Canal do Titular e DPO</h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre privacidade e proteção
            de dados:
          </p>
          <div className="bg-surface-bg rounded-[10px] p-4 mt-3">
            <p className="font-medium">Encarregado de Dados (DPO): Matheus Magno</p>
            <p className="text-muted-foreground">
              E-mail:{" "}
              <a href="mailto:privacidade@seiva.app" className="text-primary hover:underline">
                privacidade@seiva.app
              </a>
            </p>
            <p className="text-muted-foreground">
              WhatsApp:{" "}
              <a
                href="https://wa.me/5563984365295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                (63) 98436-5295
              </a>
            </p>
            <p className="text-caption text-muted-foreground mt-2">
              Resposta em até 15 dias úteis, conforme art. 19 da LGPD.
            </p>
          </div>

          <h2 className="text-h3 font-semibold mt-10 mb-4">7. Relatório de Impacto à Proteção de Dados (RIPD)</h2>
          <p>
            O SEIVA mantém Relatório de Impacto à Proteção de Dados (RIPD) para as
            operações de tratamento de alto risco, em conformidade com o art. 38 da LGPD.
            O RIPD está disponível para auditoria mediante solicitação formal, respeitado
            o sigilo comercial e de segurança da informação.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">8. ANPD</h2>
          <p>
            A Autoridade Nacional de Proteção de Dados (ANPD) é o órgão federal
            responsável por fiscalizar o cumprimento da LGPD. Você pode apresentar
            reclamações ou petições à ANPD pelo site{" "}
            <a
              href="https://www.gov.br/anpd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              gov.br/anpd
            </a>{" "}
            ou pelo e-mail{" "}
            <a href="mailto:anpd@anpd.gov.br" className="text-primary hover:underline">
              anpd@anpd.gov.br
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
