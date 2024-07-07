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

      const timelineStore = useTimelineStore()

      videoElement.addEventListener('durationchange', () => {
        timelineStore.init({ duration: videoElement.duration })
      })

      videoElement.addEventListener('timeupdate', () => {
        if (videoElement.currentTime !== timelineStore.needleSeconds) {
          timelineStore.updateNeedle(videoElement.currentTime)
        }
      })
    },

    updateCurrentTime(seconds) {
      this.videoElement.currentTime = normalizeSeconds(seconds)
    },
  }
})
