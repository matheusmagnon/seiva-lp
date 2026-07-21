import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de Privacidade da SEIVA — como tratamos seus dados pessoais em conformidade com a LGPD.",
}

export default function PrivacidadePage() {
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
          <span className="text-sm font-medium">Política de Privacidade</span>
        </div>
      </header>

      <main id="main" className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <div className="prose max-w-none">
          <p className="text-caption text-muted-foreground mb-2">
            Última atualização: {lastUpdated}
          </p>
          <h1 className="text-h2 font-extrabold mb-8">Política de Privacidade</h1>

          <p className="text-lead text-muted-foreground mb-8">
            A SEIVA Tecnologia Ltda. ("SEIVA") leva a sério a privacidade e a proteção
            dos dados pessoais. Esta Política de Privacidade descreve como coletamos,
            utilizamos, armazenamos e protegemos as informações dos usuários da plataforma
            SEIVA e visitantes do site seiva.app, em conformidade com a Lei Geral de
            Proteção de Dados (Lei n. 13.709/2018 — LGPD) e demais normas aplicáveis.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">1. Quem Somos</h2>
          <p>
            SEIVA Tecnologia Ltda., inscrita no CNPJ sob o n. [em constituição], com sede
            em Palmas, Tocantins, é a controladora dos dados pessoais tratados em
            decorrência do uso da plataforma e do site. Para fins da LGPD, os clientes da
            plataforma (prefeituras, clínicas) são os controladores dos dados de seus
            assistidos/pacientes; o SEIVA atua como operador desses dados.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">2. Dados que Coletamos</h2>
          <h3 className="text-h4 font-semibold mt-6 mb-3">2.1 Dados fornecidos por você</h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Nome completo, e-mail, telefone e organização (formulário de contato do site)</li>
            <li>Dados cadastrais de usuários da plataforma (nome, e-mail, cargo)</li>
            <li>Dados inseridos pelos clientes na plataforma (cadastros, atendimentos, prontuários)</li>
          </ul>

          <h3 className="text-h4 font-semibold mt-6 mb-3">2.2 Dados coletados automaticamente</h3>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Endereço IP, tipo de navegador, sistema operacional</li>
            <li>Páginas visitadas, tempo de permanência, origem do tráfego (via Google Analytics 4 e Microsoft Clarity)</li>
            <li>Dados de sessão (cookies essenciais e de análise)</li>
          </ul>

          <h2 className="text-h3 font-semibold mt-10 mb-4">3. Finalidades do Tratamento</h2>
          <p>Tratamos dados pessoais para as seguintes finalidades, todas amparadas por bases legais previstas na LGPD:</p>
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E6EAF0]">
                  <th className="text-left py-2 pr-4 font-semibold">Finalidade</th>
                  <th className="text-left py-2 pr-4 font-semibold">Base Legal (LGPD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-line-hair">
                  <td className="py-2 pr-4">Responder a solicitações de contato e demonstração</td>
                  <td className="py-2 pr-4 text-muted-foreground">Art. 7, I (consentimento) e V (execução de diligências pré-contratuais)</td>
                </tr>
                <tr className="border-b border-line-hair">
                  <td className="py-2 pr-4">Prestação do serviço contratado (plataforma SaaS)</td>
                  <td className="py-2 pr-4 text-muted-foreground">Art. 7, V (execução do contrato)</td>
                </tr>
                <tr className="border-b border-line-hair">
                  <td className="py-2 pr-4">Melhoria da experiência do site (análise de tráfego)</td>
                  <td className="py-2 pr-4 text-muted-foreground">Art. 7, IX (legítimo interesse) e Art. 10 (interesse legítimo do controlador)</td>
                </tr>
                <tr className="border-b border-line-hair">
                  <td className="py-2 pr-4">Cumprimento de obrigações legais e regulatórias</td>
                  <td className="py-2 pr-4 text-muted-foreground">Art. 7, II (obrigação legal)</td>
                </tr>
                <tr className="border-b border-line-hair">
                  <td className="py-2 pr-4">Exercício regular de direitos em processos judiciais</td>
                  <td className="py-2 pr-4 text-muted-foreground">Art. 7, VI (exercício regular de direitos)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Auditoria e segurança da plataforma</td>
                  <td className="py-2 pr-4 text-muted-foreground">Art. 7, IX (legítimo interesse)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-h3 font-semibold mt-10 mb-4">4. Compartilhamento de Dados</h2>
          <p>
            Não vendemos nem alugamos dados pessoais. Os dados podem ser compartilhados
            com terceiros apenas nas seguintes hipóteses:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li>Prestadores de serviço essenciais à operação (AWS/hospedagem, Resend/envio de e-mail transacional)</li>
            <li>Ferramentas de análise de tráfego (Google Analytics, Microsoft Clarity) — anonimizadas quando possível</li>
            <li>Por determinação legal, ordem judicial ou requisição de autoridade competente</li>
          </ul>

          <h2 className="text-h3 font-semibold mt-10 mb-4">5. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Utilizamos cookies essenciais para o funcionamento do site e cookies de
            análise (GA4, Clarity) para compreender o uso e melhorar a experiência. Você
            pode desabilitar cookies nas configurações do seu navegador, mas isso pode
            afetar a funcionalidade do site. Consulte nossa{" "}
            <Link href="/lgpd" className="text-primary hover:underline">
              página sobre LGPD
            </Link>{" "}
            para mais detalhes sobre cookies e consentimento.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">6. Retenção e Segurança</h2>
          <p>
            Os dados são armazenados em servidores seguros com criptografia em trânsito
            (TLS 1.3) e em repouso (AES-256). Mantemos dados apenas pelo tempo necessário
            à finalidade ou por exigência legal (registros de acesso: 6 meses, Marco Civil
            da Internet; dados contábeis/fiscais: 5 anos, CTN). Aplicamos medidas técnicas
            e administrativas proporcionais ao risco, incluindo:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li>Banco de dados isolado por cliente (multi-tenant com segregação física)</li>
            <li>Autenticação JWT com escopo por tenant e RBAC (controle de acesso por perfil)</li>
            <li>Auditoria completa de todas as mutações (audit log imutável)</li>
            <li>Backup diário automatizado com retenção de 30 dias</li>
            <li>Soft-delete universal — nenhum dado é removido fisicamente sem procedimento explícito</li>
          </ul>

          <h2 className="text-h3 font-semibold mt-10 mb-4">7. Seus Direitos (LGPD)</h2>
          <p>
            Nos termos da LGPD, você tem o direito de:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li>Confirmar a existência de tratamento de dados (art. 18, I)</li>
            <li>Acessar seus dados (art. 18, II)</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados (art. 18, III)</li>
            <li>Anonimizar, bloquear ou eliminar dados desnecessários ou tratados em desconformidade (art. 18, IV)</li>
            <li>Portar seus dados a outro fornecedor de serviço (art. 18, V)</li>
            <li>Eliminar dados tratados com consentimento (art. 18, VI)</li>
            <li>Revogar consentimento a qualquer momento (art. 18, IX)</li>
            <li>Opor-se a tratamento baseado em legítimo interesse (art. 18, § 2)</li>
          </ul>
          <p className="mt-3">
            Para exercer qualquer desses direitos, entre em contato com nosso Encarregado
            de Dados (DPO) pelo e-mail{" "}
            <a href="mailto:privacidade@seiva.app" className="text-primary hover:underline">
              privacidade@seiva.app
            </a>.
            Responderemos em até 15 dias úteis, conforme previsto na LGPD.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">8. Transferência Internacional</h2>
          <p>
            Utilizamos provedores de infraestrutura e serviços que podem processar dados
            fora do Brasil (ex.: AWS, com data centers nos EUA). Quando isso ocorre,
            exigimos contratualmente que esses provedores mantenham nível de proteção
            equivalente ao brasileiro, em conformidade com o art. 33 da LGPD.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">9. Encarregado de Dados (DPO)</h2>
          <p>
            O Encarregado pelo tratamento de dados pessoais do SEIVA é:
          </p>
          <div className="bg-surface-bg rounded-[10px] p-4 mt-3">
            <p className="font-medium">Matheus Magno</p>
            <p className="text-muted-foreground">
              E-mail:{" "}
              <a href="mailto:privacidade@seiva.app" className="text-primary hover:underline">
                privacidade@seiva.app
              </a>
            </p>
          </div>

          <h2 className="text-h3 font-semibold mt-10 mb-4">10. Alterações nesta Política</h2>
          <p>
            Esta política pode ser atualizada periodicamente. Alterações relevantes serão
            comunicadas por e-mail (para clientes da plataforma) ou por aviso destacado no
            site (para visitantes). A data da última atualização consta no topo desta página.
          </p>

          <h2 className="text-h3 font-semibold mt-10 mb-4">11. Contato e Reclamações</h2>
          <p>
            Para dúvidas, solicitações ou reclamações sobre privacidade:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground mt-3">
            <li>
              E-mail:{" "}
              <a href="mailto:privacidade@seiva.app" className="text-primary hover:underline">
                privacidade@seiva.app
              </a>
            </li>
            <li>
              WhatsApp:{" "}
              <a
                href="https://wa.me/5563984365295"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                (63) 98436-5295
              </a>
            </li>
          </ul>
          <p className="mt-3">
            Você também pode apresentar reclamação à Autoridade Nacional de Proteção de
            Dados (ANPD), nos termos do art. 55-J da LGPD, por meio do site{" "}
            <a
              href="https://www.gov.br/anpd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              gov.br/anpd
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
