import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import App from './App'
import DeepDivePage from './pages/DeepDivePage'

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const dataAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/data-analytics',
  component: DeepDivePage,
})

const managementPhilosophyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/management-philosophy',
  component: DeepDivePage,
})

const observabilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/observability',
  component: DeepDivePage,
})

const webDevelopmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/web-development',
  component: DeepDivePage,
})

const agenticFlowRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/agentic-flow',
  component: DeepDivePage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  dataAnalyticsRoute,
  managementPhilosophyRoute,
  observabilityRoute,
  webDevelopmentRoute,
  agenticFlowRoute,
])

export const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
