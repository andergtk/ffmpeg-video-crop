<template>
  <div class="player-container">
    <video controls @durationchange="onVideoChange" @timeupdate="onVideoChange">
      <source :src="fileUrl" v-if="fileUrl" />
    </video>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { store } from '@/store'

const fileUrl = computed(() => {
  const url = window.URL || window.webkitURL
  return store.file && url.createObjectURL(store.file)
})

function onVideoChange(event) {
  store.loadVideoInfoFromElement(event.target)
}
</script>

<style scoped>
.player-container {
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  border-radius: 8px;
  background-color: #000;
}

.player-container video {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
