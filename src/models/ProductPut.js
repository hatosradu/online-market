export class ProductPut {
    constructor(key, product) {
        this.id = key ?? null;
        this.price = product.price;
        this.brand = product.brand;
        this.description = product.description;
        this.images = product.images;
        this.longDescription = product.longDescription;
        this.name = product.name;
        this.productType = product.productType;
        this.quantityOnStock = product.quantityOnStock;
    }
}