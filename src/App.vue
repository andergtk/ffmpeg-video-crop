<template>
  <div class="page-container">
    <h1 class="page-title">FFmpeg Video Crop</h1>

    <uploader :file="file" @upload="onFileUpload" />
    <player :file="file" @timeupdate="onVideoTimeupdate" />
    <timeline :videoInfo="videoInfo" />
  </div>
</template>

<script setup>
import Player from '@/components/Player.vue';
import Timeline from '@/components/Timeline.vue';
import Uploader from '@/components/Uploader.vue';
import { ref } from 'vue';

const file = ref()
const videoInfo = ref()

function onFileUpload(event) {
  file.value = event.target.files[0]
}

function onVideoTimeupdate(event) {
  const {
    duration,
    currentTime,
  } = event.target

  videoInfo.value = {
    duration,
    currentTime,
  }
}
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
