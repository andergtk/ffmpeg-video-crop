import { defineStore } from 'pinia'

const URL_API = window.URL || window.webkitURL

export const useFileStore = defineStore('file', {
  state: () => ({
    file: null,
  }),

  getters: {
    hasFile: (state) => !!state.file,
    filename: (state) => state.file?.name,
    virtualURL: (state) => state.hasFile ? URL_API.createObjectURL(state.file) : null,
  },

  actions: {
    setFile(file) {
      this.file = file
    },
  },
})
