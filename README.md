# MyPortfolio2

MyPortfolio2 is a cinematic portfolio experience built to showcase creative development work through motion, visual storytelling, and polished front-end execution. The site combines a scroll-driven canvas sequence with layered content transitions and a featured project grid.

## Overview

This project is designed as a modern personal portfolio with a premium, interactive feel. It uses the Next.js App Router for structure, Tailwind CSS for styling, and Framer Motion for animation and scroll-based transitions.

## Highlights

- Scroll-synced hero sequence rendered on an HTML canvas
- Layered narrative overlay for an editorial-style intro
- Responsive project showcase with motion-driven interactions
- Built with TypeScript and organized using the Next.js App Router
- Lightweight static asset workflow through the `public/sequence` frame set

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis

## Local Development

### Prerequisites

- Node.js 18.17 or newer
- npm

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

- `npm run dev` starts the local development server
- `npm run build` creates an optimized production build
- `npm run start` serves the production build locally
- `npm run lint` checks the codebase with Next.js linting

## Project Structure

```text
.
|-- public/
|   `-- sequence/        Scroll-sequence image frames
|-- src/
|   |-- app/             App Router entry files and global styles
|   `-- components/      Motion, canvas, and UI components
|-- package.json
`-- tailwind.config.ts
```

## Deployment

The project is ready to deploy on Vercel.

1. Import [ritikpatell/MyPortfolio2](https://github.com/ritikpatell/MyPortfolio2) into Vercel
2. Keep the default Next.js build settings
3. Deploy the project

## Notes

- The canvas sequence depends on the image frames in `public/sequence`
- The smooth-scrolling and animation behavior are tuned for a portfolio-style presentation
- If you customize the intro sequence, keep the frame count and asset naming in sync with the canvas component

## Repository

- GitHub: [ritikpatell/MyPortfolio2](https://github.com/ritikpatell/MyPortfolio2)
