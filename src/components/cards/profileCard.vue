<template>
  <section class="scene">
    <article class="profile">
      <div class="rings">
        <div class="ring__ringlet"></div>
        <div class="ring__ringlet"></div>
        <div class="ring__ringlet"></div>
      </div>
      <div class="profile-image">
        <img :src="url_picture" />
      </div>
      <div class="conteiner-about">
        <h2 class="profile-username">{{ name }}</h2>
        <small class="profile-user-handle">{{ about }}</small>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "aboutPage",
  data() {
    return {
      name: "IgnI",
      about: "Front-end developer",
      url_picture:
        "https://cdn.discordapp.com/avatars/709479393302675496/b62e01250f65f7db6e3c949801e6d673.webp?size=1024",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/aboutPage.scss";
</style>

<style lang="scss"></style>
