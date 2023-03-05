<script setup>
import { computed } from 'vue';

const currentYear = computed(() => (new Date()).toLocaleDateString('en-US', {
  year: 'numeric',
}));

</script>

<template>
<footer class="flex justify-center items-center w-100 py-10 bg-slate-700 text-neutral-100">
  <h1>&copy; all rights reserverd {{ currentYear }}</h1>
</footer>
</template>