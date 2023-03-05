<script setup>
import { computed } from 'vue';
import { checkProps } from './types';

const props = defineProps(checkProps);
const emit = defineEmits(['update:modelValue']);

const checkValue = computed({
  get(){
    return props.modelValue
  },
  set(value){
    emit('update:modelValue', value);
  }
})
</script>

<template>
  <div class="flex flex-row items-center">
    <input :id="props.id" type="checkbox" :value="props.value" v-model="checkValue" class="appearance-none relative w-5 h-5 bg-neutral-100 rounded-sm border-2 border-neutral-100 hover:border-orange-400 focus:outline-none focus:border-orange-400 checked:bg-orange-400 checked:border-orange-400 checked:before:absolute checked:before:inline checked:before:text-lg checked:before:top-0 checked:before:translate-y-[-7px] checked:before:content-['\2713']">
    <label :for="props.id" class="ml-2 text-lg">
      <slot></slot>
    </label>
  </div>
</template>