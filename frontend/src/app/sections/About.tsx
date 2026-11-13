export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-10">
      <p className="section-label mb-2">01 · About</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">Who I Am</h2>

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 card rounded-3xl p-7 space-y-4 text-neutral-700 leading-relaxed text-[0.95rem]">
          <p>
            I&apos;m a <span className="text-neutral-900 font-semibold">Full-Stack
            Developer &amp; AI / Agentic Engineer</span> with 4+ years of professional
            experience. I love building polished, performant products end to end —
            from pixel-perfect interfaces to resilient backend services.
          </p>
          <p>
            On the frontend I build fast, responsive, accessible interfaces with
            <span className="text-neutral-900 font-semibold"> JavaScript, React, Vue,
            Next.js and Chart.js</span> — turning complex data and workflows into clean,
            interactive UIs. On the backend I build web applications and REST APIs with
            Python, Django &amp; FastAPI.
          </p>
          <p>
            Lately I&apos;ve been focused on <span className="text-neutral-900 font-semibold">
            RAG pipelines, LangChain, LangGraph, MCP and agentic AI</span> — building
            systems that reason over private knowledge and act autonomously with tools,
            such as my DocuSense document & policy AI, which is live.
          </p>
        </div>

        <div className="lg:col-span-2 card rounded-3xl p-7">
          <p className="section-label mb-4">// Focus Areas</p>
          <ul className="space-y-3 text-[0.9rem] text-neutral-700">
            {[
              "Full-stack web development",
              "Frontend engineering & data viz",
              "LLM & RAG applications",
              "Agentic AI & tool-calling",
              "REST APIs & backend systems",
              "Clean, maintainable architecture",
            ].map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
