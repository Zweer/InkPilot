# 🖋️ InkPilot

Your personal AI assistant — Claude on AWS Bedrock, accessible via Telegram, with voice support and multi-profile context management.

## What is InkPilot?

InkPilot is a serverless personal AI assistant that lets you chat with Claude from anywhere — including while driving, via voice messages. It supports multiple profiles so you can seamlessly switch between casual chat, coding project discussions, and creative writing sessions.

## Features

- **Telegram integration** — text and voice messages
- **Voice I/O** — speak your message, hear the response (Transcribe + Polly)
- **Multi-profile** — switch context with `/profile` (chat, coding, books)
- **GitHub-aware** — explore repos via GitHub API without cloning
- **Book writing** — dedicated profiles with steering for creative writing
- **Serverless** — runs on AWS Lambda, pay only for what you use
- **CDK** — infrastructure as code, one-command deploy

## Architecture

```
📱 Telegram (text + voice)
    │
    ▼
API Gateway → Lambda (orchestrator)
                ├── Bedrock (Claude Sonnet / Opus)
                ├── DynamoDB (conversations)
                ├── S3 (profiles, steering, chapters)
                ├── GitHub API (repo exploration)
                ├── Transcribe (STT)
                └── Polly (TTS)
```

## Getting Started

```bash
npm install
npm run build
npm run synth    # Preview CloudFormation
npm run deploy   # Deploy to AWS
```

## Bot Commands

| Command | Description |
|---------|-------------|
| `/profile <name>` | Switch active profile |
| `/profiles` | List available profiles |
| `/project <owner/repo>` | Activate GitHub repo context |
| `/new` | Reset conversation |
| `/status` | Show active profile, model, token usage |

## Development

```bash
npm run build          # Build with tsdown
npm run lint           # All linters
npm test               # Run tests
npm run test:coverage  # Tests with coverage
```

## License

MIT
