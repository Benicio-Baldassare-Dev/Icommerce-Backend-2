import { accountModel } from "../model/account.model.js"

const getAll = async () => {
    return await accountModel.find();
}

const getOne= async (ask) => {
    return await accountModel.findOne(ask);
}

const create = async (data) => {
    return await accountModel.create(data) 
}

const update = async (id, data) => {
    return await accountModel.findByIdAndUpdate(id, data, {new: true});
}

const deleteOne = async (id) => {
    return await accountModel.findByIdAndDelete(id);
}


export default {getAll, getOne, create, update, deleteOne};