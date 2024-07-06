import { computed, reactive } from 'vue'
import { clone, normalizeSeconds } from '@/utils'

export const store = reactive({
  file: null,
  video: null,
  videoData: null,

  needleSeconds: 0,
  timeRanges: [],

  undoStack: [],
  redoStack: [],
})

// Computeds

export const canUndo = computed(() => store.undoStack.length > 0)
export const canRedo = computed(() => store.redoStack.length > 0)
export const canCrop = computed(() => {
  const { currentTime, duration } = store.videoData || {}

  if (currentTime < 0 || currentTime > duration) {
    return false
  }

  const timeRangeIndex = timeRangeIndexAtNeedle()

  if (timeRangeIndex === -1) {
    return false
  }

  return true
})

// File Input

export function loadFile(file) {
  store.file = file
}

// Video Element

export function registerVideoElement(video) {
  store.video = video
  video.addEventListener('timeupdate', () => loadVideoData(video))
  video.addEventListener('durationchange', () => {
    loadVideoData(video)
    resetTimeRanges()
  })
}

export function loadVideoData(video) {
  const duration = normalizeSeconds(video.duration)
  const currentTime = normalizeSeconds(video.currentTime)

  store.videoData = {
    duration,
    currentTime,
  }

  if (store.needleSeconds !== currentTime) {
    store.needleSeconds = currentTime
  }
}

// Time Ranges

export function resetTimeRanges() {
  clearHistory()
  setTimeRanges([{ start: 0, end: store.videoData.duration }])
}

export function setTimeRanges(timeRanges = []) {
  saveHistory()
  store.timeRanges = timeRanges.map(normalizeTimeRange)
}

export function normalizeTimeRange({ start, end, deleted }) {
  return ({
    start: normalizeSeconds(start),
    end: normalizeSeconds(end),
    deleted: !!deleted,
  })
}

export function timeRangeIndexAtNeedle() {
  return timeRangeIndexAtSecond(store.needleSeconds)
}

export function timeRangeIndexAtSecond(seconds) {
  return store.timeRanges.findIndex(({ start, end }) =>
    start < seconds && end > seconds
  )
}

// Crop

export function cropAtNeedle() {
  cropAtSecond(store.needleSeconds)
}

export function cropAtSecond(seconds) {
  const index = timeRangeIndexAtSecond(seconds)
  if (index === -1) return

  const timeRangesClone = clone(store.timeRanges)
  const currentTimeRange = timeRangesClone[index]
  const { start, end, ...rest } = currentTimeRange
  const leftTimeRange = { ...rest, start, end: seconds - 0.001 }
  const rightTimeRange = { ...rest, start: seconds, end }
  timeRangesClone.splice(index, 1, leftTimeRange, rightTimeRange)

  setTimeRanges(timeRangesClone)
}

// Delete Slice

export function toggleDeleteAtNeedle() {
  toggleDeleteAtSecond(store.needleSeconds)
}

export function toggleDeleteAtSecond(seconds) {
  const index = timeRangeIndexAtSecond(seconds)
  if (index === -1) return

  const timeRangesClone = clone(store.timeRanges)
  const currentTimeRange = timeRangesClone[index]
  currentTimeRange.deleted = !currentTimeRange.deleted

  setTimeRanges(timeRangesClone)
}

// Needle

export function setNeedleSeconds(seconds) {
  store.needleSeconds = normalizeSeconds(seconds)

  if (store.video.currentTime !== store.needleSeconds) {
    store.video.currentTime = store.needleSeconds
  }
}

// History

export function clearHistory() {
  store.undoStack = []
  store.redoStack = []
}

export function saveHistory() {
  if (store.timeRanges.length === 0) return
  store.undoStack.push(clone(store.timeRanges))
  store.redoStack = []
}

export function undo() {
  const current = clone(store.timeRanges)
  store.redoStack.push(current)

  const top = store.undoStack.pop()
  store.timeRanges = top
}

export function redo() {
  const current = clone(store.timeRanges)
  store.undoStack.push(current)

  const top = store.redoStack.pop()
  store.timeRanges = top
}
