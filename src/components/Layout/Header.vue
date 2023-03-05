<script setup>
const props = defineProps({
  background: {
    required: true,
    type: [String, URL]
  }
});
</script>

<template>
  <div class="relative w-full max-h-[calc(100vh-6rem)]">
    <img class="max-h-[calc(100vh-6rem)] w-full object-cover object-top" :src="props.background" alt="">
    <div class="absolute flex justify-center items-center top-0 left-0 w-full h-full opacity-70 bg-black">
    </div>
    <div class="absolute flex justify-center items-center top-0 left-0 w-full h-full">
      <slot></slot>
    </div>
  </div>
</template>