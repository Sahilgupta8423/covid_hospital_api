const express = require("express");
require("./db/conn");
const Hospital = require("./models/covid");
const HospitalRouter = require("./routers/coviddata");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// 3. we need to register our router
app.use(HospitalRouter);
// create a new Students
// app.get('/', (req, res) => {
//     res.send('hello from other side By Sahil Gupta');
// })

app.listen(port, () => {
  console.log(`listening at port no ${port}`);
});
