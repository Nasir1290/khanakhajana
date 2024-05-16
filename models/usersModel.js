import mongoose,{Schema} from "mongoose"


const userSchema = new Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    favourites: {
        type: Array,
    }
})

export const userModel = mongoose.models.users || mongoose.model('users',userSchema);
