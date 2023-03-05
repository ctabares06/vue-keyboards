<script setup>
import { reactive, provide } from 'vue';
import Navbar from './components/Layout/Navbar.vue';
import BaseFooter from './components/Layout/Footer.vue';

const cartProducts = reactive({});

const addCartProduct = (product) => {
  if (cartProducts[product.id]) {
    cartProducts[product.id].quantity++;
    return;
  }
  cartProducts[product.id] = {...product, quantity: 1};
}

const removeCartProduct = (productId) => {
  delete cartProducts[productId];
}

provide('cartProducts', {
  cartProducts,
  addCartProduct,
  removeCartProduct,
})

</script>

<template>
  <Navbar />
  <router-view></router-view>
  <BaseFooter />
</template>
