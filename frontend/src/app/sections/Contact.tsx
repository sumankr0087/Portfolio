import { FiMail, FiPhone, FiArrowUpRight, FiEye } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

const channels = [
  { icon: <FiMail />, label: "Email", value: "sumankr0087@gmail.com", href: "mailto:sumankr0087@gmail.com" },
  { icon: <FiPhone />, label: "Phone", value: "+91 70017 69964", href: "tel:+917001769964" },
  { icon: <FaLinkedinIn />, label: "LinkedIn", value: "in/itssumankumar", href: "https://www.linkedin.com/in/itssumankumar/" },
  { icon: <FaGithub />, label: "GitHub", value: "github.com/sumankr0087", href: "https://github.com/sumankr0087" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pt-10 pb-8">
      <p className="section-label mb-2">06 · Contact</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Let&apos;s Connect</h2>
      <p className="text-neutral-600 max-w-2xl mb-8 text-[0.95rem]">
        Working as a Developer at Double9 Books. Open to full-stack &amp; AI engineering
        opportunities, collaborations, or a good tech conversation — drop a line.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="card rounded-2xl p-5 flex items-center gap-4 group"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-violet-100/70 text-violet-600 text-lg shrink-0">
              {c.icon}
            </span>
            <div className="grow min-w-0">
              <p className="font-mono text-[0.68rem] uppercase tracking-widest text-neutral-400">
                {c.label}
              </p>
              <p className="text-neutral-800 text-sm truncate">{c.value}</p>
            </div>
            <FiArrowUpRight className="text-neutral-400 group-hover:text-violet-500 transition" />
          </a>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={`${BASE}/Suman_kr_resume.pdf`}
          target="_blank"
          rel="noreferrer"
          className="btn-pink uppercase"
        >
          <FiEye /> View Resume
        </a>
        <a
          href="https://x.com/SumanKumar865"
          target="_blank"
          rel="noreferrer"
          className="btn-ghost uppercase"
        >
          <FaXTwitter /> Twitter / X
        </a>
      </div>

      <footer className="mt-10 pt-4 border-t border-black/10 text-center">
        <p className="font-mono text-[0.7rem] text-neutral-400">
          © {new Date().getFullYear()} Suman Kumar
        </p>
      </footer>
    </section>
  );
}
