import React from 'react'
import { Link, useLocation } from '@tanstack/react-router'
import { pageContent } from '../pageContent'

function DeepDivePage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\/|\/$/g, '')
  const content = pageContent[slug]

  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window === 'undefined') return true
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return true
  })

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const bgClass = isDark ? 'bg-slate-950 text-slate-100' : 'text-slate-900'

  const darkGradient =
    'radial-gradient(circle at 20% 20%,rgba(56,189,248,0.15),transparent 28%),radial-gradient(circle at 80% 0%,rgba(251,146,60,0.15),transparent 26%),linear-gradient(135deg,#020617,#0f172a 45%,#111827)'
  const lightGradient =
    'radial-gradient(circle at 20% 20%,rgba(59,130,246,0.08),transparent 28%),radial-gradient(circle at 80% 0%,rgba(168,85,247,0.08),transparent 26%),linear-gradient(135deg,#faebd7,#f5e6d3 45%,#ecdcc8)'

  if (!content) {
    return (
      <div className={`relative isolate min-h-screen flex items-center justify-center ${bgClass}`}>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{ backgroundImage: isDark ? darkGradient : lightGradient }}
        />
        <div className="text-center">
          <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Page not found.
          </p>
          <Link to="/" className="mt-4 inline-block underline text-sm">
            Back to Resume
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative isolate min-h-screen overflow-x-clip ${bgClass}`}>
      <a href="#content" className="skip-link">
        Skip to main content
      </a>

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: isDark ? darkGradient : lightGradient }}
      />

      <header className="mx-auto w-full max-w-5xl px-6 pb-10 pt-12 md:px-10 md:pt-16">
        <div className="flex items-center justify-between gap-4 mb-4">
          <Link
            to="/"
            className={`flex items-center gap-2 text-sm transition-colors ${
              isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Resume
          </Link>
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-lg border transition-colors ${
              isDark
                ? 'border-slate-600 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300'
                : 'border-slate-300 bg-slate-200/50 hover:bg-slate-300/50 text-slate-700'
            }`}
            aria-label="Toggle dark mode"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 1.414l2.12 2.12a1 1 0 001.414-1.414zM2.05 6.464a1 1 0 000-1.414L.636 3.636a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0zm12.728 0l1.414-1.414a1 1 0 000-1.414l-1.414-1.414a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0zm0 11.314l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM2.05 13.536a1 1 0 001.414 0l1.414-1.414a1 1 0 00-1.414-1.414L2.05 12.122a1 1 0 000 1.414zm10.657-1.414a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3 10a1 1 0 11-2 0 1 1 0 012 0zm14 0a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>

        <p
          className={`text-sm uppercase tracking-[0.24em] ${isDark ? 'text-cyan-300/90' : 'text-blue-600/90'}`}
        >
          Jeff Mayeur
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
          {content.title}
          {content.titleSuffix && (
            <span
              className={`ml-3 text-2xl md:text-4xl font-normal ${isDark ? 'text-slate-400' : 'text-slate-500'}`}
            >
              {content.titleSuffix}
            </span>
          )}
        </h1>
        <p
          className={`mt-5 max-w-2xl text-pretty text-base leading-relaxed md:text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
        >
          {content.subtitle}
        </p>

        <nav aria-label="Page sections" className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          {content.sections.map((section) => (
            <a key={section.id} className="chip-link" href={`#${section.id}`}>
              {section.heading}
            </a>
          ))}
        </nav>
      </header>

      <main id="content" className="mx-auto grid w-full max-w-5xl gap-8 px-6 pb-16 md:px-10">
        {content.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className="panel"
          >
            <h2 id={`${section.id}-heading`} className="panel-title">
              {section.heading}
            </h2>

            {section.paragraphs &&
              section.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`panel-text${i > 0 ? ' mt-4' : ''}`}
                  // Content is static authored strings, never user input
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))}

            {section.badges && (
              <ul className="flex flex-wrap gap-2 sm:gap-3 text-sm" aria-label={section.heading}>
                {section.badges.map((badge) => (
                  <li
                    key={badge}
                    className={`rounded-full border px-3 py-1.5 ${
                      section.badgeVariant === 'orange'
                        ? isDark
                          ? 'border-orange-300/25 bg-orange-500/10 text-orange-100'
                          : 'border-orange-300/40 bg-orange-100/30 text-orange-900'
                        : isDark
                          ? 'border-cyan-300/25 bg-cyan-500/10 text-cyan-100'
                          : 'border-blue-300/40 bg-blue-100/30 text-blue-900'
                    }`}
                  >
                    {badge}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </main>
    </div>
  )
}

export default DeepDivePage
