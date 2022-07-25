const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { getSomeCategories, getSomeProducts, getSpecificItem, getProductsByCategory } = require('./RequestFakeAPI');

const user = new Schema({ name: String, email: String, pwd: String, storeId: String });
const owner = new Schema({ name: String, email: String, pwd: String });
const cart = new Schema({ id: String, image: String, title: String, type: String, size: String, quantity: Number, price: String, userId: String, storeId: String });
const shopData = new Schema({data: {}})
const User = mongoose.model('User', user);
const Owner = mongoose.model('Owner', owner);
const Cart = mongoose.model('Cart', cart);
const ShopData = mongoose.model('ShopData', shopData)

const {Products, Categories, Navs, Brands, Features} = require('./allSchemas');
const siteData = require('./siteData');

mongoose.connect("mongodb://localhost:27017/shopgenerator")
    .then(data => console.log('Database Connected'))
    .catch(err => console.log("Database not Connected", err))

const tempId = mongoose.Types.ObjectId("62daadc9b528a5ec706e97c0");

const setData = (data) => {
    const n = new Categories({value: data, storeId: tempId});
    n.save((err, nav) => {
        if(err) {
            return console.log("Error:", err);
        }
        console.log("Data:", nav);
    })
}

const temporaryFunc = async () => {
    setTimeout(async () => {
        const data = await getSomeCategories(6);
        data.forEach(item => setData(item));
    }, 1000);
}

temporaryFunc();


exports.storeCheck = async (storeId) => {
    try {
        const check = await Owner.findById(storeId);
        if(!check) {
            throw new Error(false);
        }
        return "Store Found";
    } catch(e) {
        return false;
    }
}

exports.generateStore = async (data) => {
    await ShopData.create(data);
}

exports.getAllShop = async (id) => {
    try {
        const data = await ShopData.findById(id);
        if(!data) {
            throw new Error(false);
        }
        return data;
    } catch(e) {
        return false;
    }
}

// Cart Actions

exports.addItemToCart = async (item) => {
    try {
        const checkItem = await Cart.findOne({ id: item.id, storeId: item.storeId, userId: item.userId });
        if(checkItem) {
            const data = await Cart.updateOne({id: item.id, userId: item.userId, storeId: item.storeId}, {$inc : {quantity: 1}})
            return data;
        }
        const selectedItem = { ...item, quantity: parseInt(item.quantity) };
        const data = await Cart.create(selectedItem);
        return data;
    } catch (err) {
        console.log(err);
    }
}

exports.findAllData = async (userId, storeId) => {
    try {
        const data = await Cart.find({userId, storeId});
        if(!data) {
            throw new Error(false);
        }
        return data;
    } catch (err) {
        return false;
    }
}

exports.removeOneItem = async (id, userId, storeId) => {
    try {
        const data = await Cart.findOne({ id, userId, storeId });
        if(data.quantity > 1) {
            const value = await Cart.updateOne({id, userId, storeId}, {$inc : {quantity: -1}})
            return value;
        }
        const value = await Cart.deleteOne({ id, userId, storeId });
        return value;
    } catch (err) {
        console.log(err);
    }
}

exports.removeOneInstance = async (id, userId, storeId) => {
    try {
        const data = await Cart.deleteOne({ id, userId, storeId });
        return data;
    } catch (err) {
        console.log(err);
    }
}



// Register and Login Actions

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
    const query = {name: userData.userName, email: userData.mail, pwd: userData.password, storeId: userData.storeId};
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


// Site Data Action with verifying credentials

exports.getSomeCategories = async (count) => {
    try {
        return await getSomeCategories(count);
    } catch(error) {
        return false;
    }
}

exports.getSomeProducts = async (count) => {
    try {
        return await getSomeProducts(count);
    } catch(error) {
        return false;
    }
}

exports.getSpecificItem = async (id) => {
    try {
        return await getSpecificItem(id);
    } catch(error) {
        return false;
    }
}

exports.getProductsByCategory = async (category) => {
    try {
        return await getProductsByCategory(category);
    } catch(error) {
        return false;
    }
}