<template>
  <section class="container" style="width: 18rem">
    <form class="container py-4 px-3 m-auto" @submit.prevent="setUser">
      <img src="../assets/logo_beka.webp" alt="logo" style="width: 225px; margin-bottom: 25px;">
      <div class="mb-3">
        <div class="alert alert-danger" :class="failedCredentials?'visible':'d-none'" role="alert">
          Credenciales incorrectas.
        </div>
        <label for="inputEmail" class="form-label">Correo Electrónico</label>
        <div class="input-group has-validation">
          <span class="input-group-text" id="inputGroupPrepend">@</span>
          <input
            type="text"
            class="form-control"
            :class="!failedCredentials||'is-invalid'"
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
        <div class="input-group has-validation is-invalid">
          <input
            :type="showPassword? 'text' : 'password'"
            class="form-control"
            :class="!failedCredentials||'is-invalid'"
            id="inputPassword"
            placeholder="Ingresa contraseña"
            autocomplete="beka-password"
            v-model="inputUserPassword"
            required
          />
          <span class="input-group-text" id="inputGroupPrepend" @click="showPassword = !showPassword">
            <img
              v-show="showPassword"
              src="../assets/eye-striked.svg"
              alt="hide"/>
            <img
              v-show="!showPassword"
              src="../assets/eye-open.svg"
              alt="show"/>
          </span>
          <div class="invalid-feedback">
            Credenciales inválidas.
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
import { useUserStore } from "../stores/user";

export default {
  setup() {
    const user = useUserStore();
    return {
      user
    };
  },
  data() {
    return {
      showPassword: false,
      inputUserName: '',
      inputUserPassword: '',
      failedCredentials: false
    }
  },
  methods: {
    setUser() {
      const auth = this.user.login(this.inputUserName, this.inputUserPassword);
      //user.$patch({ name: inputUserName, isLogged: true });
      if (auth === true) {
        this.$router.push({name: "dashboard",});
        return
      }
      this.failedCredentials = true;
      this.inputUserPassword = '';
    }
  },
};
</script>

<style scoped>
section {
  display: flex;
  place-items: center;
}
</style>
