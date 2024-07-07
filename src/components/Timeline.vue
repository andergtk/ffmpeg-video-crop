<template>
  <div class="timeline-container" :class="{ deactive: !fileStore.hasFile }">
    <div class="timeline-controls-container">
      <div class="timeline-controls-left">
        <button class="timeline-control undo" :disabled="!timelineStore.canUndo" @click="onUndoClick">
          <font-awesome-icon icon="fas fa-undo" />
        </button>
        <button class="timeline-control redo" :disabled="!timelineStore.canRedo" @click="onRedoClick">
          <font-awesome-icon icon="fas fa-redo" />
        </button>
        <button class="timeline-control crop" :disabled="!timelineStore.canCrop" @click="onCropClick">
          <font-awesome-icon icon="fas fa-scissors" />
          Crop
        </button>
        <div class="timeline-control-divider"></div>
        <button class="timeline-control delete" :disabled="!timelineStore.canToggleDelete" @click="onToggleDeleteClick">
          <font-awesome-icon icon="fas fa-trash" />
        </button>
      </div>

      <div class="timeline-controls-right">
        <button class="timeline-control save" :disabled="true">
          <font-awesome-icon icon="fas fa-save" size="lg" />
          Save
        </button>
      </div>
    </div>

    <div class="timeline-slices-container">
      <div class="timeline-inner" ref="timeline">
        <div class="timeline-slices">
          <div class="timeline-slice" v-for="timeRange in positionatedTimeRanges"
            :class="{ deleted: timeRange.deleted }" :style="`left: ${timeRange.left}%; width: ${timeRange.width}%;`">
          </div>
        </div>
        <div class="timeline-needle" ref="needle" :style="`left: ${needlePosition}%;`">
          <div class="timeline-needle-label">
            {{ timelineStore.displayNeedleSeconds }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useFileStore } from '@/stores/file'
import { useTimelineStore } from '@/stores/timeline'
import { convertRatioToSeconds, convertSecondsToRatio } from '@/utils'

const needle = ref(null)
const timeline = ref(null)
const isDragging = ref(false)

const fileStore = useFileStore()
const timelineStore = useTimelineStore()

const needlePosition = computed(() => convertSecondsToRatio(timelineStore.needleSeconds, timelineStore.duration))

const positionatedTimeRanges = computed(() =>
  timelineStore.timeRanges.map(({ start, end, ...rest }) => {
    const left = convertSecondsToRatio(start, timelineStore.duration)
    const width = convertSecondsToRatio(end, timelineStore.duration) - left
    return { ...rest, start, end, left, width }
  })
)

function onUndoClick() {
  timelineStore.undo()
}
function onRedoClick() {
  timelineStore.redo()
}

function onCropClick() {
  timelineStore.cropAtNeedle()
}

function onToggleDeleteClick() {
  timelineStore.toggleDeleteAtNeedle()
}

function handleTimelineMouseEvent(event) {
  const rect = timeline.value.getBoundingClientRect()
  let newLeft = event.clientX - rect.left
  if (newLeft < 0) newLeft = 0
  if (newLeft > rect.width) newLeft = rect.width
  const ratio = newLeft * 100 / rect.width
  const seconds = convertRatioToSeconds(ratio, timelineStore.duration)
  timelineStore.syncNeedle(seconds)
}

onMounted(() => {
  timeline.value.addEventListener('click', event => {
    handleTimelineMouseEvent(event)
  })

  timeline.value.addEventListener('mousedown', () => {
    isDragging.value = true
  })

  document.addEventListener('mouseup', () => {
    isDragging.value = false
  })

  document.addEventListener('mousemove', event => {
    if (isDragging.value) {
      handleTimelineMouseEvent(event)
    }
  })
})
</script>

<style scoped lang="scss">
.timeline-container {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &.deactive {
    pointer-events: none;
  }
}

.timeline-inner {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Controls */

.timeline-controls-container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
}

.timeline-controls-left,
.timeline-controls-right {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.timeline-control {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 16px;
  height: 48px;
  min-width: 48px;
  border-radius: 8px;
  background-color: #34495e;
  color: #fff;

  &.delete {
    color: #e66767;
  }

  &.save {
    background-color: #2ecc71;
    font-size: 18px;
    font-weight: bold;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 50%;
  }

  &:hover:not([disabled]) {
    background-color: #3c5267;
  }
}

.timeline-control-divider {
  margin: 0 8px;
  height: 48x;
  width: 1px;
  background-color: #34495e;
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
  border-radius: 8px;
  background-color: #3c5267;
}

.timeline-slice {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e66767;

  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:not(:last-child)::after {
    z-index: 1;
    content: ' ';
    position: absolute;
    top: 0;
    right: -1px;
    height: 100%;
    border-left: 2px dotted #ffffff7F;
  }

  &.deleted {
    background-color: #e667677F;
  }
}

/* Needle */

.timeline-needle {
  cursor: pointer;
  position: absolute;
  top: -2px;
  left: 0;
  transform: translateX(-2px);
  height: calc(100% + 2px + 24px);
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
  background-color: #fff;
  color: #2c3e50;
  font-size: 14px;
  font-weight: bold;
}
</style>
