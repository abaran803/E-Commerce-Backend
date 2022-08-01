const mongoose = require('mongoose');

const navs = new mongoose.Schema({
    _id: String,
    value: [],
    storeId: String
})

const brands = new mongoose.Schema({
    _id: String,
    value: String,
    storeId: String
})

// const products = new mongoose.Schema({
//     id: Number,
//     title: String,
//     price: Number,
//     description: String,
//     category: String,
//     image: String,
//     rating: {},
//     storeId: String
// })

// const categories = new mongoose.Schema(
//     {
//         category: String,
//         id: Number,
//         image: String,
//         description: String,
//         storeId: String
//     }
// )

const features = new mongoose.Schema({
    value: [],
    storeId: String
})

const footerData = new mongoose.Schema({
    _id: String,
    value: []
})

exports.Navs = mongoose.model('nav', navs);
exports.Brands = mongoose.model('brand', brands);
// exports.Categories = mongoose.model('category', categories);
// exports.Products = mongoose.model('product', products);
exports.Features = mongoose.model('feature', features);