export function formatSeconds(value) {
  const seconds = value || 0
  const date = new Date(seconds * 1000)
  return date.toISOString().slice(14, 23) // HH:mm:ss.sss
}
