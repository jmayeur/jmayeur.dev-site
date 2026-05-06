export interface Project {
  id: string
  title: string
  platforms: string[]
  overview: string[]
  role: string[]
  teamAndScope: string[]
  technicalApproach: string[]
  impact: string[]
  coreTech: string[]
}

export const projects: Project[] = [
  {
    id: 'digital-experience-experimentation',
    title: 'Digital Experience Experimentation',
    platforms: ['Nike.com', 'NikeApp'],
    overview: [
      'I led the technical vision for Digital Experience Experimentation across Nike.com and NikeApp, helping evolve how the direct-to-consumer platforms approached test-and-learn product development. The work centered on turning experimentation from a point solution into a platform capability that product and engineering teams could use consistently across experiences.',
      'The core challenge was not simply adding another vendor SDK. We needed to support an existing analytics ecosystem, create a more adaptable integration model, and align a broad set of teams around a future state that reduced dependency on any single provider. That meant solving for architecture, adoption, and organizational clarity at the same time.',
    ],
    role: [
      'I owned the technical direction for the effort, shaping the integration strategy, helping define the long-term platform posture, and working across organizational boundaries to move the program forward. The role required both hands-on architectural leadership and continual alignment with partner teams, because experimentation sat at the intersection of product, analytics, mobile, web, and platform engineering.',
      'A major part of the work was leading through resistance. Many teams were understandably cautious about changing established delivery patterns, instrumentation models, and optimization workflows. I spent significant time building clarity around the path forward, showing how the platform approach reduced long-term friction while improving the speed and fidelity of experimentation.',
    ],
    teamAndScope: [
      'This effort required coordination across roughly a dozen teams spanning Nike.com, NikeApp, experimentation tooling, analytics, and downstream data consumers. The scope touched both customer-facing experiences and the foundational services needed to support broader internal and external platforms over time.',
      'Because the work crossed web and native surfaces, the solution space had to hold together across TypeScript, Kotlin, and Swift while still fitting into the realities of each platform. The result was a shared direction for experimentation that could scale without forcing every team into a brittle, one-off implementation model.',
    ],
    technicalApproach: [
      'We built vendor-agnostic integration points into the experience layer so experimentation capabilities could be adopted without hard-wiring product surfaces to a single external provider. That gave teams a cleaner way to integrate Adobe Target in the near term while preserving the ability to evolve toward in-house experimentation providers later.',
      "In parallel, we supported the legacy analytics platform while helping drive alignment toward a proto-to-Databricks in-house BI direction. That transition mattered because experimentation only creates real value when targeting, event collection, analysis, and reporting can all move together. The architecture had to bridge today's operational needs with tomorrow's data model, not force a rewrite before teams could benefit.",
    ],
    impact: [
      'The project established foundational experimentation capabilities for Nike.com and NikeApp, with the underlying model designed to support additional platforms over time. More importantly, it shifted experimentation toward a durable product-development capability rather than a narrow optimization tool.',
      'The biggest wins were architectural and organizational. We created a vendor-agnostic path that reduced lock-in, preserved the option to support internal experimentation providers, and moved multiple teams toward a more modern test-and-learn posture. Just as important, I led an uphill adoption effort and helped create alignment in an area where change aversion could easily have stalled progress.',
    ],
    coreTech: [
      'Databricks',
      'Adobe Target',
      'Adobe AEP',
      'Adobe Analytics',
      'Tableau',
      'Kotlin',
      'Swift',
      'TypeScript',
    ],
  },
  {
    id: 'targeted-campaign-migration',
    title: 'On-Platform Targeted Campaign Migration',
    platforms: ['Nike.com'],
    overview: [
      "As part of Nike's initiative to reduce redundant vendor capabilities, I led a team through the full arc of migrating Nike.com's on-platform targeted campaign experience from an external vendor to an in-house capability. The work started well before a line of code was written: earning genuine trust with business partners who had grown reliant on the existing tooling was the prerequisite for everything that followed.",
      'The outcome was not just a cost reduction or a vendor swap. We built a durable, brand-aligned campaign experience that gave business partners stronger tools for driving conversion, established accessibility as a first-class requirement rather than a compliance checkbox, and created a data and triggering foundation that digital product teams could build on long after the migration was complete.',
    ],
    role: [
      'I led the team and set the technical direction across the full lifecycle — from the initial trust-building conversations with business stakeholders through architectural decisions, delivery, and post-launch stabilization. The leadership challenge was as significant as the technical one: business partners had a working system with established patterns and specific expectations, and I needed to bring them along as genuine collaborators rather than dependencies to manage.',
      'I owned the decision to adopt a micro-frontend architecture as the primary isolation strategy, and shaped the approach to analytics unification that became the most impactful win of the project.',
    ],
    teamAndScope: [
      'The project was focused on Nike.com and required close collaboration between engineering, merchandising, marketing, analytics, and platform teams. Business partners were embedded in the process from the beginning — the trust-building phase was part of the delivery plan, not a precursor to it.',
      'Scope extended beyond the visible campaign surface. The triggering and data foundation we built was designed to support future digital product development, making the migration a platform investment as much as a product delivery.',
    ],
    technicalApproach: [
      'We adopted a micro-frontend architecture to isolate the new campaign capability from the core commerce experience. This was a deliberate choice to protect key performance metrics — particularly Largest Contentful Paint (LCP) — while allowing the campaign layer to evolve independently. Micro-frontends enabled incremental shipping and real-traffic validation without risking degradation to the broader shopping experience.',
      'Accessibility was architected in from the start rather than retrofitted. Brand alignment was treated as a technical requirement: we built a component model that enforced visual consistency with the Nike design language rather than replicating the flexibility — and inconsistency — of the vendor approach. The data and triggering layer was designed as a foundation with clean integration points for downstream teams.',
    ],
    impact: [
      "The project delivered on every dimension: significant vendor spend reduction, brand-consistent campaign experiences that maintain Nike's visual identity across the commerce surface, and an accessibility implementation that set a new standard for the platform.",
      "The most impactful outcome was analytics unification. Prior to the migration, campaign outcome analysis lived in a separate vendor analytics stream, making it difficult to connect campaign performance to Nike's internal data and decision-making pipelines. By migrating campaign analytics onto Nike's internal analytics capabilities, we closed that loop — business partners could now analyze performance in the same system they used for everything else, with a shared data model and no translation layer between systems.",
    ],
    coreTech: [
      'TypeScript',
      'React',
      'Micro-frontends',
      'Adobe Analytics',
      'LCP Optimization',
      'Nike Design System',
    ],
  },
  {
    id: 'nikeco-platform-evolution',
    title: 'Nike.com Platform Evolution',
    platforms: ['Nike.com'],
    overview: [
      'Nike.com is one of the most visited commerce destinations in the world, supporting a multi-billion dollar direct-to-consumer business across global markets, product lines, and high-stakes launch moments — from everyday browse-and-buy to the high-throughput, second-scale demand of major product drops. Keeping that platform fast, resilient, and evolvable across years of growth required sustained architectural investment and a team culture built around genuine ownership.',
      'Over a span of roles from Principal Engineer through Engineering Director, I helped shape Nike.com through one of the most consequential transitions in its history: moving from a tightly coupled Java monolith toward a microservice-backed, cloud-based experience platform. The goal was not just technical modernization — it was creating a system where teams could move independently, ship with confidence, and continuously raise the bar for the consumer.',
    ],
    role: [
      'As a Principal Engineer, I was involved in early architectural decisions that had long-lasting downstream effects. The most consequential was establishing a vertical-experience model that allowed individual product surface teams to own their own CI/CD pipelines and delivery cadence, while a shared platform layer enforced the consistency that a brand like Nike demands. That balance — autonomy at the experience layer, coherence at the platform layer — became a durable pattern for how Nike.com was built and operated.',
      'As I moved into Sr. Engineering Manager and then Engineering Director, my leverage shifted from individual technical decisions to the health and capability of the teams making them. I focused heavily on mentorship, on helping engineers grow into owners rather than ticket-takers, and on building a culture where teams felt accountable to the consumer first and the backlog second. I partnered closely with business and product leaders to make cross-functional collaboration a structural part of how we worked, not just an occasional event.',
    ],
    teamAndScope: [
      "Nike.com at scale is not one team — it is a federation of vertical experience teams, platform engineering groups, and shared-service owners, all operating under the pressure of a brand that cannot afford inconsistency or downtime. Coordinating across that landscape while preserving each team's ability to move fast was one of the defining challenges of the Director role.",
      'The platform scope included the full commerce stack: browse, search, product detail, cart, checkout, authentication, personalization, and the underlying infrastructure connecting them. It also meant owning the developer experience — the CI/CD tooling, deployment pipelines, and observability foundations that determined how quickly and safely a team could ship.',
    ],
    technicalApproach: [
      'The migration from monolith to microservices was phased and deliberate. Rather than a full rewrite, we carved out vertical slices of the experience and moved them to independently deployable services backed by cloud infrastructure. Each vertical owned its own data contracts, its own release cadence, and its own on-call posture — which forced real ownership in a way that shared-monolith development never had.',
      'The platform layer — routing, authentication, shared UI primitives, design system integration, and observability — remained a managed common foundation. This two-tier model was central to the architecture: give teams freedom to innovate within their domain, but hold the line on the things that define the experience for every consumer who lands on Nike.com, regardless of which surface they are on.',
      'Performance and resilience were treated as continuous, first-class concerns rather than one-time projects. High-demand moments like major product releases create traffic patterns that have no commercial parallel — the platform had to be designed and tested for those conditions regularly, not just hoped to survive them.',
    ],
    impact: [
      'The architectural shift to independently deployable vertical experiences materially accelerated delivery across the platform. Teams that once coordinated releases across a shared monolith could now ship on their own schedule, run their own experiments, and respond to production incidents without waiting for a coordinated deployment window. That velocity compounded over time.',
      'The cultural shift was equally significant. By building an environment where teams owned their domain end-to-end — from design collaboration through production operations — we raised the quality floor across the platform. Engineers who feel genuine ownership over a consumer experience make better decisions than those executing against a specification. That principle shaped how I hired, how I structured teams, and how I measured success.',
      'Nike.com continued to grow as a multi-billion dollar DTC platform through and beyond this period of transformation, supporting an increasingly global consumer base and increasingly demanding product experiences — a testament to the durability of the architectural and organizational patterns the teams built together.',
    ],
    coreTech: [
      'Java',
      'Node.js',
      'React',
      'TypeScript',
      'AWS',
      'Microservices',
      'GraphQL',
      'CI/CD Pipelines',
      'Adobe Analytics',
      'Distributed Systems',
    ],
  },
]
