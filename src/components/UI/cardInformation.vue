<template>
    <div class="card information">
        <slot></slot>
    </div>
</template>

<script>
import aboutPage from "../pages/aboutPage.vue";
export default {
  name: "MainPage",
  components: { aboutPage },
  data() {
    return {
     
    };
  },
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
@import "@/assets/scss/pages/mainPage.scss";
</style>