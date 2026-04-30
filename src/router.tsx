import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'
import App from './App'
import DataAnalyticsPage from './pages/DataAnalyticsPage'
import ManagementPhilosophyPage from './pages/ManagementPhilosophyPage'
import ObservabilityPage from './pages/ObservabilityPage'
import WebDevelopmentPage from './pages/WebDevelopmentPage'

const rootRoute = createRootRoute()

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: App,
})

const dataAnalyticsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/data-analytics',
  component: DataAnalyticsPage,
})

const managementPhilosophyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/management-philosophy',
  component: ManagementPhilosophyPage,
})

const observabilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/observability',
  component: ObservabilityPage,
})

const webDevelopmentRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/web-development',
  component: WebDevelopmentPage,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  dataAnalyticsRoute,
  managementPhilosophyRoute,
  observabilityRoute,
  webDevelopmentRoute,
])

export const router = createRouter({
  routeTree,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
