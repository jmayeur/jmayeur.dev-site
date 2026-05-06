import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectsPage from '../ProjectsPage'

// ─── Module mocks ────────────────────────────────────────────────────────────

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
}))

// ─── localStorage mock ────────────────────────────────────────────────────────

const localStorageMock = {
  getItem: vi.fn<(key: string) => string | null>(),
  setItem: vi.fn<(key: string, value: string) => void>(),
  clear: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('ProjectsPage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    localStorageMock.getItem.mockReturnValue(null)
    document.documentElement.className = ''
  })

  // ── Page structure ─────────────────────────────────────────────────────────

  it('renders the page heading "Projects"', () => {
    render(<ProjectsPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Projects')
  })

  it('renders 3 tab buttons', () => {
    render(<ProjectsPage />)
    expect(screen.getAllByRole('tab')).toHaveLength(3)
  })

  it('marks the first tab as selected by default', () => {
    render(<ProjectsPage />)
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[2]).toHaveAttribute('aria-selected', 'false')
  })

  // ── Default active panel ───────────────────────────────────────────────────

  it('shows the first project card by default', () => {
    render(<ProjectsPage />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Digital Experience Experimentation/i }),
    ).toBeInTheDocument()
  })

  it('does not show other project cards on initial render', () => {
    render(<ProjectsPage />)
    expect(
      screen.queryByRole('heading', { level: 2, name: /On-Platform Targeted Campaign/i }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 2, name: /Nike\.com Platform Evolution/i }),
    ).not.toBeInTheDocument()
  })

  it('renders core tech badges for the first (active) project', () => {
    render(<ProjectsPage />)
    expect(screen.getByText('Databricks')).toBeInTheDocument()
    expect(screen.getByText('Adobe Target')).toBeInTheDocument()
    expect(screen.getByText('Kotlin')).toBeInTheDocument()
    expect(screen.queryByText('Micro-frontends')).not.toBeInTheDocument()
  })

  it('renders NikeApp platform chip on the first project', () => {
    render(<ProjectsPage />)
    expect(screen.getByText('NikeApp')).toBeInTheDocument()
  })

  it('renders case study copy for the first (default) project', () => {
    render(<ProjectsPage />)
    expect(screen.getByText(/vendor-agnostic integration points/i)).toBeInTheDocument()
  })

  // ── Tab switching ──────────────────────────────────────────────────────────

  it('switches to the second project when its tab is clicked', () => {
    render(<ProjectsPage />)
    fireEvent.click(screen.getAllByRole('tab')[1])
    expect(
      screen.getByRole('heading', { level: 2, name: /On-Platform Targeted Campaign Migration/i }),
    ).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 2, name: /Digital Experience Experimentation/i }),
    ).not.toBeInTheDocument()
  })

  it('marks the second tab as selected after clicking it', () => {
    render(<ProjectsPage />)
    fireEvent.click(screen.getAllByRole('tab')[1])
    const tabs = screen.getAllByRole('tab')
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false')
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true')
  })

  it('shows campaign project core tech after switching to tab 2', () => {
    render(<ProjectsPage />)
    fireEvent.click(screen.getAllByRole('tab')[1])
    expect(screen.getByText('Micro-frontends')).toBeInTheDocument()
    expect(screen.getByText('LCP Optimization')).toBeInTheDocument()
    expect(screen.queryByText('Databricks')).not.toBeInTheDocument()
  })

  it('switches to the Nike.com project when its tab is clicked', () => {
    render(<ProjectsPage />)
    fireEvent.click(screen.getAllByRole('tab')[2])
    expect(
      screen.getByRole('heading', { level: 2, name: /Nike\.com Platform Evolution/i }),
    ).toBeInTheDocument()
  })

  it('shows Nike.com core tech after switching to tab 3', () => {
    render(<ProjectsPage />)
    fireEvent.click(screen.getAllByRole('tab')[2])
    expect(screen.getByText('Microservices')).toBeInTheDocument()
    expect(screen.getByText('GraphQL')).toBeInTheDocument()
  })

  // ── Theme toggle ───────────────────────────────────────────────────────────

  it('applies dark class to documentElement by default', () => {
    render(<ProjectsPage />)
    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('toggles to light mode on button click', () => {
    render(<ProjectsPage />)
    const button = screen.getByRole('button', { name: /toggle dark mode/i })
    fireEvent.click(button)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
    expect(document.documentElement.classList.contains('light')).toBe(true)
  })

  it('persists the chosen theme to localStorage', () => {
    render(<ProjectsPage />)
    const button = screen.getByRole('button', { name: /toggle dark mode/i })
    fireEvent.click(button)
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light')
  })

  it('reads initial theme from localStorage', () => {
    localStorageMock.getItem.mockReturnValue('light')
    render(<ProjectsPage />)
    expect(document.documentElement.classList.contains('light')).toBe(true)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
