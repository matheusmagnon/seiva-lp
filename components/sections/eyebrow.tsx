export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-caption font-semibold uppercase tracking-[0.1em] text-primary mb-4">
      <span className="w-6 h-px bg-primary shrink-0" aria-hidden="true" />
      {children}
    </p>
  )
}
