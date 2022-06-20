const mongoose = require("mongoose");
const pets = new mongoose.Schema({
  name: { type: String, required: true },
  FavoriteDish: String,
  age: { type: Number, min: 1, max: 99 }
});
module.exports = mongoose.model("pets", pets);