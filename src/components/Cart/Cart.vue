<script setup>
import { ref, watchEffect, inject, computed } from 'vue';
import { ShoppingCartIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import CartItem from './CartItem.vue';

const showModal = ref(false);
const { cartProducts, removeCartProduct } = inject('cartProducts');

const cartIsNotEmpty = computed(() => Object.keys(cartProducts).length !== 0);

const toggleModal = () => {
  showModal.value = !showModal.value
}

watchEffect(() => {
  if(showModal.value) {
    document.body.style.overflow = "hidden"
  } else {
    document.body.style.overflow = "auto"
  }
})

</script>

<template>
  <ShoppingCartIcon class="w-10 h-10 cursor-pointer" @click="toggleModal" />
  <Teleport to="body">
    <Transition name="opacity">
      <div v-if="showModal" class="fixed top-0 left-0 w-full h-full bg-black z-20 opacity-30" @click="toggleModal">
      </div>
    </Transition>
    <Transition name="cart">
      <div v-if="showModal" class="fixed w-full max-w-xs h-full top-0 right-0 p-3 text-neutral-100 bg-slate-800 z-20">
        <div class="relative flex flex-col h-full">
          <XMarkIcon class="w-10 h-10 cursor-pointer" @click="toggleModal" />
          <div class="flex justify-center items-center rounded-full border-4 border-neutral-100 w-36 h-36 mx-auto shrink-0">
            <ShoppingCartIcon class="w-20 h-20" />
          </div>
          <h1 class="text-center text-5xl pt-1">Cart</h1>
          <div v-if="!cartIsNotEmpty" class="text-xl pt-5">
            Currently you have no items in the cart
          </div>
          <div v-else class="flex flex-col text-lg overflow-y-scroll shrink">
            <CartItem v-for="product in cartProducts" v-bind="product" @remove="() => removeCartProduct(product.id)" :key="product.id" />
          </div>
          <button class="outline-none w-full py-1 mt-4 rounded bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 ease-out duration-100">BUY</button>
        </div>
      </div>
    </Transition>
</Teleport>
</template>

<style scoped>
.opacity-enter-from, 
.opacity-leave-to {
  opacity: 0;
}

.opacity-enter-active, 
.opacity-leave-active {
  transition: all 0.2s ease;
}

.cart-enter-from, 
.cart-leave-to {
  transform: translateX(320px);
}

.cart-enter-active, 
.cart-leave-active {
  transition: all 0.3s ease;
}


</style>