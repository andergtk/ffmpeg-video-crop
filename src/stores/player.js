import { defineStore } from 'pinia'
import { useTimelineStore } from '@/stores/timeline'
import { isBetween, normalizeSeconds } from '@/utils'

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
      this.syncNeedle()
      this.checkDeletedTimeRange()
    },

    syncNeedle() {
      const timelineStore = useTimelineStore()

      if (timelineStore.needleSeconds !== this.videoElement.currentTime) {
        timelineStore.updateNeedle(this.videoElement.currentTime)
      }
    },

    checkDeletedTimeRange() {
      if (this.videoElement.paused) return

      const timelineStore = useTimelineStore()
      const { deletedTimeRanges } = timelineStore
      const currentTime = this.videoElement.currentTime

      const newCurrentTime = deletedTimeRanges.reduce((seconds, { start, end }) =>
        isBetween(seconds, start, end) ? end : seconds
      , currentTime)

      if (currentTime !== newCurrentTime) {
        this.videoElement.currentTime = newCurrentTime
      }
    },

    updateCurrentTime(seconds) {
      this.videoElement.currentTime = normalizeSeconds(seconds)
    },
  }
})
