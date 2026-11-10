"use client";

import { useEffect, useRef, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

type Msg = { role: "bot" | "user"; text: string };

const KB: { keywords: string[]; answer: string }[] = [
  {
    keywords: ["who", "about", "yourself", "suman", "bio"],
    answer:
      "Suman Kumar is a Full-Stack Developer & AI / Agentic Engineer with 3+ years of experience, currently a Developer at Double9 Books, building web apps, LLM products and agentic AI systems.",
  },
  {
    keywords: ["experience", "years", "how long", "work history", "job", "company", "double9"],
    answer:
      "Suman has 3+ years of professional experience and currently works as a Developer at Double9 Books, building full-stack apps and AI-powered features.",
  },
  {
    keywords: ["skill", "tech", "stack", "technolog", "know", "language", "tools"],
    answer:
      "Frontend: React, Vue, Next.js, TypeScript, Tailwind. Backend: Python, Django, FastAPI, PostgreSQL, MongoDB. AI: LLMs, RAG, LangChain, LangGraph, MCP and AI Agents.",
  },
  {
    keywords: ["ai", "llm", "rag", "agent", "langchain", "langgraph", "mcp", "agentic"],
    answer:
      "Suman builds RAG pipelines, LLM apps and agentic systems using LangChain, LangGraph, MCP and vector databases — for example the open-source Context Vault RAG project.",
  },
  {
    keywords: ["project", "built", "portfolio", "context", "vault", "featured"],
    answer:
      "Featured projects: Context Vault (RAG system, open-source on GitHub), AutoPilot multi-agent orchestrator, DocuMind AI document Q&A, DevConnect and ShopSphere. See the Projects section for details.",
  },
  {
    keywords: ["contact", "email", "reach", "hire", "phone", "touch", "available", "availability"],
    answer:
      "Suman is open to full-stack & AI roles and collaborations. Email: sumankrverma87@gmail.com · Phone: +91 70017 69964.",
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: "You can download Suman's resume from the button in the Contact section.",
  },
  {
    keywords: ["github", "linkedin", "twitter", "social", "x"],
    answer:
      "GitHub: github.com/sumankr0087 · LinkedIn: linkedin.com/in/itssumankumar · X: x.com/SumanKumar865",
  },
];

function findAnswer(q: string): string {
  const text = q.toLowerCase();
  let best: { score: number; answer: string } | null = null;
  for (const item of KB) {
    const score = item.keywords.reduce((s, k) => (text.includes(k) ? s + 1 : s), 0);
    if (score > 0 && (!best || score > best.score)) best = { score, answer: item.answer };
  }
  return (
    best?.answer ??
    "I can tell you about Suman's experience, skills, projects, AI work, or how to get in touch. Try asking about any of those!"
  );
}

const suggestions = ["Skills", "Projects", "AI work", "Availability"];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text: "Hi! 👋 I'm Suman's AI assistant. Ask me about his skills, projects, experience or how to hire him!",
    },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: findAnswer(q) }]), 350);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-300 text-white text-2xl shadow-lg shadow-violet-500/30 hover:scale-105 transition"
        aria-label="Open AI assistant"
      >
        {open ? <FiX /> : <HiOutlineSparkles />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-[60] w-[92vw] max-w-sm bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-black/5 animate-fade-up">
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-violet-500 to-cyan-300 text-white">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-lg">
              <HiOutlineSparkles />
            </div>
            <div>
              <p className="text-sm font-semibold">Suman&apos;s AI Assistant</p>
              <p className="text-[0.7rem] text-white/90">Online · Ask me anything</p>
            </div>
          </div>

          <div className="h-80 overflow-y-auto px-4 py-3 space-y-3 bg-[#f3f4fb]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-violet-500 text-white rounded-br-sm"
                      : "bg-white border border-black/5 text-neutral-700 rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)} className="chip hover:!bg-violet-500/15 transition">
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 p-3 border-t border-black/5 bg-white"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Suman..."
              className="flex-1 bg-neutral-100 rounded-full px-4 py-2 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-violet-300"
            />
            <button
              type="submit"
              className="grid h-9 w-9 place-items-center rounded-full bg-violet-500 text-white hover:bg-violet-400 transition"
              aria-label="Send"
            >
              <FiSend size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
