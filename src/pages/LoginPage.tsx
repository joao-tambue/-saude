import { Link } from "@tanstack/react-router"
import { Icon } from "../components/Icon"

export function LoginPage() {
  return (
    <div className="bg-angola-black font-body flex flex-col lg:flex-row" style={{ minHeight: "100dvh" }}>
      {/* Left panel — hero image + info */}
      <div className="relative flex-1 overflow-hidden hidden lg:flex flex-col justify-between p-12">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          style={{ aspectRatio: "9/16" }}
          src="https://storage.googleapis.com/banani-generated-images/generated-images/c722e722-ad69-4107-9100-bc22f0bf5aba.jpg"
          alt="Angola satellite map night view"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(0,30,70,0.85) 0%, rgba(0,0,0,0.6) 100%)" }} />
        <div className="relative z-10">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Icon name="shield-check" size={18} className="text-primary-foreground" />
            </div>
            <span className="font-headings font-semibold text-base text-primary-foreground tracking-tight">
              +Saúde
            </span>
          </Link>
        </div>
        <div className="relative z-10">
          <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-5 mb-6 backdrop-blur-sm max-w-[360px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 bg-accent-red rounded-full" />
              <span className="text-xs font-medium text-accent-red uppercase tracking-wide">
                Alerta Ativo · Agora
              </span>
            </div>
            <div className="text-sm font-semibold text-primary-foreground mb-1">
              Risco Elevado — Luanda Sul
            </div>
            <div className="text-xs text-primary-foreground/60 leading-relaxed">
              Sistema detetou acumulação de águas paradas em 3 municípios.
              Possibilidade de surto de malária em 9–14 dias.
            </div>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex-1 bg-primary-foreground/10 rounded-full h-1.5">
                <div className="bg-accent-red h-1.5 rounded-full" style={{ width: "78%" }} />
              </div>
              <span className="text-xs text-accent-red font-medium">78%</span>
            </div>
          </div>
          <div className="flex gap-6">
            {[
              { value: "162", label: "Municípios monitorados" },
              { value: "24/7", label: "Vigilância ativa" },
              { value: "99.2%", label: "Uptime do sistema" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-headings text-xl font-semibold text-primary-foreground">{s.value}</div>
                <div className="text-xs text-primary-foreground/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px bg-primary/20" />

      {/* Right panel — login form */}
      <div className="flex-1 bg-background flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-10 lg:py-14 w-full lg:max-w-[480px]">
        {/* Mobile logo */}
        <div className="lg:hidden flex items-center gap-2.5 mb-8">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <Icon name="shield-check" size={18} className="text-primary-foreground" />
            </div>
            <span className="font-headings font-semibold text-base text-foreground tracking-tight">
              +Saúde
            </span>
          </Link>
        </div>

        <div className="mb-8 sm:mb-10">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-2">
            Acesso Restrito
          </div>
          <h1 className="font-headings text-xl sm:text-2xl font-semibold text-foreground mb-2">
            Entrar na plataforma
          </h1>
          <p className="text-sm text-muted-foreground">
            Apenas para autoridades de saúde e pessoal credenciado.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-input rounded-md p-1 mb-6 sm:mb-7">
          <button className="flex-1 bg-surface text-foreground text-sm font-medium py-2 rounded-sm shadow-sm">
            Autoridade de Saúde
          </button>
          <button className="flex-1 text-muted-foreground text-sm font-medium py-2">
            Agente Comunitário
          </button>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5 mb-6">
          {/* Email */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">
              Email institucional
            </label>
            <div className="flex items-center gap-3 border border-border rounded-md px-4 py-3 bg-surface">
              <Icon name="mail" size={15} className="text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground">nome@minsa.gov.ao</span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">
              Palavra-passe
            </label>
            <div className="flex items-center gap-3 border border-border rounded-md px-4 py-3 bg-surface">
              <Icon name="lock" size={15} className="text-muted-foreground shrink-0" />
              <span className="text-sm text-muted-foreground flex-1">••••••••••••</span>
              <Icon name="eye-off" size={15} className="text-muted-foreground shrink-0" />
            </div>
          </div>

          {/* 2FA code */}
          <div>
            <label className="text-xs font-medium text-foreground mb-1.5 block">
              Código 2FA
            </label>
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-border bg-surface text-muted-foreground">
                  ·
                </div>
              ))}
              <div className="flex-1 border rounded-md py-3 flex items-center justify-center text-sm font-semibold border-primary bg-secondary text-primary">
                6
              </div>
            </div>
          </div>
        </div>

        {/* Remember + recover */}
        <div className="flex items-center justify-between mb-6 sm:mb-7">
          <label className="flex items-center gap-2 cursor-pointer">
            <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
              <Icon name="check" size={11} className="text-primary-foreground" />
            </div>
            <span className="text-xs text-muted-foreground">Manter sessão iniciada</span>
          </label>
          <a className="text-xs text-primary font-medium hover:underline">Recuperar acesso</a>
        </div>

        {/* Submit */}
        <button className="bg-primary text-primary-foreground text-sm font-semibold py-3.5 rounded-md flex items-center justify-center gap-2 mb-6 hover:opacity-90 transition-opacity">
          <Icon name="log-in" size={16} />
          Entrar no Sistema
        </button>

        {/* Security notice */}
        <div className="border-t border-border pt-5 sm:pt-6">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Icon name="shield" size={13} className="text-muted-foreground shrink-0" />
            <span className="text-xs text-muted-foreground">
              Acesso protegido por autenticação de dois fatores
            </span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Credenciais emitidas pelo Ministério da Saúde de Angola. Acesso
            não autorizado é criminalmente punível.
          </p>
        </div>
      </div>
    </div>
  )
}
