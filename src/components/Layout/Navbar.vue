<script setup>
import ShoppingCart from '../Cart/Cart.vue'
</script>

<template>
  <nav class="sticky top-0 left-0 w-full h-24 p-2 bg-gray-800 shadow-md z-10">
    <div class="flex h-full justify-between items-center divide-x">
      <router-link to="/">
        <h4 class="pr-5 text-5xl text-neutral-100 cursor-default">CheapCaps</h4>
      </router-link>
      <div class="flex flex-1 pl-5 text-2xl text-neutral-100 items-center">
        <router-link class="px-1 mx-1" to="/keyboards">keyboards</router-link>
        <router-link class="px-1 mx-1" to="/">keycaps</router-link>
        <router-link class="px-1 mx-1" to="/">discounts</router-link>
        <div class="ml-auto mr-2">
          <ShoppingCart />
        </div>
      </div>
    </div>
  </nav>
</template>