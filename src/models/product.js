export class Product{
    constructor(key, product){
        this.id = key;
        this.price = product.price;
        this.brand = product.brand;
        this.description = product.description;
        this.presentationImage = this.getPrimaryImage(product.images);
        this.images = product.images;
        this.longDescription = product.longDescription;
        this.name = product.name;
        this.productType = product.productType;
        this.quantityOnStock = product.quantityOnStock;
    }

    getPrimaryImage(images){
        if(images !== null && images.length >0){
            for(let img of images){
                if(img.primary){
                    return img.url;
                }
            }
        }

        return null;
    }
}