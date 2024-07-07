import { defineStore } from 'pinia'
import { usePlayerStore } from '@/stores/player'
import { clone, formatSeconds, normalizeSeconds } from '@/utils'

export const useTimelineStore = defineStore('timeline', {
  state: () => ({
    timeRanges: [],
    duration: 0,
    needleSeconds: 0,

    undoStack: [],
    redoStack: [],
  }),

  getters: {
    canUndo: (state) => state.undoStack.length > 0,
    canRedo: (state) => state.redoStack.length > 0,
    canCrop: (state) => state.timeRangeIndexAtSecond(state.needleSeconds) !== -1,
    canToggleDelete: (state) => state.timeRangeIndexAtSecond(state.needleSeconds) !== -1,

    displayNeedleSeconds: (state) => formatSeconds(state.needleSeconds),
  },

  actions: {
    init({ duration }) {
      this.duration = normalizeSeconds(duration)
      this.setTimeRanges([{ start: 0, end: this.duration }])
      this.updateNeedle(0)
      this.clearHistory()
    },

    updateNeedle(seconds) {
      this.needleSeconds = normalizeSeconds(seconds)
    },

    syncNeedle(seconds) {
      this.updateNeedle(seconds)

      const playerStore = usePlayerStore()
      playerStore.updateCurrentTime(this.needleSeconds)
    },

    // Time Ranges

    setTimeRanges(timeRanges = []) {
      this.saveHistory()
      this.timeRanges = timeRanges.map(this.normalizeTimeRange)
    },

    normalizeTimeRange({ start, end, deleted }) {
      return ({
        start: normalizeSeconds(start),
        end: normalizeSeconds(end),
        deleted: !!deleted,
      })
    },

    timeRangeIndexAtSecond(seconds) {
      return this.timeRanges.findIndex(({ start, end }) =>
        start < seconds && end > seconds
      )
    },

    // Crop

    cropAtNeedle() {
      this.cropAtSecond(this.needleSeconds)
    },

    cropAtSecond(seconds) {
      const index = this.timeRangeIndexAtSecond(seconds)

      if (index === -1) return

      const timeRangesClone = clone(this.timeRanges)
      const currentTimeRange = timeRangesClone[index]
      const { start, end, ...rest } = currentTimeRange
      const leftTimeRange = { ...rest, start, end: seconds - 0.001 }
      const rightTimeRange = { ...rest, start: seconds, end }
      timeRangesClone.splice(index, 1, leftTimeRange, rightTimeRange)

      this.setTimeRanges(timeRangesClone)
    },

    // Delete

    toggleDeleteAtNeedle() {
      this.toggleDeleteAtSecond(this.needleSeconds)
    },

    toggleDeleteAtSecond(seconds) {
      const index = this.timeRangeIndexAtSecond(seconds)

      if (index === -1) return

      const timeRangesClone = this.timeRanges.slice()
      const currentTimeRange = timeRangesClone[index]
      currentTimeRange.deleted = !currentTimeRange.deleted

      this.setTimeRanges(timeRangesClone)
    },

    // History

    clearHistory() {
      this.undoStack = []
      this.redoStack = []
    },

    saveHistory() {
      if (this.timeRanges.length === 0) return

      this.undoStack.push(clone(this.timeRanges))
      this.redoStack = []
    },

    undo() {
      if (!this.canUndo) return

      this.redoStack.push(clone(this.timeRanges))
      this.timeRanges = this.undoStack.pop()
    },

    redo() {
      if (!this.canRedo) return

      this.undoStack.push(clone(this.timeRanges))
      this.timeRanges = this.redoStack.pop()
    },
  }
})
