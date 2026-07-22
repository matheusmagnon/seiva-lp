# CLAUDE.md — SEIVA Landing Page

Landing page de produto do **SEIVA** — SaaS de gestão de pessoas, atendimentos e agenda
para prefeituras (SUAS) e clínicas.

## Identidade visual — Direção F

A LP segue a **Direção F** ("produto calmo") do sistema SEIVA:

- **Tipografia:** Work Sans (single family, via next/font/google)
- **Cor primária:** #4763B8 (brand blue)
- **Superfícies:** fundo Cinza-Nuvem (#F3F5F9), cards brancos, sidebar Cinza-Geada (#EBEEF4)
- **Cantos:** generosos (10px)
- **Sombras:** quase nulas (flat-by-default)
- **Dark mode:** NÃO tem (single theme claro)

### Regras inquebráveis da Direção F

1. **Zero emoji** na UI — ícones = Lucide (`lucide-react`)
2. **Uma cor de destaque só** — #4763B8, com parcimônia (≤10% da tela)
3. **Nada de gradiente, glassmorphism, glow**
4. **Densidade de dado honesta** — tabelas cheias, nada de card vazio com ícone gigante
5. **Microcopy em pt-BR de repartição real** — sem "jornada do usuário", sem emoji
6. **Sombras quase nulas** — card shadow: `0 1px 2px rgba(30,40,60,0.05)`
7. **Sem segunda cor de acento** — verde/âmbar/vermelho só para estado (good/warn/crit)

## Stack

Next.js 15 (App Router) + Tailwind CSS 3 + shadcn/ui + react-hook-form + zod + Resend + Telegram.

## Relação com LPs irmãs

Componentes reutilizados (com adaptação de tokens) de:
- `../gestor-convenios-landing-page/` — arquitetura canônica
- `../terceiro-setor-tech-lp/` — hero com variante Data, componentes de portfólio

**Diferenças deliberadas desta LP:**
- Marca independente (não está sob Terceiro Setor Tech)
- Fonte Work Sans (não Public Sans + Bricolage)
- Cantos generosos e botões com border-radius 10px (não rounded-full nem rounded-md)
- Single theme claro (sem dark mode)
- Duas audiências no mesmo site (prefeituras + clínicas) com tabs
- Zero menção a Terceiro Setor Tech ou Gestor de Convênios

## Estrutura

```
app/          → Rotas (page.tsx, layout.tsx, globals.css)
components/   → Componentes reutilizáveis (header, footer, sections/, etc.)
content/      → Dados das seções (home.ts, prefeituras.ts, clinicas.ts)
lib/           → Utilitários (utils.ts, faq.ts)
public/        → Assets estáticos (logo.svg)
```

## Convenções

- Seções são data-driven: recebem props tipadas, conteúdo vive em `content/`
- Formulário de contato → Resend + Telegram (dual-channel, nunca perder lead)
- localStorage backup para submissions que falharem
- Analytics: GA4 + Clarity condicionais (só entram se env vars existirem)
