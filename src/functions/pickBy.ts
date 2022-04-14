function baseFunction<T>(
  values: Record<string, T>,
  fn: (item: T) => unknown,
): Record<string, T> {
  const next: Record<string, T> = {}
  for (const k in values) {
    const v = values[k] as T
    if (fn(v)) {
      next[k] = v
    }
  }
  return next
}

export function pickBy<T, R extends T>(
  values: Record<string, T>,
  fn: (item: T) => item is R,
): Record<string, R>
export function pickBy<T>(
  values: Record<string, T>,
  fn: (item: T) => unknown,
): Record<string, T>
export function pickBy<T, R extends T>(
  fn: (item: T) => item is R,
): (values: Record<string, T>) => Record<string, R>
export function pickBy<T>(
  fn: (item: T) => unknown,
): (values: Record<string, T>) => Record<string, T>
export function pickBy<T>(
  valuesOrFn: Record<string, T> | ((item: T) => unknown),
  fn?: (item: T) => unknown,
): Record<string, T> | ((values: Record<string, T>) => Record<string, T>) {
  if (!fn) {
    return values =>
      baseFunction(values, valuesOrFn as Extract<typeof valuesOrFn, Function>)
  } else {
    return baseFunction(valuesOrFn as Exclude<typeof valuesOrFn, Function>, fn)
  }
}
