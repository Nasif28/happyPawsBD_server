import {
  PostLostPet,
  PostFoundPet,
  AdoptionApplication,
  TrainingEnrollment,
} from "../model/Schema.js";

// Post lostPet in database
export const addLostPet = async (request, response) => {
  const lostPets = request.body;
  const newPostLostPet = new PostLostPet(lostPets);

  try {
    await newPostLostPet.save();
    response.status(201).json(newPostLostPet);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Get all lostPets
export const getLostPets = async (request, response) => {
  try {
    const lostPets = await PostLostPet.find();
    response.status(200).json(lostPets);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Post foundPet in database
export const addFoundPet = async (request, response) => {
  const foundPet = request.body;
  const newPostFoundPet = new PostFoundPet(foundPet);

  try {
    await newPostFoundPet.save();
    response.status(201).json(newPostFoundPet);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// Get all foundPets
export const getFoundPets = async (request, response) => {
  try {
    const foundPets = await PostFoundPet.find();
    response.status(200).json(foundPets);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// Post Adoption Application in database
export const addAdoptionApplication = async (request, response) => {
  const adoptionApplication = request.body;
  const newAdoptionApplication = new AdoptionApplication(adoptionApplication);

  try {
    await newAdoptionApplication.save();
    response.status(201).json(newAdoptionApplication);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// // Post Training Application in database
// export const addTrainingEnrollment = async (request, response) => {
//   const trainingEnrollment = request.body;
//   const newTrainingEnrollment = new TrainingEnrollment(trainingEnrollment);

//   try {
//     await newTrainingEnrollment.save();
//     response.status(201).json(newTrainingEnrollment);
//   } catch (error) {
//     response.status(409).json({ message: error.message });
//   }
// };

// export const addTrainingEnrollment = async (request, response) => {
//   // Extract the programId from the URL
//   const { id } = request.params;

//   // Combine request body and programId from the URL
//   const trainingEnrollment = {
//     ...request.body,
//     programId: id, // Set programId to the value from the URL
//   };

//   const newTrainingEnrollment = new TrainingEnrollment(trainingEnrollment);

//   try {
//     await newTrainingEnrollment.save();
//     response.status(201).json(newTrainingEnrollment);
//   } catch (error) {
//     response.status(409).json({ message: error.message });
//   }
// };

export const addTrainingEnrollment = async (request, response) => {
  console.log("Incoming request to /training/:id");
  const trainingEnrollment = request.body;
  const newTrainingEnrollment = new TrainingEnrollment(trainingEnrollment);

  try {
    await newTrainingEnrollment.save();
    response.status(201).json(newTrainingEnrollment);
  } catch (error) {
    console.error("Error:", error);
    response.status(409).json({ message: error.message });
  }
};

