# Architecture

## Overview

InkPilot is a serverless personal AI assistant on AWS.

```
📱 Telegram (text + voice)
    │
    ▼
API Gateway (webhook)
    │
    ▼
Lambda "orchestrator"
    ├── Auth: allowlist Telegram user ID
    ├── Commands: /profile, /project, /new, /status, /profiles
    ├── STT: Amazon Transcribe (voice → text)
    ├── Bedrock: Claude Sonnet (default) / Opus (books)
    │   Tools:
    │   ├── github_tree
    │   ├── github_read
    │   ├── github_search
    │   ├── s3_read / s3_write
    │   └── conversation_history
    ├── TTS: Amazon Polly (text → voice)
    ├── DynamoDB: conversations + active session
    └── S3: steering files, profiles, book chapters
```

## Project Structure

```
src/
├── infra/              # CDK stacks and constructs
│   ├── app.ts          # CDK app entry point
│   └── stacks/
│       └── inkpilot-stack.ts
├── handlers/           # Lambda handlers
│   └── telegram.ts     # Webhook handler
└── lib/                # Shared logic
    ├── bedrock.ts      # Bedrock client + tool calling
    ├── profiles.ts     # Profile management
    ├── telegram.ts     # Telegram Bot API helpers
    ├── transcribe.ts   # STT
    ├── polly.ts        # TTS
    └── github.ts       # GitHub API tools
test/
├── handlers/
└── lib/
```

## Key Design Decisions

- **Lambda** for compute (serverless, pay-per-use)
- **API Gateway** for Telegram webhook endpoint
- **DynamoDB** for conversation history and session state
- **S3** for steering files, profiles, book chapters
- **Bedrock** for Claude (Sonnet default, Opus for books)
- **GitHub API** for repo exploration (no git clone needed)
- **Transcribe + Polly** for voice I/O
- **CDK** for infrastructure as code
