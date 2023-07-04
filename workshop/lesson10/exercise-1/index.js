'use strict';

const fs = require('fs');
const url = require('url');
const http = require('http');
const path = require('path');
const replaceTemplate = require('./modules/replaceTemplate');

const tempOverview = fs.readFileSync(
  path.join(__dirname, 'template-overview.html'),
  'utf8'
);
const tempProduct = fs.readFileSync(
  path.join(__dirname, 'template-product.html'),
  'utf8'
);
const tempCard = fs.readFileSync(
  path.join(__dirname, 'template-card.html'),
  'utf8'
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
    const { query, pathname : pathName } = url.parse(req.url, true);  
    if (pathName === '/' || pathName === '/overview') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const cardsHtml = dataObject
      .map(el => replaceTemplate(tempCard, el))
      .join('');
    const outputHtml = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
    res.end(outputHtml);
  } else if (pathName === '/product') {
    res.writeHead(200, {
      'Content-Type': 'text/html',
    });
    const product = dataObject[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});