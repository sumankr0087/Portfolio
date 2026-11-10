const items = [
  "FULL-STACK DEVELOPER",
  "AI / AGENTIC ENGINEER",
  "REACT & NEXT.JS",
  "PYTHON & FASTAPI",
  "RAG PIPELINES",
  "LANGCHAIN & LANGGRAPH",
  "MCP",
  "VECTOR DATABASES",
  "CELERY & REDIS",
  "DOCKER & AWS",
  "CI/CD & GITHUB ACTIONS",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative py-5 border-y border-black/5 bg-white/40 overflow-hidden">
      <div className="marquee-track gap-8">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-widest text-neutral-500 flex items-center gap-8"
          >
            {t} <span className="text-violet-400">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
