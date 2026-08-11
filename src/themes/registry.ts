import { redshifted } from "./redshifted/index.ts";
import type { Theme } from "./types.ts";

/**
 * Sole registration surface for themes.
 * Statically import each theme module here so Vite includes its CSS side effects.
 */
export const themes = {
	redshifted,
} as const satisfies Record<string, Theme>;

export type ThemeId = keyof typeof themes;

export function getTheme(id: string): Theme {
	if (!Object.hasOwn(themes, id)) {
		throw new Error(
			`Unknown theme "${id}". Register it in src/themes/registry.ts.`,
		);
	}

	return themes[id as ThemeId];
}
