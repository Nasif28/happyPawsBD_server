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
import { uploadFoundPets, uploadLostPets } from "../utils/cloudnary.js";

const router = express.Router();

router.post(
  "/lost_found/lost_form",
  uploadLostPets.single("petPicture"),
  addLostPet
);
router.get("/lost_found/lost_pets", getLostPets);
router.post(
  "/lost_found/found_form",
  uploadFoundPets.single("petPicture"),
  addFoundPet
);
router.get("/lost_found/found_pets", getFoundPets);
router.post("/adoption/adoptable_pets/:code", addAdoptionApplication);
router.post("/training/:id", addTrainingEnrollment);
router.post("/petcare/grooming/:id", addGroomingEnrollment);
router.post("/petcare/boarding/:id", addBoardingEnrollment);

export default router;
