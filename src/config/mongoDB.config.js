import mongoose from "mongoose";
import envsConfig from "./envs.config.js";

export const connectDB = () => {
    try {
        mongoose.connect(envsConfig.MONGO_URL)
        console.log('MongoDB is connected');
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}