<script setup>
import { ref, onMounted } from 'vue';
import HeaderVue from '../components/Layout/Header.vue';
import Page from '../components/Layout/Page.vue';
import Product from '../components/Keyboards/Product.vue';
import background from '../assets/keyboard_bg.jpg';
import { fakeRequest } from '../utils/promiseMock';
import { generateKeyboards } from '../mocks/keyboards';

const products = ref({ items: [], done: false });

onMounted(() => {
  fakeRequest(generateKeyboards, 2000, true)
  .then(data => {
    products.value = data;
  })
  .catch(alert)
})
</script>

<template>
  <Page>
    <template #header>
      <HeaderVue :background="background">
        <h1 class="text-center text-6xl text-neutral-100">CheapCaps</h1>
      </HeaderVue>
    </template>
    <h1 class="text-6xl text-center">Keyboards</h1>
    <div v-if="products.done" class="grid grid-cols-4 gap-x-2 gap-y-4 mt-5">
      <Product v-for="(product, key) in products.items" v-bind="product" :id="key" :key="key" />
    </div>
    <h1 v-else class="text-6xl text-center">Loading...</h1>
  </Page>
</template>