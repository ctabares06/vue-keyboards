<script setup>
import { inject, computed } from 'vue';
import { transfromToUSD } from '../../utils/numbers';

const props = defineProps(['image', 'id', 'title', 'description', 'price']);

const formatPrice = computed(() => transfromToUSD(props.price));
const { addCartProduct } = inject('cartProducts');

const addProduct = () => {
  addCartProduct({...props});
}

</script>

<template>
  <div class="flex flex-col bg-slate-800 rounded-lg w-full mx-auto shadow-md overflow-hidden">
        <div class="relative max-h-52 [&>.children]:hover:flex h-fit">
          <img :src="props.image" :alt="props.title" class="object-cover h-full w-full object-top">
          <div class="children hidden absolute justify-center items-center w-full h-full top-0 left-0 hover:bg-slate-800 opacity-80 ease-in-out duration-100">
            <div class="text-4xl divide-x text-neutral-200">
              <a :href="'#'+props.id" class="px-4 hover:text-neutral-50 ease-in-out duration-100">Details</a>
              <a :href="'#'+props.id" class="px-4 hover:text-neutral-50 ease-in-out duration-100" @click="addProduct">Add Cart</a>
            </div>
          </div>
        </div>
        <div class="p-3">
          <div class="flex justify-between py-2">
            <h1 class="text-2xl">{{ props.title }}</h1>
            <h1 class="text-2xl">{{ formatPrice }}</h1>
          </div>
          <p class="max-h-48 min-h-48 overflow-y-auto">{{ props.description }}</p>
        </div>
      </div>
</template>