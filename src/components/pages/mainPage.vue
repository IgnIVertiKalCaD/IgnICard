<template>
  <div class="mainPage">
    <profile />
    <div class="container">
      <aboutCard
        v-for="(item, index) of AboutOfMe"
        :key="index"
        :card_title="item.card_title"
        :card_text="item.card_text"
        :image="item.url_picture"
      />
    </div>
    <social />
  </div>
  <div class="area">
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import aboutCard from "../cards/aboutCard.vue";
import profile from "../cards/profileCard.vue";
import cardInformation from "../UI/cardInformation.vue";
import social from "../UI/social.vue";

import vue3 from "@/assets/icons/vuejs.svg";
import js from "@/assets/icons/jsicon.svg";
import linux from "@/assets/icons/ubuntu-icon.svg";
import mirror_sky from "@/assets/icons/mirror-sky.png";
import docker from "@/assets/icons/docker.svg";
import figma from "@/assets/icons/figma.svg";

export default {
  name: "MainPage",
  components: { cardInformation, aboutCard, profile, social },
  data() {
    return {
      AboutOfMe: [
        {
          card_title: "VueJS 3",
          card_text:
            "I use VueJS because it's lightweight. It's enough for me for my purposes.",
          url_picture: vue3,
        },
        {
          card_title: "JS",
          card_text:
            "JS is my working web development language that does the job",
          url_picture: js,
        },
        {
          card_title: "Linux",
          card_text: "I use Ubuntu budgie btw",
          url_picture: linux,
        },
        {
          card_title: "Mirror-sky",
          card_text:
            "The second of the founders of mirror-sky, who created the web version of the cloud from scratch",
          url_picture: mirror_sky,
        },
        {
          card_title: "Docker",
          card_text:
            "I use it to facilitate deployment, as well as to improve fault tolerance",
          url_picture: docker,
        },
        {
          card_title: "Figma",
          card_text: "I use Figma as it is much simpler and available on Linux",
          url_picture: figma,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

<style lang="scss">
@import "@/assets/scss/pages/mainPage.scss";
</style>
