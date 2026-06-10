import { useState, useMemo } from "react"
import { ChevronDown, Calendar, SlidersHorizontal, Pencil, Trash2, MoreVertical, ChevronLeft, ChevronRight } from "lucide-react"
import { mockReports, type Report, type ReportStatus } from "../../data/data"
import toast from "react-hot-toast"

const PAGE_SIZE = 10

const statusLabels: Record<ReportStatus, string> = {
  pendente: "Pendente",
  enviado: "Enviado",
  rejeitado: "Rejeitado",
  aprovado: "Aprovado",
}

function riskColor(value: number) {
  if (value >= 80) return "text-red-500"
  if (value >= 60) return "text-orange-400"
  return "text-green-500"
}

export default function PopulationPage() {
  const [statusFilter, setStatusFilter] = useState<ReportStatus | "todos">("todos")
  const [statusOpen, setStatusOpen] = useState(false)
  const [dateFrom, setDateFrom] = useState("")
  const [dateTo, setDateTo] = useState("")
  const [page, setPage] = useState(1)

  // ── estado da tabela ───────────────────────────────────────────────────────
  const [data, setData] = useState<Report[]>(mockReports)
  const [openMenuId, setOpenMenuId] = useState<string | null>(null)

  // ── dados filtrados + paginados ────────────────────────────────────────────
  const filtered = useMemo(() => {
    return data.filter((r) => {
      if (statusFilter !== "todos" && r.status !== statusFilter) return false
      return true
    })
  }, [data, statusFilter])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  // ── acções dos botões ──────────────────────────────────────────────────────
  function handleEnviar(report: Report) {
    setData((prev) =>
      prev.map((r) => (r.id === report.id ? { ...r, status: "enviado" } : r))
    )
    toast.success(`Relatório de "${report.nome}" enviado com sucesso!`)
  }

  function handleEditar(report: Report) {
    toast(`A editar "${report.nome}"…`, { icon: "✏️" })
  }

  function handleEliminar(report: Report) {
    setData((prev) => prev.filter((r) => r.id !== report.id))
    toast.error(`Relatório de "${report.nome}" eliminado.`)
    setOpenMenuId(null)
  }

  function handleMenuAction(report: Report, action: string) {
    setOpenMenuId(null)
    toast(`${action}: "${report.nome}"`, { icon: "ℹ️" })
  }

  function applyFilter() {
    setPage(1)
    toast.success("Filtro aplicado!")
    setStatusOpen(false)
  }

  return (
    <div className="w-full min-h-screen px-6 py-6 bg-gray-50">

      {/* ── barra de filtros ── */}
      <div className="flex items-center gap-3 mb-8">

        {/* dropdown Status */}
        <div className="relative">
          <button
            onClick={() => setStatusOpen((o) => !o)}
            className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 bg-white text-sm font-medium text-gray-700 hover:border-indigo-300 transition-colors min-w-[110px] shadow-sm"
          >
            <span>{statusFilter === "todos" ? "Status" : statusLabels[statusFilter]}</span>
            <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
          </button>
          {statusOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-lg z-20 min-w-[140px] py-1">
              {(["todos", "pendente", "enviado", "aprovado", "rejeitado"] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => { setStatusFilter(s); setPage(1); setStatusOpen(false) }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors capitalize ${statusFilter === s ? "text-indigo-600 font-semibold" : "text-gray-600"}`}
                >
                  {s === "todos" ? "Todos" : statusLabels[s]}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* data de início */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 bg-white shadow-sm">
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="text-sm text-gray-400 outline-none bg-transparent w-32 cursor-pointer"
          />
          <Calendar className="w-4 h-4 text-gray-300 flex-shrink-0" />
        </div>

        {/* seta separadora */}
        <span className="text-gray-400 text-lg">→</span>

        {/* data de fim */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 bg-white shadow-sm">
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)}
            className="text-sm text-gray-400 outline-none bg-transparent w-32 cursor-pointer"
          />
          <Calendar className="w-4 h-4 text-gray-300 flex-shrink-0" />
        </div>

        {/* botão Filtrar — alinhado à direita */}
        <div className="ml-auto">
          <button
            onClick={applyFilter}
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtrar
          </button>
        </div>
      </div>

      {/* ── tabela ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

        {/* cabeçalho */}
        <div className="grid grid-cols-[2fr_1.5fr_2fr_1fr_1fr_auto] px-6 py-4 border-b border-gray-100">
          {["Hospitais/População", "Data de emissão", "Localização", "Formato", "Nível de Risco", ""].map((h) => (
            <span key={h} className="text-xs text-gray-400 font-medium">{h}</span>
          ))}
        </div>

        {/* linhas */}
        {pageData.length === 0 ? (
          <div className="py-16 text-center text-gray-400 text-sm">
            Nenhum registo encontrado.
          </div>
        ) : (
          pageData.map((report) => (
            <div
              key={report.id}
              className="grid grid-cols-[2fr_1.5fr_2fr_1fr_1fr_auto] items-center px-6 py-4 border-b border-gray-50 hover:bg-gray-50/60 transition-colors"
            >
              {/* nome */}
              <span className="text-sm font-medium text-amber-500 cursor-pointer hover:underline">
                {report.nome}
              </span>

              {/* data */}
              <span className="text-sm text-gray-600">{report.dataEmissao}</span>

              {/* localização */}
              <span className="text-sm text-gray-600">{report.localizacao}</span>

              {/* formato */}
              <span className="text-sm text-gray-600">{report.formato}</span>

              {/* nível de risco */}
              <span className={`text-sm font-semibold ${riskColor(report.nivelRisco)}`}>
                {report.nivelRisco}%
              </span>

              {/* acções */}
              <div className="flex items-center gap-2 justify-end relative">
                {/* botão Enviar */}
                <button
                  onClick={() => handleEnviar(report)}
                  disabled={report.status === "enviado"}
                  className={`text-sm font-semibold px-4 py-1.5 rounded-lg transition-colors ${
                    report.status === "enviado"
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-indigo-500 hover:bg-indigo-600 text-white"
                  }`}
                >
                  {report.status === "enviado" ? "Enviado" : "Enviar"}
                </button>

                {/* botão editar */}
                <button
                  onClick={() => handleEditar(report)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-400 transition-colors"
                >
                  <Pencil className="w-3.5 h-3.5" />
                </button>

                {/* botão eliminar */}
                <button
                  onClick={() => handleEliminar(report)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-50 hover:bg-red-100 text-red-400 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>

                {/* menu de contexto */}
                <div className="relative">
                  <button
                    onClick={() => setOpenMenuId(openMenuId === report.id ? null : report.id)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>
                  {openMenuId === report.id && (
                    <div className="absolute right-0 top-full mt-1 bg-white border border-gray-100 rounded-xl shadow-xl z-30 min-w-[160px] py-1">
                      {["Ver detalhes", "Descarregar", "Partilhar", "Arquivar"].map((action) => (
                        <button
                          key={action}
                          onClick={() => handleMenuAction(report, action)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          {action}
                        </button>
                      ))}
                      <div className="border-t border-gray-100 mt-1 pt-1">
                        <button
                          onClick={() => handleEliminar(report)}
                          className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* ── paginação ── */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <span className="text-sm text-gray-500">Page</span>

        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 disabled:opacity-30 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* números de página */}
        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
          const num = i + 1
          return (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`w-7 h-7 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                page === num
                  ? "bg-indigo-500 text-white shadow-sm"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          )
        })}

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 disabled:opacity-30 transition-colors"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* total de páginas */}
        <span className="text-sm border border-gray-200 rounded-lg px-3 py-1 text-gray-500 bg-white min-w-[40px] text-center">
          {totalPages}
        </span>
      </div>

      {/* fechar menus ao clicar fora */}
      {(openMenuId || statusOpen) && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => { setOpenMenuId(null); setStatusOpen(false) }}
        />
      )}
    </div>
  )
}