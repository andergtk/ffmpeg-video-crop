<template>
  <div class="timeline-container">
    <div class="timeline-controls-container">
      <button class="timeline-control timeline-undo">
        <font-awesome-icon icon="fas fa-undo" />
      </button>
      <button class="timeline-control timeline-redo">
        <font-awesome-icon icon="fas fa-redo" />
      </button>
      <button class="timeline-control timeline-crop">
        <font-awesome-icon icon="fas fa-scissors" />
        Crop
      </button>
      <div class="timeline-control-divider"></div>
      <button class="timeline-control timeline-delete" :disabled="true">
        <font-awesome-icon icon="fas fa-trash" />
      </button>
    </div>
    <div class="timeline-slices-container">
      <div class="timeline-slices"></div>
      <div class="timeline-needle">
        <div class="timeline-needle-label">
          {{ currentTimeDisplay }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoInfo: Object,
})

const currentTimeDisplay = computed(() => {
  return secondsToDisplay(props.videoInfo?.currentTime)
})

function secondsToDisplay(value) {
  const seconds = value || 0
  return new Date(seconds * 1000).toISOString().slice(14, 23)
}
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.timeline-controls-container {
  display: flex;
  align-self: end;
  gap: 8px;
}

.timeline-control {
  cursor: pointer;
  padding: 0 16px;
  height: 48px;
  min-width: 48px;
  border-radius: 8px;
  background-color: #34495e;
  color: #fff;
}

.timeline-control:hover:not([disabled]) {
  opacity: 80%;
}

.timeline-control[disabled] {
  cursor: not-allowed;
  opacity: 60%;
}

.timeline-delete {
  color: #e74c3c;
}

.timeline-control-divider {
  margin: 0 8px;
  height: 48x;
  width: 1px;
  background-color: #ffffff11;
}

.timeline-slices-container {
  position: relative;
  padding: 24px;
  width: 100%;
  height: 128px;
  border-radius: 8px;
  background-color: #34495e;
}

/* Needle */

.timeline-needle {
  cursor: pointer;
  position: absolute;
  top: 16px;
  height: 112px;
  width: 4px;
  border-radius: 2px 2px 0 0;
  background-color: #fff;
}

.timeline-needle-label {
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  padding: 4px 8px;
  border-radius: 16px;
  background-color: #ffffff;
  color: #000000aa;
  font-size: 14px;
  font-weight: bold;
}

/* Slices */

.timeline-slices {
  width: 100%;
  height: 100%;
  background-color: #ffffff11;
}
</style>
