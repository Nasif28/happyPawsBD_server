import PostLostPet from '../model/Schema.js';

// Get all lostPet
export const getLostPets = async (request, response) => {
    try {
        const lostPets = await PostLostPet.find();
        response.status(200).json(lostPets);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of the lostPet in database
export const addLostPet = async (request, response) => {
    const lostPet = request.body;
    const newPostLostPet = new PostLostPet(lostPet);

    try {
        await newPostLostPet.save();
        response.status(201).json(newPostLostPet);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}



/*
// Get a user by id
export const getUserById = async (request, response) => {
    try{
        const user = await User.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new User(user);
    try{
        await User.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try{
        await User.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}
*/