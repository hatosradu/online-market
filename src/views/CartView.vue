<template>
    <v-container fluid>
        <v-row style="width: 100%;">
            <v-col cols="12" sm="12" md="8" lg="8">
                <v-row class="d-flex align-stretch justify-center flex-column" style="margin:auto;">
                    <v-card v-for="product in products" :key="product.cartProduct.id" class="mt-2 pa-2 ">
                        <v-row>
                            <v-col cols="3" class="d-flex align-start">
                                <v-img v-bind:src="product.cartProduct.presentationImage"></v-img>
                            </v-col>
                            <v-col cols="9" class="ma-0 pa-2">
                                <v-col cols="12" style="font-size: 0.7rem;" class="ma-0 pa-0">
                                    {{ product.cartProduct.description }}
                                </v-col>
                                <v-row>
                                    <v-col cols="6" style="font-size: 1.2rem;" class="ma-0 pa-0 pt-2">
                                        {{ product.cartProduct.price }} <v-icon>mdi-currency-usd</v-icon>
                                    </v-col>
                                    <v-col cols="5" class="ma-0 pa-0 ">
                                        <v-text-field v-model="product.count" prepend-icon="mdi-minus"
                                            append-outer-icon="mdi-plus" class="pa-0" type="number" single-line
                                            @click:append-outer="product.count++" @click:prepend="product.count--">
                                        </v-text-field>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-row>
            </v-col>
            <v-col cols="12" sm="12" md="4" lg="4">
                asdas
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import { productService } from '../services/productService';

export default {
    name: 'CartView',
    data() {
        return {
            products: []
        }
    },
    components: {
    },
    mounted() {
        this.products = productService.getCartProducts();
        console.log(this.products);
    },
    methods: {

    },
}
</script>

<style scoped>
.cart-img {
    width: 130px;
}
</style>