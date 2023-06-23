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
  selectOpponent(page, 0, "Human");
  moveAndVerify(page, 0, "X", "O's turn");
  moveAndVerify(page, 1, "O", "X's turn");
  moveAndVerify(page, 3, "X", "O's turn");
  moveAndVerify(page, 4, "O", "X's turn");
  moveAndVerify(page, 6, "X", "X' wins!");
});
