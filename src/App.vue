<template>
  <div class="page-container">
    <header class="page-header">
      <a href="https://andersoncamargo.com.br/ffmpeg-video-crop/" title="FFmpeg Video Crop">
        <h1 class="page-title">FFmpeg Video Crop</h1>
      </a>
      <a href="https://github.com/andergtk/ffmpeg-video-crop" title="GitHub Project Repository">
        <font-awesome-icon icon="fab fa-github" size="2x" />
      </a>
    </header>
    <uploader />
    <player />
    <timeline />
  </div>
</template>

<script setup>
import Player from '@/components/Player.vue'
import Uploader from '@/components/Uploader.vue'
import Timeline from '@/components/Timeline.vue'
</script>

<style scoped>
.page-container {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin: 0 auto;
  padding: 72px 32px;
  width: 100%;
  max-width: 1200px;
}

.page-header {
  display: flex;
  justify-content: space-between;
}

.page-title {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}
</style>
