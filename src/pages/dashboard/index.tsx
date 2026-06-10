import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"
import {
  PieChart,
  Pie,
  Cell as PieCell,
  Tooltip as PieTooltip,
} from "recharts"
import { TrendingUp } from "lucide-react"

const barData = [
  { month: "01", zones: 62, lastWeek: 38 },
  { month: "02", zones: 50, lastWeek: 42 },
  { month: "03", zones: 70, lastWeek: 55 },
  { month: "04", zones: 48, lastWeek: 60 },
  { month: "05", zones: 80, lastWeek: 52 },
  { month: "06", zones: 90, lastWeek: 58 },
  { month: "07", zones: 72, lastWeek: 65 },
  { month: "08", zones: 55, lastWeek: 48 },
  { month: "09", zones: 68, lastWeek: 50 },
  { month: "10", zones: 40, lastWeek: 60 },
  { month: "11", zones: 75, lastWeek: 45 },
  { month: "12", zones: 85, lastWeek: 55 },
]

const donutData = [
  { name: "Malaria", value: 40, color: "#4F56D3" },
  { name: "Paludismo", value: 32, color: "#8B9AF0" },
  { name: "Cólera", value: 28, color: "#C5CAFF" },
]

const CustomBarTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean
  payload?: { value: number; name: string }[]
  label?: string
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-100 shadow-lg rounded-xl px-3 py-2 text-xs">
        <p className="font-semibold text-gray-700 mb-1">Mês {label}</p>
        {payload.map((p) => (
          <p key={p.name} className="text-gray-500">
            <span className="font-medium text-gray-700">{p.value}</span>{" "}
            {p.name === "zones" ? "zonas" : "semana anterior"}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const CustomDonutTooltip = ({
  active,
  payload,
}: {
  active?: boolean
  payload?: { name: string; value: number }[]
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#2D3250] text-white rounded-xl px-4 py-3 shadow-xl text-sm min-w-[130px]">
        <p className="font-semibold text-base">{payload[0].name}</p>
        <p className="text-gray-300 text-xs mt-0.5">1pm – 4pm</p>
        <p className="font-bold text-lg mt-1">Alto Nível</p>
      </div>
    )
  }
  return null
}

export default function DashboardHome() {
  const [activeDonutIndex, setActiveDonutIndex] = useState<number | null>(1)

  return (
    <div className="w-full min-h-screen px-5 py-6 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

        <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          {/* cabeçalho */}
          <div className="flex items-start justify-between mb-1">
            <div>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Revenue</p>
              <h2 className="text-base font-semibold text-gray-800 leading-tight">
                Análise de Zonas
              </h2>
              <div className="flex items-center gap-1.5 mt-2">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-emerald-500 font-semibold text-sm">2.1%</span>
                <span className="text-gray-400 text-xs">vs últimas semanas</span>
              </div>
            </div>
            <button className="text-sm text-indigo-500 border border-indigo-200 rounded-lg px-4 py-1.5 hover:bg-indigo-50 transition-colors font-medium">
              Reportagens
            </button>
          </div>

          <p className="text-xs text-gray-400 mt-3 mb-5">
            Registos de 1–12 Dez, 2024
          </p>

          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData} barGap={4} barCategoryGap="30%">
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#9CA3AF" }}
              />
              <YAxis hide />
              <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "transparent" }} />
              <Bar dataKey="zones" radius={[4, 4, 0, 0]} maxBarSize={18}>
                {barData.map((_, i) => (
                  <Cell
                    key={i}
                    fill={i === barData.length - 1 ? "#4F56D3" : "#6B74E8"}
                    opacity={i < 3 ? 0.7 : 1}
                  />
                ))}
              </Bar>
              <Bar dataKey="lastWeek" radius={[4, 4, 0, 0]} maxBarSize={18}>
                {barData.map((_, i) => (
                  <Cell key={i} fill="#E5E7EB" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          {/* legenda */}
          <div className="flex items-center gap-6 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4F56D3] inline-block" />
              <span className="text-xs text-gray-500">zones</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-300 inline-block" />
              <span className="text-xs text-gray-500">Last Week</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          {/* cabeçalho */}
          <div className="flex items-start justify-between mb-1">
            <div>
              <h2 className="text-base font-semibold text-gray-800">Previsões</h2>
              <p className="text-xs text-gray-400 mt-0.5">Para 1–6 Out, 2025</p>
            </div>
            <button className="text-sm text-indigo-500 border border-indigo-200 rounded-lg px-3 py-1.5 hover:bg-indigo-50 transition-colors font-medium whitespace-nowrap">
              Ver Relatório
            </button>
          </div>

          {/* donut */}
          <div className="flex justify-center mt-4 mb-2">
            <div className="relative">
              <ResponsiveContainer width={180} height={180}>
                <PieChart>
                  <Pie
                    data={donutData}
                    cx="50%"
                    cy="50%"
                    innerRadius={52}
                    outerRadius={80}
                    paddingAngle={3}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveDonutIndex(index)}
                    onMouseLeave={() => setActiveDonutIndex(null)}
                    strokeWidth={0}
                  >
                    {donutData.map((entry, index) => (
                      <PieCell
                        key={entry.name}
                        fill={entry.color}
                        opacity={
                          activeDonutIndex === null || activeDonutIndex === index
                            ? 1
                            : 0.55
                        }
                      />
                    ))}
                  </Pie>
                  <PieTooltip content={<CustomDonutTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* legenda */}
          <div className="flex justify-around mt-1">
            {donutData.map((d) => (
              <div key={d.name} className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: d.color }}
                  />
                  <span className="text-xs text-gray-500">{d.name}</span>
                </div>
                <span className="text-sm font-semibold text-gray-700">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}