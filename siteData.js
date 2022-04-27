module.exports = {
    data: {
        brandName: "Amazkart",
        navItems: [
            {address: "/home", name: "Home"},
            {address: "/product", name: "Product"},
            {address: "/category", name: "Category"},
            {address: "/about", name: "About Us"},
            {address: "/contact", name: "Contact Us"},
            {address: "/cart", name: "Cart"}
        ],
        categoryItems: [
            {
                image:
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
            },
            {
                image:
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
            },
            {
                image:
                    "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
            },
        ],
        latestProducts: [
            {
                image:
                    "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnR8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
                isNew: true,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star low-star', 'far fa-star low-star'],
                title: "Green Dress with details",
                price: 400,
            },
            {
                image:
                    "https://images.unsplash.com/photo-1503341733017-1901578f9f1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                isNew: false,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star low-star', 'far fa-star low-star'],
                title: "Black Dress with details",
                price: 800,
            },
            {
                image:
                    "https://images.unsplash.com/photo-1503672902329-038a842c63b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
                isNew: true,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star low-star', 'far fa-star low-star'],
                title: "Yellow Dress with details",
                price: 600,
            },
        ],
        features: [
            {
                iconClass: "fas fa-shipping-fast fa-3x mb-3 pt-2",
                title: "Free Shipping Method",
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto atque sequi molestiae, illum quaerat suscipit neque maxime velit voluptates pariatur consequuntur voluptate beatae, sapiente magnam dolores placeat provident eos! Aperiam sint veritatis ullam totam voluptatem itaque deleniti nobis explicabo eligendi?",
            },
            {
                iconClass: "fas fa-shipping-fast fa-3x mb-3 pt-2",
                title: "Secure Payment System",
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo vero hic odio, nobis possimus, magnam veniam, suscipit aliquid vitae at sit? Architecto, fuga velit facere quae rem fugiat sunt quasi.",
            },
            {
                iconClass: "fas fa-shipping-fast fa-3x mb-3 pt-2",
                title: "Free Shipping",
                desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel voluptate molestiae ullam! Minima deleniti, ipsam porro, quibusdam sint numquam voluptate fugiat nostrum necessitatibus excepturi inventore mollitia quis animi voluptatibus magnam pariatur enim voluptatum officia debitis!",
            },
        ],
        items: [
            {
                id: "p1",
                image:
                    "https://s8v8k3v9.stackpathcdn.com/wp-content/uploads/2020/11/T-Shirt-Mock-Up-Hanger-1.jpg",
                title: "Dress1 with details",
                price: 400,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'far fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p2",
                image:
                    "https://thumbs.dreamstime.com/b/hanger-blank-white-t-shirt-yellow-background-space-text-hanger-blank-white-t-shirt-yellow-background-163266760.jpg",
                title: "Dress2 with details",
                price: 300,
                stars: ['fas fa-star', 'fas fa-star', 'far fa-star', 'far fa-star', 'far fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p3",
                image:
                    "https://media.istockphoto.com/photos/black-tshirt-mockup-on-wooden-hanger-front-side-view-picture-id934210014?k=6&m=934210014&s=170667a&w=0&h=gbAhV_sd0yhkaE_cOGnmTlS_sj6d3iaBRt--c3CEWCA=",
                title: "Dress3 with details",
                price: 800,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p4",
                image:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCb9At9cE7v2qxeL4MpuCc9rStx7XKukxIQg&usqp=CAU",
                title: "Dress4 with details",
                price: 600,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p5",
                image:
                    "https://image.shutterstock.com/image-illustration/tshirt-hanger-260nw-286589201.jpg",
                title: "Dress5 with details",
                price: 500,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p6",
                image:
                    "https://us.123rf.com/450wm/peshkov/peshkov1904/peshkov190400211/120870898-hanger-with-empty-black-t-shirt-hanging-on-brick-wall-background-with-sunlight-shop-print-ad-concept.jpg?ver=6",
                title: "Dress6 with details",
                price: 900,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'far fa-star', 'far fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p7",
                image:
                    "https://c8.alamy.com/comp/WTTP8C/t-shirt-on-hanger-at-home-WTTP8C.jpg",
                title: "Dress7 with details",
                price: 300,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'far fa-star', 'far fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p8",
                image:
                    "https://c8.alamy.com/comp/2A9G6F7/hanger-with-blank-gray-t-shirt-on-yellow-background-space-for-text-2A9G6F7.jpg",
                title: "Dress8 with details",
                price: 400,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'far fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
            {
                id: "p9",
                image:
                    "https://media.istockphoto.com/photos/shirt-on-a-hanger-picture-id111972698",
                title: "Dress9 with details",
                price: 600,
                stars: ['fas fa-star', 'fas fa-star', 'fas fa-star', 'fas fa-star', 'far fa-star'],
                type: "Shirt - Custom",
                color: "Custom",
                size: "M"
            },
        ],
        categories: [
            "Category 1",
            "Category 2",
            "Category 3",
            "Category 4",
            "Category 5"
        ],
        categoriesPageData: [
            {
                id: "t1",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/6924339/pexels-photo-6924339.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t2",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/7147444/pexels-photo-7147444.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t3",
                productName: "xyz",
                productImage: "data:image/jpeg;base64,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",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t4",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/5654761/pexels-photo-5654761.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t5",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/8286101/pexels-photo-8286101.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t6",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/7389142/pexels-photo-7389142.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t7",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/7000121/pexels-photo-7000121.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t8",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/7267023/pexels-photo-7267023.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            },
            {
                id: "t9",
                productName: "xyz",
                productImage: "https://images.pexels.com/photos/7241445/pexels-photo-7241445.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                productLink: "product.html",
                productDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, sapiente."
            }
        ],
        quick: [
            {name: "About", address: "/about"},
            {name: "Offers & Discounts", address: "/"},
            {name: "Get Coupon", address: "/"},
            {name: "Contact Us", address: "/contact"},
        ],
        newProduct: [
            {name: "Woman Cloth", address: ""},
            {name: "Fashion Accessories", address: "/"},
            {name: "Get Coupon", address: "/"},
            {name: "Rubber made Toys", address: "/"},
        ],
        support: [
            {name: "Frequently Asked Questions", address: "/"},
            {name: "Terms & Conditions", address: "/"},
            {name: "Privacy Policy", address: "/"},
            {name: "Report a Payment Issue", address: "/"},
        ]
    }
}