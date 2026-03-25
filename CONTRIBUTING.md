# Contributing to NEXAR

Thank you for your interest in contributing!

## Development Setup

```bash
git clone https://github.com/YOUR_USERNAME/nexar.git
cd nexar
npm install
npm run dev
```

## Branching Strategy

- `main` — production-ready code
- `develop` — active development
- `feature/your-feature` — new features
- `fix/your-fix` — bug fixes

## Pull Request Process

1. Fork the repo and create a branch from `develop`
2. Make your changes with clear, descriptive commits
3. Ensure `npm run build` and `npx tsc --noEmit` pass with no errors
4. Open a PR against `develop` with a description of your changes

## Ideas for Contributions

- [ ] Real API integrations (Polymarket, ADS-B Exchange, Whale Alert)
- [ ] WebSocket support for true real-time updates
- [ ] Dark/light theme toggle
- [ ] Mobile responsive layout
- [ ] Signal filtering and search
- [ ] Historical signal replay
- [ ] Alert notifications (browser push)
- [ ] Export signals to CSV

## Code Style

- TypeScript strict mode — no `any` unless absolutely necessary
- Components in `components/`, data in `lib/`, pages in `app/`
- CSS classes only — no inline styles except dynamic values
