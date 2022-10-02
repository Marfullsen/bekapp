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
      <img src="../assets/logo_beka.webp" alt="logo" style="width: 225px; margin-bottom: 25px;">
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Correo Electrónico</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input
            type="text"
            class="form-control"
            :class="inputUsuario"
            id="inputEmail"
            placeholder="Ingresa Email"
            v-model="inputUserName"
            required
          />
          <div class="invalid-feedback">
            Credenciales inválidas.
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <div class="input-group has-validation">
          <input
            :type="inputPassword.showPassword? 'text' : 'password'"
            class="form-control"
            :class="inputPassword"
            id="inputPassword"
            placeholder="Ingresa contraseña"
            autocomplete="beka-password"
            v-model="inputUserPassword"
            required
          />
          <span class="input-group-text" id="inputGroupPrepend" @click="inputPassword.showPassword = !inputPassword.showPassword">
            <img
              v-show="inputPassword.showPassword"
              src="../assets/eye-striked.svg"
              alt="hide"/>
            <img
              v-show="!inputPassword.showPassword"
              src="../assets/eye-open.svg"
              alt="show"/>
          </span>
          <div class="invalid-feedback">
            Contraseña inválida.
          </div>
        </div>
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
  data() {
  return {
    inputUsuario: {
      active: false,
      'is-invalid': false
    },
    inputPassword: {
      active: false,
      'is-invalid': false,
      showPassword: false
    }
  }
}
};
</script>

<style scoped>
section {
  display: flex;
  place-items: center;
}
</style>
