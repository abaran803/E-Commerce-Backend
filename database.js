const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User, Cart } = require('./model/cartModel');
const { Navs, Brands, Category, Product, Features, Footer, Store } = require('./model/shopModel');

mongoose.connect(process.env.CONNECTION_STRING)
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

const getFeatures = async (storeId) => {
    const data = await Features.findOne({ storeId })
    return data;
}

// Checking the store existance
exports.storeCheck = async (storeId) => {
    const check = await Store.findOne({ storeId });
    return check;
}

// Generating the Store
exports.generateStore = async (data) => {

    // New ID for store
    const storeId = mongoose.Types.ObjectId();

    // Extracting data from the provided JSON
    const { email, password, brandName, navs, categories, products, features, footers } = data;

    // Adding brand name to DB
    const brand = new Brands({ value: brandName, storeId })
    await brand.save();

    // Adding navs to DB
    const newNavs = new Navs({ value: navs.value, storeId });
    await newNavs.save();

    // Adding all the categories to DB
    for (let i = 0; i < categories.length; i++) {
        const newCategory = new Category({ ...categories[i], storeId });
        await newCategory.save();
    }

    // Adding all the products to DB
    for (let i = 0; i < products.length; i++) {
        const newProduct = new Product({ ...products[i], storeId });
        await newProduct.save();
    }

    // Adding all the features to DB
    const newFeatures = new Features({ value: features.value, storeId });
    await newFeatures.save();

    // Adding footer data to DB
    const newFooters = new Footer({ value: footers.value, storeId });
    await newFooters.save();

    // Creating store at DB for checking if it exist
    const newStore = new Store({ storeId, email, password });
    await newStore.save();

    // Returning ID of newly generated store
    return storeId;
}

// Getting the data of entire shop
exports.getFullShop = async (storeId) => {
    const { quick, newProduct, support } = (await Footer.findOne({ storeId }).lean()).value;
    const features = (await getFeatures(storeId)).value;
    const navItems = (await getNavs(storeId)).value;
    const brandName = (await getBrandName(storeId)).value;
    const data = { brandName, navItems, features, quick, newProduct, support };
    return data;
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

exports.registerUser = async (userData) => {
    const hashedPassword = await bcrypt.hash(userData.password, 8);
    const query = { name: userData.userName, email: userData.mail, pwd: hashedPassword, storeId: userData.storeId, tokens: [] };
    const check = await User.findOne({ email: query.email });
    if (check) {
        return false;
    }
    const data = await User.create(query);
    return data;
}

exports.loginUser = async (userData) => {
    const query = { name: userData.userName, email: userData.mail, pwd: userData.password };
    const check = await User.findOne({ email: query.email });
    if(!check) {
        return false;
    }
    const isMatched = await bcrypt.compare(userData.password, check.pwd);
    if (!isMatched) {
        return false;
    }
    const token = jwt.sign({ _id: check["_id"].toString()}, process.env.SECRET_KEY);
    check.tokens = check.tokens.concat({ token });
    await check.save();
    const response = {token};
    return response;
}

exports.getLimitedCategories = async (count, storeId) => {
    const data = await Category.find({ storeId }).limit(count);
    return data;
}

exports.getLimitedProducts = async (count, storeId) => {
    const data = await Product.find({ storeId }).limit(count);
    return data;
}

exports.getSpecificItem = async (storeId, id) => {
    const product = await Product.findOne({ storeId, id });
    return product;
}

exports.getProductsByCategory = async (storeId, category) => {
    const productsByCategory = await Product.find({ storeId, category })
    return productsByCategory;
}