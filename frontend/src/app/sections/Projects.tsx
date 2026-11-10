import { FiArrowUpRight, FiLock } from "react-icons/fi";

type Project = {
  no: string;
  category: string;
  year: string;
  badge: string;
  title: string;
  desc: string;
  tags: string[];
  github?: string;
};

const projects: Project[] = [
  {
    no: "01",
    category: "AI / RAG",
    year: "2026",
    badge: "CV",
    title: "Context Vault — RAG System",
    desc: "A production-grade Retrieval-Augmented Generation system that ingests documents, builds a semantic vector store and answers questions grounded in your own knowledge base with cited sources.",
    tags: ["Python", "FastAPI", "Vector DB", "LLM", "RAG"],
    github: "https://github.com/sumankr0087/context-vault-rag",
  },
  {
    no: "02",
    category: "AGENTIC AI",
    year: "2026",
    badge: "AP",
    title: "AutoPilot — Multi-Agent Orchestrator",
    desc: "An agentic AI platform where specialised autonomous agents plan, delegate and execute multi-step tasks using tool-calling, with a live reasoning timeline and human-in-the-loop approvals.",
    tags: ["LangGraph", "Python", "Next.js", "Tool Calling"],
  },
  {
    no: "03",
    category: "LLM SAAS",
    year: "2026",
    badge: "DM",
    title: "DocuMind — AI Document Q&A",
    desc: "A full-stack SaaS that lets teams upload PDFs and chat with them — streaming LLM responses, per-workspace memory, usage billing and role-based access control.",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "OpenAI"],
  },
  {
    no: "04",
    category: "FULL STACK",
    year: "2025",
    badge: "DC",
    title: "DevConnect — Developer Platform",
    desc: "A full-stack social platform for developers with real-time feeds, authentication, notifications and profile analytics, built on a scalable REST API with an optimistic UI.",
    tags: ["React", "Node.js", "MongoDB", "WebSockets"],
  },
  {
    no: "05",
    category: "FULL STACK",
    year: "2025",
    badge: "SS",
    title: "ShopSphere — E-commerce Engine",
    desc: "A complete commerce platform with cart, checkout, payments, an admin dashboard and an AI product-recommendation engine powered by embeddings.",
    tags: ["Next.js", "Django", "Stripe", "AI Recsys"],
  },
];

function Card({ p }: { p: Project }) {
  return (
    <div className="card rounded-3xl p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-[0.68rem] tracking-widest text-pink-600">
          {p.no} · {p.category}
        </span>
        <span className="font-mono text-[0.68rem] text-neutral-400">{p.year}</span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        <span className="font-display font-bold text-white bg-gradient-to-br from-pink-500 to-orange-300 rounded-xl h-11 w-11 grid place-items-center shrink-0">
          {p.badge}
        </span>
        <h3 className="font-display text-lg font-bold text-neutral-900 leading-tight">
          {p.title}
        </h3>
      </div>

      <p className="text-neutral-600 leading-relaxed text-[0.88rem] grow">{p.desc}</p>

      <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
        {p.tags.map((t) => (
          <span key={t} className="chip">{t}</span>
        ))}
      </div>

      {p.github ? (
        <a
          href={p.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-800 hover:text-pink-600 transition w-fit"
        >
          GitHub <FiArrowUpRight />
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-400 w-fit">
          <FiLock size={12} /> Private project
        </span>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
      <p className="section-label mb-2">04 · Projects</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Featured Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card key={p.no} p={p} />
        ))}
      </div>
    </section>
  );
}
