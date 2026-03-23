# Testing Strategy

## Test Framework

### Vitest
- All tests use **Vitest**
- Configuration in `vitest.config.ts` at root
- v8 coverage provider

## Test Structure

```
src/
└── lib/feature.ts
test/
└── lib/feature.test.ts
```

### Test Pattern (AAA)
```typescript
import { describe, it, expect, vi } from 'vitest'

describe('FeatureName', () => {
  it('should do something specific', () => {
    // Arrange
    const input = 'test'
    // Act
    const result = doSomething(input)
    // Assert
    expect(result).toBe('expected')
  })
})
```

## Mocking

### When to Mock
- AWS SDK calls (DynamoDB, S3, Bedrock, Transcribe, Polly)
- GitHub API calls
- Telegram Bot API calls

### When NOT to Mock
- Internal functions, pure logic, utilities
