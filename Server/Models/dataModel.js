const mongoose = require("mongoose");

const mongoURI = "string for uri connection here";

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: "tagDatabase"
})
  .then(() => console.log("Connected to Mongo DB."))
  .catch(err => console.log(err));
  
const Schema = mongoose.Schema;

// user schema
const userSchema = new Schema({
  _id: ObjectId("user_id"),
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  files: [],
  tags: [],
  collections: []
});
const User = mongoose.model("user", userSchema);

// files schema
const fileSchema = new Schema({
  _id: ObjectId("user_id"),
  filename: {type: String, required: true},
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  tags: [],
  collections: [],
  upload_date: Number,
  type: String,
  path: {type: String, required: true},
});

const File = mongoose.model("file", fileSchema);

// tags schema
const tagSchema = new Schema({
  _id: ObjectId("user_id"),
  name: {type: String, required: true},
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  files: [
    {fileId: {
      type: Schema.Types.ObjectId,
      ref: "file"
    }}
  ]
});
const Tag = mongoose.model("tag", tagSchema);

// collections schema
const collectionSchema = new Schema({
  _id: ObjectId("user_id"),
  name: {type: String, required: true}, 
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
});

const Collection = mongoose.model("collection", collectionSchema);

// export modules to be used in routes/controllers
module.exports = {
  User,
  File,
  Tag,
  Collection
};
