import { useState } from "react"
import { Outlet } from "@tanstack/react-router"
import Aside from "@/components/aside"
import Header from "@/components/header"

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex w-full min-h-screen">
      <Aside collapsed={collapsed} onToggle={() => setCollapsed((c) => !c)} />
      <main className="flex-1 bg-background min-w-0 flex flex-col">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
