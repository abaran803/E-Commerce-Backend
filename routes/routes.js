const express = require('express');
const router = express.Router();
const pageController = require('../Controller/pageController');

router.get("/storeCheck/:storeId", pageController.storeCheck);

router.get("/site-data/:storeId", pageController.getSiteData);

router.get("/getProducts/:storeId/:count", pageController.getProductsData);

router.get("/getProductDetails/:storeId/:id", pageController.getProductDetails);

router.get("/getProductsByCategory/:storeId/:category", pageController.getProductsByCategory);

router.post("/add-new", pageController.addNewProduct);

router.post("/remove-one", pageController.removeOneProducts);

router.post("/remove-all", pageController.removeAllProducts);

router.get("/get-items/:storeId/:userId", pageController.getItems);

router.get("/getCategories/:storeId/:count", pageController.getCategories);

router.post("/registerOwner", pageController.registerOwner);

router.post("/loginOwner", pageController.loginOwner);

router.post("/registerUser", pageController.registerUser);

router.post("/loginUser", pageController.loginUser);

router.post('/generateStore', pageController.generateStore);

module.exports = router;