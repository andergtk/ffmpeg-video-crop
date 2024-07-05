export function createURLFromFile(file) {
  const url = window.URL || window.webkitURL
  return file && url.createObjectURL(file)
}

export function formatSeconds(seconds) {
  const value = seconds || 0
  const date = new Date(value * 1000)
  return date.toISOString().slice(14, 23) // HH:mm:ss.sss
}
