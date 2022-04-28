const express = require('express');
const router = express.Router();
const pageController = require('../Controller/pageController');

router.get("/site-data/:ownerId", pageController.getSiteData);

router.get("/getProducts/:ownerId/:count", pageController.getProductsData);

router.get("/getProductDetails/:ownerId/:id", pageController.getProductDetails);

router.get("/getProductsByCategory/:ownerId/:category", pageController.getProctsByCategory);

router.post("/add-new", pageController.addNewProduct);

router.post("/remove-all", pageController.removeAllProducts);

router.get("/get-items/:ownerId/:userId", pageController.getItems);

router.get("/getCategories/:ownerId/:count", pageController.getCategories);

module.exports = router;