function baseFunction<T>(
  values: T[],
  fn: (item: T) => number | string,
): Record<string, T[]> {
  const next: Record<string, T[]> = {}
  values.forEach(v => {
    const k = fn(v)
    next[k] = [...(next[k] || []), v]
  })
  return next
}

export function groupBy<T>(
  values: T[],
  fn: (item: T) => number | string,
): Record<string, T[]>
export function groupBy<T>(
  fn: (item: T) => number | string,
): (values: T[]) => Record<string, T[]>
export function groupBy<T>(
  valuesOrFn: T[] | ((item: T) => number | string),
  fn?: (item: T) => number | string,
): Record<string, T[]> | ((values: T[]) => Record<string, T[]>) {
  if (!fn) {
    return values =>
      baseFunction(values, valuesOrFn as Extract<typeof valuesOrFn, Function>)
  } else {
    return baseFunction(valuesOrFn as T[], fn)
  }
}
