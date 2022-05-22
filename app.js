require('dotenv').config()
const express = require("express");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
const routes = require('./routes/routes');
const siteData = require('./siteData');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
	console.log("Server started at port", PORT);
})