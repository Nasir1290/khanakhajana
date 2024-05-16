import { RecipeModel } from "@/models/recipesModel";
import { userModel } from "@/models/usersModel";
import mongoose from "mongoose";

export async function getAllRecipe() {
    const allRecipe = await RecipeModel.find()

    return allRecipe;
}

export const getRecipeById = async (id) => {
    const recipe = await RecipeModel.findById(id.toString());

    return recipe;
}

export const getRecipeByCategory = async (category) => {
    const recipeByCategory = await RecipeModel.find({ category: category });
    return recipeByCategory;
};

export const getAllRecipeCategories = async () => {
    const allCategories = await RecipeModel.distinct('category');
    return allCategories;
}

export const createUser = async (user) => {
    const created = await userModel.create(user);
    return created;
}
export const getUser = async () => {
    const user = await userModel.find({});
    return user;
}

export const findUserByCredentials = async (credential) => {
    try {
        const user = await userModel.findOne(credential).lean();
        return user;
    } catch (err) {
        throw err;
    }
}

export const updateFavourite = async (recipeId, auth) => {

    if (auth && recipeId) {
        const user = await userModel.findById(auth._id.toString());

        if (user) {

            try {

                const found =await user.favourites.find((id) => id === recipeId);
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



