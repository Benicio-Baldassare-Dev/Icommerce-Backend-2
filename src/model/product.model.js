import mongoose from "mongoose";

const productCollection = 'products';

const productSchema = new mongoose.Schema({
    name: String,
    descrption: String,
    price: Number,
    stock: Number,
    productId: String,
});

export const productModel = mongoose.model(productCollection, productSchema);