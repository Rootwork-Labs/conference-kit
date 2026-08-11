# Rootwork TypeScript Starter

A small, framework-agnostic TypeScript repository template for Rootwork Labs.

This is not an application starter. It captures the boring repository setup we want in essentially every new TypeScript project: package manager pinning, strict typechecking, formatting/linting, Conventional Commits, Git hooks, CI, and automated GitHub releases.

## Create a new project from this template

This repository is meant to be used as a **GitHub template**. Prefer creating the repo from the template **before** scaffolding any application framework.

### With GitHub CLI

```sh
gh repo create Rootwork-Labs/<new-repo> \
  --template Rootwork-Labs/rootwork-ts-starter \
  --public \
  --clone

cd <new-repo>
pnpm install
pnpm check

# THEN add Astro, Next, Hono, or other app tooling
```

### With the Cursor command

From any workspace, run `/new-ts-repo` (personal Cursor skill). It walks the same template → install → check → framework flow.

### Manually

1. Use GitHub’s “Use this template” button, or clone and re-init the remote.
2. Rename the package in `package.json` to match the new project.
3. Replace this README with project-specific content when you’re ready.
4. Add application frameworks and project-specific tools only after `pnpm check` passes.

Do not start with `pnpm create astro` / `create-next-app` and then retrofit these conventions.

## Prerequisites

- Node.js 22 or newer
- [pnpm](https://pnpm.io/) via [Corepack](https://nodejs.org/api/corepack.html) (recommended) or a global install

Enable Corepack once if needed:

```sh
corepack enable
```

The repository pins pnpm through the `packageManager` field in `package.json`, so installs stay consistent across machines and CI.

## Install

```sh
pnpm install
```

This installs dependencies and runs the `prepare` script, which activates Husky Git hooks.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm check` | Non-mutating validation (TypeScript + Biome). Run before opening a PR. |
| `pnpm fix` | Apply safe Biome format/lint/import fixes. |
| `pnpm typecheck` | TypeScript only (`tsc --noEmit`). |
| `pnpm release` | Run semantic-release (primarily invoked by CI). |

## Conventional Commits

Commit messages are validated by commitlint using `@commitlint/config-conventional`.

Examples:

```text
feat: add greeting helper
fix: correct return type on greet
chore: bump Node engine range
```

A Husky `commit-msg` hook runs commitlint locally. Full-repo checks are intentionally not run on every commit; use `pnpm check` before you open a PR.

Subject casing is not enforced (imperative mood / lowercase-only is optional). Structure still matters: `type: description`.

## Automated releases

On pushes to `main`, GitHub Actions runs semantic-release after checks pass.

semantic-release:

- analyzes Conventional Commits since the last release
- determines the next semantic version
- generates release notes
- creates a GitHub Release and corresponding git tag

It does **not** publish to npm by default. That keeps the template useful for applications and internal repos as well as libraries.

## Keeping dependencies current

This template is meant to stay small and current without becoming a maintenance hobby.

- **Dependabot** (`.github/dependabot.yml`) opens weekly PRs for npm packages and GitHub Actions, **grouped** so you typically get one PR per ecosystem instead of one per package. Review, run `pnpm check`, merge.
- **Manual bumps**: change the version in `package.json`, run `pnpm install`, then `pnpm check`. Use Conventional Commits such as `chore(deps): bump typescript`.
- **pnpm age gate**: pnpm 11 waits ~24 hours before allowing brand-new publishes. Prefer waiting or the previous stable over disabling that protection.
- **pnpm itself**: update with `corepack use pnpm@<version>` so `packageManager` stays pinned.
- **Biome upgrades**: if the CLI suggests it, run `pnpm exec biome migrate --write`, then `pnpm check`.

Install the recommended **Biome** VS Code/Cursor extension (see `.vscode/extensions.json`). Until it is installed, the editor may warn that `biomejs.biome` is not a known formatter — that is a missing-extension warning, not invalid JSON.

## What is deliberately not included

- Application frameworks (React, Next, Astro, etc.)
- Test runners (Vitest, Jest, Playwright, etc.)
- Bundlers (tsup, Vite, esbuild, etc.)
- ESLint / Prettier (Biome covers format, lint, and import organization)
- lint-staged, Commitizen, Changesets
- Docker and deployment platform config
- npm publication

Add those when a concrete project needs them.
