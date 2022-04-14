function baseFunction<T, R>(
  values: Record<string, T>,
  fn: (item: T) => R,
): Record<string, R> {
  const next: Record<string, R> = {}
  for (const k in values) {
    next[k] = fn(values[k] as T)
  }
  return next
}

export function mapValues<T, R>(
  values: Record<string, T>,
  fn: (item: T) => R,
): Record<string, R>
export function mapValues<T, R>(
  fn: (item: T) => R,
): (values: Record<string, T>) => Record<string, R>
export function mapValues<T, R>(
  valuesOrFn: Record<string, T> | ((item: T) => R),
  fn?: (item: T) => R,
): Record<string, R> | ((values: Record<string, T>) => Record<string, R>) {
  if (!fn) {
    return values => baseFunction(values, valuesOrFn as (item: T) => R)
  } else {
    return baseFunction(valuesOrFn as Record<string, T>, fn)
  }
}
