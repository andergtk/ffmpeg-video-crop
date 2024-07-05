import { reactive } from 'vue'

export const store = reactive({
  file: null,
  videoInfo: null,

  setFile(file) {
    this.file = file
  },

  loadVideoInfoFromElement(videoElement) {
    if (!videoElement) {
      this.videoInfo = null
      return
    }

    const {
      duration,
      currentTime,
    } = videoElement

    this.videoInfo = {
      duration,
      currentTime,
    }
  }
})
