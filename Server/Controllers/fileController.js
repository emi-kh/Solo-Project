const models = require('../models/dataModel');

const fileController = {};

// get middleware: 
// get all files
// get specific file and all associated tags, notes

// post middleware:
// create new file- name, thumbnail photo, userID, path, tags, collections, uploadDate, type?, notes text? background color (css)? 
fileController.Upload = (req, res, next) => {
//   const {fileName, tags, nests, notes} = req.body;
  const {fileName, notes} = req.body;

  models.File.create({
    fileName, notes
  })
    .then(fileDoc => {
      res.locals.file = fileDoc;
      next();
    })
    .catch(err => {
      const errObj = {
        log: 'Error occurred in fileController.Upload middleware',
        message: {err: `Error in fileController.Upload: ${err}`}
      };
      next(errObj);
    });
};


// patch middleware:
// change name, change notes text, thumbnail photo, change color


// delete middleware:
// delete tag from database and all associated files and collections
// middleware for if tag deletes file?
// if collection deletes file?

// Export controller
module.exports = fileController;