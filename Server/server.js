const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const fetch = require('node-fetch');
const PORT = 3000;

const userRoutes = require('./Routes/userRoutes');
const fileRoutes = require('./Routes/fileRoutes');
const tagRoutes = require('./Routes/tagRoutes');
const collectRoutes = require('./Routes/collectRoutes');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//end point to statically serve page
// app.use(express.static(path.resolve(__dirname, '../Client/index.js')));
app.use(express.static(path.resolve(__dirname, '../build')));


// Routes
app.use('/users', userRoutes);
app.use('/file', fileRoutes);
app.use('/tag', tagRoutes);
app.use('/collect', collectRoutes);


// Catch-all route handler
app.use((req, res) => res.status(404).send('404: Page not found'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express global error handler caught unknown error in middleware',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log('Global Error: ', errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
  
module.exports = app;
