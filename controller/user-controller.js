import {
  boardingConfirmationEmail,
  groomingConfirmationEmail,
  sendAdoptionConfirmationEmail,
  trainingConfirmationEmail,
} from "../helper/mailer.js";
import {
  PostLostPet,
  PostFoundPet,
  AdoptionApplication,
  TrainingEnrollment,
  GroomingEnrollment,
  BoardingEnrollment,
  Orders,
} from "../model/Schema.js";

// Post lostPet in database
export const addLostPet = async (request, response) => {
  try {
    const lostPetData = request.body;
    if (request.file && request.file.path) {
      lostPetData.petPicture = request.file.path;
    }
    const newPostLostPet = new PostLostPet(lostPetData);
    await newPostLostPet.save();
    response.status(201).json(newPostLostPet);
  } catch (error) {
    console.error("Error in addLostPet:", error);
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
  try {
    const foundPetData = request.body;
    if (request.file && request.file.path) {
      foundPetData.petPicture = request.file.path;
    }
    const newPostFoundPet = new PostFoundPet(foundPetData);
    await newPostFoundPet.save();
    response.status(201).json(newPostFoundPet);
  } catch (error) {
    console.error("Error in addFoundPet:", error);
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
    await sendAdoptionConfirmationEmail(
      adoptionApplication.contactEmail, // User email
      adoptionApplication.adopterName,
      adoptionApplication.contactEmail,
      adoptionApplication.contactPhone,
      adoptionApplication.address,
      adoptionApplication.experience,
      adoptionApplication.animalCode,
      adoptionApplication.animalType
    );

    response.status(201).json(newAdoptionApplication);
  } catch (error) {
    console.error("Error:", error);
    response.status(409).json({ message: error.message });
  }
};

// Post Training Enrollment in database
export const addTrainingEnrollment = async (request, response) => {
  const trainingEnrollment = request.body;
  const { name, contactEmail, address, programId } = trainingEnrollment;
  const newTrainingEnrollment = new TrainingEnrollment(trainingEnrollment);

  try {
    await newTrainingEnrollment.save();
    await trainingConfirmationEmail(contactEmail, name, address, programId);

    response.status(201).json(newTrainingEnrollment);
  } catch (error) {
    console.error("Error:", error);
    response.status(409).json({ message: error.message });
  }
};

// Post Grooming Enrollment in database
export const addGroomingEnrollment = async (request, response) => {
  const groomingEnrollment = request.body;
  const { name, contactEmail, address, programId } = groomingEnrollment;
  const newGroomingEnrollment = new GroomingEnrollment(groomingEnrollment);

  try {
    await newGroomingEnrollment.save();
    await groomingConfirmationEmail(contactEmail, name, address, programId);

    response.status(201).json(newGroomingEnrollment);
  } catch (error) {
    console.error("Error:", error);
    response.status(409).json({ message: error.message });
  }
};

// Post Boarding Enrollment in database
export const addBoardingEnrollment = async (request, response) => {
  const boardingEnrollment = request.body;
  const { name, contactEmail, address, programId } = boardingEnrollment;
  const newBoardingEnrollment = new BoardingEnrollment(boardingEnrollment);

  try {
    await newBoardingEnrollment.save();
    await boardingConfirmationEmail(contactEmail, name, address, programId);

    response.status(201).json(newBoardingEnrollment);
  } catch (error) {
    console.error("Error:", error);
    response.status(409).json({ message: error.message });
  }
};

export const createOrder = async (req, res) => {
  const { deliveryInfo, orderSummary, paymentMethod } = req.body;

  try {
    const newOrder = new Orders({
      deliveryInfo,
      orderSummary,
      paymentMethod,
    });

    const savedOrder = await newOrder.save();
    res
      .status(201)
      .json({ message: "Order created successfully", order: savedOrder });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
