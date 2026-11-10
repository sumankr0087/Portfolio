# Suman Kumar — Portfolio

A modern, single-page developer portfolio for **Suman Kumar** (Full-Stack Developer & AI / Agentic Engineer), built with Next.js and deployed as a static site to GitHub Pages.

🔗 **Live:** https://sumankr0087.github.io/Portfolio/

---

## Tech Stack

- **Framework:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS, custom design tokens (CSS variables)
- **Fonts:** Space Grotesk (display) + JetBrains Mono (mono) via `next/font`
- **Icons:** `react-icons` (Simple Icons for brand logos)
- **Hosting:** GitHub Pages (static export) via GitHub Actions

## Sections

- **Hero** — intro, profile photo, stats
- **Skills marquee**
- **About**
- **Tech Stack** — skills grid with real brand logos (short-form fallback where no logo exists)
- **Experience** — roles, companies and detailed bullet points
- **Projects** — featured work with a "More Projects" link to GitHub
- **Core Competencies**
- **Availability** — open for new projects, freelance & collaborations
- **Contact** — email, phone, LinkedIn, GitHub, résumé
- **AI Assistant chatbot** — floating widget (see below)

---

## The portfolio chatbot — approach & model

The floating "AI Assistant" is an **offline, rule-based assistant — it does not use any LLM or external API.**

**Why this approach**

- The site is a **static export hosted on GitHub Pages**, so there is no backend/server to call a model from.
- A real LLM (OpenAI, etc.) would need an API key, which cannot be exposed safely in client-side static code, plus it would add latency and cost.
- The portfolio only needs to answer a fixed set of questions (skills, projects, experience, AI work, contact), so a curated knowledge base is accurate, **instant, free, and never errors in production** — exactly what was required.

**How it works** (`src/app/components/ChatBot.tsx`)

1. A small **knowledge base** (`KB`) maps arrays of keywords to curated answers.
2. On each user message, `findAnswer()` lowercases the text and **scores every KB entry** by how many of its keywords appear.
3. The highest-scoring answer is returned; if nothing matches, a friendly fallback suggests what to ask.
4. Replies render after a tiny timeout to feel conversational. Quick-suggestion chips seed common questions.
5. On **mobile only** (`< 768px`), opening the chat locks page scroll; tablet/desktop stay scrollable.

**Model used:** none — it is deterministic keyword matching (no ML model, no inference).

> Upgrade path: to use a real LLM, add a small backend/serverless function (e.g. a Vercel/Cloudflare function or a lightweight API) that holds the API key and proxies requests to a model such as **Claude** or **GPT**, then point the chatbot at that endpoint.

---

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build (static export)

```bash
# Local root build
npm run build          # outputs ./out

# For GitHub Pages (served under /Portfolio)
NEXT_PUBLIC_BASE_PATH=/Portfolio npm run build
```

The `basePath` is configured in `next.config.mjs` via `NEXT_PUBLIC_BASE_PATH`, and `output: "export"` produces a fully static site in `./out`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the static export (with `NEXT_PUBLIC_BASE_PATH=/Portfolio`) and publishes it to **GitHub Pages**. No manual steps are needed.
