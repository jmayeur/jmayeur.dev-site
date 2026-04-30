import React from 'react'
import { Link } from '@tanstack/react-router'

function WebDevelopmentPage() {
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

  const bgClass = isDark
    ? 'bg-slate-950 text-slate-100'
    : 'text-slate-900'

  const darkGradient =
    'radial-gradient(circle at 20% 20%,rgba(56,189,248,0.15),transparent 28%),radial-gradient(circle at 80% 0%,rgba(251,146,60,0.15),transparent 26%),linear-gradient(135deg,#020617,#0f172a 45%,#111827)'
  const lightGradient =
    'radial-gradient(circle at 20% 20%,rgba(59,130,246,0.08),transparent 28%),radial-gradient(circle at 80% 0%,rgba(168,85,247,0.08),transparent 26%),linear-gradient(135deg,#faebd7,#f5e6d3 45%,#ecdcc8)'

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
              isDark
                ? 'text-slate-400 hover:text-slate-200'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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

        <p className={`text-sm uppercase tracking-[0.24em] ${isDark ? 'text-cyan-300/90' : 'text-blue-600/90'}`}>
          Jeff Mayeur
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
          Web Development
        </h1>
        <p className={`mt-5 max-w-2xl text-pretty text-base leading-relaxed md:text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Create, iterate, and evolve: that has always been the core of why web development matters to me.
        </p>

        <nav aria-label="Page sections" className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          <a className="chip-link" href="#history">
            History
          </a>
          <a className="chip-link" href="#technology">
            Technology
          </a>
        </nav>
      </header>

      <main id="content" className="mx-auto grid w-full max-w-5xl gap-8 px-6 pb-16 md:px-10">
        <section id="history" aria-labelledby="history-heading" className="panel">
          <h2 id="history-heading" className="panel-title">
            History
          </h2>
          <p className="panel-text">
            It started with <a className="underline decoration-cyan-400/70 underline-offset-4 hover:decoration-cyan-300" href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noreferrer">oXMLHTTPRequest</a>. I had been noodling with HTML and JavaScript using Internet Explorer 4,
            and I came across that function. At the time I was working for a company that provided web-based
            employment applications. One aspect of these applications was a series of questions created by IO
            Psychologists to assess a candidate's fit for a role. These tests used an early Neural Network to
            evaluate the user's responses based on outcomes from previous applicants and their answers. QAing these
            tests was very time-consuming. Upon finding this function, it occurred to me that I could use structured
            data, XML, to encode various persona answers and use a testing frame to load that data, and auto-fill the
            web pages.
          </p>
          <p className="panel-text mt-4">
            The creation of that testing harness was a formative moment for me. I unlocked 2 key insights that still
            drive me forward today. First, the web is fundamentally one of the most adaptive development spaces; even
            in this world of apps and mobile phones, web is still incredibly adaptable to new capabilities and
            fosters innovation through that flexibility. Second, software development at its best is about
            simplifying and accelerating.
          </p>
        </section>

        <section id="technology" aria-labelledby="technology-heading" className="panel">
          <h2 id="technology-heading" className="panel-title">
            Technology
          </h2>
          <p className="panel-text">
            I will always love JavaScript. It was the first JIT language that felt like it could keep up with the
            way I wanted to continually iterate on a problem. React has come to dominate web application architecture
            and TypeScript has added some missing rigor in the upfront development phase, but in the end it's the
            fluidity and real-time feedback of web development that keeps me engaged 20 years later.
          </p>
          <p className="panel-text mt-4">
            Agentic loops and tailored skills have shifted the how in many cases. I don't think I'll ever hand code
            anything complex again. The goal is the same: create, iterate and evolve. That is the core of what makes
            web special to me and to the evolution of the software landscape.
          </p>
        </section>
      </main>
    </div>
  )
}

export default WebDevelopmentPage
