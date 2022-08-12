const mongoose = require('mongoose');

const brands = new mongoose.Schema({
    value: String,
    storeId: String
})

const navs = new mongoose.Schema({
    value: [],
    storeId: String
})

const category = new mongoose.Schema({
    category: String,
    id: Number,
    image: String,
    description: String,
    storeId: String
});

const product = new mongoose.Schema({
    id: String,
    title: String,
    price: String,
    description: String,
    category: String,
    image: String,
    rating: {},
    storeId: String
})

const features = new mongoose.Schema({
    value: [],
    storeId: String
})

const footer = new mongoose.Schema({ 
    value: {}, 
    storeId: String 
})

const store = new mongoose.Schema({ 
    storeId: String, 
    email: String, 
    password: String 
});

exports.Navs = mongoose.model('nav', navs);
exports.Brands = mongoose.model('brand', brands);
exports.Category = mongoose.model('category', category);
exports.Product = mongoose.model('product', product);
exports.Features = mongoose.model('feature', features);
exports.Footer = mongoose.model('footer', footer)
exports.Store = mongoose.model('store', store);