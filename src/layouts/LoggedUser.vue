<template>
  <nav>
    <router-link to="/">
      <img src="../assets/logo_beka.webp" alt="Logo" style="width:156px;height:60px;object-fit:cover">
    </router-link>&nbsp;
    <div class="dropdown">
      <svg id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="black" class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item username-ribbon">Hola, <span>{{ user.name }}</span></a></li>
        <li><a class="dropdown-item" href="#">Cambiar clave</a></li>
        <li><a class="dropdown-item" href="#">Mi empresa</a></li>
        <li><a class="dropdown-item" href="#">Administrar usuario</a></li>
        <li><a class="dropdown-item" href="#">Administrar contacto</a></li>
        <li><a class="dropdown-item" href="#">Administrar empresa</a></li>
        <li><a class="dropdown-item" @click="logout">Salir</a></li>
      </ul>
    </div>
  </nav>
  <router-view class="router-view"/>
</template>

<script>
import { useUserStore } from "../stores/user";

  export default {
    setup() {
      const user = useUserStore()
      return {user}
    },
    methods: {
      logout() {
        useUserStore().logout()
        this.$router.push('/')
      }
    }
  };
  </script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-around;
    padding-top: 0.51rem;
  }

  .router-view {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .username-ribbon {
    background-color: #225922;
    color: #f9cd19;
  }
</style>