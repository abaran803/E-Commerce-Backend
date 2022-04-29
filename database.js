const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({ name: String, email: String, pwd: String });
const owner = new Schema({ name: String, email: String, pwd: String });
const cart = new Schema({ id: String, image: String, title: String, type: String, size: String, quantity: Number, price: String, userId: String, ownerId: String });
const User = mongoose.model('User', user);
const Owner = mongoose.model('Owner', owner);
const Cart = mongoose.model('Cart', cart);

mongoose.connect(process.env.CONNECTION_STRING)
    .then(data => console.log('Database Connected'))
    .catch(err => console.log("Database not Connected", err))

exports.addItemToCart = async (item, userId, ownerId) => {
    try {
        const checkItem = await Cart.findOne({ id: item.id, ownerId, userId });
        if(checkItem) {
            const data = await Cart.updateOne({id: item.id, userId, ownerId}, {$inc : {quantity: 1}})
            return data;
        }
        const selectedItem = { ...item, quantity: parseInt(item.quantity) };
        const data = await Cart.create(selectedItem);
        return data;
    } catch (err) {
        console.log(err);
    }
}

exports.findAllData = async (userId, ownerId) => {
    try {
        const data = await Cart.find({ userId, ownerId });
        return data;
    } catch (err) {
        console.log(err);
    }
}

exports.removeOneInstance = async (id, userId, ownerId) => {
    try {
        const data = await Cart.deleteOne({ id, userId, ownerId });
        return data;
    } catch (err) {
        console.log(err);
    }
}

exports.registerOwner = async (ownerData) => {
    const query = {name: ownerData.userName, email: ownerData.mail, pwd: ownerData.password};
    const check = await Owner.findOne({email: query.email});
    if(check) {
        return false;
    }
    const data = await Owner.create(query);
    return data;
}

exports.loginOwner = async (ownerData) => {
    const query = {name: ownerData.userName, email: ownerData.mail, pwd: ownerData.password};
    const check = await Owner.findOne({email: query.email, pwd: query.pwd});
    if(!check) {
        return false;
    }
    const response = check;
    return response;
}

exports.registerUser = async (userData) => {
    const query = {name: userData.userName, email: userData.mail, pwd: userData.password};
    const check = await User.findOne({email: query.email});
    console.log(userData, check);
    if(check) {
        return false;
    }
    const data = await User.create(query);
    return data;
}

exports.loginUser = async (userData) => {
    const query = {name: userData.userName, email: userData.mail, pwd: userData.password};
    const check = await User.findOne({email: query.email, pwd: query.pwd});
    if(!check) {
        return false;
    }
    const response = check;
    return response;
}