<template>
  <div class="player-container">
    <video ref="video" controls>
      <source :src="fileStore.virtualURL" v-if="fileStore.hasFile" />
    </video>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePlayerStore } from '@/stores/player'
import { useFileStore } from '@/stores/file'

const playerStore = usePlayerStore()
const fileStore = useFileStore()

const video = ref(null)

onMounted(() => playerStore.registerElement(video.value))
</script>

<style scoped lang="scss">
.player-container {
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  border-radius: 8px;
  background-color: #000;

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
}
</style>
