import mongoose from "mongoose";

// lostPet Form Data Schema
const lostPetSchema = mongoose.Schema({
  petName: { type: String, required: true },
  animalType: { type: String, required: true },
  age: String,
  colors: { type: String, required: true },
  gender: { type: String, required: true },
  ownerName: { type: String, required: true },
  contactPhone: { type: String, required: true },
  contactEmail: String,
  lastSeenLocation: { type: String, required: true },
  lostDate: { type: String, required: true },
  description: { type: String, required: true },
  petPicture: { type: String, required: true },
});

// foundPet Form Data Schema
const foundPetSchema = mongoose.Schema({
  animalType: { type: String, required: true },
  breed: String,
  colors: { type: String, required: true },
  gender: { type: String, required: true },
  founderName: { type: String, required: true },
  contactPhone: { type: String, required: true },
  contactEmail: String,
  foundLocation: { type: String, required: true },
  foundDate: { type: String, required: true },
  description: { type: String, required: true },
  petPicture: { type: String, required: true },
});

// Adoption Post Form Data Schema
const adoptionSchema = mongoose.Schema({
  animalCode: { type: String, required: true },
  animalType: { type: String, required: true },
  adopterName: { type: String, required: true },
  contactPhone: { type: String, required: true },
  contactEmail: String,
  address: { type: String, required: true },
  experience: { type: String, required: false },
});

// Training Application Form Data Schema
const trainingSchema = mongoose.Schema({
  name: { type: String, required: true },
  contactEmail: String,
  contactPhone: { type: Number, required: true },
  address: { type: String, required: true },
  programId: { type: Number, required: true },
});

// Grooming Application Form Data Schema
const groomingSchema = mongoose.Schema({
  name: { type: String, required: true },
  contactEmail: String,
  contactPhone: { type: Number, required: true },
  address: { type: String, required: true },
  programId: { type: Number, required: true },
});

// Boarding Application Form Data Schema
const boardingSchema = mongoose.Schema({
  name: { type: String, required: true },
  contactEmail: String,
  contactPhone: { type: Number, required: true },
  address: { type: String, required: true },
  programId: { type: Number, required: true },
});

// Schema to model
export const PostLostPet = mongoose.model("lostPet", lostPetSchema);
export const PostFoundPet = mongoose.model("foundPet", foundPetSchema);
export const AdoptionApplication = mongoose.model("adoption", adoptionSchema);
export const TrainingEnrollment = mongoose.model(
  "TrainingEnrollment",
  trainingSchema
);
export const GroomingEnrollment = mongoose.model(
  "GroomingEnrollment",
  groomingSchema
);
export const BoardingEnrollment = mongoose.model(
  "BoardingEnrollment",
  boardingSchema
);
