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
    <section className="bg-background border-b border-border px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-0.5 bg-accent-green shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-accent-green uppercase tracking-widest">
                Impacto
              </span>
            </div>
            <h2 className="font-headings text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
              Uma mudança real para Angola
            </h2>
            <div className="flex flex-col gap-5 sm:gap-6">
              {impactItems.map((item) => (
                <div key={item.title} className="flex gap-3 sm:gap-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 bg-accent-green-bg rounded-md flex items-center justify-center shrink-0">
                    <Icon name={item.icon} size={16} className="text-accent-green" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground mb-0.5 sm:mb-1">{item.title}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-4 h-0.5 bg-primary shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-widest">
                Público-Alvo
              </span>
            </div>
            <h2 className="font-headings text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8">
              Para quem foi construído
            </h2>
            <div className="flex flex-col gap-2 sm:gap-3 mb-8 sm:mb-10">
              {audienceItems.map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-surface border border-border rounded-md px-3 sm:px-4 py-2.5 sm:py-3">
                  <Icon name={item.icon} size={14} className="text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="bg-surface border border-border rounded-lg p-4 sm:p-5">
              <div className="text-[10px] sm:text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                Doenças Monitorizadas
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {diseases.map((d) => (
                  <span key={d} className="text-xs sm:text-sm bg-secondary text-secondary-foreground px-2.5 sm:px-3 py-1 rounded-xl font-medium">
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
