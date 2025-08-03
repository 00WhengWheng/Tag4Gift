# MCP Server Configuration for Tag4Gift - Enhanced Development Suite

This document explains the comprehensive Model Context Protocol (MCP) server setup for the Tag4Gift platform development workflow.

## Overview

The MCP servers provide a complete development environment for:
- **Sequential Thinking**: Complex problem-solving for dual-domain architecture
- **Filesystem Operations**: Monorepo management across 7 apps and 6 packages
- **Nx Monorepo Management**: Build orchestration for t4g.fun & t4g.space
- **Supabase Integration**: Database operations, real-time features, and Edge Functions
- **Memory/Context Management**: Cross-session development state preservation
- **PostgreSQL/Prisma**: Database schema management and migrations
- **Playwright Testing**: E2E testing for web and mobile platforms
- **Docker Container Management**: Local development environment
- **NPM Package Management**: Dependency management across monorepo

## Complete MCP Servers Configuration

### 1. Sequential Thinking Server ✅ **VERIFIED WORKING**
**Purpose**: Complex problem-solving assistance
**Perfect for Tag4Gift**:
- Dual-domain architecture decisions (t4g.fun vs t4g.space)
- Three-coin economy balance optimization
- Tournament bracket algorithms and matchmaking logic
- Cross-platform mobile/web synchronization strategies

**Package**: `@modelcontextprotocol/server-sequential-thinking`

### 2. Filesystem Server ✅ **VERIFIED WORKING**
**Purpose**: Safe file operations within project directory
**Perfect for Tag4Gift**:
- Managing 7 apps (main, business, admin, webapp, mobile, dashboard, dashboard-mobile)
- Coordinating 6 packages (shared, database, types, ui-web, ui-mobile, auth-*)
- Code generation across dual backends
- Template creation for tRPC routers and React components

**Package**: `@modelcontextprotocol/server-filesystem`
**Scope**: Limited to `/home/fdm/Tag4Gift`

### 3. Nx Monorepo Server ✅ **VERIFIED WORKING**
**Purpose**: Workspace coordination and build orchestration
**Perfect for Tag4Gift**:
- Coordinating builds across user platform (t4g.fun) and business platform (t4g.space)
- Managing dependencies between 7 apps and 6 shared packages
- Development script coordination (dev:main, dev:business, dev:mobile)
- Cross-app testing and deployment workflows

**Package**: `nx-mcp`

### 4. Supabase Server ✅ **ADDED - OFFICIAL**
**Purpose**: Comprehensive Supabase operations
**Perfect for Tag4Gift**:
- Database schema management for coin economy tables
- Real-time subscriptions for live tournament updates
- Edge Functions deployment for game logic
- Venue data management with geolocation
- Challenge and tournament data synchronization

**Package**: `@supabase/mcp-server-supabase`
**Environment**: Uses your actual Supabase credentials

### 5. Memory Server ✅ **ADDED - OFFICIAL**
**Purpose**: Cross-session development state preservation
**Perfect for Tag4Gift**:
- Remember architecture decisions across development sessions
- Track coin economy balance changes and optimizations
- Maintain context for complex tournament logic development
- Store development patterns for React Native mobile apps

**Package**: `@modelcontextprotocol/server-memory`
**Storage**: `/home/fdm/Tag4Gift/.mcp/memory`

### 6. PostgreSQL/Prisma Server ✅ **ADDED - ENHANCED**
**Purpose**: Database operations with Prisma integration
**Perfect for Tag4Gift**:
- Direct PostgreSQL operations on Supabase database
- Prisma schema management and migrations
- Coin transaction integrity validation
- User and business data management
- Performance optimization for large datasets

**Package**: `enhanced-postgres-mcp-server`
**Connection**: Direct to your Supabase PostgreSQL instance

### 7. Playwright Server ✅ **ADDED - OFFICIAL**
**Purpose**: End-to-end testing automation
**Perfect for Tag4Gift**:
- E2E testing for user web app (app.t4g.fun)
- E2E testing for business dashboard (app.t4g.space)
- QR code scanning simulation and testing
- Social media integration testing
- Cross-browser mobile responsive testing

**Package**: `@playwright/mcp`

### 8. Docker/Kubernetes Server ✅ **ADDED**
**Purpose**: Container management for development
**Perfect for Tag4Gift**:
- Local development environment setup
- Database container management
- Redis cache container orchestration
- Multi-service development coordination
- Production deployment preparation

**Package**: `mcp-server-kubernetes`

### 9. NPM Package Management Server ✅ **ADDED**
**Purpose**: Package dependency management
**Perfect for Tag4Gift**:
- Coordinating dependencies across 7 apps
- Managing shared package versions
- React Native mobile dependency management
- Development tool installation and updates
- Monorepo workspace package linking

**Package**: `@maikcyphlock/npm-mcp`

## Tag4Gift-Specific Development Workflows

### Coin Economy Development Workflow
```bash
1. Use Sequential Thinking MCP → Design coin balance algorithms
2. Use Memory MCP → Store economic model decisions
3. Use Supabase MCP → Create coin transaction tables
4. Use PostgreSQL MCP → Optimize database performance
5. Use Playwright MCP → Test coin transactions E2E
```

### Dual-Domain Feature Development
```bash
1. Use Sequential Thinking MCP → Plan feature architecture
2. Use Filesystem MCP → Generate code for both domains
3. Use Nx MCP → Coordinate builds across platforms
4. Use Supabase MCP → Deploy Edge Functions
5. Use Memory MCP → Track implementation decisions
```

### Mobile Development Workflow
```bash
1. Use Docker MCP → Setup development containers
2. Use NPM MCP → Manage React Native dependencies
3. Use Filesystem MCP → Generate platform-specific code
4. Use Playwright MCP → Test mobile web responsiveness
5. Use Supabase MCP → Test real-time mobile features
```

## Installation Instructions

### 1. Install All MCP Servers
```bash
# Core development servers
npm install -g @modelcontextprotocol/server-sequential-thinking
npm install -g @modelcontextprotocol/server-filesystem
npm install -g @modelcontextprotocol/server-memory
npm install -g nx-mcp

# Database and backend servers
npm install -g @supabase/mcp-server-supabase
npm install -g enhanced-postgres-mcp-server

# Testing and automation servers
npm install -g @playwright/mcp
npm install -g mcp-server-kubernetes
npm install -g @maikcyphlock/npm-mcp
```

### 2. Configure Environment Variables
Use `.env.dual-domain-example` as your template with enhanced MCP variables:
- MCP Memory storage path
- Docker/Kubernetes configuration
- Playwright browser settings
- All Supabase credentials

### 3. Create MCP Storage Directories
```bash
mkdir -p /home/fdm/Tag4Gift/.mcp/memory
mkdir -p /home/fdm/Tag4Gift/.mcp/cache
```

## Development Workflow Integration

### Local Development with Full MCP Suite
```bash
# Use Docker MCP to start services
# Use NPM MCP to install dependencies
# Use Nx MCP to coordinate builds
npm run dev:setup

# Start backends (coordinated via Nx MCP)
npm run dev:main     # localhost:3001 (api.t4g.fun)
npm run dev:business # localhost:3002 (api.t4g.space)
npm run dev:admin    # localhost:3003

# Use Supabase MCP for real-time features
# Use Memory MCP to track session state
# Use Playwright MCP for continuous testing
```

### Feature Development with MCP Assistance
```bash
# 1. Architecture Planning
Use Sequential Thinking MCP → Complex feature design
Use Memory MCP → Store architectural decisions

# 2. Database Design
Use Supabase MCP → Schema evolution
Use PostgreSQL MCP → Performance optimization

# 3. Code Generation
Use Filesystem MCP → Generate across monorepo
Use NPM MCP → Manage dependencies

# 4. Testing
Use Playwright MCP → E2E test automation
Use Docker MCP → Integration testing environment
```

## Security and Performance Notes

### Security Considerations
- Supabase MCP uses your actual production credentials
- Memory MCP stores sensitive architectural decisions locally
- PostgreSQL MCP has full database access
- Docker MCP can manage system containers

### Performance Optimization
- Memory MCP caches development context for faster iterations
- Nx MCP optimizes build coordination across 7 apps
- PostgreSQL MCP enables direct database performance tuning
- Playwright MCP runs tests in parallel for faster feedback

## Troubleshooting

### Common MCP Server Issues
1. **Supabase Connection**: Verify credentials in environment
2. **Memory Storage**: Ensure `.mcp/memory` directory exists
3. **PostgreSQL Access**: Check database URL and permissions
4. **Docker Daemon**: Ensure Docker is running for container management
5. **Playwright Browsers**: Install browsers with `npx playwright install`

## Next Steps with Enhanced MCP

With this comprehensive MCP setup, you can now:
1. **Design Complex Architecture**: Use Sequential Thinking for dual-domain challenges
2. **Manage Full Development Lifecycle**: From database design to E2E testing
3. **Optimize Performance**: Direct database and container management
4. **Maintain Development State**: Cross-session context preservation
5. **Automate Testing**: Complete E2E coverage for both platforms

Your Tag4Gift development environment is now fully MCP-enhanced for professional-grade development! 🚀

## MCP Servers Configuration

### 1. Sequential Thinking Server ✅ **VERIFIED WORKING**
Complex problem-solving assistance:
- Multi-step problem breakdown
- Architecture decision support for dual-domain setup (t4g.fun & t4g.space)
- Code review and optimization
- Debugging assistance for coin economy logic
- Tournament bracket algorithm design

**Package**: `@modelcontextprotocol/server-sequential-thinking`

### 2. Filesystem Server ✅ **VERIFIED WORKING**
File management and code generation:
- Safe file operations within `/home/fdm/Tag4Gift`
- Monorepo structure management
- Code generation across apps and packages
- Template creation for dual backends
- Configuration file management

**Package**: `@modelcontextprotocol/server-filesystem`

### 3. Nx Server ✅ **VERIFIED WORKING**
Monorepo management and build orchestration:
- Workspace project management
- Build and test coordination for 7 apps
- Dependency graph analysis
- Code generation assistance
- Task orchestration across domains

**Package**: `nx-mcp`

## Tag4Gift-Specific Use Cases

### Dual-Domain Architecture Support
Use these MCP servers to manage your complex dual-domain setup:

#### Sequential Thinking for:
- **Auth0 Dual Application Design**: Separate user/business authentication flows
- **Coin Economy Balance**: Three-coin system optimization
- **Tournament Logic**: Bracket generation and matchmaking algorithms
- **Cross-Platform Data Sync**: Mobile/web state management

#### Filesystem for:
- **Shared Package Management**: Database, types, UI components
- **Environment Configuration**: Dual .env files for different domains
- **Code Generation**: tRPC routers, Prisma schemas, React components
- **Infrastructure as Code**: Terraform configurations

#### Nx for:
- **Multi-App Coordination**: 7 apps (main, business, admin, webapp, mobile, dashboard, dashboard-mobile)
- **Shared Package Dependencies**: Database, types, UI components
- **Build Orchestration**: Parallel builds for user/business platforms
- **Development Scripts**: dev:main, dev:business, dev:mobile workflows

## Setup Instructions

### 1. Install MCP Server Dependencies
```bash
# Install the verified working MCP servers
npm install -g @modelcontextprotocol/server-sequential-thinking
npm install -g @modelcontextprotocol/server-filesystem
npm install -g nx-mcp
```

### 2. Configure Environment Variables
1. Use `.env.dual-domain-example` as template for dual-domain setup
2. Fill in your actual values for both t4g.fun and t4g.space domains
3. Ensure `.env.development` follows the dual-domain pattern

### 3. Validate MCP Configuration
The MCP configuration is at `.vscode/mcp.json` with only verified working servers.

## Development Workflow Integration

### Local Development with MCP
```bash
# Start backends with different ports (use MCP to coordinate)
npm run dev:main     # localhost:3001 (api.t4g.fun)
npm run dev:business # localhost:3002 (api.t4g.space)
npm run dev:admin    # localhost:3003

# Use ngrok for mobile testing (MCP helps manage URLs)
ngrok http 3001 --subdomain=main-api     # User mobile app
ngrok http 3002 --subdomain=business-api # Business mobile app

# Start frontends (MCP coordinates builds)
npm run dev:webapp           # localhost:3000 (app.t4g.fun)
npm run dev:dashboard        # localhost:3010 (app.t4g.space)
```

### MCP-Assisted Development Tasks

#### 1. Database Schema Evolution
```bash
# Use Sequential Thinking MCP to design schema changes
# Use Filesystem MCP to update Prisma schema in packages/database
# Use Nx MCP to coordinate migrations across backends
```

#### 2. Cross-Platform Feature Development
```bash
# Use Sequential Thinking for feature architecture
# Use Filesystem for code generation across apps
# Use Nx for dependency management and builds
```

#### 3. Dual-Domain Security Implementation
```bash
# Use Sequential Thinking for Auth0 configuration strategy
# Use Filesystem for environment variable management
# Use Nx for coordinated security testing
```

## Removed Non-Working Servers

These servers were planned but are not available in npm registry:
- ❌ `@modelcontextprotocol/server-supabase` - Use direct Supabase tools instead
- ❌ `@modelcontextprotocol/server-memory` - Use Sequential Thinking for context
- ❌ `@modelcontextprotocol/server-markitdown` - Use standard documentation tools

## Troubleshooting

### Common Issues
1. **Package Not Found**: Only use the verified packages listed above
2. **Filesystem Permissions**: Ensure MCP has access to `/home/fdm/Tag4Gift`
3. **Nx Workspace Detection**: Run from workspace root for Nx MCP to work

### Debug Mode
```bash
NODE_ENV=development
LOG_LEVEL=debug
```

## Security Notes for Dual-Domain Setup

⚠️ **Important for Tag4Gift:**
- Keep user (t4g.fun) and business (t4g.space) credentials separate
- Use different JWT secrets for each domain
- Implement separate CORS policies
- Monitor both platforms with separate Sentry projects

## Next Steps

With MCP configured, you can now:
1. **Generate Database Schema**: Use MCP to design the coin economy tables
2. **Set up Dual Backends**: NestJS + tRPC for both domains
3. **Create Shared Packages**: Types, UI components, business logic
4. **Configure Development Scripts**: Multi-domain development workflow

## MCP Servers Configuration

### 1. Supabase Server
Handles database operations, migrations, and Supabase-specific features:
- Database schema management
- Real-time subscriptions
- Row Level Security (RLS) policies
- Edge Functions deployment

**Required Environment Variables:**
```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 2. Memory Server
Provides context preservation and knowledge graph capabilities:
- Development session context
- Architecture decisions tracking
- Code patterns and conventions
- Cross-session learning

### 3. Nx Server
Monorepo management and build orchestration:
- Workspace project management
- Build and test coordination
- Dependency graph analysis
- Code generation assistance

### 4. Markitdown Server
Document processing and conversion:
- Markdown document handling
- Documentation generation
- API documentation processing
- README and guide creation

### 5. Sequential Thinking Server
Complex problem-solving assistance:
- Multi-step problem breakdown
- Architecture decision support
- Code review and optimization
- Debugging assistance

## Setup Instructions

### 1. Install MCP Server Dependencies
```bash
# Install the MCP servers globally or in your project
npm install -g @modelcontextprotocol/server-supabase
npm install -g @modelcontextprotocol/server-memory
npm install -g @nx-mcp/server
npm install -g @modelcontextprotocol/server-markitdown
npm install -g @modelcontextprotocol/server-sequential-thinking
```

### 2. Configure Environment Variables
1. Copy `.env.example` to `.env`
2. Fill in your actual values for Supabase and other services
3. Ensure `.env` is in your `.gitignore`

### 3. Validate MCP Configuration
The MCP configuration is located at `.vscode/mcp.json` and will be automatically loaded by VS Code with MCP support.

## Usage Examples

### Database Operations with Supabase Server
- Execute SQL queries directly
- Apply database migrations
- Generate TypeScript types
- Deploy Edge Functions
- Monitor database performance

### Project Management with Nx Server
- Generate new applications and libraries
- Run build and test tasks
- Analyze dependency graphs
- Coordinate cross-app development

### Documentation with Markitdown Server
- Convert documentation formats
- Generate API documentation
- Process markdown files
- Create project guides

## Integration with Tag4Gift Architecture

### Development Workflow
1. **Local Development**: Use Supabase server for local database operations
2. **Mobile Testing**: Coordinate with ngrok setup for mobile app testing
3. **Monorepo Management**: Use Nx server for coordinating builds across apps
4. **Documentation**: Use Markitdown for maintaining project documentation

### Production Considerations
- MCP servers are development tools and should not be used in production
- Environment variables should be properly secured
- Database operations should be validated before applying to production

## Troubleshooting

### Common Issues
1. **Missing Environment Variables**: Ensure all required variables are set in `.env`
2. **Network Connectivity**: Check if Supabase URL is accessible
3. **Permission Issues**: Verify service role key has necessary permissions
4. **Installation Issues**: Try reinstalling MCP servers globally

### Debug Mode
To enable debug mode for MCP servers, set:
```bash
NODE_ENV=development
LOG_LEVEL=debug
```

## Security Notes

⚠️ **Important Security Considerations:**
- Never commit `.env` files to version control
- Use service role keys only in secure development environments
- Rotate API keys regularly
- Implement proper access controls for production databases
- Use read-only keys where possible for development

## Integration with Tag4Gift Features

### Coin Economy Management
Use Supabase server to:
- Monitor coin transaction integrity
- Analyze coin distribution patterns
- Implement anti-fraud measures
- Track coin velocity

### Challenge & Tournament System
Use Nx server to:
- Coordinate game engine integration
- Manage tournament bracket generation
- Sync challenge data across platforms

### Mobile Development
Use Memory server to:
- Track mobile-specific development patterns
- Remember platform-specific implementations
- Maintain context for React Native development
