"use client";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pb-3 bg-gradient-to-b from-[#f3f4fb] via-[#f3f4fb] to-transparent">
      <nav className="mx-auto mt-3 max-w-6xl rounded-full bg-white shadow-md border border-black/5 px-5 py-2.5 flex items-center justify-between">
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
        <ul className="lg:hidden mx-auto mt-2 max-w-6xl rounded-3xl bg-white border border-black/5 shadow-md px-4 py-2 flex flex-col">
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
          <li className="mt-2 mb-1 px-1">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-pink uppercase w-full justify-center"
            >
              Get in touch
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
