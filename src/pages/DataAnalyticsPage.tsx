import React from 'react'
import { Link } from '@tanstack/react-router'

const keySkills: string[] = [
  'Client Instrumentation',
  'Data Ingestion',
  'Data Processing',
  'Data Shaping',
  'Analytics & BI Reporting',
  'Data Storage & Mirroring',
]

const keyTech: string[] = [
  'MSSQL',
  'Oracle',
  'Spark',
  'Redshift',
  'Databricks',
  'Tableau',
  'Adobe Analytics',
  'Kafka',
  'Amazon EMR',
  'Amazon SQS',
]

function DataAnalyticsPage() {
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
          Data &amp; Analytics
        </h1>
        <p className={`mt-5 max-w-2xl text-pretty text-base leading-relaxed md:text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          From stored procedures to Databricks — data is where it all comes back to.
        </p>

        <nav aria-label="Page sections" className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          <a className="chip-link" href="#background">
            Background
          </a>
          <a className="chip-link" href="#key-skills">
            Key Skills
          </a>
          <a className="chip-link" href="#key-tech">
            Key Tech
          </a>
        </nav>
      </header>

      <main id="content" className="mx-auto grid w-full max-w-5xl gap-8 px-6 pb-16 md:px-10">

        <section id="background" aria-labelledby="background-heading" className="panel">
          <h2 id="background-heading" className="panel-title">
            Background
          </h2>
          <p className="panel-text">
            MS SQL &amp; Stored Procedures was one of the first platforms where I really began to understand the
            application of design patterns, structure and programming flow. Of all the technologies I've been able
            to work with across my career, Data is where it all comes back to. Data is the key that unlocks every
            downstream possibility, it's the foundation that unlocks opportunity for every aspect of a business.
          </p>
          <p className="panel-text mt-4">
            Since that early exposure to using data to drive the business, I've been able to work across the
            spectrum from RDBMS, to early data lakes built on Document Stores. As the technology has leapt forward
            to handle the modern data scale it's been a constant re-learning of technology from Redshift to
            Databricks, but the fundamentals remain the same.
          </p>
          <p className="panel-text mt-4">
            Data has to fit the business need, whether it's driving insights with analytics or personalization via
            ML training, the technology has to follow purpose. Data Quality matters, cost matters, performance
            matters, but each of these decision planes needs to be vetted against the company objectives. Much like
            the Iron Triangle governs the limits of what software can be built, even in the age of Agents, the key
            to a successful Data &amp; Analytics strategy is continual communication with stakeholders.
          </p>
        </section>

        <section id="key-skills" aria-labelledby="key-skills-heading" className="panel">
          <h2 id="key-skills-heading" className="panel-title">
            Key Skills
          </h2>
          <ul className="flex flex-wrap gap-2 sm:gap-3 text-sm" aria-label="Key skills">
            {keySkills.map((skill) => (
              <li
                key={skill}
                className={`rounded-full border px-3 py-1.5 ${isDark ? 'border-cyan-300/25 bg-cyan-500/10 text-cyan-100' : 'border-blue-300/40 bg-blue-100/30 text-blue-900'}`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="key-tech" aria-labelledby="key-tech-heading" className="panel">
          <h2 id="key-tech-heading" className="panel-title">
            Key Tech
          </h2>
          <ul className="flex flex-wrap gap-2 sm:gap-3 text-sm" aria-label="Key technologies">
            {keyTech.map((tech) => (
              <li
                key={tech}
                className={`rounded-full border px-3 py-1.5 ${isDark ? 'border-orange-300/25 bg-orange-500/10 text-orange-100' : 'border-orange-300/40 bg-orange-100/30 text-orange-900'}`}
              >
                {tech}
              </li>
            ))}
          </ul>
        </section>

      </main>
    </div>
  )
}

export default DataAnalyticsPage
