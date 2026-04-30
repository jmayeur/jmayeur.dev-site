export interface PageSection {
  id: string
  heading: string
  /** Each string may contain HTML (static authored content only — never user input) */
  paragraphs?: string[]
  badges?: string[]
  badgeVariant?: 'cyan' | 'orange'
}

export interface PageContent {
  title: string
  /** Optional styled suffix appended to the h1, e.g. "(O11y)" */
  titleSuffix?: string
  subtitle: string
  sections: PageSection[]
}

export const pageContent: Record<string, PageContent> = {
  'data-analytics': {
    title: 'Data & Analytics',
    subtitle: 'From stored procedures to Databricks — data is where it all comes back to.',
    sections: [
      {
        id: 'background',
        heading: 'Background',
        paragraphs: [
          'MS SQL &amp; Stored Procedures was one of the first platforms where I really began to understand the application of design patterns, structure and programming flow. Of all the technologies I\'ve been able to work with across my career, Data is where it all comes back to. Data is the key that unlocks every downstream possibility, it\'s the foundation that unlocks opportunities for every aspect of a business.',
          'Since that early exposure to using data to drive the business, I\'ve been able to work across the spectrum from RDBMS, to early data lakes built on Document Stores. As the technology has leapt forward to handle the modern data scale it\'s been a constant re-learning of technology from Redshift to Databricks, but the fundamentals remain the same.',
          'Data has to fit the business need, whether it\'s driving insights with analytics or personalization via ML training, the technology has to follow purpose. Data Quality matters, cost matters, performance matters, but each of these decision planes needs to be vetted against the company objectives. Much like the Iron Triangle governs the limits of what software can be built, even in the age of Agents, the key to a successful Data &amp; Analytics strategy is continual communication with stakeholders.',
        ],
      },
      {
        id: 'key-skills',
        heading: 'Key Skills',
        badges: [
          'Client Instrumentation',
          'Data Ingestion',
          'Data Processing',
          'Data Shaping',
          'Analytics & BI Reporting',
          'Data Storage & Mirroring',
        ],
        badgeVariant: 'cyan',
      },
      {
        id: 'key-tech',
        heading: 'Key Tech',
        badges: [
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
        ],
        badgeVariant: 'orange',
      },
    ],
  },

  'management-philosophy': {
    title: 'Management Philosophy',
    subtitle: 'Three principles that define how I lead: Clear Vision, Trust, and Expectation.',
    sections: [
      {
        id: 'vision',
        heading: 'Clear Vision',
        paragraphs: [
          'As a leader it\'s my responsibility to ensure that the teams I support know the what, the why and have a clear connection to the value they are creating. Throughout my career I am constantly reminded that a team that believes in what they are doing will always outperform one that is simply taking tasks from a list.',
        ],
      },
      {
        id: 'trust',
        heading: 'Trust',
        paragraphs: [
          'As a leader I need the teams I support to trust me. Trust is the speed-limit of work. Building trust and credibility takes time, it takes practice but the benefits are unmatched. Trust has to go beyond the internal teams &mdash; our customers have to trust me, and the teams. We have to show the customer that we understand them, we feel their urgency and we want to succeed with them.',
        ],
      },
      {
        id: 'expectation',
        heading: 'Expectation',
        paragraphs: [
          'As a leader I need to state and restate what I expect of the teams I support. I also need to be clear about what I expect from myself, and be willing to hold myself just as accountable as I hold the teams. In a dynamic workspace, where requirements change, people change, goals change, expectation goes beyond just hitting commitments. Expectations need to be defined on how we work, and evolve as a team. Building on the Vision &amp; Trust, the role of leader is to create an environment where the core expectation is ownership &mdash; that we collectively own evolving with and serving our customers at the speed they work.',
        ],
      },
    ],
  },

  'observability': {
    title: 'Observability',
    titleSuffix: '(O11y)',
    subtitle: 'Observability only creates value when the team can act on the signal.',
    sections: [
      {
        id: 'philosophy',
        heading: 'Philosophy',
        paragraphs: [
          'Observability is a trap, or it can be. It\'s too easy to focus on the tooling, and forget the purpose. Throw NewRelic or Splunk, OTEL, DataDog, Dynatrace or whatever platform you choose and log everything. Don\'t worry, the bill doesn\'t come due until later. A key lesson that I keep learning is that a signal is only useful if I can act on it.',
          'When I think about how to consider O11y for a project, especially in Agentic O11y, I begin with what can I do with the insight. Take logging network call failures. Of course if a service is failing to reach a downstream system, or a user experience is failing to post data to some endpoint, we need to know so we can address the issue. Unfortunately there\'s always noise. Safari is especially hard on analytics and tracking services.',
          'When I think about a problem like sorting signal from noise, I start with what would I expect to happen if I see a 2% spike in signal, what about 0.01%. The primary driving mindset is to think of O11y more like GPS than a smoke alarm. I want it to tell me how to keep on the right path, not cause panic. The worst thing that can happen to a team is when they have over-indexed on capturing every bit of data, and become inured to the sound of a PagerDuty alarm bell.',
          'Fundamentally, O11y is about surfacing the insights from within the black boxes of complex multi-domain systems, but with the intent of keeping the lights on, not raising alarms.',
        ],
      },
    ],
  },

  'web-development': {
    title: 'Web Development',
    subtitle: 'Create, iterate, and evolve: that has always been the core of why web development matters to me.',
    sections: [
      {
        id: 'history',
        heading: 'History',
        paragraphs: [
          'It started with <a class="underline decoration-cyan-400/70 underline-offset-4 hover:decoration-cyan-300" href="https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest" target="_blank" rel="noreferrer">oXMLHTTPRequest</a>. I had been noodling with HTML and JavaScript using Internet Explorer 4, and I came across that function. At the time I was working for a company that provided web-based employment applications. One aspect of these applications was a series of questions created by IO Psychologists to assess a candidate\'s fit for a role. These tests used an early Neural Network to evaluate the user\'s responses based on outcomes from previous applicants and their answers. QAing these tests was very time-consuming. Upon finding this function, it occurred to me that I could use structured data, XML, to encode various persona answers and use a testing frame to load that data, and auto-fill the web pages.',
          'The creation of that testing harness was a formative moment for me. I unlocked 2 key insights that still drive me forward today. First, the web is fundamentally one of the most adaptive development spaces; even in this world of apps and mobile phones, web is still incredibly adaptable to new capabilities and fosters innovation through that flexibility. Second, software development at its best is about simplifying and accelerating.',
        ],
      },
      {
        id: 'technology',
        heading: 'Technology',
        paragraphs: [
          'I will always love JavaScript. It was the first JIT language that felt like it could keep up with the way I wanted to continually iterate on a problem. React has come to dominate web application architecture and TypeScript has added some missing rigor in the upfront development phase, but in the end it\'s the fluidity and real-time feedback of web development that keeps me engaged 20 years later.',
          'Agentic loops and tailored skills have shifted the how in many cases. I don\'t think I\'ll ever hand-code anything complex again. The goal is the same: create, iterate and evolve. That is the core of what makes web special to me and to the evolution of the software landscape.',
        ],
      },
    ],
  },

  'agentic-flow': {
    title: 'Agentic Flow',
    subtitle: 'How Agents are shifting the world of digital product development — a view as of 4/30/2026.',
    sections: [
      {
        id: 'disclaimer',
        heading: 'Disclaimer',
        paragraphs: [
          'Keeping things tool agnostic, I wanted to share my general understanding of how Agents are shifting the world of digital product development. Like all things AI these days, this is my view as of 4/30/2026, and it will expire as soon as the next model/tool/convention drops which is right now.',
        ],
      },
      {
        id: 'philosophy-developer',
        heading: 'Philosophy as a Developer',
        paragraphs: [
          'The way I work with and orchestrate Agents begins with the last mile. I focus on identifying what it takes to push code into production. I take my understanding of that process and use that insight to create specific skills and Agents to drive quality, security, accessibility, load and performance testing, or whatever is expected to ensure the quality and robustness of the built application.',
          'From there I work upstream towards the creation, specification, and ideation with agents to execute, advise and research. The entire flow of an idea into a production application (PDLC) can be accelerated with Agents.',
          'This shift has left me unmoored at times, if coding is done by an Agent, what do I do? If managing infrastructure, CI/CD and production monitoring is done by an Agent what do I do? For now the answer is in the Specification and Ideation phases. It\'s critical to bring any expertise I have further upstream. Without exception the higher the quality of the Specs, the higher the quality of the final application.',
          'Crucial to this way of working is focusing on output/outcomes. If I can define my expectations with enough detail and to structure iterative Agentic review and validation cycles that focus on matching outputs to expected outcomes there is little need for me to write, or read the vast majority of code that is created.',
          'There is a lot of tooling to help create and manage specifications in the world of Agentic-first development. I\'ve worked with several and there are reasons you might favor one over the other, but the most critical factor is less about the flavor of tooling and more about the time and thought cycles spent thinking about specifications.',
        ],
      },
      {
        id: 'philosophy-leader',
        heading: 'Philosophy as a Leader',
        paragraphs: [
          'Currently there are two primary aspects that I think leaders need to be driving when it comes to thinking about Agentic PDLC. First, creating space for the change. It\'s difficult for anyone to relearn their job, and with the pace of change, mostly driven by compute power, teams will need to relearn their job on almost a monthly basis. Leadership should be focused on finding low-risk spaces for their teams to experiment with evolving every aspect of their digital product development flow. There needs to be an environment that balances the need to ship more today with the need to re-tool for tomorrow\'s ways-of-working.',
          'Second, leaders need to be realistic. There\'s too much hype, and not enough proven value with AI. Yes it can shift some work into an automated flow, but the hard parts still exist. It\'s useless to create a new set of APIs if you don\'t have an end consumer to utilize them. Sure it might only take a day, but without a purpose AI is just a toy, not a tool. Leaders should be focused on getting teams to use their additional capacity to ideate more, not reduce capacity, or only emphasizing faster delivery. Leaders need to set expectations that AI can drive faster feedback loops and faster implementation, but that teams also need to be very comfortable throwing away bad ideas. In the end AI is really just a fantastic way to create a truly Agile workflow that unlocks the power of people and customer collaboration with incredible speed and fidelity.',
        ],
      },
    ],
  },
}
