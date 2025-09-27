# Set-Sail

Set-Sail is a living playground for AI-assisted creation where every experiment is a voyage into new ideas. Together with Codex, we chart small, testable explorations that ship real artifacts and document our learnings. The repo embraces nautical storytelling to keep the work playful, collaborative, and easy for new sailors to join. Each voyage leaves behind code, prompts, or notes others can reuse on their own journeys.

## How to Sail (Quickstart)

```bash
# Clone the repo
git clone https://github.com/<your-handle>/Set-Sail.git
cd Set-Sail

# Install dependencies
npm install

# Launch the greeting script
npm run dev
```

## Voyage Workflow

1. **Propose** — Open a Voyage Proposal issue describing the hypothesis and approach.
2. **Prepare** — Align on scope, gather resources, and bootstrap a voyage folder.
3. **Sail** — Build, experiment, and capture artifacts in the voyage directory.
4. **Record** — Log progress and outcomes in the logbook.
5. **Debrief** — Summarize learnings, surprises, and next steps.
6. **PR** — Open a pull request linking issues, tests, and documentation updates.

## Project Layout

- `docs/` — Vision, roadmap, and other navigation aids.
- `logbook/` — Voyage logs with hypotheses, steps, results, and debriefs.
- `scripts/` — Shipwright utilities such as the voyage bootstrapper.
- `src/` — Source entrypoints and helpers for experiments.
- `voyages/` — Placeholder for active voyage workspaces.

## Contributing

We welcome small, frequent contributions. Create a branch, follow the voyage workflow, and ensure linting plus type checks pass before opening a PR. Include context in the pull request template, link relevant logbook entries, and keep changes scoped so reviews stay swift. If something feels unclear, open a discussion or Voyage Proposal first.

### Shipping Changes to GitHub

1. Commit your work locally once tests and checks pass.
2. Set the remote if it is not already configured: `git remote add origin git@github.com:<your-handle>/Set-Sail.git`.
3. Push the current branch upstream: `git push -u origin <branch-name>`.
4. Open a pull request in the browser or via `gh pr create` to start review.
5. Merge after approvals and confirm CI stays green.

## License

Set-Sail is released under the [MIT License](LICENSE). Sail freely and share what you build.
