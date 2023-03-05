<script setup>
import { computed } from 'vue';
import { transfromToUSD } from '../../utils/numbers';

const props = defineProps(['title', 'description', 'image', 'id', 'quantity', 'price']);
const emit = defineEmits(['remove']);

const calcutedPrice = computed(() => transfromToUSD(parseFloat(props.price) * props.quantity));

function removeClick() {
  emit("remove");
}

</script>

<template>
  <div class="flex flex-row justify-start align-top my-2">
    <img :src=props.image class="w-14 h-14 shrink-0">
    <div class="flex flex-col justify-start ml-2 grow">
      <h1 class="align-text-top">{{ props.title }}</h1>
      <div class="flex flex-row justify-between">
        <div>{{ props.quantity }}</div>
        <div>{{ calcutedPrice }}</div>
        <a @click="removeClick" class="">remove</a>
      </div>
      <div></div>
    </div>
  </div>
</template>