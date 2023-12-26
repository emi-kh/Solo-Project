const express = require('express');
const router = express.Router();

const fileController = require('../controllers/fileController');

// get req file by Id or name?

// post request file upload

// patch request change file. Could have multiple conidtionals or different controllers for changing file name, notes section, associated tags, associated collections?

// delete req file deleted
// modelName.findByIdandDelete(req.params.id)
// then return res.json(modelName)

// Export router
module.exports = router;