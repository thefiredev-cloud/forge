<div align="center">

# Forge

[![Build Status](https://img.shields.io/github/actions/workflow/status/thefiredev/forge/ci.yml?branch=main&style=flat-square&logo=github)](https://github.com/thefiredev/forge/actions)
[![Coverage](https://img.shields.io/codecov/c/github/thefiredev/forge?style=flat-square&logo=codecov)](https://codecov.io/gh/thefiredev/forge)
[![Version](https://img.shields.io/github/package-json/v/thefiredev/forge?style=flat-square)](https://github.com/thefiredev/forge/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

**Your 50-person team. Zero payroll.**

*Describe a project. Spawn a dream team. Ship a finished product.*

[Website](https://thefiredev.com/forge) · [Documentation](https://docs.thefiredev.com/forge) · [Discord](https://discord.gg/thefiredev) · [Request Demo](https://thefiredev.com/demo)

</div>

---

## What is Forge?

Forge is a Dream Team Simulator. Describe what you want to build — a startup, a product, a campaign, a legal strategy, anything — and Forge spawns up to 50 specialized AI agents representing every role a real company needs: CEO, CTO, designer, marketer, lawyer, accountant, HR, sales, PR, and more.

They don't just answer questions. They **debate**, challenge each other's assumptions, iterate on drafts, and produce a finished deliverable. Every role. Every perspective. Zero payroll.

---

## Key Value Props

| | |
|---|---|
| 🏢 **Full Org Simulation** | 50 specialized agents across every business function. |
| 🗣️ **Multi-Agent Debate** | Agents disagree, defend positions, and iterate — like real teams. |
| 📦 **Deliverable Output** | Not a summary. A finished product: code, copy, contracts, decks, plans. |
| ⚡ **Minutes, Not Months** | What takes a team 3 months takes Forge 3 hours. |
| 🎭 **Role Fidelity** | Each agent has domain expertise, communication style, and realistic constraints. |

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         Forge Engine                              │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    Project Briefing                        │    │
│  │           (Natural language → structured spec)            │    │
│  └───────────────────────────┬─────────────────────────────┘    │
│                               │                                   │
│  ┌────────────────────────────▼────────────────────────────┐    │
│  │                   Orchestrator Agent                       │    │
│  │          (Routes tasks · Manages debate rounds)           │    │
│  └──┬──────────┬──────────┬──────────┬──────────┬──────────┘    │
│     │          │          │          │          │                  │
│  ┌──▼──┐  ┌───▼──┐  ┌───▼──┐  ┌───▼──┐  ┌───▼──┐             │
│  │ CEO │  │ CTO  │  │ CMO  │  │ Legal│  │ CFO  │  ... +45    │
│  │Agent│  │Agent │  │Agent │  │Agent │  │Agent │             │
│  └──┬──┘  └───┬──┘  └───┬──┘  └───┬──┘  └───┬──┘             │
│     └─────────┴──────────┴─────────┴──────────┘                  │
│                               │                                   │
│  ┌────────────────────────────▼────────────────────────────┐    │
│  │                    Debate Chamber                          │    │
│  │    Agents challenge, defend, and refine each other's      │    │
│  │    proposals through structured debate rounds             │    │
│  └────────────────────────────┬────────────────────────────┘    │
│                               │                                   │
│  ┌────────────────────────────▼────────────────────────────┐    │
│  │                   Workspace & Output                       │    │
│  │   Code · Designs · Contracts · Pitch Decks · Plans        │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
```

---

## The Agent Roster

| Domain | Agents |
|---|---|
| **Executive** | CEO, COO, CFO, CTO, CMO, CPO |
| **Engineering** | Lead Engineer, Backend, Frontend, Mobile, DevOps, Security, QA |
| **Design** | Creative Director, UX Designer, Brand Designer, Motion Designer |
| **Product** | Product Manager, Analyst, Growth PM |
| **Marketing** | Content Strategist, SEO, Paid Ads, Social Media, PR |
| **Sales** | VP Sales, Account Executive, SDR, Sales Ops |
| **Legal** | General Counsel, IP Attorney, Employment Attorney, Contracts |
| **Finance** | Controller, FP&A, Investor Relations |
| **HR** | CHRO, Recruiter, Culture Lead |
| **Operations** | Project Manager, Procurement, Vendor Management |
| **External** | Customer Advisory Board (3 personas), Investor Panel (3 personas) |

---

## Features

### 🎯 Natural Language Briefing
- Describe your project in plain English
- Forge extracts scope, constraints, success criteria, and stakeholders
- Generates a structured project spec reviewed by CEO + CTO agents before kickoff

### 🗣️ Structured Debate Engine
- Proposal rounds: each relevant agent submits a position
- Challenge rounds: agents identify risks, gaps, and conflicts
- Synthesis rounds: orchestrator merges consensus positions
- Configurable depth: 1–5 debate rounds per topic

### 📁 Shared Workspace
- All agents read and write to a shared project workspace
- Versioned artifact store (code, docs, designs, contracts)
- Real-time visibility into agent activity and rationale

### 📦 Deliverable Types
- **Software:** Full codebase with tests, docs, deployment config
- **Business Plan:** Executive summary, financial model, GTM, competitive analysis
- **Legal Package:** Term sheet, NDA, employment agreements, IP assignment
- **Marketing Campaign:** Copy, creative briefs, media plan, budget allocation
- **Pitch Deck:** 12-slide deck with speaker notes and investor FAQs

### 🔄 Iteration Mode
- Feed back real-world results → agents update strategy
- Persistent project memory across sessions
- Human-in-the-loop checkpoints (configurable)

---

## Tech Stack

[![Node.js](https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=nodedotjs)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-4169e1?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-7.x-dc382d?style=flat-square&logo=redis)](https://redis.io/)
[![OpenAI](https://img.shields.io/badge/OpenAI-GPT--4o-412991?style=flat-square&logo=openai)](https://openai.com/)
[![Anthropic](https://img.shields.io/badge/Anthropic-Claude-d4761a?style=flat-square)](https://anthropic.com/)

| Layer | Technology |
|---|---|
| Runtime | Node.js 20 + TypeScript |
| LLM Backbone | OpenAI GPT-4o + Anthropic Claude 3.5 |
| Agent Framework | Custom multi-agent orchestration |
| Database | PostgreSQL 16 + pgvector |
| Cache / Queue | Redis + BullMQ |
| Workspace Storage | S3-compatible object storage |
| Real-time | WebSockets (agent activity feed) |

---

## Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL 16+ with pgvector
- Redis 7+
- API keys: OpenAI, Anthropic

### Installation

```bash
git clone https://github.com/thefiredev/forge.git
cd forge
npm install
cp .env.example .env
# Fill in your API keys
npm run db:migrate
npm run dev
```

### Run Your First Project

```bash
# Via CLI
npm run project:create -- \
  --brief "Build a SaaS analytics dashboard for e-commerce brands" \
  --team-size 20 \
  --output-type software

# Via API
curl -X POST http://localhost:3101/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "brief": "Build a SaaS analytics dashboard for e-commerce brands",
    "teamSize": 20,
    "outputType": "software",
    "debateRounds": 3
  }'
```

### Watch the Team Work

```bash
npm run dashboard  # http://localhost:3101
# Real-time feed of all agent activity, debates, and outputs
```

---

## API Reference

### POST /api/projects

```json
{
  "brief": "string",
  "teamSize": 50,
  "outputType": "software | business-plan | legal | marketing | pitch-deck",
  "debateRounds": 3,
  "humanCheckpoints": ["spec-approval", "final-review"],
  "budget": 50000
}
```

### GET /api/projects/:id/stream

Server-sent events stream of agent activity.

```
event: agent-message
data: {"agent": "CTO", "message": "I'd push back on the React choice — Next.js adds complexity we don't need at this stage.", "timestamp": "..."}

event: debate-round
data: {"round": 2, "topic": "Tech stack selection", "participants": ["CEO", "CTO", "Lead Engineer"]}

event: artifact
data: {"type": "code", "path": "src/dashboard/index.tsx", "agent": "Lead Engineer"}
```

### Full API docs → [docs.thefiredev.com/forge/api](https://docs.thefiredev.com/forge/api)

---

## Project Structure

```
forge/
├── src/
│   ├── agents/
│   │   ├── base.agent.ts          # Base agent class
│   │   ├── executive/             # CEO, COO, CFO, CTO, CMO, CPO
│   │   ├── engineering/           # Engineering team agents
│   │   ├── design/                # Design team agents
│   │   ├── marketing/             # Marketing team agents
│   │   ├── legal/                 # Legal team agents
│   │   ├── finance/               # Finance team agents
│   │   └── personas/              # Customer + investor personas
│   ├── orchestrator/
│   │   ├── director.ts            # Agent coordination
│   │   ├── debate-engine.ts       # Structured debate logic
│   │   └── round-manager.ts       # Debate round management
│   ├── workspace/
│   │   ├── artifact-store.ts      # Output artifact management
│   │   ├── shared-context.ts      # Cross-agent shared memory
│   │   └── versioning.ts          # Artifact versioning
│   ├── api/
│   │   ├── routes/
│   │   └── server.ts
│   └── utils/
│       ├── llm.ts
│       └── briefing-parser.ts
├── config/
│   └── agents/                    # Agent persona definitions
├── prisma/
├── tests/
└── scripts/
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Security

See [SECURITY.md](SECURITY.md). Report vulnerabilities to security@thefiredev.com.

---

## License

MIT © [The Fire Dev LLC](https://thefiredev.com)

---

<div align="center">

**Built by [The Fire Dev LLC](https://thefiredev.com)**

*Agent-as-a-Service. We build the systems. You keep the revenue.*

[thefiredev.com](https://thefiredev.com) · [X](https://x.com/thefiredev) · [LinkedIn](https://linkedin.com/company/thefiredev)

</div>
