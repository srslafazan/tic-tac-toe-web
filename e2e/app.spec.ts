import { test, type Page } from "@playwright/test";

import { cellsAreEmpty, selectOpponent, moveAndVerify } from "./utils";

test.beforeEach(async ({ page }: { page: Page }): Promise<void> => {
  await page.goto("/");
  page.waitForURL("/");
});

test("default state", async ({ page }: { page: Page }): Promise<void> => {
  await cellsAreEmpty(page);
});

test("human can play human", async ({
  page,
}: {
  page: Page;
}): Promise<void> => {
  await selectOpponent(page, 0, "Human");
  await moveAndVerify(page, 0, "X", "O's turn");
  await moveAndVerify(page, 2, "O", "X's turn");
  await moveAndVerify(page, 3, "X", "O's turn");
  await moveAndVerify(page, 4, "O", "X's turn");
  await moveAndVerify(page, 6, "X", "X wins!");
});

test.skip("human can play random computer", async ({
  page,
}: {
  page: Page;
}): Promise<void> => {});
test.skip("human can play minimax computer", async ({
  page,
}: {
  page: Page;
}): Promise<void> => {});
test.skip("random computer can play random computer", async ({
  page,
}: {
  page: Page;
}): Promise<void> => {});
test.skip("random computer can play minimax computer", async ({
  page,
}: {
  page: Page;
}): Promise<void> => {});
test.skip("minimax computer can play minimax computer", async ({
  page,
}: {
  page: Page;
}): Promise<void> => {});
