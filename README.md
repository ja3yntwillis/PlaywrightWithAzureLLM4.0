# Auto Playwright

Run Playwright tests using AI.

## Setup

1. Install `auto-playwright` dependency:

```bash
npm install auto-playwright -D
```

## Usage

At minimum, the `auto` function requires a _plain text prompt_ and an _argument_ that contains your `page` and `test` (optional) objects.

```ts
auto("<your prompt>", { page, test },setupoptions);
```


## Supported Browsers

Every browser that Playwright supports.


## Supported Actions & Return Values

Depending on the `type` of action (inferred by the `auto` function), there are different behaviors and return types.

### Action

An action (e.g. "click") is some simulated user interaction with the page, e.g. a click on a link. Actions will return `undefined`` if they were successful and will throw an error if they failed, e.g.

```ts
try {
  await auto("click the link", { page, test });
} catch (e) {
  console.error("failed to click the link");
}
```

### Query

A query will return requested data from the page as a string, e.g.

```ts
const linkText = await auto("Get the text of the first link", { page, test });

console.log("The link text is", linkText);
```

### Assert

An assertion is a question that will return `true` or `false`, e.g.

```ts
const thereAreThreeLinks = await auto("Are there 3 links on the page?", {
  page,
  test,
});

console.log(`"There are 3 links" is a ${thereAreThreeLinks} statement`);
```


## Supported Playwright Actions

- `locator.blur`
- `locator.boundingBox`
- `locator.check`
- `locator.clear`
- `locator.click`
- `locator.count`
- `locator.fill`
- `locator.getAttribute`
- `locator.innerHTML`
- `locator.innerText`
- `locator.inputValue`
- `locator.isChecked`
- `locator.isEditable`
- `locator.isEnabled`
- `locator.isVisible`
- `locator.pressKey`
- `locator.selectOption`
- `locator.textContent`
- `locator.uncheck`
- `page.goto`
- `page.keyboard.press`



</details>
