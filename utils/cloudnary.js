import pkg from "cloudinary";
const { v2: cloudinary } = pkg;
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Create storage for the "found_pets" folder
const foundPetsStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "found_pets",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

// Create storage for the "lost_pets" folder
const lostPetsStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "lost_pets",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

// Create upload handlers for each folder
const uploadFoundPets = multer({ storage: foundPetsStorage });
const uploadLostPets = multer({ storage: lostPetsStorage });

export { uploadFoundPets, uploadLostPets };
