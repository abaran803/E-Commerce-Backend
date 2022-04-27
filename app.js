const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

const siteData = require('./siteData');
let cartItems = require('./cartItems');
const { getSomeCategories, getSomeProducts, getSpecificItem, getProductsByCategory } = require('./RequestFakeAPI');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080

app.get("/site-data", (req, res) => {
	res.status(200).send(siteData);
})

app.get("/someProducts/:count", async (req, res) => {
	const count = req.params.count;
	const value = await getSomeProducts(count);
	res.json(value);
})

app.get("/getSpecificProduct/:id", async (req, res) => {
	const id = req.params.id;
	const value = await getSpecificItem(id);
	res.json(value);
})

app.get("/getProductsByCategory/:category", async (req, res) => {
	const category = req.params.category;
	const value = await getProductsByCategory(category);
	res.json(value);
})

app.get("/verify", (req, res) => {
	res.sendStatus(200)
})

app.post("/add-new/*", (req, res) => {
	const data = req.body;
	cartItems.push(data);
	return res.status(200).json(cartItems);
})

app.post("/remove-all/*", (req, res) => {
	const id = req.body.id;
	cartItems = cartItems.filter(item => item.id !== id);
	return res.status(200).send(cartItems);
})

app.get("/get-items", (req, res) => {
	return res.status(200).json(cartItems);
})

app.get("/:count", async (req, res) => {
	const count = req.params.count;
	const value = await getSomeCategories(count);
	res.json(value);
})

app.listen(PORT, () => {
	console.log("Server started at port", PORT);
})