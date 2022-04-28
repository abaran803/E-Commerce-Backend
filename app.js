require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const routes = require('./routes/routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

const PORT = process.env.PORT || 8080

app.get("/site-data", (req, res) => {
	res.status(200).send(siteData);
})

app.listen(PORT, () => {
	console.log("Server started at port", PORT);
})