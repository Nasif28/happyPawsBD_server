import express from 'express';
// import multer from 'multer';
// import path from 'path';
import { getLostPets, addLostPet, addFoundPet, getFoundPets, addAdoptionApplication } from '../controller/user-controller.js';
// import { upload } from '../index.js';
// import { getLostPets, addFoundPet, getFoundPets, addAdoptionApplication } from '../controller/user-controller.js';

const router = express.Router();

// const storage = multer.diskStorage({
//     destination: "uploads",
//     filename: (req, file, cb) => {
//         const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//         cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
//     },
// });
// const upload = multer({ storage: storage });

router.get('/lost_found/lost_pets', getLostPets);
router.post('/lost_found/lost_form', addLostPet);
// router.post('/lost_found/lost_form', upload.single("petPicture"), addLostPet);
// router.post("/lost_pets", upload.single("petPicture"), lostPetController.submitLostPet);
router.get('/lost_found/found_pets', getFoundPets);
router.post('/lost_found/found_form', addFoundPet);
router.post('/adoption/adoption_form', addAdoptionApplication);
// router.get('/:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);

export default router;