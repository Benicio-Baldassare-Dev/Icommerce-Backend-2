import mongoose, { mongo } from "mongoose";

const userCollection = "users";

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: true },
    lastName: {type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: {type: Number, required: true },
    password: {type: String, required: true },
    cart: {type: mongoose.Schema.Types.ObjectId, ref: 'cart' },
    role: {type: String, default: "user"}
});

export const userModel = mongoose.model(userCollection, userSchema);