# Tic Tac Toe - Web Client

A web client for Tic Tac Toe.

[Try the live demo](https://tic-tac-toe-web.onrender.com)

[![Tests](https://github.com/srslafazan/tic-tac-toe-web/actions/workflows/tests.yml/badge.svg)](https://github.com/srslafazan/tic-tac-toe-web/actions/workflows/tests.yml)

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<p align="center">
  <img src="https://github.com/srslafazan/tic-tac-toe-web/assets/11346004/e3938350-abcc-4e2e-b352-8d7627531093" align="left">
  <img src="https://github.com/srslafazan/tic-tac-toe-web/assets/11346004/f19e745a-4764-49ed-b151-c12072a365b3">
  <img src="https://github.com/srslafazan/tic-tac-toe-web/assets/11346004/ded6f46b-adde-4275-84ee-600fff89a95d">
</p>

## Requirements

- Node 18.16.1

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
