import { FiArrowRight } from "react-icons/fi";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const stats = [
  { k: "3+", v: "Years Experience" },
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
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-pink-500" />
            Developer at Double9 Books
          </span>

          <p className="font-display text-5xl md:text-6xl font-bold text-neutral-900 leading-none">
            Hi, I&apos;m
          </p>
          <h1 className="font-display text-6xl md:text-7xl font-bold pink-text leading-none mt-1 mb-4">
            Suman Kumar
          </h1>
          <p className="font-mono text-sm md:text-base text-neutral-500 mb-5">
            Full-Stack Developer <span className="text-pink-500">&amp;</span> AI / Agentic Engineer
          </p>

          <p className="max-w-xl text-neutral-600 leading-relaxed mb-8 text-[0.95rem]">
            Software Developer with 3+ years of experience building optimised,
            production-grade web applications — React, Vue &amp; Next.js frontends,
            Python / Django / FastAPI backends, and intelligent systems powered by
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
            <div className="h-64 w-64 md:h-80 md:w-80 rounded-full p-1.5 bg-gradient-to-br from-pink-300 via-pink-200 to-orange-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${BASE}/suman.jpeg`}
                alt="Suman Kumar"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <span className="absolute -top-2 -right-2 md:right-2 bg-white shadow-md rounded-full px-3 py-1.5 text-xs font-mono flex items-center gap-2 animate-floaty">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500" /> Double9 Books
            </span>
            <span
              className="absolute bottom-6 -left-2 md:-left-6 bg-white shadow-md rounded-full px-3 py-1.5 text-xs font-mono flex items-center gap-2 animate-floaty"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" /> AI &amp; Full-Stack
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-14 max-w-2xl">
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
