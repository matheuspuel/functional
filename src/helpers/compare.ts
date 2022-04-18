export function compare(a: unknown, b: unknown) {
  if (a === b) return 0
  if (a === undefined || b === undefined) {
    return a !== undefined ? 1 : -1
  }
  if (a === null || b === null) {
    return a !== null ? 1 : -1
  }
  if (typeof a === 'boolean' || typeof b === 'boolean') {
    return typeof a !== 'boolean'
      ? 1
      : typeof b !== 'boolean'
      ? -1
      : a < b
      ? -1
      : 1
  }
  if (
    typeof a === 'number' ||
    typeof a === 'bigint' ||
    a instanceof Date ||
    typeof b === 'number' ||
    typeof b === 'bigint' ||
    b instanceof Date
  ) {
    return !(
      typeof a === 'number' ||
      typeof a === 'bigint' ||
      a instanceof Date
    )
      ? 1
      : !(typeof b === 'number' || typeof b === 'bigint' || b instanceof Date)
      ? -1
      : a < b
      ? -1
      : a > b
      ? 1
      : 0
  }
  if (typeof a === 'string' || typeof b === 'string') {
    return typeof a !== 'string'
      ? 1
      : typeof b !== 'string'
      ? -1
      : a < b
      ? -1
      : a > b
      ? 1
      : 0
  }
  if (Array.isArray(a) && Array.isArray(b)) {
  }
  return 0
}
