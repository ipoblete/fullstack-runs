const express = require('express');
const app = express();
const connection = require('./middleware/connection');
const notFound = require('./middleware/notFound');
const { handler } = require('./middleware/error');

app.use(express.json());

app.use('/ipsums', connection, require('./routes/ipsums'));

app.use(notFound);
app.use(handler);

module.exports = app;
