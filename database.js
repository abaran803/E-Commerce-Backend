const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({ name: String, email: String, pwd: String, storeId: String });
const owner = new Schema({ name: String, email: String, pwd: String });
const cart = new Schema({ id: String, image: String, title: String, type: String, size: String, quantity: Number, price: String, userId: String, storeId: String });
const shopData = new Schema({ data: {} })
const User = mongoose.model('User', user);
const Owner = mongoose.model('Owner', owner);
const Cart = mongoose.model('Cart', cart);
const ShopData = mongoose.model('ShopData', shopData)

const store = new Schema({ storeId: String, email: String, password: String });
const category = new Schema({ category: String, id: Number, image: String, description: String, storeId: String });
const product = new Schema({ id: String, title: String, price: String, description: String, category: String, image: String, rating: {}, storeId: String })
const Store = mongoose.model('store', store);
const Category = mongoose.model('category', category);
const Product = mongoose.model('product', product);
const { Navs, Brands, Features } = require('./allSchemas');

mongoose.connect('mongodb+srv://abaran803:zk4HiRi4HySsFtwe@shopping-data.ft1ko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(data => console.log('Database Connected'))
    .catch(err => console.log("Database not Connected", err))

const getNavs = async (storeId) => {
    const data = await Navs.findOne({ storeId })
    return data;
}

const getBrandName = async (storeId) => {
    const data = await Brands.findOne({ storeId })
    return data;
}

// const getFeatures = async (storeId) => {
//     const data = await Features.findOne({ storeId })
//     Object.keys(data).forEach(item => console.log(item, data[item]));
//     console.log(data);
//     return data;
// }

exports.storeCheck = async (storeId) => {
    try {
        // const check = await Owner.findById(storeId);
        const check = await Store.findOne({ storeId });
        if (!check) {
            throw new Error(false);
        }
        return "Store Found";
    } catch (e) {
        return false;
    }
}

exports.generateStore = async (data) => {
    await ShopData.create(data);
}

exports.getAllShop = async (storeId) => {
    try {
        const data = await ShopData.findById(storeId);
        // const { value: navItems } = await getNavs(storeId);
        // const brandName = (await getBrandName(storeId)).value;
        // const features = await getFeatures(storeId);
        // data.data = { ...(data.data), navItems, brandName };
        // console.log(data);
        // console.log({features: features.value});
        // console.log(brandName);
        if (!data) {
            throw new Error(false);
        }
        return data;
    } catch (e) {
        return false;
    }
}

// Cart Actions

exports.addItemToCart = async (item) => {
    try {
        const checkItem = await Cart.findOne({ id: item.id, storeId: item.storeId, userId: item.userId });
        if (checkItem) {
            const data = await Cart.updateOne({ id: item.id, userId: item.userId, storeId: item.storeId }, { $inc: { quantity: 1 } })
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
        const data = await Cart.find({ userId, storeId });
        if (!data) {
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
        if (data.quantity > 1) {
            const value = await Cart.updateOne({ id, userId, storeId }, { $inc: { quantity: -1 } })
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
    const query = { name: ownerData.userName, email: ownerData.mail, pwd: ownerData.password };
    const check = await Owner.findOne({ email: query.email });
    if (check) {
        return false;
    }
    const data = await Owner.create(query);
    return data;
}

exports.loginOwner = async (ownerData) => {
    const query = { name: ownerData.userName, email: ownerData.mail, pwd: ownerData.password };
    const check = await Owner.findOne({ email: query.email, pwd: query.pwd });
    if (!check) {
        return false;
    }
    const response = check;
    return response;
}

exports.registerUser = async (userData) => {
    const query = { name: userData.userName, email: userData.mail, pwd: userData.password, storeId: userData.storeId };
    const check = await User.findOne({ email: query.email });
    console.log(userData, check);
    if (check) {
        return false;
    }
    const data = await User.create(query);
    return data;
}

exports.loginUser = async (userData) => {
    const query = { name: userData.userName, email: userData.mail, pwd: userData.password };
    const check = await User.findOne({ email: query.email, pwd: query.pwd });
    if (!check) {
        return false;
    }
    const response = check;
    return response;
}

exports.getSomeCategories = async (count, storeId) => {
    try {
        // return await getSomeCategories(count);
        const data = await Category.find({ storeId }).limit(count);
        return data;
    } catch (error) {
        return false;
    }
}

exports.getSomeProducts = async (count, storeId) => {
    try {
        // return await getSomeProducts(count);
        const data = await Product.find({ storeId }).limit(count);
        return data;
    } catch (error) {
        return false;
    }
}

exports.getSpecificItem = async (storeId, id) => {
    try {
        const product = await Product.findOne({ storeId, id });
        return product;
    } catch (error) {
        return false;
    }
}

exports.getProductsByCategory = async (storeId, category) => {
    try {
        const productsByCategory = await Product.find({ storeId, category })
        return productsByCategory;
    } catch (error) {
        return false;
    }
}