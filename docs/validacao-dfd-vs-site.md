# Auditoria de cobertura — DFD/Requisitos SEIVA × Site (LP)

> 2026-07-22. Compara o que o sistema SEIVA vai entregar (fonte: DFD SEDES/Palmas + planejamento em
> `../seiva/docs/planejamento/`) contra o que a landing page (`seiva-lp`) descreve hoje. Objetivo do
> dono do produto: o site deve descrever **tudo** que será implementado, para não precisar voltar e
> atualizar depois.

## 0. Fontes lidas

| Fonte | Lida? | Observação |
|---|---|---|
| `DFD Sistema SEDES 2026 para Matheus.pdf` | ✅ completo, 14/14 páginas | PDF nítido, texto extraído sem perdas. Único documento juridicamente "oficial"; todo o resto é interpretação do Matheus sobre ele. |
| `LEVANTAMENTO-REQUISITOS.md` | ✅ completo | Extração fiel do DFD (conferido item a item contra o PDF) + análise de viabilidade e corte MVP/Fase 1.5/Fase 2. É a fonte canônica usada abaixo. |
| `BACKLOG-MVP.md` | ✅ completo | Sequenciamento em épicos E1–E23, com status (vários já "✅ CONCLUÍDO"). |
| `PLANO-E7-CADASTRO.md` | ✅ lido (headers + trechos) | Confirma escopo de CF-01..16. |
| `PLANO-E8-ATENDIMENTO.md` | ✅ lido (headers + trechos) | Confirma AT-01/02/05/11, CO-01/02. |
| `PLANO-E9-ACOMPANHAMENTO.md` | ✅ lido (headers + trechos) | Confirma AT-03/08(PAF)/09. |
| `PLANO-E10-BENEFICIOS.md` | ✅ lido (trecho relevante) | Confirma que **estoque por unidade é escopo confirmado** (decisão 2026-07-21, corrigindo uma ambiguidade anterior). |
| `PLANO-E6-FECHAMENTO.md` | ✅ lido (trecho) | Fechamento do núcleo de unidades/RBAC — sem novidade de escopo além do levantamento. |
| `PLANO-RELATORIOS.md` | ✅ lido (trecho relevante) | Traz a tese de produto para relatórios + tabela de obrigações legais (RMA, Censo SUAS, SUASWeb, SISC, Relatório Anual CMAS, MROSC) — informação que **não está** no DFD nem no levantamento em tanto detalhe. |
| `INTEGRACOES.md` | ✅ lido (resumo executivo + itens 1–13) | Confirma fases (MVP/1.5/2) de cada integração. |
| `MODELO-DOMINIO.md` | Não lido nesta rodada (não necessário — as decisões relevantes de domínio já vieram citadas pelos planos de épico) | Sem impacto na conclusão; se quiser detalhar mais um bloco específico do prontuário, vale ler. |

Nada ficou ilegível. A única "incerteza de fonte" é que dois documentos descrevem o RMA com bases
normativas ligeiramente diferentes (ver §5, item de risco sobre "CadSUAS" no FAQ do site).

---

## 1. Lista canônica de funcionalidades (fonte da verdade)

Agrupada por área. IDs entre parênteses = rastreabilidade do LEVANTAMENTO-REQUISITOS.md (que por sua
vez rastreia ao item do DFD, citado ao lado). "Fase" = onde está no corte do BACKLOG-MVP.

### A. Plataforma e requisitos gerais
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| 100% web, multi-navegador sem perda de performance | RG-01 · DFD 8.5.1.2/8.7 | MVP |
| Interface responsiva (tablet/smartphone) para campo/busca ativa/visita domiciliar | RG-02 · DFD 8.5.1.4 | MVP |
| Ilimitado: usuários, volume de dados, unidades, uso | RG-03 · DFD 8.5.1.3 | MVP |
| Hospedagem em nuvem + backups diários | RG-04 · DFD 2.3 | MVP |
| Atualizações automáticas legais/corretivas/evolutivas | RG-05 · DFD 2.3/8.5.1.1 | MVP (contínuo) |
| Migração de dados legados (Google Sheets/Forms) | RG-06 · DFD 2.1/5 | MVP (E21, serviço de implantação) |
| Parametrização/personalização de módulos por unidade | RG-07 · DFD 2.1 | MVP |
| Alinhamento a NOB/SUAS, Tipificação Nacional, Prontuário SUAS | RG-08 · DFD 8.3 | MVP |
| Acessibilidade e usabilidade contínuas (e-MAG/WCAG) | RG-09 · DFD 8.3.6 | MVP (DoD de todo épico) |
| Offline-ready (cache local + sync) | Decisão de arquitetura (não é item literal do DFD) | **Fase 1.5/2** — arquitetura nasce pronta, entrega é pós-MVP |

### B. Rede, unidades, usuários e acesso (RBAC)
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Cadastro georreferenciado de unidade + estrutura organizacional | AC-01 · DFD 8.5.1.5 | MVP |
| Desativar unidades; níveis de acesso individualizados por servidor | AC-02 · DFD 8.5.1.6 | MVP |
| Cadastro de equipe técnica por equipamento (função/carga horária/regime) | AC-03 · DFD 8.5.1.7 | MVP |
| Validade de contas + bloqueio imediato de desvinculados | AC-04 · DFD 8.5.1.8 | MVP |
| Múltiplos vínculos: troca de unidade sem novo login | AC-05 · DFD 8.5.1.9 | MVP |
| Auto-cadastro c/ aprovação; perfis visualização/edição por módulo | AC-06 · DFD 8.5.1.10/11 | MVP |
| Login via Gov.br | AC-07 · DFD 8.5.1.11.1 | **Fase 2** |
| Recuperação de senha + bloqueio por tentativas | AC-08 · DFD 8.5.1.12 | MVP |
| Personalização de brasões/relatórios + campos obrigatórios configuráveis | AC-09 · DFD 8.5.1.15 | MVP |

### C. Cadastro e prontuário familiar (Pessoa/Família)
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Fluxo padronizado Consulta → Cadastro → Atendimento | CF-01 · DFD 8.5.1.28 | MVP |
| Controle unificado de pessoas/famílias (dedupe entre unidades) | CF-02 · DFD 8.5.1.29 | MVP |
| Fotos e documentos digitalizados anexados | CF-03 · DFD 8.5.1.30 | MVP |
| Composição familiar, vínculos, especificidades étnico-culturais, vulnerabilidades | CF-04 · DFD 8.5.1.31 | MVP |
| Histórico de famílias anteriores (data/motivo/quem desligou) | CF-05 · DFD 8.5.1.32 | MVP |
| Reativação de pessoas excluídas em novos grupos familiares | CF-06 · DFD 8.5.1.33 | MVP |
| Dados pessoais padrão CadÚnico (civil, filiação, raça/cor, deficiência...) | CF-07 · DFD 8.5.1.34 | MVP |
| Dados socioeconômicos (ocupação, renda per capita, despesas) | CF-08 · DFD 8.5.1.35 | MVP |
| Infraestrutura do domicílio | CF-09 · DFD 8.5.1.36 | MVP |
| Condições educacionais | CF-10 · DFD 8.5.1.37 | MVP |
| Condições de saúde (respostas datadas/por responsável) | CF-11 · DFD 8.5.1.38 | MVP |
| Convivência familiar e comunitária (Prontuário SUAS) | CF-12 · DFD 8.5.1.39 | MVP |
| Formulário suplementar situação de rua | CF-13 · DFD 8.5.1.40 | MVP |
| Cadastro fora do CadÚnico + atualização total/parcial + alerta | CF-14 · DFD 8.5.1.20 | MVP (manual+alerta; automação via SICON/SIBEC é Fase 1.5) |
| Identificação automática de pobreza/extrema pobreza | CF-15 · DFD 8.5.1.43 | MVP |
| Programas/benefícios da família + condicionalidades/descumprimentos | CF-16 · DFD 8.5.1.41/42 | MVP |

### D. Atendimento, acompanhamento e encaminhamentos
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Encaminhamentos c/ notificação interna+e-mail + contrarreferência | AT-01 · DFD 8.5.1.44 | MVP |
| Registro de atendimento c/ atendidos e envolvidos vinculados | AT-02 · DFD 8.5.1.45 | MVP |
| Inclusão automática em acompanhamento pós-identificação técnica | AT-03 · DFD 8.5.1.46 | MVP |
| Histórico de MSE, acolhimento, violência e violação de direitos (PSE) | AT-04 · DFD 8.5.1.47 | **Fase 1.5** (E16) |
| Cancelamento de atendimento com motivo detalhado | AT-05 · DFD 8.5.1.48 | MVP |
| Questionários dinâmicos (instrumentos técnico-operativos personalizados) | AT-06 · DFD 8.5.1.49 | **Fase 1.5** (E19) |
| Atividades em grupo PAIF/PAEFI/SCFV c/ pareceres | AT-07 · DFD 8.5.1.50 | **Fase 1.5** (E18, junto com SCFV) |
| PAF (metas/prazos) e PIA (acompanhamento MSE/acolhimento) | AT-08 · DFD 8.5.1.51 | PAF no MVP (E9); PIA na **Fase 1.5** (E16) |
| Visão integrada dos acompanhamentos PSB/PSE | AT-09 · DFD 8.5.2.4 | MVP |
| MSE tipo PSC/LA: ato infracional, período, carga horária, frequência | AT-10 · DFD 8.5.2.5 | **Fase 1.5** (E16) |
| Agenda de equipe integrada | AT-11 · DFD 8.5.2.15 | MVP (E8) |

### E. Benefícios eventuais e SCFV
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Benefícios eventuais: **estoque, saldos financeiros, leis autorizativas, pareceres técnicos** | BE-01 · DFD 8.5.2.2 | MVP (E10) — estoque **por unidade confirmado** em decisão de 2026-07-21 |
| Atividades em grupo em consonância com o SISC (frequência/carga horária SCFV) | BE-02 · DFD 8.5.2.1 | **Fase 1.5** (E18) |

### F. Relatórios, indicadores e Vigilância Socioassistencial
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Dashboards c/ gráficos (barra/linha/pizza/área), comparação de períodos/categorias/unidades, filtros dinâmicos, export PDF/Excel/PNG/JPEG | RI-01 · DFD 8.3.8 | MVP (E13) |
| RMA automatizado, visível na tela inicial | RI-02 · DFD 3.8.4/8.5.1.25 | MVP (E11 — clímax da POC) |
| Indicadores IDCRAS/IDCREAS; suporte ao Censo SUAS; IGD-SUAS/IGD-PBF | RI-03 · DFD 3.8.4/3.8.7/6.1.6 | Projeção parcial no MVP (E13); IGD completo **Fase 1.5/2** (E22) |
| Compilação de dados agrupados para análise mensal da Vigilância | RI-04 · DFD 8.5.1.23 | MVP |
| Pesquisas avançadas com **filtros salvos e reutilizáveis (visões/views compartilháveis)** | RI-05 · DFD 8.5.1.26 | MVP (E5b) — **entregue além do requisito**: compartilhamento privado/unidade/município, nenhum concorrente do nicho anuncia isso |
| Boletins demográficos (cor/raça/sexo/faixa etária) e fluxos de atendimento | RI-06 · DFD 8.5.2.3 | MVP (E13) |
| Ficha cadastral completa + prontuário integrado (histórico multiprofissional) | RI-07 · DFD 8.5.2.7 | MVP |
| Demonstrativos analíticos automáticos (atendimentos particularizados/coletivos) | RI-08 · DFD 8.5.2.8/8.5.2.12 | MVP (E13) |
| Gráfico de famílias/indivíduos por bairro e/ou vulnerabilidade | RI-09 · DFD 8.5.2.9 | MVP sem geo (E13); versão em mapa **Fase 1.5** (E17) |
| Relatório de acompanhamento PAIF/PAEFI (histórico, período, unidade) | RI-10 · DFD 8.5.2.10 | MVP (E15) |
| Relatório gerencial de produção mensal da equipe | RI-11 · DFD 8.5.2.11 | MVP (E13/E15) |
| **Diagnóstico socioterritorial em mapas** (georreferenciamento) | RI-12 · DFD 8.5.2.13 | **Fase 1.5** (E17) |
| Painel de indicadores consultável por período | RI-13 · DFD 8.5.2.14 | MVP (E13) |
| Exportação de qualquer listagem em CSV | RI-14 · DFD 8.5.2.6 | MVP |
| Exportador de Dados Avançado (consultas SQL sanitizadas) | RI-15 · DFD 8.5.3.5 | **Fase 2** (E20) |
| Painel de resultados de importações (processados/erros/alertas) | RI-16 · DFD 8.5.1.21 | MVP (E12) |
| Unificação de logradouros/bairros (evita duplicidade cadastral) | RI-17 · DFD 8.5.1.22 | MVP (E7) |
| Relatórios personalizados com identidade visual do órgão | RI-18 · DFD 8.3.3 | MVP (E14) |
| Tela inicial com ícones de acesso rápido | RI-19 · DFD 8.5.1.24 | MVP (E5) |
| Monitoramento das metas do Plano Municipal de Assistência Social (PMAS) | RI-20 · DFD 3.8.7 | **Fase 2** (E22) |

### G. Comunicação e autenticação de documentos
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Comprovante de agendamento (data/hora/local/documentos) | CO-01 · DFD 8.5.3.1 | MVP (E8/E14) |
| Lembretes automatizados de agenda (sistema + e-mail) | CO-02 · DFD 8.5.3.2 | MVP (E8) |
| Disparo automatizado de SMS, e-mail e WhatsApp para lembretes | CO-03 · DFD 8.5.3.3 | **Fase 2** (E20) |
| Autenticador de documentos via QR Code + assinatura digital/eletrônica | CO-04 · DFD 8.5.3.4 | QR **MVP** (E14); assinatura ICP **Fase 2** (E20) |

### H. Integrações externas
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Interoperabilidade com Prontuário Eletrônico do SUAS (federal) | IN-01 · DFD 8.5.1.19 | Monitorar (fora do nosso controle — MDS ainda não abriu integração) |
| Integração com bases federais CECAD/CadÚnico, SICON, SIBEC (via importação de arquivo) | IN-02 · DFD 8.5.1.19 | CadÚnico **MVP** (E12); SICON/SIBEC **Fase 1.5** |
| APIs/endpoints para leitura/escrita por outros sistemas municipais | IN-03 · DFD 8.6 | MVP (nasce com o Swagger) |
| Integração com o SEI da Prefeitura | IN-04 · DFD 8.6.1 | **Fase 2** (E20) |
| Registro de movimentações financeiras dos blocos de financiamento federal | IN-05 · DFD 8.5.1.14 | **Fase 2** (E22) |
| Cadastro de OSCs parceiras (módulo MROSC) | IN-06 · DFD 8.5.1.13/3.8.9 | **Fase 2** (E20) |

### I. Segurança e LGPD
| Funcionalidade | Doc/DFD | Fase |
|---|---|---|
| Conformidade LGPD | SG-01 · DFD 8.3.5 | MVP |
| HTTPS em toda comunicação | SG-02 · DFD 8.5.1.16 | MVP |
| Integridade referencial (proíbe exclusão de registros relacionados; sem acesso sem login) | SG-03 · DFD 8.5.1.17 | MVP |
| Privacidade pública/privada por informação sensível (sigilo técnico) | SG-04 · DFD 8.5.1.18 | MVP |
| Trilha de auditoria completa em todos os registros | SG-05 · DFD 8.5.1.27 | MVP |
| Criptografia de dados de prontuário | SG-06 · DFD 3.8.8 | MVP |

### J. Serviços e obrigações contratuais (implantação/suporte — não são "features" de produto, mas o DFD exige que constem)
| Item | Doc/DFD |
|---|---|
| Plano de implantação (levantamento, parametrização, migração, treinamento, manuais, suporte, cronograma) | SV-01 · DFD 8.4 |
| Treinamento presencial/on-line, sob demanda, para todos os servidores | SV-02 · DFD 5/8.9 |
| Suporte em até 24h, incluindo chat virtual | SV-03 · DFD 8.9 |
| Atestado de capacidade técnica (barreira comercial, não é feature de produto) | SV-04 · DFD 8.8 |
| Pagamento mensal mediante relatório de execução | SV-05 · DFD 8.11 |

---

## 2. Tabela de cobertura (site hoje × lista canônica)

Legenda: **Descrito** = aparece de forma reconhecível · **Parcial** = aparece de forma genérica/implícita, sem o detalhe do requisito · **Ausente** = não aparece em lugar nenhum do site.

### A. Plataforma geral
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| RG-01 | 100% web, multi-navegador | Descrito | FAQ ("100% web... Chrome, Firefox, Edge") |
| RG-02 | Responsivo p/ campo/tablet | Parcial | Implícito em Diferenciais "Offline-ready" (menciona CRAS rural/visita domiciliar), mas não fala de tablet/responsividade em si |
| RG-03 | Ilimitado (usuários/dados/unidades) | Parcial | Diferenciais "Usuários ilimitados" + FAQ cobrem só usuários, não volume de dados/unidades |
| RG-04 | Nuvem + backup diário | Descrito | Stack "Banco isolado" ("Backups diários, replicação...") |
| RG-05 | Atualizações automáticas legais/corretivas | **Ausente** | — |
| RG-06 | Migração de dados legados | Parcial | FAQ "Como funciona o suporte" cita "migração dos dados existentes" de passagem |
| RG-07 | Parametrização por unidade | Descrito | Funcionalidades » rede: "Parametrização de serviços tipificados por unidade" |
| RG-08 | Alinhamento a normativas (NOB/SUAS, Tipificação, Prontuário SUAS) | **Ausente** | Nenhuma menção explícita a NOB/SUAS ou Tipificação Nacional — só "Prontuário familiar" genérico |
| RG-09 | Acessibilidade/usabilidade (e-MAG/WCAG) | **Ausente** | — |
| — | Offline-ready | Descrito (⚠️ ver §5) | Diferenciais + FAQ, em tom de recurso já entregue |

### B. Rede, unidades, usuários e acesso
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| AC-01 | Cadastro georreferenciado de unidade + estrutura | Parcial | Funcionalidades » rede: "Cadastro de unidades (CRAS, CREAS...)" sem menção a geo |
| AC-02 | Desativar unidades + acesso individualizado | **Ausente** | — |
| AC-03 | Equipe técnica (função/carga horária/regime) | Parcial | "Equipes e vínculos de profissionais" — genérico |
| AC-04 | Validade de conta + bloqueio de desvinculados | **Ausente** | — |
| AC-05 | Múltiplos vínculos, troca de unidade sem novo login | Descrito | Stack » Autenticação robusta |
| AC-06 | Auto-cadastro c/ aprovação; perfis view/edit por módulo | Parcial | FAQ menciona "perfil de acesso configurável (admin, coordenação, técnico, vigilância, leitura)"; não fala de auto-cadastro nem da distinção visualização/edição |
| AC-07 | Login Gov.br | **Ausente** | Aceitável — é Fase 2 |
| AC-08 | Recuperação de senha + bloqueio por tentativas | **Ausente** | — |
| AC-09 | Brasões personalizados + campos obrigatórios configuráveis | **Ausente** | — |

### C. Cadastro e prontuário familiar
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| CF-01 | Fluxo Consulta→Cadastro→Atendimento | Parcial | Implícito em "Busca por NIS, CPF, nome" — o fluxo em si não é nomeado |
| CF-02 | Dedupe entre unidades | **Ausente** | doresContent cita a dor (planilhas duplicadas), mas a solução (dedupe) não aparece em Funcionalidades |
| CF-03 | Fotos/documentos anexados | **Ausente** | — |
| CF-04 | Composição familiar/vínculos/vulnerabilidades | Descrito | "Composição familiar com parentesco relativo ao responsável" |
| CF-05 | Histórico de famílias anteriores | Parcial | "Prontuário único... histórico versionado" é genérico demais para cobrir o requisito específico |
| CF-06 | Reativação de pessoas excluídas | **Ausente** | — |
| CF-07 | Dados pessoais padrão CadÚnico | Parcial | Coberto de forma genérica por "Blocos de condições" |
| CF-08 | Dados socioeconômicos | Parcial | Idem — bloco "trabalho" genérico |
| CF-09 | Infraestrutura do domicílio | Parcial | Idem — bloco "habitacionais" genérico |
| CF-10 | Condições educacionais | Descrito | Citado nominalmente no bloco |
| CF-11 | Condições de saúde | Descrito | Citado nominalmente no bloco |
| CF-12 | Convivência familiar/comunitária | **Ausente** | — |
| CF-13 | Situação de rua | **Ausente** | Requisito explícito do DFD (8.5.1.40), zero menção no site |
| CF-14 | Cadastro fora do CadÚnico + atualização/alerta | Parcial | FAQ cobre a importação, não o alerta de atualização |
| CF-15 | Identificação automática pobreza/extrema pobreza | **Ausente** | — |
| CF-16 | Programas/benefícios (BPC/Bolsa Família) + condicionalidades | **Ausente** | Não confundir com o card "Benefícios eventuais" — é outro requisito (identificação de quem já recebe programas federais) |

### D. Atendimento, acompanhamento e encaminhamentos
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| AT-01 | Encaminhamentos c/ notificação + contrarreferência | Parcial | "Encaminhamentos para a rede intersetorial" — genérico, sem notificação/contrarreferência |
| AT-02 | Registro de atendimento c/ envolvidos vinculados | Parcial | "Registro de atendimentos individuais e em grupo" — não menciona vínculo entre envolvidos |
| AT-03 | Inclusão automática em acompanhamento | **Ausente** | — |
| AT-04 | Histórico MSE/acolhimento/violência (PSE) | **Ausente** | Fase 1.5, mas o dono do produto quer tudo descrito — ver lacunas |
| AT-05 | Cancelamento com motivo detalhado | **Ausente** | — |
| AT-06 | Questionários dinâmicos | **Ausente** | Fase 1.5 |
| AT-07 | Atividades em grupo PAIF/PAEFI/SCFV c/ pareceres | Parcial | "Acompanhamento PAIF, PAEFI e serviços de convivência" sem menção a pareceres |
| AT-08 | PAF (metas/prazos) e PIA | Parcial | "Plano de acompanhamento com metas por família" cobre o PAF; PIA não é citado |
| AT-09 | Visão integrada PSB/PSE | **Ausente** | — |
| AT-10 | MSE tipo PSC/LA | **Ausente** | Fase 1.5 |
| AT-11 | Agenda de equipe integrada | **Ausente** (⚠️) | Só aparece no `screenshotsContent` ("Agenda integrada da equipe"), que **não é renderizado** na página (seção Screenshots foi removida — commit `19a6cb9`). Em Funcionalidades » atendimento não há bullet de agenda |

### E. Benefícios eventuais e SCFV
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| BE-01 | Benefícios eventuais: **estoque, saldo financeiro, lei autorizativa, parecer técnico** | Parcial (⚠️ gap notável) | Card "Benefícios eventuais" fala de concessão, histórico e relatório por período — mas **não menciona estoque, saldo financeiro nem lei autorizativa/parecer**, que são justamente as palavras literais do requisito DFD 8.5.2.2 e que o E10 confirmou modelar |
| BE-02 | Atividades em grupo c/ SISC (frequência/carga SCFV) | Parcial | O mesmo card cita "Atividades coletivas com lista de presença" — não menciona SISC, frequência nem carga horária |

### F. Relatórios, indicadores e Vigilância
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| RI-01 | Dashboards c/ gráficos comparativos, filtros, export PDF/Excel/PNG | Parcial | "Painel de indicadores por território e unidade" — genérico, sem tipos de gráfico nem formatos de export |
| RI-02 | RMA automatizado | Descrito | Diferenciais + FAQ |
| RI-03 | IDCRAS/IDCREAS/Censo SUAS/IGD | **Ausente** | — |
| RI-04 | Compilação de dados p/ Vigilância | Parcial | Coberto de forma genérica pelo card "Vigilância" |
| RI-05 | Pesquisas avançadas com filtros salvos/reutilizáveis (views compartilháveis) | **Ausente** | Diferencial real do produto (nenhum concorrente do nicho anuncia) e não aparece no site |
| RI-06 | Boletins demográficos | **Ausente** | — |
| RI-07 | Ficha cadastral completa + prontuário integrado | Parcial | Coberto por "Prontuário único por família" no card de cadastro |
| RI-08 | Demonstrativos analíticos automáticos | **Ausente** | — |
| RI-09 | Gráfico famílias/indivíduos por bairro/vulnerabilidade | Parcial | "Identificação de áreas com maior incidência de violações" chega perto, sem citar "por bairro" |
| RI-10 | Relatório acompanhamento PAIF/PAEFI (histórico/período/unidade) | **Ausente** | — |
| RI-11 | Relatório gerencial de produção da equipe | **Ausente** | — |
| RI-12 | Diagnóstico socioterritorial em mapas | **Ausente** | Fase 1.5 |
| RI-13 | Painel de indicadores por período | Parcial | Card "Vigilância" não menciona "por período" |
| RI-14 | Exportação CSV universal | Descrito | Diferenciais "Portabilidade total" |
| RI-15 | Exportador SQL avançado | **Ausente** | Fase 2 |
| RI-16 | Painel de resultados de importações | **Ausente** | — |
| RI-17 | Unificação de logradouros/bairros | **Ausente** | — |
| RI-18 | Relatórios com identidade visual do órgão | **Ausente** | Ponto de venda relevante para prefeitura (relatório sai com o brasão do município) |
| RI-19 | Tela inicial com ícones de acesso rápido | **Ausente** | — |
| RI-20 | Monitoramento de metas do PMAS | **Ausente** | Fase 2 |

### G. Comunicação e autenticação de documentos
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| CO-01 | Comprovante de agendamento | **Ausente** | — |
| CO-02 | Lembretes automatizados (sistema+e-mail) | **Ausente** | — |
| CO-03 | SMS/e-mail/WhatsApp | **Ausente** | Fase 2 — nota: há um `WhatsAppButton` no site, mas é widget de **contato comercial**, não a feature de produto (lembrete automatizado ao usuário do SUAS) |
| CO-04 | QR Code + assinatura digital/eletrônica | **Ausente** | QR é MVP (E14) |

### H. Integrações externas
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| IN-01 | Interoperabilidade PEC federal | **Ausente** | Aceitável — depende do MDS |
| IN-02 | CadÚnico/CECAD/SICON/SIBEC | Parcial | FAQ cobre só CadÚnico via CECAD; SICON/SIBEC não aparecem |
| IN-03 | APIs/endpoints | Descrito | Diferenciais "APIs abertas" |
| IN-04 | SEI | **Ausente** | Fase 2, aceitável |
| IN-05 | Movimentações financeiras dos blocos federais | **Ausente** | Fase 2, aceitável |
| IN-06 | Cadastro de OSCs parceiras (MROSC) | **Ausente** | Fase 2 — CLAUDE.md **proíbe deliberadamente** citar Gestor de Convênios, então o texto precisaria ser reescrito sem essa referência cruzada, se decidirem incluir |

### I. Segurança e LGPD
| # | Funcionalidade | Status | Onde aparece |
|---|---|---|---|
| SG-01 | Conformidade LGPD | Descrito | Stack "LGPD por padrão" |
| SG-02 | HTTPS | **Ausente** (implícito, não afirmado) | — |
| SG-03 | Integridade referencial | Descrito | Stack "Auditoria completa" ("soft-delete universal — nada se apaga") |
| SG-04 | Privacidade pública/privada por informação sensível (sigilo técnico) | **Ausente** | — |
| SG-05 | Trilha de auditoria | Descrito | Stack "Auditoria completa" |
| SG-06 | Criptografia | Descrito | Stack "LGPD por padrão" |

### J. Serviços contratuais
| # | Item | Status | Onde aparece |
|---|---|---|---|
| SV-01 | Plano de implantação | Parcial | FAQ "Como funciona o suporte" cita onboarding + migração de passagem |
| SV-02 | Treinamento presencial/online | Parcial | "Onboarding guiado da equipe", sem citar treinamento presencial |
| SV-03 | Suporte 24h + chat virtual | Descrito (aprox.) | Contato: "Resposta em até 24 horas úteis"; FAQ "Suporte por WhatsApp e e-mail" |
| SV-04 | Atestado de capacidade técnica | N/A | Item de licitação, não é feature — corretamente ausente do site |
| SV-05 | Pagamento mensal mediante relatório | N/A | Não é ponto de marketing — correto omitir |

**Resumo numérico** (contagem aproximada dos ~90 requisitos funcionais RG+AC+CF+AT+BE+RI+CO+IN+SG,
excluindo SV que é cláusula contratual): **Descrito ≈ 13** · **Parcial ≈ 23** · **Ausente ≈ 45**.
Ou seja, **menos de 15% dos requisitos aparecem descritos de forma reconhecível** no site hoje — a
maior parte do produto real (inclusive praticamente todo o MVP de Cadastro/Atendimento/PSE/Vigilância
em detalhe) não está no funcionalidadesContent atual, que é bastante mais enxuto que o escopo real.

---

## 3. Lacunas priorizadas (o que falta descrever)

### Prioridade alta — são MVP confirmado e não aparecem ou aparecem fracos
1. **Benefícios eventuais sem estoque/saldo/lei autorizativa/parecer técnico** (BE-01) — é a redação
   literal do DFD e o E10 acabou de confirmar que estoque por unidade **é** escopo. Hoje o card fala só
   de concessão/histórico/relatório.
2. **Situação de rua** (CF-13) — requisito explícito do DFD, zero menção; é um formulário citado por
   nome no documento oficial, fácil de listar.
3. **Dedupe / cadastro único de pessoas e famílias entre unidades** (CF-02) — é justamente a resposta à
   dor nº 1 do site ("Cada CRAS e CREAS mantém sua própria planilha"), mas a solução não é nomeada no
   card de Funcionalidades.
4. **Agenda de equipe** (AT-11) — está no MVP (E8, já com plano detalhado), citada só como legenda de um
   screenshot que nem é renderizado. Card "Atendimento e acompanhamento" não tem esse bullet.
5. **Encaminhamento com notificação + contrarreferência** (AT-01) — hoje é só "encaminhamentos para a
   rede", sem o diferencial real (alerta de atraso, contrarreferência).
6. **Cancelamento de atendimento com motivo** (AT-05) e **inclusão automática em acompanhamento** (AT-03)
   — pequenos, mas mostram maturidade de processo — zero menção.
7. **Pesquisas avançadas com filtros salvos e compartilháveis / visões da Vigilância** (RI-05) — é
   citado no PLANO-RELATORIOS como diferencial competitivo real ("nenhum concorrente anuncia isso") e
   está totalmente ausente do site.
8. **Relatórios com identidade visual do órgão (brasão)** (RI-18, AC-09) — ponto de venda óbvio para
   prefeitura, ausente.
9. **Tela inicial com acesso rápido por ícones** (RI-19) — pequeno, mas fácil de vender como "produtividade
   do dia a dia do técnico".
10. **Painel de resultados de importação do CadÚnico** (RI-16) — reforça a credibilidade da importação
    já mencionada na FAQ (hoje ela promete a importação, mas não mostra que há controle de erros).

### Prioridade média — Fase 1.5 (pré-assinatura), mas o dono quer tudo descrito para não reescrever depois
11. **PSE completa**: MSE (LA/PSC), acolhimento institucional, histórico de violação de direitos, PIA
    (AT-04/08/10) — hoje o site fala só de PSB (CRAS/PAIF); PSE (CREAS) é citado apenas na persona
    "Vigilância" e no rodapé genérico, nunca como funcionalidade.
12. **SCFV alinhado ao SISC** (BE-02/AT-07) — frequência/carga horária, exportação no layout do SISC.
13. **Diagnóstico socioterritorial em mapas / geo** (RI-12) — bom gancho visual para uma futura seção
    de screenshots.
14. **Questionários dinâmicos / formulários personalizáveis** (AT-06) — atrativo para prefeituras com
    processos próprios.
15. **Indicadores federais**: IDCRAS/IDCREAS, Censo SUAS, IGD-SUAS/IGD-PBF (RI-03) — mesmo em
    "projeta/apoia o preenchimento" (não substitui o MDS), vale registrar a promessa certa.

### Prioridade baixa — Fase 2 (pós-implantação), mencionar como roadmap sem prometer prazo
16. Login Gov.br, WhatsApp/SMS para lembretes automatizados, integração SEI, exportador SQL avançado,
    assinatura eletrônica/ICP, módulo OSC/MROSC, monitoramento de metas do PMAS, IGD completo.

### Itens de plataforma/segurança que reforçam credibilidade institucional (baixo esforço de redação)
17. Alinhamento a normativas (NOB/SUAS, Tipificação Nacional dos Serviços Socioassistenciais, Prontuário
    SUAS) — hoje implícito, nunca afirmado. Para comprador público, citar a norma é argumento de venda.
18. Acessibilidade (e-MAG/WCAG) — zero menção; é requisito do DFD (RG-09) e argumento de compliance.
19. Auto-cadastro com aprovação do administrador, bloqueio por tentativas, validade de conta — hoje só
    "autenticação robusta" genérica no Stack.
20. Sigilo técnico por registro (público/equipe/privado) — argumento forte de LGPD para dados de
    violência/MSE, ausente.

---

## 4. Proposta de atualização do `funcionalidadesContent`

Abaixo, textos prontos para revisão — mesmo tom do site atual (bullets curtos, sem emoji, sem
superlativo). **Nota de estilo:** os arrays `doresContent`/`personasContent`/`funcionalidadesContent`/
`diferenciaisContent`/`stackContent` em `content/landing/home.ts` hoje **não usam acentuação**
("Prontuario", "Beneficios", "vigilancia"), enquanto `sobreContent` e `lib/faq.ts` usam acentuação
normal. Escrevi a proposta abaixo **com acentos** (português correto) — ajustar para a convenção sem
acento só se for intencional (parece resquício de um problema de encoding anterior, vale perguntar
antes de generalizar um dos dois estilos).

### 4.1 Expandir os 5 cards existentes

**"Rede socioassistencial"** — adicionar:
- "Cadastro georreferenciado de cada unidade, com estrutura organizacional e níveis de acesso individualizados"
- "Equipe técnica por equipamento: função, carga horária e regime de trabalho"

**"Cadastro e prontuário familiar"** — adicionar:
- "Detecção de cadastros duplicados entre unidades, com fila de revisão antes da fusão"
- "Fotos e documentos digitalizados anexados à pessoa e à família"
- "Formulário suplementar para situação de rua"
- "Identificação automática de pobreza e extrema pobreza pela renda"

**"Atendimento e acompanhamento"** — adicionar:
- "Agenda de equipe integrada, com comprovante de agendamento e lembrete por e-mail"
- "Encaminhamento com notificação automática e registro de contrarreferência"
- "Cancelamento de atendimento com motivo registrado, sem apagar histórico"

**"Benefícios eventuais"** — reescrever para cobrir o requisito literal do DFD:
- "Catálogo de benefícios por lei autorizativa municipal"
- "Controle de estoque por unidade, com saldo financeiro e parecer técnico na concessão"
- "Fluxo solicitação → parecer → concessão → entrega, auditado"
- "Histórico de concessões por família, com alerta de recorrência"

**"Vigilância socioassistencial"** — adicionar:
- "Pesquisas com filtros salvos e views compartilháveis entre a equipe e a Vigilância"
- "Relatórios e boletins com a identidade visual (brasão) do órgão"
- "Painel de resultados de importação (processados, erros, alertas)"

### 4.2 Novo card — "Proteção Social Especial (CREAS)"
> Hoje o site só fala de PAIF/CRAS. PSE é metade do escopo do DFD e valorizado pela SEDES.
- "Histórico de medidas socioeducativas (Liberdade Assistida e Prestação de Serviços à Comunidade)"
- "Registro de acolhimento institucional, violência e violação de direitos"
- "Plano Individual de Atendimento (PIA) com controle de metas e prazos"
- "RMA específico para CREAS e Centro POP"

*(Nota: parte deste card é Fase 1.5 — se quiser deixar claro no site, usar um selo discreto tipo
"em implantação na próxima fase" em vez de omitir a funcionalidade inteira.)*

### 4.3 Novo card — "Comunicação e agenda"
- "Comprovante de agendamento com data, hora, local e documentos necessários"
- "Lembretes automáticos por e-mail e, na próxima fase, SMS e WhatsApp"
- "Autenticador de documentos por QR Code"
- "Assinatura eletrônica de declarações e termos (fase seguinte)"

### 4.4 Novo card — "Segurança, acesso e conformidade" (complementa o Stack, mais operacional)
- "Perfis de acesso por módulo, com distinção entre visualizar e editar"
- "Auto-cadastro com aprovação do administrador"
- "Bloqueio automático de contas por tentativas incorretas e desligamento imediato de servidores desvinculados"
- "Sigilo técnico por registro — informação sensível fica visível só para quem precisa"

### 4.5 Reforço institucional (pode virar bullets no Stack, ou 1–2 linhas no Hero/Sobre)
- "Alinhado à NOB/SUAS, à Tipificação Nacional dos Serviços Socioassistenciais e ao Prontuário SUAS"
- "Acessibilidade contínua, com atenção a padrões de usabilidade de órgão público"

### 4.6 FAQ — perguntas a considerar adicionar
- "O SEIVA cobre o CREAS e as medidas socioeducativas, ou só o CRAS?"
- "O SEIVA gera relatórios com a identidade visual da prefeitura?"
- "Como funciona o controle de estoque dos benefícios eventuais?"

---

## 5. Divergências / riscos (over-promise ou imprecisão)

1. **"Offline-ready" tratado como recurso já entregue.** Diferenciais afirma "Funciona sem internet.
   Os dados são cacheados localmente e sincronizados quando a conexão voltar" e a FAQ responde "Sim"
   de forma direta à pergunta "O SEIVA funciona offline?". Pelo BACKLOG-MVP e pela decisão registrada
   no LEVANTAMENTO (sabatina rodada 3), **a arquitetura nasce pronta para isso, mas a entrega da
   funcionalidade em si é ~Fase 2** — ainda não é um recurso funcionando ponta a ponta hoje. Isso é o
   maior risco de over-promise do site: se um técnico tentar usar o sistema offline antes da feature
   estar pronta, a experiência vai contradizer a promessa. Recomendo reformular para "arquitetura
   pensada para funcionar em conectividade instável" até a feature estar de fato entregue, ou manter
   a afirmação só depois que a Fase 2 concluir isso.
2. **FAQ menciona "regras de contagem do CadSUAS"** para o RMA. O RMA é normatizado pela **Resolução
   CIT 04/2011/2017** (fonte usada em todos os planos internos — BACKLOG-MVP, PLANO-RELATORIOS);
   CadSUAS é outro sistema federal (cadastro de unidades/recursos humanos do SUAS), não a norma de
   contagem do RMA. Parece confusão de nomenclatura no texto da FAQ — vale corrigir para não citar um
   sistema federal errado a um comprador que conhece a diferença.
3. **Nome da marca inconsistente entre documentos.** `sobreContent` no site expande SEIVA como
   "Sistema Eletrônico de Informação para Vigilância Assistencial"; o LEVANTAMENTO-REQUISITOS.md
   registra a decisão oficial do nome como "**Sistema Estratégico de Informação e Vigilância da
   Assistência**" (decisão de 2026-07-12). Não é uma promessa de funcionalidade, mas é uma
   inconsistência de conteúdo que vale alinhar antes de publicar mais material.
4. **Nenhum over-promise de funcionalidade identificado além do offline-ready.** Os demais itens do
   site (RMA automatizado, multi-tenant isolado, usuários ilimitados, APIs abertas, auditoria
   completa, exportação CSV/JSON/PDF, importação CadÚnico) batem com o que o BACKLOG-MVP já marca como
   ✅ concluído ou como escopo confirmado do MVP — não encontrei "feature fantasma" nesses.

---

## 6. Observações adicionais (fora do escopo estrito de cobertura, mas relevantes)

- A seção de **Screenshots** (`screenshotsContent` em `home.ts`) não é renderizada em `app/page.tsx`
  (removida no commit `19a6cb9` por falta de imagens reais) — mas o array continua no arquivo com 4
  labels, incluindo "Agenda integrada da equipe", que hoje é a única menção a essa funcionalidade em
  todo o código. Ao reintroduzir screenshots reais, isso resolve boa parte da lacuna de Agenda.
- A LP hoje é **mono-audiência** (só prefeituras/SUAS) — `content/landing/prefeituras.ts` e
  `clinicas.ts` citados no CLAUDE.md como estrutura-alvo ainda não existem; toda a auditoria acima
  assume que a LP atual é a versão "prefeituras". Não há necessidade de ação aqui, é só uma
  constatação de estado do projeto.
- Inconsistência de acentuação dentro de `home.ts` (ver §4, nota de estilo) — recomendo unificar antes
  de somar os novos bullets propostos, para não piorar a mistura.

---

## 7. Fontes lidas (resumo)

- `/home/magno/repos/personal/seiva/docs/planejamento/DFD Sistema SEDES 2026 para Matheus.pdf` — 14
  páginas, lido por completo, sem trechos ilegíveis.
- `/home/magno/repos/personal/seiva/docs/planejamento/LEVANTAMENTO-REQUISITOS.md` — completo.
- `/home/magno/repos/personal/seiva/docs/planejamento/BACKLOG-MVP.md` — completo.
- `/home/magno/repos/personal/seiva/docs/planejamento/PLANO-E7-CADASTRO.md`,
  `PLANO-E8-ATENDIMENTO.md`, `PLANO-E9-ACOMPANHAMENTO.md`, `PLANO-E10-BENEFICIOS.md`,
  `PLANO-E6-FECHAMENTO.md`, `PLANO-RELATORIOS.md`, `INTEGRACOES.md` — lidos (headers + trechos com o
  conteúdo relevante para confirmar escopo e fase).
- `MODELO-DOMINIO.md` — não lido nesta rodada; sem impacto identificado na conclusão.
- `/home/magno/repos/personal/seiva-lp/content/landing/home.ts` — completo.
- `/home/magno/repos/personal/seiva-lp/lib/faq.ts` — completo.
- `/home/magno/repos/personal/seiva-lp/components/sections/*.tsx` — `funcionalidades.tsx`,
  `preco.tsx` lidos por completo; demais (`hero.tsx`, `problemas.tsx`, `para-quem.tsx`,
  `diferenciais.tsx`, `stack.tsx`, `sobre.tsx`, `contato.tsx`, `faq-section.tsx`, `screenshots.tsx`)
  conferidos via `app/page.tsx` para saber o que é de fato renderizado.
