import { FiArrowUpRight, FiLock, FiExternalLink, FiGithub } from "react-icons/fi";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

type Project = {
  no: string;
  category: string;
  year: string;
  badge: string;
  title: string;
  desc: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
};

const projects: Project[] = [
  {
    no: "01",
    category: "AGENTIC AI · DATA SCIENCE",
    year: "2026",
    badge: "DS",
    title: "Autonomous Data Scientist — AI Business Analyst",
    desc: "A multi-agent AI system that turns a plain-English business question into a full data-science workflow — generating SQL, running EDA, training ML models, drawing charts and writing an executive report, without the user writing any SQL, Python or ML code.",
    tags: ["LangGraph", "LangChain", "Gemini", "FastAPI", "DuckDB", "Next.js"],
    github: "https://github.com/sumankr0087/autonomous-data-scientist",
    live: "https://sumankr0087.github.io/autonomous-data-scientist/",
    image: `${BASE}/projects/ai-business-analyst.png`,
  },
  {
    no: "02",
    category: "AI / RAG",
    year: "2026",
    badge: "DP",
    title: "DocuSense — Document & Policy AI",
    desc: "An enterprise document & policy assistant that answers questions strictly from your uploaded files — with clause-level citations, a hallucination guardrail that refuses to guess, and automatic compliance notes. Hybrid semantic + keyword search over a vector store.",
    tags: ["LangChain", "Chroma", "Groq", "FastEmbed", "FastAPI", "Next.js"],
    github: "https://github.com/sumankr0087/context-vault-rag",
    live: "https://sumankr0087.github.io/context-vault-rag/",
    image: `${BASE}/projects/docusense.png`,
  },
  {
    no: "03",
    category: "AGENTIC AI",
    year: "2026",
    badge: "AP",
    title: "AutoPilot — Multi-Agent Orchestrator",
    desc: "An agentic AI platform where specialised autonomous agents plan, delegate and execute multi-step tasks using tool-calling, with a live reasoning timeline and human-in-the-loop approvals.",
    tags: ["LangGraph", "Python", "Next.js", "Tool Calling"],
  },
  {
    no: "04",
    category: "FULL STACK",
    year: "2025",
    badge: "DC",
    title: "DevConnect — Developer Platform",
    desc: "A full-stack social platform for developers with real-time feeds, authentication, notifications and profile analytics, built on a scalable REST API with an optimistic UI.",
    tags: ["React", "FastAPI", "MongoDB", "WebSockets"],
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
        <span className="font-mono text-[0.68rem] tracking-widest text-violet-600">
          {p.no} · {p.category}
        </span>
        <span className="font-mono text-[0.68rem] text-neutral-400">{p.year}</span>
      </div>

      {p.image && (
        <a
          href={p.live || p.github}
          target="_blank"
          rel="noreferrer"
          className="block mb-4 overflow-hidden rounded-2xl border border-black/5 group/img"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className="w-full h-44 object-cover object-top transition duration-500 group-hover/img:scale-[1.03]"
          />
        </a>
      )}

      <div className="flex items-center gap-3 mb-3">
        <span className="font-display font-bold text-white bg-gradient-to-br from-violet-500 to-cyan-300 rounded-xl h-11 w-11 grid place-items-center shrink-0">
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

      <div className="flex flex-wrap items-center gap-4">
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-violet-600 hover:text-violet-500 transition w-fit"
          >
            <FiExternalLink size={13} /> Live Demo
          </a>
        )}
        {p.github ? (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-800 hover:text-violet-600 transition w-fit"
          >
            <FiGithub size={13} /> GitHub <FiArrowUpRight />
          </a>
        ) : (
          !p.live && (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-400 w-fit">
              <FiLock size={12} /> Private project
            </span>
          )
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-10">
      <p className="section-label mb-2">04 · Projects</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Featured Work</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <Card key={p.no} p={p} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href="https://github.com/sumankr0087?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost uppercase"
        >
          More Projects <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}
