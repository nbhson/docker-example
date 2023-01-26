require('dotenv').config(); // đọc các thông tin nhạy cảm được giấu trong .env

const express = require('express');
const path = require('path');
const route = require('./router/router');
const db = require('./config/db');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

db.connect();

/** Use */
app.use(express.static(path.join(__dirname, '/public'))); // set public folder cho những file tĩnh
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // middleware xử lí cho req POST - qua html form
app.use(express.json({ limit: '50mb' })); // qua XMLHttpRequest, fetch, axios, ajax,... - qua thư viện khác
app.use(methodOverride('_method'));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  next();
});

/** Router */
route(app);

/** Start Server */
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
