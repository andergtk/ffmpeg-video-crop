<template>
  <div class="page-container">
    <h1 class="page-title">FFmpeg Video Crop</h1>

    <label class="upload-container" :class="{ success: !!file }">
      <span class="upload-label">
        {{ file?.name || 'Select media (.mp4, .avi, .webm, etc)' }}
      </span>
      <input type="file" class="upload-input" @change="onFileUpload">
    </label>

    <div class="player">
      <video controls ref="video" @timeupdate="onVideoTimeUpdate">
        <source :src="fileUrl" v-if="fileUrl" />
      </video>
    </div>

    <div class="timeline-container">
      <div class="timeline-controls-container">
        <button class="timeline-control timeline-undo">
          <i class="fas fa-undo fa-fw"></i>
        </button>
        <button class="timeline-control timeline-redo">
          <i class="fas fa-redo fa-fw"></i>
        </button>
        <button class="timeline-control timeline-crop">
          <i class="fas fa-scissors fa-fw"></i>
          Crop
        </button>
        <div class="timeline-control-divider"></div>
        <button class="timeline-control timeline-delete" :disabled="!enableDeleteClip">
          <i class="fas fa-trash fa-fw"></i>
        </button>
      </div>
      <div class="timeline-slices-container">
        <div class="timeline-slices"></div>
        <div class="timeline-needle">
          <div class="timeline-needle-label">
            {{ currentTimeToDisplay }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}
</script>
