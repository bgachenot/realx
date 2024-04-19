const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(
    {
        executablePath: '/usr/bin/chromium',
        headless: "new",
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
 
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({ path: 'google.png' });

  console.log('The title of this blog post is "%s".', await page.title());
  await browser.close();
})();