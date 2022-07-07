const database = require('../database');
const siteData = require('../siteData');
const { getSomeProducts, getSpecificItem, getProductsByCategory, storeCheck} = require('../database');

exports.storeCheck = async (req, res) => {
    const storeId = req.params.storeId;
    const response = await storeCheck(storeId);
    return res.sendStatus(response);
}

exports.getSiteData = (req, res) => {
    res.status(200).send(siteData);
}
exports.getProductsData = async (req, res) => {
    const count = req.params.count;
    const data = await getSomeProducts(count);
    data ? res.status(200).json(data) : res.sendStatus(404);
}
exports.getProductDetails = async (req, res) => {
    const id = req.params.id;
    const data = await getSpecificItem(id);
    data ? res.status(200).json(data) : res.sendStatus(404);
}

exports.getProductsByCategory = async (req, res) => {
    const category = req.params.category;
    const data = await getProductsByCategory(category);
    data ? res.status(200).json(data) : res.sendStatus(404);
}

exports.addNewProduct = async (req, res) => {
    const response = await database.addItemToCart(req.body);
    return res.status(200).json(response);
};

exports.removeOneProducts = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;
    const storeId = req.body.storeId;
    const response = await database.removeOneItem(id, userId, storeId);
    return res.status(200).json(response);
};

exports.removeAllProducts = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;
    const storeId = req.body.storeId;
    const response = await database.removeOneInstance(id, userId, storeId);
    return res.status(200).json(response);
};

exports.getItems = async (req, res) => {
    const userId = req.params.userId;
    const storeId = req.params.storeId;
    console.log(userId, storeId)
    const response = await database.findAllData(userId, storeId);
    console.log(response)
    return res.status(200).json(response);
};

exports.getCategories = async (req, res) => {
    const count = req.params.count;
    const data = await database.getSomeCategories(count);
    data ? res.status(200).json(data) : res.sendStatus(404);
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