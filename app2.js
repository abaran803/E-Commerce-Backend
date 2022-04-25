const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser')
const app = express();

app.use(cors());
app.options('*', cors());

const PORT = 3001;
let allProducts = [];

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(201).send({ "User": "Ayush" })
})

app.get('/show-item/:id', (req, res) => {
    const id = req.params.id;
    console.log(typeof(id))
    console.log(id);
    const product = allProducts.find(item => item.id === id);
    console.log(product);
    if(!product) return res.sendStatus(400);
    res.status(201).send(product);
})

app.get('/show-items', (req, res) => {
    res.status(201).send(allProducts);
})

app.get('/remove-one/:id', (req,res) => {
    const id = req.params.id;
    const ind = allProducts.findIndex(product => product.id === id);
    if(ind === -1) return res.sendStatus(409);
    if(allProducts[ind].quantity === 1) {
        return res.redirect('/remove-all/'+id);
    }
    allProducts[ind].quantity--;
    res.sendStatus(200);
})

app.get('/remove-all/:id', (req,res) => {
    const id = req.params.id;
    const ind = allProducts.findIndex(product => product.id === id);
    if(ind === -1) return res.sendStatus(409);
    allProducts = allProducts.filter(product => product.id !== id);
    res.sendStatus(200);
})

app.post('/add-item', (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const image = req.body.image;
    const totalPrice = req.body.totalPrice;
    const quantity = req.body.quantity;
    const type = req.body.type;
    const color = req.body.color;
    const size = req.body.size;
    const itemIndex = allProducts.findIndex(item => item.id === id);
    if(itemIndex !== -1) {
        allProducts[itemIndex].quantity++;
    } else {
        allProducts.push({ id, title, image, totalPrice, quantity, type, color, size })
    }
    console.log("Item added to Cart");
    res.sendStatus(201);
})

app.post('/remove-item', (req, res) => {
    const id = req.body.id;
    const itemIndex = allProducts.findIndex(item => item.id === id);
    if(itemIndex === -1) return res.sendStatus(404);
    if(allProducts[itemIndex].quantity !== 1) {
        allProducts[itemIndex].quantity--;
    } else {
        allProducts = allProducts.filter(item => item.id !== id);
    }
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log("Server started at " + PORT);
})