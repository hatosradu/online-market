<template>
  <v-app>
    <v-app-bar app color="white" dense>
      <v-toolbar-title @click.stop="$router.push('/')">Online Market</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="onOpenCart()" class="mx-2">
        <v-badge :content="cartProductsCount" :value="cartProductsCount" color="green" overlap>
          <v-icon>mdi-cart</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon class="mx-2" @click.stop="$router.push('/admin')">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view @updateCartCount="updateCartCount" @showSnackbarMessage="showSnackbarMessage" />
    </v-main>

    <v-snackbar ref="snackBarRef" v-model="snackbar.show" :color="snackbar.color" rounded="pill">
      <div v-html='snackbar.text'></div>

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { cartService } from "./services/cartService";

export default {
  name: 'App',
  data() {
    return {
      cartProductsCount: '',
      snackbar: {
        show: false,
        text: '',
        color: null
      }
    }
  },
  created() {
    this.getCartProductsCount()
  },
  methods: {
    getCartProductsCount() {
      let products = cartService.getCart();
      if (products && products.length > 0) {
        this.cartProductsCount = products.length;
      } else {
        this.cartProductsCount = 0;
      }
    },

    onOpenCart() {
      if (Number(this.cartProductsCount) > 0) {
        this.$router.push('/cart');
      }
      else {
        this.showSnackbarMessage("info", "Your cart is empty");
      }
    },

    updateCartCount() {
      this.getCartProductsCount();
    },
    
    showSnackbarMessage(type, text) {
      this.snackbar.color = type === 'info' ? 'green' : 'red';

      this.snackbar.text = text;
      this.snackbar.show = true;
    }
  }
};
</script>
