import { Icon, type IconName } from "./Icon"

const impactItems = [
  { icon: "heart-pulse" as IconName, title: "Vidas salvas", desc: "Redução de mortes evitáveis por malária, cólera, dengue e outras doenças infecciosas." },
  { icon: "zap" as IconName, title: "Resposta mais rápida", desc: "Alertas com 7 a 14 dias de antecedência permitem mobilizar recursos antes do surto." },
  { icon: "coins" as IconName, title: "Eficiência de recursos", desc: "Alocação direcionada do orçamento de saúde pública com base em risco real." },
  { icon: "globe" as IconName, title: "Resiliência climática", desc: "Adaptação às mudanças climáticas com prevenção orientada por dados ambientais." },
]

const audienceItems = [
  { icon: "landmark" as IconName, label: "Ministério da Saúde" },
  { icon: "building-2" as IconName, label: "Governos Provinciais" },
  { icon: "stethoscope" as IconName, label: "Profissionais de Saúde" },
  { icon: "users" as IconName, label: "Cidadãos Angolanos" },
  { icon: "globe-2" as IconName, label: "OMS & UNICEF" },
]

const diseases = ["Malária", "Cólera", "Dengue", "Febre-amarela", "Chikungunya"]

export function ImpactSection() {
  return (
    <section className="bg-background border-b border-border px-10 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-0.5 bg-accent-green" />
              <span className="text-sm font-medium text-accent-green uppercase tracking-wide">
                Impacto
              </span>
            </div>
            <h2 className="font-headings text-2xl font-semibold text-foreground mb-8">
              Uma mudança real para Angola
            </h2>
            <div className="flex flex-col gap-6">
              {impactItems.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-9 h-9 bg-accent-green-bg rounded-md flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={18} className="text-accent-green" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground mb-1">{item.title}</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-0.5 bg-primary" />
              <span className="text-sm font-medium text-primary uppercase tracking-wide">
                Público-Alvo
              </span>
            </div>
            <h2 className="font-headings text-2xl font-semibold text-foreground mb-8">
              Para quem foi construído
            </h2>
            <div className="flex flex-col gap-3 mb-10">
              {audienceItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-surface border border-border rounded-md px-4 py-3">
                  <Icon name={item.icon} size={16} className="text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="bg-surface border border-border rounded-lg p-5">
              <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-3">
                Doenças Monitorizadas
              </div>
              <div className="flex flex-wrap gap-2">
                {diseases.map((d) => (
                  <span key={d} className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-xl font-medium">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
