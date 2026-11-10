const roles = [
  {
    badge: "D9",
    period: "PRESENT",
    title: "Developer",
    company: "Double9 Books",
    desc: "Building full-stack web applications and REST APIs with Python, Django & FastAPI, modern React / Next.js frontends, and AI-powered features including RAG pipelines and agentic workflows for publishing and content systems.",
    tags: ["Python", "FastAPI", "Next.js", "React", "LLM", "RAG"],
  },
  {
    badge: "FS",
    period: "3+ YEARS",
    title: "Full-Stack Developer",
    company: "Web & Product Work",
    desc: "Delivered optimised production websites and apps across the stack using Vue, Nuxt, React, Tailwind on the frontend and Python / Django / FastAPI with PostgreSQL & MongoDB on the backend — focused on performance and clean architecture.",
    tags: ["Vue", "Nuxt", "Django", "PostgreSQL", "Tailwind"],
  },
  {
    badge: "AI",
    period: "RECENT FOCUS",
    title: "AI / Agentic Engineering",
    company: "LLM & RAG Systems",
    desc: "Designing LLM applications and autonomous agents with LangChain, LangGraph and MCP — vector search, retrieval-augmented generation and tool-calling pipelines, including the open-source Context Vault RAG system.",
    tags: ["LangChain", "LangGraph", "MCP", "Vector DB", "Agents"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <p className="section-label mb-2">03 · Experience</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">What I Do</h2>

      <div className="space-y-5">
        {roles.map((r) => (
          <div key={r.title} className="card rounded-3xl p-6 md:p-7">
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              <div className="flex items-center gap-4 md:w-56 shrink-0">
                <span className="font-display font-bold text-white bg-gradient-to-br from-pink-500 to-pink-400 rounded-2xl h-12 w-12 grid place-items-center shrink-0">
                  {r.badge}
                </span>
                <span className="font-mono text-[0.68rem] tracking-widest text-pink-600">
                  {r.period}
                </span>
              </div>
              <div className="grow">
                <h3 className="font-display text-xl font-bold text-neutral-900">{r.title}</h3>
                <p className="font-mono text-sm text-neutral-500 mb-3">{r.company}</p>
                <p className="text-neutral-600 leading-relaxed text-[0.92rem] mb-4">{r.desc}</p>
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
