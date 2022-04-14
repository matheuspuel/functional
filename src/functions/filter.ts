export function filter<T>(values: T[], fn: (item: T) => unknown): T[]
export function filter<T>(fn: (item: T) => unknown): (values: T[]) => T[]
export function filter<T>(
  valuesOrFn: T[] | ((item: T) => unknown),
  fn?: (item: T) => unknown,
): T[] | ((values: T[]) => T[]) {
  if (!fn) {
    return values => values.filter(valuesOrFn as (item: T) => unknown)
  } else {
    return (valuesOrFn as T[]).filter(fn)
  }
}
