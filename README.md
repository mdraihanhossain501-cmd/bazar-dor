<div align="center">

# 🛒 বাজার দর (BazarDor)

**প্রয়োজনীয় পণ্যের দাম এক নজরে।**
A Bengali-language market price tracker for everyday essentials — rice, lentils, oil, vegetables, fish, meat, eggs & milk, and spices.

[Live Demo](#-live-demo) · [Features](#-features) · [Tech Stack](#-tech-stack) · [Getting Started](#-getting-started)

</div>

---

## 🌐 Live Demo

- **Live site:**
- **GitHub:** https://github.com/mdraihanhossain501-cmd/bazar-dor

## 📖 About

BazarDor shows today's market prices for 33 daily-use products, how much each price changed since yesterday, and a market-by-market price breakdown across Bangladesh's divisions. Everything is in Bengali — digits, dates, and units included — and the interface works on mobile, tablet, and desktop.

## ✨ Features

1. **Live price ticker** — an endless scrolling strip with every product's emoji, price, unit, and ▲/▼ percentage change (red for rises, green for falls).
2. **Top movers** — the 6 biggest price rises and the 6 biggest price falls of the day, ranked by percentage.
3. **Category browsing with numeric sorting** — filter by category and sort by price (low → high / high → low) using real numeric values, not text.
4. **Protected product details** — min, max, and average price plus a full market-wise price table, visible only to logged-in users.
5. **Authentication with Better Auth** — email & password, Google, and GitHub sign-in, with a user menu in the header.
6. **Profile management** — a profile page and a separate update page that changes the user's name with Better Auth's `updateUser()`.
7. **Full Bengali experience** — Bengali numerals (`১,৮৫০ টাকা`), a live Bengali date, and Bengali units (`প্রতি কেজি`).
8. **Polished UX** — skeleton loaders, toast notifications for auth and protected-route redirects, a custom 404 page, and a friendly error page.
9. **Reliable data** — the app falls back to two backup APIs if the main one is unavailable.
10. **Fully responsive** — layouts adapt from small phones to wide desktops.

## 🧰 Tech Stack

| Purpose | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Authentication | [Better Auth](https://better-auth.com) (email/password, Google, GitHub) |
| Database | MongoDB |
| Notifications | react-hot-toast |
| Icons | lucide-react |
| Font | Hind Siliguri |
| Deployment | Vercel |

## 🗺️ Routes

| Route | Description | Access |
| --- | --- | --- |
| `/` | Hero, top risers/fallers, all products | Public |
| `/category/[slug]` | Products in one category with sorting | Public |
| `/product/[slug]` | Price summary and market-wise prices | 🔒 Logged in |
| `/signin` | Sign in | Public |
| `/signup` | Create an account | Public |
| `/profile` | View your profile | 🔒 Logged in |
| `/profile/update` | Update your name | 🔒 Logged in |

## 🚀 Getting Started

### 1. Clone and install

```bash
git clone https://github.com/mdraihanhossain501-cmd/bazar-dor.git
cd bazar-dor
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
BETTER_AUTH_SECRET=a_long_random_secret
BETTER_AUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

For social login, register OAuth apps and use these callback URLs:

- Google: `http://localhost:3000/api/auth/callback/google`
- GitHub: `http://localhost:3000/api/auth/callback/github`

### 3. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production build

```bash
npm run build
npm start
```

## 🔌 API

Data comes from the Programming Hero BazarDor API:

- `GET /products` — all products
- `GET /products?category=chal` — products in a category
- `GET /categories` — all categories

Main: `https://openapi.programming-hero.com/api/bazardor`
Backups: `https://api.api-store.workers.dev/api/bazardor` and `https://api.abcz.workers.dev/api/bazardor`

## 📁 Project Structure

```text
src/
├── app/
│   ├── (home)/            # Home page + loading skeleton
│   ├── category/[slug]/   # Category page
│   ├── product/[slug]/    # Product details (protected)
│   ├── profile/           # Profile + update pages (protected)
│   ├── signin/ signup/    # Auth pages
│   └── api/auth/          # Better Auth route handler
├── components/            # Header, ticker, hero, cards, forms, skeletons
├── lib/                   # API, auth, MongoDB, Bengali formatting helpers
└── types/                 # TypeScript types
```

## 👤 Author

Made by **Raihan** — [@mdraihanhossain501-cmd](https://github.com/mdraihanhossain501-cmd)

_Built as part of the Programming Hero Web Development course (assignment B14-A7)._