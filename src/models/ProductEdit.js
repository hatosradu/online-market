export class ProductEdit {
    constructor(product = null) {
        if (product === null) {
            this.id = null;
            this.price = 0;
            this.brand = '';
            this.description = '';
            this.images = [];
            this.longDescription = '';
            this.name = '';
            this.productType = '';
            this.quantityOnStock = 0;
            this.imageUrl = '';
        } else {
            this.id = product.id !== null ? product.id : null;
            this.price = product.price !== null ? product.price : 0;
            this.brand = product.brand !== null ? product.brand : '';
            this.description = product.description !== null ? product.description : '';
            this.images = product.images !== null ? product.images : [];
            this.longDescription = product.longDescription !== null ? product.longDescription : '';
            this.name = product.name !== null ? product.name : '';
            this.productType = product.productType !== null ? product.product : '';
            this.quantityOnStock = product.quantityOnStock !== null ? product.quantityOnStock : 0;
            this.imageUrl = '';
        }
    }
}