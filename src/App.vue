<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav>
    <router-link to="/">
      <img src="./assets/logo_beka.webp" alt="Logo" style="width:156px;height:60px;object-fit:cover">
    </router-link>&nbsp;
    <router-link to="/about">
      <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="black" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
    </router-link>
  </nav>
  <router-view />
</template>

<style scoped>
  nav {
    display: flex;
    justify-content: space-around;
    padding-top: 0.51rem;
  }
</style>
