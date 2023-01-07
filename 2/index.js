const puppeteer = require('puppeteer')
const fs = require('fs')
const { title } = require('process')

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto('https://reactanime-app.netlify.app/')

    // await page.screenshot({path: 'example.png', fullPage: true})
    // await page.pdf({path: 'example.png', fullPage: true})

    // const html = await page.content()

    // const title = await page.evaluate(() => document.title);

    // const text = await page.evaluate(() => document.body.innerText)

    // const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'),(e) => e.href))

//     const courses = await page.$$eval('._card_1h66y_1', (elements) =>
//     elements.map((e) => {
//         e
//     })
//   );

//    Get courses
  const courses = await page.evaluate(() =>
    Array.from(document.querySelectorAll('._card_1h66y_1'), (e) => ({
      title: e
    }))
  );

  console.log(courses);

  // Save data to JSON file
  fs.writeFile('courses.json', JSON.stringify(courses), (err) => {
    if (err) throw err;
    console.log('File saved');
  });


    await browser.close()
}

run()