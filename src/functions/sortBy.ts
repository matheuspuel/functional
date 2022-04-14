function baseFunction<T>(values: T[], fn: (item: T) => unknown): T[] {
  return values.sort((oa, ob) => {
    const a = (fn(oa) ?? '') + ''
    const b = (fn(ob) ?? '') + ''
    return a < b ? -1 : a > b ? 1 : 0
  })
}

export function sortBy<T>(values: T[], fn: (item: T) => unknown): T[]
export function sortBy<T>(fn: (item: T) => unknown): (values: T[]) => T[]
export function sortBy<T>(
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
