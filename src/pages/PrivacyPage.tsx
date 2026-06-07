import { Link } from "@tanstack/react-router"
import { Icon } from "../components/Icon"

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-surface border-b border-border px-5 sm:px-6 lg:px-10 flex items-center h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
            <Icon name="shield-check" size={18} className="text-primary-foreground" />
          </div>
          <span className="font-headings font-semibold text-base text-foreground tracking-tight">
            +Saúde
          </span>
        </Link>
      </header>
      <main className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10 py-14 sm:py-20">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
          <Icon name="arrow-right" size={14} className="rotate-180" />
          Voltar
        </Link>
        <h1 className="font-headings text-2xl sm:text-3xl font-semibold text-foreground mb-8">
          Política de Privacidade
        </h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p className="text-sm leading-relaxed">
            Última atualização: Janeiro de 2026.
          </p>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">1. Introdução</h2>
            <p className="text-sm leading-relaxed">
              A presente Política de Privacidade descreve como a Lactus Tech, em parceria com o Ministério
              da Saúde de Angola, recolhe, utiliza, armazena e protege os dados pessoais dos utilizadores
              da plataforma +Saúde, em conformidade com a Lei de Proteção de Dados Pessoais de Angola.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">2. Dados Recolhidos</h2>
            <p className="text-sm leading-relaxed">
              A plataforma +Saúde pode recolher os seguintes dados pessoais:
            </p>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-2">
              <li>Nome, email e perfil profissional (para criação de conta);</li>
              <li>Localização geográfica (para alertas personalizados);</li>
              <li>Dados de navegação e interação com a plataforma (cookies analíticos);</li>
              <li>Informações reportadas voluntariamente no âmbito da participação comunitária.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">3. Finalidade do Tratamento</h2>
            <p className="text-sm leading-relaxed">
              Os dados pessoais recolhidos destinam-se exclusivamente a:
            </p>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-2">
              <li>Operar e melhorar a plataforma +Saúde;</li>
              <li>Emitir alertas personalizados de prevenção de surtos;</li>
              <li>Gerar relatórios agregados e anonimizados para autoridades de saúde;</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">4. Cookies</h2>
            <p className="text-sm leading-relaxed">
              A plataforma +Saúde utiliza cookies e tecnologias semelhantes para melhorar a experiência
              do utilizador, analisar o tráfego e garantir a segurança do sistema. O utilizador pode
              configurar as suas preferências de cookies no momento do primeiro acesso ou a qualquer
              momento através das definições do navegador.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">5. Partilha de Dados</h2>
            <p className="text-sm leading-relaxed">
              A Lactus Tech não partilha dados pessoais identificáveis com terceiros, exceto:
            </p>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-2">
              <li>Com o Ministério da Saúde de Angola, no âmbito da operação do sistema;</li>
              <li>Por obrigação legal ou ordem judicial;</li>
              <li>Com consentimento explícito do utilizador.</li>
            </ul>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">6. Segurança dos Dados</h2>
            <p className="text-sm leading-relaxed">
              A Lactus Tech implementa medidas técnicas e organizacionais adequadas para proteger os
              dados pessoais contra acesso não autorizado, perda, destruição ou divulgação, incluindo
              encriptação, controlo de acesso e auditorias regulares de segurança.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">7. Direitos do Utilizador</h2>
            <p className="text-sm leading-relaxed">
              O utilizador tem direito a aceder, retificar, eliminar e portar os seus dados pessoais,
              bem como a limitar ou opor-se ao seu tratamento. Para exercer estes direitos, deve
              contactar-nos através do email: privacidade@maisaude.gov.ao.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">8. Contacto do Encarregado de Proteção de Dados</h2>
            <p className="text-sm leading-relaxed">
              Para questões relacionadas com a proteção de dados pessoais, pode contactar o Encarregado
              de Proteção de Dados (DPO) através do email: dpo@maisaude.gov.ao.
            </p>
          </section>
        </div>
      </main>
      <footer className="border-t border-border px-5 sm:px-6 lg:px-10 py-6">
        <div className="max-w-3xl mx-auto text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} +Saúde — Lactus Tech &amp; Ministério da Saúde de Angola
        </div>
      </footer>
    </div>
  )
}
