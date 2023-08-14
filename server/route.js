import express from 'express';
import { addLostPet, getLostPets, addFoundPet, getFoundPets, addAdoptionApplication } from '../controller/user-controller.js';

const router = express.Router();

router.post('/lost_found/lost_form', addLostPet);
router.get('/lost_found/lost_pets', getLostPets);
router.post('/lost_found/found_form', addFoundPet);
router.get('/lost_found/found_pets', getFoundPets);
router.post('/adoption/adoption_form', addAdoptionApplication);

export default router;