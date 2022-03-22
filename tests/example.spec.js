const { test, expect } = require('@playwright/test');

test('example test', async({page}) => {
  await page.goto('http://localhost:8000/index.html');

  await page.setViewportSize({
    width: 500,
    height: 500,
  });

  expect(await page.screenshot()).toMatchSnapshot('tested.png');
});