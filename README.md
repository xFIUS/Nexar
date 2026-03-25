# NEXAR — Signal Intelligence Terminal

> Real-time signal intelligence terminal for prediction markets.  
> Military flights · Whale wallets · OSINT · Telegram · X/Twitter — live, mapped, actionable.

---

## Overview

NEXAR monitors geopolitical signals and cross-references them with prediction market odds in real time. Built for traders, researchers, and analysts who want to see the signals before the narrative forms.

**What NEXAR tracks:**
- 🔴 **Military Flights** — AWACS, JSTARS, RC-135, P-8 Poseidon and more
- 🟡 **Whale Wallets** — BTC, ETH, SOL, cross-chain movements
- 🟠 **OSINT** — satellite imagery, troop movements, port activity
- 🔵 **Telegram** — channel activity spikes, narrative clusters
- 🟢 **X/Twitter** — coordinated posting detection, sentiment NLP

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Globe | D3.js + TopoJSON |
| Styling | CSS Variables (no Tailwind) |
| Fonts | Orbitron + Share Tech Mono (Google Fonts) |
| Deploy | Vercel |

---

## Project Structure

```
nexar/
├── .github/
│   └── workflows/
│       └── ci.yml            # GitHub Actions CI
├── app/
│   ├── layout.tsx            # Root layout + metadata
│   ├── page.tsx              # Main page + live simulation logic
│   └── globals.css           # Full design system (CSS variables)
├── components/
│   ├── Topbar.tsx            # Header with live KPIs + UTC clock
│   ├── Ticker.tsx            # Scrolling news ticker
│   ├── Hero.tsx              # Globe section with flanking stat cards
│   ├── Globe.tsx             # D3 + TopoJSON rotating globe (client)
│   ├── SignalFeed.tsx        # Intel signal feed with probability bars
│   ├── MarketsPanel.tsx      # Prediction markets with live updating odds
│   ├── FlightsPanel.tsx      # Military flights tracker
│   ├── WhalePanel.tsx        # Whale wallet movement monitor
│   └── SourcesBar.tsx        # Bottom source breakdown bar
├── lib/
│   ├── data.ts               # Seed data (signals, markets, flights, whales)
│   └── types.ts              # TypeScript interfaces
├── public/
├── .env.example
├── next.config.js
├── tsconfig.json
└── vercel.json
```

---

## Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/nexar.git
cd nexar

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

---

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

---

## Connecting Real Data

Currently all data is simulated. To wire up real sources, edit `app/page.tsx`:

| Source | Suggested API |
|---|---|
| Prediction Markets | Polymarket API / Kalshi API |
| Military Flights | ADS-B Exchange / FlightRadar24 |
| Whale Tracking | Whale Alert API |
| OSINT / Telegram | Telegram Bot API |
| X/Twitter | X API v2 |

---

## License

MIT

---

*NEXAR — The world is a signal.*
