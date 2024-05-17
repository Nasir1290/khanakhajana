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




// import mongoose from 'mongoose';

// const uri =process.env.MONGO_URI

// export default async function connectMongo() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Connected to MongoDB successfully!");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error; // Re-throw the error for handling at the caller
//   }
// }





import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from a .env file if present
dotenv.config();

const uri = process.env.MONGO_URI;

export default async function connectMongo() {
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 30000, // Timeout after 30s instead of 10s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4 // Use IPv4, skip trying IPv6
    });
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error; // Re-throw the error for handling at the caller
  }
}

// Enable Mongoose debugging to see more information about the connection process
mongoose.set('debug', true);
