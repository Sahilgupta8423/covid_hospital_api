const mongoose = require("mongoose");
const validator = require("validator");

// defining schema for Covid-19 Hospital bed Booking.
const hospitalSchema = new mongoose.Schema({
  hospital_name: {
    type: String,
    required: true,
    minlength: true,
  },
  hospital_email: {
    type: String,
    required: true,
    unique: [true, "Email is already registered"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is Invalid");
      }
    },
  },
  hospital_phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  hospital_address: {
    type: String,
    required: true,
    unique: true,
  },
  hospital_pincode: {
    type: Number,
    require: true,
  },
  available_beds: {
    type: Number,
    required: true,
  },
  total_patients: {
    type: Number,
    required: true,
  },
  critical_patients: {
    type: Number,
    required: true,
  },
});

// We will create a new collection

const Hospital = new mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;
