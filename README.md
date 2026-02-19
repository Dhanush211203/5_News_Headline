# 🗞️ 5 Headlines a Day

A minimalist news web app that shows exactly **5 curated headlines per day** — nothing more. Resets every midnight. No accounts, no algorithms, no infinite scroll.

## Features

- **5 Daily Headlines** — Fetched from GNews API, cached in localStorage
- **Midnight Reset** — Live countdown timer + automatic refresh
- **Dark Mode** — Toggle with persistence across sessions
- **Category Filters** — General, Technology, Sports, Business
- **Responsive Design** — Beautiful on mobile (375px) and desktop (1280px)
- **Zero Dependencies** — Pure HTML + CSS + JS in a single file

## Quick Start

1. Open `index.html` in your browser — that's it!
2. *(Optional)* Replace the API key in the `CONFIG` object with your own from [gnews.io](https://gnews.io)

## API Key

Sign up for a free API key at [gnews.io](https://gnews.io). The free tier gives you 100 requests/day — more than enough since the app caches headlines daily.

## Tech Stack

| Layer | Tool |
|-------|------|
| Frontend | Vanilla HTML + CSS + JS |
| Data | GNews API (Free tier) |
| Storage | localStorage |
| Hosting | Any static host (Netlify, Vercel, etc.) |

## Deploy

Drag the project folder to [Netlify](https://netlify.com) — get a live URL instantly.

---

© 2026 · Made with ♥
