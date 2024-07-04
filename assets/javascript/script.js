const { createApp } = Vue

const app = createApp({
  data() {
    return {
      file: null,
      videoInfo: {},
    }
  },

  computed: {
    fileUrl() {
      if (!this.file) return null
      const url = window.URL || window.webkitURL
      return url.createObjectURL(this.file)
    },

    durationToDisplay() {
      return this.secondsToDisplay(this.videoInfo.duration)
    },

    currentTimeToDisplay() {
      return this.secondsToDisplay(this.videoInfo.currentTime)
    },

    enableDeleteClip() {
      return false
    },
  },

  methods: {
    onFileUpload(event) {
      this.file = event.target.files[0]
    },

    onVideoTimeUpdate(event) {
      this.videoInfo = {
        duration: event.target.duration,
        currentTime: event.target.currentTime,
      }
    },

    secondsToDisplay(seconds = 0) {
      return new Date(seconds * 1000).toISOString().slice(14, 23)
    },
  },
})

app.mount('#app')
