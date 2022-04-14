function baseFunction<T>(
  values: T[],
  fn: (item: T) => number | string,
): Record<string, T> {
  const next: Record<string, T> = {}
  values.forEach(v => {
    next[fn(v)] = v
  })
  return next
}

export function keyBy<T>(
  values: T[],
  fn: (item: T) => number | string,
): Record<string, T>
export function keyBy<T>(
  fn: (item: T) => number | string,
): (values: T[]) => Record<string, T>
export function keyBy<T>(
  valuesOrFn: T[] | ((item: T) => number | string),
  fn?: (item: T) => number | string,
): Record<string, T> | ((values: T[]) => Record<string, T>) {
  if (!fn) {
    return values =>
      baseFunction(values, valuesOrFn as Extract<typeof valuesOrFn, Function>)
  } else {
    return baseFunction(valuesOrFn as T[], fn)
  }
}
