const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  try {
    console.log("Opening page...");

    await page.goto(
      'http://citywisedetails.epizy.com/mailbday/bday.php',
      {
        waitUntil: 'networkidle',
        timeout: 60000
      }
    );

    console.log("Final URL:", page.url());
    console.log("Page title:", await page.title());

    const content = await page.textContent('body');

    console.log("Page response:");
    console.log(content);

    if (content.includes("This site requires Javascript")) {
      throw new Error("InfinityFree bot protection page detected");
    }

    console.log("Birthday script triggered successfully");

  } catch (err) {
    console.error("Error:", err.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
