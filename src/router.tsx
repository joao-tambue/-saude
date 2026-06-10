import { createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router"
import { LandingPage } from "./pages/LandingPage"
import { LoginPage } from "./pages/LoginPage"
import { TermsPage } from "./pages/TermsPage"
import { PrivacyPage } from "./pages/PrivacyPage"
import { CookieConsent } from "./components/CookieConsent"
import { DashboardLayout } from "./layouts/DashboardLayout"
import DashboardHome from "./pages/dashboard/index"
import AlertPage from "./pages/dashboard/alert"
import PopulationPage from "./pages/dashboard/population"

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <CookieConsent />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
})

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
})

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/termos",
  component: TermsPage,
})

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacidade",
  component: PrivacyPage,
})

const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "dashboard-layout",
  component: DashboardLayout,
})

const dashboardIndexRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/dashboard",
  component: DashboardHome,
})

const dashboardAlertRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/dashboard/alert",
  component: AlertPage,
})

const dashboardPopulationRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: "/dashboard/population",
  component: PopulationPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  termsRoute,
  privacyRoute,
  dashboardLayoutRoute.addChildren([
    dashboardIndexRoute,
    dashboardAlertRoute,
    dashboardPopulationRoute,
  ]),
])

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
