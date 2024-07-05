<template>
  <div class="page-container">
    <h1 class="page-title">FFmpeg Video Crop</h1>
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
  margin: 72px auto;
  width: 100%;
  max-width: 1200px;
}

.page-title {
  color: #fff;
  font-size: 48px;
  font-weight: bold;
  text-align: center;
}
</style>
