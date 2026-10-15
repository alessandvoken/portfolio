# Portfolio

Live: <https://alessandroperchiazzi.com>

Next.js 16 with static export, React 19, TypeScript and Tailwind CSS 4, deployed on Vercel.

## Colour

Two text colours, both above 4.5:1 in light and dark; the lowest is muted text on a project card, 5.55:1. Light or dark follows the operating system, with no toggle. The green accent marks what you can interact with, with two exceptions: the project tags and the Experience timeline. Links inside a paragraph stay underlined, because against the text around them their colour reaches only 2.4:1 in light and 1.9:1 in dark, below the 3:1 a link needs when colour alone sets it apart.

## Running it

You need Node 22 and pnpm.

```sh
pnpm install
pnpm dev
```

The checks:

```sh
pnpm lint
pnpm exec tsc --noEmit
```
