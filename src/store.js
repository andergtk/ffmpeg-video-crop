import { reactive } from 'vue'
import { normalizeSeconds } from '@/utils'

export const store = reactive({
  file: null,
  video: null,
  videoData: null,

  needleSeconds: 0,
  timeRanges: [],
})

export function loadFile(file) {
  store.file = file
}

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

export function resetTimeRanges() {
  setTimeRanges([{
    start: 0,
    end: store.videoData.duration,
    deleted: false,
  }])
}

export function setTimeRanges(timeRanges = []) {
  store.timeRanges = timeRanges.map(({ start, end, ...rest }) => ({
    ...rest,
    start: normalizeSeconds(start),
    end: normalizeSeconds(end),
  }))
}

export function cropAtNeedle() {
  cropAtSecond(store.needleSeconds)
}

export function cropAtSecond(seconds) {
  const index = timeRangeIndexAtSecond(seconds)
  if (index === -1) return

  const timeRangesClone = [...store.timeRanges]
  const currentTimeRange = timeRangesClone[index]
  const { start, end, ...rest } = currentTimeRange
  const leftTimeRange = { ...rest, start, end: seconds - 0.001 }
  const rightTimeRange = { ...rest, start: seconds, end }
  timeRangesClone.splice(index, 1, leftTimeRange, rightTimeRange)

  setTimeRanges(timeRangesClone)
}

export function toggleDeleteAtNeedle() {
  toggleDeleteAtSecond(store.needleSeconds)
}

export function toggleDeleteAtSecond(seconds) {
  const index = timeRangeIndexAtSecond(seconds)
  if (index === -1) return
  const timeRangesClone = [...store.timeRanges]
  const currentTimeRange = timeRangesClone[index]
  currentTimeRange.deleted = !currentTimeRange.deleted
  setTimeRanges(timeRangesClone)
}

export function timeRangeIndexAtNeedle() {
  return timeRangeIndexAtSecond(store.needleSeconds)
}

export function timeRangeIndexAtSecond(seconds) {
  return store.timeRanges.findIndex(({ start, end }) =>
    start < seconds && end > seconds
  )
}

export function setNeedleSeconds(seconds) {
  store.needleSeconds = normalizeSeconds(seconds)

  if (store.video.currentTime !== store.needleSeconds) {
    store.video.currentTime = store.needleSeconds
  }
}
