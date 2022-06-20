const mongoose = require("mongoose");


const owners = new mongoose.Schema({
  ownerFirstName: { type: String, required: true },
  ownerLastName: String,
  email: { type: String, lowercase: true },
  age: { type: Number, min: 1, max: 99 },
  idOfVet: mongoose.SchemaTypes.ObjectId,
  idOfPets: [mongoose.SchemaTypes.ObjectId]
});
module.exports = mongoose.model("owners", owners);
