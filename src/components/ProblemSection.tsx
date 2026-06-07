import { Icon } from "./Icon"

const stats = [
  { value: "367+", label: "mortes por cólera em 2025", color: "text-accent-red", bg: "bg-accent-red-bg", icon: "skull" as const, iconColor: "text-accent-red" },
  { value: "16/21", label: "províncias afetadas", color: "text-accent-orange", bg: "bg-accent-orange-bg", icon: "map-pin" as const, iconColor: "text-accent-orange" },
  { value: "+90%", label: "dos óbitos fora de unidades de saúde", color: "text-accent-yellow", bg: "bg-accent-yellow-bg", icon: "clock" as const, iconColor: "text-accent-yellow" },
  { value: "Sem IA", label: "sistema reativo, não preventivo", color: "text-muted-foreground", bg: "bg-input", icon: "trending-up" as const, iconColor: "text-muted-foreground" },
]

const beforeItems = [
  "Surto deteta-se quando há doentes",
  "Dados dispersos e desconectados",
  "Resposta tardia, recursos mal alocados",
  "Populações rurais sem informação",
  "Mortes evitáveis ocorrem",
]

const afterItems = [
  "Sinais detetados semanas antes do surto",
  "Satélites, IA e dados integrados",
  "Alertas direcionados por município",
  "SMS e USSD para zonas sem internet",
  "Vidas salvas antes de adoecerem",
]

export function ProblemSection() {
  return (
    <section className="bg-background border-b border-border px-10 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-0.5 bg-accent-red" />
          <span className="text-sm font-medium text-accent-red uppercase tracking-wide">
            O Problema
          </span>
        </div>
        <h2 className="font-headings text-3xl font-semibold text-foreground mb-4 max-w-2xl">
          Angola reage a surtos. O +Saúde prevê-os.
        </h2>
        <p className="text-base text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Os surtos raramente surgem do nada. Chuvas intensas, águas
          paradas, temperatura elevada — estes sinais existem semanas
          antes. O problema é que ninguém os estava a observar em
          conjunto.
        </p>
        <div className="grid grid-cols-4 gap-6 mb-14">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface border border-border rounded-lg p-6">
              <div className={`w-10 h-10 ${s.bg} rounded-md flex items-center justify-center mb-4`}>
                <Icon name={s.icon} size={20} className={s.iconColor} />
              </div>
              <div className={`font-headings text-2xl font-semibold mb-1 ${s.color}`}>
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          <div className="bg-surface p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-accent-red rounded-full" />
              <span className="text-sm font-semibold text-accent-red uppercase tracking-wide">
                Hoje — Sistema Reativo
              </span>
            </div>
            {beforeItems.map((item) => (
              <div key={item} className="flex items-start gap-3 mb-3">
                <Icon name="x" size={16} className="text-accent-red mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-secondary/30 p-8">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 bg-accent-green rounded-full" />
              <span className="text-sm font-semibold text-accent-green uppercase tracking-wide">
                Com +Saúde — Sistema Preventivo
              </span>
            </div>
            {afterItems.map((item) => (
              <div key={item} className="flex items-start gap-3 mb-3">
                <Icon name="check" size={16} className="text-accent-green mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
