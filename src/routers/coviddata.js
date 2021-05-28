const express = require("express");
// 1. create a new router
const router = new express.Router();
const Hospital = require("../models/covid");

// 2. we need to define the router
router.get("/sahil", (req, res) => {
  res.send("Hello guys");
});

// Using Promises
// app.post("/students", (req, res) => {
//   console.log(req.body);
//   const user = new Student(req.body);
//   user
//     .save()
//     .then(() => {
//       // save method will return a promise
//       res.status(201).send(user);
//     })
//     .catch((err) => {
//       res.status(400).send(err);
//     });
// });

// Using Async Await
router.post("/hospitals", async (req, res) => {
  try {
    const hospital = new Hospital(req.body);
    const createHospital = await hospital.save();
    res.status(201).send(createHospital);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Read the data of registered hospitals

router.get("/hospitals/:id", async (req, res) => {
  try {
    const _id = req.params.id;

    const hospitalData = await Hospital.findById(_id);
    if (!hospitalData) {
      return res.status(404).send();
    } else {
      res.status(200).send(hospitalData);
    }
  } catch (error) {
    console.log(error);
  }
});
router.get("/hospitals/:hospitalname", async (req, res) => {
  try {
    const hospital_name = req.params.hospitalname;
    
    const hospitalData = await Hospital.find(hospital_name);
    if (!hospitalData) {
      return res.status(404).send();
    } else {
      res.status(200).send(hospitalData);
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/hospitals", async (req, res) => {
  try {
    const hospitalsData = await Hospital.find();
    res.send(hospitalsData);
  } catch (error) {
    console.log(error);
  }
});

// delete the hospitals

router.delete("/hospitals/:id", async (req, res) => {
  try {
    const deleteHospital = await Hospital.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      res.status(400).send();
    } else {
      res.status(200).send(deleteHospital);
    }
  } catch (error) {}
});

// update the hospitals by Id

router.patch("/hospitals/:id", async (req, res) => {
  try {
    const updatedHospital = await Hospital.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!req.params.id) {
      res.status(404).send();
    } else {
      res.status(200).send(updatedHospital);
    }
  } catch (error) {}
});

module.exports = router;
