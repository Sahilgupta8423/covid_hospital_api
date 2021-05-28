const mongoose = require("mongoose");

mongoose // This will return a Promise.
  .connect("mongodb://localhost:27017/covid-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch((err) => {
    console.log(err);
  });

