const { createApp } = Vue

const app = createApp({
  data() {
    return {
      video: null,
    }
  },
  computed: {
    enableDeleteClip() {
      return false
    },
  },
  methods: {
    onFileUpload(event) {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
        this.video = {
          name: file.name,
          type: file.type,
          url: e.target.result,
        }
      }

      reader.readAsDataURL(file)
    },
  }
})

app.mount('#app')
