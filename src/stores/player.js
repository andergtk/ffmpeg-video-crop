import { defineStore } from 'pinia'
import { useTimelineStore } from '@/stores/timeline'
import { normalizeSeconds } from '@/utils'

export const usePlayerStore = defineStore('player', {
  state: () => ({
    videoElement: null,
  }),

  actions: {
    registerElement(videoElement) {
      this.videoElement = videoElement
      this.videoElement.addEventListener('loadeddata', this.handleLoadedData)
      this.videoElement.addEventListener('emptied', this.handleEmptied)
      this.videoElement.addEventListener('timeupdate', this.handleTimeUpdate)
    },

    handleLoadedData() {
      const timelineStore = useTimelineStore()
      timelineStore.init({ duration: this.videoElement.duration })
    },

    handleEmptied() {
      const timelineStore = useTimelineStore()
      timelineStore.reset()
    },

    handleTimeUpdate() {
      const timelineStore = useTimelineStore()

      if (this.videoElement.currentTime !== timelineStore.needleSeconds) {
        timelineStore.updateNeedle(this.videoElement.currentTime)
      }
    },

    updateCurrentTime(seconds) {
      this.videoElement.currentTime = normalizeSeconds(seconds)
    },
  }
})
