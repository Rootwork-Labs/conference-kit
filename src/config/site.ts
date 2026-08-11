import type { ThemeId } from "../themes/registry.ts";

/**
 * Build-time site configuration.
 * Theme selection moves to YAML in a later content-model issue.
 */
export const site = {
	name: "Conference Kit",
	themeId: "redshifted" satisfies ThemeId as ThemeId,
} as const;
