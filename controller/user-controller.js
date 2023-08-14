import { PostLostPet, PostFoundPet, AdoptionApplication } from '../model/Schema.js';
// import express from 'express';

// Get all lostPets
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
    const lostPets = request.body;
    // const lostPet = JSON.parse(request.body.lostPet);
    // const lostPet = JSON.parse(request.body);
    // const petPicture = request.file;
    // console.log(petPicture)
    // console.log(lostPet)
    console.log(lostPets)
    // const newPostLostPet = new PostLostPet({lostPet, petPicture});
    const newPostLostPet = new PostLostPet(lostPets);

    try {
        await newPostLostPet.save();
        response.status(201).json(newPostLostPet);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
};


// Get all foundPets
export const getFoundPets = async (request, response) => {
    try {
        const foundPets = await PostFoundPet.find();
        response.status(200).json(foundPets);
    } catch (error) {
        response.status(404).json({ message: error.message })
    }
}

// Save data of the foundPet in database
export const addFoundPet = async (request, response) => {
    const foundPet = request.body;
    // const petPicture = req.file;
    const newPostFoundPet = new PostFoundPet(foundPet);

    try {
        await newPostFoundPet.save();
        response.status(201).json(newPostFoundPet);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

// Save data of the AdoptionApplication in database
export const addAdoptionApplication = async (request, response) => {
    const adoptionApplication = request.body;
    // const petPicture = req.file;
    const newAdoptionApplication = new AdoptionApplication(adoptionApplication);

    try {
        await newAdoptionApplication.save();
        response.status(201).json(newAdoptionApplication);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}



// 
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