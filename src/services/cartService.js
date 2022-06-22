const CART_STORAGE = "cart-products";

export const cartService = {
    getCart() {
        let storage = localStorage.getItem(CART_STORAGE);
        if (storage) {
            return JSON.parse(storage);
        }

        return [];
    },

    setCart(value) {
        if (value) {
            localStorage.setItem(CART_STORAGE, JSON.stringify(value));
        }
    },

    addProductToCart({ product, quantity }) {
        let cartStorage = this.getCart();
        if (cartStorage && cartStorage.length > 0 && cartStorage.some(prod => prod.id === product.id)) {
            for (let cartItem of cartStorage) {
                if (cartItem.id === product.id) {
                    cartItem.orderedQuantity += quantity;
                }
            }
        } else {
            product.orderedQuantity = quantity;
            cartStorage.push(product);
        }

        this.setCart(cartStorage);
    },

    removeProductFromCart(id) {
        let cartStorage = this.getCart();
        if (cartStorage) {
            cartStorage = cartStorage.filter(product => product.id != id);
        }

        this.setCart(cartStorage);
    }
}