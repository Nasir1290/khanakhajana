// import mongoose from "mongoose"

// const MONGO_URI = process.env.MONGO_URI
// const cached = {}


// async function connectMongo() {
//     if (!MONGO_URI) {
//         throw new Error(
//             "Please define the MONGO_URI environment variable inside .env.local"
//         )
//     }
//     if (cached.connection) {
//         return cached.connection
//     }
//     if (!cached.promise) {
//         const opts = {
//             bufferCommands: false
//         }
//         cached.promise = mongoose.connect(MONGO_URI, opts)
//     }
//     try {
//         cached.connection = await cached.promise
//     } catch (e) {
//         cached.promise = undefined
//         throw e
//     }
//     return cached.connection
// }
// export default connectMongo




import mongoose from 'mongoose';

const uri =process.env.MONGO_URI

export default async function connectMongo() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error for handling at the caller
  }
}