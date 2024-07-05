import { reactive } from 'vue'

export const store = reactive({
  file: null,
  video: null,
  videoData: null,

  needleSeconds: 0,
})

export function loadFile(file) {
  store.file = file
}

export function registerVideoElement(video) {
  store.video = video
  video.addEventListener('timeupdate', () => loadVideoData(video))
  video.addEventListener('durationchange', () => loadVideoData(video))
}

export function loadVideoData(video) {
  const {
    duration,
    currentTime,
  } = video

  store.videoData = {
    duration,
    currentTime,
  }
}

export function setNeedleSeconds(seconds) {
  store.needleSeconds = seconds
}
