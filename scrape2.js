const request = require('request');
const cheerio = require('cheerio');

request('https://hssm93.tistory.com/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html, {
            normalizeWhitespace: false,
            xmlMode: false,
            decodeEntities: false
        });
        $('.article_content').each((i, el) => {
            const title = $(el).find('.title_post').text().replace(/\s\s+/g, '');
            const link = $(el).find('a').attr('href');
            const date = $(el).find('.date').text().replace(/,/, ' ');
            // console.log(title);
            console.log(title, link, date);
        })
    }
});