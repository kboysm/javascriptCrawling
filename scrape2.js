const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs')
const writeStream = fs.createWriteStream('post.csv');



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
            // console.log(title, link, date);

            // Write To CSV
            writeStream.write(`${title}, ${link}, ${date} \n`); //여기서는 파일로 만들었지만 실제 프로젝트에서는 DB에 넣을거 같음
        });
        console.log('Scraping Done...');
    }
});