import { test, expect, type Page } from "@playwright/test";

import {
  getOpponentType,
  cellsAreEmpty,
  selectOpponent,
  moveAndVerify,
} from "./utils";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("default state", async ({ page }) => {
  cellsAreEmpty(page);
  expect(getOpponentType(page)).toHaveText("Random");
});

test("human can play human", async ({ page }) => {
  await selectOpponent(page, 0, "Human");
  await moveAndVerify(page, 0, "X", "O's turn");
  await moveAndVerify(page, 2, "O", "X's turn");
  await moveAndVerify(page, 3, "X", "O's turn");
  await moveAndVerify(page, 4, "O", "X's turn");
  await moveAndVerify(page, 6, "X", "X wins!");
});

test.skip("human can play random computer", async ({ page }) => {});
test.skip("human can play minimax computer", async ({ page }) => {});
test.skip("random computer can play random computer", async ({ page }) => {});
test.skip("random computer can play minimax computer", async ({ page }) => {});
test.skip("minimax computer can play minimax computer", async ({ page }) => {});
