// mongostore
const mongoose = require("mongoose");

// connect to mongoDB
mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://stunggal:stgl@stunggal.d5qrgo3.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

// create a schema for the db
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// create a model for the db
const User = mongoose.model("User", userSchema);

// insert a document into the db
const user = new User({
  name: "adsddf",
  email: "asdhethrthasdasd",
  password: "stuwe3twq3nggal",
});

// // save the document into the db
// user.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

module.exports = User;
