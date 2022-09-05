<template>
  <div class="hello">
    <form action="">
      <input type="text" v-model="fullName" />
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      fullName: "",
    };
  },
  created() {
    this.fullName = this.storeName;
  },
  methods: {
    ...mapActions(["setLoading"]),
  },
  computed: {
    ...mapState({ storeName: "fullName" }),
    longName() {
      return this.storeName;
    },
  },
  watch: {
    fullName() {
      console.log("1");
      const res = this.setLoading(true);
      console.log(res);
      console.log(this.$store);
      this.$store.commit("SET_FULL_NAME", this.fullName);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
