<script setup>
import { useUserStore } from "./stores/user";
const user = useUserStore();
window.stores = user
</script>

<template>
  <logged-user v-if="user.isLogged"/>
  <Default v-else>
    <login-view/>
  </Default>
</template>

<script>
import Default from "./layouts/Default.vue";
import LoginView from "./views/LoginView.vue";
import LoggedUser from "./layouts/LoggedUser.vue";

export default {
  components: {
    Default, LoginView, LoggedUser
  },
};
</script>

<style scoped></style>
