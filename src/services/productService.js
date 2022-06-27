import { Product } from '../models/Product'
import { ProductPost } from '../models/ProductPost'
import { ProductType } from '../models/ProductType';
import { Brand } from '../models/Brand';

const DATABASE_URL = "https://online-market-a5a4b-default-rtdb.europe-west1.firebasedatabase.app/";

export const productService = {
    async getProducts() {
        let result = [];
        let response = await fetch(DATABASE_URL + "products/.json");
        let jsonResponse = await response.json();
        if (jsonResponse === null) {
            return result;
        }

        let array = Object.entries(jsonResponse);
        for (let [i, elem] of array) {
            result.push(new Product(i, elem));
        }

        return result;
    },

    async getProduct(id) {
        let response = await fetch(DATABASE_URL + `products/${id}.json`);
        let jsonResponse = await response.json();
        if (jsonResponse === null) {
            return null;
        }

        return new Product(id, jsonResponse);
    },

    async updateProductQuantityOnStock(id, quantity) {
        let product = await this.getProduct(id);
        let newStock = product.quantityOnStock - quantity;
        if (newStock < 0) {
            throw new Error('Negative stock error.')
        }

        return await fetch(DATABASE_URL + `products/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({
                quantityOnStock: newStock
            }),
        }).then(response => {
            if (!response.ok) {
                return false;
            }

            return true;
        });
    },

    async updateProduct(id, product) {
        return await fetch(DATABASE_URL + `products/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({
                brand: product.brand,
                productType: product.productType,
                name: product.name,
                price: product.price,
                quantityOnStock: product.quantityOnStock,
                description: product.description,
                longDescription: product.longDescription,
                images: product.images,
            }),
        }).then(response => {
            if (!response.ok) {
                return false;
            }

            return true;
        });
    },

    async postProduct(product) {
        let body = new ProductPost(product);
        return await fetch(DATABASE_URL + `products/.json`, {
            method: 'POST',
            body: JSON.stringify(body)
        }).then(response => {
            if (!response.ok) {
                return false;
            }

            return true;
        });
    },

    async changeProductValability(id, value) {
        return await fetch(DATABASE_URL + `products/${id}.json`, {
            method: 'PATCH',
            body: JSON.stringify({
                available: value
            }),
        }).then(response => {
            if (!response.ok) {
                return false;
            }

            return true;
        });
    },

    async getProductTypes() {
        let result = [];
        let response = await fetch(DATABASE_URL + "productTypes/.json");
        let jsonResponse = await response.json();
        if (jsonResponse === null) {
            return result;
        }

        let array = Object.entries(jsonResponse);
        for (let [i, elem] of array) {
            result.push(new ProductType(i, elem));
        }

        return result;
    },

    async addProductType(productType) {
        return await fetch(DATABASE_URL + `productTypes/.json`, {
            method: 'POST',
            body: JSON.stringify(productType)
        }).then(response => {
            if (!response.ok) {
                return false;
            }

            return true;
        });
    },

    async getBrands() {
        let result = [];
        let response = await fetch(DATABASE_URL + "brands/.json");
        let jsonResponse = await response.json();
        if (jsonResponse === null) {
            return result;
        }

        let array = Object.entries(jsonResponse);
        for (let [i, elem] of array) {
            result.push(new Brand(i, elem));
        }

        return result;
    },

    async addBrand(brand) {
        return await fetch(DATABASE_URL + `brands/.json`, {
            method: 'POST',
            body: JSON.stringify(brand)
        }).then(response => {
            if (!response.ok) {
                return false;
            }

            return true;
        });
    }
}
