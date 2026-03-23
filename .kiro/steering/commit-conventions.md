# Commit Conventions

**IMPORTANT**: The agent NEVER commits, pushes, or creates tags.

## Format

```
type(scope): :emoji_code: short description

Detailed explanation of what changed and why.
```

## Types

- `feat` — New feature (`:sparkles:`)
- `fix` — Bug fix (`:bug:`)
- `perf` — Performance improvement (`:zap:`)
- `docs` — Documentation (`:memo:`)
- `chore` — Maintenance tasks (`:wrench:`, `:arrow_up:`, `:bookmark:`)
- `refactor` — Code refactoring (`:recycle:`)
- `test` — Tests (`:white_check_mark:`)
- `ci` — CI/CD changes (`:construction_worker:`)

## Scope

Use: `infra`, `gateway`, `telegram`, `tools`.
Scope is optional for cross-cutting changes.

## Gitmoji

**Always use text codes** (`:sparkles:`), **never actual emoji** (✨).

## Body

**Always include a detailed body** explaining what and why.
