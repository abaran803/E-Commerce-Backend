const database = require('../database');
const siteData = require('../siteData');
const { getSomeProducts, getSpecificItem, getProductsByCategory, storeCheck, generateStore, getAllShop} = require('../database');
const sampleShopGenerator = require('../sampleShopGenerator');

exports.storeCheck = async (req, res) => {
    const storeId = req.params.storeId;
    try {
        console.log(storeId);
        const response = await storeCheck(storeId);
        if(!response) {
            throw new Error(false);
        }
        res.sendStatus(200);
    } catch(e) {
        res.sendStatus(404);
    }
}

exports.generateStore = async (req, res) => {
    // req.body = sampleShopGenerator;
    // try {
    //     const storeId = req.body.storeId;
    //     const response = await storeCheck(storeId);
    //     if(!response) {
    //         return res.status(409).send({message: "Store Already exist"});
    //     }
    //     return res.send({"message": "Store Created Successfully"});
    // } catch(e) {
    //     res.status(404).send({"message": e.message});
    // }
    try {
        const storeId = await generateStore(req.body);
        res.send({message: "Store created Successfully", storeId});
    } catch(e) {
        console.log(e.message)
        res.status("409").send({message: "Some error occured"});
    }
}

exports.getAllShop = async (req, res) => {
    console.log("Getting all shop");
    getAllShop()
        .then(data => res.send(data))
        .catch(err => res.status(400).send(err));
}

exports.getSiteData = async (req, res) => {
    try {
        const data = await getAllShop(req.params.storeId);
        if(!data) {
            throw new Error(false);
        }
        res.status(200).json(data);
    } catch(e) {
        res.status(404).json({message: "No data found"});
    }
}

exports.getProductsData = async (req, res) => {
    try {
        const count = req.params.count;
        const storeId = req.params.storeId;
        const data = await getSomeProducts(count, storeId);
        res.status(200).json(data);
    } catch(e) {
        res.sendStatus(404);
    }
}
exports.getProductDetails = async (req, res) => {
    try {
        const id = req.params.id;
        const storeId = req.params.storeId;
        const data = await getSpecificItem(storeId, id);
        res.status(200).json(data);
    } catch(e) {
        res.sendStatus(404);
    }
}

exports.getProductsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const storeId = req.params.storeId;
        const data = await getProductsByCategory(storeId, category);
        res.status(200).json(data)
    } catch(e) {
        res.sendStatus(404);
    }
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
    try {
        const {userId, storeId} = req.params;
        const response = await database.findAllData(userId, storeId);
        if(!response) {
            throw new Error(false);
        }
        res.status(200).json(response);
    } catch(e) {
        res.status(404).json({message: "No data found"});
    }
};

exports.getCategories = async (req, res) => {
    try {
        const count = req.params.count;
        const storeId = req.params.storeId;
        const data = await database.getSomeCategories(count, storeId);
        if(!data) {
            throw new Error(false);
        }
        res.status(200).json(data);
    } catch(e) {
        res.sendStatus(404);
    }
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