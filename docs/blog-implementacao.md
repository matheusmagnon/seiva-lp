# Blog SEIVA — plano de implementação (prompts prontos)

Blog de conteúdo SUAS/CRAS na LP do SEIVA, com dois objetivos: **atrair tráfego orgânico**
(autoridade tópica no Google) e **converter leitores em leads** (demonstração via `/#contato`).

Foco **exclusivo em prefeituras/SUAS** — sem público de clínicas.

Arquitetura escolhida: **abordagem caseira do Gestor de Convênios** (Markdown + `gray-matter` +
`remark`, 100% SSG, sem MDX runtime / CMS).

> Execute os 3 prompts abaixo **em ordem**, um por vez, em sessões novas do Claude Code dentro
> deste repositório (`/home/magno/repos/personal/seiva-lp`). Cada prompt é autocontido.

---

## Contexto de referência (comum aos prompts)

**Implementação de referência a copiar** — `/home/magno/repos/personal/gestor-convenios-landing-page/`:
- `app/lib/blog.ts` — motor: `getPosts()` (lista frontmatter, ordena por data desc), `getPost(slug)` (renderiza HTML). `gray-matter` + `remark`/`remark-gfm`/`remark-html`.
- `app/blog/page.tsx` — listagem SSG, filtro por categoria via query param, paginação (9/página).
- `app/blog/[slug]/page.tsx` — `generateStaticParams` + `generateMetadata` + JSON-LD `Article` + `dangerouslySetInnerHTML` com `prose` + CTA fixo + "Leia também" + prev/next.
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` (`next/og`).
- `content/blog/*.mdx` — frontmatter: `title, description, date, slug, category, keywords[], readingTime`.

**Arquivos-alvo no SEIVA:**
- `components/landing-header.tsx` — nav é um array único `NAV_LINKS` (alimenta desktop + mobile).
- `components/landing-footer.tsx` — footer com colunas de nav.
- `app/layout.tsx` — metadata global; OG **hoje sem imagem**; GA4/Clarity condicionais.
- `app/sitemap.ts` / `app/robots.ts` — hoje estáticos (4 URLs).
- `lib/faq.ts` — define `faqSchema` (JSON-LD FAQPage) que **nunca é renderizado** (injetar na home).
- Formulário de lead: `components/contact-form.tsx` + `app/api/send-email/route.ts` (Resend + Telegram). CTA do blog aponta para `/#contato`.

**Regras da Direção F (inquebráveis):**
- Fonte **Work Sans** (`var(--font-work-sans)`) — NÃO Manrope.
- Cor primária **#4763B8** (tokens `brand`/`brand.dark`/`brand.soft`/`brand.ink` no `tailwind.config.ts`).
- Radius **10px**, sombras quase nulas (`0 1px 2px rgba(30,40,60,0.05)`), **zero emoji**, ícones = `lucide-react`.
- **Sem dark mode.** Uma cor de acento só. Sem gradiente/glow.

**Categorias do blog:** `cras-paif`, `registros`, `gestao-suas`, `operacao`.

---

## Prompt 1 — Infra do blog (código) + correções

```
Vou construir um blog na LP do SEIVA (este repo). A arquitetura de referência já existe e
funciona na LP irmã em /home/magno/repos/personal/gestor-convenios-landing-page/ — quero
COPIAR e ADAPTAR essa abordagem caseira (Markdown + gray-matter + remark, 100% SSG, SEM MDX
runtime / contentlayer / CMS).

Primeiro leia, para entender o padrão a replicar:
- gestor: app/lib/blog.ts, app/blog/page.tsx, app/blog/[slug]/page.tsx, app/sitemap.ts,
  app/robots.ts, app/opengraph-image.tsx, e 1 exemplo em content/blog/*.mdx
- seiva (este repo): app/layout.tsx, app/sitemap.ts, app/robots.ts, components/landing-header.tsx,
  components/landing-footer.tsx, lib/faq.ts, tailwind.config.ts, app/globals.css

Depois implemente, respeitando a Direção F do SEIVA (Work Sans; cor primária #4763B8 via tokens
`brand` do tailwind.config; radius 10px; sombras quase nulas; ZERO emoji; ícones lucide-react;
sem dark mode; uma cor de acento só):

1. Adicione as deps: gray-matter, remark, remark-gfm, remark-html, reading-time e
   @tailwindcss/typography (dev). Registre o plugin typography no tailwind.config.ts.
2. Crie lib/blog.ts (equivalente ao app/lib/blog.ts do gestor): getPosts() e getPost(slug).
   Tipos Post/PostMeta e Category = 'cras-paif' | 'registros' | 'gestao-suas' | 'operacao'.
   MELHORIA: calcule readingTime AUTOMATICAMENTE com `reading-time` (não leia do frontmatter).
3. Crie content/blog/ e escreva 1 post-semente real de exemplo (tema: "O que é o CRAS e como
   funciona o PAIF", category cras-paif) — frontmatter: title, description, date, slug,
   category, keywords[]. Markdown puro, pt-BR de repartição real, sem emoji.
4. Crie app/blog/page.tsx (listagem SSG): grid de cards (Work Sans, radius 10px, sombra flat),
   filtro por categoria via query param com contadores, paginação 9/página. metadata própria.
5. Crie app/blog/[slug]/page.tsx: generateStaticParams + generateMetadata (OG type:article,
   publishedTime, keywords). MELHORIAS vs gestor: (a) alternates.canonical POR post;
   (b) "Leia também" filtrado POR CATEGORIA (fallback: mais recentes) — não só os 3 recentes.
   JSON-LD Article inline. Corpo com <article className="prose ..."> estilizado na Direção F
   (links #4763B8, headings Work Sans). CTA fixo no fim → botão "Agende uma demonstração"
   apontando para /#contato. Navegação prev/next.
6. Adicione o link do blog na navegação: em components/landing-header.tsx inclua
   { href: "/blog", label: "Blog" } no array NAV_LINKS; adicione também no footer.
   ATENÇÃO: os links atuais do header são âncoras (#funcionalidades etc.) — garanta que, estando
   em /blog, esses âncoras continuem apontando para a home (prefixe com "/" se necessário).
7. Migre app/sitemap.ts de estático para dinâmico: mantenha as rotas fixas e faça spread dos
   posts via getPosts() (/blog/${slug}, lastModified da data do post).
8. Injete finalmente o faqSchema de lib/faq.ts (JSON-LD FAQPage) na home (app/page.tsx) — hoje
   ele está definido e nunca é renderizado.
9. Corrija o CLAUDE.md: a fonte real é Work Sans, não Manrope (o commit 90cdf7a trocou; o
   CLAUDE.md ficou desatualizado nas linhas que citam Manrope).

Ao final, rode o build (npm run build) e confirme que /blog e /blog/[slug] geram estáticos sem
erro. Não use emoji em lugar nenhum da UI.
```

---

## Prompt 2 — OG image dinâmica + verificação SEO

```
O blog do SEIVA já está implementado (rotas /blog e /blog/[slug], lib/blog.ts, sitemap dinâmico).
Agora quero a OG image e fechar o SEO técnico. Referência: app/opengraph-image.tsx da LP em
/home/magno/repos/personal/gestor-convenios-landing-page/ (usa next/og ImageResponse, 1200x630).

1. Crie app/opengraph-image.tsx (OG global do SEIVA) na Direção F: fundo claro, cor #4763B8,
   Work Sans, logo/nome SEIVA, sem gradiente/glow, sem emoji. Hoje o SEIVA não tem NENHUMA OG
   image — isso preenche layout.tsx (openGraph/twitter sem images) também.
   GOTCHA CRÍTICO a replicar do gestor: qualquer fs.readFileSync (fontes .woff, imagem) deve
   ficar DENTRO do handler, nunca no top-level — no top-level quebra a rota /blog com ENOENT no
   bundle serverless.
2. Crie app/blog/[slug]/opengraph-image.tsx: OG image dinâmica POR post (título do post sobre o
   template Direção F). Melhoria sobre o gestor, que só tem OG global.
3. Verifique/complete metadata: layout.tsx com openGraph.images e twitter.images apontando para a
   OG; confirme metadataBase e title.template.
4. Rode npm run build e confirme que as rotas de imagem e todo o blog compilam.
```

---

## Prompt 3 — Conteúdo (10 posts SUAS)

```
O blog do SEIVA (LP para prefeituras/SUAS) está pronto tecnicamente. Escreva 10 posts em
content/blog/*.md, foco EXCLUSIVO em SUAS/CRAS (sem clínicas), pt-BR de repartição real, sem
emoji, 1200–2000 palavras cada, com 2–4 links internos entre posts (interlinking SEO).

Frontmatter de cada post: title, description, date, slug, category, keywords[].
Categorias: cras-paif | registros | gestao-suas | operacao.

Clusters (pilar + satélites):
- cras-paif: "O que é o CRAS e como funciona o PAIF" (pilar); acolhida no CRAS; atendimento
  particularizado; grupos do SCFV; busca ativa.
- registros: prontuário SUAS; como preencher o RMA sem retrabalho; Prontuário Eletrônico do SUAS;
  CadÚnico x prontuário.
- gestao-suas: NOB-SUAS na prática; IGD e cofinanciamento; Plano de Assistência Social;
  indicadores de vigilância socioassistencial.
- operacao (maior conversão): "Como parar de perder atendimento em planilha no CRAS"; "RMA sem
  retrabalho"; "Planilha vs sistema especializado no SUAS".

Escolha 10 desses cobrindo os 4 clusters (priorize o pilar cras-paif + os de 'operacao', que
convertem melhor). Cada post termina com uma frase natural convidando à demonstração (o CTA fixo
para /#contato já é renderizado pelo template). Datas escalonadas terminando em 2026-07-21.
Depois rode npm run build.
```

---

## Fase 3 (pós-lançamento, sem prompt fixo)

- Cadastrar sitemap no Google Search Console; acompanhar impressões/cliques/posição.
- Evento GA4 no clique do CTA `/#contato` vindo do blog (atribuir leads ao blog).
- Ler Clarity (tempo na página, scroll) e iterar títulos/meta description.
- Expandir os clusters que rankearem; cadência ~2 posts/semana.
