import { FiArrowUpRight } from "react-icons/fi";

const offers = [
  { title: "New Projects", desc: "Full-stack web apps and AI products, built end to end." },
  { title: "Freelance Work", desc: "Short or long-term contracts, remote-friendly." },
  { title: "Collaborations", desc: "Teaming up on LLM, RAG and agentic AI ideas." },
];

export default function Availability() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 p-8 md:p-12 text-white">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-mono mb-5">
            <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
            Available now
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Open for new projects &amp; freelance work
          </h2>
          <p className="max-w-2xl text-white/85 text-[0.95rem] leading-relaxed mb-8">
            I&apos;m currently open to new projects, freelance engagements and
            collaborations. If you&apos;re building something in full-stack or AI —
            let&apos;s create it together.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {offers.map((o) => (
              <div key={o.title} className="rounded-2xl bg-white/10 border border-white/15 p-4">
                <h3 className="font-display font-semibold mb-1">{o.title}</h3>
                <p className="text-white/80 text-[0.82rem] leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-violet-700 font-semibold text-sm px-5 py-2.5 uppercase tracking-wide hover:bg-white/90 transition"
          >
            Let&apos;s collaborate <FiArrowUpRight />
          </a>
        </div>

        {/* decorative glow */}
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -left-10 -bottom-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      </div>
    </section>
  );
}
