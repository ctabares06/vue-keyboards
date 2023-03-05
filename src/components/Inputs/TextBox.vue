<script setup>
  import {computed} from 'vue';
  import { textProps } from './types'

  const props = defineProps(textProps);
  const emit = defineEmits(['update:modelValue']);

  const textValue = computed({
    get() {
      return props.modelValue;
    },
    set(value) {
      emit('update:modelValue', value)
    }
  })
</script>

<template>
  <div class="flex flex-col my-4">
    <label :for="props.id" class="text-xl mb-2">
      <slot></slot>
    </label>
    <input :id="props.id" type="text" v-model="textValue" class="bg-slate-700 border-2 rounded border-slate-400 px-2 py-1 hover:border-slate-300 focus:outline-none focus:border-orange-400">
  </div>
</template>