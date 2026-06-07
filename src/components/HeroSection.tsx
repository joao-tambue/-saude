import toast from "react-hot-toast"
import { Icon } from "./Icon"

export function HeroSection() {
  return (
    <section className="bg-surface border-b border-border px-5 sm:px-6 lg:px-10 pt-10 sm:pt-14 lg:pt-20 pb-0 flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
      <div className="flex-1 w-full lg:max-w-xl pb-0 lg:pb-20">
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-xl mb-4 sm:mb-6">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          Angola · Plataforma Nacional de Saúde Pública
        </div>
        <h1 className="font-headings text-3xl sm:text-4xl lg:text-4xl font-semibold text-foreground leading-tight mb-4 sm:mb-5">
          Prevenir surtos
          <span className="text-primary"> antes</span>
          que aconteçam
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 sm:mb-8">
          O +Saúde combina satélites, inteligência artificial e dados em
          tempo real para antecipar epidemias e proteger milhões de
          angolanos — semanas antes de um surto se manifestar.
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <button
            onClick={() => toast.error("Não disponivel no momento")}
            className="bg-primary text-primary-foreground text-sm font-medium px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            Ver Demo ao Vivo
            <Icon name="arrow-right" size={16} />
          </button>
          <button
            onClick={() => toast.error("Não disponivel no momento")}
            className="text-sm font-medium text-foreground flex items-center justify-center gap-2 hover:text-primary transition-colors"
          >
            <Icon name="play-circle" size={16} />
            Ver Apresentação
          </button>
        </div>
        <div className="flex sm:flex-row flex-wrap items-center gap-5 sm:gap-8 pt-5 sm:pt-6 border-t border-border">
          {[
            { value: "8.500+", label: "casos de cólera em 2025", color: "text-foreground" },
            { value: "16/21", label: "províncias afetadas", color: "text-foreground" },
            { value: "367+", label: "mortes evitáveis", color: "text-accent-red" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-5 sm:gap-8">
              {i > 0 && <div className="hidden sm:block w-px h-10 bg-border" />}
              <div>
                <div className={`font-headings text-xl sm:text-2xl font-semibold ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 w-full relative pt-0 lg:pt-8">
        <div className="bg-background border border-border rounded-lg lg:rounded-b-none overflow-hidden">
          <div className="bg-angola-black px-4 sm:px-5 py-3 flex items-center gap-3 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-red opacity-70" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-yellow opacity-70" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-green opacity-70" />
            </div>
            <div className="flex-1 flex justify-center min-w-0">
              <div className="bg-surface/10 text-primary-foreground/60 text-[10px] sm:text-xs px-3 sm:px-4 py-1 rounded-md font-body truncate">
                maisaude.gov.ao/dashboard
              </div>
            </div>
          </div>
          <div className="p-3 sm:p-5 bg-background">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
              <span className="text-xs sm:text-sm font-semibold text-foreground">
                Centro Nacional de Inteligência Epidemiológica
              </span>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-accent-green">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full shrink-0" />
                Sistema Ativo
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4">
              {[
                { value: "3", label: "Risco Alto", color: "text-accent-red" },
                { value: "7", label: "Risco Médio", color: "text-accent-orange" },
                { value: "24", label: "Alertas Hoje", color: "text-accent-yellow" },
                { value: "148", label: "Municípios OK", color: "text-accent-green" },
              ].map((item) => (
                <div key={item.label} className="bg-surface border border-border rounded-md p-2 sm:p-3">
                  <div className={`text-base sm:text-xl font-semibold ${item.color}`}>{item.value}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-surface border border-border rounded-md overflow-hidden" style={{ aspectRatio: "16/7" }}>
              <img
                className="w-full h-full object-cover"
                src="https://storage.googleapis.com/banani-generated-images/generated-images/80e716e3-a655-4a15-941e-d1083e8dbaf3.jpg"
                alt="Angola satellite map with disease risk heatmap"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
