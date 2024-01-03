const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://emi-kh:SBM4qh9ixbeOn8Yt@main.58wjzdd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, {
  // options for the connect method to parse the URI
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'NoteNestDB'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));
  
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  files: [],
  tags: [],
  collections: []
});
const User = mongoose.model('user', userSchema);

// files schema- add thumb nail photo file, background color for css? spotify api in notes section?
const fileSchema = new Schema({
  fileName: {type: String, required: true},
  // userId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'user'
  // },
  // tags: [],
  // nests: [],
  notes: String,
  upload_date: {
    type: String,
    default: Date.now()
  },
  // type: String,
  // path: {type: String, required: true},
});

const File = mongoose.model('file', fileSchema);

// tags schema
const tagSchema = new Schema({
  name: {type: String, required: true},
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  files: [
    {fileId: {
      type: Schema.Types.ObjectId,
      ref: 'file'
    }}
  ]
});
const Tag = mongoose.model('tag', tagSchema);

// collections schema
const nestSchema = new Schema({
  name: {type: String, required: true}, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
});

const Nest = mongoose.model('nest', nestSchema);

// export modules to be used in routes/controllers
module.exports = {
  User,
  File,
  Tag,
  Nest
};

