<template>
  <div class="mainPage">
    <div class="container-left">
      <aboutPage
        v-for="(item, index) of leftAboutText"
        :key="index"
        :card_title="item.card_title"
        :card_text="item.card_text"
        :image="item.url_picture"
      />
    </div>
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
          <div class="profile-actions">
            <b v-for="(item, index) of social" :key="index">
              <iconURL :socialURL="item" :socialNetwork="index"
            /></b>
          </div>
        </div>
      </article>
    </section>
    <div class="container-right">
      <aboutPage
      v-for="(item, index) of rightAboutText"
        :key="index"
        :card_title="item.card_title"
        :card_text="item.card_text"
        :image="item.url_picture"
      />
    </div>
  </div>

  <div class="area" >
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
    </div >
</template>

<script>
import aboutPage from "../pages/aboutPage.vue";
import cardInformation from "../UI/cardInformation.vue";
import iconURL from "../UI/iconURL.vue";

import vue3 from "@/assets/icons/vuejs.svg";
import js from "@/assets/icons/jsicon.svg";
import linux from "@/assets/icons/ubuntu-icon.svg";
import mirror_sky from "@/assets/icons/mirror-sky.png";


export default {
  name: "MainPage",
  components: { aboutPage, cardInformation, iconURL },
  data() {
    return {
      name: "IgnI",
      about: "Front-end developer",
      url_picture:
        "https://cdn.discordapp.com/avatars/709479393302675496/b62e01250f65f7db6e3c949801e6d673.webp?size=1024",
      social: {
        discord: "https://discord.com/users/709479393302675496",
        telegram: "https://t.me/IgniVer",
        youtube: "https://www.youtube.com/channel/UCJP4faBWDrAtRRoBS-XTqvA",
        github: "https://github.com/IgnIVertiKalCaD"
      },
      leftAboutText: [
        {
          card_title: "VueJS 3",
          card_text:
            "I use VueJS because it's lightweight. It's enough for me for my purposes.",
          url_picture: vue3,
        },
        {
          card_title: "JS",
          card_text:
            "JS is my favorite web development language, which has a lot of disadvantages, but this does not prevent me from being in the rating of my favorites",
          url_picture: js,
        },
      ],
      rightAboutText: [
        {
          card_title: "Linux",
          card_text: "I use Ubuntu budgie btw",
          url_picture: linux,
        },
        {
          card_title: "Mirror-sky",
          card_text: "The second of the founders of mirror-sky, who created the web version of the cloud from scratch",
          url_picture: mirror_sky,
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
