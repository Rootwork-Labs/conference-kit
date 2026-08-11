# Conference Kit

TypeScript project for Rootwork Labs, bootstrapped from [rootwork-ts-starter](https://github.com/Rootwork-Labs/rootwork-ts-starter).

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
| `pnpm check` | TypeScript + Biome (run before opening a PR) |
| `pnpm fix` | Apply safe Biome fixes |
| `pnpm typecheck` | TypeScript only |
| `pnpm release` | semantic-release (CI) |

## Conventional Commits

Commit messages use Conventional Commits (`feat:`, `fix:`, `chore:`, …), enforced by commitlint on `commit-msg`.

## Next

Add application frameworks and project-specific tools on top of this baseline. Prefer Biome over ESLint/Prettier, and extend `pnpm check` / existing CI rather than replacing them.
