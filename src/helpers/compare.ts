const isUndefined = (value: unknown): value is undefined => value === undefined

const isNull = (value: unknown): value is null => value === null

const isBoolean = (value: unknown): value is boolean =>
  typeof value === 'boolean' || value instanceof Boolean

const isNumeric = (value: unknown): value is number | bigint | Date =>
  typeof value === 'number' ||
  value instanceof Number ||
  typeof value === 'bigint' ||
  value instanceof Date

const isString = (value: unknown): value is string =>
  typeof value === 'string' || value instanceof String

const simpleCompare = (a: any, b: any) => (a < b ? -1 : a > b ? 1 : 0)

export function compare(a: unknown, b: unknown) {
  if (a === b) return 0
  for (let fn of [isUndefined, isNull, isBoolean, isNumeric, isString]) {
    if (fn(a) || fn(b)) {
      return !fn(a) ? 1 : !fn(b) ? -1 : simpleCompare(a, b)
    }
  }
  return 0
}
