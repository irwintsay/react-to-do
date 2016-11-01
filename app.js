const express         = require('express');
const logger          = require('morgan');

const app             = express();
const port            = process.env.PORT || 8000;


app.use(logger('dev'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, (res, req) => {
  console.log('Listening Port: ', port);
});