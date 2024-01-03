const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const fetch = require('node-fetch');
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');
const fileRoutes = require('./routes/fileRoutes');
const tagRoutes = require('./routes/tagRoutes');
const nestRoutes = require('./routes/nestRoutes');


app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors()); // stops cors errors from coming through


//end point to statically serve page
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../build')));
} else {
  app.use(express.static(path.resolve(__dirname, '../client')));
}

//statically serve homepage
app.use('/homepage', (req, res) => {
  // return res.sendFile(path.resolve(__dirname, '../client/pages/homepage.jsx'));
  return res.redirect('http://localhost:3000/client/pages/homepage');
  // return express.static(path.resolve(__dirname, '../client/pages/homepage.jsx'));
});


// Routes
app.use('/api/users', userRoutes);
app.use('/api/file', fileRoutes);
app.use('/api/tag', tagRoutes);
app.use('/api/nest', nestRoutes);


// Catch-all route handler
app.use((req, res) => res.status(404).send('404: Page not found'));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler caught unknown error in middleware',
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
