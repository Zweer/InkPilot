# Build & Tooling

## Build System

### tsdown
- **tsdown** for building (NOT tsc, esbuild, rollup)
- Configuration: `tsdown.config.ts` at root
- Outputs: `.mjs` + `.d.ts` + sourcemaps
- tsc is only used for type-checking (`tsc --noEmit`)

## AWS CDK

### Infrastructure
- All infra defined in `src/infra/`
- CDK v2 with `aws-cdk-lib`
- Deploy: `npm run deploy` or `npx cdk deploy`
- Synth: `npm run synth`

## Linting & Formatting

### Biome
- **Biome** for linting and formatting (NOT ESLint/Prettier)
- Single quotes, 100 line width
- Uses `.editorconfig` for indent settings
- Import sorting with grouped blank lines

## Git Hooks

### Lefthook
- **Lefthook** for git hooks (NOT husky + lint-staged)
- Pre-commit: biome → lockfile → package-lint → sort → build → typecheck → test
- Commit-msg: commitlint validation

## Package Manager

### npm
- Use **npm** (NOT pnpm or yarn)
- Lock file: `package-lock.json`

## Scripts Reference

| Script | Description |
|--------|-------------|
| `npm run build` | Build with tsdown |
| `npm run clean` | Remove dist/ and cdk.out/ |
| `npm run deploy` | CDK deploy |
| `npm run synth` | CDK synth |
| `npm run lint` | All linters in parallel |
| `npm test` | Run tests |
| `npm run test:coverage` | Tests with coverage |
