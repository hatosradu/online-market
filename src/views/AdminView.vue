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
                        <v-btn fab dark small color="indigo" v-bind="attrs" v-on="on" @click="onOpenDialog()">
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
                                    <v-combobox :items="brands" item-text="brand" item-value="brand"
                                        v-model="dialog.product.brand"></v-combobox>
                                </v-col>
                                <v-col cols="12" sm="12" md="3" lg="3">
                                    <v-combobox :items="productTypes" item-text="type" item-value="type"
                                        v-model="dialog.product.productType"></v-combobox>
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
                                                    lg="2">
                                                    <v-card>
                                                        <v-col cols="12">
                                                            <v-img v-bind:src="item.url" class="product-image"></v-img>
                                                        </v-col>
                                                        <v-col cols="12" class="d-flex justify-space-around">
                                                            <v-icon v-if="item.primary" color="orange"
                                                                style="width:36px; height:34px;">mdi-star
                                                            </v-icon>
                                                            <v-btn v-else color="grey" icon
                                                                @click="onChangePrimaryImage(index)">
                                                                <v-icon>mdi-star</v-icon>
                                                            </v-btn>

                                                            <v-btn icon color="error" @click="onDeleteImage(index)">
                                                                <v-icon>
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
                <v-data-table dense :headers="headers" :items="products" :search="search" hide-default-footer>
                    <template v-slot:item.quantityOnStock="{ item }">
                        <v-icon v-if="item.quantityOnStock < 1" color="error">
                            mdi-alert-circle
                        </v-icon>
                        {{ item.quantityOnStock }} pcs
                    </template>

                    <template v-slot:item.price="{ item }">
                        {{ item.price }} $
                    </template>

                    <template v-slot:item.actions="{ item }">
                        <v-icon class="mr-2" @click="onEditItem(item)">mdi-pencil</v-icon>
                        <v-icon v-if="item.available" color="red" @click="onchangeProductValability(item, false)">
                            mdi-delete
                        </v-icon>
                        <v-icon v-else-if="!item.available" color="success"
                            @click="onchangeProductValability(item, true)">
                            mdi-check
                        </v-icon>
                    </template>
                </v-data-table>
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
        productTypes: [],
        brands: [],
        headers: [
            { text: 'Id', value: 'id', sortable: false },
            { text: 'Type', value: 'productType' },
            { text: 'Name', value: 'name' },
            { text: 'Qty', value: 'quantityOnStock', align: 'right' },
            { text: 'Price $', value: 'price', align: 'right' },
            { text: '', value: 'actions', sortable: false, width: '90px' }
        ],
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
            let products = await productService.getProducts();
            this.products = products.sort((a, b) => Number(a.available) - Number(b.available));
        },

        async onOpenDialog() {
            this.getProductTypes();
            this.getBrands();
        },

        async getProductTypes() {
            this.productTypes = await productService.getProductTypes();
        },

        async getBrands() {
            this.brands = await productService.getBrands();
        },

        getDefaultDialogProduct() {
            return {
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
            };
        },

        onEditItem(product) {
            this.dialog.product = product;
            this.dialog.isEdit = true;
            this.dialog.isActive = true;
        },

        async onchangeProductValability(item, value) {
            if (!await productService.changeProductValability(item.id, value)) {
                this.$emit('showSnackbarMessage', 'error', ` <strong>Failed to make product ${value ? "available" : "unavailable"}.</strong>`);
            }
            else {
                item.available = value;
            }
        },

        onAddImageURL() {
            let isPrimary = false;
            let array = [...this.dialog.product.images];
            if (array.length === 0) {
                isPrimary = true;
            }

            array.push({ 'primary': isPrimary, 'url': this.dialog.product.imageUrl })
            this.dialog.product.images = array;
            this.dialog.product.imageUrl = '';
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
            if (!this.productTypes.some(e => e.type === this.dialog.product.productType)) {
                if (!confirm(`The product type ${this.dialog.product.productType} does not exist in the database. Would you like to continue and add the product type to database?`)) {
                    return;
                }

                await productService.addProductType(this.dialog.product.productType);
            }

            if (!this.brands.some(e => e.type === this.dialog.product.brand)) {
                if (!confirm(`The product brand ${this.dialog.product.brand} does not exist in the database. Would you like to continue and add the brand to database?`)) {
                    return;
                }

                await productService.addBrand(this.dialog.product.brand);
            }

            let message = '';
            let success = true;
            if (this.dialog.isEdit) {
                if (await productService.updateProduct(this.dialog.product.id, this.dialog.product)) {
                    message = 'Product updated successfully!'
                } else {
                    message = 'Failed to update product!';
                    success = false;
                }
            }
            else {
                if (await productService.postProduct(this.dialog.product)) {
                    message = 'Product added successfully!'
                } else {
                    message = 'Failed to add product!';
                    success = false;
                }
            }

            this.$emit('showSnackbarMessage', success ? 'info' : 'error', message);
            if (success) {
                this.dialog = this.getDefaultDialogProduct();
            }
        }
    }
}
</script>

<style>
.v-image__image.v-image__image--cover {
    background-size: contain;
}

.product-image {
    height: 200px;
    margin: auto;
}
</style>