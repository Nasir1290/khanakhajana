"use server"
import { revalidatePath } from 'next/cache'
import { createUser, findUserByCredentials, updateFavourite } from "@/db/dbQueries";
import { redirect } from "next/navigation";


export const registerUser = async (formData) => {
    const user = Object.fromEntries(formData);
    await createUser(user);
    redirect('/login')
}

export const perFormLogin = async (formData) => {
    try {
        const credential = {};
        credential.email = formData.get('email');
        credential.password = formData.get('password');
        const found = await findUserByCredentials(credential);
        return found
    } catch (err) {
        throw err;

    }
}

export const getUserById = async (id) => {
    const user = findUserByCredentials({_id:id});
    return user;
}

export async function addRemoveFavourite(recipeId, auth) {
    try {
        await updateFavourite(recipeId, auth);
    } catch(error) {
        throw error;
    }
    revalidatePath('/');
}