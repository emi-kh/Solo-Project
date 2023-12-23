const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const fetch = require('node-fetch');
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');
const tagRoutes = require('./routes/tagRoutes');
const nestRoutes = require('./routes/nestRoutes');

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// serve correct MIME type for styles.css
// app.use('/styles.css', (req, res) => {
//   res.type('text/css');
// });

// app.get('/styles.css', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, './client/styles.css'));
// });

//end point to statically serve page
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../build')));
} else {
  app.use(express.static(path.resolve(__dirname, '../client')));
}



// Routes
app.use('/users', userRoutes);
app.use('/file', fileRoutes);
app.use('/tag', tagRoutes);
app.use('/nest', nestRoutes);


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
