import connectMongo from "@/dbConnection/connectToMongo";
import { RecipeModel } from "@/models/recipesModel";
import { userModel } from "@/models/usersModel";
import mongoose from "mongoose";

export async function getAllRecipe() {
    await connectMongo();
    const allRecipe = await RecipeModel.find()

    return allRecipe;
}

export const getRecipeById = async (id) => {
    await connectMongo();
    const recipe = await RecipeModel.findById(id.toString());

    return recipe;
}

export const getRecipeByCategory = async (category) => {
    await connectMongo();
    const recipeByCategory = await RecipeModel.find({ category: category });
    return recipeByCategory;
};

export const getAllRecipeCategories = async () => {
    await connectMongo();
    const allCategories = await RecipeModel.distinct('category');
    return allCategories;
}

export const createUser = async (user) => {
    await connectMongo();
    const created = await userModel.create(user);
    return created;
}
export const getUser = async () => {
    await connectMongo();
    const user = await userModel.find({});
    return user;
}

export const findUserByCredentials = async (credential) => {
    await connectMongo();
    try {
        const user = await userModel.findOne(credential).lean();
        return user;
    } catch (err) {
        throw err;
    }
}

export const updateFavourite = async (recipeId, auth) => {
    await connectMongo();

    if (auth && recipeId) {
        const user = await userModel.findById(auth._id.toString());

        if (user) {

            try {

                const found = await user.favourites.find((id) => id === recipeId);
                if (found) {
                    user.favourites.pull(recipeId);
                }
                if (!found) {
                    user.favourites.push(recipeId);
                }

                user.save();
                console.log("!!!Favourite updated successfully!!!");

            } catch (error) {
                console.log(error)
            }
        }
    }


}



