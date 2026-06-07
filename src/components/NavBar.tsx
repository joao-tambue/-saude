import { Icon } from "./Icon"

const navLinks = ["Início", "Solução", "Módulos", "Impacto", "Parceiros"]

export function NavBar() {
  return (
    <nav className="bg-surface border-b border-border px-10 py-0 flex items-center justify-between h-16">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Icon name="shield-check" size={18} className="text-primary-foreground" />
          </div>
          <span className="font-headings font-semibold text-base text-foreground tracking-tight">
            +Saúde
          </span>
        </div>
        <div className="w-px h-5 bg-border mx-2" />
        <span className="text-sm text-muted-foreground">
          Sistema Nacional de Prevenção de Surtos
        </span>
      </div>
      <div className="flex items-center gap-8">
        {navLinks.map((link, i) => (
          <a
            key={link}
            className={`text-sm font-medium ${i === 0 ? "text-primary" : "text-muted-foreground"}`}
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <a className="text-sm font-medium text-muted-foreground">Entrar</a>
        <button className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md">
          Solicitar Demo
        </button>
      </div>
    </nav>
  )
}
