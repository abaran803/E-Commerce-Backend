const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({ name: String, email: String, pwd: String, storeId: String, tokens: [{ token: {type: String, required: true} }] });
const owner = new Schema({ name: String, email: String, pwd: String });
const cart = new Schema({ id: String, image: String, title: String, type: String, size: String, quantity: Number, price: String, userId: String, storeId: String });

exports.User = mongoose.model('User', user);
exports.Owner = mongoose.model('Owner', owner);
exports.Cart = mongoose.model('Cart', cart);