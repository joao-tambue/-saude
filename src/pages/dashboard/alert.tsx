import { useState, useEffect, useRef } from "react"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
  LineChart, Line, CartesianGrid,
} from "recharts"

// ─── tipos ────────────────────────────────────────────────────────────────────
interface DayBar { day: string; value: number }
interface LinePoint { label: string; afetados: number; seguras: number }

// ─── helpers de dados ─────────────────────────────────────────────────────────
const DAYS = ["M", "T", "W", "T", "F", "S", "S"]

function makeWeekData(): DayBar[] {
  return DAYS.map((day) => ({ day, value: Math.floor(Math.random() * 420) + 80 }))
}

function makeLineData(): LinePoint[] {
  return ["01", "02", "03", "04", "05", "06"].map((label) => ({
    label,
    afetados: Math.floor(Math.random() * 70) + 20,
    seguras: Math.floor(Math.random() * 50) + 10,
  }))
}

// ─── tooltip bar ─────────────────────────────────────────────────────────────
function BarTip({ active, payload }: { active?: boolean; payload?: { value: number }[] }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#1e1e3f] text-white text-[11px] px-2 py-1 rounded-lg shadow-lg">
      {payload[0].value} casos
    </div>
  )
}

// ─── barra de progresso — variante dark (cards índigo) ────────────────────────
function DarkProgressBar({
  pct,
  barColor,
  label,
  highlight,
}: {
  pct: number
  barColor: string
  label: string
  highlight?: string
}) {
  return (
    <div className="w-full">
      <p className="text-[11px] text-white/75 mb-2.5 leading-snug">
        {label}{" "}
        {highlight && (
          <span className="text-red-400 font-semibold">{highlight}</span>
        )}
      </p>
      <div className="flex items-center gap-3">
        <div className="flex-1 h-[6px] bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-[1200ms] ease-in-out"
            style={{ width: `${pct}%`, backgroundColor: barColor }}
          />
        </div>
        <span className="text-white font-bold text-sm w-9 text-right">{pct}%</span>
      </div>
    </div>
  )
}

// ─── barra de progresso — variante light (secção Dados) ──────────────────────
function LightProgressBar({ pct, barColor }: { pct: number; barColor: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex-1 h-[6px] bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-[1200ms] ease-in-out"
          style={{ width: `${pct}%`, backgroundColor: barColor }}
        />
      </div>
      <span className="text-gray-700 font-bold text-sm w-9 text-right">{pct}%</span>
    </div>
  )
}

// ─── componente principal ─────────────────────────────────────────────────────
export default function AlertPage() {
  const [weekData, setWeekData]     = useState<DayBar[]>(makeWeekData)
  const [lineData, setLineData]     = useState<LinePoint[]>(makeLineData)
  const [afetados, setAfetados]     = useState(35)
  const [seguras, setSeguras]       = useState(35)
  const [pulse, setPulse]           = useState(false)
  const [mapMode, setMapMode]       = useState<"m" | "k">("m")
  const tickRef                     = useRef(0)

  // pico da semana
  const peak = weekData.reduce((a, b) => (a.value > b.value ? a : b))

  // simulação a cada 5 s
  useEffect(() => {
    const id = setInterval(() => {
      tickRef.current += 1
      setWeekData(makeWeekData())
      setLineData(makeLineData())
      setAfetados(Math.floor(Math.random() * 45) + 20)
      setSeguras(Math.floor(Math.random() * 40) + 15)
      // pulso no círculo do mapa
      setPulse(true)
      setTimeout(() => setPulse(false), 900)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full min-h-screen bg-gray-50 px-5 py-6 overflow-auto">

      {/* ══ ROW SUPERIOR ════════════════════════════════════════════════════ */}
      <div className="flex gap-5 h-[560px]">

        {/* ── coluna esquerda ─────────────────────────────────────────────── */}
        <div className="w-[235px] flex-shrink-0 flex flex-col gap-4 h-full">

          {/* título + descrição */}
          <div className="flex-shrink-0">
            <h1 className="text-[32px] font-extrabold text-indigo-600 leading-tight mb-2">
              Mutamba
            </h1>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
              sed diam nonumy eirmo tempor invidunt.
            </p>
          </div>

          {/* gráfico semanal */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 pt-3 pb-2 flex-shrink-0">
            {/* label flutuante do pico */}
            <div className="text-[11px] mb-1">
              <span className="inline-flex items-center gap-1.5 bg-white border border-gray-200 shadow-sm rounded-lg px-2 py-[3px]">
                <span className="font-bold text-gray-800">{peak.value}</span>
                <span className="text-gray-400">additional text</span>
              </span>
            </div>

            <ResponsiveContainer width="100%" height={175}>
              <BarChart data={weekData} barCategoryGap="18%" margin={{ left: -10, right: 4 }}>
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#9CA3AF", fontWeight: 600 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#9CA3AF" }}
                  ticks={[0, 250, 500]}
                  domain={[0, 560]}
                />
                <Tooltip content={<BarTip />} cursor={{ fill: "transparent" }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]} maxBarSize={20}>
                  {weekData.map((entry, i) => (
                    <Cell
                      key={i}
                      fill={
                        entry.value === peak.value
                          ? "#EF4444"
                          : "#C7CAF7"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* card: zonas afetadas */}
          <div className="bg-indigo-600 rounded-2xl px-5 py-4 flex-shrink-0">
            <DarkProgressBar
              pct={afetados}
              barColor="#EF4444"
              label="Zonas mais afetatos pelo"
              highlight="Paludismo"
            />
          </div>

          {/* card: zonas seguras */}
          <div className="bg-indigo-600 rounded-2xl px-5 py-4 flex-shrink-0">
            <DarkProgressBar
              pct={seguras}
              barColor="#22C55E"
              label="Zonas seguras"
            />
          </div>
        </div>

        {/* ── mapa central ────────────────────────────────────────────────── */}
        <div className="flex-1 rounded-2xl overflow-hidden shadow-sm border border-gray-200 relative">

          {/* toggle Map / Satellite */}
          <div className="absolute top-3 left-3 z-20 flex bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            {([["Map", "m"], ["Satellite", "k"]] as const).map(([label, val]) => (
              <button
                key={val}
                onClick={() => setMapMode(val)}
                className={`px-3 py-1.5 text-[12px] font-medium transition-colors ${
                  mapMode === val
                    ? "bg-white text-gray-800"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* controles + / - */}
          <div className="absolute top-3 right-3 z-20 flex flex-col bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm font-bold border-b border-gray-200">+</button>
            <button className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm font-bold border-b border-gray-200">−</button>
            <button className="w-7 h-7 flex items-center justify-center hover:bg-gray-50">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-amber-500"><path d="M12 2a5 5 0 1 1 0 10A5 5 0 0 1 12 2zm0 12c5.33 0 8 2.67 8 4v2H4v-2c0-1.33 2.67-4 8-4z"/></svg>
            </button>
          </div>

          {/* iframe — Luanda, Angola */}
          <iframe
            title="Mapa de Risco Luanda"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block" }}
            src={`https://maps.google.com/maps?q=-8.8368,13.2343&z=13&output=embed&t=${mapMode}`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* halo exterior */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: pulse ? 315 : 295,
              height: pulse ? 315 : 295,
              backgroundColor: "rgba(239,68,68,0.13)",
              transition: "width 0.8s ease, height 0.8s ease",
            }}
          />

          {/* círculo central */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: pulse ? 200 : 185,
              height: pulse ? 200 : 185,
              backgroundColor: "rgba(239,68,68,0.42)",
              transition: "width 0.8s ease, height 0.8s ease",
            }}
          />

          {/* pin */}
          <div
            className="absolute pointer-events-none"
            style={{ top: "calc(50% - 78px)", left: "calc(50% + 68px)" }}
          >
            <div className="w-4 h-4 bg-red-500 rounded-full border-[2.5px] border-white shadow-md" />
          </div>
        </div>
      </div>

      {/* ══ ROW INFERIOR ════════════════════════════════════════════════════ */}
      <div className="flex gap-5 mt-5">

        {/* espaço alinhado com coluna esquerda */}
        <div className="w-[235px] flex-shrink-0" />

        {/* ── card Dados ── */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm px-7 py-6 flex flex-col justify-center gap-4">
          <h2 className="text-[26px] font-extrabold text-gray-800 leading-none">Dados</h2>
          <LightProgressBar pct={afetados} barColor="#F87171" />
          <LightProgressBar pct={seguras}  barColor="#D1D5DB" />
          <p className="text-[12px] text-gray-400 mt-0.5">
            Here go numbers{" "}
            <span className="font-semibold text-gray-600">{afetados + seguras}</span>
            {" "}of total{" "}
            <span className="font-semibold text-gray-600">100</span>
          </p>
        </div>

        {/* ── card Order / line chart ── */}
        <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5">
          <p className="text-[12px] font-semibold text-gray-600 leading-none">Order</p>
          <p className="text-[11px] text-gray-400 mb-4 mt-0.5">Sales from 1–6 Dec, 2020</p>

          <ResponsiveContainer width="100%" height={110}>
            <LineChart data={lineData} margin={{ top: 4, right: 4, left: -28, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" vertical={false} />
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10, fill: "#9CA3AF" }}
              />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  fontSize: 11,
                  borderRadius: 8,
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                labelStyle={{ color: "#6B7280", fontWeight: 600 }}
              />
              <Line
                type="monotone"
                dataKey="afetados"
                stroke="#F87171"
                strokeWidth={2}
                dot={{ r: 3, fill: "#F87171", strokeWidth: 0 }}
                activeDot={{ r: 5 }}
                name="Zonas afetados"
              />
              <Line
                type="monotone"
                dataKey="seguras"
                stroke="#D1D5DB"
                strokeWidth={2}
                dot={{ r: 3, fill: "#D1D5DB", strokeWidth: 0 }}
                activeDot={{ r: 5 }}
                name="Zonas Seguras"
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
              <span className="text-[11px] text-gray-500">Zonas afetados</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
              <span className="text-[11px] text-gray-500">Zonas Seguras</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}