# Tic Tac Toe - Web Client

A web client for Tic Tac Toe.

[![Tests](https://github.com/srslafazan/tic-tac-toe-web/actions/workflows/tests.yml/badge.svg)](https://github.com/srslafazan/tic-tac-toe-web/actions/workflows/tests.yml)

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Requirements

- Node 20.3.1

> This project is configured to run on osx.

## Getting Started

This project uses:

-  `pnpm` (package manager)
-  `next` (framework)
-  `jest` (unit testing)
-  `playwright` (e2e testing)

### Run

To run the development server:

```bash
pnpm dev
```

The project runs on [http://localhost:3000](http://localhost:3000) by default.


## Tests (development)

```bash
pnpm test:unit:watch
```

```bash
pnpm exec playwright test --ui
```

## Build

```bash
pnpm build
```
