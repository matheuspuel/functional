function baseFunction<T>(values: T[], fn: (item: T) => unknown): T | undefined {
  return values.find(fn)
}

export function find<T, R extends T>(
  values: T[],
  fn: (item: T) => item is R,
): R | undefined
export function find<T>(values: T[], fn: (item: T) => unknown): T | undefined
export function find<T, R extends T>(
  fn: (item: T) => item is R,
): (values: T[]) => R | undefined
export function find<T>(
  fn: (item: T) => unknown,
): (values: T[]) => T | undefined
export function find<T>(
  valuesOrFn: T[] | ((item: T) => unknown),
  fn?: (item: T) => unknown,
): T | undefined | ((values: T[]) => T | undefined) {
  if (!fn) {
    return values =>
      baseFunction(values, valuesOrFn as Extract<typeof valuesOrFn, Function>)
  } else {
    return baseFunction(valuesOrFn as Exclude<typeof valuesOrFn, Function>, fn)
  }
}
