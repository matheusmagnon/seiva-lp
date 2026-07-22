import {
  Users,
  FileText,
  BarChart3,
  Workflow,
  Building,
  Building2,
  HeartHandshake,
  UsersRound,
  Laptop,
  ClipboardList,
  ClipboardCheck,
  Scale,
  Coins,
  FileWarning,
  Table2,
  Shield,
  ShieldCheck,
  Search,
  ArrowLeftRight,
  Ear,
  Files,
  MessageSquare,
  ListChecks,
  Radar,
  Map,
  UserCog,
  Database,
  Landmark,
  FileBarChart,
  TrendingUp,
  Link2,
  CalendarClock,
  RefreshCw,
  type LucideIcon,
} from "lucide-react"
import { CATEGORY_LABELS, type Category } from "@/lib/blog"

// Ícone padrão por categoria — usado quando o post não define um `icon`
// próprio no frontmatter.
const CATEGORY_ICONS: Record<Category, LucideIcon> = {
  "cras-paif": Users,
  registros: FileText,
  "gestao-suas": BarChart3,
  operacao: Workflow,
}

// Nomes de ícone aceitos no frontmatter (`icon: "FileText"`), resolvidos para
// o componente Lucide correspondente. Conjunto CURADO de ícones relevantes ao
// domínio SUAS — mantido restrito de propósito (não abre qualquer nome livre
// do lucide-react) para preservar a consistência visual da Direção F.
const ICON_BY_NAME: Record<string, LucideIcon> = {
  Users,
  FileText,
  BarChart3,
  Workflow,
  Building,
  Building2,
  HeartHandshake,
  UsersRound,
  Laptop,
  ClipboardList,
  ClipboardCheck,
  Scale,
  Coins,
  FileWarning,
  Table2,
  Shield,
  ShieldCheck,
  Search,
  ArrowLeftRight,
  Ear,
  Files,
  MessageSquare,
  ListChecks,
  Radar,
  Map,
  UserCog,
  Database,
  Landmark,
  FileBarChart,
  TrendingUp,
  Link2,
  CalendarClock,
  RefreshCw,
}

function resolveIcon(category: Category, icon?: string): LucideIcon {
  if (icon && ICON_BY_NAME[icon]) return ICON_BY_NAME[icon]
  return CATEGORY_ICONS[category]
}

type PostCoverProps = {
  category: Category
  icon?: string
  variant: "card" | "hero"
  className?: string
}

export function PostCover({ category, icon, variant, className = "" }: PostCoverProps) {
  const Icon = resolveIcon(category, icon)
  const label = CATEGORY_LABELS[category]

  const isHero = variant === "hero"

  // Variante "card" vive dentro de um container já arredondado/overflow-hidden
  // (o próprio card do post na listagem) — por isso arredonda só o topo e
  // dispensa sombra própria, para não duplicar a moldura do card.
  // Variante "hero" é usada solta no topo da página do post, então recebe
  // arredondamento completo e a sombra flat padrão da Direção F.
  const shapeClasses = isHero
    ? "rounded-[10px] shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
    : "rounded-t-[10px]"

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-brand-soft ${shapeClasses} ${
        isHero ? "aspect-[3/1] min-h-[160px]" : "aspect-[16/9]"
      } ${className}`}
    >
      <div className="flex flex-col items-center gap-2">
        <Icon
          className={isHero ? "w-14 h-14 text-brand" : "w-9 h-9 text-brand"}
          strokeWidth={1.5}
          aria-hidden="true"
        />
        <span className="text-caption font-semibold text-brand tracking-wide uppercase">
          {label}
        </span>
      </div>
    </div>
  )
}
