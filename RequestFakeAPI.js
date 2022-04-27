const fetch = require("node-fetch");

exports.getSomeCategories = async (count) => {
    let id = 0;
    const img = {"men's clothing": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", "women's clothing": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg", "jewelery": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "electronics": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"}
    const desc = {
        "men's clothing": "We have a greate collection of Men Clothings, with latest fashion and also very cost effective. All the famous designs present in market are available here",
        "women's clothing": "Collections of huge range of women's clothings. We have clothes of all traditions and for all occassions like Marriage, Birthday etc. And all the items are trendy and cost effective.",
        "jewelery": "We have jewellery from daily use to the jewellery, wear in the functions. We have gold, silver and copper products. All the products are tested and available with a huge discount",
        "electronics": "All the electronic products from a plug to laptops are available here. We provide home delivery of products with free setup. All the products have minimum 1-year warranty"
    }
    const categories = [];
    await fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => json.forEach(category => categories.push({category, id: id++, image: img[category], description: desc[category]})));
    return categories.slice(0, count);
}

exports.getSomeProducts = async (productCount) => {
    const products = [];
    await fetch('https://fakestoreapi.com/products?limit=' + productCount)
        .then(res => res.json())
        .then(json => json.forEach(product => products.push(product)));
    return products;
}

exports.getSpecificItem = async (id) => {
    let product;
    await fetch('https://fakestoreapi.com/products/' + id)
        .then(res => res.json())
        .then(json => { product = json });
    return product;
}

exports.getProductsByCategory = async (category) => {
    const products = [];
    await fetch('https://fakestoreapi.com/products/category/' + category)
        .then(res => res.json())
        .then(json => json.forEach(product => products.push(product)));
    return products;
}