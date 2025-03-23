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

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});