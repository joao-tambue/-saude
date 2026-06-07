import { Icon } from "./Icon"

export function HeroSection() {
  return (
    <section className="bg-surface border-b border-border px-10 pt-20 pb-0 flex gap-20 items-start">
      <div className="flex-1 max-w-xl pb-20">
        <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1.5 rounded-xl mb-6">
          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
          Angola · Plataforma Nacional de Saúde Pública
        </div>
        <h1 className="font-headings text-4xl font-semibold text-foreground leading-tight mb-5">
          Prevenir surtos
          <span className="text-primary"> antes</span>
          que aconteçam
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-8">
          O +Saúde combina satélites, inteligência artificial e dados em
          tempo real para antecipar epidemias e proteger milhões de
          angolanos — semanas antes de um surto se manifestar.
        </p>
        <div className="flex items-center gap-4 mb-10">
          <button className="bg-primary text-primary-foreground text-sm font-medium px-6 py-3 rounded-md flex items-center gap-2">
            Ver Demo ao Vivo
            <Icon name="arrow-right" size={16} />
          </button>
          <a className="text-sm font-medium text-foreground flex items-center gap-2">
            <Icon name="play-circle" size={16} />
            Ver Apresentação
          </a>
        </div>
        <div className="flex items-center gap-8 pt-6 border-t border-border">
          <div>
            <div className="font-headings text-2xl font-semibold text-foreground">
              8.500+
            </div>
            <div className="text-sm text-muted-foreground">
              casos de cólera em 2025
            </div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <div className="font-headings text-2xl font-semibold text-foreground">
              16/21
            </div>
            <div className="text-sm text-muted-foreground">
              províncias afetadas
            </div>
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <div className="font-headings text-2xl font-semibold text-accent-red">
              367+
            </div>
            <div className="text-sm text-muted-foreground">
              mortes evitáveis
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative pt-8">
        <div className="bg-background border border-border rounded-lg rounded-b-none overflow-hidden" style={{ height: 420 }}>
          <div className="bg-angola-black px-5 py-3 flex items-center gap-3 border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-accent-red opacity-70" />
              <div className="w-3 h-3 rounded-full bg-accent-yellow opacity-70" />
              <div className="w-3 h-3 rounded-full bg-accent-green opacity-70" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="bg-surface/10 text-primary-foreground/60 text-xs px-4 py-1 rounded-md font-body">
                maisaude.gov.ao/dashboard
              </div>
            </div>
          </div>
          <div className="p-5 bg-background h-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold text-foreground">
                Centro Nacional de Inteligência Epidemiológica
              </span>
              <div className="flex items-center gap-1.5 text-xs text-accent-green">
                <span className="w-1.5 h-1.5 bg-accent-green rounded-full" />
                Sistema Ativo
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { value: "3", label: "Risco Alto", color: "text-accent-red" },
                { value: "7", label: "Risco Médio", color: "text-accent-orange" },
                { value: "24", label: "Alertas Hoje", color: "text-accent-yellow" },
                { value: "148", label: "Municípios OK", color: "text-accent-green" },
              ].map((item) => (
                <div key={item.label} className="bg-surface border border-border rounded-md p-3">
                  <div className={`text-xl font-semibold ${item.color}`}>{item.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{item.label}</div>
                </div>
              ))}
            </div>
            <div className="bg-surface border border-border rounded-md overflow-hidden" style={{ height: 200 }}>
              <img
                className="w-full h-full object-cover"
                style={{ aspectRatio: "16/7" }}
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
