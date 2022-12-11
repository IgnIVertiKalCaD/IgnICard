<template>
  <header>
    <div class="px-3 py-0 text-white header">
      <div class="container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <router-link
            class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            to="/"
          >
            <div class="image_logo">mirror-sky</div>
          </router-link>

          <ul
            class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
          >
            <!-- <li>
              <router-link to="/home" class="nav-link text-white">
                <BootstrapIcon
                  class="bi d-block mx-auto mb-1"
                  icon="house"
                  size="2x"
                />
                Главная
              </router-link>
            </li> -->
            <li>
              <router-link to="/catalog" class="nav-link text-white">
                <BootstrapIcon
                  class="bi d-block mx-auto mb-1"
                  icon="view-list"
                  size="2x"
                />
                Каталог
              </router-link>
            </li>
            <li>
              <router-link to="/servers" class="nav-link text-white">
                <BootstrapIcon
                  class="bi d-block mx-auto mb-1"
                  icon="server"
                  size="2x"
                />
                Сервера
              </router-link>
            </li>
            <li>
              <router-link to="/clients" class="nav-link text-white">
                <BootstrapIcon
                  class="bi d-block mx-auto mb-1"
                  icon="display"
                  size="2x"
                />
                Клиенты
              </router-link>
            </li>
            <div class="vr"></div>
            <li>
              <a
                href="https://discord.gg/naTFAzB45f"
                class="nav-link text-white"
              >
                <BootstrapIcon
                  class="bi d-block mx-auto mb-1"
                  icon="discord"
                  size="2x"
                />
                Discord
              </a>
            </li>
            <!--<li>
              <router-link to="/players" class="nav-link text-white">
                <BootstrapIcon
                  class="bi d-block mx-auto mb-1"
                  icon="people"
                  size="2x"
                />
                <use xlink:href="#grid"></use>
                Игрокам
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style lang="scss">
.text-decoration-none {
  background: rgba(0, 0, 0, 0) !important;
}
.text-decoration-none:hover {
  background: rgba(0, 0, 0, 0) !important;
}
</style>
