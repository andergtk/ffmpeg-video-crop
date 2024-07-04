const { createApp } = Vue

const app = createApp({
  data() {
    return {
      file: null,
    }
  },
  computed: {
    videoUrl() {
      if (!this.file) return null
      const url = window.URL || window.webkitURL
      return url.createObjectURL(this.file)
    },
    enableDeleteClip() {
      return false
    },
  },
  methods: {
    onFileUpload(event) {
      this.file = event.target.files[0]
    },
  }
})

app.mount('#app')
