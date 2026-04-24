<template>
  <div id="app">
    <VideoWallpaper />

    <NavBar />

    <main>
      <router-view />
    </main>

    <FooterPage />
  </div>
</template>

<script>
import VideoWallpaper from "./components/VideoWallpaper.vue";
import NavBar from "./components/NavBar.vue";
import FooterPage from "./components/footerpage.vue";

export default {
  components: { VideoWallpaper, NavBar, FooterPage }
};
</script>

<style>
html, body, #app {
  margin: 0;
  height: 100%;
  background: transparent;
}

/* main layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* pushes footer down */
main {
  flex: 1;
  position: relative;
  z-index: 1;
}
</style>