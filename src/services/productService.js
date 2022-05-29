import { Product } from '../models/product'

const DATABASE_URL = "https://online-market-a5a4b-default-rtdb.europe-west1.firebasedatabase.app/";




let productService = {
    cart: [],

    init() {
        this.getCartItems();
    },

    async getProducts() {
        let result = [];
        let response = await fetch(this.getProductsUrl() + ".json");
        let jsonResponse = await response.json();

        let array = Object.entries(jsonResponse);
        for (let [i, elem] of array) {
            result.push(new Product(i, elem));
        }

        return result;
    },

    async getProduct(id) {
        console.log(`Fetching product with id: ${id}`);
        let url = this.getProductsUrl() + id + ".json"
        let response = await fetch(url);
        let jsonResponse = await response.json();
        return new Product(id, jsonResponse);
    },

    async upsertProduct(product) {
        let url = this.getProductsUrl() + ".json"
        await fetch(url, {
            method: "POST",
            body: JSON.stringify(product)
        });
    },

    getProductsUrl() {
        return DATABASE_URL + "products/"
    },

    addProductToCart(product) {
        let updated = false;
        if (this.cart.length > 0) {
            for (let index = 0; index < this.cart.length; index++) {
                if (this.cart[index].cartProduct.id === product.id) {
                    this.cart[index].count++;
                    updated = true;
                }
            }

            if (!updated) {
                this.cart.push({ count: 1, cartProduct: product })
            }
        }
        else {
            console.log("cart has no elem")
            this.cart.push({ count: 1, cartProduct: product })
        }
        this.setCartItems();
    },

    getCartProducts() {
        this.getCartItems();
        return this.cart;
    },
    getCartItems() {
        if (localStorage.getItem("cart")) {
            let jsonCart = JSON.parse(localStorage.getItem("cart"));
            this.cart = jsonCart;
            console.log(this.cart);
        }
    },

    setCartItems() {
        console.log(this.cart);
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }
}

export { productService };