const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send(`Hello world`);
});

app.post('/scrape-data', async (req, res) => {
    const { url, checked } = req.body;

    console.log(`URL: ${url}`);
    for (const [key, value] of Object.entries(checked)) {
        console.log(`${key}: ${value}`);
    }

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const response = await axios.get(url);
        const html = response.data;
        const $ = cheerio.load(html);

        const elementsToScrape = $(`a[href$=.pdf]`);
        const scrappedElements = [];

        const allScrappedElements = elementsToScrape.map((index, element) => {
            const name = $(element).attr('href');
            console.log(name);

            // Check if the link is relative or absolute
            let absoluteUrl;
            if (name.startsWith('http')) {
                // If it's already an absolute URL, use it directly
                absoluteUrl = name;
            } else {
                // If it's a relative URL, prepend the base URL
                absoluteUrl = new URL(name, url).href;
            }

            console.log(absoluteUrl);
            scrappedElements.push(absoluteUrl);
            return absoluteUrl;
        }).get();

        const numOfScrappedElements = scrappedElements.length;
        const numOfUniqueElements = new Set(scrappedElements).size;

        const dataWithoutDuplicates = [...new Set(allScrappedElements)];

        const data = {
            url,
            checked,
            numOfScrappedElements,
            numOfUniqueElements,
            dataWithoutDuplicates
        };

        res.json(data);

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});