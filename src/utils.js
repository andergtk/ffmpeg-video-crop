/**
 * Convert seconds to time format (HH:mm:ss.ss)
 *
 * @param {number} seconds
 * @returns {string}
 */
export function formatSeconds(seconds) {
  const value = normalizeSeconds(seconds || 0)
  const date = new Date(value * 1000)
  return date.toISOString().slice(11, 22)
}

/**
 * Normalize seconds to 3 decimal places
 *
 * @param {number} number
 * @returns {number}
 */
export function normalizeSeconds(number) {
  return Number(number.toFixed(3))
}

/**
 * Convert seconds to ratio
 *
 * E.g. 10 seconds out of 100 seconds is 10%
 *
 * @param {number} seconds
 * @param {number} duration
 * @returns {number}
 */
export function convertSecondsToRatio(seconds, duration) {
  return duration ? seconds * 100 / duration : 0
}

/**
 * Convert ratio to seconds
 *
 * E.g. 10% of 100 seconds is 10 seconds
 *
 * @param {number} ratio
 * @param {number} duration 
 * @returns {number}
 */
export function convertRatioToSeconds(ratio, duration) {
  return duration ? ratio * duration / 100 : 0
}

/**
 * Deep clone an object
 *
 * @param {T} value
 * @returns {T}
 */
export function clone(value) {
  return JSON.parse(JSON.stringify(value))
}
