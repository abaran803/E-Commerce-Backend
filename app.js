const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");

const siteData = require('./siteData');
let cartItems = require('./cartItems');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 8080

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

app.get("/site-data", (req, res) => {
	res.status(200).send(siteData);
})

app.listen(PORT, () => {
	console.log("Server started at port", PORT);
})