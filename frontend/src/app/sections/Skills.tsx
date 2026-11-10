const skills = [
  { ab: "Re", name: "React" },
  { ab: "Vu", name: "Vue.js" },
  { ab: "Nx", name: "Next.js" },
  { ab: "Ts", name: "TypeScript" },
  { ab: "Js", name: "JavaScript" },
  { ab: "Tw", name: "Tailwind" },
  { ab: "Py", name: "Python" },
  { ab: "Dj", name: "Django" },
  { ab: "Fa", name: "FastAPI" },
  { ab: "Pg", name: "PostgreSQL" },
  { ab: "Mo", name: "MongoDB" },
  { ab: "Ll", name: "LLM / OpenAI" },
  { ab: "Rg", name: "RAG" },
  { ab: "Lc", name: "LangChain" },
  { ab: "Lg", name: "LangGraph" },
  { ab: "Mc", name: "MCP" },
  { ab: "Ag", name: "AI Agents" },
  { ab: "Dk", name: "Docker" },
  { ab: "Gi", name: "Git" },
  { ab: "Ap", name: "REST API" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="section-label mb-2">02 · Skills</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Tech Stack</h2>
      <p className="text-neutral-600 max-w-2xl mb-8 text-[0.95rem]">
        Frontend frameworks, backend systems, databases and the AI tooling I use to
        build scalable, intelligent products.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
        {skills.map((s) => (
          <div
            key={s.name}
            className="card rounded-2xl p-4 flex items-center gap-3"
          >
            <span className="font-display font-bold text-pink-600 bg-pink-100/70 rounded-lg h-9 w-9 grid place-items-center text-sm shrink-0">
              {s.ab}
            </span>
            <span className="font-mono text-[0.78rem] text-neutral-700 leading-tight">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
