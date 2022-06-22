<template>
    <v-container fluid>
        <v-data-iterator :items="products" hide-default-footer>
            <template v-slot:default="props">
                <v-row>
                    <v-col v-for="item in props.items" :key="item.id" class="d-flex justify-center align-stretch pa-4"
                        cols="12" sm="4" md="3" lg="2">
                        <v-hover v-slot="{ hover }" open-delay="100">
                            <v-card class=" text-align-center" :elevation="hover ? 16 : 2"
                                :class="{ 'on-hover': hover }" @click.stop="onProductClick(item)">
                                <v-img class="product-image" v-bind:src="item.presentationImage"></v-img>
                                <v-card-title class="subheading justify-center font-weight-bold">
                                    <p
                                        style="word-break: keep-all; overflow: hidden; text-overflow: ellipsis; height: 60px;">
                                        {{ item.name }}</p>
                                </v-card-title>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </template>
        </v-data-iterator>
    </v-container>
</template>

<script>
import { productService } from "../services/productService";

export default {
    name: 'ProductsView',
    data: () => ({
        products: []
    }),
    created() {
        this.getProducts();
    },
    methods: {
        async getProducts() {
            this.products = await productService.getProducts();
        },
        onProductClick(item) {
            this.$router.push('/product/' + item.id)
        }
    }
}
</script>

<style scoped>
.text-align-center {
    text-align: center;
    padding-top: 15px;
}

.product-image {
    max-width: 90%;
    height: 200px;
    margin: auto;
}
</style>


<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>