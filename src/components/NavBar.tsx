import { useState } from "react"
import { Link } from "@tanstack/react-router"
import toast from "react-hot-toast"
import { Icon } from "./Icon"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Solução", href: "#solucao" },
  { label: "Módulos", href: "#modulos" },
  { label: "Impacto", href: "#impacto" },
  { label: "Parceiros", href: "#parceiros" },
]

function scrollTo(href: string) {
  const id = href.replace("#", "")
  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" })
    return
  }
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function NavBar() {
  const [open, setOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setOpen(false)
    scrollTo(href)
  }

  return (
    <nav id="inicio" className="bg-surface border-b border-border px-5 sm:px-6 lg:px-10 flex items-center justify-between h-16 relative z-50">
      <div className="flex items-center gap-2 lg:gap-3 min-w-0">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Icon name="shield-check" size={18} className="text-primary-foreground" />
          </div>
          <span className="font-headings font-semibold text-base text-foreground tracking-tight">
            +Saúde
          </span>
        </Link>
        <div className="hidden lg:block w-px h-5 bg-border mx-1" />
        <span className="hidden lg:block text-sm text-muted-foreground truncate">
          Sistema Nacional de Prevenção de Surtos
        </span>
      </div>

      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="hidden sm:flex items-center gap-3">
        {/* <Link
          to="/login"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Entrar
        </Link> */}
        <button
          onClick={() => toast.error("Não disponivel no momento")}
          className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap"
        >
          Solicitar Demo
        </button>
      </div>

      <button
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-muted transition-colors"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        <div className="flex flex-col gap-1">
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </div>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 bg-foreground/20 backdrop-blur-sm lg:hidden z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-16 left-0 right-0 bg-surface border-b border-border shadow-sm lg:hidden z-50">
            <div className="px-5 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-border" />
              {/* <Link
                to="/login"
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                Entrar
              </Link> */}
              <button
                onClick={() => { setOpen(false); toast.error("Não disponivel no momento") }}
                className="mt-1 bg-primary text-primary-foreground text-sm font-medium px-4 py-2.5 rounded-md hover:opacity-90 transition-opacity text-center"
              >
                Solicitar Demo
              </button>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
