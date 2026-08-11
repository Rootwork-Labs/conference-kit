# Conference Kit

Open-source conference website system for Rootwork Labs. Static Astro site on the [rootwork-ts-starter](https://github.com/Rootwork-Labs/rootwork-ts-starter) baseline (pnpm, TypeScript, Biome, Conventional Commits).

## Prerequisites

- Node.js 22 or newer
- pnpm (via Corepack)

```sh
corepack enable
pnpm install
```

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Astro dev server |
| `pnpm build` | Static production build (`dist/`) |
| `pnpm preview` | Preview the production build |
| `pnpm check` | `astro check` + Biome (run before opening a PR) |
| `pnpm fix` | Apply safe Biome fixes |
| `pnpm typecheck` | Astro / TypeScript check only |
| `pnpm release` | semantic-release (CI) |

## Stack

- Astro (static output)
- Tailwind CSS v4 via `@tailwindcss/vite`
- TypeScript 6.x (required by `astro check` until TypeScript 7 exposes a programmatic API)
- Biome (format / lint) — no ESLint or Prettier
- Build-time theme selection (see [src/themes/README.md](src/themes/README.md))

## Themes

Themes live under `src/themes/<id>/` and register in `src/themes/registry.ts`. Shared layouts and components use semantic tokens (`bg-background`, `text-foreground`, …); themes only supply values. Contribution notes and the required token list are in [src/themes/README.md](src/themes/README.md).

## Conventional Commits

Commit messages use Conventional Commits (`feat:`, `fix:`, `chore:`, …), enforced by commitlint on `commit-msg`.
