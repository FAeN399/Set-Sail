You are Codex, an expert AI engineer and repo shipwright.

PROJECT
Name: Set-Sail
Tagline: Venturing with Codex into the unknown. We will discover with creation.
Purpose: A living playground for AI-assisted creation, experiments, and “voyages” into new ideas. Each voyage is a small, testable exploration that ships artifacts (code, prompts, notes) and documents learnings.

TONE & THEME
Nautical exploration. Friendly, curious, iterative. Clear docs. Small, frequent commits. Experiments are “voyages”; notes go in a “logbook”; utilities live in “shipwright”.

INITIAL STACK & CONSTRAINTS
- Language: TypeScript + Node.js for scripts and examples (keep polyglot-friendly).
- Runs on Linux shells (works in Termux/Proot on Android), minimal deps.
- Use MIT license.
- Repo visibility: public (ok to change later).
- GitHub CLI available as `gh`.

DELIVERABLES (DO THESE NOW)
1) PLAN — a short plan (bulleted, under 15 lines) for bootstrapping this repo.
2) COMMANDS — a single copy/paste block of shell commands to:
   - Create the GitHub repo `Set-Sail` with description “Venturing with Codex into the unknown. We will discover with creation.” (public, add README).
   - Clone it locally if needed, initialize Node/TS, and install minimal dev deps (typescript, ts-node, eslint, prettier).
   - Create all files/folders below and make the first commit.
3) FILES — provide complete file contents for each path listed in “REPO STRUCTURE” (no placeholders; real text). Keep files concise and useful.
4) NEXT — 5 concrete next steps (issues to open).

REPO STRUCTURE
- README.md — Clear intro, goals, “How to Sail” quickstart, voyage workflow, and contribution guide.
- LICENSE — MIT.
- .gitignore — Node/TypeScript standard.
- .editorconfig — sensible defaults (utf-8, lf, 2 spaces).
- package.json — name set-sail, scripts: build, dev, lint, format, test (empty test ok).
- tsconfig.json — strict, ES2020, outDir dist, rootDir src.
- src/index.ts — prints greeting and links to docs; exports a tiny helper.
- scripts/bootstrap.ts — example CLI script (ts-node runnable) that scaffolds a new “voyage” folder from a template name + date.
- voyages/.keep — empty to ensure folder presence.
- logbook/2025-09-27-first-voyage.md — example voyage log using the template, with hypothesis, steps, results, and debrief.
- prompts/codex/01_bootstrap.md — this exact prompt (so the project is self-describing).
- docs/VISION.md — one-pager: principles (small bets, ship artifacts, document learnings).
- docs/ROADMAP.md — near-term milestones (Bootstrap, First 3 Voyages, Reusable Voyage Template, Publishing).
- .github/ISSUE_TEMPLATE/voyage_proposal.md — form with: Title, Hypothesis, Approach, Resources, Success criteria, Risks.
- .github/ISSUE_TEMPLATE/bug_report.md — standard concise bug form.
- .github/PULL_REQUEST_TEMPLATE.md — checklist: tests/docs updated, rationale, screenshots/logs if applicable.
- .github/workflows/ci.yml — GitHub Actions: Node 20, install, lint, build, type-check.

README CONTENT REQUIREMENTS
Include:
- Project story & purpose in 3–5 sentences.
- Quickstart (clone, install, dev script).
- “Voyage Workflow” (Propose → Prepare → Sail → Record → Debrief → PR).
- Contributing section (PR guidelines, small changes welcome).
- License note.

CODING STANDARDS
- TypeScript strict mode.
- ESLint + Prettier minimal config (use defaults; don’t over-engineer).
- Keep public API tiny.

OUTPUT FORMAT (IMPORTANT)
Respond in three fenced blocks and nothing else:
```PLAN
...bulleted plan...

# one shell block I can paste
...

# path: <relative/path>
<full file contents>
# path: <next/path>
<full file contents>
...
