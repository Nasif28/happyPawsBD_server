import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';

// how our document look like
const lostPetSchema = mongoose.Schema({
    name: String,
    username: String,
    email: String,
    phone: Number
});

// autoIncrement.initialize(mongoose.connection);
// lostPetSchema.plugin(autoIncrement.plugin, 'lostPet');
// we need to turn it into a model
const PostLostPet = mongoose.model('lostPet', lostPetSchema);

export default PostLostPet;