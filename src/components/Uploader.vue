<template>
  <label class="uploader-container" :class="{ success: !!store.file }">
    <input type="file" class="uploader-input" @change="onFileChange">

    <span class="uploader-label">
      <template v-if="store.file?.name">
        <font-awesome-icon icon="fas fa-film" size="xl" fixed-width />
        {{ store.file.name }}
      </template>
      <template v-else>
        <font-awesome-icon icon="fas fa-cloud-arrow-up" size="xl" fixed-width />
        Select your media file (.mp4, .avi, .webm, etc)
      </template>
    </span>
  </label>
</template>

<script setup>
import { store } from '@/store'

function onFileChange(event) {
  store.setFile(event.target.files[0])
}
</script>

<style scoped>
.uploader-container {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 24px;
  width: 100%;
  height: 72px;
  border-radius: 8px;
  border: 4px dashed #ffffff33;
}

.uploader-container.success {
  border-color: transparent;
  background-color: #2ecc71;
}

.uploader-label {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-weight: bold;
}

.uploader-label svg {
  transform: translateY(-1px);
}

.uploader-input {
  display: none;
}
</style>
