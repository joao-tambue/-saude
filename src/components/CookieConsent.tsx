import { useState, useEffect } from "react"
import { Icon } from "./Icon"

const COOKIE_CONSENT_KEY = "maisaude_cookie_consent"

type ConsentChoice = "accepted" | "rejected" | null

export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentChoice>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (stored !== "accepted" && stored !== "rejected") {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    setConsent("accepted")
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected")
    setConsent("rejected")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-5">
      <div
        className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
        onClick={handleReject}
      />
      <div className="relative bg-surface border border-border rounded-t-xl sm:rounded-xl shadow-lg w-full sm:max-w-lg p-5 sm:p-6 animate-in slide-in-from-bottom">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center shrink-0">
            <Icon name="shield-check" size={18} className="text-primary" />
          </div>
          <div className="min-w-0">
            <h3 className="font-headings text-base font-semibold text-foreground">
              Cookies e Privacidade
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">
              O +Saúde utiliza cookies para melhorar a sua experiência, analisar o tráfego e
              garantir a segurança da plataforma. Pode aceitar todos os cookies ou rejeitar os
              cookies não essenciais.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 mt-4 sm:mt-5">
          <button
            onClick={handleReject}
            className="flex-1 text-sm font-medium text-foreground bg-input hover:bg-border transition-colors px-4 py-2.5 rounded-md"
          >
            Rejeitar
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 text-sm font-medium text-primary-foreground bg-primary hover:opacity-90 transition-opacity px-4 py-2.5 rounded-md"
          >
            Permitir Todos
          </button>
        </div>
      </div>
    </div>
  )
}
