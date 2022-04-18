function baseFunction<T>(
  values: Record<string, T>,
  keys: (number | string)[],
): Record<string, T> {
  const next: Record<string, T> = {}
  keys.forEach(k => {
    if (k in values) {
      const v = values[k] as T
      next[k] = v
    }
  })
  return next
}

export function pick<T>(
  values: Record<string, T>,
  keys: (number | string)[],
): Record<string, T>
export function pick<T>(
  keys: (number | string)[],
): (values: Record<string, T>) => Record<string, T>
export function pick<T>(
  valuesOrKeys: Record<string, T> | (number | string)[],
  keysOrNull?: (number | string)[],
): Record<string, T> | ((values: Record<string, T>) => Record<string, T>) {
  if (!keysOrNull) {
    const keys = valuesOrKeys as Extract<typeof valuesOrKeys, unknown[]>
    return values => baseFunction(values, keys)
  } else {
    const values = valuesOrKeys as Exclude<typeof valuesOrKeys, unknown[]>
    return baseFunction(values, keysOrNull)
  }
}
