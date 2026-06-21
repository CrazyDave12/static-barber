# STATIC Barbershop

## What It Is
A premium barbershop demo website using the Aceternity UI Aurora Background component as the hero. Built as a portfolio piece to showcase to clients.

## Concept
Barbershop called "STATIC" — named for the electric, charged atmosphere of the aurora effect. Tagline: "Charged by craft." The aurora hero is the signature visual moment; everything below is minimal and dark to let it stay in memory.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS (with aurora animation + color variable plugin)
- **Components**: shadcn-style project structure (`/components/ui/`)
- **Animation**: framer-motion (scroll reveals + hero entrance)
- **Icons**: lucide-react
- **Fonts**: Bebas Neue (display/poster headings) + Inter (body)
- **Utilities**: clsx + tailwind-merge (`lib/utils.ts`)

## Design Decisions
- **Bebas Neue** instead of a luxury serif — reads like a music venue or streetwear drop. Intentional aesthetic risk for a barbershop.
- **Services as a price-list** (menu format) instead of card grid — more editorial, more distinctive
- **Palette**: `#080812` blue-black · `#6366f1` indigo · `#a5b4fc` indigo-light — pulled from the aurora's own colors
- Dark mode forced on `<html>` so aurora shows its natural blue/indigo/violet spectrum

## File Structure
```
static-barber/
├── app/
│   ├── globals.css         ← Defines --white/--black/--transparent for aurora
│   ├── layout.tsx          ← Dark mode, Bebas Neue + Inter fonts
│   └── page.tsx
├── components/
│   ├── ui/
│   │   └── aurora-background.tsx   ← Aceternity UI component (exact copy)
│   ├── Reveal.tsx          ← framer-motion whileInView wrapper
│   ├── Navbar.tsx          ← Fixed, scroll-aware, Zap icon logo
│   ├── Hero.tsx            ← Aurora + massive STATIC wordmark
│   ├── Services.tsx        ← Featured card + menu-list format
│   ├── Team.tsx            ← 4 barber cards with CSS gradient portraits
│   ├── Gallery.tsx         ← 9-image grayscale→colour grid
│   ├── Testimonials.tsx    ← 4 quote blocks in 2-col grid
│   ├── Contact.tsx         ← Info + booking form with success state
│   └── Footer.tsx
├── lib/
│   └── utils.ts            ← shadcn cn() utility
└── tailwind.config.js      ← Aurora animation + addVariablesForColors plugin
```

## To Run
```bash
cd Projects/static-barber
npm install
npm run dev
```
Open http://localhost:3000

## Links
- GitHub: (to be set up)
- Vercel: (to be deployed)
