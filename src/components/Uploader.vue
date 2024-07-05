<template>
  <label class="uploader-container" :class="{ success: !!file }">
    <span class="uploader-label">
      {{ file?.name || 'Select media (.mp4, .avi, .webm, etc)' }}
    </span>
    <input type="file" class="uploader-input" @change="$emit('upload', $event)">
  </label>
</template>

<script setup>
defineProps({
  file: File,
})
</script>

<style scoped>
.uploader-container {
  cursor: pointer;
  display: block;
  padding: 24px;
  width: 100%;
  border-radius: 8px;
  border: 4px dashed #fff;
  background-color: #7f8c8d;
}

.uploader-container.success {
  border-color: transparent;
  background-color: #2ecc71;
}

.uploader-label {
  color: #fff;
  font-weight: bold;
}

.uploader-input {
  display: none;
}
</style>
