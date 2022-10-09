<template>
  <section class="container vh100 d-flex">
    <LoginForm/>
  </section>
</template>

<script>
import LoginForm from "../components/LoginForm.vue";

export default {
  components: {
    LoginForm
  },
};
</script>

<style scoped>
.vh100 {
  height: 100vh;
}
</style>
