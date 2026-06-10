import { Link, useLocation } from "@tanstack/react-router"

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ")
}

const menuIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
)

const userIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
)

const alertIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
)

const settingsIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
)

const infoIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
)

const chevronLeft = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
)

const chevronRight = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
)

const menuItems = [
  { href: "/dashboard", label: "Zonas", icon: menuIcon },
  { href: "/dashboard/population", label: "População", icon: userIcon },
  { href: "/dashboard/alert", label: "Alertas", icon: alertIcon },
]

const extraItems = [
  { href: "/settings", label: "Definições", icon: settingsIcon },
  { href: "/profile", label: "Perfil", icon: userIcon },
  { href: "/help", label: "Ajuda", icon: infoIcon },
]

interface AsideProps {
  collapsed: boolean
  onToggle: () => void
}

export default function Aside({ collapsed, onToggle }: AsideProps) {
  const { pathname } = useLocation()

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard"
    return pathname.startsWith(href)
  }

  return (
    <aside
      className={cn(
        "bg-[#F1F2F7] h-screen flex flex-col justify-between border-r border-[#E0E2EA] transition-all duration-300 shrink-0",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div>
        <div className={cn("flex items-center py-6", collapsed ? "justify-center" : "px-6 justify-between")}>
          {!collapsed && (
            // 
            <div>
              <img src="/Logo.svg" alt="Logo" className="w-auto h-10" />
            </div>
          )}
          <button
            onClick={onToggle}
            className="p-1 rounded-md hover:bg-[#E7E9F5] text-[#5A6ACF] cursor-pointer"
          >
            {collapsed ? chevronRight : chevronLeft}
          </button>
        </div>

        <nav className={cn("flex flex-col gap-1", collapsed ? "px-2" : "px-4")}>
          {menuItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "group flex items-center rounded-lg transition-all duration-200 text-sm font-medium",
                  collapsed ? "justify-center p-3" : "gap-3 px-4 py-3",
                  active
                    ? "bg-[#E7E9F5] text-[#5A6ACF]"
                    : "text-[#273240] hover:bg-[#E7E9F5] hover:text-[#5A6ACF]"
                )}
                title={collapsed ? item.label : undefined}
              >
                <span className={cn("shrink-0", active ? "scale-110" : "group-hover:scale-110")}>
                  {item.icon}
                </span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}

          <div className={cn("mt-8 mb-2 border-t border-[#E0E2EA]", collapsed ? "mx-2" : "")} />

          {extraItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.label}
                to={item.href}
                className={cn(
                  "group flex items-center rounded-lg transition-all duration-200 text-sm font-medium",
                  collapsed ? "justify-center p-3" : "gap-3 px-4 py-3",
                  active
                    ? "bg-[#E7E9F5] text-[#5A6ACF]"
                    : "text-[#273240] hover:bg-[#E7E9F5] hover:text-[#5A6ACF]"
                )}
                title={collapsed ? item.label : undefined}
              >
                <span className={cn("shrink-0", active ? "scale-110" : "group-hover:scale-110")}>
                  {item.icon}
                </span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className={cn("pb-6", collapsed ? "px-2" : "px-4")}>
        <Link
          to="/"
          className={cn(
            "group flex items-center rounded-lg transition-all duration-200 text-sm font-medium text-[#273240] hover:bg-[#E7E9F5] hover:text-[#E53E3E]",
            collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"
          )}
          title={collapsed ? "Sair" : undefined}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          {!collapsed && <span>Sair</span>}
        </Link>
      </div>
    </aside>
  )
}
