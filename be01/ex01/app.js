/* eslint-disable no-console */
const express = require('express');
const { sequelize } = require('./models/index');

const app = express();
const port = 4242;

sequelize.sync();

app.listen(port, () => {});
