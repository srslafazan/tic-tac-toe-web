# Tic Tac Toe - Web Client

A web client for Tic Tac Toe.

[Try the live demo](https://tic-tac-toe-web.onrender.com)

[![Tests](https://github.com/srslafazan/tic-tac-toe-web/actions/workflows/tests.yml/badge.svg)](https://github.com/srslafazan/tic-tac-toe-web/actions/workflows/tests.yml)

<p align="center">
  <img src="https://github.com/srslafazan/tic-tac-toe-web/assets/11346004/7b7d635e-13da-43e1-aa94-16084eefbe79" align="left">
  <img src="https://github.com/srslafazan/tic-tac-toe-web/assets/11346004/e041eb29-d824-4741-8aca-b552aae6d4bb">
  <img src="https://github.com/srslafazan/tic-tac-toe-web/assets/11346004/6088e84d-6e39-4dbe-8ef3-136b5fc79d14">
</p>

> This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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
