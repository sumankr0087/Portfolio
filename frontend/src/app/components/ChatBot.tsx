"use client";

import { useEffect, useRef, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { HiOutlineChat } from "react-icons/hi";
import { answerQuestion } from "./chatKnowledge";

type Msg = { role: "bot" | "user"; text: string };

const suggestions = ["Skills", "Services", "Projects", "AI work", "Availability"];

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

  // Lock page scroll while the chat is open — only on mobile (< 768px).
  // On tablet / laptop / desktop the page stays scrollable.
  useEffect(() => {
    if (!open) return;
    const mql = window.matchMedia("(max-width: 767px)");
    const apply = () => {
      document.body.style.overflow = mql.matches ? "hidden" : "";
    };
    apply();
    mql.addEventListener("change", apply);
    return () => {
      mql.removeEventListener("change", apply);
      document.body.style.overflow = "";
    };
  }, [open]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setTimeout(() => setMessages((m) => [...m, { role: "bot", text: answerQuestion(q) }]), 350);
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-300 text-white text-2xl shadow-lg shadow-violet-500/30 hover:scale-105 transition"
        aria-label="Open AI assistant"
      >
        {open ? <FiX /> : <HiOutlineChat />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-[60] w-[92vw] max-w-sm bg-white rounded-3xl overflow-hidden flex flex-col shadow-2xl border border-black/5 animate-fade-up">
          <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-violet-500 to-cyan-300 text-white">
            <div className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-lg">
              <HiOutlineChat />
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
            <div ref={endRef} />
          </div>

          <div className="flex flex-wrap gap-2 px-3 pt-3 pb-1 bg-white border-t border-black/5">
            {suggestions.map((s) => (
              <button key={s} onClick={() => send(s)} className="chip hover:!bg-violet-500/15 transition">
                {s}
              </button>
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 p-3 bg-white"
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
