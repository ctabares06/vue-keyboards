<script setup>
import Container from './Container.vue';
import Navbar from './Navbar.vue';
import FooterVue from './Footer.vue';
</script>

<template>
  <div class="bg-slate-900 overscroll-none">
    <router-view>
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <Container>
          <slot></slot>
        </Container>
      </main>
    </router-view>
  </div>
</template>