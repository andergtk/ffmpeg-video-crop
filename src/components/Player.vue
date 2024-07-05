<template>
  <div class="player">
    <video controls ref="video" @timeupdate="$emit('timeupdate', $event)">
      <source :src="fileUrl" v-if="fileUrl" />
    </video>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  file: File
})

const fileUrl = computed(() => {
  const url = window.URL || window.webkitURL
  return props.file && url.createObjectURL(props.file)
})
</script>

<style scoped>
.player {
  position: relative;
  width: 100%;
  padding-bottom: 50%;
  border-radius: 8px;
  background-color: #000;
}

.player video {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
