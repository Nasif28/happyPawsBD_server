import express from "express";
import {
  addLostPet,
  getLostPets,
  addFoundPet,
  getFoundPets,
  addAdoptionApplication,
  addTrainingEnrollment,
  addGroomingEnrollment,
  addBoardingEnrollment,
} from "../controller/user-controller.js";

const router = express.Router();

router.post("/lost_found/lost_form", addLostPet);
router.get("/lost_found/lost_pets", getLostPets);
router.post("/lost_found/found_form", addFoundPet);
router.get("/lost_found/found_pets", getFoundPets);
router.post("/adoption/adoption_form", addAdoptionApplication);
router.post("/training/:id", addTrainingEnrollment);
router.post("/petcare/grooming/:id", addGroomingEnrollment);
router.post("/petcare/boarding/:id", addBoardingEnrollment);

export default router;

// Need to add more routes
