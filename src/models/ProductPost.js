export class ProductPost {
    constructor(product) {
        this.brand = product.brand.trim();
        this.productType = product.productType.trim();
        this.name = product.name.trim();
        this.description = product.description.trim();
        this.longDescription = product.longDescription.trim();
        this.quantityOnStock = product.quantityOnStock;
        this.price = product.price;
        this.images = product.images;
        this.available = true;
    }
}