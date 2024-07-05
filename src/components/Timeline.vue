<template>
  <div class="timeline-container" :class="{ deactive: !file }">
    <div class="timeline-controls-container">
      <button class="timeline-control timeline-undo" :disabled="!canUndo" @click="onUndoClick">
        <font-awesome-icon icon="fas fa-undo" />
      </button>

      <button class="timeline-control timeline-redo" :disabled="!canRedo" @click="onRedoClick">
        <font-awesome-icon icon="fas fa-redo" />
      </button>

      <button class="timeline-control timeline-crop" :disabled="!canCrop" @click="onCropClick">
        <font-awesome-icon icon="fas fa-scissors" />
        Crop
      </button>

      <div class="timeline-control-divider"></div>

      <button class="timeline-control timeline-delete" @click="onToggleDeleteClick">
        <font-awesome-icon icon="fas fa-trash" />
      </button>
    </div>

    <div class="timeline-slices-container">
      <div class="timeline-inner" ref="timeline">
        <div class="timeline-slices">
          <div class="timeline-slice" :class="{ deleted: timeRange.deleted }" v-for="timeRange in positionatedTimeRanges" :style="`left: ${timeRange.left}px; width: ${timeRange.width}px;`"></div>
        </div>
        <div class="timeline-needle" ref="needle" :style="`left: ${needlePosition}px;`">
          <div class="timeline-needle-label">
            {{ formattedNeedleSeconds }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import {
  store,
  canCrop,
  canRedo,
  canUndo,
  undo,
  redo,
  cropAtNeedle,
  setNeedleSeconds,
  toggleDeleteAtNeedle,
} from '@/store'
import {
  formatSeconds,
  transformPositionToSeconds,
  transformSecondsToPosition,
} from '@/utils'

const needle = ref(null)
const timeline = ref(null)
const isDragging = ref(false)

const file = computed(() => store.file)
const duration = computed(() => store.videoData?.duration || 0)
const needleSeconds = computed(() => store.needleSeconds || 0)
const formattedNeedleSeconds = computed(() => formatSeconds(needleSeconds.value))
const needlePosition = computed(() => convertSecondsToPosition(needleSeconds.value))

const positionatedTimeRanges = computed(() =>
  store.timeRanges.map(({ start, end, ...rest }) => {
    const left = convertSecondsToPosition(start)
    const width = convertSecondsToPosition(end) - left
    return { ...rest, start, end, left, width }
  })
)

function onUndoClick() {
  undo()
}
function onRedoClick() {
  redo()
}

function onCropClick() {
  cropAtNeedle()
}

function onToggleDeleteClick() {
  toggleDeleteAtNeedle()
}

function convertSecondsToPosition(seconds) {
  return transformSecondsToPosition(seconds, duration.value, timeline.value)
}

function convertPositionToSeconds(position) {
  return transformPositionToSeconds(position, duration.value, timeline.value)
}

onMounted(() => {
  needle.value.addEventListener('mousedown', () => {
    isDragging.value = true
  })

  document.addEventListener('mouseup', () => {
    isDragging.value = false
  })

  document.addEventListener('mousemove', (e) => {
    if (!isDragging.value) return

    const timelineRect = timeline.value.getBoundingClientRect()
    let newLeft = e.clientX - timelineRect.left
    if (newLeft < 0) newLeft = 0
    if (newLeft > timelineRect.width) newLeft = timelineRect.width

    setNeedleSeconds(convertPositionToSeconds(newLeft))
  })
})
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.timeline-container.deactive {
  pointer-events: none;
}

.timeline-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Controls */

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

/* Slices  */

.timeline-slices-container {
  position: relative;
  padding: 24px;
  width: 100%;
  height: 128px;
  border-radius: 8px;
  background-color: #34495e;
}

.timeline-slices {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: #ffffff11;
}

.timeline-slice {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: #ff000044;
}

.timeline-slice.deleted {
  opacity: 50%;
}

/* Needle */

.timeline-needle {
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(-2px);
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
</style>
