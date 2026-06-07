import { createRouter, createRootRoute, createRoute, Outlet } from "@tanstack/react-router"
import { LandingPage } from "./pages/LandingPage"
// import { LoginPage } from "./pages/LoginPage"
import { TermsPage } from "./pages/TermsPage"
import { PrivacyPage } from "./pages/PrivacyPage"
import { CookieConsent } from "./components/CookieConsent"

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

// const loginRoute = createRoute({
//   getParentRoute: () => rootRoute,
//   path: "/login",
//   component: LoginPage,
// })

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

const routeTree = rootRoute.addChildren
(
  [
    indexRoute, 
    // loginRoute, 
    termsRoute, 
    privacyRoute
  ]
)

export const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
