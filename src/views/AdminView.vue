<template>
    <v-container fluid>
        <v-row class="d-flex">
            <v-col cols="8" align-self="center">
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                </v-text-field>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2" align-self="center">
                <v-dialog v-model="dialog.isActive" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn fab dark small color="indigo" v-bind="attrs" v-on="on">
                            <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                    </template>
                    <v-card>
                        <v-toolbar dark color="primary">                           
                            <v-toolbar-title>Add new product</v-toolbar-title>                           
                        </v-toolbar>

                        <v-form ref="form" lazy-validation class="pa-4" v-if="dialog.product != null">
                            <v-row>
                                <v-col v-if="dialog.isEdit" cols="12" sm="12" md="3" lg="3">
                                    <v-text-field v-model="dialog.product.id" readonly label="Id" disabled required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    <v-text-field v-model="dialog.product.brand" label="Brand" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    <v-text-field v-model="dialog.product.productType" label="Product Type" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="12" lg="12">
                                    <v-text-field v-model="dialog.product.name" label="Product Name" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="2" lg="2">
                                    <v-text-field v-model="dialog.product.price" prefix="$" label="Price" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" sm="12" md="2" lg="2">
                                    <v-text-field v-model="dialog.product.quantityOnStock" label="Quantity" suffix="pcs"
                                        required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="dialog.product.description" label="Description" required>
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="dialog.product.longDescription" label="Long description">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field v-model="dialog.product.imageUrl" label="Add image url" required
                                        append-icon="mdi-image-plus" single-line @click:append="onAddImageURL()">
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" class="mb-4">
                                    <v-data-iterator disable-filtering disable-pagination disable-sort
                                        hide-default-footer :items="dialog.product.images">
                                        <template v-slot:default="props">
                                            <v-row>
                                                <v-col v-for="(item, index) in props.items" :key="item.name"
                                                    class="d-flex justify-center align-stretch" cols="6" sm="6" md="3"
                                                    lg="3">
                                                    <v-card>
                                                        <v-col cols="12">
                                                            <v-img v-bind:src="item.url"></v-img>
                                                        </v-col>
                                                        <v-col cols="12" class="d-flex justify-space-around">
                                                            <v-icon v-if="item.primary" color="orange"
                                                                style="width:36px; height:34px;">mdi-star
                                                            </v-icon>
                                                            <v-btn v-else color="grey" icon
                                                                @click="onChangePrimaryImage(index)">
                                                                <v-icon>mdi-star</v-icon>
                                                            </v-btn>

                                                            <v-btn icon color="error">

                                                                <v-icon @click="onDeleteImage(index)">
                                                                    mdi-delete
                                                                </v-icon>
                                                            </v-btn>
                                                        </v-col>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                        </template>
                                    </v-data-iterator>
                                </v-col>
                                <v-col cols="12" md="2" lg="2" sm="12">
                                    <v-btn color="success" block @click="onSave()">Save</v-btn>
                                </v-col>
                                <v-spacer></v-spacer>
                                <v-col cols="12" md="2" lg="2" sm="12">
                                    <v-btn color="error" block @click="dialog.isActive = false">Cancel</v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-card>
                </v-dialog>
            </v-col>
            <v-col cols="12">
                <v-simple-table height="300px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center" style="width:120px;">

                                </th>
                                <th class="text-left">
                                    Id
                                </th>
                                <th class="text-left">
                                    Name
                                </th>
                                <th class="text-left">
                                    Qty
                                </th>
                                <th class="text-left">
                                    Price
                                </th>
                                <th style="width:max-content;">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in products" :key="item.id">
                                <td>
                                    <v-icon class="mr-2" @click="onEditItem(item)">
                                        mdi-pencil
                                    </v-icon>
                                    <v-icon @click="onDeleteItem(item)">
                                        mdi-delete
                                    </v-icon>
                                </td>

                                <td>{{ item.id }}</td>
                                <td>{{ item.name }}</td>
                                <td>{{ item.quantityOnStock }}</td>
                                <td>$ {{ item.price }} </td>
                                <td></td>

                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { productService } from "../services/productService";

export default {
    name: 'AdminView',
    data: () => ({
        search: '',
        products: [],
        dialog: {
            isActive: false,
            product: {
                brand: "",
                description: "",
                id: null,
                imageUrl: "",
                images: [],
                longDescription: "",
                name: "",
                price: 0,
                productType: "",
                quantityOnStock: 0
            },
            isEdit: false
        }
    }),
    mounted() {
        this.getProducts();
    },
    methods: {
        async getProducts() {
            this.products = await productService.getProducts();
        },

        getDefaultDialogProduct() {
            return {
                brand: "",
                description: "",
                id: null,
                imageUrl: "",
                images: Array[0],
                longDescription: "",
                name: "",
                price: 0,
                productType: "",
                quantityOnStock: 0
            };
        },

        onEditItem(product) {
            this.dialog.product = product;
            this.dialog.isEdit = true;
            this.dialog.isActive = true;
        },

        onDeleteItem(product) {
            this.deleteProduct(product);
        },

        onAddImageURL() {
            console.log(this.dialog.product.images);
            let array = [...this.dialog.product.images];
            console.log(array);
            array.push({ 'primary': false, 'url': this.dialog.product.imageUrl })
            this.dialog.product.images = array;
        },

        onChangePrimaryImage(index) {
            for (let item of this.dialog.product.images) {
                item.primary = false;
            }
            this.dialog.product.images[index].primary = true;
        },

        onDeleteImage(index) {
            if (this.dialog.product.images[index].primary) {
                if (!confirm(`You are trying to remove a primary image : ${this.dialog.product.images[index].url}. Are you sure you want to continue?`)) {
                    return;
                }
            }
            this.dialog.product.images.splice(index, 1);
        },

        async onSave() {
            if (this.dialog.isEdit) {
                await productService.updateProduct(this.dialog.product.id, this.dialog.product);
            }
            else {
                await productService.postProduct(this.dialog.product);
            }
        }
    }
}
</script>

<style scoped>
th {
    width: auto;
}
</style>