const mongoose = require("mongoose");
const { updateOne } = require("./owners");
const owners = require("./owners");
const pets = require("./pets");
const veterinarians = require("./veterinarians");
try {
  mongoose.connect("mongodb://localhost:27017/petsandowners");
  console.log("conected");
  console.log("naorrr");
} catch (e) {
  console.log(e);
}
//createOwners
async function createOwners() {
  const newOwners = new owners({
    ownerFirstName: "david",
    ownerLastName: "edri",
    email: "david1234@gmail.com",
    age: "26",
    idOfVet: "62b038d9955823cbbcb26a45",
    idOfPets: [
      "62b03609c2aced959fff8400",
      "62b037d764902b1f5eb458d5",
      "62b0385bdb1a158fdb0b167b",
    ],
  });
  await newOwners.save();
  console.log(newOwners);
};
// createOwners();



//createPet
async function createPet(){
const newPet = new pets({
  name: "simba",
  FavoriteDish: "chicken",
  age: "5",
});
await newPet.save();
console.log(newPet);
};
//  createPet();



createVeterinarian
async function createVeterinarian(){
  const newVeterinarian = new veterinarians({
    firstName: "shimi",
    lastName: "lahav",
    phoneNumber: "0538567080",
  });
await newVeterinarian.save();
console.log(newVeterinarian);
};
// createVeterinarian();



async function findOwner(owner) {
  const OwnerToDisplay = await owners.find(owner);
  console.log(OwnerToDisplay);
}
findOwner({ ownerFirstName: "david" });

async function displayById (id){
idToDisplay = await veterinarians.findById(id);
console.log(idToDisplay);
};
displayById("62b038d9955823cbbcb26a45");



async function findPets() {
  const listId = await owners
    .where("ownerFirstName")
    .equals("naor")
    .select("idOfPets");
  console.log(listId);
  
}
findPets();

async function findVets() {
  const listId = await owners
    .where("ownerFirstName")
    .equals("naor")
    .select("idOfVet");
  console.log(listId);
};
findVets()
