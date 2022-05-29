<template>
  <v-app>
    <v-app-bar app height="60px">
      <v-toolbar-title @click.stop="$router.push('/')">Online Market</v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/products">Products</v-btn>
        <v-btn text to="/about">About Us</v-btn>
        <v-btn text to="/admin">Admin</v-btn>
      </div>
      <div class="hidden-md-and-up">
        <v-menu>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click.stop="drawer = !drawer">
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-btn>
          </template>
        </v-menu>
      </div>
      <v-badge :content="cartItemsCount" :value="cartItemsCount" color="green" overlap>
        <v-btn icon text to="/cart" small>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="(item, i) in menuItems" :key="i" :to="item.to">
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <v-main>
      <router-view @updateCart="onUpdateCart()" />
    </v-main>
  </v-app>
</template>

<script>
import { productService } from './services/productService';

export default {
  name: 'App',

  data: () => ({
    menuItems: [
      {
        to: "/",
        name: "Home"
      },
      {
        to: "/products",
        name: "Products"
      },
      {
        to: "/about",
        name: "About Us"
      },
      {
        to: "/admin",
        name: "Admin"
      }
    ],
    drawer: false,
    group: 0,
    cartItemsCount: 0
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
  mounted() {
    this.onUpdateCart();

    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://online-market:Qcsdp1sDfLP7rRYm@onlinemarket.hf3spby.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    client.connect(err => {
      const collection = client.db("online-market").collection("Products");
      console.log(collection);

      console.log(err);
      // perform actions on the collection object
      client.close();
    });

  },
  methods: {
    onUpdateCart() {
      console.log("updated");

      let cart = productService.getCartProducts();
      this.cartItemsCount = cart.length;
    }
  },
};
</script>

<style>
body {
  height: 100vh;
  overflow-y: hidden !important;
}

.v-main {
  padding: 0px !important;
  padding: 0;
  height: calc(100vh - 60px);
  overflow-y: auto;
  margin-top: 60px;
}


body::-webkit-scrollbar {
  display: none;
}
</style>
