const mongoose = require('mongoose');

const navs = new mongoose.Schema({
    _id: String,
    value: []
})

const brands = new mongoose.Schema({
    _id: String,
    value: String
})

const products = new mongoose.Schema({
    value: {},
    storeId: String
})

const categories = new mongoose.Schema({
    value: {},
    storeId: String
})

const features = new mongoose.Schema({
    _id: String,
    value: []
})

const footerData = new mongoose.Schema({
    _id: String,
    value: []
})

exports.Navs = mongoose.model('nav', navs);
exports.Brands = mongoose.model('brand', brands);
exports.Categories = mongoose.model('category', categories);
exports.Products = mongoose.model('product', products);
exports.Features = mongoose.model('feature', features);