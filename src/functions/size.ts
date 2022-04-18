export function size(values: unknown[] | object) {
  return Array.isArray(values) ? values.length : Object.keys(values).length
}
