function baseFunction<T>(values: T[], fn: (item: T) => unknown): T[] {
  return values.filter(fn)
}

export function filter<T, R extends T>(
  values: T[],
  fn: (item: T) => item is R,
): R[]
export function filter<T>(values: T[], fn: (item: T) => unknown): T[]
export function filter<T, R extends T>(
  fn: (item: T) => item is R,
): (values: T[]) => R[]
export function filter<T>(fn: (item: T) => unknown): (values: T[]) => T[]
export function filter<T>(
  valuesOrFn: T[] | ((item: T) => unknown),
  fn?: (item: T) => unknown,
): T[] | ((values: T[]) => T[]) {
  if (!fn) {
    return values =>
      baseFunction(values, valuesOrFn as Extract<typeof valuesOrFn, Function>)
  } else {
    return baseFunction(valuesOrFn as Exclude<typeof valuesOrFn, Function>, fn)
  }
}
