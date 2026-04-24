<template>
  <div class="video-wallpaper" :class="mode">
    <video autoplay muted loop playsinline class="background-video">
      <source src="https://videos.pexels.com/video-files/35573084/12708281_2560_1440_30fps.mp4" type="video/mp4">
    </video>

    <div class="video-overlay"></div>

    <!-- toggle button -->
    <button class="toggle-btn" @click="toggleMode">
      {{ mode }}
    </button>
  </div>
</template>

<script>
export default {
  name: "VideoWallpaper",
  data() {
    return {
      mode: "dark"
    };
  },
  mounted() {
    const h = new Date().getHours();
    this.mode = (h >= 6 && h < 18) ? "light" : "dark";
  },
  methods: {
    toggleMode() {
      this.mode = this.mode === "dark" ? "light" : "dark";
    }
  }
};
</script>

<style scoped>
.video-wallpaper {
  position: fixed;
  inset: 0;
  z-index: -1;
}

/* video darker + cinematic */
.background-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.3) contrast(1.1) saturate(0.9);
}

/* strong dark overlay */
.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(10, 15, 25, 0.75); /* 🔥 deeper dark */
}

/* button (make it clean) */
.toggle-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 10;
  padding: 6px 12px;
  border: none;
  background: rgba(0,0,0,0.6);
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
</style>