<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>&nbsp;
    <router-link to="/about">Acerca de</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
</style>
