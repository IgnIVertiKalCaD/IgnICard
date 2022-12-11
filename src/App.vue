<template>
  <div class="root">
    <transition name="fade" style="position: fixed">

    </transition>

      <router-view />

    </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      show: true,
    };
  },
  created() {
    window.addEventListener("beforeunload", this.leaving);
  },
  mounted() {
    if (this.show) this.showToggle();
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
    leaving() {
      if (localStorage) {
        localStorage.clear();
      }
    },
  },
};
</script>

<style lang="scss">
@import "../src/assets/scss/main.scss";

</style>
