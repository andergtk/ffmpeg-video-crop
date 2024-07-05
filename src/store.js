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

export function resetTimeRanges() {
  store.timeRanges = [{
    start: 0,
    end: store.videoData.duration,
  }]
}

export function setTimeRanges(timeRanges = []) {
  store.timeRanges = timeRanges.map(({ start, end }) => ({
    start: normalizeSeconds(start),
    end: normalizeSeconds(end),
  }))
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

export function setNeedleSeconds(seconds) {
  store.needleSeconds = normalizeSeconds(seconds)

  if (store.video.currentTime !== store.needleSeconds) {
    store.video.currentTime = store.needleSeconds
  }
}
