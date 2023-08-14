import mongoose from 'mongoose';
// import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const lostPetSchema = mongoose.Schema({
    petName: { type: String, required: true },
    animalType: { type: String, required: true },
    breed: String,
    age: String,
    weight: String,
    colors: { type: String, required: true },
    distinctiveFeatures: String,
    gender: { type: String, required: true },
    ownerName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: String,
    lastSeenLocation: { type: String, required: true },
    lostDate: { type: String, required: true },
    description: { type: String, required: true },
    petPicture: { type: String }
});

const foundPetSchema = mongoose.Schema({
    animalType: { type: String, required: true },
    breed: String,
    colors: { type: String, required: true },
    distinctiveFeatures: String,
    gender: { type: String, required: true },
    founderName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: String,
    foundLocation: { type: String, required: true },
    foundDate: { type: String, required: true },
    description: { type: String, required: true },
});

const adoptionSchema = mongoose.Schema({
    animalCode: { type: String, required: true },
    animalName: { type: String, required: true },
    animalType: { type: String, required: true },
    breed: String,
    gender: { type: String, required: true },
    adopterName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactEmail: String,
    address: { type: String, required: true },
    experience: { type: String, required: true },
});

// autoIncrement.initialize(mongoose.connection);
// lostPetSchema.plugin(autoIncrement.plugin, 'lostPet');
// we need to turn it into a model
export const PostLostPet = mongoose.model('lostPet', lostPetSchema);
export const PostFoundPet = mongoose.model('foundPet', foundPetSchema);
export const AdoptionApplication = mongoose.model('adoption', adoptionSchema);
