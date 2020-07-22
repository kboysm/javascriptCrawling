const request = require('request');
const cheerio = require('cheerio');

request('https://www.naver.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html, {
            normalizeWhitespace: false,
            xmlMode: false,
            decodeEntities: false
        }); //html 뒤에 해당 옵션을 추가해 주지 않으면 디코드 되지 않는다고 함
        // const siteHeading = $('h3.title');
        // console.log(siteHeading.text())
        // console.log(siteHeading.html())
        // const output = siteHeading.find('h1').text();
        // const output = siteHeading.children('h1').text();
        // const output = siteHeading.children('h1').next().text();
        // const output = siteHeading.children('h1').parent().text();
        // console.log(output);

        // $('.nav_item a').each((i, el) => {
        //     const item = $(el).text();
        //     const link = $(el).attr('href');
        //     // console.log(item);
        //     console.log(link);
        // })
    }
});