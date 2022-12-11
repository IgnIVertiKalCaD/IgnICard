<template>
  <footer class="text-center text-white">
    <div class="container p-1 pb-1">
      <section class="mb-0">
        <a
          class="btn btn-outline-light btn-floating m-0"
          href="https://discord.gg/"
          role="button"
          ><BootstrapIcon
            class="bi d-block mx-auto mb-0 mb-discord"
            icon="discord"
            size="lg"
        /></a>
        <a
          class="btn btn-outline-light btn-floating m-0 mb-github"
          href="#!"
          role="button"
          ><BootstrapIcon
            class="bi d-block mx-auto mb-0"
            icon="github"
            size="lg"
        /></a>
      </section>
    </div>
  </footer>
</template>
<script>
export default {
  name: "foot-adder",
};
</script>

<style lang="scss"></style>
