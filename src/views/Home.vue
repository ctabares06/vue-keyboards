<script setup>
import HeaderVue from '../components/Layout/Header.vue';
import Page from '../components/Layout/Page.vue';
import background from '../assets/keyboard_bg.jpg';
import Contact from '../components/MainPage/Contact.vue';

const submitForm = ({ firstname, lastname, email, checks }) => {
  console.log(firstname, lastname, email, checks);
}
</script>

<template>
  <Page>
    <template #header>
      <HeaderVue :background="background">
        <h1 class="text-center text-6xl text-neutral-100">CheapCaps</h1>
      </HeaderVue>
    </template>
      <Contact @handle-submit="submitForm" />
  </Page>
</template>