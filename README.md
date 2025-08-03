# Tag4Gift
Tag, share and play to win a real Gift!

## Overview
Tag4Gift is a gamified platform that allows users to:
- "Tag" via QR/NFC codes at venues
- Post on social media mentioning venues  
- Play video games to participate in challenges and win real gifts (drinks, pizza, discounts)

## Architecture
This is a monorepo containing multiple applications and shared packages:

```
tag4gift/
├── apps/
│   ├── main/                   # Main user backend (NestJS + tRPC)
│   ├── business/               # Business owner backend
│   ├── admin/                  # Logging/monitoring backend
│   ├── webapp/                 # User web app (React + shadcn/ui)
│   ├── mobile/                 # User mobile app (React Native)
│   ├── dashboard/              # Business web dashboard (React)
│   └── dashboard-mobile/       # Business mobile dashboard (React Native)
├── packages/
│   ├── shared/                 # Shared code
│   ├── database/               # Prisma schema
│   ├── types/                  # TypeScript types
│   ├── ui-web/                 # Web UI components (React)
│   └── ui-mobile/              # Mobile UI components (React Native)
├── infrastructure/
│   └── terraform/              # Infrastructure as Code
└── tools/
    └── scripts/                # Build and deploy scripts
```

## Tech Stack
- **Backend**: NestJS + TypeScript + tRPC
- **Web Frontend**: React + shadcn/ui + TanStack + Tailwind CSS
- **Mobile Frontend**: React Native + NativeWind + TanStack
- **Database**: PostgreSQL + Prisma ORM
- **Infrastructure**: Terraform
- **Development**: MCP servers for enhanced development workflow

## Development Setup

### Prerequisites
- Node.js 18+
- Docker for development database
- React Native CLI
- ngrok for mobile development

### Quick Start
```bash
# Clone the repository
git clone https://github.com/00WhengWheng/Tag4Gift.git
cd Tag4Gift

# Copy environment variables
cp .env.example .env
# Edit .env with your actual values

# Install dependencies (once project is initialized)
npm run dev:setup

# Start development database
npm run dev:database

# Start development servers
npm run dev:start

# For mobile development
npm run mobile:start
```

### MCP Server Setup
This project uses Model Context Protocol (MCP) servers for enhanced development capabilities.

See [MCP Setup Guide](./docs/MCP_SETUP.md) for detailed configuration instructions.

The MCP servers provide:
- **Supabase Integration**: Database operations and migrations
- **Memory Management**: Context preservation across sessions
- **Nx Monorepo Management**: Workspace coordination
- **Documentation Processing**: Markdown and API docs
- **Sequential Thinking**: Complex problem-solving assistance

## Key Features

### Coin Economy System
Users earn three types of coins:
- **Scan Coins**: From QR/NFC code scanning at venues
- **Share Coins**: From social media posts mentioning venues
- **Game Coins**: From playing games

Coins are spent to participate in challenges and tournaments for real prizes.

### Mobile-First Development
- React Native CLI (not Expo managed)
- NFC support for Android/iOS
- Platform-specific implementations
- ngrok integration for local testing

## Documentation
- [MCP Server Setup](./docs/MCP_SETUP.md)
- [Copilot Instructions](./.github/copilot-instructions.md)

## License
MIT License - see [LICENSE](./LICENSE) for details.
