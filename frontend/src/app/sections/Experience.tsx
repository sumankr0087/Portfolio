const roles = [
  {
    badge: "D9",
    period: "MAR 2026 – PRESENT",
    title: "Python Developer",
    company: "Double9 Books · Noida",
    points: [
      "Develop high-performance FastAPI & Django REST APIs with JWT auth, request validation and async endpoints for business and AI-driven features.",
      "Architected microservices-based backend modules, splitting AI inference, data processing and API layers into independently deployable Docker services.",
      "Built LLM automation with LangChain (tool calls, structured outputs, retries) and RAG pipelines so LLMs answer from internal documents, reducing hallucinations.",
      "Designed stateful multi-agent workflows with LangGraph (conditional routing, human-in-the-loop checkpoints) and built MCP servers to securely expose internal APIs to LLM agents.",
      "Built Python data pipelines (Pandas, BeautifulSoup, Selenium) processing 5,000+ records, cutting manual effort by 60%.",
    ],
    tags: ["Python", "FastAPI", "Django", "LangChain", "LangGraph", "MCP", "Ollama", "Docker"],
  },
  {
    badge: "ES",
    period: "JUL 2022 – FEB 2026",
    title: "Software Development Engineer",
    company: "Essentia SoftServ LLP · Delhi",
    points: [
      "Developed 15+ scalable Django REST APIs for production B2B platforms integrated with ReactJs & VueJs frontends, improving frontend-backend efficiency by 25%.",
      "Built reusable ReactJs and VueJs / NuxtJs components with Hooks and state management for responsive B2B dashboards.",
      "Implemented JWT authentication and RBAC; optimized PostgreSQL and MySQL queries for large datasets.",
      "Worked in Git-based CI/CD agile teams across 25+ sprints; improved frontend and API performance by 40% via lazy loading and optimized state management.",
    ],
    tags: ["Python", "Django", "JavaScript", "ReactJs", "VueJs", "PostgreSQL", "MySQL"],
  },
  {
    badge: "RO",
    period: "JUL 2020 – OCT 2020",
    title: "Frontend Developer Intern",
    company: "RightO",
    points: [
      "Built responsive pages and reusable UI components from design mockups and integrated REST APIs with backend developers.",
    ],
    tags: ["JavaScript", "ReactJs", "HTML5", "CSS3"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-10">
      <p className="section-label mb-2">03 · Experience</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Where I&apos;ve Worked</h2>

      <div className="space-y-5">
        {roles.map((r) => (
          <div key={r.title} className="card rounded-3xl p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              <div className="flex items-center gap-4 md:w-52 shrink-0">
                <span className="font-display font-bold text-white bg-gradient-to-br from-violet-600 to-cyan-400 rounded-2xl h-12 w-12 grid place-items-center shrink-0">
                  {r.badge}
                </span>
                <span className="font-mono text-[0.68rem] tracking-widest text-violet-600 leading-tight">
                  {r.period}
                </span>
              </div>
              <div className="grow">
                <h3 className="font-display text-xl font-bold text-neutral-900">{r.title}</h3>
                <p className="font-mono text-sm text-neutral-500 mb-3">{r.company}</p>
                <ul className="space-y-2 mb-4">
                  {r.points.map((p, i) => (
                    <li key={i} className="flex gap-2.5 text-neutral-600 leading-relaxed text-[0.9rem]">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-400 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {r.tags.map((t) => (
                    <span key={t} className="chip">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
