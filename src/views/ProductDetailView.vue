<template>
    <v-container fluid>
        <v-row v-if="this.product === null">
            <v-progress-linear indeterminate></v-progress-linear>
        </v-row>

        <v-row no-gutters v-else class="main-container">
            <v-col cols="12" no-gutters class="pa-2">
                <h2>
                    {{ this.product.brand }} - {{ this.product.name }}
                </h2>
            </v-col>
            <v-col cols="12" class="mb-4">
                <v-divider></v-divider>
            </v-col>
            <v-col cols="12">
                <v-row justify="center">
                    <v-col cols="12" sm="12" md="7" class="product-images">
                        <v-img v-bind:src="product.images"></v-img>
                    </v-col>

                    <v-col cols="12" sm="12" md="5">
                        <v-col cols="12">
                            <p style="text-align: center; font-size: large; font-weight: 500;">
                                {{ product.description }}
                            </p>
                        </v-col>
                        <v-col cols="12">
                            <p style="text-align: center;color: red; font-size: 3em; font-weight: 700;">
                                {{ product.price }}
                            </p>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn rounded color="primary" dark large>
                                Add to cart
                            </v-btn>
                        </v-col>

                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-col v-for="(item, i) in product.specification" :key="i">
                    <v-col cols="12" md="4">

                        {{ i }}
                        {{ item }}
                    </v-col>
                </v-col>

            </v-col>

        </v-row>

    </v-container>
</template>

<script>
import { productService } from '../services/productService';
//import ProductSpecification from '../models/productSpecification';

export default {
    name: 'ProductDetailView',
    data: () => ({
        product: null,
        specifications: null
    }),
    components: {
    },
    async mounted() {
        this.product = await productService.getProduct(this.$route.params.id);
        /*
        if (this.product.specification != null) {
              for (let [key, value] of Object.entries(this.product.specification)) {
                  let sss = new ProductSpecification(key, value);
                  console.log(sss);
  
              }
  
          }
  */

    }

}
</script>

<style scoped>
.product-images {
    max-width: 35em;
}
</style>

