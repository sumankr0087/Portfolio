import type { IconType } from "react-icons";
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiCelery,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiOpenai,
  SiSelenium,
  SiScrapy,
  SiDocker,
  SiAmazonaws,
  SiGithubactions,
  SiGit,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

type Skill = { ab: string; name: string; Icon?: IconType; color?: string };

const skills: Skill[] = [
  // Backend
  { ab: "Py", name: "Python", Icon: SiPython, color: "#3776AB" },
  { ab: "Dj", name: "Django", Icon: SiDjango, color: "#0C8F5A" },
  { ab: "Fa", name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { ab: "Ap", name: "REST API" },
  { ab: "Ce", name: "Celery", Icon: SiCelery, color: "#37814A" },
  { ab: "Rd", name: "Redis", Icon: SiRedis, color: "#FF4438" },
  { ab: "Pg", name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { ab: "Mo", name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  // AI / ML
  { ab: "Ll", name: "LLM / OpenAI", Icon: SiOpenai, color: "#412991" },
  { ab: "Rg", name: "RAG" },
  { ab: "Lc", name: "LangChain" },
  { ab: "Lg", name: "LangGraph" },
  { ab: "Mc", name: "MCP" },
  { ab: "Ag", name: "AI Agents" },
  // Web scraping / data / automation
  { ab: "Ws", name: "Web Scraping" },
  { ab: "Bs", name: "BeautifulSoup" },
  { ab: "Se", name: "Selenium", Icon: SiSelenium, color: "#43B02A" },
  { ab: "Sc", name: "Scrapy", Icon: SiScrapy, color: "#60A839" },
  { ab: "De", name: "Data Extraction" },
  { ab: "Au", name: "Automation" },
  { ab: "Et", name: "ETL Pipelines" },
  // DevOps
  { ab: "Dk", name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { ab: "Aw", name: "AWS", Icon: SiAmazonaws, color: "#FF9900" },
  { ab: "Ci", name: "CI/CD" },
  { ab: "Ga", name: "GitHub Actions", Icon: SiGithubactions, color: "#2088FF" },
  { ab: "Gi", name: "Git", Icon: SiGit, color: "#F05032" },
  // Frontend
  { ab: "Re", name: "React", Icon: SiReact, color: "#149ECA" },
  { ab: "Vu", name: "Vue.js", Icon: SiVuedotjs, color: "#42B883" },
  { ab: "Nx", name: "Next.js", Icon: SiNextdotjs, color: "#111111" },
  { ab: "Ts", name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { ab: "Js", name: "JavaScript", Icon: SiJavascript, color: "#C9A800" },
  { ab: "Tw", name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-10">
      <p className="section-label mb-2">02 · Skills</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">Tech Stack</h2>
      <p className="text-neutral-600 max-w-2xl mb-8 text-[0.95rem]">
        Backend systems, AI tooling, web scraping, data extraction and automation,
        DevOps, and frontend frameworks I use to build scalable, intelligent products.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {skills.map((s) => {
          const Icon = s.Icon;
          return (
            <div
              key={s.name}
              className="card rounded-2xl p-3.5 flex items-center gap-3 min-h-[3.75rem]"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white border border-black/5 shrink-0">
                {Icon ? (
                  <Icon size={20} color={s.color} />
                ) : (
                  <span className="font-display font-bold text-violet-600 text-sm">{s.ab}</span>
                )}
              </span>
              <span className="font-mono text-[0.76rem] text-neutral-700 leading-snug">
                {s.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
