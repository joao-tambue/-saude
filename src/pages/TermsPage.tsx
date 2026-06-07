import { Link } from "@tanstack/react-router"
import { Icon } from "../components/Icon"

export function TermsPage() {
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
          Termos de Uso
        </h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p className="text-sm leading-relaxed">
            Última atualização: Janeiro de 2026.
          </p>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">1. Aceitação dos Termos</h2>
            <p className="text-sm leading-relaxed">
              Ao aceder e utilizar a plataforma +Saúde, o utilizador declara ter lido, compreendido e aceitado
              os presentes Termos de Uso, que regulam o acesso e a utilização do Sistema Nacional de Prevenção
              de Surtos. Caso não concorde com qualquer disposição destes termos, o utilizador não deverá
              utilizar a plataforma.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">2. Descrição do Serviço</h2>
            <p className="text-sm leading-relaxed">
              O +Saúde é uma plataforma digital de inteligência epidemiológica que integra dados de satélite,
              inteligência artificial, monitorização de dados públicos e participação comunitária para
              antecipar e prevenir surtos de doenças infecciosas em Angola. O sistema destina-se a
              profissionais de saúde, autoridades governamentais, organizações internacionais e cidadãos.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">3. Responsabilidades do Utilizador</h2>
            <p className="text-sm leading-relaxed">
              O utilizador compromete-se a utilizar a plataforma de acordo com a lei, a moral, a ordem
              pública e os presentes Termos de Uso. É proibido utilizar a plataforma para fins ilícitos
              ou não autorizados, bem como interferir no funcionamento do sistema ou aceder a áreas
              restritas sem autorização prévia.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">4. Propriedade Intelectual</h2>
            <p className="text-sm leading-relaxed">
              Todo o conteúdo, design, logótipos, códigos e funcionalidades da plataforma +Saúde são
              propriedade exclusiva da Lactus Tech e do Ministério da Saúde de Angola, estando protegidos
              pelas leis de propriedade intelectual em vigor. É expressamente proibida a reprodução,
              distribuição ou modificação não autorizada de qualquer conteúdo.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">5. Limitação de Responsabilidade</h2>
            <p className="text-sm leading-relaxed">
              A plataforma +Saúde é fornecida "como está", sem garantias de disponibilidade contínua ou
              ininterrupta. A Lactus Tech não se responsabiliza por decisões tomadas com base nas
              informações fornecidas pelo sistema, nem por danos diretos ou indiretos decorrentes da
              utilização ou impossibilidade de utilização da plataforma.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">6. Alterações aos Termos</h2>
            <p className="text-sm leading-relaxed">
              A Lactus Tech reserva-se o direito de modificar estes Termos de Uso a qualquer momento,
              mediante notificação prévia aos utilizadores registados. O uso continuado da plataforma
              após a publicação de alterações constitui aceitação dos novos termos.
            </p>
          </section>
          <section>
            <h2 className="font-headings text-lg font-semibold text-foreground mb-3">7. Contacto</h2>
            <p className="text-sm leading-relaxed">
              Para esclarecimentos ou questões relacionadas com estes Termos de Uso, o utilizador pode
              contactar a equipa do +Saúde através do email: legal@maisaude.gov.ao.
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
