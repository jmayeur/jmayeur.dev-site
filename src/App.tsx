import React from 'react'
import { Link } from '@tanstack/react-router'

const experience = [
  {
    company: 'Nike Inc',
    role: 'Sr Principal / Distinguished Engineer',
    period: 'May 2022 - Apr 2026',
    points: [
      'Provided leadership across Paid Marketing Digital Integration and the Digital Experience Experimentation offense.',
      'Contributed technical expertise and helped map tools to the goal of connecting with Athletes on a personal level.',
    ],
  },
  {
    company: 'Nike Inc',
    role: 'Engineering Director',
    period: 'Mar 2018 - Apr 2022',
    points: [
      'Led Discover and Shop experience teams as they moved beyond cloud migration to deliver increasingly resilient experiences.',
      'Challenged teams to continuously improve, own domains, and prioritize the Athletes they serve.',
    ],
  },
  {
    company: 'Nike Inc',
    role: 'Sr Engineering Manager',
    period: 'Jul 2017 - Mar 2018',
    points: [
      'Led global expansion for the SNKRS web platform cloud migration.',
      'Partnered with global stakeholders to bring the launch experience to Japan, China, and EMEA, paving the way for SNKRS app expansion.',
    ],
  },
  {
    company: 'Nike Inc',
    role: 'Lead / Architect / Principal Engineer',
    period: 'Mar 2008 - Jul 2017',
    points: [
      'Supported global sales wholesale Nike.net platform and sales tools in multiple engineering capacities.',
      'Focused on full stack engineering and enabling teams to create composed experiences.',
    ],
  },
  {
    company: 'Softsrc Consulting',
    role: 'Architect',
    period: 'Sep 2005 - Mar 2008',
    points: [
      'Worked with several large clients designing a broad array of full stack solutions.',
      'Taught classes at OGI and mentored engineering teams on modern web platforms.',
    ],
  },
]

const skills = [
  '15+ years leading cross-functional development teams',
  '20+ years focusing on creating user value',
  '15+ years architecting full stack solutions across varied products',
  '20+ years of cross-organization collaboration',
]

function App() {
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
  
  const darkGradient = 'radial-gradient(circle at 20% 20%,rgba(56,189,248,0.15),transparent 28%),radial-gradient(circle at 80% 0%,rgba(251,146,60,0.15),transparent 26%),linear-gradient(135deg,#020617,#0f172a 45%,#111827)'
  const lightGradient = 'radial-gradient(circle at 20% 20%,rgba(59,130,246,0.08),transparent 28%),radial-gradient(circle at 80% 0%,rgba(168,85,247,0.08),transparent 26%),linear-gradient(135deg,#faebd7,#f5e6d3 45%,#ecdcc8)'

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
          <div></div>
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
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l-2.12-2.12a1 1 0 00-1.414 1.414l2.12 2.12a1 1 0 001.414-1.414zM2.05 6.464a1 1 0 000-1.414L.636 3.636a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0zm12.728 0l1.414-1.414a1 1 0 000-1.414l-1.414-1.414a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414 0zm0 11.314l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM2.05 13.536a1 1 0 001.414 0l1.414-1.414a1 1 0 00-1.414-1.414L2.05 12.122a1 1 0 000 1.414zm10.657-1.414a1 1 0 00-1.414 1.414l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414zM10 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM3 10a1 1 0 11-2 0 1 1 0 012 0zm14 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
          Jeff Mayeur
        </h1>
        <p className={`mt-5 max-w-2xl text-pretty text-base leading-relaxed md:text-lg ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          Technology leader with 20+ years across architecture, engineering
          leadership, and hands-on delivery, focused on building systems that
          unlock value for people.
        </p>

        <ul className={`mt-6 flex flex-wrap gap-2 sm:gap-3 text-sm ${isDark ? 'text-slate-200' : 'text-slate-800'}`} aria-label="Contact details">
          <li>
            <a className="chip-link" href="tel:+15034220865">
              503.422.0865
            </a>
          </li>
          <li>
            <a className="chip-link" href="mailto:jmayeur@icloud.com">
              jmayeur@icloud.com
            </a>
          </li>
          <li>
            <a
              className="chip-link"
              href="https://www.linkedin.com/in/jeff-mayeur"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>

        <nav aria-label="Primary" className="mt-8 flex flex-wrap gap-2 sm:gap-3">
          <a className="chip-link" href="#bring">
            What I Bring
          </a>
          <a className="chip-link" href="#looking-for">
            What I am Looking For
          </a>
          <a className="chip-link" href="#projects">
            Experience
          </a>
          <a className="chip-link" href="#skills">
            Skills
          </a>
          <a className="chip-link" href="#subpages">
            Deep Dives
          </a>
          <a className="chip-link" href="#activities">
            Activities
          </a>
        </nav>
      </header>

      <main id="content" className="mx-auto grid w-full max-w-5xl gap-8 px-6 pb-16 md:px-10">
        <section id="bring" aria-labelledby="bring-heading" className="panel">
          <h2 id="bring-heading" className="panel-title">
            What I Bring
          </h2>
          <p className="panel-text">
            There are four core ideas that define me. First, technology is the
            tool, not the purpose. Second, learning is the start of everything;
            I need to understand the space, the people, and the opportunity
            before I can create value. Third, shift-left is for more than
            security, accessibility, and quality - in the age of agents, it is
            the entire product development lifecycle. Fourth, trust brings speed,
            and speed grows value.
          </p>
          <p className="panel-text mt-4">
            Over the last 20 years, I have had opportunities across the stack:
            from relational databases to Databricks, from WinForms and Java
            applets to React experiences, and from under-desk datacenters to
            cloud compute. I do my best work when I can collapse the timeline
            between idea and interaction.
          </p>
        </section>

        <section id="looking-for" aria-labelledby="looking-for-heading" className="panel">
          <h2 id="looking-for-heading" className="panel-title">
            What I am Looking For
          </h2>
          <p className="panel-text">
            My career has been a hybrid of management and technical leadership.
            My ideal role fuses those strengths. I love systems - both people
            and technology - and I am looking for opportunities where I can
            mentor and grow others while staying hands-on in the technology
            pipeline.
          </p>
        </section>

        <section id="projects" aria-labelledby="experience-heading" className="panel">
          <h2 id="experience-heading" className="panel-title">
            Experience
          </h2>
          <ol className="grid gap-6" aria-label="Work history">
            {experience.map((job, index) => (
              <li key={`${job.role}-${index}`} className={`rounded-xl border p-5 ${isDark ? 'border-slate-800/80 bg-slate-900/60' : 'border-slate-300/60 bg-slate-200/40'}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-slate-50' : 'text-slate-900'}`}>{job.role}</h3>
                  <p className={`text-sm ${isDark ? 'text-cyan-200' : 'text-blue-600'}`}>{job.period}</p>
                </div>
                <p className={`mt-1 text-sm ${isDark ? 'text-orange-200' : 'text-orange-700'}`}>{job.company}</p>
                <ul className={`mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed md:text-base ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className="panel">
          <h2 id="skills-heading" className="panel-title">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2 sm:gap-3 text-sm" aria-label="Core skills">
            {skills.map((skill) => (
              <li key={skill} className={`rounded-full border px-3 py-1.5 ${isDark ? 'border-cyan-300/25 bg-cyan-500/10 text-cyan-100' : 'border-blue-300/40 bg-blue-100/30 text-blue-900'}`}>
                {skill}
              </li>
            ))}
          </ul>
        </section>

        <section id="subpages" aria-labelledby="subpages-heading" className="panel">
          <h2 id="subpages-heading" className="panel-title">
            Deep Dives
          </h2>
          <div className="mt-5 flex flex-wrap gap-2 sm:gap-3 text-sm" aria-label="Profile deep dives">
            <Link className="chip-link" to="/data-analytics">
              Data &amp; Analytics
            </Link>
            <Link className="chip-link" to="/management-philosophy">
              Management Philosophy
            </Link>
            <Link className="chip-link" to="/observability">
              Observability (O11y)
            </Link>
            <Link className="chip-link" to="/web-development">
              Web Development
            </Link>
          </div>
        </section>

        <section id="activities" aria-labelledby="activities-heading" className="panel">
          <h2 id="activities-heading" className="panel-title">
            Activities
          </h2>
          <p className="panel-text">
            Outside of work I am passionate about family, skiing, hiking, and
            biking. I have been in the Pacific Northwest for 25 years and thrive
            in environments where the outdoors is right outside my door. I am
            excited to continue learning and discovery as I explore what is
            next.
          </p>
        </section>
      </main>
    </div>
  )
}

export default App
