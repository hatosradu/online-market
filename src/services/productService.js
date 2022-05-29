import { Product } from '../models/product'

const DATABASE_URL = "https://online-market-a5a4b-default-rtdb.europe-west1.firebasedatabase.app/";

let productService = {
    state: null,

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
    }
}



export { productService };