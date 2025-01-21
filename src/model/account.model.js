import mongoose from "mongoose";

const accountCollection = 'accounts';

const accountSchema = new mongoose.Schema({
    number: String,
    alias: String,
    wallet: Number,
    userId: String,
});

export const accountModel = mongoose.model(accountCollection, accountSchema);