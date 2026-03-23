# Code Style & Best Practices

## TypeScript

### Strict Mode
- Always use strict mode (enabled in `tsconfig.json`)
- No `any` types — use `unknown` or proper types
- Explicit return types on all exported functions
- Explicit parameter types always

### Module System
- ES modules only (`"type": "module"` in package.json)
- Use `.js` extensions in imports
- Example: `import { foo } from './bar.js'` (not `./bar` or `./bar.ts`)

### Naming Conventions
- **camelCase** for variables, functions, methods
- **PascalCase** for classes, interfaces, types
- **UPPER_SNAKE_CASE** for constants
- **kebab-case** for file names

### Code Organization
```typescript
// 1. Type imports
import type { Context } from './types.js'

// 2. Node.js imports
import { readFileSync } from 'node:fs'

// 3. External imports
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

// 4. Internal imports
import { helper } from './helper.js'
```

## Code Quality

### Minimal Code
- Write only what's necessary
- No premature abstractions
- No unused code or imports

### Error Handling
- Always throw typed errors with clear messages
- Include context in error messages

### Security
- Never commit API keys, tokens, passwords
- Use environment variables and SSM/Secrets Manager
- Validate all external input
