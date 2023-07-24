import express from 'express';
import { getLostPets, addLostPet } from '../controller/user-controller.js';

const router = express.Router();

router.get('/lost_found/lost_pets', getLostPets);
router.post('/lost_found/lost_form', addLostPet);
// router.get('/:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);

export default router;