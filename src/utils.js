export function createURLFromFile(file) {
  const url = window.URL || window.webkitURL
  return file && url.createObjectURL(file)
}

export function formatSeconds(seconds) {
  const value = normalizeSeconds(seconds || 0)
  const date = new Date(value * 1000)
  return date.toISOString().slice(14, 23) // HH:mm:ss.sss
}

export function normalizeSeconds(number) {
  return Number(number.toFixed(3))
}

export function convertSecondsToRatio(seconds, duration) {
  if (duration) {
    return seconds * 100 / duration
  } else {
    return 0
  }
}

export function convertRatioToSeconds(ratio, duration) {
  if (duration) {
    return ratio * duration / 100
  } else {
    return 0
  }
}

export function clone(value) {
  return JSON.parse(JSON.stringify(value))
}
