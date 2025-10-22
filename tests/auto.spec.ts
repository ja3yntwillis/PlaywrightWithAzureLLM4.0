import { test, expect } from "@playwright/test";
import { auto } from "../src/auto";
import { StepOptions } from "../src/types";
import { assert } from "console";
import { string } from "zod";

const apiKey = "";
const resource = "openaitestja3ynt";
const model = "gpt-4.1";

const options: StepOptions = {
  model: model,
  openaiApiKey: apiKey,
  openaiBaseUrl: `https://${resource}.openai.azure.com/openai/deployments/${model}`,
  openaiDefaultQuery: { "api-version": "2023-07-01-preview" },
  openaiDefaultHeaders: { "api-key": apiKey },
};

test("auto Playwright example", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const headerText = await auto("get the header text", { page },options);
  expect(headerText.query).toContain("Swag Labs");
  await auto(`Type standard_user in the Username text box`, { page }, options);
  await auto(`Type secret_sauce in the Password text box`, { page }, options);   
  await auto(`Click Login button`, { page }, options);   

  // `auto` can assert the state of the website
  // In this case, the result is a boolean outcome
  const searchInputHasHeaderText = await auto(
    `is the Sauce Labs Backpack displayed?`,
    { page },
    options,
  );

  expect(searchInputHasHeaderText.assertion).toBe(true);
});