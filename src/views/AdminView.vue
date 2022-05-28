<template>
    <v-data-table hide-default-footer :headers="headers" :items="products" :search="search">
        <template v-slot:top>
            <v-toolbar flat class="pt-4">
                <v-row>
                    <v-col cols="9">
                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                            hide-details>
                        </v-text-field>
                    </v-col>
                    <v-col cols="3">

                        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn fab dark small color="indigo" v-bind="attrs" v-on="on">
                                    <v-icon dark>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                            <v-card>
                                <v-toolbar dark color="primary">
                                    <v-btn icon dark @click="onCloseForm">
                                        <v-icon>mdi-close</v-icon>
                                    </v-btn>
                                    <v-toolbar-title>Add new product</v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-toolbar-items>
                                        <v-btn dark text @click="dialog = false">
                                            Save
                                        </v-btn>
                                    </v-toolbar-items>
                                </v-toolbar>

                                <v-form ref="form" v-model="productForm.valid" lazy-validation class="pa-4">
                                    <v-row>
                                        <v-col cols="12" sm="12" md="3" lg="3">
                                            <v-text-field v-model="productForm.brand" :counter="10" :rules="nameRules"
                                                label="Brand" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="3" lg="3">
                                            <v-text-field v-model="productForm.productType" :counter="10"
                                                :rules="nameRules" label="Product Type" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12" sm="12" md="6" lg="6">
                                            <v-text-field v-model="productForm.name" :counter="10" :rules="nameRules"
                                                label="Product Name" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="2" lg="2">
                                            <v-text-field v-model="productForm.Price" prefix="$" label="Price" required>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="2" lg="2">
                                            <v-text-field v-model="productForm.quantityOnStock" label="Quantity"
                                                suffix="pcs" required></v-text-field>
                                        </v-col>

                                        <v-col cols="12">
                                            <v-text-field v-model="productForm.description" :counter="250"
                                                :rules="nameRules" label="Description" required></v-text-field>
                                        </v-col>


                                        <v-col cols="12">
                                            <v-textarea v-model="productForm.longDescription" label="Long description">
                                            </v-textarea>
                                        </v-col>


                                    </v-row>
                                    <v-divider></v-divider>
                                    <v-row>

                                        <v-col cols="12">
                                            <v-simple-table>
                                                <template v-slot:top>
                                                    <v-text-field v-model="productForm.imageUrl" label="Add image url"
                                                        required append-icon="mdi-image-plus" single-line
                                                        @click:append="onAddImageUrl">
                                                    </v-text-field>
                                                </template>
                                                <template v-slot:default>
                                                    <thead>
                                                        <tr>
                                                            <th style="width: 30px;"></th>
                                                            <th style="width: 30px;"></th>
                                                            <th class="text-left" style="width: calc(100% - 100px)">Url
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="( item, index) in productForm.images" :key="index">
                                                            <td>
                                                                <v-checkbox v-model="item.primary"
                                                                    @click="onSetPrimaryUrl(index)">
                                                                </v-checkbox>
                                                            </td>
                                                            <td>
                                                                <v-icon class="mr-2" @click="onDeleteImageUrl(index)">
                                                                    mdi-delete
                                                                </v-icon>
                                                            </td>
                                                            <td>
                                                                <v-tooltip bottom>
                                                                    <template v-slot:activator="{ on, attrs }">
                                                                        <v-icon v-bind="attrs" v-on="on"
                                                                            @click="onCopyToClipboard(index)">
                                                                            mdi-link
                                                                        </v-icon>

                                                                    </template>
                                                                    <span>Copy to clipboard.</span>
                                                                </v-tooltip>
                                                                {{ item.url }}
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </template>
                                            </v-simple-table>
                                        </v-col>
                                    </v-row>

                                    <v-row class="px-4 mt-15">
                                        <v-btn text color="error">
                                            Cancel
                                        </v-btn>
                                        <v-spacer></v-spacer>
                                        <v-btn color="primary" @click="onFormSave()">
                                            Save
                                        </v-btn>
                                    </v-row>
                                    <v-col cols="12" sm="12" md="6" lg="6">

                                    </v-col>
                                </v-form>


                            </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </v-toolbar>
        </template>
    </v-data-table>
</template>

<script>
import { productService } from '../services/productService';

export default {
    name: 'AdminView',
    data: () => ({
        search: '',
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        headers: [
            {
                text: 'Id',
                align: 'start',
                sortable: true,
                value: 'productId',
            },
            { text: 'Brand', value: 'brand' },
            { text: 'Name', value: 'name' },
            { text: 'Price', value: 'price' },
            { text: 'QuantityOnStock', value: 'quantityOnStock' },
            { text: 'Description', value: 'description' },
        ],
        products: [],
        productForm: {
            valid: true,
            brand: '',
            productType: '',
            name: '',
            description: '',
            longDescription: '',
            imageUrl: '',
            images: []
        },

        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
    }),
    async mounted() {
        this.products = await productService.getProducts();
    },
    methods: {
        onCloseForm() {
            this.$refs.form.validate()
        },
        validate() {
            this.$refs.form.validate()
        },
        reset() {
            this.$refs.form.reset()
        },
        resetValidation() {
            this.$refs.form.resetValidation()
        },
        onAddImageUrl() {

            this.productForm.images.push({ "primary": false, "url": this.productForm.imageUrl });
            this.productForm.imageUrl = '';
        },
        onDeleteImageUrl(index) {
            this.productForm.images.splice(index, 1);
        },
        onSetPrimaryUrl(index) {
            if (confirm("Are you sure you want to set this url as primary url?")) {
                for (let item of this.productForm.images) {
                    item.primary = false;
                }
                this.productForm.images[index].primary = true;
            }
        },
        onCopyToClipboard(index) {
            navigator.clipboard.writeText(this.productForm.images[index].url);
        },
        async onFormSave(){
            console.log(this.productForm);
            await productService.upsertProduct(this.productForm);
        }
    }
}
</script>

<style scoped>
</style>
