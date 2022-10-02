<script setup>
import { useUserStore } from "../stores/user";

const user = useUserStore();

</script>

<template>
  <section class="container">
    <LoginForm v-if="!user.name" />
    <DashboardGrid v-else />
  </section>
</template>

<script>
import DropDown from "../components/DropDown.vue";
import LoginForm from "../components/LoginForm.vue";
import DashboardGrid from "../components/DashboardGrid.vue";

export default {
  components: {
    DropDown, LoginForm, DashboardGrid
  },
};
</script>

<style scoped></style>
