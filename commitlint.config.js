/** @type {import('@commitlint/types').UserConfig} */
export default {
	extends: ["@commitlint/config-conventional"],
	rules: {
		// Allow "Adds", "Fixed", etc. — Conventional Commits structure only.
		"subject-case": [0],
	},
};

/*
Default types from @commitlint/config-conventional (`type-enum`):

  build     — build system or external dependencies (e.g. pnpm, typescript)
  chore     — maintenance that does not change src or tests
  ci        — CI configuration / scripts
  docs      — documentation only
  feat      — a new feature
  fix       — a bug fix
  perf      — performance improvement
  refactor  — neither a fix nor a feature
  revert    — reverts a previous commit
  style     — formatting / whitespace (no code-meaning change)
  test      — adding or correcting tests

Scopes (the optional `(scope)` in `feat(scope): …`) are not restricted by default.
*/
