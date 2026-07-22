# Análise Competitiva — Mercado de Software para Gestão do SUAS (Brasil)

> Documento de estratégia interna do SEIVA. Julho de 2026.
> Metodologia: pesquisa em fontes públicas (sites institucionais, blogs, imprensa, Reclame Aqui, CBInsights, Google Play, portais oficiais MDS/CNM). Nenhum número foi estimado ou inventado — onde a fonte não informava um dado, isso está marcado explicitamente como **"não encontrado publicamente"**. Todas as afirmações têm URL de origem na seção de Fontes.

---

## 1. Sumário executivo

O mercado de software especializado em gestão do SUAS é pequeno, fragmentado e **dominado por um único player claro: o GESUAS** (Jungle Consultoria, Viçosa-MG, incubada na UFV/tecnoPARQ desde 2007). GESUAS declara publicamente números que variam por fonte e período (de ~90 municípios em 2019 a "mais de 170" em levantamentos mais recentes; o próprio site fala em +1.500 técnicos, +300 mil famílias e +500 mil atendimentos registrados), tem case de destaque (Porto Alegre, primeira capital a adotar, com aporte de R$ 3,5 milhões do FRBL/RS em 2023), selo GovTech da BrazilLAB, e um blog institucional extenso que funciona como motor de aquisição orgânica. Os demais especializados (SUASnet, Gestão 360 Social/Seta Sistemas, SociÁgil) são bem menores, com presença de conteúdo/SEO fraca e pouquíssima transparência de escala ou preço — nenhum dos quatro concorrentes especializados pesquisados publica tabela de preços. Os generalistas de gestão pública (Betha, IPM/Atende.Net, Fiorilli, Elotech) tratam assistência social como módulo dentro de um ERP municipal maior, não como produto dedicado — isso é uma cunha estratégica: eles vendem para quem já compra o pacote completo da prefeitura, não necessariamente para quem prioriza a secretaria de assistência social.

O SUAS é uma política nacional obrigatória (toda prefeitura tem CRAS/CREAS), então a penetração teórica é de ~5.570 municípios — mas a adoção de software dedicado ainda parece baixa: mesmo o líder de mercado atende a uma fração pequena desse universo (ordem de centenas, não milhares, de municípios). Isso sugere um mercado ainda pouco penetrado, com grande volume de prefeituras usando planilha, papel ou sistemas genéricos mal adaptados — a oportunidade central para o SEIVA não é necessariamente "roubar cliente do GESUAS", mas capturar a cauda longa de municípios pequenos/médios ainda não digitalizados, com um produto mais moderno, mais barato e com UX melhor que o padrão atual do setor (que é datado).

Um fator de risco/contexto relevante para todo o mercado: o **MDS está desenvolvendo um Prontuário Eletrônico do SUAS federal, gratuito**, com testes previstos a partir de setembro de 2025 e uma Resolução CIT nº 29/2025 (outubro de 2025) definindo diretrizes — ainda não ficou claro nas fontes públicas pesquisadas se isso será obrigatório ou substituirá sistemas privados, ou se funcionará como camada de integração/dados nacionais coexistindo com fornecedores privados (como acontece com o e-SUS na saúde). Isso deve ser monitorado de perto, pois pode tanto ameaçar quanto abrir oportunidade de posicionamento ("SEIVA já nasce integrado ao Prontuário federal").

---

## 2. Perfil detalhado: GESUAS

**Empresa:** Jungle Consultoria e Soluções Sociais Ltda. CEO: Igor Guadalupe. Sede em Viçosa (MG), incubada no tecnoPARQ (Parque Tecnológico de Viçosa, ligado à UFV) entre 2012–2016; empresa fundada em 2007/2008 (fontes divergem no ano exato — CBInsights registra 2008, uma notícia registra 2013 como marco de outro tipo).

### Funcionalidades / módulos confirmados
- **Prontuário SUAS digital**, descrito como a "primeira versão online" do prontuário físico do MDS — registro de atendimentos, famílias e indivíduos.
- **Base única de famílias**, importando dados do CadÚnico para consolidar cadastro entre todos os equipamentos socioassistenciais do município (CRAS, CREAS etc.).
- **Plano de Acompanhamento Familiar (PAF)** e **Plano Individual de Atendimento (PIA)** para medidas socioeducativas e acolhimento institucional, seguindo orientações técnicas do MDS.
- **Encaminhamentos e contrarreferência** entre unidades, com notificação de técnicos pelo próprio sistema.
- **Vigilância socioassistencial territorializada** — geração de informação por bairro/território de vulnerabilidade.
- **Benefícios eventuais**: registro e histórico de concessões.
- **Geração automática do RMA** ("em segundos", segundo o próprio site) — este é citado como diferencial forte de produto.
- **App mobile** para abordagem social e visita domiciliar, com **mapas offline e geolocalização** — funciona em campo sem conectividade (confirmado via central de suporte/Zendesk do GESUAS, que tem materiais de treinamento dedicados a essas funcionalidades).
- **Painel do gestor** com monitoramento em tempo real.
- Módulos específicos de conteúdo educativo sobre **SCFV, CRAS, CREAS e busca ativa** aparecem fortemente no blog, o que indica que o produto cobre esses fluxos, mas a página de funcionalidades do site institucional **não detalha PAIF/PAEFI como nomenclatura explícita de módulo** — o vocabulário do produto usa PAF/PIA. **Não encontrado publicamente**: se há um módulo separado nomeado "PAIF" e "PAEFI" no sistema.

### Escala / tração
- Números de clientes variam por fonte e data: ~90 municípios/12 estados (fonte de 2019), "+170 municípios" (levantamento mais recente encontrado), CBInsights registra "mais de 100 municípios em 18 estados". O próprio site institucional (2026) menciona +1.500 técnicos cadastrados, +300 mil famílias, ~1 milhão de usuários atendidos e +500 mil atendimentos registrados — esses números não são diretamente comparáveis (usuários finais atendidos vs. municípios-cliente), então há inconsistência de comunicação de métricas entre as fontes, um ponto a observar.
- **Porto Alegre** (2023) foi a primeira capital brasileira a adotar o GESUAS, com aporte de R$ 3,5 milhões via Fundo de Reconstrução de Bens Lesados (FRBL) do Ministério Público do RS, após vencer disputa entre 200+ projetos gaúchos.
- Selo **GovTech da BrazilLAB** (certificação obtida em dezembro de 2022).
- Prêmio: 1º lugar no ranking inaugural "TOP 100 Open Startups/Scale-Ups", anunciado em evento no Rio de Janeiro (Copacabana Palace) — fonte é o próprio tecnoPARQ/UFV, portanto vale checar se o ranking tem peso de mercado real ou é principalmente relações públicas.
- Concentração geográfica forte em Minas Gerais (30+ cidades listadas no site), com presença adicional em SP, PR, MT, BA, PA, PB e SC.

### Modelo comercial
**Não encontrado publicamente.** Nenhuma tabela de preços, faixa de valor por porte de município, ou modelo de licitação-padrão está disponível nos sites oficiais. O acesso a valores é via formulário "fale com consultor" (`conteudo.gesuas.com.br/fale-com-o-consultor`), típico de venda B2G consultiva. O caso de Porto Alegre indica que grandes contratos podem vir de editais/fundos específicos (FRBL), não necessariamente de assinatura SaaS recorrente simples.

### Pontos fortes
- Maturidade e tempo de mercado (quase 20 anos de empresa).
- Cobertura funcional ampla e alinhada à nomenclatura oficial do MDS (o que reduz atrito de adoção por gestores acostumados ao prontuário físico).
- App mobile com modo offline — funcionalidade rara e citada como necessidade real de campo (visitadores sociais em território sem sinal).
- **Máquina de conteúdo/SEO robusta**: blog institucional com pelo menos 16-18 categorias temáticas cobrindo desde legislação e vigilância socioassistencial até gestão de pessoas e "histórias de sucesso" (cases), reforçado por uma "Universidade GESUAS" (plataforma de treinamento/EAD, inclusive monetizada — há reclamação no Reclame Aqui sobre cobrança de mensalidade da Universidade, indicando que é um produto pago à parte).
- Validação institucional forte (UFV, BrazilLAB, MP-RS, prefeitura de capital).

### Pontos fracos / riscos identificados
- **Reputação pouco auditável**: o perfil no Reclame Aqui é da "Universidade GESUAS" (não do produto principal), com poucas reclamações avaliadas (menos de 10) — não há volume suficiente para calcular reputação, e não há selo de empresa confiável. Isso é mais sinal de baixa visibilidade pública do que de qualidade comprovada — não dá para inferir satisfação de cliente a partir disso.
- Comunicação de métricas de escala inconsistente entre fontes (ver acima), o que pode ser só desatualização de conteúdo institucional, mas dificulta benchmarking externo.
- Nenhuma transparência de preço, o que é padrão do setor mas também gera fricção para prefeituras pequenas testarem o produto sem processo de venda longo.
- Não há evidência pública de avaliações de usuários (nem apps stores nem reviews independentes) — a tentativa de leitura da ficha do app na Google Play não retornou conteúdo (limitação da pesquisa, não conclusão sobre o app).

### Estratégia de conteúdo/SEO
O Blog do GESUAS é o ativo de marketing mais visível e mais relevante para o SEIVA copiar/superar. Estrutura por categorias: Entidades Socioassistenciais, Gestão de Pessoas, Gestão do SUAS, Gestão Financeira e Orçamentária, Histórias de Sucesso, Institucional, Legislação, Materiais Gratuitos, Normativas e Orientações Técnicas, Proteção Social Básica, Proteção Social Especial, Recursos, Software Gesuas, Trabalho no SUAS, Variedades, Vigilância Socioassistencial. CTAs recorrentes: ebooks/materiais gratuitos (lead magnet), "Acesse Gesuas" (login), "Acesse Universidade" (treinamento pago). Conteúdo cobre bem temas conceituais/normativos de base (o que é CRAS, o que é CREAS, diferença CRAS x CREAS, o que é busca ativa, o que é SCFV, como preencher o prontuário) — ou seja, os termos de cauda "o que é X" do universo SUAS já estão bem ocupados por eles.

---

## 3. Perfis curtos: demais especializados

### SUASnet (suasnet.com.br)
Software 100% web/nuvem, comercializado sob licença de uso, para secretarias municipais de assistência social. Funcionalidades confirmadas no site: centralização e organização de informação, acompanhamento de casos, suporte a CRAS e CREAS, substituição de controles dispersos por processo digital. Oferece também **treinamentos** temáticos (PAIF, diretrizes técnicas de CREAS, SCFV) — modelo parecido com o da "Universidade GESUAS", em escala menor. **Não encontrado publicamente**: RMA, PAEFI como módulo nomeado, busca ativa, benefícios eventuais, app mobile, integração CadÚnico, preço, número de municípios atendidos. Presença de conteúdo/blog muito mais fraca que a do GESUAS — não aparece como fonte relevante de SEO no nicho.

### Gestão 360 Social (Seta Sistemas — setasistemas.com.br)
Parte de um portfólio maior da Seta Sistemas (que também vende para escolas, tem produto de gestão escolar). Produto "leve, moderno, 100% web". Cobre acolhimento institucional (ocupação, planos de caso), SCFV, programas de juventude/aprendizagem, educação infantil, abordagem social de rua (com geolocalização), módulos administrativos (compras, patrimônio) — ou seja, é mais amplo/genérico em assistência social do que focado estritamente em CRAS/CREAS/SUAS. Diferencial citado: app mobile com QR code e **reconhecimento facial** para controle de presença. Ativo desde 2018. **Não encontrado publicamente**: RMA, PAIF/PAEFI nomeados, integração CadÚnico detalhada, preço, nº de municípios.

### SociÁgil (sociagil.com.br)
Produto com discurso técnico mais próximo do GESUAS: menciona explicitamente **RMA automático** ("coletores inteligentes de dados... geração automática em segundos"), **Plano de Acompanhamento Familiar** (metodologia própria), **benefícios eventuais em tempo real**, monitoramento de proteção básica/especial, **app mobile de campo**, e **importação de famílias do CadÚnico com 1 clique**. Também oferece geoprocessamento, criptografia SSL e múltiplos backups. Site lista apenas ~9 clientes/municípios (SP, MT, PB, AL, RJ) na página consultada — indício de operação pequena. Tem blog cobrindo vigilância socioassistencial e gestão de OSC, mas com volume aparentemente bem menor que o do GESUAS. **Não encontrado publicamente**: preço, escala real de clientes fora da lista exibida, prêmios.

---

## 4. Nota sobre generalistas e sistemas federais

**Generalistas de ERP municipal** (Betha Sistemas, IPM/Atende.Net, Fiorilli, Elotech) tratam assistência social como um módulo dentro de uma suíte maior (tributos, folha, compras, saúde, educação, assistência social etc.), vendida como pacote único para a prefeitura via licitação. Achamos documentação pública específica para:
- **IPM (Atende.Net)**: módulo "IPM Social", cobrindo CRAS/CREAS/Centro POP, encaminhamentos, prontuário individual/familiar digital compartilhado entre servidores, 100% em nuvem.
- **Fiorilli**: módulo "SAS – Sistema de Assistência Social", com apoio a visitas domiciliares (motivo, entrevistado, parecer, composição familiar), atendimento unificado por família, e os três formulários mensais exigidos pelo SUAS (CRAS, CREAS, Centro POP).
- **Betha Sistemas** e **Elotech**: não foi encontrada documentação pública específica e detalhada de um módulo de assistência social/SUAS nestas buscas — pode existir, mas não está bem indexado ou não é destacado como produto de vitrine. **Não encontrado publicamente.**

O padrão nos generalistas é: menos profundidade funcional específica de SUAS, mas venda facilitada por já estarem dentro da prefeitura com outros contratos (folha, tributos) — o que é uma barreira real de troca de fornecedor (o gestor de assistência social frequentemente "herda" o sistema que a prefeitura já usa para tudo, em vez de escolher).

**Sistemas federais (Rede SUAS / MDS)** — moldura, não concorrente direto, mas relevante para o posicionamento:
- CadÚnico, RMA, CadSUAS e Censo SUAS são sistemas de registro/reporte obrigatórios, não ferramentas de gestão do dia a dia do técnico — todo produto privado (GESUAS, SociÁgil etc.) se posiciona como "gera o RMA automaticamente" justamente porque preencher esse relatório manualmente é uma dor real e recorrente.
- Existe um esforço federal em andamento (2025-2026) de lançar um **Prontuário Eletrônico do SUAS** oficial, público e gratuito, atualmente descrito como em fase de testes com previsão de operação a partir de setembro de 2025, atendendo (segundo o próprio MDS) mais de 1 milhão de usuários/ano com base de mais de 7 milhões de pessoas — mas isso parece referir-se ao uso agregado da ferramenta federal já existente (Prontuário SUAS/CRAS), não a um número validado de município aderentes ao novo prontuário simplificado.
- A Resolução CIT nº 29/2025 (outubro de 2025) definiu diretrizes para esse Prontuário Eletrônico do SUAS federal — **não foi possível confirmar publicamente, nas fontes acessadas, se essa resolução torna o uso obrigatório, se substitui sistemas privados, ou se estabelece apenas um padrão de interoperabilidade** (o texto completo da CNM não pôde ser acessado — retornou erro 403 — e a página oficial do MDS não detalhou obrigatoriedade). **Este é um ponto de incerteza relevante e deve ser verificado com uma fonte primária antes de qualquer decisão de posicionamento que dependa dele.**

---

## 5. Tabela comparativa

| | **GESUAS** | **SUASnet** | **Gestão 360 Social (Seta)** | **SociÁgil** | **Generalistas (Betha/IPM/Fiorilli/Elotech)** | **SEIVA (posicionamento pretendido)** |
|---|---|---|---|---|---|---|
| **Foco** | Especializado em SUAS (prontuário) | Especializado em SUAS | Assistência social ampla (inclui OSC/acolhimento) | Especializado em SUAS | Módulo dentro de ERP municipal genérico | Gestão de pessoas, atendimentos e agenda para CRAS/CREAS/SUAS + clínicas |
| **Prontuário/registro de atendimento** | Sim, digital, baseado no modelo MDS | Sim | Sim | Sim | Sim (Fiorilli e IPM confirmados) | A definir no produto |
| **RMA automático** | Sim, alegado ("em segundos") | Não encontrado | Não encontrado | Sim, alegado | Não encontrado | Oportunidade clara de diferenciação |
| **PAIF/PAEFI nomeados** | Não explícito (usa PAF/PIA) | Menciona PAIF em treinamento | Não encontrado | Menciona metodologia própria de PAF | Não encontrado | Oportunidade de usar nomenclatura oficial de forma clara |
| **Busca ativa** | Sim (app) | Não encontrado | Sim (abordagem de rua) | Não encontrado | Não encontrado | A validar |
| **SCFV** | Sim (conteúdo extenso) | Sim (treinamento) | Sim | Sim (monitoramento) | Sim (IPM/Fiorilli) | A validar |
| **Benefícios eventuais** | Sim | Não encontrado | Não encontrado | Sim (tempo real) | Não encontrado | A validar |
| **Integração CadÚnico** | Sim (importação de base) | Não encontrado | Não encontrado | Sim ("1 clique") | Não encontrado | Oportunidade — ponto de dor recorrente |
| **App mobile** | Sim, com mapas offline | Não encontrado | Sim (QR code, reconhecimento facial) | Sim (campo) | Sim (IPM tem app) | A definir — modo offline é diferencial se ausente em concorrentes menores |
| **Funcionamento offline** | Sim (confirmado) | Não encontrado | Não encontrado | Não encontrado | Não encontrado | Oportunidade se concorrentes menores não tiverem |
| **Modelo comercial/preço** | Não divulgado publicamente | Não divulgado | Não divulgado | Não divulgado | Licitação/pacote ERP, preço não divulgado | A definir — transparência de preço pode ser diferencial de confiança |
| **Escala (municípios)** | ~100–170+ (fontes divergem), 18 estados | Não encontrado | Não encontrado | ~9 clientes exibidos no site | Grande (via ERP), não segmentado por módulo SUAS | Early stage |
| **Case-âncora** | Porto Alegre (1ª capital, 2023) | Não encontrado | Não encontrado | Não encontrado | Diversos (via ERP geral) | A construir |
| **Blog/SEO** | Muito forte (16+ categorias, "Universidade") | Fraco | Fraco/quase inexistente | Moderado (blog ativo, volume baixo) | Institucional, não focado em SUAS | Oportunidade de disputar cauda longa de conteúdo técnico |
| **Prêmios/selos** | GovTech (BrazilLAB), TOP 100 Open Scale-Ups | Não encontrado | Não encontrado | Não encontrado | Diversos (empresas maiores) | A construir |

---

## 6. Gaps e oportunidades para o SEIVA

1. **Transparência de preço como diferencial de confiança.** Nenhum concorrente especializado publica preço. Prefeituras pequenas (a maioria dos ~5.570 municípios brasileiros) frequentemente não têm capacidade de conduzir um processo de venda consultivo longo. Uma página de preços clara (mesmo que por faixa de porte populacional) pode ser um diferencial de atrito baixo — e um ângulo de conteúdo forte ("quanto custa um sistema de gestão do SUAS").

2. **A cauda longa de municípios pequenos/médios não digitalizados é o alvo mais realista no curto prazo**, não a disputa direta por clientes do GESUAS em capitais. O próprio GESUAS, líder do mercado, atende a uma fração pequena do universo de municípios (dezenas a centenas, não milhares) — o mercado grosso ainda usa planilha/papel/sistemas genéricos mal adaptados.

3. **UX/design mais moderno é uma aposta razoável, mas não confirmada como fraqueza real dos concorrentes** — nenhuma fonte pesquisada trouxe evidência concreta (reviews, prints, reclamações específicas de usabilidade) de que o GESUAS ou concorrentes têm interface datada. Isso é uma hipótese de mercado comum no setor de govtech (produtos legados construídos ao longo de mais de uma década tendem a acumular dívida de UX), mas o SEIVA deveria validar isso com entrevistas reais de técnicos de CRAS/CREAS antes de apostar a proposta de valor nisso publicamente.

4. **Nomenclatura oficial (PAIF/PAEFI) como gancho de SEO e de produto.** Curiosamente, nem GESUAS nem SociÁgil parecem nomear módulos explicitamente como "PAIF" e "PAEFI" nos seus sites institucionais (usam "PAF"/"plano de acompanhamento familiar" de forma mais genérica) — isso é ao mesmo tempo um gap de conteúdo (termos de busca "sistema para PAIF", "sistema para PAEFI" parecem menos disputados) e um possível ponto de alinhamento de produto (gestores de CREAS especificamente buscam soluções que falem a língua exata da política nacional de PAEFI).

5. **Integração com o futuro Prontuário Eletrônico do SUAS federal como possível vantagem de "nascer integrado".** Como o SEIVA é um produto novo, pode se posicionar desde já como compatível/alinhado ao padrão federal em desenvolvimento — um ângulo que concorrentes legados (que construíram arquitetura própria há anos) podem ter mais atrito para adotar rapidamente. **Isso depende de confirmar primeiro o que a Resolução CIT 29/2025 realmente exige** (ver incertezas abaixo) — não avançar com essa mensagem publicamente antes de validar.

6. **Funcionamento offline e app mobile são citados como fortes só no GESUAS e parcialmente em Gestão 360/SociÁgil.** SUASnet não menciona nada disso publicamente. Isso sugere que nem todo concorrente cobre bem o cenário de visita domiciliar/busca ativa em território sem sinal — ponto de atenção de produto genuíno (técnicos de campo é onde a dor de "sistema que só funciona com internet" é mais crítica).

7. **Dupla audiência (prefeituras + clínicas) é um posicionamento que nenhum concorrente pesquisado replica.** Todos os concorrentes especializados são 100% focados em governo. Isso é ao mesmo tempo uma oportunidade (agenda e atendimento como conceito comum entre os dois públicos, eficiência de engenharia) e um risco de comunicação (o gestor público pode estranhar um produto "genérico" que também atende clínica privada) — vale testar mensagem separada por audiência, como o CLAUDE.md do projeto já prevê (tabs por audiência).

8. **Reputação/prova social é um vácuo geral no setor** — nenhum concorrente tem avaliações públicas robustas (nem Reclame Aqui, nem app stores, nem G2/Capterra aparecem com volume). Isso significa que **cases bem documentados e depoimentos em vídeo/texto de gestores reais** podem ser um diferencial de credibilidade relativamente barato de conquistar, porque a barra do mercado está baixa.

---

## 7. Implicações para o blog do SEIVA

**Onde o GESUAS já está forte (evitar competir de frente sem diferencial claro):**
- Conteúdo conceitual básico "o que é" (o que é CRAS, o que é CREAS, diferença CRAS x CREAS, o que é SCFV, o que é busca ativa, o que é PAIF/PAEFI de forma genérica) — o blog do GESUAS já tem posts otimizados para essas buscas e provavelmente tem autoridade de domínio acumulada há anos nesses termos.
- Conteúdo institucional/normativo (resoluções CNAS, orientações técnicas do MDS, conferências de assistência social) — GESUAS cobre isso de forma consistente e com frequência.
- "Como preencher o prontuário do SUAS" e temas de RMA básicos.

**Onde há espaço real para o SEIVA disputar SEO e se diferenciar:**
- **Conteúdo prático e operacional de gestão de equipe/agenda em CRAS/CREAS** — escala de plantão, dimensionamento de equipe técnica conforme NOB-RH/SUAS, gestão de agenda de atendimentos, produtividade de técnico — temas mais próximos do proposito de produto do SEIVA (pessoas + agenda) do que do foco de prontuário do GESUAS.
- **Comparativos e guias de decisão de compra** ("como escolher um sistema de gestão do SUAS", "perguntas para fazer ao fornecedor antes de contratar", "quanto custa um sistema para CRAS/CREAS") — o vácuo de transparência de preço no mercado inteiro é uma oportunidade de conteúdo que nenhum concorrente parece explorar.
- **PAIF/PAEFI com nomenclatura explícita e específica** — pouca concorrência de conteúdo usando esses termos exatos como os gestores de CREAS efetivamente buscam.
- **Conteúdo sobre o Prontuário Eletrônico do SUAS federal em si** (o que muda, o que é a Resolução CIT 29/2025, como se preparar) — é um tema novo (2025-2026), pouco coberto ainda, com potencial de ranquear cedo se o SEIVA publicar antes dos concorrentes, mas exige apuração cuidadosa antes de publicar (ver incertezas).
- **Cases e histórias de município pequeno/médio** — o GESUAS foca comunicação em Porto Alegre (capital); há espaço para o SEIVA construir presença de conteúdo junto a municípios menores, que são o público mais realista no curto prazo.
- **Conteúdo cruzando as duas audiências** (gestão de agenda/atendimento como problema comum entre CRAS/CREAS e clínicas) — território que nenhum concorrente do nicho SUAS ocupa, porque nenhum deles atende o público de clínica.

---

## 8. Incertezas e dados não confirmados (resumo)

- **Obrigatoriedade do Prontuário Eletrônico do SUAS federal**: não foi possível confirmar se a Resolução CIT nº 29/2025 torna o uso do prontuário federal obrigatório para os municípios, se substitui sistemas privados como o GESUAS, ou se é apenas um padrão de interoperabilidade/dados. A página da CNM que detalha a resolução retornou erro 403 na tentativa de acesso; recomenda-se buscar o texto oficial da resolução diretamente no site do MDS/CIT antes de qualquer decisão de posicionamento.
- **Escala real do GESUAS**: números de municípios-cliente variam significativamente entre fontes e datas (90 municípios/12 estados em 2019; "mais de 170" em fonte mais recente; "mais de 100 municípios em 18 estados" no CBInsights) — não há uma fonte única e atual que reconcilie esses números.
- **Preços de qualquer concorrente**: nenhum dos quatro especializados (GESUAS, SUASnet, Gestão 360, SociÁgil) publica valores, faixas de preço ou modelo de cobrança (por habitante, por técnico, por município) em suas páginas públicas — todos exigem contato comercial.
- **Módulos de assistência social da Betha Sistemas e Elotech**: não foi encontrada documentação pública específica; pode existir mas não está indexada/destacada publicamente, diferente de IPM e Fiorilli, que têm páginas de produto dedicadas.

---

## Fontes

- [GESUAS — Funcionalidades](https://www.gesuas.com.br/funcionalidades/)
- [GESUAS — Home institucional](https://www.gesuas.com.br/)
- [GESUAS — PV-Gesuas](https://www.gesuas.com.br/pv-gesuas/)
- [GESUAS — Conheça o Gesuas (fale com consultor)](https://conteudo.gesuas.com.br/fale-com-o-consultor)
- [Blog do GESUAS — Home](https://blog.gesuas.com.br/)
- [Blog do GESUAS — Prontuário Eletrônico SUAS: tudo que você precisa saber](https://blog.gesuas.com.br/prontuario-eletronico-suas-tudo-que-voce-precisa-saber/)
- [Blog do GESUAS — Como preencher corretamente o Prontuário do SUAS](https://blog.gesuas.com.br/como-preencher-corretamente-o-prontuario-do-suas/)
- [Blog do GESUAS — Sistemas de Gestão da Informação do MDS](https://blog.gesuas.com.br/sistemas-gestao-mds-suas/)
- [Blog do GESUAS — O que é a Busca Ativa na Assistência Social](https://blog.gesuas.com.br/busca-ativa/)
- [Blog do GESUAS — Como realizar busca ativa no meu município](https://blog.gesuas.com.br/como-realizar-busca-ativa-no-meu-municipio/)
- [Blog do GESUAS — Diferença entre CRAS e CREAS](https://blog.gesuas.com.br/diferenca-cras-creas/)
- [Blog do GESUAS — CRAS: o que é](https://blog.gesuas.com.br/cras/)
- [Blog do GESUAS — CREAS: entenda as funções](https://blog.gesuas.com.br/creas/)
- [Blog do GESUAS — SCFV](https://blog.gesuas.com.br/scfv/)
- [Zendesk GESUAS Suporte — Treinamento Aplicativo: Abordagem Social e Visita Domiciliar](https://gesuas-suporte.zendesk.com/hc/pt-br/articles/32446805708045--Aplicativo-Treinamento-sobre-o-Aplicativo-GESUAS-Funcionalidades-Abordagem-Social-e-Visita-Domiciliar-Dividido-por-blocos)
- [Zendesk GESUAS Suporte — Como usar o aplicativo GESUAS para selecionar usuário e prontuário](https://gesuas-suporte.zendesk.com/hc/pt-br/articles/31809008514061--Aplicativo-Como-usar-o-aplicativo-GESUAS-para-selecionar-usu%C3%A1rio-e-prontu%C3%A1rio)
- [BrazilLAB — Jungle Social / GESUAS (Selo GovTech)](https://brazillab.org.br/selo-govtech/certificadas/jungle-social-gesuas)
- [tecnoPARQ/UFV — GESUAS 1º lugar no ranking 100 Open Startups](https://centev.ufv.br/gesuas-solucao-desenvolvida-dentro-do-tecnoparq-e-1o-lugar-no-ranking-da-100-open-startups/)
- [CBInsights — Perfil Gesuas](https://www.cbinsights.com/company/gesuas)
- [Google Play — GESUAS (ficha do app)](https://play.google.com/store/apps/details?id=com.jungle.gesuasmobile&hl=en_US)
- [Reclame Aqui — Universidade Gesuas](https://www.reclameaqui.com.br/empresa/universidade-gesuas/)
- [Reclame Aqui — Lista de reclamações Universidade Gesuas](https://www.reclameaqui.com.br/empresa/universidade-gesuas/lista-reclamacoes/)
- [Prefeitura de Porto Alegre — Porto Alegre é a primeira capital a implantar sistema para gestão socioassistencial](https://prefeitura.poa.br/gp/noticias/porto-alegre-e-primeira-capital-implantar-sistema-para-gestao-socioassistencial)
- [ABCD Jornal — São Caetano inicia implantação do Gesuas](https://abcdjornal.com.br/sao-caetano-inicia-implantacao-do-gesuas-o-prontuario-eletronico-da-assistencia-social/)
- [Rede NN — São Caetano inicia implantação do Gesuas](https://www.redenn.com.br/noticia/sao-caetano-inicia-implantacao-do-gesuas-o-prontuario-eletronico-da-assistencia-social)
- [Seta Sistemas — Gestão 360 Social](https://setasistemas.com.br/software-assistencia-social-gestao360.html)
- [Gestão 360 — Plataforma](https://www.gestaosocial.plataformagestao360.com.br/)
- [SUASnet — Site institucional](https://www.suasnet.com.br/site/)
- [SUASnet — Home](https://suasnet.com.br/)
- [Blog Ordem Pública — SUASnet: Transformando a Gestão da Assistência Social Municipal](https://blog.ordempublica.com/arquivos/69)
- [SociÁgil — Home](https://sociagil.com.br/)
- [SociÁgil — Sistema para o SUAS](https://www.sociagil.com.br/sistema-para-o-suas)
- [SociÁgil — Sistema para o CRAS](https://www.sociagil.com.br/sistema-para-o-cras)
- [SociÁgil — OSC](https://www.sociagil.com.br/osc-organizacao-sociedade-civil)
- [IPM Sistemas — Social (assistência social)](https://www.ipm.com.br/social/)
- [IPM Sistemas — Solução IPM Social](https://www.ipm.com.br/solucoes/ipm-social/)
- [Fiorilli — SAS Sistema de Assistência Social](https://fiorilli.com.br/servicos/sas-sistema-de-assistencia-social/)
- [Blog Rede SUAS/MDS — Nota informativa: Sistema do Prontuário Eletrônico do SUAS](https://blog.mds.gov.br/redesuas/nota-informativa-sistema-do-prontuario-eletronico-do-suas/) (acesso instável — HTTP 503 no momento da consulta)
- [Rede SUAS — Prontuário (MDS)](https://redesuas.mds.gov.br/prontuario-suas/)
- [MDS — Prontuário Eletrônico Simplificado](https://www.gov.br/mds/pt-br/acoes-e-programas/suas/gestao-do-suas/vigilancia-socioassistencial-1/prontuario-eletronico-simplificado)
- [Aplicações MDS/SNAS — Novo Prontuário SUAS CRAS](https://aplicacoes.mds.gov.br/snas/prontuario-suas/)
- [Aplicações MDS — Prontuário Eletrônico do SUAS](https://aplicacoes.mds.gov.br/prontuario/)
- [Portal CNM — Publicada Resolução que define diretrizes do Prontuário Eletrônico do Suas](https://cnm.org.br/comunicacao/noticias/publicada-resolucao-que-define-diretrizes-do-prontuario-eletronico-do-suas) (acesso bloqueado — HTTP 403 no momento da consulta; conteúdo não verificado diretamente, apenas via snippet de busca)
