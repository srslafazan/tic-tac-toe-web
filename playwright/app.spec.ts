import { test, expect } from "@playwright/test";
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
  page.goto("/");
  // selectOpponent(page, 0, "Human");
  const opponentSelect = page.getByTestId("opponent-select");
  expect(opponentSelect).toBeVisible();
  const li = await opponentSelect.locator("li").nth(index);
  await li.locator("button").click();
  // expect(getOpponentType(page)).toHaveText(type);
  moveAndVerify(page, 0, "X", "O's turn");
  moveAndVerify(page, 1, "O", "X's turn");
  moveAndVerify(page, 3, "X", "O's turn");
  moveAndVerify(page, 4, "O", "X's turn");
  moveAndVerify(page, 6, "X", "X' wins!");
});
