require('reflect-metadata');
require('zone.js/dist/zone-node');

const express = require('express');
const path = require('path');
const {ngExpressEngine} = require('@nguniversal/express-engine');

const distFolder = path.join(process.cwd(), 'dist', 'ssr-app');

const {AppServerModuleNgFactory} = require('./dist/ssr-app-server/main');

const app = express();

app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder));

app.get('*', (req, res) => {
  res.render('index', {req});
});


app.listen(4000, () => {
});
