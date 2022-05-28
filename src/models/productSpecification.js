class ProductSpecification {
    constructor(key, value) {
        if (key === null || value === null) {
            throw new Error("Failed to map product specification. Parameter can not be null.");
        }
        else {
            this.header = key;
            this.properties = this.getProperties(value);
        }
    }

    getProperties(object) {
        let result = [];
        for (let [key, value] of Object.entries(object)){
            result.push(new Property(key, value));
        }

        return result;
    }
}

class Property {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

export default ProductSpecification;