<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
import { useRouter, useRoute } from "vue-router";

const user = useUserStore();
const inputUserName = ref("");
const inputUserPassword = ref("");
const router = useRouter();
const route = useRoute();

function setUser() {
  user.login(inputUserName, inputUserPassword);
  //user.$patch({ name: inputUserName, isLogged: true });
  router.push({
    name: "dashboard",
  });
}
</script>

<template>
  <section class="container" style="width: 18rem">
    <form class="container py-4 px-3 m-auto" @submit.prevent="setUser">
      <img src="../assets/logo_beka.webp" alt="logo" style="width: 225px">
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Correo Electrónico</label>
        <input
          type="text"
          class="form-control"
          id="inputEmail"
          placeholder="Ingresa Email"
          v-model="inputUserName"
        />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Ingresa contraseña"
          autocomplete="beka-password"
          v-model="inputUserPassword"
        />
      </div>
      <div class="mb-3 d-flex flex-row-reverse">
        <a href="/">Olvidé la clave</a>
      </div>
      <div class="d-flex justify-content-center">
        <button type="submit" class="btn btn-primary px-4">Ingresar</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
section {
  display: flex;
  place-items: center;
}
</style>
