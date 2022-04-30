const database = require('../database');
const siteData = require('../siteData');
const { getSomeCategories, getSomeProducts, getSpecificItem, getProductsByCategory } = require('../RequestFakeAPI');

exports.getSiteData = (req, res) => {
    res.status(200).send(siteData);
}
exports.getProductsData = async (req, res) => {
    const count = req.params.count;
    const value = await getSomeProducts(count);
    res.json(value);
}
exports.getProductDetails = async (req, res) => {
    const id = req.params.id;
    const value = await getSpecificItem(id);
    res.json(value);
}

exports.getProctsByCategory = async (req, res) => {
    const category = req.params.category;
    const value = await getProductsByCategory(category);
    res.json(value);
}

exports.addNewProduct = async (req, res) => {
    const userId = req.body.userId;
    const ownerId = req.body.ownerId;
    const response = await database.addItemToCart(req.body, userId, ownerId);
    return res.status(200).json(response);
};

exports.removeOneProducts = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;
    const ownerId = req.body.ownerId;
    const response = await database.removeOneItem(id, userId, ownerId);
    return res.status(200).json(response);
};

exports.removeAllProducts = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;
    const ownerId = req.body.ownerId;
    const response = await database.removeOneInstance(id, userId, ownerId);
    return res.status(200).json(response);
};

exports.getItems = async (req, res) => {
    const userId = req.params.userId;
    const ownerId = req.params.ownerId;
    const response = await database.findAllData(userId, ownerId);
    return res.status(200).json(response);
};

exports.getCategories = async (req, res) => {
    const count = req.params.count;
    const value = await getSomeCategories(count);
    res.json(value);
};

exports.registerOwner = async (req, res) => {
    const response = await database.registerOwner(req.body);
    if(!response) {
        return res.sendStatus(409);
    }
    return res.status(200).json(response);

}

exports.loginOwner = async (req, res) => {
    const response = await database.loginOwner(req.body);
    if(!response) {
        return res.sendStatus(404);
    }
    return res.status(200).json(response);

}

exports.registerUser = async (req, res) => {
    const response = await database.registerUser(req.body);
    if(!response) {
        return res.sendStatus(409);
    }
    return res.status(200).json(response);

}

exports.loginUser = async (req, res) => {
    const response = await database.loginUser(req.body);
    if(!response) {
        return res.sendStatus(404);
    }
    return res.status(200).json(response);

}