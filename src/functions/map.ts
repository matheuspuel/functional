export function map<T, R>(values: T[], fn: (item: T) => R): R[]
export function map<T, R>(fn: (item: T) => R): (values: T[]) => R[]
export function map<T, R>(
  valuesOrFn: T[] | ((item: T) => R),
  fn?: (item: T) => R,
): R[] | ((values: T[]) => R[]) {
  if (!fn) {
    return values => values.map(valuesOrFn as (item: T) => R)
  } else {
    return (valuesOrFn as T[]).map(fn)
  }
}
