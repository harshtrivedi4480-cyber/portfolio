const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });

  await page.goto("https://live-weather-observatory-f1fopjru3.vercel.app/", {
    waitUntil: "networkidle"
  });

  await page.waitForTimeout(3000);

  const weatherText = page.getByText("Broken Clouds").first();

  const card = weatherText.locator("xpath=ancestor::*[self::div][.//text()[contains(., 'Udaipur')]][1]");

  await card.screenshot({
    path: "src/assets/project-weather.png"
  });

  await browser.close();

  console.log("Weather screenshot created successfully!");
})();
