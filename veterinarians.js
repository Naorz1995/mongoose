const mongoose = require("mongoose");
const veterinarians = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: Number
});
module.exports = mongoose.model("veterinarians", veterinarians);