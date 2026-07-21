const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });

  const page = await browser.newPage();

  try {
    await page.goto(
      'http://citywisedetails.epizy.com/mailbday/bday.php',
      {
        waitUntil: 'networkidle',
        timeout: 60000
      }
    );

    console.log('Page title:', await page.title());
    console.log('Triggered successfully');
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
