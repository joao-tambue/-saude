import { Icon } from "./Icon"

export function CtaSection() {
  return (
    <section className="bg-primary px-10 py-20">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <div className="text-primary-foreground/70 text-sm font-medium mb-3 uppercase tracking-wide">
            Modo SURTO ZERO
          </div>
          <h2 className="font-headings text-3xl font-semibold text-primary-foreground mb-3 max-w-lg leading-tight">
            Transformar dados em ação. Ação em vidas salvas.
          </h2>
          <p className="text-primary-foreground/70 text-base max-w-md leading-relaxed">
            O +Saúde está pronto para ser o copiloto nacional de
            prevenção epidémica de Angola. Junte-se à mudança.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0">
          <button className="bg-primary-foreground text-primary text-sm font-semibold px-8 py-3.5 rounded-md flex items-center gap-2">
            Solicitar Demonstração
            <Icon name="arrow-right" size={16} />
          </button>
          <a className="text-primary-foreground/80 text-sm text-center flex items-center justify-center gap-1.5">
            <Icon name="download" size={14} />
            Descarregar Dossier Técnico
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-angola-black px-10 py-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
            <Icon name="shield-check" size={14} className="text-primary-foreground" />
          </div>
          <div>
            <div className="text-sm font-semibold text-primary-foreground">+Saúde</div>
            <div className="text-xs text-primary-foreground/40">
              Sistema Inteligente de Prevenção de Surtos — Angola
            </div>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <a className="text-xs text-primary-foreground/50">Ministério da Saúde de Angola</a>
          <a className="text-xs text-primary-foreground/50">Termos de Uso</a>
          <a className="text-xs text-primary-foreground/50">Privacidade</a>
        </div>
        <div className="text-xs text-primary-foreground/30">
          © 2025 +Saúde. Angola.
        </div>
      </div>
    </footer>
  )
}
