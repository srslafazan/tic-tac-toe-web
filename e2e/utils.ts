import { expect, Page, Locator } from "@playwright/test";

export const sleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getOpponentType = (page: Page): Locator =>
  page.getByTestId("opponent").locator("span").last();

export const cellsAreEmpty = async (page: Page): Promise<any> => {
  const cells = page.getByTestId("cell");
  sleep(1000);
  return await Promise.all([
    expect(cells.nth(0)).toBeEmpty(),
    expect(cells.nth(1)).toBeEmpty(),
    expect(cells.nth(2)).toBeEmpty(),
    expect(cells.nth(3)).toBeEmpty(),
    expect(cells.nth(4)).toBeEmpty(),
    expect(cells.nth(5)).toBeEmpty(),
    expect(cells.nth(6)).toBeEmpty(),
    expect(cells.nth(7)).toBeEmpty(),
    expect(cells.nth(8)).toBeEmpty(),
  ]);
};

export const selectOpponent = async (
  page: Page,
  index: number,
  type: string
): Promise<void> => {
  const opponentSelect = await page.getByTestId("opponent-select");
  const button = await opponentSelect
    .locator("li")
    .nth(index)
    .locator("button");
  await button.click();
  expect(getOpponentType(page)).toHaveText(type);
};

export const moveAndVerify = async (
  page: Page,
  index: number,
  player: string,
  expectedIndicator: string
): Promise<void> => {
  const cells = await page.getByTestId("cell");
  const gameStatusIndicator = await page.getByTestId("game-status-indicator");
  expect(gameStatusIndicator).toHaveText(`${player}'s turn`);
  await cells.nth(index).click();
  await sleep(1000);
  await expect(await cells.nth(index).textContent()).toBe(player);
  await expect(gameStatusIndicator).toHaveText(expectedIndicator);
};
