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
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <a href="#content" className="skip-link">
        Skip to main content
      </a>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.15),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(251,146,60,0.15),transparent_26%),linear-gradient(135deg,#020617,#0f172a_45%,#111827)]" />

      <header className="mx-auto w-full max-w-5xl px-6 pb-10 pt-12 md:px-10 md:pt-16">
        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300/90">
          Professional Profile
        </p>
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">
          Jeff Mayeur
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
          Technology leader with 20+ years across architecture, engineering
          leadership, and hands-on delivery, focused on building systems that
          unlock value for people.
        </p>

        <ul className="mt-6 flex flex-wrap gap-3 text-sm text-slate-200" aria-label="Contact details">
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

        <nav aria-label="Primary" className="mt-8 flex flex-wrap gap-3">
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
            {experience.map((job) => (
              <li key={job.company} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-5">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-50">{job.role}</h3>
                  <p className="text-sm text-cyan-200">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-orange-200">{job.company}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300 md:text-base">
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
          <ul className="flex flex-wrap gap-3 text-sm" aria-label="Core skills">
            {skills.map((skill) => (
              <li key={skill} className="rounded-full border border-cyan-300/25 bg-cyan-500/10 px-3 py-1.5 text-cyan-100">
                {skill}
              </li>
            ))}
          </ul>
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
