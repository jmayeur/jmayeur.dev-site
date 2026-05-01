import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import DeepDivePage from '../DeepDivePage'

// ─── Module mocks ───────────────────────────────────────────────────────────

const mockUseLocation = vi.fn()

vi.mock('@tanstack/react-router', () => ({
  Link: ({
    to,
    children,
    className,
  }: {
    to: string
    children: React.ReactNode
    className?: string
  }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
  useLocation: () => mockUseLocation(),
}))

// ─── localStorage mock ───────────────────────────────────────────────────────

const localStorageMock = {
  getItem: vi.fn<(key: string) => string | null>(),
  setItem: vi.fn<(key: string, value: string) => void>(),
  clear: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

// ─── Helpers ─────────────────────────────────────────────────────────────────

function renderForSlug(slug: string) {
  mockUseLocation.mockReturnValue({ pathname: `/${slug}` })
  return render(<DeepDivePage />)
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('DeepDivePage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.getItem.mockReturnValue(null)
    document.documentElement.className = ''
  })

  // ── Content rendering ──────────────────────────────────────────────────────

  it('renders the page title for data-analytics', () => {
    renderForSlug('data-analytics')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Data & Analytics')
  })

  it('renders the page title for management-philosophy', () => {
    renderForSlug('management-philosophy')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Management Philosophy')
  })

  it('renders the page title for web-development', () => {
    renderForSlug('web-development')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Web Development')
  })

  it('renders the page title for agentic-flow', () => {
    renderForSlug('agentic-flow')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Agentic Flow')
  })

  it('renders titleSuffix "(O11y)" for observability', () => {
    renderForSlug('observability')
    expect(screen.getByText('(O11y)')).toBeInTheDocument()
  })

  // ── Sections and nav chips ─────────────────────────────────────────────────

  it('renders a nav chip for every section on data-analytics', () => {
    renderForSlug('data-analytics')
    const nav = screen.getByRole('navigation', { name: 'Page sections' })
    const chips = nav.querySelectorAll('a')
    // data-analytics has 3 sections: background, key-skills, key-tech
    expect(chips).toHaveLength(3)
  })

  it('renders section headings for management-philosophy', () => {
    renderForSlug('management-philosophy')
    // Each heading appears twice: once in the nav chip and once in the section h2
    expect(screen.getAllByText('Clear Vision').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Trust').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Expectation').length).toBeGreaterThanOrEqual(1)
  })

  it('renders badge items for the key-skills section', () => {
    renderForSlug('data-analytics')
    expect(screen.getByText('Client Instrumentation')).toBeInTheDocument()
    expect(screen.getByText('Data Ingestion')).toBeInTheDocument()
    expect(screen.getByText('Data Processing')).toBeInTheDocument()
  })

  it('renders badge items for the key-tech section', () => {
    renderForSlug('data-analytics')
    expect(screen.getByText('MSSQL')).toBeInTheDocument()
  })

  // ── Subtitle ───────────────────────────────────────────────────────────────

  it('renders the subtitle for data-analytics', () => {
    renderForSlug('data-analytics')
    expect(screen.getByText(/From stored procedures to Databricks/i)).toBeInTheDocument()
  })

  // ── 404 fallback ───────────────────────────────────────────────────────────

  it('renders "Page not found." for an unknown slug', () => {
    renderForSlug('does-not-exist')
    expect(screen.getByText('Page not found.')).toBeInTheDocument()
  })

  it('renders a back link in the 404 state', () => {
    renderForSlug('does-not-exist')
    const link = screen.getByRole('link', { name: 'Back to Resume' })
    expect(link).toHaveAttribute('href', '/')
  })

  // ── Trailing slash ─────────────────────────────────────────────────────────

  it('strips trailing slash and resolves slug correctly', () => {
    mockUseLocation.mockReturnValue({ pathname: '/agentic-flow/' })
    render(<DeepDivePage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Agentic Flow')
  })

  it('does not render a 404 for a slug with a trailing slash', () => {
    mockUseLocation.mockReturnValue({ pathname: '/observability/' })
    render(<DeepDivePage />)
    expect(screen.queryByText('Page not found.')).not.toBeInTheDocument()
  })

  // ── Theme toggle ───────────────────────────────────────────────────────────

  it('applies dark class to documentElement by default', () => {
    renderForSlug('data-analytics')
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles to light mode on button click', () => {
    renderForSlug('data-analytics')
    const button = screen.getByRole('button', { name: /toggle dark mode/i })
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(document.documentElement.classList.contains('light')).toBe(true)
  })

  it('toggles back to dark mode on a second button click', () => {
    renderForSlug('data-analytics')
    const button = screen.getByRole('button', { name: /toggle dark mode/i })
    fireEvent.click(button)
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('persists the chosen theme to localStorage', () => {
    renderForSlug('data-analytics')
    const button = screen.getByRole('button', { name: /toggle dark mode/i })
    fireEvent.click(button)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light')
  })

  it('reads initial theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('light')
    renderForSlug('data-analytics')
    expect(document.documentElement.classList.contains('light')).toBe(true)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
