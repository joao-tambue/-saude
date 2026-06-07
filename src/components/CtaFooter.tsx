import { Icon } from "./Icon"

export function CtaSection() {
  return (
    <section className="bg-primary px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 text-center lg:text-left">
        <div className="max-w-lg">
          <div className="text-primary-foreground/70 text-xs sm:text-sm font-medium mb-2 sm:mb-3 uppercase tracking-widest">
            Modo SURTO ZERO
          </div>
          <h2 className="font-headings text-2xl sm:text-3xl font-semibold text-primary-foreground mb-2 sm:mb-3 leading-tight">
            Transformar dados em ação. Ação em vidas salvas.
          </h2>
          <p className="text-primary-foreground/70 text-sm sm:text-base leading-relaxed">
            O +Saúde está pronto para ser o copiloto nacional de
            prevenção epidémica de Angola. Junte-se à mudança.
          </p>
        </div>
        <div className="flex flex-col gap-3 shrink-0 w-full sm:w-auto">
          <button className="bg-primary-foreground text-primary text-sm font-semibold px-8 py-3.5 rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Solicitar Demonstração
            <Icon name="arrow-right" size={16} />
          </button>
          <a className="text-primary-foreground/80 text-xs sm:text-sm text-center flex items-center justify-center gap-1.5 hover:text-primary-foreground transition-colors">
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
    <footer className="bg-angola-black px-5 sm:px-6 lg:px-10 py-8 sm:py-10">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-0 text-center lg:text-left">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center shrink-0">
            <Icon name="shield-check" size={14} className="text-primary-foreground" />
          </div>
          <div>
            <div className="text-sm font-semibold text-primary-foreground">+Saúde</div>
            <div className="text-[10px] sm:text-xs text-primary-foreground/40">
              Sistema Inteligente de Prevenção de Surtos — Angola
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <a className="text-[10px] sm:text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Ministério da Saúde de Angola</a>
          <a className="text-[10px] sm:text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Termos de Uso</a>
          <a className="text-[10px] sm:text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">Privacidade</a>
        </div>
        <div className="text-[10px] sm:text-xs text-primary-foreground/30">
          © 2025 +Saúde. Angola.
        </div>
      </div>
    </footer>
  )
}
