import { FiArrowRight } from "react-icons/fi";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stats = [
  { k: "4+", v: "Years Experience" },
  { k: "12+", v: "Projects Built" },
  { k: "AI", v: "RAG & Agents" },
];

export default function Hero() {
  return (
    <section id="home" className="relative mx-auto max-w-6xl px-6 pt-36 pb-12">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-up">
          <span className="chip mb-6">
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-violet-500" />
            Developer at Double9 Books
          </span>

          <p className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-900 leading-none">
            Hi, I&apos;m
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold pink-text leading-none mt-1 mb-4 break-words">
            Suman Kumar
          </h1>
          <p className="font-mono text-sm md:text-base text-neutral-500 mb-5">
            Full-Stack Developer <span className="text-violet-500">&amp;</span> AI / Agentic Engineer
          </p>

          <p className="max-w-xl text-neutral-600 leading-relaxed mb-8 text-[0.95rem]">
            Software Developer with 4+ years of experience building optimised,
            production-grade systems — Python, FastAPI &amp; Django backends,
            React / Vue / Next.js frontends, and intelligent systems powered by
            RAG pipelines, LangChain, LangGraph and agentic AI.
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects" className="btn-pink uppercase">
              View Projects <FiArrowRight />
            </a>
            <a href="#contact" className="btn-ghost uppercase">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Right — photo with floating tags */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full p-1.5 bg-gradient-to-br from-violet-300 via-violet-200 to-cyan-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/suman-linkedin.jpg`}
                alt="Suman Kumar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-14 max-w-2xl mx-auto">
        {stats.map((s) => (
          <div key={s.v} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold pink-text">{s.k}</div>
            <div className="font-mono text-[0.68rem] md:text-xs uppercase tracking-widest text-neutral-500 mt-1">
              {s.v}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
