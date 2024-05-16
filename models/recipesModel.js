import mongoose, { Schema } from "mongoose";

const schema = new Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    activeTime: {
        type: String,
        required: false
    },
    totalTime: {
        type: String,
        required: false
    },
    thumbnail: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    serves: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    steps: {
        type: Array,
        required: true
    },
});

export const RecipeModel = mongoose.models.recipes || mongoose.model("recipes",schema);