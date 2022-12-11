<template>
        <a :href="socialURL">
            <button class="btn btn--icon">
              <i :class="'bi-' + socialNetwork"></i></button
          ></a>
</template>

<script>
export default {
  name: "iconWithURL",
  props: {
    socialURL: String,
    socialNetwork: String
  }
};
</script>