<template>
  <h1 class="d-flex justify-content-center">
    <span class="fw-bold">{{ askedRoute }}&nbsp;</span> not&nbsp;found.
  </h1>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      askedRoute: null,
    };
  },
  created() {
    this.askedRoute = this.$route.params.pathMatch.join('/');
  },
};
</script>
