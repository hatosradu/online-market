import { Product } from '../models/Product'

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
        console.log({ product });
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
                throw new Error('Network response was not OK');
            }

            return true;
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
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
                longDescroption: product.longDescroption,
                images: product.images,
            }),
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }

            return true;
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
    },

    async postProduct(product) {
        return await fetch(DATABASE_URL + `products/.json`, {
            method: 'POST',
            body: JSON.stringify(product)
        }).then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }

            return true;
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
    },

    async deleteProduct(id) {
        return await fetch(DATABASE_URL + `products/${id}.json`, {
            method: 'DELETE'
        }).then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }

            return true;
        }).catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            return false;
        });
    }
}
