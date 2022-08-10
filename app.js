// this app for api testing
// start with express
const express = require("express");
const app = express();

// db connection
const db = require("./db");

// set port number
const port = process.env.PORT || 3000;

// convert sting db to json
// const json = JSON.stringify(db);
// console.log(json);

// make route for index
app.get("/", (req, res) => {
  res.send("Hello World");
});

// make get index api route
app.get("/api/users", (req, res) => {
  db.find({}, (err, users) => {
    if (err) {
      res.send(err);
    } else {
      res.json(users);
    }
  });
});

// listen to port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
