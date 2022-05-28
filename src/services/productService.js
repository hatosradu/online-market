const DATABASE_URL = "https://online-market-a5a4b-default-rtdb.europe-west1.firebasedatabase.app/";

let productService = {
    state: null,

    async getProducts() {
        let url = this.getProductsUrl() + ".json"
        let response = await fetch(url);
        return await response.json();
    },

    async getProduct(id) {
        console.log(`Fetching product with id: ${id}`)
        let result = await this.getProducts();
        let sss = result.filter(word => word.productId == id);
       
        return sss[0];
    },

    async upsertProduct(product){
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