<template>
  <div id="demo">{{ fullName }}</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "InputTest",
  computed: {
    ...mapGetters(["fullName"]),
  },
};
</script>

<style></style>
