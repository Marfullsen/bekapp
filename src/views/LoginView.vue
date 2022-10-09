<template>
  <section class="container vh80 d-flex">
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
.vh80 {
  height: 80vh;
}
</style>
