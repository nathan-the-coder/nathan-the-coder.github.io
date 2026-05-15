# Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Stack

- [Vite](https://vite.dev/) — dev server & build tool
- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) (Base UI) — component primitives
- [Font Awesome](https://fontawesome.com/) — icon library (brands, solid, regular)
- [Fontsource](https://fontsource.org/) — self-hosted fonts (Inter Variable, JetBrains Mono Variable)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, etc.
│   ├── sections/      # Hero, Skills, Projects, Contact, Footer
│   └── ui/            # shadcn components (button, card, badge, etc.)
├── lib/
│   └── utils.ts       # cn() utility
├── App.tsx            # section composition
├── index.css          # Tailwind v4, theme vars, fonts
└── main.tsx           # FontAwesome library init + app mount
```

## Customizing

- **Colors** — edit CSS variables in `src/index.css` (`:root` for light, `.dark` for dark)
- **Sections** — add/remove/reorder in `src/App.tsx`
- **Content** — each section component in `src/components/sections/` has its own data inline

## Deploy

Build produces static files in `dist/`. Deploy to any static host (GitHub Pages, Vercel, Netlify, etc.).
