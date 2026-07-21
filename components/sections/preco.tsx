const PRICING_PREFEITURAS = [
  {
    label: "Pequeno I",
    porte: "Até 20 mil habitantes",
    preco: "R$ 1.490",
    setup: "R$ 2.980",
    destaque: false,
  },
  {
    label: "Pequeno II",
    porte: "20 mil a 50 mil habitantes",
    preco: "R$ 1.990",
    setup: "R$ 3.980",
    destaque: true,
  },
  {
    label: "Médio",
    porte: "50 mil a 100 mil habitantes",
    preco: "R$ 2.790",
    setup: "R$ 5.580",
    destaque: false,
  },
  {
    label: "Grande",
    porte: "Acima de 100 mil habitantes",
    preco: "R$ 3.990",
    setup: "R$ 7.980",
    destaque: false,
  },
]

export function Preco() {
  return (
    <section id="preco" className="max-w-6xl mx-auto px-4 py-20 md:py-28">
      <div className="text-center mb-10">
        <h2 className="text-h2 font-bold mb-4 text-ink">Preços de referência</h2>
        <p className="text-lead text-ink-2 max-w-2xl mx-auto">
          Valores proporcionais ao porte do município. Toda proposta é personalizada conforme o escopo contratado.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {PRICING_PREFEITURAS.map((plan) => (
          <div
            key={plan.label}
            className={`bg-white p-7 rounded-3xl border ${
              plan.destaque
                ? "border-brand shadow-[0_1px_2px_rgba(30,40,60,0.05)] ring-1 ring-brand"
                : "border-[#E6EAF0] shadow-[0_1px_2px_rgba(30,40,60,0.05)]"
            } flex flex-col`}
          >
            {plan.destaque && (
              <span className="text-caption font-semibold text-brand bg-brand-soft px-3 py-1 rounded-full self-start mb-4">
                Mais comum
              </span>
            )}
            <h3 className="text-h4 font-semibold text-ink mb-1">
              {plan.label}
            </h3>
            <p className="text-small text-ink-3 mb-5">{plan.porte}</p>
            <div className="mb-1">
              <span className="text-h2 font-extrabold text-brand">
                {plan.preco}
              </span>
              <span className="text-body text-ink-3">/mês</span>
            </div>
            <p className="text-caption text-ink-3 mb-6">
              Setup: {plan.setup} (único)
            </p>
            <a
              href="#contato"
              className={`mt-auto inline-flex items-center justify-center min-h-[48px] px-5 rounded-[10px] text-small font-semibold transition-colors ${
                plan.destaque
                  ? "bg-brand text-white hover:bg-brand-dark"
                  : "border border-[#E6EAF0] text-ink hover:bg-[#EBEEF4]"
              }`}
            >
              Solicitar proposta
            </a>
          </div>
        ))}
      </div>
      <p className="text-center text-caption text-ink-3 mt-6">
        Sob consulta. Preços de referência — proposta personalizada conforme o porte e escopo.
      </p>
    </section>
  )
}
