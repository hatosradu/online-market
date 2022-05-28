<template>
    <v-container fluid>
        <v-row>
            <v-col cols="12">
                <v-data-iterator :items="products" hide-default-footer>
                    <template v-slot:default="props">
                        <v-row>
                            <v-col class="d-flex align-stretch" cols="12" sm="6" md="4" lg="3"
                                v-for="item in props.items" :key="item.id">
                                <v-hover v-slot="{ hover }" open-delay="100">
                                    <v-card @click.stop="$router.push('/product/' + item.productId)"
                                        :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
                                        <v-img class="product-img" v-bind:src="item.images"></v-img>
                                        <v-card-title class="subheading justify-center font-weight-bold">
                                            {{ item.name }}
                                        </v-card-title>
                                        <p>{{ item.description }}</p>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </template>
                </v-data-iterator>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

import { productService } from '../services/productService';

export default {
    name: 'ProductsView',
    data: () => ({
        products: []
    }),
    components: {
    },
    async mounted() {
        this.products = await productService.getProducts();
    },
}
</script>

<style scoped>
.product-img {
    max-height: 250px;
    max-width: 250px;
    margin: auto;
}

p {
    text-align: center;
    margin-inline: 15px;
}
</style>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>