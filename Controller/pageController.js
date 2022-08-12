const { 
    getLimitedProducts, 
    getSpecificItem, 
    getProductsByCategory, 
    storeCheck, 
    generateStore, 
    getFullShop,
    addItemToCart,
    removeOneItem,
    removeOneInstance,
    findAllData,
    getLimitedCategories,
    registerUser,
    loginUser
} = require('../database');

exports.storeCheck = async (req, res) => {
    const storeId = req.params.storeId;
    try {
        const response = await storeCheck(storeId);
        if (!response) {
            throw new Error("store not found");
        }
        res.json({ status: 'success', message: 'store exist' });
    } catch (e) {
        res.status(404).json({ status: 'error', message: e.message });
    }
}

exports.generateStore = async (req, res) => {
    try {
        const storeId = await generateStore(req.body);
        res.send({ message: "Store created Successfully", storeId });
    } catch (e) {
        console.log(e.message)
        res.status("409").send({ message: "Some error occured" });
    }
}

exports.getSiteData = async (req, res) => {
    try {
        const data = await getFullShop(req.params.storeId);
        if (!data) {
            throw new Error(false);
        }
        res.json({ status: 'success', data });
    } catch (e) {
        res.status(404).json({ status: 'error', message: "no data found" });
    }
}

exports.getProductsData = async (req, res) => {
    try {
        const count = req.params.count;
        const storeId = req.params.storeId;
        const data = await getLimitedProducts(count, storeId);
        res.status(200).json({status: 'success', data});
    } catch (e) {
        res.status(404).send({status: "error", message: err.message});
    }
}

exports.getProductDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const storeId = req.params.storeId;
        const data = await getSpecificItem(storeId, id);
        res.status(200).json({status: 'success', data});
    } catch (e) {
        res.status(404).send({status: "error", message: err.message});
    }
}

exports.getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const storeId = req.params.storeId;
        const data = await getProductsByCategory(storeId, category);
        res.status(200).json({status: 'success', data});
    } catch (e) {
        res.status(404).send({status: "error", message: err.message});
    }
}

exports.addNewProduct = async (req, res) => {
    const response = await addItemToCart(req.body);
    return res.status(200).json(response);
};

exports.removeOneProducts = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;
    const storeId = req.body.storeId;
    const response = await removeOneItem(id, userId, storeId);
    return res.status(200).json(response);
};

exports.removeAllProducts = async (req, res) => {
    const id = req.body.id;
    const userId = req.body.userId;
    const storeId = req.body.storeId;
    const response = await removeOneInstance(id, userId, storeId);
    return res.status(200).json(response);
};

exports.getItems = async (req, res) => {
    try {
        const { userId, storeId } = req.params;
        const response = await findAllData(userId, storeId);
        if (!response) {
            throw new Error(false);
        }
        res.status(200).json(response);
    } catch (e) {
        res.status(404).json({ message: "No data found" });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const count = req.params.count;
        const storeId = req.params.storeId;
        const data = await getLimitedCategories(count, storeId);
        if (!data) {
            throw new Error(false);
        }
        res.status(200).json({status: 'success', data});
    } catch (e) {
        res.status(404).send({status: "error", message: err.message});
    }
};

exports.registerUser = async (req, res) => {
    const response = await registerUser(req.body);
    if (!response) {
        return res.sendStatus(409);
    }
    return res.status(200).json(response);

}

exports.loginUser = async (req, res) => {
    const response = await loginUser(req.body);
    if (!response) {
        return res.sendStatus(404);
    }
    return res.status(200).json(response);

}