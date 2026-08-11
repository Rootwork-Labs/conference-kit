# Themes

Themes are first-class extension packages. Shared pages and components stay theme-agnostic and consume semantic Tailwind utilities; themes supply metadata and token **values**.

## Add a theme

1. Copy `src/themes/redshifted/` to `src/themes/<id>/` (or scaffold an equivalent directory).
2. Update `index.ts` metadata (`id`, `name`, `description`) and `import "./tokens.css"`.
3. Set required token values in `tokens.css` under `[data-theme="<id>"]`.
4. Statically import and register the theme in [`registry.ts`](./registry.ts).
5. Point `src/config/site.ts` `themeId` at your theme (YAML selection comes later).
6. Run `pnpm dev` / `pnpm build` / `pnpm check`.

A representative conference fixture and automated theme-contract / accessibility checks will land in follow-up work. This layout is intentional for that workflow.

## Theme metadata

```ts
export interface Theme {
	id: string;
	name: string;
	description: string;
}
```

Do not put stylesheet paths on `Theme`. Each theme module side-effect-imports its CSS so Vite sees a normal static dependency when the registry imports the module.

Keep this contract small. Grow it when a concrete need appears (for example during a full theme design).

## Required token vocabulary

**Tailwind owns the names. Themes provide values.**

Set these CSS custom properties on `[data-theme="<id>"]` so contributors do not need to reverse-engineer components:

### Color / surface

| Token | CSS variable | Example utilities |
| --- | --- | --- |
| `background` | `--color-background` | `bg-background` |
| `surface` | `--color-surface` | `bg-surface` |
| `surface-raised` | `--color-surface-raised` | `bg-surface-raised` |
| `foreground` | `--color-foreground` | `text-foreground` |
| `foreground-muted` | `--color-foreground-muted` | `text-foreground-muted` |
| `accent` | `--color-accent` | `bg-accent`, `text-accent` |
| `accent-foreground` | `--color-accent-foreground` | `text-accent-foreground` |
| `border` | `--color-border` | `border-border` |
| `focus` | `--color-focus` | `outline-focus`, `ring-focus` |

### Typography / shape

| Token | CSS variable | Example utilities |
| --- | --- | --- |
| `font-sans` | `--font-sans` | `font-sans` |
| `font-display` | `--font-display` | `font-display` |
| `radius-sm` | `--radius-sm` | `rounded-sm` |
| `radius-md` | `--radius-md` | `rounded-md` |
| `radius-lg` | `--radius-lg` | `rounded-lg` |

Defaults live in `src/styles/global.css` (`@theme`). Theme stylesheets override them for the active `data-theme`.

Runtime validation of this vocabulary is intentionally deferred.
