<template>
  <div class="profile-actions">
    <b v-for="(item, index) of social" :key="index">
      <iconURL :socialURL="item" :socialNetwork="index"
    /></b>
  </div>
</template>

<script>
import iconURL from "../UI/iconURL.vue";

export default {
  name: "socials",
  components: { iconURL },
  data() {
    return {
      social: {
        discord: "https://discord.com/users/709479393302675496",
        telegram: "https://t.me/IgniVer",
        youtube: "https://www.youtube.com/channel/UCJP4faBWDrAtRRoBS-XTqvA",
        github: "https://github.com/IgnIVertiKalCaD",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/UI/social.scss";
</style>

<style lang="scss"></style>
