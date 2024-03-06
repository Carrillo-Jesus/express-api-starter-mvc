const express = require('express');
const config = require('@/config');
const blogs = require('@/routes/blogs/blogs');

const app = express();

app.use(express.json());
app.set('port', config.app.port);

app.use('/api/blogs', blogs);

module.exports = app;