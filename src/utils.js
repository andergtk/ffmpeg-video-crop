export function createURLFromFile(file) {
  const url = window.URL || window.webkitURL
  return file && url.createObjectURL(file)
}

export function formatSeconds(seconds) {
  const value = seconds || 0
  const date = new Date(value * 1000)
  return date.toISOString().slice(14, 23) // HH:mm:ss.sss
}

export function transformSecondsToPosition(seconds, duration, container) {
  if (!duration || !container) return 0
  const { width } = container.getBoundingClientRect()
  return normalizeSeconds(seconds * width / duration)
}

export function transformPositionToSeconds(position, duration, container) {
  if (!duration || !container) return 0
  const { width } = container.getBoundingClientRect()
  return normalizeSeconds(position * duration / width)
}

export function normalizeSeconds(number) {
  return Number(number.toFixed(3))
}
