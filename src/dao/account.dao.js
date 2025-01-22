import { productModel } from "../model/product.model.js"

const getAll = async () => {
    return await productModel.find();
}

const getOne = async (ask) => {
    return await productModel.findOne(ask);
}

const create = async (data) => {
    return await productModel.create(data) 
}

const update = async (id, data) => {
    return await productModel.findByIdAndUpdate(id, data, {new: true});
}

const deleteOne = async (id) => {
    return await productModel.findByIdAndDelete(id);
}


export default {getAll, getOne, create, update, deleteOne};