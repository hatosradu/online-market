<template>
    <!-- -->
    <v-container fuild>
        <v-row no-gutters>
            <v-col cols="12" md="7" sm="12">
                <v-list>
                    <template v-for="(item) in products">
                        <v-list-item>
                            <v-card class="flex-grow-1">
                                <v-row>
                                    <v-col cols="4">
                                        <v-img class="cartImage" v-bind:src="item.presentationImage">
                                        </v-img>
                                    </v-col>
                                    <v-col cols="8" class="d-flex flex-column">
                                        <div cols="12">
                                            {{ item.name }}
                                        </div>
                                        <div class="flex-grow-1" cols="12">
                                            <v-text-field v-model="item.orderedQuantity"
                                                @input="onProductInputChanged()" prepend-icon="mdi-minus" type="number"
                                                append-outer-icon="mdi-plus" single-line
                                                style="font-size:2em;  margin: auto;"
                                                @click:append-outer="updateQuantity(item.id, 1)"
                                                @click:prepend="updateQuantity(item.id, -1)">
                                            </v-text-field>
                                        </div>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-divider></v-divider>

                                    </v-col>
                                    <v-col class="d-flex flex-row" cols="12" style="padding-top: 0px;">
                                        <v-btn icon large color="red" @click="onRemoveProduct(item.id, item.name)">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                        <div class="card-product-price"> {{ Math.round(item.orderedQuantity * item.price
                                                * 100) / 100
                                        }} $</div>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-list-item>
                    </template>
                </v-list>
            </v-col>
            <v-col class="col-1"></v-col>
            <v-col class="d-flex flex-column" cols="12" md="4" sm="12">
                <h3 class="py-2">Order</h3>
                <v-row no-gutters class="align-content-start">
                    <v-col cols="6">Total</v-col>
                    <v-col cols="6">{{ totalPrice }} $</v-col>
                    <v-col cols="6">Transport</v-col>
                    <v-col cols="6">
                        <span>FREE</span>
                        <v-icon>mdi-truck</v-icon>
                    </v-col>
                    <v-col cols="12" class="pt-4">
                        <v-btn tile color="success" block :loading="loading" :disabled="loading"
                            @click="onFinishOrder()">
                            Finish Order
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import { productService } from "@/services/productService";
import { cartService } from "../services/cartService";

export default {
    name: 'CartView',
    data: () => ({
        products: [],
        totalPrice: 0,
        loading: false
    }),
    created() {
        this.getProducts();

    },
    methods: {
        getProducts() {
            this.products = cartService.getCart();
            this.updateTotalPrice();
        },

        updateQuantity(id, value) {
            let qty = Number(value);
            for (let product of this.products) {
                if (product.id === id) {
                    product.orderedQuantity += qty;
                }
            }

            cartService.setCart(this.products);
            this.updateTotalPrice();
        },

        updateTotalPrice() {
            let price = 0;
            for (let product of this.products) {
                price += product.price * product.orderedQuantity;
            }

            this.totalPrice = Math.round(price * 100) / 100;
        },

        onProductInputChanged() {
            for (let product of this.products) {
                product.orderedQuantity = Number(product.orderedQuantity);
            }
            this.updateTotalPrice();
            cartService.setCart(this.products);
        },

        onRemoveProduct(id, name) {
            if (confirm(`Are you sure you want to remove ${name} from your cart list?`)) {
                cartService.removeProductFromCart(id);
                this.getProducts();
            }
        },

        async onFinishOrder() {
            this.loading = true;
            if (await this.validateOrder()) {
                Array.prototype.forEach.call(this.products, async prod => {
                    await productService.updateProductQuantityOnStock(prod.id, prod.orderedQuantity);
                    cartService.removeProductFromCart(prod.id);
                    this.getProducts();
                });

                this.redirect();
            }

            this.loading = false;
        },

        async validateOrder() {
            for (let product of this.products) {
                let dbProduct = await productService.getProduct(product.id);
                if (dbProduct.quantityOnStock < product.orderedQuantity) {
                    return false;
                }
            }

            return true;
        },

        redirect() {
            this.$emit('showSnackbarMessage', 'info', ` Order placed. Redirecting to main page.`);
            setTimeout(() => {
                this.$router.push('/');
                this.$emit('updateCartCount');
            }, 3000);
        }
    }
}
</script>

<style>
.cartImage {
    max-width: 60%;
    margin: auto;
    margin: 5px 20px 30px 40px;
}

.v-list-item {
    margin-bottom: 10px;
}

.card-product-price {
    color: #404040;
    font-weight: 700;
    line-height: 15px;
    font-size: 16px;
    margin-right: 20px;
    margin-top: 5px;
}
</style>


<style lang="scss" scoped>
.v-text-field {
    max-width: 100px;
}

.v-text-field ::v-deep input {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
}

.v-text-field ::v-deep button {
    font-size: 0.8em;
}

::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.v-text-field__details {
    height: 0;
}
</style>