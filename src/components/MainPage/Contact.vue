<script setup>
import { reactive, ref } from 'vue';
import TextBox from '../Inputs/TextBox.vue';
import CheckBox from '../Inputs/CheckBox.vue';
const emit = defineEmits(['handleSubmit'])

const state = ref({
  firstname: '',
  lastname: '',
  email: '',
  checks: [],
})

const submit = (e) => {
  emit('handleSubmit', { ...state.value, checks: [...state.value.checks]});
}

</script>

<template>
      <div class="flex flex-col justify-center bg-slate-800 rounded-lg max-w-md p-3 mx-auto shadow-md">
        <h1 class="text-3xl text-center">Contact Us</h1>
        <form @submit.prevent="submit">
          <TextBox id="FirstnameInput" v-model="state.firstname">
            <span class="after:content-['*'] after:ml-1 after:text-red-600">Firstname</span>
          </TextBox>
          <TextBox id="LastnameInput" v-model="state.lastname">
            <span class="after:content-['*'] after:ml-1 after:text-red-600">Lastname</span>
          </TextBox>
          <TextBox title="Email" id="EmailInput" v-model="state.email">
            <span class="after:content-['*'] after:ml-1 after:text-red-600">Email</span>
          </TextBox>
          <CheckBox title="Terms and Conditions" id="termsAndConditionsInput" value="terms" v-model="state.checks">
            <span class="text-base after:content-['*'] after:ml-1 after:text-red-600">I readed and accepted <a href="#" class="text-blue-500 focus:decoration-1 focus:decoration-blue-500">terms and conditions</a></span>
          </CheckBox>
          <CheckBox id="newslettersInput" value="newsletters" v-model="state.checks">
            <span class="text-base">Suscribe to newsletter</span>
          </CheckBox>
          <div class="mt-4">
            <button type="submit" class="outline-none w-full py-1 rounded bg-orange-400 hover:bg-orange-500 focus:bg-orange-500 ease-out duration-100">SEND</button>
          </div>
        </form>
      </div>
</template>