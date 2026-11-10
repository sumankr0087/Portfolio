"use client";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4">
      <nav className="mx-auto my-3 max-w-6xl rounded-full bg-white/70 backdrop-blur-md border border-black/5 shadow-sm px-5 py-2.5 flex items-center justify-between">
        <a href="#home" className="font-display font-bold tracking-tight text-lg">
          SUMAN<span className="text-violet-500">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-1 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  active === l.href
                    ? "text-violet-600 font-semibold"
                    : "text-neutral-600 hover:text-violet-600"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:inline-flex btn-pink !py-2 !px-4 uppercase">
            Get in touch
          </a>
          <button
            className="lg:hidden text-2xl text-neutral-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="lg:hidden mx-auto max-w-6xl rounded-3xl bg-white/90 backdrop-blur-md border border-black/5 shadow-sm px-4 py-2 flex flex-col">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-sm text-neutral-700 hover:text-violet-600"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Header;
