const items = [
  "Full-Stack Development",
  "RESTful API Design",
  "LLM & RAG Systems",
  "Agentic AI & Tool Calling",
  "LangChain & LangGraph",
  "MCP Integrations",
  "Vector Search & Embeddings",
  "React / Vue / Next.js",
  "Python / Django / FastAPI",
  "Database Schema Design",
  "Clean Architecture & OOP",
  "Docker & CI/CD",
  "Git & Collaboration",
  "Responsive UI / UX",
];

export default function Competencies() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <p className="section-label mb-2">05 · Core Competencies</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Beyond the Code</h2>

      <div className="flex flex-wrap gap-3">
        {items.map((i) => (
          <span
            key={i}
            className="card rounded-full px-5 py-2.5 font-mono text-[0.8rem] text-neutral-700"
          >
            {i}
          </span>
        ))}
      </div>
    </section>
  );
}
