require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const { PORT, HOST, MONGODBURL } = process.env;
const homeRouter = require('./routers/homeRouter');
const AdminRouter = require('./routers/AdminRouter');

app.use(express.json());

app.use('/', homeRouter);
app.use('/admin', AdminRouter);

mongoose.connect(MONGODBURL, {}, (error) => {
  if (error) return console.log(error);

  app.listen(PORT, HOST, () => {
    console.log(`server started in port: ${PORT}`);
  });
});
