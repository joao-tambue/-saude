import { Icon, type IconName } from "./Icon"

const modules = [
  {
    num: "01",
    icon: "satellite" as IconName,
    title: "Observação por Satélite",
    desc: "Monitora chuvas, inundações, águas paradas e crescimento urbano. Identifica zonas de risco antes da propagação de doenças.",
    tags: ["ESA Sentinel", "NASA MODIS", "Tempo real"],
  },
  {
    num: "02",
    icon: "brain" as IconName,
    title: "Inteligência Artificial Preditiva",
    desc: "Cruza dados climáticos, histórico de surtos e variáveis geográficas para calcular o risco por município com semanas de antecedência.",
    tags: ["Machine Learning", "Previsão 14 dias", "Por município"],
  },
  {
    num: "03",
    icon: "newspaper" as IconName,
    title: "Monitorização de Dados Públicos",
    desc: "Analisa jornais, relatórios da OMS e comunicados oficiais para detetar sinais precoces antes da confirmação laboratorial.",
    tags: ["NLP", "OMS", "MINSA"],
  },
  {
    num: "04",
    icon: "users" as IconName,
    title: "Participação Comunitária",
    desc: "Cidadãos reportam água parada, lixo e inundações. A IA analisa imagens e classifica o risco automaticamente.",
    tags: ["Crowdsourcing", "App + SMS", "IA Visual"],
  },
  {
    num: "05",
    icon: "bell" as IconName,
    title: "Sistema de Alertas Preventivos",
    desc: "Notificações personalizadas por zona geográfica: risco de malária, cólera e recomendações de prevenção antes da doença.",
    tags: ["Push", "SMS/USSD", "Por bairro"],
  },
  {
    num: "06",
    icon: "layout-dashboard" as IconName,
    title: "Centro Nacional de Inteligência",
    desc: "Painel para autoridades com mapa nacional de risco, classificação por cores e recomendações de intervenção por município.",
    tags: ["Dashboard", "Mapa ao vivo", "Autoridades"],
  },
]

export function ModulesSection() {
  return (
    <section className="bg-surface border-b border-border px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-0.5 bg-primary" />
          <span className="text-sm font-medium text-primary uppercase tracking-widest text-xs sm:text-sm">
            Como Funciona
          </span>
        </div>
        <h2 className="font-headings text-2xl sm:text-3xl font-semibold text-foreground mb-2 sm:mb-3">
          Seis módulos, um sistema integrado
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-10 sm:mb-12 max-w-xl leading-relaxed">
          Cada módulo opera de forma independente mas conectada, formando
          uma rede de prevenção nacional.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {modules.map((m) => (
            <div key={m.num} className="bg-background border border-border rounded-lg p-5 sm:p-6 flex flex-col gap-3 sm:gap-4 hover:border-primary/30 transition-colors">
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-secondary rounded-md flex items-center justify-center shrink-0">
                  <Icon name={m.icon} size={18} className="text-primary" />
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-muted-foreground">{m.num}</span>
              </div>
              <div>
                <div className="font-headings text-sm sm:text-base font-semibold text-foreground mb-1.5 sm:mb-2">
                  {m.title}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {m.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {m.tags.map((tag) => (
                  <span key={tag} className="text-[10px] sm:text-xs bg-input text-muted-foreground px-2 py-1 rounded-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
