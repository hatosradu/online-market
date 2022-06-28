<template>
    <v-container fluid>
        <v-row v-if="product === null">
            <v-progress-linear indeterminate></v-progress-linear>
        </v-row>

        <v-row no-gutters v-else class="main-container" style="padding-bottom: 35px;">
            <v-col cols="12" no-gutters class="pa-2">
                <h2>
                    {{ product.brand }} - {{ product.name }}
                </h2>
            </v-col>
            <v-col cols="12" class="mb-4">
                <v-divider></v-divider>
            </v-col>
            <v-row justify="center">
                <v-col cols="12" sm="12" md="7" class="product-images">
                    <v-carousel hide-delimiters>
                        <v-carousel-item v-for="(item, i) in product.images" :key="i" :src="item.url">
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <v-col cols="12">
                        <p style="text-align: center; font-size: large; font-weight: 500;">
                            {{ product.description }}
                        </p>
                    </v-col>

                    <v-col cols="12" v-if="!product.available">
                        <v-alert dense text type="error">Product not available anymore!</v-alert>
                    </v-col>
                    <v-row v-else>
                        <v-col cols="12" v-if="product.quantityOnStock > 0">
                            <v-alert v-if="product.quantityOnStock > 0" dense text type="success">On stock</v-alert>
                            <p style="text-align: center;color: red; font-size: 3em; font-weight: 700;">{{ product.price
                            }} $</p>
                        </v-col>

                        <v-col cols="12" v-else>
                            <v-alert dense outlined type="error">Not on stock!</v-alert>
                        </v-col>

                        <v-col cols="12" class="text-center" v-if="product.quantityOnStock > 0">
                            <v-text-field v-model="orderedQuantity" prepend-icon="mdi-minus" type="number"
                                @input="onProductInputChanged()" append-outer-icon="mdi-plus" class="pa-0" single-line
                                style="font-size:3em; line-height: 3em; height: auto; margin: auto;"
                                @click:append-outer="orderedQuantity++" @click:prepend="orderedQuantity--">
                            </v-text-field>
                        </v-col>

                        <v-col cols="12" class="text-center " v-if="product.quantityOnStock > 0">
                            <v-btn rounded color="primary" dark large @click="onAddToCart()">
                                Add to cart
                            </v-btn>
                        </v-col>
                    </v-row>

                </v-col>
                <v-col cols="10">
                    <div v-html="product.longDescription"></div>
                </v-col>
            </v-row>

        </v-row>
    </v-container>
</template>

<script>
import { productService } from "../services/productService";
import { cartService } from "../services/cartService";

export default {
    name: 'ProductView',
    data: () => ({
        product: null,
        orderedQuantity: 1
    }),
    created() {
        this.getProduct();
    },
    methods: {
        async getProduct() {
            this.product = await productService.getProduct(this.$route.params.id);
        },
        onAddToCart() {
            if (isNaN(this.orderedQuantity) || this.orderedQuantity < 1) {
                return;
            }

            if (this.orderedQuantity > this.product.quantityOnStock) {
                this.$emit('showSnackbarMessage', 'warning', `Only <strong>${this.product.quantityOnStock}</strong> pcs available on stock.`);
                this.orderedQuantity = this.product.quantityOnStock;
                return;
            }

            cartService.addProductToCart({ product: this.product, quantity: Number(this.orderedQuantity) });
            //notify app to update the cart badge count
            this.$emit('updateCartCount');
            this.$emit('showSnackbarMessage', 'info', ` <strong>${this.product.name}</strong> has been added to cart.`);
        },
        onProductInputChanged() {
            this.orderedQuantity = Number(this.orderedQuantity);
            if (isNaN(this.orderedQuantity) && this.orderedQuantity === 0) {
                this.orderedQuantity = 1;
            }

        }
    },
}
</script>

<style scoped>
.product-images {
    max-width: min(80vw, 30rem);
}

.v-text-field {
    width: 140px;
}
</style>

<style>
.v-image__image--cover {
    background-size: contain;
}
</style>

<style lang="scss" scoped>
.v-text-field ::v-deep input {
    font-size: 0.8em;
    font-weight: 400;
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
</style>