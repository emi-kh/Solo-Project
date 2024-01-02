const express = require('express');
const router = express.Router();

const fileController = require('../controllers/fileController');

// get req file by Id or name?

// post request file upload
router.post('/upload', fileController.Upload, (req, res) => {
  return res.status(200).json({});
});

// patch request change file. Could have multiple conidtionals or different controllers for changing file name, notes section, associated tags, associated collections?

// delete req file deleted
// modelName.findByIdandDelete(req.params.id)
// then return res.json(modelName)

// Export router
module.exports = router;