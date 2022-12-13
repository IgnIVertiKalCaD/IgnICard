<template>
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            <img class="image" :src="image" />
            {{ card_title }}
          </h5>
          <p class="card-text">{{ card_text }}</p>
          <!-- <a href="#" class="btn btn-primary">text</a> -->
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "aboutPage",
  data() {
    return { };
  },
  props: {
    card_title: String,
    card_text: String,
    image: String,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/pages/aboutPage.scss";
</style>

<style lang="scss"></style>
