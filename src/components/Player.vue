<template>
  <div class="player-container">
    <video ref="video" controls>
      <source :src="fileUrl" v-if="fileUrl" />
    </video>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { store, registerVideoElement } from '@/store'
import { createURLFromFile } from '@/utils'

const fileUrl = computed(() => createURLFromFile(store.file))

const video = ref(null)

onMounted(() => registerVideoElement(video.value))
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
