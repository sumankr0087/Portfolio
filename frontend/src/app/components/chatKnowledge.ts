// Dynamic knowledge base for the portfolio chatbot.
// Each entry is a "chunk" of real portfolio content. The chatbot tokenizes the
// user's question and ranks these chunks by relevance, so it can answer a wide
// range of phrasings about anything shown on the site — no fixed keyword list.

export type Chunk = {
  topic: string; // short label, used for grouping/fallback
  // Extra words that should point to this chunk but may not appear in `text`
  // (synonyms, question words, etc.). Boosts matching without changing the answer.
  aliases?: string[];
  text: string; // the answer shown to the user
};

export const CHUNKS: Chunk[] = [
  // ---- Identity / about ----
  {
    topic: "about",
    aliases: ["who", "introduce", "yourself", "suman", "bio", "about", "summary", "background", "himself"],
    text: "Suman Kumar is a Full-Stack Developer & AI / Agentic Engineer with 4+ years of professional experience. He builds polished, performant products end to end — from pixel-perfect interfaces to resilient backend services — and currently works as a Python Developer at Double9 Books.",
  },
  {
    topic: "focus",
    aliases: ["focus", "specialise", "specialize", "lately", "working on", "interests", "passion"],
    text: "Lately Suman has focused on RAG pipelines, LangChain, LangGraph, MCP and agentic AI — systems that reason over private knowledge and act autonomously with tools, such as his open-source Context Vault RAG system. His focus areas: full-stack web development, LLM & RAG applications, agentic AI & tool-calling, REST APIs & backend systems, and clean, maintainable architecture.",
  },

  // ---- Current role / experience ----
  {
    topic: "current-role",
    aliases: ["where", "currently", "working", "current", "now", "present", "job", "employer", "company", "double9", "based", "location"],
    text: "Suman currently works as a Python Developer at Double9 Books (Noida), since March 2026. There he builds high-performance FastAPI & Django REST APIs with JWT auth and async endpoints, architects microservices-based backend modules in Docker, builds LLM automation with LangChain and RAG pipelines, designs multi-agent workflows with LangGraph, builds MCP servers, and builds Python data pipelines (Pandas, BeautifulSoup, Selenium) that process 5,000+ records and cut manual effort by 60%.",
  },
  {
    topic: "experience-essentia",
    aliases: ["experience", "previous", "past", "history", "essentia", "softserv", "sde", "software development engineer", "years"],
    text: "Before Double9 Books, Suman was a Software Development Engineer at Essentia SoftServ LLP (Delhi), from July 2022 to February 2026. He developed 15+ scalable Django REST APIs for B2B platforms with ReactJs & VueJs frontends, built reusable React/Vue/Nuxt components, implemented JWT auth and RBAC, optimized PostgreSQL and MySQL queries, and worked in Git-based CI/CD agile teams across 25+ sprints — improving performance by up to 40%.",
  },
  {
    topic: "experience-righto",
    aliases: ["intern", "internship", "righto", "first job", "frontend intern"],
    text: "Suman started as a Frontend Developer Intern at RightO (July–October 2020), building responsive pages and reusable UI components from design mockups and integrating REST APIs with backend developers.",
  },
  {
    topic: "experience-overview",
    aliases: ["experience", "how long", "years", "work history", "career", "total experience"],
    text: "Suman has 4+ years of professional experience across three roles: Python Developer at Double9 Books (2026–present), Software Development Engineer at Essentia SoftServ LLP (2022–2026), and Frontend Developer Intern at RightO (2020).",
  },

  // ---- Skills ----
  {
    topic: "skills",
    aliases: ["skill", "skills", "tech", "stack", "technology", "technologies", "tools", "know", "languages", "proficient", "expertise"],
    text: "Suman's tech stack — Backend: Python, Django, FastAPI, REST API, Celery, Redis, PostgreSQL, MongoDB. AI/ML: LLM / OpenAI, RAG, LangChain, LangGraph, MCP, AI Agents. Web scraping & data: BeautifulSoup, Selenium, Scrapy, Data Extraction, Automation, ETL Pipelines. DevOps: Docker, AWS, CI/CD, GitHub Actions, Git. Frontend: React, Vue.js, Next.js, TypeScript, JavaScript, Tailwind.",
  },
  {
    topic: "skills-ai",
    aliases: ["ai", "ml", "llm", "rag", "agent", "agentic", "langchain", "langgraph", "mcp", "vector", "openai", "machine learning", "gen ai"],
    text: "On the AI side Suman builds RAG pipelines, LLM apps and agentic systems using LangChain, LangGraph, MCP, OpenAI and vector databases — tool-calling assistants that reason over private data and act autonomously. Example: the open-source Context Vault RAG system.",
  },
  {
    topic: "skills-scraping",
    aliases: ["scraping", "scrape", "crawl", "crawler", "selenium", "beautifulsoup", "scrapy", "data extraction", "automation", "etl", "pipeline"],
    text: "For web scraping, data extraction and automation Suman uses BeautifulSoup, Selenium and Scrapy to build data pipelines and ETL workflows — for example Python pipelines processing 5,000+ records and cutting manual effort by 60%.",
  },

  // ---- Services ----
  {
    topic: "services",
    aliases: ["service", "services", "offer", "provide", "help", "do you do", "hire for", "work with", "freelance", "availability", "available"],
    text: "Suman offers three main services: 1) Web & Mobile App Development — end-to-end full-stack web and cross-platform mobile apps (React, Vue, Next.js frontends with Python, Django & FastAPI APIs, secure auth, clean architecture). 2) AI Agent & LLM Projects — RAG pipelines grounded in your data, agentic workflows with LangChain, LangGraph & MCP, and tool-calling assistants. 3) Freelance & Collaboration — remote-friendly short or long-term contracts, shipping reliable, maintainable products on time.",
  },
  {
    topic: "availability",
    aliases: ["available", "availability", "open", "hire", "hiring", "opportunities", "roles", "freelance", "collaborate", "collaboration", "remote"],
    text: "Suman is currently open to new projects, freelance engagements and collaborations — full-stack & AI engineering opportunities. He's remote-friendly and focused on shipping reliable products on time. Reach out via the Contact section to start a conversation.",
  },

  // ---- Projects ----
  {
    topic: "projects-overview",
    aliases: ["project", "projects", "built", "portfolio", "featured", "work", "made", "created"],
    text: "Featured projects: Context Vault (RAG system, open-source), AutoPilot (multi-agent orchestrator), DocuMind (AI document Q&A SaaS), DevConnect (developer social platform) and ShopSphere (e-commerce engine with AI recommendations). Ask about any one for details.",
  },
  {
    topic: "project-context-vault",
    aliases: ["context vault", "rag system", "retrieval", "vector store", "cited sources", "open source"],
    text: "Context Vault is a production-grade Retrieval-Augmented Generation (RAG) system that ingests documents, builds a semantic vector store and answers questions grounded in your own knowledge base with cited sources. Built with Python, FastAPI, a Vector DB and LLMs. It's open-source: github.com/sumankr0087/context-vault-rag",
  },
  {
    topic: "project-autopilot",
    aliases: ["autopilot", "multi-agent", "orchestrator", "autonomous agents", "tool calling", "reasoning timeline"],
    text: "AutoPilot is an agentic AI platform where specialised autonomous agents plan, delegate and execute multi-step tasks using tool-calling, with a live reasoning timeline and human-in-the-loop approvals. Built with LangGraph, Python and Next.js.",
  },
  {
    topic: "project-documind",
    aliases: ["documind", "document q&a", "pdf", "chat with documents", "saas", "billing"],
    text: "DocuMind is a full-stack SaaS that lets teams upload PDFs and chat with them — streaming LLM responses, per-workspace memory, usage billing and role-based access control. Built with Next.js, FastAPI, PostgreSQL and OpenAI.",
  },
  {
    topic: "project-devconnect",
    aliases: ["devconnect", "developer platform", "social", "real-time", "feeds", "notifications", "websockets"],
    text: "DevConnect is a full-stack social platform for developers with real-time feeds, authentication, notifications and profile analytics, built on a scalable REST API with an optimistic UI. Built with React, Node.js, MongoDB and WebSockets.",
  },
  {
    topic: "project-shopsphere",
    aliases: ["shopsphere", "ecommerce", "e-commerce", "commerce", "cart", "checkout", "payments", "stripe", "recommendation"],
    text: "ShopSphere is a complete e-commerce platform with cart, checkout, payments, an admin dashboard and an AI product-recommendation engine powered by embeddings. Built with Next.js, Django, Stripe and an AI recommendation system.",
  },

  // ---- Contact ----
  {
    topic: "contact",
    aliases: ["contact", "email", "reach", "touch", "phone", "call", "connect", "message", "hire", "linkedin", "github", "twitter", "social", "resume", "cv"],
    text: "Get in touch with Suman — Email: sumankr0087@gmail.com · Phone: +91 70017 69964 · LinkedIn: linkedin.com/in/itssumankumar · GitHub: github.com/sumankr0087 · X/Twitter: x.com/SumanKumar865. His resume is available from the View Resume button in the Contact section.",
  },
];

// Words too common to help ranking.
const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been", "being", "do", "does",
  "did", "has", "have", "had", "of", "to", "in", "on", "for", "and", "or", "but",
  "with", "about", "as", "at", "by", "from", "he", "she", "him", "her", "his", "they",
  "you", "your", "i", "me", "my", "we", "it", "its", "this", "that", "these", "those",
  "what", "which", "who", "whom", "whose", "how", "can", "could", "would", "should",
  "will", "tell", "know", "any", "some", "more", "please", "there", "their", "also",
]);

function tokenize(s: string): string[] {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9+#./ ]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1 && !STOPWORDS.has(w));
}

const FALLBACK =
  "I can tell you about Suman's background, skills, experience, current role, projects, AI work, services, availability, or how to get in touch. Try asking about any of those!";

/**
 * Dynamically find the best answer for a free-form question by scoring every
 * content chunk against the question's words. Returns the most relevant chunk's
 * text, or a helpful fallback if nothing is relevant enough.
 */
export function answerQuestion(question: string): string {
  const qTokens = tokenize(question);
  if (qTokens.length === 0) return FALLBACK;
  // Unique query tokens.
  const uniqueTokens = Array.from(new Set(qTokens));

  let best: { score: number; text: string } | null = null;

  for (const chunk of CHUNKS) {
    const haystack = (chunk.text + " " + chunk.topic + " " + (chunk.aliases ?? []).join(" ")).toLowerCase();
    const aliasText = (chunk.topic + " " + (chunk.aliases ?? []).join(" ")).toLowerCase();

    let score = 0;
    for (const token of uniqueTokens) {
      // Alias / topic hits are strong signals (curated synonyms).
      if (aliasText.includes(token)) score += 3;
      else if (haystack.includes(token)) score += 1;
    }
    // Reward multi-word alias phrases that appear verbatim in the question.
    const qLower = " " + qTokens.join(" ") + " ";
    for (const alias of chunk.aliases ?? []) {
      if (alias.includes(" ") && qLower.includes(" " + alias + " ")) score += 4;
    }

    if (score > 0 && (!best || score > best.score)) best = { score, text: chunk.text };
  }

  // Require a minimal signal so random input gets the guided fallback.
  if (!best || best.score < 2) return FALLBACK;
  return best.text;
}
